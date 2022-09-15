const express = require('express');
const app = express();

const routes = require('./routes');
const routesApi = require('./api');
const morgan = require('morgan')

app.set('appName', 'Mi primer server');
app.set('views', __dirname + '/views' );
app.set('view engine', 'ejs');

app.use(morgan('combined'));

app.use(routes);
app.use('/api', routesApi);

app.get('*', (req, res) => {
    res.end('Pagina no encontrada');
});
app.listen(3000, () => {
    console.log('Server funcionando al pelo');
    console.log('Nombre de la App: ', app.get('appName'));
});