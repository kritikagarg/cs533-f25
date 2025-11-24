const express = require('express');
const cors = require('cors');
const app = express();
const port = 4000;

app.use(cors({ exposedHeaders: ["X-CS533f25-Personality", "X-CS533f25-Place", "X-CS533f25-Song", "X-CS533f25-Movie"] }));

// Uncomment the next line to allow CORS
// app.use(cors());

app.get('/favorites.json', (req, res) => {
    res.set({
        'X-CS533f25-Personality': 'Joe Rodon',
        'X-CS533f25-Place': 'Swansea',
        'X-CS533f25-Song': 'Little Lion Man',
        'X-CS533f25-Movie': 'Cars'
    });
    res.json({ message: "Custom headers test" });
});

app.listen(port, () => console.log(`Server2 running on port ${port}`));