const express = require("express");
const path = require("path");
const app = express();
const PORT = 4001;

// CSP запрещает загрузку любых iframe
// default-src 'self' — разрешаем загружать ресурсы только с нашего же origin
// frame-src 'none' — вообще запрещаем все iframe
app.use((req, res, next) => {
  res.set("Content-Security-Policy", "default-src 'self'; frame-src 'none';");
  next();
});

app.use(express.static(path.join(__dirname, "public")));

app.listen(PORT, () => {
  console.log("5.3 BLOCKED server running at http://localhost:" + PORT);
});
