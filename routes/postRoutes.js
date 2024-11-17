import express from 'express';
import '../config/db.js';

const router = express.Router();

//Para obtener todos los posts y los datos del autor
router.get('/', (req, res) => {
    const query = `
    SELECT posts.*, autores.nombre AS autor_nombre
    FROM posts
    JOIN autores ON posts.autor_id = autores.id`;
db.query(query, (req, res) => {
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