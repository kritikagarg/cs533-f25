#!/bin/bash
set -euo pipefail

IN="sites.txt"
OUT_DIR="responses"
SITE_SUM="site_summary.csv"
COOKIES_CSV="cookies.csv"

mkdir -p "$OUT_DIR"

# CSV headers (overwrite each run)
echo "site,final_status,num_cookies" > "$SITE_SUM"
echo "site,cookie_name,secure,httponly,samesite,path" > "$COOKIES_CSV"

line_no=0
while IFS= read -r raw || [ -n "$raw" ]; do
  # clean line
  site=$(echo "$raw" | sed 's/#.*$//' | xargs)
  [ -z "$site" ] && continue
  line_no=$((line_no+1))

  # ensure URL has scheme
  if [[ "$site" != http*://* ]]; then
    url="https://$site"
  else
    url="$site"
  fi

  tag=$(echo "$site" | sed 's#[^A-Za-z0-9._-]#_#g')
  out="$OUT_DIR/$tag.txt"

  echo "[+] Checking $site ..."
  # headers only, follow redirects, silent, allow bad certs
  # write the entire redirect-chain headers to $out
  curl -ILsk "$url" -o /dev/null -D - > "$out" || true

  # last HTTP status seen
  final_status=$(grep -E "^HTTP/(1\.1|2|3)" "$out" | tail -n1 | awk '{print $2}')

  # total Set-Cookie lines across chain
  num_cookies=$(grep -ci "^Set-Cookie:" "$out" || true)
  echo "$site,${final_status:-N/A},$num_cookies" >> "$SITE_SUM"

  # parse each cookie line → cookies.csv
  grep -i "^Set-Cookie:" "$out" | sed 's/^Set-Cookie:[[:space:]]*//I' | \
  while IFS= read -r sc; do
    cname=$(echo "$sc" | awk -F'=' '{print $1}' | tr -d ' ')
    echo "$sc" | grep -qi ';[[:space:]]*Secure'   && secure=1   || secure=0
    echo "$sc" | grep -qi ';[[:space:]]*HttpOnly' && httponly=1 || httponly=0
    samesite=$(echo "$sc" | grep -oi 'SameSite=[^;]*' | head -n1 | cut -d= -f2)
    [ -z "${samesite:-}" ] && samesite="(none)"
    case "$(echo "$samesite" | tr '[:upper:]' '[:lower:]')" in
      strict) samesite="Strict" ;;
      lax)    samesite="Lax" ;;
      none)   samesite="None" ;;
    esac
    path=$(echo "$sc" | grep -oi 'Path=[^;]*' | head -n1 | cut -d= -f2)
    [ -z "${path:-}" ] && path="(none)"
    printf "%s,%s,%s,%s,%s,%s\n" \
      "$site" "$cname" "$secure" "$httponly" "$samesite" "$path" >> "$COOKIES_CSV"
  done

  echo "[#] $site → status ${final_status:-N/A}, cookies $num_cookies"
done < "$IN"

echo "✅ Done. Wrote $SITE_SUM and $COOKIES_CSV; raw headers in $OUT_DIR/"


