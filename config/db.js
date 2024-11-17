import mysql from 'mysql2';

const connection = mysql.createConnection({
host: 'localhost',
user: 'root',
password: 'Datable:8!',
database: 'blog_db'
});

connection.connect((err) => {
    if (err) {
        console.error('Error al conectar con la base de datos:', err);
        process.exit(1);
    }
    console.log('Conexion exitosa con la dase de datos MySQL');
});

export default connection;