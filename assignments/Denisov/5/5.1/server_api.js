const express = require("express");
const path = require("path");
const app = express();
const PORT = 4001;

// === ВАЖНО: ВОТ ЗДЕСЬ МЫ ВКЛЮЧАЕМ CORS ===
// Разрешаем запросы с http://localhost:4000
app.use((req, res, next) => {
  res.set("Access-Control-Allow-Origin", "http://localhost:4000");
  res.set("Access-Control-Allow-Methods", "GET, OPTIONS");
  res.set("Access-Control-Allow-Headers", "Content-Type");
  next();
});

// Отдаём JSON с любимыми вещами
app.get("/favorites.json", (req, res) => {
  res.sendFile(path.join(__dirname, "favorites.json"));
});

app.listen(PORT, () => {
  console.log("API server (5.1) running at http://localhost:" + PORT);
});
