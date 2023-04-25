const path = require('path');
const webpack = require('webpack');
const htmlWebpackPlugin = require('html-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports={
    mode:'development',
    entry: {
        login: './js/login.js',
        interfaz_admin: './js/interfaz_admin.js',
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
    ]
};