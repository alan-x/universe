const path = require('path');

module.exports={
	mode: 'development',
	target: 'node',
	entry: path.resolve(__dirname, 'src/server/index.js'),
	output: {
		path: path.resolve(__dirname, 'dist/server'),
		filename: 'index.bundle.js',
		globalObject: 'this',
		chunkFilename: '[name].[chunkhash:5].chunk.js',
	},
	module:{
		rules: [{
			test: /\.js$/,
			loader: 'babel-loader'
		},{
			test: /\.html$/,
			loader: 'html-loader'
		}, {
			test: /\.(css|scss)$/,
			loader: ['css-loader', 'sass-loader']
		}]
	},
};
