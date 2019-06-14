const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    library: 'Tagger',
    libraryTarget: 'umd',
    libraryExport: 'default',
    umdNamedDefine: true,
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  module: {
      rules: [
          {
              test: /\.css$/,
              use: [
                  'style-loader',
                  'css-loader',
              ]
          },
          { 
              test: /\.js$/,
              exclude: /node_modules/,
              loader: 'babel-loader'
         }
        ],
    },
        
};