#!/usr/bin/env python3
import csv, statistics, collections, pathlib

root = pathlib.Path(__file__).parent
cookies_path = root/"cookies.csv"
site_summary_path = root/"site_summary.csv"
readme_path = root/"README.md"

# -------- load site summary (one row per site) --------
sites = []
with open(site_summary_path) as f:
    r = csv.DictReader(f)
    for row in r:
        row["num_cookies"] = int(row["num_cookies"])
        sites.append(row)

nums = [s["num_cookies"] for s in sites]
min_c = min(nums) if nums else 0
max_c = max(nums) if nums else 0
mean_c = round(sum(nums)/len(nums), 2) if nums else 0
median_c = statistics.median(nums) if nums else 0

# -------- load cookie rows (one row per cookie) --------
tot = secure = httponly = 0
ss_counts = collections.Counter()
path_counts = collections.Counter()
nonroot = 0

with open(cookies_path) as f:
    r = csv.DictReader(f)
    for row in r:
        tot += 1
        if row["secure"] == "1": secure += 1
        if row["httponly"] == "1": httponly += 1
        ss = row["samesite"] or "(none)"
        ss_counts[ss] += 1
        p = row["path"] or "(none)"
        path_counts[p] += 1
        if p not in ("/", "(none)"): nonroot += 1

def pct(x, d): 
    return f"{(100*x/d):.1f}%" if d else "0.0%"

# sort sites by cookie count (desc) for a “per-domain” table
sites_sorted = sorted(sites, key=lambda s: s["num_cookies"], reverse=True)

# -------- build README --------
md = []
md.append("# Cookie Analysis Report\n")
md.append("Requests used `curl -ILsk` (headers only, follow redirects, silent, allow invalid SSL). Cookies were captured across the entire redirect chain. Final status = last `HTTP/` line.\n")

md.append("## Summary statistics (100 sites)")
md.append(f"- **Min cookies/site:** {min_c}")
md.append(f"- **Max cookies/site:** {max_c}")
md.append(f"- **Mean cookies/site:** {mean_c}")
md.append(f"- **Median cookies/site:** {median_c}\n")

md.append(f"**Total cookies observed across all responses:** {tot}")
md.append(f"- **HttpOnly:** {httponly} ({pct(httponly, tot)})")
md.append(f"- **Secure:** {secure} ({pct(secure, tot)})\n")

md.append("### SameSite breakdown")
md.append("| Value | Count | Percent |")
md.append("|---|---:|---:|")
for k in sorted(ss_counts.keys()):
    c = ss_counts[k]
    md.append(f"| {k} | {c} | {pct(c, tot)} |")

md.append("\n### Path attribute")
md.append(f"- `Path=/`: {path_counts.get('/',0)}")
md.append(f"- `Path` other than `/`: {nonroot}")
md.append(f"- No `Path`: {path_counts.get('(none)',0)}\n")

# ---- NEW: Top 10 and full per-domain table ----
md.append("## Top 10 sites by number of cookies (descending)")
md.append("| Rank | Site | Final Status | # Cookies |")
md.append("|---:|---|---:|---:|")
for i, s in enumerate(sites_sorted[:10], start=1):
    md.append(f"| {i} | {s['site']} | {s['final_status']} | {s['num_cookies']} |")

md.append("\n## Per-domain cookie table (all 100)")
md.append("| Site | Final Status | # Cookies |")
md.append("|---|---:|---:|")
for s in sites_sorted:
    md.append(f"| {s['site']} | {s['final_status']} | {s['num_cookies']} |")

readme_path.write_text("\n".join(md), encoding="utf-8")
print("✅ README.md generated with Top 10 + full per-domain table.")
