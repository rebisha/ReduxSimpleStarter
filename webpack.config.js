module.exports = {
  entry: ['./src/index.js'],
  output: {
    path: __dirname,
    publicPath: '/',
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
        exclude: /node_modules/,
        loader: 'babel',
        query: {
          presets: ['react', 'es2015', 'stage-1']
        }
      },
      {
        exclude: /node_modules/,
        test: /\.scss$/,
        loaders: ['style-loader', 'css-loader', 'sass-loader'],
    }
  ]
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  devServer: {
    historyApiFallback: true,
    contentBase: './',
	port:8088,
    watchOptions: {
      aggregateTimeout: 300,
      poll: 1000
    }
  }
};
