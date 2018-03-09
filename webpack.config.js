const path = require("path");

module.exports = {
  devtool: 'inline-source-map',
  entry: './src/index.ts',
  output: {
    path: path.resolve('public'),
    filename: 'build/app.js'
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js']
  },
  module: {
    rules: [
      { test: /\.(ts|tsx)$/, loader: 'ts-loader' }
    ]
  }
}
