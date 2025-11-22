const express = require('express');
const path = require('path');
const app = express();
const port = 3001;

const sites = [
  'https://dropcatch.com',
  'https://nytimes.com',
  'https://prezi.com',
  'https://msn.com',
  'https://digg.com',
  'https://cbslocal.com',
  'https://rt.com',
  'https://mozilla.com',
  'https://liveinternet.ru',
  'https://sina.com.cn',
  "https://vkontakte.ru",
  "https://photos1.blogger.com",
  "https://cambridge.org",
  "https://zendesk.com",
  "https://guardian.co.uk",
  "https://gnu.org",
  "https://express.co.uk",
  "https://bloglovin.com",
  "https://hollywoodreporter.com",
  "https://hugedomains.com",
  "https://youtu.be",
  "https://id.wikipedia.org",
  "https://sfgate.com",
  "https://support.google.com",
  "https://sedoparking.com",
  "https://doi.org",
  "https://mediafire.com",
  "https://fandom.com",
  "https://dw.com",
  "https://sapo.pt",
  "https://addtoany.com",
  "https://finance.yahoo.com",
  "https://mozilla.org",
  "https://deezer.com",
  "https://lefigaro.fr",
  "https://alexa.com",
  "https://unicef.org",
  "https://t-online.de",
  "https://live.com",
  "https://blog.google",
  "https://nydailynews.com",
  "https://scholastic.com",
  "https://newyorker.com",
  "https://000webhost.com",
  "https://businessinsider.com",
  "https://disqus.com",
  "https://thefreedictionary.com",
  "https://gsmarena.com",
  "https://biglobe.ne.jp",
  "https://telegraph.co.uk",
  "https://lemonde.fr",
  "https://www.over-blog.com",
  "https://disney.com",
  "https://domainmarket.com",
  "https://mit.edu",
  "https://washington.edu",
  "https://cdc.gov",
  "https://fifa.com",
  "https://netvibes.com",
  "https://hubspot.com",
  "https://ebay.com",
  "https://namecheap.com",
  "https://allaboutcookies.org",
  "https://quora.com",
  "https://yelp.com",
  "https://developers.google.com",
  "https://code.google.com",
  "https://cpanel.com",
  "https://cointernet.com.co",
  "https://francetvinfo.fr",
  "https://cbsnews.com",
  "https://soundcloud.com",
  "https://trustpilot.com",
  "https://salesforce.com",
  "https://utexas.edu",
  "https://offset.com",
  "https://focus.de",
  "https://fb.me",
  "https://fr.wikipedia.org",
  "https://amazon.fr",
  "https://techcrunch.com",
  "https://books.google.com",
  "https://wikihow.com",
  "https://indiegogo.com",
  "https://ietf.org",
  "https://eventbrite.com",
  "https://dailymail.co.uk",
  "https://pbs.org",
  "https://cpanel.net",
  "https://play.google.com",
  "https://yahoo.co.jp",
  "https://bandcamp.com",
  "https://plus.google.com",
  "https://blackberry.com",
  "https://ap.org",
  "https://fb.com",
  "https://justjared.com",
  "https://cbc.ca",
  "https://amzn.to",
  "https://upenn.edu"
];

app.use(express.static(path.join(__dirname)));

app.get('/', (req, res) => {
  let html = '<h1>Framable Sites Test</h1><ul>';
  sites.forEach((site, i) => {
    html += `<li><a href="/test/${i + 1}" target="_blank">Site ${i + 1}: ${site}</a></li>`;
  });
  html += '</ul>';
  res.send(html);
});

app.get('/test/:id', (req, res) => {
  const siteId = parseInt(req.params.id);
  if (siteId < 1 || siteId > sites.length) return res.status(404).send('Site not found');
  const siteUrl = sites[siteId - 1];

  const html = `
  <!DOCTYPE html>
  <html>
  <head>
    <title>Test Site ${siteId}</title>
    <style>
      body { font-family: Arial; padding: 20px; }
      iframe { width: 100%; height: 600px; border: 2px solid #333; }
      .status { font-weight: bold; margin: 10px 0; }
    </style>
  </head>
  <body>
    <h1>Testing Site ${siteId}</h1>
    <div class="status" id="status">Loading iframe...</div>
    <iframe src="${siteUrl}" id="frame" onload="loaded()" onerror="error()"></iframe>
    <script>
      function loaded() {
        document.getElementById('status').textContent = '✓ Iframe loaded (may be blocked by X-Frame-Options / CSP)';
      }
      function error() {
        document.getElementById('status').textContent = '✗ Iframe failed to load';
      }
    </script>
  </body>
  </html>
  `;
  res.send(html);
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
