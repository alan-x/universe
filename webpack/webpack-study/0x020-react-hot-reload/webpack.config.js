const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack')

module.exports = {
    entry: [
        'react-hot-loader/patch',
        path.resolve(__dirname, 'src/index.js')
    ],
    output: {
        path: path.join(__dirname, 'build'),
        filename: '[hash].js'
    },
    mode: 'development',
    devtool: "source-map",
    devServer: {
        host: '0.0.0.0',
        index: 'index.html',
        hot: true
    },
    module: {

        rules: [
            {
                test   : /\.js$/,
                exclude: /node_modules/,
                enforce: "pre",
                include: [path.resolve(__dirname, 'src')],
                loader : "eslint-loader",
            },
            {
                test   : /\.js$/,
                loader: 'babel-loader',
                exclude:/node_modules/,
                include:path.resolve(__dirname,'src')
            },
            {
                test: /\.(scss|css)$/,
                use : [
                    {
                        loader: "style-loader"
                    },
                    {
                        loader: "css-loader"
                    },
                    {
                        loader: "postcss-loader"
                    },
                    {
                        loader: "sass-loader"
                    }]
            }
        ]
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new HtmlWebpackPlugin({
            title: 'React环境搭建',
            filename: 'index.html',
            template: path.resolve(__dirname, 'src/index.html'),
            minify: {
                collapseWhitespace: true,
            },
        }),
    ]
}
