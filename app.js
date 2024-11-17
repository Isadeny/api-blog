import express from 'express';
import autorRoutes from './routes/autorRoutes.js';
import postRoutes from './routes/postRoutes.js';

const app = express ();
app.use(express.json());

const PORT = 3000;

//Para integrar rutas para autores y posts
app.use('/api/autores', autorRoutes);
app.use('/api/posts', postRoutes);

app.get('/', (req, res) => {
    res.send('API funcionando');
});

app.listen(PORT, () =>{
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
