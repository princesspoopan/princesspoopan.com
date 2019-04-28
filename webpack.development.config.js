const baseConfig = require('./webpack.config');

module.exports = {
  ...baseConfig,
  mode: 'development',
  
  devtool: "inline-source-map",

  devServer: {
    contentBase: './dist',
    hot: true
  }
};
