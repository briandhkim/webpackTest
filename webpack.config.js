const path = require('path');

module.exports ={
	entry: './src/index.js',
	output: {
		filename: 'bundle.js',
		path: path.resolve(__dirname, 'dist')
	},
	devtool:'inline-source-map',
	module:{
		rules:[
			{
				test: /\.js$/,
				exclude: /node_modules/,
				loader: 'babel-loader'
			},
			{
				test: /\.css$/,
				use: [
					'style-loader',
					'css-loader'
				]
			},
			{
				test: /\.(png|svg|gif|jpe?g)$/,
				use: {
					loader: 'file-loader',
					options: {
						outputPath: 'images/'
					}
				}
			}
		]
	}
}