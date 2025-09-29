const express = require('express');
const cookieParser = require('cookie-parser');

const app = express();
app.use(cookieParser());

const PORT = 4000;

// Path 1
app.get('/justinbieber', (req, res) => {
  res.cookie('favoriteArtist', 'Justin Bieber');
  res.send('<h1>Justin Bieber</h1><p>He is one of my favorite artists because his music inspires me.</p>');
});

// Path 2
app.get('/laworder', (req, res) => {
  res.cookie('favoriteShow', 'Law & Order');
  res.send('<h1>Law & Order</h1><p>This is one of my favorite shows because I enjoy crime dramas.</p>');
});

// Path 3
app.get('/nickiminaj', (req, res) => {
  res.cookie('favoriteRapper', 'Nicki Minaj');
  res.send('<h1>Nicki Minaj</h1><p>I love her energy and confidence in her music.</p>');
});

// Path 4
app.get('/happyday', (req, res) => {
  res.cookie('favoriteMood', 'Happy Day');
  res.send('<h1>Happy Day</h1><p>This reminds me to stay positive and enjoy life.</p>');
});

app.listen(4000, () => {
  console.log('Server is running at http://localhost:4000');
});
