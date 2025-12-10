import fs from "fs";
import path from "path";

const sitesFile = "sites.txt";   // Your input file
const outDir = "./framable";     // Output folder

// Ensure output directory exists
if (!fs.existsSync(outDir)) {
    fs.mkdirSync(outDir, { recursive: true });
}

// Read sites list
const sites = fs.readFileSync(sitesFile, "utf8")
    .split("\n")
    .map(x => x.trim())
    .filter(x => x.length > 0);

console.log(`Loaded ${sites.length} sites.`);

let indexHTML = `
<!DOCTYPE html>
<html>
<head><meta charset="UTF-8"><title>Framability Test Index</title></head>
<body>
<h1>Framability Test Pages</h1>
<ul>
`;

for (let i = 0; i < sites.length; i++) {
    const site = sites[i];
    const cleanName = site.replace(/https?:\/\//, "").replace(/[^\w.-]/g, "_");
    const fileName = `${cleanName}.html`;
    const filePath = path.join(outDir, fileName);

    const html = `
<!DOCTYPE html>
<html>
<head><meta charset="UTF-8"><title>Frame Test: ${site}</title></head>
<body>
<h1>Framing test for: ${site}</h1>

<iframe src="${site}" 
        style="width:100%; height:800px; border:1px solid black;">
</iframe>

</body>
</html>
`;

    fs.writeFileSync(filePath, html, "utf8");
    indexHTML += `<li><a href="./${fileName}">${site}</a></li>\n`;

    console.log(`Generated ${fileName}`);
}

indexHTML += `
</ul>
</body>
</html>
`;

fs.writeFileSync(path.join(outDir, "index.html"), indexHTML, "utf8");

console.log("Done! Open framable/index.html to begin testing.");