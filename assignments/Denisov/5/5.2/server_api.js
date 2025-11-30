const express = require("express");
const app = express();
const PORT = 4001;

function setFavoriteHeaders(res) {
  res.set("X-CS533f25-jim-carrey", "Jim Carrey");
  res.set("X-CS533f25-grand-canyon", "Grand Canyon");
  res.set("X-CS533f25-harry-potter", "Harry Potter");
  res.set("X-CS533f25-the-matrix", "The Matrix");
}

app.get("/headers-no-expose", (req, res) => {
  res.set("Access-Control-Allow-Origin", "http://localhost:4000");
  setFavoriteHeaders(res);
  res.json({ message: "Headers set, but not exposed" });
});

app.get("/headers-with-expose", (req, res) => {
  res.set("Access-Control-Allow-Origin", "http://localhost:4000");
  res.set(
    "Access-Control-Expose-Headers",
    "X-CS533f25-jim-carrey, X-CS533f25-grand-canyon, X-CS533f25-harry-potter, X-CS533f25-the-matrix"
  );
  setFavoriteHeaders(res);
  res.json({ message: "Headers set and exposed" });
});

app.listen(PORT, () =>
  console.log("5.2 API server running at http://localhost:" + PORT)
);
