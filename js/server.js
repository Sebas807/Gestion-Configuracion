var express = require('express');
var webpack = require('webpack');
const config = require('../config.js');
var webpackDevMiddleware = require('webpack-dev-middleware');
var webpackConfig = require('../webpack.config');

var app = express();
// app.set('port',(process.env.PORT || 3000));
app.use('/static',express.static('css'));
app.use(webpackDevMiddleware(webpack(webpackConfig)));
// var port = app.get('port');

console.log(`NODE_ENV=${config.NODE_ENV}`);
/* app.get('/',function(req,res,next){
    res.send('Servidor ejecuntándose correctamente');
});*/
app.get('/', (req, res) => {
    res.send('Servidor ejecutándose correctamente');
  });

/* app.listen(app.get('port'),()=>{
    console.log('Servidor activo');
});*/

/* app.listen(port, () => {
    console.log(`Servidor activo en http://localhost:${port}/login.html`);
});*/

app.listen(config.PORT, config.HOST, function () {
    console.log(`Servidor activo en http://${config.HOST}:${config.PORT}/login.html`);
  });