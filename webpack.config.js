var webpack = require('webpack');
var path = require('path');
var ExtractTextPlugin = require("extract-text-webpack-plugin");

var commonLoaders = [
  {
    test: /\.js$|\.jsx$/,
    loader: 'babel-loader',
    query: {
      "presets": ["es2015", "react", "stage-0"]
    },
    include: path.join(__dirname, 'src'),
    exclude: path.join(__dirname, 'node_modules')
  },
  { test: /\.json$/, loader: "json-loader" },
  { test: /\.css$|\.less$/,
    loader: ExtractTextPlugin.extract("style-loader", "css-loader!less-loader")
  },
  { test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: "url-loader?limit=10000&mimetype=application/font-woff" },
  { test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: "file-loader" }
  // { test: /\.(png|woff|woff2|eot|ttf|svg)$/, loader: 'url-loader?limit=100000' }
];

module.exports = {
  devtool: "source-map",
  entry: {
    // "flex-react-modal": './src/FlexReactModal',
    "FlexReactForm": './src/index',
    style: './src/stylesheets/style'
  },
  module: {
    loaders: commonLoaders
  },
  externals: [
    'react',
    'react-dom'
  ],
  output: {
    // The output directory as absolute path
    library: 'FlexReactForm',
    libraryTarget: 'umd',
    path: './dist',
    // The filename of the entry chunk as relative path inside the output.path directory
    filename: '[name].js'
    // The output path from the view of the Javascript
  },
  resolve: {
    extensions: ['', '.js', '.jsx', '.less', '.css']

    // Needed to direct the docs to the local version of the datepicker, this is not needed for
    // normal setup.
  },
  plugins: [
    new webpack.optimize.DedupePlugin(),
    new ExtractTextPlugin('style.css', { allChunks: true }),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV)
    })
  ]
};
