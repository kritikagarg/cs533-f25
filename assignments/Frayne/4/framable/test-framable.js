const axios = require("axios");
const fs = require("fs");

async function checkSite(url) {
    try {
        const response = await axios.get(url, {
            maxRedirects: 5,
            validateStatus: () => true  // allow all responses
        });

        const headers = response.headers;

        // X-FRAME-OPTIONS check
        if (headers["x-frame-options"]) {
            return {
                url,
                framable: false,
                reason: `X-Frame-Options: ${headers["x-frame-options"]}`
            };
        }

        // CSP check
        if (headers["content-security-policy"]) {
            const csp = headers["content-security-policy"];
            if (csp.includes("frame-ancestors")) {
                return {
                    url,
                    framable: false,
                    reason: `CSP frame-ancestors present`
                };
            }
        }

        // Otherwise, assume framable
        return {
            url,
            framable: true,
            reason: "No XFO or CSP blocking"
        };

    } catch (err) {
        return {
            url,
            framable: false,
            reason: "Request failed or site unreachable"
        };
    }
}

async function run() {
    const sites = fs.readFileSync("sites.txt", "utf8")
        .split("\n")
        .map(s => s.trim())
        .filter(Boolean);

    let results = [];

    console.log("Testing sites...\n");

    for (const site of sites) {
        const r = await checkSite(site);
        results.push(r);
        console.log(`${r.framable ? "✔ Framable" : "❌ Not Framable"} — ${site} — ${r.reason}`);
    }

    fs.writeFileSync("results.json", JSON.stringify(results, null, 2));

    console.log("\nDone! Full results saved to results.json");
}

run();