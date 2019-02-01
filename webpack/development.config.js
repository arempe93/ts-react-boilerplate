const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const DuplicatePackageCheckerPlugin = require('duplicate-package-checker-webpack-plugin')

module.exports = {
  mode: 'development',

  output: {
    filename: '[name].bundle.js'
  },

  devServer: {
    historyApiFallback: true,
    disableHostCheck: true,
    port: 3000,
    hot: true
  },

  resolve: {
    alias: {
      'react-dom': '@hot-loader/react-dom'
    }
  },

  devtool: 'cheap-module-eval-source-map',

  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('development'),
      '__DEVELOPMENT__': true
    }),
    new HtmlWebpackPlugin({
      title: '[development] - React Boilerplate'
    }),
    new webpack.NamedModulesPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
    new DuplicatePackageCheckerPlugin({ verbose: true })
  ]
}
