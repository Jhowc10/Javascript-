const path = require('path'); // CommonJS

module.exports = {
  mode: 'production',
  entry: './src/main.js',
  output: {
    path: path.resolve(__dirname, 'public', 'assets', 'js'),
    filename: 'bundle.js'
  },
  module: {
    rules: [{                             // Ojt para JS
      exclude: /node_modules/,
      test: /\.js$/,
      use: {
        loader: 'babel-loader',
        options: {
          presets: ['@babel/env']
        }
      }
    }, {                                   // Obj para css
      test: /\.css$/,
      use: ['style-loader', 'css-loader']
    }]
  },
  devtool: 'source-map'
};

// Para instalar os modulos para css digite no node o camando
//  ***** npm install style-loader css-loader *****
