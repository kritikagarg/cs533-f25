const express = require('express');
const path = require('path');
const fingerptint = require('express-fingerprint')
const fs = require('fs');
const output = fs.createWriteStream('./stdout.log');
const errorOutput = fs.createWriteStream('./stderr.log');

const logger = new console.Console(output, errorOutput);

// Server info section
const app = express();
const PORT = 4001;

// Setup to server static files
app.use(express.static('public'));

app.use(fingerptint());

app.get('/favicon.ico', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'favicon.ico'));
});

// Setup to serve HTML files
app.set('view engine', 'html');
app.engine('html', require('fs').readFile);
var clients = [];
var current_client = ""
 function newClient(fingerprint)
{
    for (var i = 0; i< clients.length; i++)
    {
        const client = clients[i];
        if(client["browser"]["name"] == fingerprint['components']['useragent']['browser']["name"]  &&
            client["browser"]["major"] == fingerprint['components']['useragent']['browser']["major"]  &&
            client["device"]["model"]  == fingerprint['components']['useragent']['device']["model"] &&
            client["device"]["vendor"]  == fingerprint['components']['useragent']['device']["vendor"] &&
            client["device"]["type"]  == fingerprint['components']['useragent']['device']["type"] &&
            client["os"]["version"] == fingerprint['components']['useragent']['os']["version"] &&
            client["os"]["name"] == fingerprint['components']['useragent']['os']["name"] &&
            client["cpu"]["architecture"] == fingerprint['components']['useragent']['cpu']["architecture"] &&
            client["engine"]["name"] == fingerprint['components']['useragent']['engine']["name"] &&
            client["engine"]["version"] == fingerprint['components']['useragent']['engine']["version"] &&
            client["accept"] == fingerprint['components']['acceptHeaders']['accept'] &&
            client[ "encoding"] == fingerprint['components']['acceptHeaders']['encoding'] &&
            client["language"] == fingerprint['components']['acceptHeaders']['language'] &&
            client["country"] == fingerprint['components']['acceptHeaders']['country'] &&
            client["resion"] == fingerprint['components']['acceptHeaders']['resion'] &&
            client["city"] == fingerprint['components']['acceptHeaders']['city'])
            {
                console.log("Returning client detected: " + client["client_id"]);
                logger.log("Returning client detected: " + client["client_id"]);
                current_client =  client["client_id"];
                return false;
            }
    }

    clients.push({
        "client_id":Math.random().toString(32).slice(2),
        "browser":fingerprint['components']['useragent']['browser'],
        "device":fingerprint['components']['useragent']['device'],
        "os":fingerprint['components']['useragent']['os'],
        "cpu":fingerprint['components']['useragent']['cpu'],
        "engine":fingerprint['components']['useragent']['engine'],
        "accept":fingerprint['components']['acceptHeaders']['accept'],
        "encoding":fingerprint['components']['acceptHeaders']['encoding'],
        "language":fingerprint['components']['acceptHeaders']['language'],
        "country":fingerprint['components']['geoip']['country:'],
        "resion":fingerprint['components']['geoip']['resion:'],
        "city":fingerprint['components']['geoip']['city:']

    })
    current_client = clients[clients.length -1]["client_id"];
    return true;
}
// Routes for iFrame pages
app.get('/', (req, res) => {
    var title = "Welcome Back " + current_client + "!";
    var message =  'Glad to see you find this test site usefull';
    if (newClient(req.fingerprint))
    {
        title = 'Welcome ' + current_client + "!";
        message = 'We hope you find this test site usefull';

        console.log("New client detected: " + current_client);
        logger.log("New client detected: " + current_client);
    }

    const html = `<h1>${title}</h1><p>${message}</p>`;
    console.log(req.fingerprint);
    res.send(html);
});

// 404 handler
app.use((req, res) => {
    res.status(404).sendFile(path.join(__dirname, 'pages', '404.html'));
});

// Start server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});

