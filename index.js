const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.end('Hola Mundo.!');
})
app.listen(3000, () => {
    console.log('Server funcionando');
});