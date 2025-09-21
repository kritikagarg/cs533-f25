const express = require("express");
const cookieParser = require("cookie-parser");

const app = express();
const PORT = 4000;

app.use(cookieParser());

// Route 1: Favorite Personality
app.get("/personality", (req, res) => {
  res.cookie("favorite_personality", "Taylor Swift");
  res.send("<h1>Taylor Swift</h1><p>I love Taylor Swift because her music inspires me and her storytelling is unmatched.</p>");
});

// Route 2: Favorite Place
app.get("/place", (req, res) => {
  res.cookie("favorite_place", "Big Sur");
  res.send("<h1>Big Sur</h1><p>Big Sur is my favorite place because of its breathtaking coastal views and peaceful atmosphere.</p>");
});

// Route 3: Favorite Book
app.get("/book", (req, res) => {
  res.cookie("favorite_book", "Born a Crime");
  res.send("<h1>Born a Crime</h1><p>This book by Trevor Noah is my favorite because it mixes humor and serious issues beautifully.</p>");
});

// Route 4: Favorite Movie
app.get("/movie", (req, res) => {
  res.cookie("favorite_movie", "A Silent Voice");
  res.send("<h1>A Silent Voice</h1><p>This movie touched me deeply because of its themes of forgiveness and redemption.</p>");
});

// server starting ...
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
