import express from 'express';
import db from '../config/db.js';

const router = express.Router();

//Para obtener todos los posts y los datos del autor
router.get('/', (req, res) => {
    const query = `
    SELECT posts.*, autores.nombre AS autor_nombre
    FROM posts
    JOIN autores ON posts.autor_id = autores.id`;
db.query(query, (err, results) => {
    if (err) {
        console.error('Error al obtener el post;', err)
        res.status(500).send('Error al obtener posts');
        return;
    }
    res.json(results);
});
    
});

//Para crear un nuevo post
router.post('/', (req, res) => {
    const { titulo, descripcion, categoria, autor_id } = req.body;
    const query = 'INSERT INTO posts (titulo, descripcion, categoria, autor_id) VALUES (?, ?, ?, ?)';
    db.query(query, [titulo, descripcion, categoria, autor_id], (err, result) => {
        if (err) {
            console.error('Error al crear post', err);
            res.status(500).send('Error al crear post');
            return;
        }
        res.status(201).json({id: result.insertID, titulo, descripcion, categoria, autor_id });
    });
});

//Para obtener todos los posts de un autor específico
router.get('/autor/:autorID', (req, res) => {
    const autorID = req.params.autorID;
    const query = `SELECT * FROM posts WHERE autor_id = ? `;
    db.query(query, [autorID], (err, results) => {
        if (err) {
            console.error('Error al obtener posts del autor:', err);
            res.status(500).send('Error al obtener posts del autor');
            return;
        }
        res.json(results);
    });
});

export default router;