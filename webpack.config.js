const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
var ManifestPlugin = require('webpack-manifest-plugin');

var distributionPath = 'dist';
var sourcePath = 'src';

module.exports = {
	mode: 'development',
  entry: {
    app: './src/index.js',
    print: './src/print.js',
  },
  devtool: 'inline-source-map',
  devServer: {
      contentBase: path.join(__dirname, distributionPath),
      quiet: true, // Terminal console
      noInfo: false, // Terminal console
      clientLogLevel: 'silent', // Browser console  
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, distributionPath),
  },
  plugins: [
    new ManifestPlugin({
      fileName: 'webpack-manifest.json',
      basePath: '/' + sourcePath + '/',
      publicPath: '/' + distributionPath + '/',
      seed: {
        name: 'Webpack Manifest'
      }
    }),
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      title: 'Output Management',
      favicon: sourcePath + '/favicon.png',
    })
  ],
  module: {
    rules: [
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: [
          'file-loader',
        ],
      },
    ],
  }
};