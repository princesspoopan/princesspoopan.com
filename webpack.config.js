const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const FaviconsWebpackPlugin = require('favicons-webpack-plugin')
const webpack = require('webpack');

module.exports = {
  entry: './src/App.react.tsx',
  output: {
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, 'build')
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html'
    }),
    new webpack.HotModuleReplacementPlugin(),
    new FaviconsWebpackPlugin('./src/favicon.ico')
  ],

  optimization: {
    splitChunks: {
      chunks: 'all',
      minSize: 30000,
      maxSize: 0,
      minChunks: 1,
      maxAsyncRequests: 5,
      maxInitialRequests: 3,
      automaticNameDelimiter: '~',
      name: true,
      cacheGroups: {
        vendors: {
          test: /[\\/]node_modules[\\/]/,
          priority: -10
        },
        default: {
          minChunks: 2,
          priority: -20,
          reuseExistingChunk: true
        }
      }
    }
  },

  resolve: {
      extensions: [".ts", ".tsx", ".js", ".json"]
  },

  module: {
      rules: [
          // All files with a '.ts' or '.tsx' extension will be handled by 'awesome-typescript-loader'.
          { test: /\.tsx?$/, loader: "awesome-typescript-loader" },

          // All output '.js' files will have any sourcemaps re-processed by 'source-map-loader'.
          { enforce: "pre", test: /\.js$/, loader: "source-map-loader" },

          {
            test: /\.(css|styl)$/,
            use: ['style-loader', 'css-loader', 'stylus-loader']
          },
          {
            test: /\.(png|svg|jpg|gif|jpeg)$/,
            use: ['file-loader']
          },
          {
            test: /\.(woff|woff2|eot|ttf|otf)$/,
            use: ['file-loader']
          }
      ]
      
  },
};
