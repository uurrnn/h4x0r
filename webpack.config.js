'use strict';

const webpack = require('webpack');
const path = require('path');

// Phaser webpack config
const phaserModule = path.join(__dirname, '/node_modules/phaser/');
const phaser = path.join(phaserModule, 'build/custom/phaser-split.min.js');
const pixi = path.join(phaserModule, 'build/custom/pixi.min.js');
const arcade = path.join(phaserModule, 'build/custom/phaser-arcade-physics.min.js');


module.exports = {
  context: __dirname + '/src',
  entry: {
    app: './app.js',
  },
  output: {
    path: __dirname + '/dist',
    filename: '[name].bundle.js',
    publicPath: '/assets',
  },
  devServer: {
    contentBase: __dirname + "/src",
    watchContentBase: true,
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: [{
          loader: "babel-loader",
          options: { presets: ["es2015"] }
        }],
      },
      {
        test: /\.(sass|scss)$/,
        use: [
          "style-loader",
          "css-loader",
          "sass-loader",
        ]
      },
    ],
    loaders: [
     { test: /pixi\.js/, loader: 'expose?PIXI' },
     { test: /phaser-split\.js$/, loader: 'expose?Phaser' },
     { test: /p2\.js/, loader: 'expose?p2' }
   ]
  },
  resolve: {
    alias: {
      'phaser': phaser,
      'pixi': pixi,
      'arcade': arcade
    }
  },
};
