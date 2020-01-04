``
const path = require('path')
const webpack = require('webpack')
module.exports = {
  publicPath: process.env.NODE_ENV === 'production' ? '/production-sub-path/' : '/', 
  outputDir: 'dist',  //打包输出目录名  

  assetsDir: 'static',  //放置打包生成的静态资源文件
  filenameHashing: false,   //生成文件中是否带有叫哈稀值  
  
  lintOnSave: false,     //eslint 每次保存后是否检查
  productionSourceMap: false,
  configureWebpack: {
    plugins: []
  },
  chainWebpack: config => {
  },
  css: {
    loaderOptions: {
      css: {
 
      },
      postcss: {
 
      }
    }
  },
  //设置代理
  devServer: {
    hot:true,//热加载
    open: true,   //自动打开浏览器
   
    hotOnly: false,
    //代理
    proxy: {
      "/api": {
          target: "http://openapi.tuling123.com", // 需要跨域的目标url，我这里用到的是豆瓣API
          changeOrigin: true, // 将基于名称的虚拟托管网站的选项，如果不配置，请求会报404
          ws: true,
          pathRewrite: {
            "^/api": ''
          }
        }
       
  },
    host: 'localhost',//本机Ip或localhost,
    before: app => {},
    
  },
 
  

}
