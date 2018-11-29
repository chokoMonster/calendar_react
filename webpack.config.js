const path = require('path');
 
module.exports = {
  context: path.join(__dirname, 'src'),
  entry: [
    './main.js',
  ],
  output: {
    path: path.join(__dirname, 'www'),
    filename: 'bundle.js',
  },
  module: {
	loaders:[
	{
        test: /\.js$/,
        exclude: /node_modules/,
        use: [
          'babel-loader',
        ],
      },
	{
        test: /\.css$/,
		exclude: /node_modules/,
		use: ['style-loader', 'css-loader'],
        },
		
		{ test: /\.(eot|woff|woff2|svg|ttf)([\?]?.*)$/, loader: "file-loader" },

		],
  },
  resolve: {
    modules: [
      path.join(__dirname, 'node_modules'),
    ],
  },
  node: {
	fs: 'empty',
	net: 'empty',
	module: 'empty'
	},
};