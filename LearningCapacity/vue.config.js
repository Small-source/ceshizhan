const webpack = require("webpack");
const path = require('path');
// const BASE_URL = process.env.NODE_ENV == 'production' ? '/career': '/';
module.exports = {
    devServer: {
        port: process.env.PORT || 8080,
        proxy: {
            '/api': {
                target: 'http://39.98.37.134:8088',//测试环境
                changeOrigin: true,
                pathRewrite: {
                    '^/api': '/'
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
    // publicPath:BASE_URL
}
