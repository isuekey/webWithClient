const merge = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge.merge(common, {
  mode: 'production',
  devtool: 'cheap-module-source-map',
});
