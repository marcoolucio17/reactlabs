const express = require('express');
const db = require('./db'); 
require('dotenv').config();
const cors = require("cors");

const app = express();
const port = 8080;

app.use(express.json());
app.use(cors());

app.get('/actores', async (req, res) => {
    try {
        const [rows] = await db.query('SELECT * FROM actores');
        res.json(rows);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

app.listen(port, () => console.log(`Server running on http://localhost:${port}`));
