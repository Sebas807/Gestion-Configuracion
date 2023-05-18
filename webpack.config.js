const path = require('path');
const webpack = require('webpack');
const htmlWebpackPlugin = require('html-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const mode = process.env.NODE_ENV === 'production' ? 'production' : 
            process.env.NODE_ENV === 'testing' ? 'testing' : 'development';

module.exports={
    mode: mode,
    entry: {
        login: './js/login.js',
        interfaz_admin: './js/interfaz_admin.js',
        agregar_evento: './js/agregar_evento.js',
    },
    output:{
        path: path.resolve(__dirname, 'css'),
        filename: '[name].bundle.js',
    },
    module:{
        rules:[
            {
                test:/\.css$/,
                use:['style-loader','css-loader']
            }
        ]
    },
    plugins:[
        new htmlWebpackPlugin({
            filename:'login.html',
            template:'./html/login.html'
        }),
        new htmlWebpackPlugin({
            filename:'interfaz_admin.html',
            template:'./html/interfaz_admin.html'
        }),
        new htmlWebpackPlugin({
            filename:'agregar_evento.html',
            template:'./html/agregar_evento.html'
        }),
    ]
};