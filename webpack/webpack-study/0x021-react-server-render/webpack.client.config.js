const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const webpack = require('webpack')

module.exports = {
  entry: [
    'webpack-hot-middleware/client',
    path.resolve(__dirname, 'src/client/client-entry.js'),
  ],
  output: {
    path: path.resolve(__dirname, 'build/client'),
    filename: 'static/[name].[hash].js',
    publicPath: '/build',
  },
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-react'],
        },
      },
    ],
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      title: 'React 服务端渲染',
      filename: 'index.html',
      template: path.resolve(__dirname, 'static/index.html'),
      minify: {
        collapseWhitespace: true,
      },
    }),
  ],
}
