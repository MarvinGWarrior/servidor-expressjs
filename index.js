const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.end('Hola Mundo.!');
});

app.get('/login', (req, res) => {
    res.end('Login.!');
});

app.get('*', (req, res) => {
    res.end('Pagina no encontrada');
});

app.listen(3000, () => {
    console.log('Server funcionando');
});