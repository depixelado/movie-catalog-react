const path = require('path');
const Dotenv = require('dotenv-webpack');

module.exports = {
  devtool: 'source-map',
  context: path.join(__dirname, 'src'),
  entry: [
    './main.js',
  ],
  output: {
    path: path.join(__dirname, 'www'),
    filename: 'bundle.js',
  },
  plugins: [
    new Dotenv({
      path: './.env', // Path to .env file (this is the default) 
      // safe: true // load .env.example (defaults to "false" which does not use dotenv-safe) 
    })
  ],
  module: {
    rules: [
      // Javascript files
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [
          'babel-loader',
        ],
      },
      
      // SASS
      {
        test: /\.scss$/,
        loaders: ['style-loader', 'css-loader', 'sass-loader']
      }
    ],
  },
  resolve: {
    modules: [
      path.join(__dirname, 'node_modules'),
    ],
  },  
};