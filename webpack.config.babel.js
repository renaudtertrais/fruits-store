import merge from 'webpack-merge';

import entry from './webpack/entry';
import output from './webpack/output';
import babel from './webpack/babel';
import style from './webpack/style';
import html from './webpack/html';
import devServer from './webpack/devServer';
import rule from './webpack/rule';
import copy from './webpack/copy';
import extensions from './webpack/extensions';

export default merge.smart(
  entry(['babel-polyfill', './src/index.js']),
  output('./build/bundle.js'),
  html('./src/index.html'),
  babel(),
  style('bundle.css'),
  devServer('localhost:3000'),
  rule(/\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2)$/, 'file-loader'),
  copy('./src/assets'),
  extensions('.js', '.jsx'),
);

