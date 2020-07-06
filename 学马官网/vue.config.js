const PrerenderSPAPlugin = require('prerender-spa-plugin');
const Renderer = PrerenderSPAPlugin.PuppeteerRenderer;
const path = require('path');
module.exports = {
    // devServer: {
    //     // host: 'localhost',
    //     port: process.env.PORT || 8080,
    //     proxy: {
    //         '/api': {
    //             target: 'http://www.xuematech.com/',//测试环境
    //             // target: 'http://39.98.37.134:8003', // 生产环境
    //             changeOrigin: true,
    //             pathReWrite: {
    //                 '^/api': ''
    //             }
    //         }
    //     }
    // },

    // devServer: {
    //     open: true,
    //     host: 'localhost',
    //     // host: 'www.xuemaedu.com',
    //     port: 8080,
    //     https: false,
    //     //以上的ip和端口是我们本机的;下面为需要跨域的
    //     proxy: {//配置跨域
    //         '/api': {
    //             target: 'http://www.xuematech.com/papi/',//这里后台的地址模拟的;应该填写你们真实的后台接口;
    //             // target: 'http://39.98.37.134:8002', //这里后台的地址模拟的;应该填写你们真实的后台接口;
    //             ws: true,
    //             changOrigin: true,//允许跨域
    //             pathRewrite: {
    //                 '^/api': ''//请求的时候使用这个api就可以
    //             }
    //         }
    //     }
    // },


    configureWebpack: config => {
        if (process.env.NODE_ENV !== 'production') return;
        return {
            plugins: [
                new PrerenderSPAPlugin({
                    // 生成文件的路径，也可以与webpakc打包的一致。
                    // 下面这句话非常重要！！！
                    // 这个目录只能有一级，如果目录层次大于一级，在生成的时候不会有任何错误提示，在预渲染的时候只会卡着不动。
                    staticDir: path.join(__dirname,'dist'),
                    // 对应自己的路由文件，比如a有参数，就需要写成 /a/param1。
                    routes: ['/','/newsDetail','/xuemaNews','/vipEscort','/researchCamp','/attractInvestment','/home', '/aboutus/jianjie', '/aboutus/callus', '/xingaokao', '/pingtaixitong', '/shengyaceping', '/xuankejuece', '/zhinengpaike', '/jiaofuziyuan', '/zonghesuzhi', '/gaokaozhiyuan', '/zoubanxiaoyuan', '/zoubankaoshixitong', '/shengyazhidao', '/shengyakecheng', '/shengxueguihua', '/zhiyuantianbaozhidao', '/zizhaozongping', '/beijingtisheng','/spainstudy', '/shangwuhezuo'],
                    // 这个很重要，如果没有配置这段，也不会进行预编译
                    renderer: new Renderer({
                        inject: {
                            foo: 'bar'
                        },
                        headless: false,
                        // 在 main.js 中 document.dispatchEvent(new Event('render-event'))，两者的事件名称要对应上。
                        renderAfterDocumentEvent: 'render-event'
                    })
                }),
            ],
        };
    }
}