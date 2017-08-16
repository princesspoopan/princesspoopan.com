const HtmlWebpackPlugin = require('html-webpack-plugin') //installed via npm
const webpack = require('webpack') //to access built-in plugins
const path = require('path')

const config = {
  entry: './src/App.react.js',
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'js/bundle.js'
  },
  module: {
    rules: [
      { test: /\.js$/, use: 'babel-loader' }
    ]
  },
  devServer: {
    contentBase: './build'
  },
  plugins: [
    // new webpack.optimize.UglifyJsPlugin(),
    new HtmlWebpackPlugin({
      template: './src/index.html',
      filename: 'index.html'
    })
  ]
};

module.exports = config;
