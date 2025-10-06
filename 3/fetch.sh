#!/bin/bash

mkdir -p responses

while read -r site; do
  echo "[*] Checking $site ..."
  curl -ILsk --max-time 10 "$site" > "responses/$site.txt" 2>/dev/null
done < sites.txt

