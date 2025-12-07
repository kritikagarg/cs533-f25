const express = require("express");
const fs = require("fs");
const path = require("path");
const crypto = require("crypto");

const app = express();
const PORT = 5500;

const LOG_FILE = path.join(__dirname, "fingerprints.log");
const DB_FILE = path.join(__dirname, "fingerprints.json");

// загрузка базы отпечатков
function loadDb() {
  try {
    if (fs.existsSync(DB_FILE)) {
      const txt = fs.readFileSync(DB_FILE, "utf8");
      if (txt.trim()) return JSON.parse(txt);
    }
  } catch (e) {
    console.error("DB read error:", e);
  }
  return {};
}

// сохранение базы
function saveDb(db) {
  try {
    fs.writeFileSync(DB_FILE, JSON.stringify(db, null, 2));
  } catch (e) {
    console.error("DB write error:", e);
  }
}

// формируем fingerprint по заголовкам + IP
function makeFingerprint(req) {
  const h = req.headers;
  const parts = [
    h["user-agent"] || "",
    h["accept-language"] || "",
    h["accept-encoding"] || "",
    h["dnt"] || "",
    req.ip || req.socket.remoteAddress || "",
  ];
  const raw = parts.join("|");
  const hash = crypto.createHash("md5").update(raw).digest("hex");
  return { hash, raw };
}

app.get("/", (req, res) => {
  const now = new Date().toISOString();
  const { hash, raw } = makeFingerprint(req);
  const db = loadDb();

  let status;
  if (!db[hash]) {
    db[hash] = {
      firstSeen: now,
      count: 1,
      userAgent: req.headers["user-agent"] || "",
      acceptLanguage: req.headers["accept-language"] || "",
      acceptEncoding: req.headers["accept-encoding"] || "",
      dnt: req.headers["dnt"] || "",
      raw,
    };
    status = "NEW";
  } else {
    db[hash].count += 1;
    status = "RETURNING";
  }

  saveDb(db);

  const logLine = `[${now}] ${status} fingerprint=${hash} count=${db[hash].count} ua="${db[hash].userAgent}" ip="${req.ip || req.socket.remoteAddress}"\n`;
  fs.appendFile(LOG_FILE, logLine, (err) => {
    if (err) console.error("Log write error:", err);
  });
  console.log(logLine.trim());

  // простой HTML-ответ
  res.setHeader("Content-Type", "text/html; charset=utf-8");
  res.end(`
<!doctype html>
<html lang="en">
<head><meta charset="utf-8"><title>Assignment 6 – Fingerprint</title></head>
<body style="font-family: sans-serif;">
  <h1>Browser fingerprint demo</h1>
  <p>Status: <strong>${status}</strong></p>
  <p>Fingerprint (md5): <code>${hash}</code></p>
  <p>Seen count: ${db[hash].count}</p>
  <h2>Headers used:</h2>
  <ul>
    <li>User-Agent: <code>${db[hash].userAgent}</code></li>
    <li>Accept-Language: <code>${db[hash].acceptLanguage}</code></li>
    <li>Accept-Encoding: <code>${db[hash].acceptEncoding}</code></li>
    <li>DNT: <code>${db[hash].dnt}</code></li>
  </ul>
</body>
</html>
  `);
});

app.listen(PORT, () => {
  console.log(`Fingerprint server running at http://localhost:${PORT}`);
  console.log("On phone/tablet, open: http://<your-mac-ip>:" + PORT + "/");
});
