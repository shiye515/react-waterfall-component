const path = require('path')

module.exports = {
  mode: 'production',
  entry: './src/ReactWaterfallComponent.js',
  output: {
    filename: 'ReactWaterfallComponent.js',
    path: path.resolve(__dirname, 'lib'),
    library: 'ReactWaterfallComponent',
    libraryTarget: 'umd'
  },
  externals: [
    'react',
    'react-dom'
  ],
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        use: ['babel-loader'],
        exclude: /node_modules/
      }
    ]
  }
}
