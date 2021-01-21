// vue.config.js

//process.env.VUE_APP_VERSION = require('./package.json').version

module.exports = {
  publicPath: (process.env.runPath ? process.env.runPath : '/' ),
  outputDir: (process.env.runDir ? process.env.runDir : 'dist')
  
  //process.env.NODE_ENV === 'production'
  //  ? '/production-sub-path/'
  //  : '/yy'

}