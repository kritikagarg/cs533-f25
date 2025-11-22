const express = require('express');
const cookieParser = require('cookie-parser');
const app = express();
const port = 3000;

app.use(cookieParser());
app.use(express.static(__dirname));
app.get('/victim', (req, res) => {
    res.cookie('sessionToken', 'secret-victim-session-123', {
        path: '/victim-path',
    });
    
    res.send(`
    <!DOCTYPE html>
    <html>
    <head>
        <title>Victim Site</title>
    </head>
    <body>
        <h1>Victim Site</h1>
        <p>This page sets a cookie with Path=/victim-path</p>
        <p>Current cookies: <span id="cookies"></span></p>
        <script>
            document.getElementById('cookies').textContent = document.cookie;
        </script>
    </body>
    </html>
    `);
});
app.get('/attacker', (req, res) => {
    res.sendFile(__dirname + '/attacker.html');
});

app.get('/cookie-setter', (req, res) => {
    res.sendFile(__dirname + '/cookie-setter.html');
});

app.listen(port, () => {
    console.log(`Frame Path Attack server running at http://localhost:${port}`);
});