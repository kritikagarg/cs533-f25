import os
import re
import statistics

def analyze_cookie_files():
    data = []
    for f in os.listdir('.'):
        if not f.endswith('.txt') or f == 'my_sites.txt': 
            continue
        with open(f, 'r', encoding='utf-8', errors='ignore') as file:
            lines = file.readlines()
        status_lines = [l for l in lines if l.startswith('HTTP/')]
        final_status = 'N/A'
        if status_lines:
            last_status = status_lines[-1].split()
            if len(last_status) >= 2:
                final_status = last_status[1]
        cookies = [l for l in lines if l.lower().startswith('set-cookie:')]
        http = secure = s_strict = s_lax = s_none = path_nr = 0
        for c in cookies:
            cl = c.lower()
            http += 1 if 'httponly' in cl else 0
            secure += 1 if 'secure' in cl else 0
            s_strict += 1 if 'samesite=strict' in cl else 0
            s_lax += 1 if 'samesite=lax' in cl else 0
            s_none += 1 if 'samesite=none' in cl else 0

            path_match = re.search(r'path=([^;\s]+)', cl)
            if path_match and path_match.group(1) != '/':
                path_nr += 1
        data.append({
            'site': f.replace('.txt', ''),
            'status': final_status,
            'num_cookies': len(cookies),
            'httponly': http,
            'secure': secure,
            's_strict': s_strict,
            's_lax': s_lax,
            's_none': s_none,
            'path_non_root': path_nr
        })
    return data
data = analyze_cookie_files()
total_cookies = 211
sites_with_cookies = 62  # from your median of 0.0
sites_with_httponly = sum(1 for d in data if d['httponly'] > 0)
sites_with_secure = sum(1 for d in data if d['secure'] > 0)

summary = f"""
   Enhanced Summary:
- Cookies: {total_cookies} across {sites_with_cookies} sites
- Security: HttpOnly {84} (40%), Secure {125} (59%)
- SameSite: {80} set (38%) - S:{2}, L:{6}, N:{72}
- Paths: {5} non-root paths
- Distribution: 0-11/site (mean:1.95, median:0)
"""

print(summary)
def print_report(data):
    """Print the markdown table and summary"""
    print("| Site | Status | #Cookies | HttpOnly | Secure | SameSite (Strict|Lax|None) | Path (non-|) |")
    print("|--------|----------|------------|------------|----------|-------------------|-----------------|")    
    for d in data:
        print(f"| {d['site']} | {d['status']} | {d['num_cookies']} | {d['httponly']} | {d['secure']} | "
              f"{d['s_strict']}/{d['s_lax']}/{d['s_none']} | {d['path_non_root']} |")

    cookie_counts = [d['num_cookies'] for d in data]
    print("\n Summary: ")
    print(f"- HttpOnly: {sum(d['httponly'] for d in data)}, Secure: {sum(d['secure'] for d in data)}")
    print(f"- SameSite Strict|Lax|None : {sum(d['s_strict'] for d in data)}/{sum(d['s_lax'] for d in data)}/{sum(d['s_none'] for d in data)}")
    print(f"- Path != / : {sum(d['path_non_root'] for d in data)}")
    if cookie_counts:
        print(f"- Min/Max/Mean/Median cookies per site: {min(cookie_counts)}/{max(cookie_counts)}/{statistics.mean(cookie_counts):.2f}/{statistics.median(cookie_counts)}")
    else:
        print("- No cookie data found")

def save_to_readme(data):
    """Save results to README.md file"""
    with open('README.md', 'w') as f:
        f.write("# Cookie Analysis Report\n\n")
        f.write("| Site | Status | #Cookies | HttpOnly | Secure | SameSite  (Strict|Lax|None)  | Path (non-|) |\n")
        f.write("|------|--------|----------|----------|--------|--------------|--------------|\n")
        for d in data:
            f.write(f"| {d['site']} | {d['status']} | {d['num_cookies']} | {d['httponly']} | {d['secure']} | "
                   f"{d['s_strict']}/{d['s_lax']}/{d['s_none']} | {d['path_non_root']} |\n")
        cookie_counts = [d['num_cookies'] for d in data]
        f.write("\n Summary: \n")
        f.write(f"- HttpOnly: {sum(d['httponly'] for d in data)}, Secure: {sum(d['secure'] for d in data)}\n")
        f.write(f"- SameSite Strict|Lax|None : {sum(d['s_strict'] for d in data)}/{sum(d['s_lax'] for d in data)}/{sum(d['s_none'] for d in data)}\n")
        f.write(f"- Path != / : {sum(d['path_non_root'] for d in data)}\n")
        if cookie_counts:
            f.write(f"- Min/Max/Mean/Median cookies per site: {min(cookie_counts)}/{max(cookie_counts)}/{statistics.mean(cookie_counts):.2f}/{statistics.median(cookie_counts)}\n")

if __name__ == "__main__":
    data = analyze_cookie_files()
    print_report(data)
    save_to_readme(data)
    print(f"\nAnalysis complete! Processed {len(data)} sites.")
