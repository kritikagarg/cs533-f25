#!/usr/bin/env bash
# header_check.sh <sites.txt> -> outputs framability.csv
set -euo pipefail
SITES=${1:-sites.txt}
OUT=framability_headers.csv
echo "site,final_status,x_frame_options,frame_ancestors,framable_guess" > $OUT
while IFS= read -r site || [ -n "$site" ]; do
  site=$(echo "$site" | tr -d '\r' | sed 's/^[[:space:]]*//;s/[[:space:]]*$//')
  [ -z "$site" ] && continue
  tmp=$(mktemp)
  # Use HEAD (-I) follow redirects (-L), insecure (-k)
  curl -ILsk --max-time 20 "https://${site}" > $tmp 2>/dev/null || true
  # Extract final status code
  final=$(grep -iE '^HTTP/' "$tmp" | tail -1 | awk '{print $2}' || echo "N/A")
  xfo=$(grep -i '^X-Frame-Options:' "$tmp" | tail -1 | sed 's/^X-Frame-Options:[[:space:]]*//I' | tr -d '\r' || echo "")
  csp=$(grep -i '^Content-Security-Policy:' "$tmp" | tr -d '\r' | tail -1 | sed 's/^Content-Security-Policy:[[:space:]]*//I' || echo "")
  # try to find frame-ancestors directive inside CSP
  fa=$(echo "$csp" | sed -n 's/.*frame-ancestors\s\+\([^;]*\).*/\1/p' || echo "")
  # crude heuristics to guess framable:
  # If X-Frame-Options present and not "ALLOWALL" or if frame-ancestors present and not include *, guess not framable
  guess="unknown"
  if [ -n "$xfo" ]; then
    # DENY or SAMEORIGIN => not framable
    if echo "$xfo" | grep -qiE 'DENY|SAMEORIGIN'; then guess="not_framable"; else guess="maybe_framable"; fi
  elif [ -n "$fa" ]; then
    # If fa contains 'none' or host mismatch -> not framable
    if echo "$fa" | grep -qi 'none'; then guess="not_framable"; else guess="maybe_framable"; fi
  else
    guess="likely_framable"
  fi
  echo "${site},${final},\"${xfo}\",\"${fa}\",${guess}" >> $OUT
  rm -f $tmp
  echo "Checked $site -> $guess"
done < "$SITES"
echo "Wrote $OUT"