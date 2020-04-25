const path = require('path');

module.exports = {
  entry: ['babel/polyfill', './src/index.tsx'],
  output: {
    path: `${__dirname}/dist`,
    filename: 'bundle.js'
  }
  module: {

  }
  plugins: []
}