const WebpackHtmlPlugin = require('html-webpack-plugin')
const path = require('path')

module.exports = {
    entry: path.resolve(__dirname, 'app.js'),
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    mode: 'development',
    devServer:{

    },
    externals: {
        vDom: require('../dist/bundle')
    },
    module: {
        rules: [{
            test: /\.js$/,
            exclude: /nodule_modules/,
            loader: 'babel-loader'
        }]
    },
    plugins: [
        new WebpackHtmlPlugin({
            template: 'index.html'
        })
    ]
}
