const axios = require('axios');
const fs = require('fs');
const path = require('path');

const urls = fs.readFileSync('sitelist.txt', 'utf-8')
    .split('\n')
    .map(line => line.trim())
    .filter(line => line.length > 0);

const results = [];
const outputFile = 'frame_report.md';
const framesDir = path.join(__dirname, 'frames');

// Ensure frames directory exists
if (!fs.existsSync(framesDir)) {
    fs.mkdirSync(framesDir);
}

async function checkHeaders() {
    for (const url of urls) {
        let framable = 'Unknown';
        let notes = '';
        let status = 0;

        try {
            console.log(`Checking ${url}...`);
            const response = await axios.head(`https://${url}`, { timeout: 10000, validateStatus: null });
            status = response.status;
            const xFrameOptions = response.headers['x-frame-options'];

            if (status >= 200 && status < 400) {
                framable = !xFrameOptions ? 'Yes' : 'No';
                notes = xFrameOptions ? `X-Frame-Options: ${xFrameOptions}` : 'X-Frame-Options: Not set';
            } else if (status >= 400 && status < 500) {
                framable = 'Unknown';
                notes = `HTTP error ${status}`;
            } else if (status >= 500) {
                framable = 'No';
                notes = `Server error ${status}`;
            } else {
                framable = 'Unknown';
                notes = `Unexpected status ${status}`;
            }
        } catch (error) {
            console.warn(`Dead site: ${url} (${error.message})`);
            framable = 'No';
            notes = 'Dead site';
        }

        results.push({ url, framable, notes });
        createFrameHTML(url, framable, notes);
    }

    writeMarkdownReport();
    createIndexPage();
}

function createFrameHTML(url, framable, notes) {
    const safeName = url.replace(/[^a-zA-Z0-9.-]/g, '_');
    const htmlPath = path.join(framesDir, `${safeName}.html`);
    const htmlContent = `
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<title>Frame Test - ${url}</title>
<style>
  body { font-family: sans-serif; background: #fafafa; color: #222; margin: 0; padding: 1rem; }
  header { background: #007acc; color: white; padding: 1rem; border-radius: 0.5rem; }
  iframe { width: 100%; height: 90vh; border: 2px solid #ccc; border-radius: 0.5rem; margin-top: 1rem; }
  .styled-link {
      color: #fff;
      background: #005fa3;
      padding: 0.5em 1em;
      border-radius: 0.3em;
      text-decoration: none;
      font-weight: bold;
      transition: background 0.2s;
    }
    .styled-link:hover {
      background: #003f6b;
    }
</style>
</head>
<body>
<header>
  <h2>${url}</h2>
  <p><strong>Framable:</strong> ${framable} &nbsp; | &nbsp; <strong>Notes:</strong> ${notes}</p>
  <a href="index.html" class="styled-link"> Return Home </a>
</header>
<iframe src="https://${url}" loading="lazy"></iframe>
</body>
<footer>
    <a href="index.html" class="styled-link"> Return Home </a>
</footer>
</html>
`;
    fs.writeFileSync(htmlPath, htmlContent);
}

function writeMarkdownReport() {
    let markdown = '# Cookie Report\n\n';
    markdown += '| URL | Framable? | Notes |\n';
    markdown += '|-|-|-|\n';

    for (const { url, framable, notes } of results) {
        markdown += `| ${url} | ${framable} | ${notes} |\n`;
    }

    fs.writeFileSync(outputFile, markdown);
    console.log(`\n Markdown report written to ${outputFile}`);
}

function createIndexPage() {
    const indexPath = path.join(framesDir, 'index.html');
    let html = `
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<title>Framability Test Index</title>
<style>
  body { font-family: system-ui, sans-serif; background: #f5f7fa; color: #222; padding: 2rem; }
  h1 { color: #007acc; }
  table { border-collapse: collapse; width: 100%; margin-top: 1rem; }
  th, td { border: 1px solid #ccc; padding: 0.5rem 1rem; text-align: left; }
  th { background: #007acc; color: white; }
  tr:nth-child(even) { background: #f0f4f8; }
  a { color: #007acc; text-decoration: none; }
  a:hover { text-decoration: underline; }
</style>
</head>
<body>
<h1>Framability Test Index</h1>
<table>
  <tr><th>URL</th><th>Framable?</th><th>Notes</th><th>View Test</th></tr>
`;

    for (const { url, framable, notes } of results) {
        const safeName = url.replace(/[^a-zA-Z0-9.-]/g, '_');
        html += `<tr>
            <td>${url}</td>
            <td>${framable}</td>
            <td>${notes}</td>
            <td><a href="${safeName}.html" target="_blank">Open</a></td>
        </tr>`;
        
    }

    html += `
</table>
</body>
</html>
`;

    fs.writeFileSync(indexPath, html);
    console.log(`Index page written to ${indexPath}`);
}

checkHeaders();
