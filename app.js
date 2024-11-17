import express from 'express';
const app = express ();
import db from './config/db.js';

app.use(express.json());

const PORT = 3000;

app.get('/', (req, res) => {
    res.send('API funcionando');
});

app.listen(PORT, () =>{
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
