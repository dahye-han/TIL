const path = require('path');

// entry
module.exports = {
    entry: './path/to/my/entry/file.js',
};

// output
module.exports = {
  entry: './path/to/my/entry/file.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'my-first-webpack.bundle.js',
  },
};

// loader
module.exports = {
    output: {
      filename: 'my-first-webpack.bundle.js',
    },
    module: {
      rules: [{ test: /\.txt$/, use: 'raw-loader' }],
    },
};

// plugin
const HtmlWebpackPlugin = require('html-webpack-plugin'); //installed via npm
const webpack = require('webpack'); //to access built-in plugins

module.exports = {
  module: {
    rules: [{ test: /\.txt$/, use: 'raw-loader' }],
  },
  plugins: [new HtmlWebpackPlugin({ template: './src/index.html' })],
};

// mode
module.exports = {
    mode: 'production',
};