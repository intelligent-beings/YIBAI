
const path = require('path')
const webpack = require('webpack')
module.exports = {
//   chainWebpack: config => {
//     config.module
//       .rule('images')
//       .use('url-loader')
//       .tap(args => {
//           return [
//               {
//                 limit: 4096,
//                 fallback: {
//                   loader: 'file-loader',
//                   options: {
//                     name: 'img/[name].[hash:0].[ext]'
//                   }
//                 }
//               }
//           ]
//       })

// },

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
    host: '127.0.0.1',
    port: 8080,
    https:false,
    hotOnly: false,
    proxy: null,
    before: app => {},
    
  },
 
  

}
