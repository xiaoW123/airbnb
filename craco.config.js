const CracoLessPlugin = require("craco-less")

const path = require('path')
const resolve = pathname => path.resolve(__dirname, pathname)


module.exports = {
  // less 
  plugins: [  // 配置less
    {
      plugin: CracoLessPlugin
    },
  ],
  // webpack
  webpack: {
    alias: {  // 配置路径别名,必须是绝对路径,使用path模块进行拼接
      "@": resolve("src"),
      "component": resolve("src/component"),
      "utils": resolve("src/utils")
    }
  }
}