import os

with open("sites.txt") as f:
    sites = [line.strip() for line in f if line.strip()]

os.makedirs("framable", exist_ok=True)

for site in sites:
    filename = site.replace(":", "_").replace("/", "_")
    html = f"""
<!DOCTYPE html>
<html>
  <body>
    <h1>Testing iframe for: {site}</h1>
    <iframe src="https://{site}" width="800" height="600"></iframe>
  </body>
</html>
"""
    with open(f"framable/{filename}.html", "w", encoding="utf-8") as out:
        out.write(html)

print("Done! 100 HTML files created in framable/")