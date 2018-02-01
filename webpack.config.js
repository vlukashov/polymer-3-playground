const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

const OUTPUT_FOLDER = 'build';

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, OUTPUT_FOLDER)
  },
  plugins: [
    new CleanWebpackPlugin([OUTPUT_FOLDER]),
    new HtmlWebpackPlugin({
      template: 'src/index.html'
    }),
    new CopyWebpackPlugin([
      { from: 'node_modules/@stencil/router/dist/stencilrouter', to: 'stencilrouter' }
    ])
  ],
};
