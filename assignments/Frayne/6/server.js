import express from "express";
import fs from "fs";
import crypto from "crypto";

const app = express();
const port = 3000;

const FINGERPRINT_LOG = "./fingerprints.json";

let fingerprints = {};
if (fs.existsSync(FINGERPRINT_LOG)) {
  fingerprints = JSON.parse(fs.readFileSync(FINGERPRINT_LOG, "utf8"));
}

function hashData(data) {
  return crypto.createHash("md5").update(JSON.stringify(data)).digest("hex");
}

function saveFingerprints() {
  fs.writeFileSync(FINGERPRINT_LOG, JSON.stringify(fingerprints, null, 2));
}

function getFingerprint(req) {
  return {
    ip: req.ip,
    userAgent: req.headers["user-agent"] || "",
    accept: req.headers["accept"] || "",
    acceptEncoding: req.headers["accept-encoding"] || "",
    acceptLanguage: req.headers["accept-language"] || "",
    dnt: req.headers["dnt"] || "",
    connection: req.headers["connection"] || "",
  };
}

app.get("/", (req, res) => {
  const fp = getFingerprint(req);
  const hash = hashData(fp);

  let message;

  if (fingerprints[hash]) {
    message = `Welcome back! I recognize your browser as: ${hash}`;
  } else {
    message = `New client detected. Your fingerprint hash: ${hash}`;
    fingerprints[hash] = fp;
    saveFingerprints();
  }

  console.log(message);
  res.send({
    status: "ok",
    fingerprint: fp,
    hash: hash,
    knownClient: !!fingerprints[hash],
  });
});

app.listen(port, () => {
  console.log(`Fingerprinting server running at http://localhost:${port}`);
});