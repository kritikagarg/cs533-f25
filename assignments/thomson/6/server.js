const express = require("express");
const fs = require("fs");
const path = require("path");
const cookieParser = require("cookie-parser");
const crypto = require("crypto");

const app = express();
const PORT = 3000;

app.use(cookieParser());

// Load fingerprints file
const fingerprintsFile = path.join(__dirname, "fingerprints.json");
let fingerprints = {};
if (fs.existsSync(fingerprintsFile)) {
  fingerprints = JSON.parse(fs.readFileSync(fingerprintsFile, "utf8"));
}

function detectBrowser(userAgent) {
  userAgent = userAgent.toLowerCase();

  if (userAgent.includes("chrome") && !userAgent.includes("edg") && !userAgent.includes("opr"))
    return "chrome";

  if (userAgent.includes("firefox"))
    return "firefox";

  if (userAgent.includes("safari") && !userAgent.includes("chrome"))
    return "safari";

  if (userAgent.includes("edg"))
    return "edge";

  if (userAgent.includes("opr") || userAgent.includes("opera"))
    return "opera";

  if (userAgent.includes("curl"))
    return "curl";

  if (userAgent.includes("lynx"))
    return "lynx";

  return "unknown";
}

function generateFingerprint(req) {
  const data = {
    userAgent: req.headers["user-agent"] || "",
    accept: req.headers["accept"] || "",
    encoding: req.headers["accept-encoding"] || "",
    language: req.headers["accept-language"] || "",
    ip: req.ip || req.connection.remoteAddress,
  };

  const hash = crypto.createHash("sha256")
    .update(JSON.stringify(data))
    .digest("hex");

  return { hash, data };
}

// Save fingerprints to json file
function saveFingerprints() {
  fs.writeFileSync(fingerprintsFile, JSON.stringify(fingerprints, null, 2));
}

app.get("/", (req, res) => {

  const userAgent = req.headers["user-agent"] || "";
  const browser = detectBrowser(userAgent);

  const { hash: fingerprintId, data } = generateFingerprint(req);
  const cookieId = req.cookies.client_id;
  
  let clientId = cookieId || fingerprintId;

  // NEW CLIENT
  if (!fingerprints[clientId]) {
    console.log("\n[NEW CLIENT]");
    console.log("Client ID:", clientId);
    console.log("Browser:", browser);
    console.log("Fingerprint:", fingerprintId);
    console.log("Headers:", data);
    console.log("First Seen:", new Date().toISOString());

    fingerprints[clientId] = {
      browser,
      firstSeen: new Date().toISOString(),
      fingerprintId,
      headers: data
    };

    saveFingerprints();
  } else {
    console.log(`\n[RETURNING CLIENT] ${clientId} (${browser})`);
  }

  // Set client cookie if missing
  if (!cookieId) {
    res.cookie("client_id", clientId, { maxAge: 1000 * 60 * 60 * 24 * 365 });
  }

  // routing to fingerprint specific page
  const browserPagesDir = path.join(__dirname, "browser-pages");
  const browserPage = path.join(browserPagesDir, `${browser}.html`);

  if (fs.existsSync(browserPage)) {
    return res.sendFile(browserPage);
  }

  const clientDir = path.join(__dirname, "client-pages");
  if (!fs.existsSync(clientDir)) fs.mkdirSync(clientDir);

  const clientPage = path.join(clientDir, `${clientId}.html`);

  if (!fs.existsSync(clientPage)) {
    fs.writeFileSync(clientPage, `
      <html>
      <body>
        <h1>Welcome, Unique Client!</h1>
        <p>Your Client ID: ${clientId}</p>
        <p>Your Browser: ${browser}</p>
        <p>Your Fingerprint: ${fingerprintId}</p>
        <p>First Seen: ${fingerprints[clientId].firstSeen}</p>
      </body>
      </html>
    `);
  }

  res.sendFile(clientPage);
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
