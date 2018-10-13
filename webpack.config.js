const HtmlWebpackPlugin = require('html-webpack-plugin')
const { resolve } = require('path')

module.exports = {
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      }
    ]
  },

  output: {
    filename: '[name].bundle.js'
  },

  devServer: {
    historyApiFallback: true,
    port: 3000
  },

  devtool: 'cheap-module-eval-source-map',

  plugins: [
    new HtmlWebpackPlugin({
      inject: 'body',
      template: resolve('public/index.ejs')
    })
  ]
}
