const express = require('express');
const {resolve} = require('path');
const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');

const PORT = process.env.PORT || 3000;
const app = express();
const config = require('./webpack.config');
const compiler = webpack(config);

app.use(webpackDevMiddleware(compiler, {
	contentBase: resolve(__dirname, 'dist'),
	publicPath: '/',
	historyApplyFallback: true
}));

app.get('*', function(req,res){
	res.sendFile(resolve(__dirname,'dist','index.html'));
});

app.listen(PORT, function(){
	console.log('dev server running at localhost:' + PORT);
});