const path = require('path')

module.exports = {
  entry: path.resolve(__dirname, 'src/client/server-entry.js'),
  output: {
    path: path.resolve(__dirname, 'build/server'),
    filename: 'server-entry.js',
    libraryTarget: 'commonjs2',
  },
  mode: 'development',
  target: 'node',
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
}
