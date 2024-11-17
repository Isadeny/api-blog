import express from 'express';
import db from './config/db.js';

const router = express.Router();

//Para obtener todos los autores
router.get('/', async (req, res) =>{
    const query = 'SELECT * FROM autores';
    db.query(query, (err, results) => {
        if (err) {
            console.error('Error al obtener los autores:', err);
            res.status(500).send('Error al obtener autores');
            return;
        }
        res.json(results);
    });
});
//Para crear un nuevo autor
router.post('/', (req, res) => {
    const {nombre, email, imagen } = req.body;
    const query = 'INSERT INTO autores (nombre, email, imagen) VALUES (?, ?, ?)';
    db.query(query, [nombre, email, imagen], (err, result) => {
        if (err) {
            console.error('Error al crear autor:', err)
            res.status(500).send('Error al crear autor');
            return;
        }
        res.status(201).json({id: result.insertID, nombre, email, imagen});
    });
});