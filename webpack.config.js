const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
var ManifestPlugin = require('webpack-manifest-plugin');

module.exports = {
	mode: 'development',
  entry: {
    app: './src/index.js',
    print: './src/print.js',
  },
  plugins: [
    new ManifestPlugin({
      fileName: 'webpack-manifest.json',
      basePath: '/src/',
      publicPath: '/dist/',
      seed: {
        name: 'Webpack Manifest'
      }
    }),
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      title: 'Output Management',
    })
  ],
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
	},
};