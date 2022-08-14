const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave: false,
  // 解决动态挂载
  runtimeCompiler: true,
  devServer: {
    proxy: {
      '/api': {
        target: 'http://www.yankeyu.top:8088',
        pathRewrite: { '^/api': '' },
      }
    }
  }
})
