const express = require('express');
const path = require('path');
const hash = require('md5');

// Servers and Ports
const server = express();
const serverPort = 4000;
const users = new Map();

// Served index file
const indexFile = path.join(__dirname, 'index.html');

// Using localhost will give CORS errors since external devices connect over 192.168.50.100
// Thus, the express server is bound to the subnet IP
server.listen(serverPort, '192.168.50.100', () => {
    console.log(`Server listening on port ${serverPort}`);
});

// Initial serve
server.get('/', (req, res) => {
    console.log("user connected");
    res.sendFile(indexFile);
});

// Receives UID from local storage, hashes, checks users map for the hashed object
// If found, returns the information stored. Otherwise, saves the information
// Real world applications will have a remote database, most likely graphql to
// correlate user information with other cookies and thus predict interests

server.get('/capture/:uid', (req, res) => {
    // Chose the headers based on a list of headers most frequently used for fingerprinting
    const uid = req.params.uid;
    const agentHeader = req.headers['user-agent'];
    const hostHeader = req.headers['host'];
    const acceptHeader = req.headers['accept'];
    const matchHeader = req.headers['accept-encoding'];

    // Hash computation
    const hashedUID = hash(uid + agentHeader + hostHeader + acceptHeader + matchHeader)

    // Logging of hashed data - typically stored in a .log file or something on a secure server
    console.log(`UID: ${uid}\nuser-agent: ${agentHeader}\nhost: ${hostHeader}\naccept: ${acceptHeader}\n'if-none-match': ${matchHeader}`);

    // If the user exists, logs it. Otherwise the user profile is generated.
    if(users.has(hashedUID)) {
        console.log(`User successfully found: ${users.get(hashedUID).agentInfo}`);
    } else {
        users.set(hashedUID, {hostInfo: req.headers['host'], agentInfo: req.headers['user-agent'], uid: uid});
        console.log(`User successfully added: ${users.get(hashedUID).hostInfo} using ${users.get(hashedUID).agentInfo}`);
    }

    // Pulls user information regardless of above action and sends as headers to be processed by the browser.
    const user = users.get(hashedUID);
    res.setHeader('agent-info', user.agentInfo);
    res.setHeader('host-info', user.hostInfo);
    res.setHeader('user-uid', user.uid)
    res.send();
});