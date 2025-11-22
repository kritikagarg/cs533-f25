const express = require("express");
const fs = require("fs");
const md5 = require("md5");
const app = express();
const PORT = 3000;

// parse JSON if needed
app.use(express.json());

// Fingerprinting Function
function makeFingerprint(req) {
    // Collect at least 4 headers
    const data = [
        req.headers["user-agent"] || "",
        req.headers["accept-language"] || "",
        req.headers["accept-encoding"] || "",
        req.headers["accept"] || "",
        req.ip
    ].join("|");

    // Hash into a stable ID
    return md5(data);
}

// Load Seen Clients
let seenClients = {};
if (fs.existsSync("log.txt")) {
    const lines = fs.readFileSync("log.txt", "utf-8").split("\n");
    for (let line of lines) {
        const [fp] = line.split(" ");
        if (fp) seenClients[fp] = true;
    }
}

app.get("/", (req, res) => {
    const fingerprint = makeFingerprint(req);

    // Collect headers to store
    const headersToLog = {
        "user-agent": req.headers["user-agent"],
        "accept-language": req.headers["accept-language"],
        "accept-encoding": req.headers["accept-encoding"],
        "dnt": req.headers["dnt"]
    };

    // Log entry format
    const logEntry = `
Timestamp: ${new Date().toISOString()}
Fingerprint: ${fingerprint}
Headers: ${JSON.stringify(headersToLog, null, 2)}
==============================\n`;

    fs.appendFileSync("log.txt", logEntry);

    if (seenClients[fingerprint]) {
        res.send(`<h1>Welcome back! Your fingerprint: ${fingerprint}</h1>`);
    } else {
        seenClients[fingerprint] = true;
        res.send(`<h1>Hello new client! Your fingerprint: ${fingerprint}</h1>`);
    }
});


app.listen(PORT, () => {
    console.log("Server running on http://localhost:" + PORT);
});
