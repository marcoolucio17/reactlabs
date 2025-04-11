const express = require('express');
const db = require('./db'); 
require('dotenv').config();
const cors = require("cors");
const jwt = require('jsonwebtoken');

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

app.post('/actores', async (req, res) => {
    try {
        const { nombre, pelicula } = req.body;

        if (!nombre || !pelicula) {
            return res.status(400).json({ error: "Missing required fields" });
        }

        // mandamos el post
        const [result] = await db.query(
            'insert into actores (nombre, pelicula) values (?, ?)',
            [nombre, pelicula]
        )

        res.status(201).json({ id: result.insertId, nombre, pelicula });

    } catch (error) {
        console.log("error while trying to post new actor.");
        res.status(500).json({ error: error.message });
    }
});

app.put('/actores/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const { nombre, pelicula } = req.body;

        if (!nombre || !pelicula) {
            return res.status(400).json({ error: "Missing required fields" });
        }

        const [result] = await db.query(
            'UPDATE actores SET nombre = ?, pelicula = ? WHERE id = ?',
            [nombre, pelicula, id]
        );

        if (result.affectedRows === 0) {
            return res.status(404).json({ error: "Actor not found" });
        }

        res.json({ id, nombre, pelicula });
    } catch (error) {
        console.error("Error updating actor:", error);
        res.status(500).json({ error: error.message });
    }
});

app.delete('/actores/:id', async (req, res) => {
    try {
        const { id } = req.params;

        const [result] = await db.query(
            'delete from actores where id = ?',
            [id]
        );

        if (result.affectedRows === 0) {
            return res.status(404).json({ error: "Actor not found" });
        }

        res.json({ message: "Actor deleted successfully" });
    } catch (error) {
        console.error("Error deleting actor:", error);
        res.status(500).json({ error: error.message });
    }

});

app.post('/login', async (req, res) => {
    try {
        const { username, password } = req.body;


        if (username !== 'tilin' && password !== 'jiji') {
            throw Error("User not authorized.")
        }

        const user = { id: 1, username: 'admin' };

        const token = jwt.sign(user, process.env.JWT_SECRET, { expiresIn: '1h' });

        res.json({ token });
    } catch (error) {
        console.error("Error generating token:", error);
        res.status(500).json({ error: error.message });
    }
});

app.get('/', async (req, res) => {
    return res.status(200).json({message: "Hola!"})
})

app.listen(port, () => console.log(`Server running on http://localhost:${port}`));
