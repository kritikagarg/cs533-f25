const fs = require("fs");
const path = require("path");

const urls = [
  "dropcatch.com",
  "nytimes.com",
  "prezi.com",
  "msn.com",
  "digg.com",
  "cbslocal.com",
  "rt.com",
  "mozilla.com",
  "liveinternet.ru",
  "sina.com.cn",
  "vkontakte.ru",
  "photos1.blogger.com",
  "cambridge.org",
  "zendesk.com",
  "guardian.co.uk",
  "gnu.org",
  "express.co.uk",
  "bloglovin.com",
  "hollywoodreporter.com",
  "hugedomains.com",
  "youtu.be",
  "id.wikipedia.org",
  "sfgate.com",
  "support.google.com",
  "sedoparking.com",
  "doi.org",
  "mediafire.com",
  "fandom.com",
  "dw.com",
  "sapo.pt",
  "addtoany.com",
  "finance.yahoo.com",
  "mozilla.org",
  "deezer.com",
  "lefigaro.fr",
  "alexa.com",
  "unicef.org",
  "t-online.de",
  "live.com",
  "blog.google",
  "nydailynews.com",
  "scholastic.com",
  "newyorker.com",
  "000webhost.com",
  "businessinsider.com",
  "disqus.com",
  "thefreedictionary.com",
  "gsmarena.com",
  "biglobe.ne.jp",
  "telegraph.co.uk",
  "lemonde.fr",
  "www.over-blog.com",
  "disney.com",
  "domainmarket.com",
  "mit.edu",
  "washington.edu",
  "cdc.gov",
  "fifa.com",
  "netvibes.com",
  "hubspot.com",
  "ebay.com",
  "namecheap.com",
  "allaboutcookies.org",
  "quora.com",
  "yelp.com",
  "developers.google.com",
  "code.google.com",
  "cpanel.com",
  "cointernet.com.co",
  "francetvinfo.fr",
  "cbsnews.com",
  "soundcloud.com",
  "trustpilot.com",
  "salesforce.com",
  "utexas.edu",
  "offset.com",
  "focus.de",
  "fb.me",
  "fr.wikipedia.org",
  "amazon.fr",
  "techcrunch.com",
  "books.google.com",
  "wikihow.com",
  "indiegogo.com",
  "ietf.org",
  "eventbrite.com",
  "dailymail.co.uk",
  "pbs.org",
  "cpanel.net",
  "play.google.com",
  "yahoo.co.jp",
  "bandcamp.com",
  "plus.google.com",
  "blackberry.com",
  "ap.org",
  "fb.com",
  "justjared.com",
  "cbc.ca",
  "amzn.to",
  "upenn.edu"
];

const outDir = path.join(__dirname, "tests");
if (!fs.existsSync(outDir)) fs.mkdirSync(outDir);

urls.forEach((url, i) => {
    const num = String(i + 1).padStart(3, "0");
    const filePath = path.join(outDir, `${num}-${url}.html`);

    const html = `
<!DOCTYPE html>
<html>
<head>
<title>Iframe Test – ${url}</title>
<style>
iframe { width: 100%; height: 90vh; border: 2px solid black; }
#status { font-size: 18px; font-weight: bold; margin-top: 10px; }
</style>
</head>
<body>
<h2>Testing iframe for: ${url}</h2>

<div id="status">Loading…</div>

<iframe id="testframe" src="https://${url}"></iframe>

<script>
// Detect frame busting / denial
let frameLoaded = false;

document.getElementById("testframe").onload = function () {
    frameLoaded = true;
    document.getElementById("status").innerText =
        "Frame loaded successfully — This site is framable.";
};

// After 4 seconds, check if frame was blocked
setTimeout(() => {
    if (!frameLoaded) {
        document.getElementById("status").innerText =
            "Frame blocked — This site is NOT framable.";
    }
}, 4000);
</script>

</body>
</html>
    `;

    fs.writeFileSync(filePath, html.trim());
});

console.log("Generated 100 iframe test pages in /framable/tests/");
