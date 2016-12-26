var path = require('path');
var webpack = require('webpack');
var HtmlwebpackPlugin = require('html-webpack-plugin');
//一些常用的路径
var ROOT_PATH = path.resolve(__dirname);
var BUILD_PATH = path.resolve(ROOT_PATH, 'build');
var APP_PATH = path.resolve(ROOT_PATH, 'app');


module.exports = {
    entry: {
        app: path.resolve(APP_PATH, 'app.jsx')
    },
    output: {
        path: BUILD_PATH,
        filename: 'buildle.js'
    },
    // 开启 dev source map
    devtool: 'eval-source-map',
    // 开启 webpack dev sever
    devServer: {
        historyApiFallback: true,
        hot: true,
        inline: true,
        progress: true
    },
    resolve: {
        extensions: ['', '.js', '.jsx'],
        root: APP_PATH
    },

    module: {
        // 配置 preLoaders, 将 eslint 添加进入
        preLoaders: [{
            test: /\.jsx?$/,
            loaders: ['eslint'],
            include: APP_PATH
        }],

        // 配置 loaders, 将 Babel 添加进入
        loaders: [{
            test: /\.jsx?$/,
            loaders: ['babel'],
            include: APP_PATH
        }]
    },

    // 配置 plugin
    plugins: [
        new HtmlwebpackPlugin({
            title: 'My first react app'
        })
    ]

}