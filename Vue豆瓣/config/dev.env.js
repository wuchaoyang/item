var merge = require('webpack-merge')  //合并webpack配置文件
var prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"'
})
