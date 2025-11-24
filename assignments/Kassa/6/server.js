const cookieParser = require("cookie-parser");
const express = require("express");
const fs = require("fs");
const path = require("path");
const md5 = require("md5");


const app = express();
const PORT = 3000;
const LOG_FILE = "fingerprints.log";

app.use(cookieParser());
function logFingerprint(id, headers) {
  const entry =
    `\n=== Client ${id} ===\n` +
    `Time: ${new Date().toISOString()}\n` +
    `User-Agent: ${headers["user-agent"]}\n` +
    `Accept-Language: ${headers["accept-language"]}\n` +
    `Accept: ${headers["accept"]}\n` +
    `DNT: ${headers["dnt"]}\n` +
    `=====================\n`;

  fs.appendFileSync(LOG_FILE, entry);
}

app.get("/", (req, res) => {
  let fingerprint = req.cookies.fp;

  if (!fingerprint) {
    const fingerprintData = [
      req.headers["user-agent"] || "",
      req.headers["accept-language"] || "",
      req.headers["accept"] || "",
      req.headers["dnt"] || ""
    ].join("|");

    const fingerprint = md5(fingerprintData);
    res.cookie("fp", fingerprint, { maxAge: 10 * 60 * 60 * 24 * 30 });
  }
  const clientDir = path.join(__dirname, "clients");
  if (!fs.existsSync(clientDir)) fs.mkdirSync(clientDir);
  const htmlFile = path.join(clientDir, `${fingerprint}.html`);
  if (!fs.existsSync(htmlFile)) {
    const clientCount = fs.readdirSync(clientDir).length + 1;
    const message = `Welcome! You’re a brand-new visitor. Your unique browser fingerprint is: ${fingerprint}`;
const htmlContent = `
      <html>
      <head><title>Client ${clientCount}</title></head>
      <body>
        <h1>Unique page for client ${clientCount}</h1>
        <p>${message}</p>
      </body>
      </html>`;
fs.writeFileSync(htmlFile, htmlContent);
    logFingerprint(fingerprint, req.headers);
  }
  res.sendFile(htmlFile);
});

app.listen(PORT, () => {
  console.log(`Fingerprinting server running at http://localhost:${PORT}`);
});
