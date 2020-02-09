const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
var ManifestPlugin = require('webpack-manifest-plugin');

var distributionDir = 'dist';
var sourceDir = 'src';

module.exports = {
	mode: 'development',
  entry: {
    app: `./${sourceDir}/index.js`,
  },
  devtool: 'inline-source-map',
  devServer: {
      contentBase: path.join(__dirname, distributionDir),
      hot: true,
      quiet: false, // Terminal console
      noInfo: false, // Terminal console
      //clientLogLevel: 'silent', // Browser console  
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, distributionDir),
  },
  plugins: [
    new ManifestPlugin({
      fileName: 'webpack-manifest.json',
      basePath: `/${sourceDir}/`,
      publicPath: `/${distributionDir}/`,
      seed: {
        name: 'Webpack Manifest'
      }
    }),
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      title: 'Output Management',
      favicon: `${sourceDir}/favicon.png`,
    })
  ],
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: [
          'file-loader',
        ],
      },
    ],
  }
};