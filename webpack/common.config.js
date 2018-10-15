const HtmlWebpackPlugin = require('html-webpack-plugin')
const { resolve } = require('path')
const merge = require('webpack-merge')

const env = process.env.NODE_ENV || 'development'
const envConfig = require(`./${env}.config.js`)

const common = {
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      }
    ]
  },

  plugins: [
    new HtmlWebpackPlugin({
      inject: 'body',
      template: resolve('public/index.ejs')
    })
  ]
}

module.exports = merge(envConfig, common)
