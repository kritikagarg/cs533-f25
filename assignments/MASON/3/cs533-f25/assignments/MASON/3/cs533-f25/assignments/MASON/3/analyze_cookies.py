#!/usr/bin/env python3
# ----------------------------------------------------------
# analyze_cookies.py
# Script for CS533 Assignment 3 - Cookie Report
# By: Nirel Mason
# ----------------------------------------------------------
# Reads all the header files collected by fetch_headers.sh,
# extracts cookie info, and produces:
# - cookie_summary.csv
# - cookie_table.md
# - stats.txt
# ----------------------------------------------------------

import re, csv, statistics, os, sys

headers_dir = sys.argv[1] if len(sys.argv) > 1 else "headers"
out_dir = sys.argv[2] if len(sys.argv) > 2 else "out"
os.makedirs(out_dir, exist_ok=True)

cookie_re = re.compile(r'^Set-Cookie:\s*(.*)$', re.IGNORECASE)
samesite_re = re.compile(r';\s*SameSite=([^;]+)', re.IGNORECASE)
path_re = re.compile(r';\s*Path=([^;]+)', re.IGNORECASE)
httponly_re = re.compile(r';\s*HttpOnly\b', re.IGNORECASE)
secure_re = re.compile(r';\s*Secure\b', re.IGNORECASE)

rows = []
cookie_counts = []

for fname in sorted(os.listdir(headers_dir)):
    if not fname.endswith(".txt"):
        continue
    domain = fname[:-4]
    final_status = ""
    final_url = ""
    n_total = n_http = n_sec = n_ss = n_ss_strict = n_ss_lax = n_ss_none = n_path = n_path_nonroot = 0

    with open(os.path.join(headers_dir, fname), "r", errors="ignore") as f:
        lines = f.readlines()

    for line in lines[:5]:
        if line.startswith("# STATUS_AND_URL:"):
            parts = line.split(":",1)[1].strip().split()
            if parts:
                final_status = parts[0]
                final_url = parts[1] if len(parts) > 1 else ""
            break

    for line in lines:
        m = cookie_re.match(line)
        if not m:
            continue
        cookie = m.group(1).strip()
        n_total += 1

        if httponly_re.search(cookie): n_http += 1
        if secure_re.search(cookie): n_sec += 1

        ms = samesite_re.search(cookie)
        if ms:
            n_ss += 1
            val = ms.group(1).strip().lower()
            if val.startswith("strict"): n_ss_strict += 1
            elif val.startswith("lax"): n_ss_lax += 1
            elif val.startswith("none"): n_ss_none += 1

        mp = path_re.search(cookie)
        if mp:
            n_path += 1
            path_val = mp.group(1).strip().strip('"').split(";",1)[0]
            if path_val != "/":
                n_path_nonroot += 1

    cookie_counts.append(n_total)
    rows.append({
        "domain": domain,
        "status": final_status,
        "final_url": final_url,
        "cookies": n_total,
        "httponly": n_http,
        "secure": n_sec,
        "samesite_any": n_ss,
        "samesite_strict": n_ss_strict,
        "samesite_lax": n_ss_lax,
        "samesite_none": n_ss_none,
        "path_any": n_path,
        "path_nonroot": n_path_nonroot
    })

# Write CSV
csv_path = os.path.join(out_dir, "cookie_summary.csv")
with open(csv_path, "w", newline="") as f:
    w = csv.DictWriter(f, fieldnames=list(rows[0].keys()))
    w.writeheader()
    w.writerows(rows)

# Write Markdown table
md_path = os.path.join(out_dir, "cookie_table.md")
with open(md_path, "w") as f:
    f.write("| # | Domain | Final Status | Cookies | HttpOnly | Secure | SameSite | Strict | Lax | None | Path | Path≠/ |\n")
    f.write("|---:|---|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|\n")
    for i, r in enumerate(rows, start=1):
        f.write(f"| {i} | {r['domain']} | {r['status']} | {r['cookies']} | {r['httponly']} | {r['secure']} | {r['samesite_any']} | {r['samesite_strict']} | {r['samesite_lax']} | {r['samesite_none']} | {r['path_any']} | {r['path_nonroot']} |\n")

# Stats
stats_path = os.path.join(out_dir, "stats.txt")
with open(stats_path, "w") as f:
    if cookie_counts:
        f.write(f"Min cookies/site: {min(cookie_counts)}\n")
        f.write(f"Max cookies/site: {max(cookie_counts)}\n")
        f.write(f"Mean cookies/site: {statistics.mean(cookie_counts):.2f}\n")
        f.write(f"Median cookies/site: {statistics.median(cookie_counts):.2f}\n")
    else:
        f.write("No cookies found.\n")

print("✅ Done! Results saved in:", out_dir)

