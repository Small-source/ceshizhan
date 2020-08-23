const webpack = require("webpack");
const path = require('path');
// const BASE_URL = process.env.NODE_ENV == 'production' ? '/career/': '/';
function resolve(dir) {
  return path.join(__dirname, dir) // path.join(__dirname)设置绝对路径
}
module.exports = {
    devServer: {
        port: process.env.PORT || 8080,
        proxy: {
            '/api': {
                target: 'http://39.98.37.134:8081',//测试环境
                changeOrigin: true,
                pathRewrite: {
                    '^/api': '/api'
                }
            },
            '/papi': {
                target: 'http://39.98.37.134:8081',//测试环境
                changeOrigin: true,
                pathRewrite: {
                    '^/papi': '/api'
                }
            },
        }
    },
    configureWebpack: config => {
        if (process.env.NODE_ENV !== 'production') return;
        return {
            plugins: [
                new webpack.ProvidePlugin({
                    $: 'jquery',
                    jQuery: 'jquery',
                    'window.jQuery': 'jquery',
                    Popper: ['popper.js', 'default']
                })
            ],
        };
    },
    chainWebpack: config => {
        config.resolve.alias
          .set('@', resolve('./src'))
        // set第一个参数：设置的别名，第二个参数：设置的路径
    }
    // publicPath:BASE_URL
}
