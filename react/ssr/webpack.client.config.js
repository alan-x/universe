const path = require('path');

module.exports={
	mode: 'development',
	target: 'node',
	entry: path.resolve(__dirname, 'src/client/index.js'),
	output: {
		path: path.resolve(__dirname, 'dist/client'),
		filename: 'index.bundle.js',
		chunkFilename: '[name].[chunkhash:5].chunk.js',
	},
	module:{
		rules: [{
			test: /\.js$/,
			loader: 'babel-loader'
		}, {
			test: /\.(css|scss)$/,
			loader: ['style-loader', 'css-loader', 'sass-loader']
		}]
	},
};
