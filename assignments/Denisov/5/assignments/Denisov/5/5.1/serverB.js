const express = require("express");
const app = express();

app.get("/data.json", (req, res) => {

  // BLOCKED PHASE (default)
  // No CORS headers here.
  
  // ALLOWED PHASE:
  // Uncomment this line to ALLOW CORS:
  // res.setHeader("Access-Control-Allow-Origin", "http://localhost:4000");

  res.json({
    favorite1: "Jim Carrey",
    favorite2: "Grand Canyon",
    favorite3: "Harry Potter",
    favorite4: "The Matrix"
  });
});

app.listen(4001, () => {
  console.log("Server B running on http://localhost:4001");
});
