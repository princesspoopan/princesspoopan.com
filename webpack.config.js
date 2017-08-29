const HtmlWebpackPlugin = require('html-webpack-plugin')
const UglifyJSPlugin = require('uglifyjs-webpack-plugin')
const FaviconsWebpackPlugin = require('favicons-webpack-plugin')
require('webpack') // to access built-in plugins
const path = require('path')

const config = {
  entry: {
    'app': [
      'react-hot-loader/patch',
      './src/App.react.js'
    ]
  },
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'js/bundle.js?' + (new Date()).getTime()
  },
  module: {
    rules: [
      { test: /\.js$/, use: 'babel-loader', exclude: '/node_modules/' },
      { test: /\.(css|styl)$/, use: [ 'style-loader', 'css-loader', 'stylus-loader' ] },
      { test: /\.(png|svg|jpg|gif|jpeg)$/, use: [ 'file-loader' ] },
      { test: /\.(woff|woff2|eot|ttf|otf)$/, use: [ 'file-loader' ] }
    ]
  },
  devServer: {
    contentBase: './build'
  },
  plugins: [
    new UglifyJSPlugin(),
    new HtmlWebpackPlugin({
      template: './src/index.html',
      filename: 'index.html'
    }),
    new FaviconsWebpackPlugin('./src/favicon.ico')
  ],
  externals: {
    'react/addons': true,
    'react/lib/ExecutionEnvironment': true,
    'react/lib/ReactContext': true
  }
}

module.exports = config
