var express = require('express');
var webpack = require('webpack');
const config = require('../config.js');
var webpackDevMiddleware = require('webpack-dev-middleware');
var webpackConfig = require('../webpack.config');

var app = express();
app.use('/static',express.static('css'));
app.use(webpackDevMiddleware(webpack(webpackConfig)));

console.log(`NODE_ENV=${config.NODE_ENV}`);

app.get('/', (req, res) => {
    res.send('Servidor ejecutándose correctamente');
  });

app.listen(config.PORT, config.HOST, function () {
    console.log(`Servidor activo en http://localhost:${config.PORT}/login.html`);
  });