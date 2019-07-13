const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ScriptExtHtmlWebpackPlugin = require('script-ext-html-webpack-plugin');
module.exports = {
	entry: path.join(__dirname, 'src/index.js'),
	output: {
		path: path.join(__dirname, 'dist'),
		filename: '[name].bundle.js',
	},
	mode: 'development',
	devServer: {
		contentBase: './dist',
		inline: true,
		port: 3000,
	},
	module: {
		rules: [
			{
				test: /\.js/,
				exclude: /(node_modules|bower_components)/,
				use: [
					{
						loader: 'babel-loader',
					},
				],
			},
		],
	},
	plugins: [
		new HtmlWebpackPlugin({
			title: 'Custom template',
			template: path.join(__dirname, 'src/index.template.html'),
		}),
		new ScriptExtHtmlWebpackPlugin({
			defaultAttribute: 'defer',
		}),
	],
	stats: {
		colors: true,
	},
	devtool: 'source-map',
};
