// generate_framable_pages.js
// Usage: node generate_framable_pages.js sites.txt framable
const fs = require('fs');
const path = require('path');
if (process.argv.length < 4) {
  console.error('Usage: node generate_framable_pages.js <sites.txt> <outdir>');
  process.exit(1);
}
const sitesFile = process.argv[2];
const outDir = process.argv[3];
if (!fs.existsSync(outDir)) fs.mkdirSync(outDir, {recursive:true});
const lines = fs.readFileSync(sitesFile, 'utf8').split(/\r?\n/).map(s=>s.trim()).filter(Boolean);
lines.forEach(site => {
  const safeName = site.replace(/[\/:]/g,'_');
  const filename = path.join(outDir, safeName + '.html');
  const html = `<!doctype html>
<html>
<head>
  <meta charset="utf-8">
  <title>Framability test for ${site}</title>
  <style>body{font-family:Arial,Helvetica,sans-serif;padding:20px}</style>
</head>
<body>
  <h2>Framability test: ${site}</h2>
  <p>Attempting to iframe <code>https://${site}</code></p>
  <div id="status">Loading...</div>
  <iframe id="target" src="https://${site}" width="100%" height="600" style="border:2px solid #444"></iframe>
  <script>
    const iframe = document.getElementById('target');
    const status = document.getElementById('status');
    let loaded=false;
    // try to detect obvious blocking quickly
    iframe.onload = () => {
      status.innerText = 'iframe.onload fired: may be framed (or loaded fallback content).';
      loaded=true;
      // Try to access contentWindow location (will throw if cross-origin)
      try {
        const href = iframe.contentWindow.location.href;
        status.innerText += '\\niframe contentWindow accessible: same-origin (unexpected). href=' + href;
      } catch(e) {
        status.innerText += '\\niframe is cross-origin (contentWindow access blocked) — loaded OK or was allowed to frame.';
      }
    };
    setTimeout(() => {
      if (!loaded) {
        status.innerText += '\\nNo onload yet. Check console for "Refused to display" messages or X-Frame-Options in headers.';
      }
    }, 4000);
  </script>
  <p>Note: to classify definitively, check headers (X-Frame-Options, CSP frame-ancestors) using the provided header_check.sh script.</p>
</body>
</html>`;
  fs.writeFileSync(filename, html);
  console.log('Wrote', filename);
});
console.log('Done. Open files at /framable/<site>.html');