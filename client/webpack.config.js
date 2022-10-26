const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  mode: process.env.NODE_ENV,
  entry: './index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/',
    filename: 'bundle.js',
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Development',
      template: 'index.html',
    }),
    new MiniCssExtractPlugin(),
  ],
  devServer: {
    hot: true,
    proxy: {
      '/api/**': {
        target: 'http://localhost:3000',
        secure: false,
      },
    },
    compress: true,
    port: 8080,
    static: {
      // match the output path
      directory: path.resolve(__dirname, 'dist'),
      // match the output 'publicPath'
      publicPath: '/',
    },
  },
  module: {
    rules: [
      {
        test: /.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'],
          },
        },
      },
      {
        test: /\.s[ac]ss$/i,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
      {
        test: /\.(png|jpe?g|gif)$/i,
        use: [
          {
            loader: 'file-loader'
          }
        ]
      }
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
};
