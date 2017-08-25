const HtmlWebpackPlugin = require('html-webpack-plugin') // installed via npm
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
      { test: /\.js$/, use: 'babel-loader' },
      { test: /\.styl$/, use: [ 'style-loader', 'css-loader', 'stylus-loader' ] },
      { test: /\.(png|svg|jpg|gif|jpeg)$/, use: [ 'file-loader' ] }
    ]
  },
  devServer: {
    contentBase: './build',
    historyApiFallback: {
      rewrites: [
        { from: /favicon.ico/, to: './src/favicon.ico' }
      ]
    }
  },
  plugins: [
    // new webpack.optimize.UglifyJsPlugin(),
    new HtmlWebpackPlugin({
      template: './src/index.html',
      filename: 'index.html'
    })
  ],
  externals: {
    'react/addons': true,
    'react/lib/ExecutionEnvironment': true,
    'react/lib/ReactContext': true
  }
}

module.exports = config
