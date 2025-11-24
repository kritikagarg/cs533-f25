const express = require("express");
const md5 = require("md5");
const fs = require("fs");
const path = require("path");

const app = express();
const PORT = 3000;

const knownClients = new Map();
const LOG_FILE = "fingerprints.log";

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
  const fingerprintData = [
    req.headers["user-agent"] || "",
    req.headers["accept-language"] || "",
    req.headers["accept"] || "",
    req.headers["dnt"] || "",
  ].join("|");

  const fingerprint = md5(fingerprintData);

  let message;
  if (knownClients.has(fingerprint)) {
    message = `Hey, you’re back! Your secret agent code: ${fingerprint}. Mission continues `;
  } else {
    knownClients.set(fingerprint, true);
    message = `Welcome! You’re a brand-new visitor. Your unique browser fingerprint is: ${fingerprint}`;
    logFingerprint(fingerprint, req.headers);
  }

  const clientDir = path.join(__dirname, "clients");
  if (!fs.existsSync(clientDir)) {
    fs.mkdirSync(clientDir);
  }

  const htmlFile = path.join(clientDir, `${fingerprint}.html`);

  if (!fs.existsSync(htmlFile)) {
    const htmlContent = `
      <html>
      <body>
        <h1>Unique page for client ${fingerprint}</h1>
        <p>${message}</p>
      </body>
      </html>
    `;
    fs.writeFileSync(htmlFile, htmlContent);
  }

  res.sendFile(htmlFile);
});

app.listen(PORT, () => {
  console.log(`Fingerprinting server running at http://localhost:${PORT}`);
});
