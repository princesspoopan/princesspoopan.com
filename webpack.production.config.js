const baseConfig = require('./webpack.config');
const TerserPlugin = require('terser-webpack-plugin');

module.exports = {
  ...baseConfig,
  mode: 'production',

  optimization: {
    ...baseConfig.optimization,
    minimizer: [new TerserPlugin()]
  },
};
