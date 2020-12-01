var webpack = require('webpack');

module.exports = {
    entry: './app/index.js',
    mode: 'development',
    output: {
        path: __dirname,
        filename: '../resources/static/bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                query: {presets: ['@babel/preset-env', '@babel/react']}
            },
            {
                test: /\.css$/,
                loader: 'css-loader',
                options: {modules: true}
            },

        ]
    },
    plugins: [new webpack.HotModuleReplacementPlugin()]
};