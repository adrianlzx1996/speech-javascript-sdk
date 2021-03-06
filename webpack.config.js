// browserify output is slightly smaller, but webpack wins after minification & gzipping
module.exports = {
  entry: './index.js',
  output: {
    path: __dirname + '/dist',
    filename: 'watson-speech.js',
    library: 'WatsonSpeech',
    libraryTarget: 'umd'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      },
      {
        test: /index.js$/,
        loader: 'transform-loader?envify'
        // options: {...}
      }
    ]
  },
  mode: 'development'
};
