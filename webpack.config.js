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
  ],
  externals: {
    'react/addons': true,
    'react/lib/ExecutionEnvironment': true,
    'react/lib/ReactContext': true
  }
}

module.exports = config
