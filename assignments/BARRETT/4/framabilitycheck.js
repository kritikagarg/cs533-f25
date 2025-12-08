import fs from "fs";
// import fetch from "node-fetch";

const sitesFile = "sites.txt";
const sites = fs.readFileSync(sitesFile, "utf8")
    .split("\n")
    .map(s => s.trim())
    .filter(s => s.length > 0);

async function checkFramability(url) {
    try {
        // Ensure URL has protocol
        if (!/^https?:\/\//i.test(url)) url = "https://" + url;

        const res = await fetch(url, { method: "HEAD", redirect: "manual" });
        const headers = res.headers;

        const xfo = headers.get("x-frame-options");
        const csp = headers.get("content-security-policy");

        let framable = true;
        let reason = "-";

        if (xfo) {
            framable = false;
            reason = `X-Frame-Options: ${xfo}`;
        } else if (csp && /frame-ancestors/i.test(csp)) {
            framable = false;
            // extract frame-ancestors part
            const fa = csp.match(/frame-ancestors[^;]*/i)[0];
            reason = `CSP: ${fa}`;
        }

        return { site: url.replace(/^https?:\/\//i, ""), framable, reason };
    } catch (err) {
        return { site: url, framable: false, reason: `Error: ${err.message}` };
    }
}

(async () => {
    const results = [];

    for (let i = 0; i < sites.length; i++) {
        const site = sites[i];
        process.stdout.write(`Checking (${i + 1}/${sites.length}): ${site} ... `);
        const r = await checkFramability(site);
        results.push(r);
        console.log(r.framable ? "✔ Framable" : "❌ Not Framable");
    }

    // Output Markdown table
    console.log("\n### Framability Results\n");
    console.log("| No. | Site | Framable? | Reason |");
    console.log("|-----|------|-----------|--------|");

    results.forEach((r, idx) => {
        console.log(`| ${idx + 1} | ${r.site} | ${r.framable ? "✔ Yes" : "❌ No"} | ${r.reason} |`);
    });

    // Optional: save to file
    fs.writeFileSync("framability_results.md",
        results.map((r, idx) =>
            `| ${idx + 1} | ${r.site} | ${r.framable ? "✔ Yes" : "❌ No"} | ${r.reason} |`
        ).join("\n")
    );

    console.log("\nDone! Results saved to framability_results.md");
})();