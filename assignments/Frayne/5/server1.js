// server1.js
const express = require('express');
const app = express();
const port = 4000;

app.use(express.static(__dirname)); // serve files in this folder

app.listen(port, () => {
  console.log(`Server 1 running on http://localhost:${port}`);
});