const express = require('express');
const cors = require('cors');
const app = express();
const port = 4000;

app.use(express.static(__dirname));

// Uncomment the next line to allow CORS
// app.use(cors());

app.get('/favorites.json', (req, res) => {
    res.json({
        personality: "Joe Rodon",
        place: "Swansea",
        song: "Little Lion Man",
        movie: "Cars"
    });
});

app.listen(port, () => console.log(`Server2 running on port ${port}`));