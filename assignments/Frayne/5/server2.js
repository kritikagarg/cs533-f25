// server2.js
const cors = require('cors');
app.use(cors());
const express = require('express');
const app = express();
const port = 5000;

app.get('/data.json', (req, res) => {
  // CORS not enabled yet — this will be blocked
  const favorites = {
    personality: "Joe Rodon",
    place: "Swansea",
    song: "Little Lion Man",
    movie: "Cars"
  };
  res.json(favorites);
});

app.listen(port, () => {
  console.log(`Server 2 running on http://localhost:${port}`);
});