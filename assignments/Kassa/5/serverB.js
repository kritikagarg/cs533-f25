const express = require('express');
const path = require('path');
const app = express();
const PORT = 4000;

app.use('/5.3', express.static(path.join(__dirname, '5.3')));

const favorites = { favorites: ["Car", "Ride", "Gaming", "Shop"] };

app.get('/favorites.json', (req, res) => res.json(favorites));

app.get('/favorites-allow.json', (req, res) => {
  res.set('Access-Control-Allow-Origin', 'http://localhost:3000');
  res.json(favorites);
});

app.get('/headers-block', (req, res) => {
  favorites.favorites.forEach((item, i) => {
    res.set(`X-CS533f25-Fav${i + 1}`, item);
  });
  res.send('Sent custom headers');
});

app.get('/headers-allow', (req, res) => {
  res.set('Access-Control-Allow-Origin', 'http://localhost:3000');
  res.set(
    'Access-Control-Expose-Headers',
    favorites.favorites.map((_, i) => `X-CS533f25-Fav${i + 1}`).join(', ')
  );
  favorites.favorites.forEach((item, i) => {
    res.set(`X-CS533f25-Fav${i + 1}`, item);
  });
  res.send('Sent custom headers (exposed)');
});
app.get('/', (req, res) => {
  res.send('Server is running. Go to /5.3 or check your CORS routes.');
});
app.get('/5.3/embed-allowed.html', (req, res) =>
  res.sendFile(path.join(__dirname, '5.3', 'embed_allowed.html'))
);

app.get('/5.3/embed-blocked.html', (req, res) => {
  res.set('X-Frame-Options', 'DENY');
  res.set('Content-Security-Policy', "frame-ancestors 'none'");
  res.sendFile(path.join(__dirname, '5.3', 'embed_blocked.html'));
});

app.listen(PORT, () => console.log(`Server B running at http://localhost:${PORT}`));
