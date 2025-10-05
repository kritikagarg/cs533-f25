#!/bin/bash
set -euo pipefail

IN="sites.txt"
OUT_DIR="responses"
SITE_SUM="site_summary.csv"
COOKIES_CSV="cookies.csv"

mkdir -p "$OUT_DIR"

# CSV headers
echo "site,final_status,num_cookies" > "$SITE_SUM"
echo "site,cookie_name,secure,httponly,samesite,path" > "$COOKIES_CSV"

line_no=0
# Read sites.txt line by line
while IFS= read -r raw || [ -n "$raw" ]; do
  # strip comments/whitespace
  site=$(echo "$raw" | sed 's/#.*$//' | xargs)
  [ -z "$site" ] && continue
  line_no=$((line_no+1))

  # normalize
  if [[ "$site" != http*://* ]]; then
    url="https://$site"
  else
    url="$site"
  fi

  tag=$(echo "$site" | sed 's#[^A-Za-z0-9._-]#_#g')
  out="$OUT_DIR/$tag.txt"

  echo "[$line_no] Checking $url ..."
  # headers only, follow redirects, silent, allow bad certs
  curl -ILsk "$url" -o /dev/null -D - > "$out" || true

  # LAST HTTP status in the chain
  final_status=$(grep -E "^HTTP/(1\.1|2|3)" "$out" | tail -n1 | awk '{print $2}')

  # Count cookies across the whole chain
  num_cookies=$(grep -ci "^Set-Cookie:" "$out" || true)
  echo "$site,$final_status,$num_cookies" >> "$SITE_SUM"

  # Parse each Set-Cookie line
  grep -i "^Set-Cookie:" "$out" | sed 's/^Set-Cookie:[[:space:]]*//I' | \
  while IFS= read -r sc; do
    # cookie name
    cname=$(echo "$sc" | awk -F'=' '{print $1}' | tr -d ' ')
    # attributes (case-insensitive)
    echo "$sc" | grep -qi ';[[:space:]]*Secure'   && secure=1   || secure=0
    echo "$sc" | grep -qi ';[[:space:]]*HttpOnly' && httponly=1 || httponly=0
    samesite=$(echo "$sc" | grep -oi 'SameSite=[^;]*' | head -n1 | cut -d= -f2)
    [ -z "${samesite:-}" ] && samesite="(none)"
    case "$(echo "$samesite" | tr '[:upper:]' '[:lower:]')" in
      strict) samesite="Strict" ;;
      lax)    samesite="Lax" ;;
      none)   samesite="None" ;;
    esac
    