module.exports = {
    publicPath: './',//publicPath取代了baseUrl
    // assetsPublicPath: "./",
    outputDir: 'dist',
    lintOnSave: true,
    runtimeCompiler: true, //关键点在这  原来的 Compiler 换成了 runtimeCompiler
    // 调整内部的 webpack 配置。
    chainWebpack: () => {},
    configureWebpack: () => {},
    // 配置 webpack-dev-server 行为。
    devServer: {
      open: process.platform === 'darwin',
      host: '0.0.0.0',
      port: 8080,
      proxy: null, // string | Object
      before: app => {}
    },
}