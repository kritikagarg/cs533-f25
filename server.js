const express = require("express");
const fs = require("fs");
const path = require("path");

const app = express();
const TEST_DIR = path.join(__dirname, "tests");
const LOG_FILE = path.join(__dirname, "results.json");

app.use("/tests", express.static(TEST_DIR));

app.get("/framable", (req, res) => sendTestList(res));
app.get("/framable/", (req, res) => sendTestList(res));

function sendTestList(res) {
    const files = fs.readdirSync(TEST_DIR).filter(f => f.endsWith(".html"));
    res.send(`
        <h1>Iframe Tests (100 Sites)</h1>
        <ul>
            ${files.map(f => `<li><a href="/tests/${f}" target="_blank">${f}</a></li>`).join("")}
        </ul>
    `);
}

app.get("/log", (req, res) => {
    const { site, status } = req.query;
    if (!site || !status) return res.send("Missing parameters");
    let data = {};
    if (fs.existsSync(LOG_FILE)) {
        data = JSON.parse(fs.readFileSync(LOG_FILE));
    }
    data[site] = status;
    fs.writeFileSync(LOG_FILE, JSON.stringify(data, null, 2));
    res.send("Logged");
});

app.listen(3000, () => {
    console.log("Framable server running at http://localhost:3000/framable");
});
