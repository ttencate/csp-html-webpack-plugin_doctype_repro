const CspHtmlWebpackPlugin = require('csp-html-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  mode: 'development',
  plugins: [
    new HtmlWebpackPlugin(),
    new CspHtmlWebpackPlugin(),
  ],
}
