const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './chromPos/popup.js',
  output: {
    filename: 'popup.bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './chromPos/popup.html',
      filename: 'popup.html'
    })
  ],
  mode: 'production'
};
