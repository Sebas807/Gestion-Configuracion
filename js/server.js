var express = require('express');
var webpack = require('webpack');
var webpackDevMiddleware = require('webpack-dev-middleware');
var webpackConfig = require('../webpack.config');

var app = express();
app.set('port',(process.env.PORT || 3000));
app.use('/static',express.static('css'));
app.use(webpackDevMiddleware(webpack(webpackConfig)));
var port = app.get('port');

app.get('/',function(req,res,next){
    res.send('Servidor ejecuntándose correctamente');
});

/* app.listen(app.get('port'),()=>{
    console.log('Servidor activo');
});*/

app.listen(port, () => {
    console.log(`Servidor activo en http://localhost:${port}/login.html`);
});