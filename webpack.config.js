const path = require('path');
const webpack = require('webpack');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist')
	},
	resolve: {
		extensions: ['*', '.js', '.tag', '.jsx']
	},
	plugins: [
    new webpack.ProvidePlugin({
      oval: 'organic-oval'
    })
	],
	module: {
		rules: [
			{
				test: /\.(js|jsx|tag)$/,
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader',
					options: {
						plugins: [
							'transform-es2015-arrow-functions',
							['transform-react-jsx', { pragma: 'createElement' }]
						],
						presets: ['@babel/preset-env']
					}
				}
			}
    ]
	}
};