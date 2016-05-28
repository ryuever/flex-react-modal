var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

var commonLoaders = [
  {
    test: /\.js$|\.jsx$/,
    loader: 'babel-loader',
    query: {
      "presets": ["es2015", "react", "stage-0"]
    },
    include: path.join(__dirname, 'public'),
    exclude: path.join(__dirname, 'node_modules')
  },
  { test: /\.json$/, loader: "json-loader" },
  { test: /\.css$|\.less$/,
    loader: ExtractTextPlugin.extract("style-loader", "css-loader!less-loader")
    // loaders: ['style', 'css']
  }
];

module.exports = {
  devtool: "source-map",
  entry: {
    app: './public/App'
  },
  output: {
    path: path.resolve('./public/'),
    filename: 'bundle.js',
    publicPath: '/'
  },
  resolve: {
    extensions: ['', '.js', '.jsx', '.less', '.css']

    // Needed to direct the docs to the local version of the datepicker, this is not needed for
    // normal setup.
  },
  module: {
    loaders: commonLoaders
  },
  node: { Buffer: false },
  plugins: [
    // new webpack.optimize.UglifyJsPlugin({
    //   compress: {
    //     warnings: false
    //   }
    // }),
    new webpack.optimize.DedupePlugin(),
    new ExtractTextPlugin('style.css', { allChunks: true }),
    // new ExtractTextPlugin('style.css'),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV)
    })
  ]
}
