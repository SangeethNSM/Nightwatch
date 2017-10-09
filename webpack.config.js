const path = require('path');
const BUILD_DIR = path.resolve(__dirname, '');
const ENTRY_DIR = path.resolve(__dirname, '');

var config = {
  entry: ENTRY_DIR + '/main.js',

  output: {
     path: BUILD_DIR,
     filename: 'index.js',
  },

  devServer: {
     inline: true,
     port: 8080
  },

  module: {
     loaders: [
        {
           test: /\.jsx?$/,
           exclude: /node_modules/,
           loader: 'babel-loader',

           query: {
              presets: ['es2015', 'react']
           }
        }
     ]
  }
}

module.exports = config;
