// vue.config.js

//process.env.VUE_APP_VERSION = require('./package.json').version
//console.log("All config ENV =",process.env)
module.exports = {
  //publicPath: (process.env.VUE_APP_BASE_URL ? process.env.VUE_APP_BASE_URL : '/' ),
  //publicPath: "/geodes", 
  outputDir: (process.env.VUE_APP_BUILD_DIR ? process.env.VUE_APP_BUILD_DIR : 'dist'),
  publicPath: process.env.NODE_ENV === 'production'
    ?  process.env.VUE_APP_BASE_URL 
    : '/'

}