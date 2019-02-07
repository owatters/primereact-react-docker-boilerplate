const path = require("path");
const htmlwebpackplugin = require('html-webpack-plugin');
const webpack = require('webpack');
module.exports = {
  entry: "./src/index.js",
  watch: true,
  watchOptions: {
    poll: true,
    ignored: /node_modules/
  },
  output: {
    path: path.resolve(__dirname,"public"),
 
    filename: 'bundle[hash].js'
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /(node_modules|bower_components)/,
        loader: "babel-loader",
        options: { 
          presets: ["@babel/env", "@babel/preset-react"],
          plugins: [
            "@babel/plugin-proposal-class-properties"
          ]
      }},
      {
        test: /\.(scss|css)$/,
        use: (["style-loader", "css-loader","sass-loader"])
      },

      {
        test: /\.(gif|png|jpe?g|svg)$/,
        use:(["file-loader","url-loader"])
        
      },
      {
          test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
          use: [{
              loader: 'file-loader',
              options: {
                  name: '[name].[ext]',
                  outputPath: 'fonts/'
              }
          }]
      }
    ]
  },
  mode: "development",
  plugins: [
  new htmlwebpackplugin({
    template : "./src/index.html",
  }),
  new webpack.HotModuleReplacementPlugin()
]
};