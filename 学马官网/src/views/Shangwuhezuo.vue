<template>
    <div class="shangwuhezuo">
        <!-- 通栏大banner -->
        <div class="banner">
            <img src="/imgs/shangwuhezuo/shangwuhezuobanner.jpg" alt="">
        </div>
        <!--  新契机 新市场 新前景 -->
        <div class="news">
            <div class="inner">
                <h5 class="dabiaoti">新契机 新市场 新前景</h5>
                <div class="underline"></div>
                <div class="content">
                    <ul class="lis">
                        <li v-for="(item, index) in news">
                            <img :src="item.url" alt="">
                            <p>{{item.xiangqing}}</p>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        <!-- 6大服务支持，共赢广阔市场 -->
        <div class="gongying">
            <div class="inner">
                <h5 class="dabiaoti">
                    6大服务支持，共赢广阔市场
                </h5>
                <div class="underline"></div>
                <div class="content">
                    <div :class="activeLiuda ? 'active' : 'neirongBox'" v-for="(item, index) in gongying">
                        <div class="arrowTop"></div>
                        <div class="arrowFt"></div>
                        <div class="num">{{item.num}}</div>
                        <div class="textBox">
                            <div class="title">{{item.titles}}</div>
                            <div class="xiangqing">{{item.xiangqing}}</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- 合作方式 -->
        <div class="hezuo">
            <div class="inner">
                <h5 class="dabiaoti">合作方式</h5>
                <div class="underline"></div>
                <div class="content">
                    <div class="top">
                        <img src="/imgs/shangwuhezuo/chanpinhezuo.png" alt="" class="neirongBox">
                        <div class="neirongBox">
                            <p class="num">(二)</p>
                            <p class="title">系统平台OEM+产品合作</p>
                            <p class="xiangqing">提供平台系统技术外包服务，即将学马的 平台系统通过技术改造，打造成为具有乙方专属品牌属性的生涯系统</p>
                        </div>
                        <img src="/imgs/shangwuhezuo/jiameng.png" alt="" class="neirongBox">
                    </div>
                    <div class="foot">
                        <div class="neirongBox">
                            <p class="num">(一)</p>
                            <p class="title">产品合作</p>
                            <p class="xiangqing">购买学马产品，学马提供产品及师资培训</p>
                        </div>
                        <img src="/imgs/shangwuhezuo/oem.png" alt="" class="neirongBox">
                        <div class="neirongBox">
                            <p class="num">(三)</p>
                            <p class="title">加盟+产品合作</p>
                            <p class="xiangqing">加盟合同期限三年，甲方授权乙方使用甲 方平台系统及品牌、提供核心岗位的岗位培训、宣传物料、教材</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- 加盟流程 -->
        <div class="liucheng">
            <div class="inner">
                <h5 class="dabiaoti">加盟流程</h5>
                <div class="underline"></div>
                <div class="content">
                    <ul class="lis">
                        <li v-for="(item, index) in liucheng" :key="index">
                            <div :class="activeTubiao === index ? 'active' : 'tubiao'" :style="item.tubiao">
                            </div>
                            <p class="title" v-html="item.titles"></p>
                            <div class="num" @mouseenter="enter(index)">{{item.num}}</div>
                        </li>
                    </ul>
                    <div class="xian"></div>
                </div>
            </div>
        </div>
        <!-- 加盟条件 -->
        <div class="tiaojian">
            <div class="inner">
                <h5 class="dabiaoti">加盟条件</h5>
                <div class="underline"></div>
                <div class="content">
                    <p v-for="(item, index) in tiaojian" :key="index" :class="'no' + index" v-html="item.xiangqing"></p>
                </div>
            </div>
        </div>
        <!-- 合作案例 -->
        <div class="anli">
            <div class="inner">
                <h5 class="dabiaoti">合作案例</h5>
                <div class="underline"></div>
                <div class="content">
                    <div class="neirongBox" v-for="(item, index) in anli">
                        <img :src="item.url" alt="">
                        <p class="xiangqing">{{item.xiangqing}}</p>
                    </div>
                </div>
            </div>
        </div>
        <div class="callus">
            <div class="inner">
                <div class="text">
                    <p class="title">联系我们</p>
                    <p class="tel">400-998-2972</p>
                </div> 
            </div>
        </div>
    </div>
</template>
<style type="text/css" lang="less" scoped>
* {
    list-style: none;
    text-decoration: none;
}
.shangwuhezuo {
    // 通栏大banner
    .banner {
        width: 100%;
        font-size: 0px;
        line-height: 0px;
        img {
            width: 100%;
        }
    }
    .inner {
        width: 1200px;
        margin: 0 auto;
        // overflow: hidden;
    }
    // 大标题h5
    .dabiaoti {
        text-align: center;
        font-size: 24px;
        color: #156dfe;
        line-height: 24px;
        height: 24px;
        margin-bottom: 20px;
        // font-weight: bold;
    }
    // 下方的横线
    .underline {
        width: 60px;
        height: 4px;
        margin: 0 auto;
        background-color: #156dfe;
        margin-bottom: 35px;
    }
    // 新契机 新市场 新前景
    .news {
        padding: 60px 0px;
        .content {
            padding-top: 65px;
            .lis {
                height: 255px;
                li {
                    float: left;
                    position: relative;
                    top: 0px;
                    padding-top: 90px;
                    width: 230px;
                    border-radius: 5px;
                    box-shadow: 0 0 20px rgba(176, 224, 251, .5);
                    height: 165px;
                    margin-right: 93px;
                    &:hover {
                        top: -10px;
                        box-shadow: 0 5px 5px #156dfe;
                        transition: all 1s;
                    }
                    &:last-child {
                        margin-right: 0px;
                    }

                    p {
                        padding: 0px 20px;
                        font-size: 16px;
                        line-height: 24px;
                        color: #333;
                    }
                    img {
                        position: absolute;
                        width: 124px;
                        height: 124px;
                        border-radius: 50%;
                        left: 50%;
                        margin-left: -62px;
                        top: -62px;
                    }
                }
            }
        }
    }
    // 6大服务支持，共赢广阔市场
    .gongying {
        padding-top: 60px;
        background-color: #f8f8f8;
        .content {
            height: 1445px;
            overflow: hidden;
            // position: relative;
            .active {
                .neirongBox;
                &:nth-child(even) {
                    left: 0px;
                    // top: 0px;
                    .num {
                        float: right;
                    }
                    .textBox {
                        padding-left: 0px;
                    }
                }
                left: 0px;
                transition: all 1.5s;
            }
            .neirongBox {
                width: 1140px;
                height: 180px;
                padding: 0px 30px;
                background-color: #fff;
                position: relative;
                // overflow: hidden;
                box-shadow: 0 0 20px rgba(176, 224, 251, .5);
                border-radius: 5px;
                margin-bottom: 60px;
                left: -100%;
                top: 0px;
                &:nth-child(even) {
                    left: 100%;
                    top: 0px;
                    .num {
                        float: right;
                    }
                    .textBox {
                        padding-left: 0px;
                    }
                }
                .num {
                    color: #156def;
                    float: left;
                    width: 104px;
                    height: 104px;
                    border-radius: 50%;
                    border: 3px solid #156def;
                    margin-top: 35px;
                    font-size: 80px;
                    text-align: center;
                    line-height: 104px;

                }
                .textBox {
                    padding-left: 95px;
                    float: left;
                    width: 935px;
                    .title {
                        line-height: 110px;
                        font-size: 30px;
                        color: #156def;
                    }
                    .xiangqing {
                        font-size: 16px;
                        color: #666666;
                        line-height: 24px;
                    }
                }
                .arrowTop {
                    position: absolute;
                    width: 0px;
                    height: 0px;
                    border-style: solid;
                    border-color: transparent transparent #fff transparent;
                    border-width: 0px 15px 40px 15px;
                    left: 10px;
                    top: -29px;
                    transform: rotate(30deg);
                    // box-shadow: 0 0 20px rgba(176, 224, 251, .5);
                }
                .arrowFt {
                    position: absolute;
                    width: 0px;
                    height: 0px;
                    border-style: solid;
                    border-color: #fff transparent transparent transparent;
                    border-width: 40px 15px 0px 15px;
                    right: 10px;
                    bottom: -29px;
                    transform: rotate(30deg);
                    // box-shadow: 0 0 20px rgba(176, 224, 251, .5);
                }  
            }
        }
    }
    // 合作方式
    .hezuo {
        padding: 60px 0px;
        .content {
            height: 530px;
            .top {
                height: 265px;
                .neirongBox {
                    float: left;
                    width: 400px;
                    height: 265px;
                    .num {
                        padding-top: 45px;
                        font-size: 30px;
                        color: #156def;
                        height: 45px;
                        line-height: 45px;
                        text-align: center;
                    }
                    .title {
                        height: 45px;
                        line-height: 45px;
                        text-align: center;
                        font-size: 20px;
                        color: #333;
                    }
                    .xiangqing {
                        padding: 0px 35px;
                        font-size: 16px;
                        line-height: 24px;
                    }
                }
            }
            .foot {
                .top;
            }
        }
    }
    // 加盟流程
    .liucheng {
        padding: 60px 0px;
        background-color: #fafafa;
        @keyframes tubiao {
            0% {
               transform: translateY(0px);
            }
            50% {
               transform: translateY(-50px);
                
            }
            100% {
               transform: translateY(0px);
            }
        }
        
        .content {
            height: 230px;
            .lis {
                height: 180px;
                li {
                    float: left;
                    width: 100px;
                    height: 180px;
                    text-align: center;
                    margin-right: 83px;
                    position: relative;
                    &:last-child {
                        margin-right: 0px;
                    }

                    .tubiao {
                        height: 95px;
                        &:hover {
                            animation: tubiao 1s ease;
                        }
                    }
                    .active {
                        height: 95px;
                        animation: tubiao 1s ease;
                    }
                    .title {
                        height: 30px;
                        line-height: 30px;
                        color: #333;
                    }
                    .num {
                        width: 44px;
                        height: 44px;
                        border-radius: 50%;
                        color: #666666;
                        font-size: 24px;
                        text-align: center;
                        line-height: 44px;
                        position: absolute;
                        border: 1px solid #d2d2d2;
                        bottom: -44px;
                        left: 50%;
                        margin-left: -22px;
                        background-color: #fff;
                        z-index: 100;
                        &:hover {
                            border: 1px solid #156def;
                            color: #156def;
                        }
                    }
                }
            }
             .xian {
                height: 2px;
                background-color: #d2d2d2;
                margin-top:21px;
            }
        }
    }
    // 加盟条件
    .tiaojian {
        padding-top: 60px;
        background-color: #fff;
        .content {
            background: url(/imgs/shangwuhezuo/jiamengtiaojian.png) no-repeat;
            height: 532px;
            padding-bottom: 60px;
            position: relative;
            p {
                font-size: 16px;
                color: #333333;
                line-height: 24px;
                position: absolute;
            }
            .no0 {
                left: 0px;
                bottom: 160px;
            }
            .no1 {
                left: 130px;
                top: 542px;
            }
            .no2 {
                left: 350px;
                top: 255px;
            }
            .no3 {
                left: 515px;
                top: 405px;
            }
            .no4 {
                left: 637px;
                top: 110px;
            }
            .no5 {
                left: 855px;
                top: 295px;
            }
            .no6 {
                left: 1000px;
                top: -5px;
            }
        }
    }
    // 合作案例
    .anli {
        padding: 60px 0px;
        background-color: #f8f8f8;
        .content {
            height: 350px;
            .neirongBox {
                float: left;
                width: 280px;
                margin-right: 26px;
                &:last-child {
                    margin-right: 0px;
                }
                img {
                    width: 280px;
                    height: 290px;
                }
                .xiangqing {
                    background-color: #fff;
                    font-size: 18px;
                    color: #333;
                    height: 60px;
                    line-height: 60px;
                    text-align: center;
                }
            }
        }
    }
    // 联系我们
    .callus {
        height: 344px;
        // font-size: 0px;
        background: url(/imgs/shangwuhezuo/callus.png);
        background-size: 100% 345px;
        .inner {
             position: relative;
        }
        .text {
            width: 350px;
            height: 180px;
            position: absolute;
            left: 720px;
            top: 90px;
            color: #fff;
            .title {
                font-size: 34px;
                line-height: 75px;
            }
            .tel {
                line-height: 75px;
                font-size: 48px;
            }
        }

    }
}
</style>
<script>
// import Swiper from '../components/Swiper.vue'
export default {
    // components: { Swiper },
    metaInfo: {
        title: '加盟合作-学马', // set a title
        meta: [
            {                 // set meta
                name: 'keyWords',
                content: '新高考，招生加盟，学马，生涯云平台，生涯测评，选科决策，自主招生，出国留学'
            },
            {               
                name: 'description',
                content: '学马教育，面向全国招募合作伙伴，携手更多有识之士    共迎新高考教育的大航海时代'           
            }  
        ]
    },
    data() {
        return {
            news: [
                { url: '/imgs/shangwuhezuo/touziqianjinghao.png', titles: '国家政策指引', xiangqing: '《国务院关于深化考试招 生制度改革的实施意见》 政策指导下，多省陆续下 发文件，落实中学生生涯 教育。' }, 
                { url: '/imgs/shangwuhezuo/shichangguimoda.png', titles: '市场规模大', xiangqing: '中国的教育市场总规模预 计超9万亿元，生涯教育 列入国家发展战略，引发 全新市场增长点。' }, 
                { url: '/imgs/shangwuhezuo/qidongsudukuai.png', titles: '项目启动速度快', xiangqing: '总部提供从产品到服务的全套完备服务，有资源即 可立即启动项目。' }, 
                { url: '/imgs/shangwuhezuo/touzishouyigao.png', titles: '投资回报率高', xiangqing: '只需熟练业务操作、专心经营、合理利用商业资源，即可成功吸引当地生源 ，成为生涯规划服务的龙 头性机构，实现品牌与效益的双重回报' }],
            // 6大服务系统
            gongying: [
                { num: '1', titles: ' OEM外包支持', xiangqing: '提供平台系统技术外包服务，即将学马的平台系统通过技术改造，打造成为具有合作方专属品牌属性的平台系统。' }, 
                { num: '2', titles: '专业人才打造支持', xiangqing: '提供生涯规划师认证培训，志愿填报规划师培训，生涯报告解读师培训，自主招生升学管理师培训，领导力及销讲培训等。' }, 
                { num: '3', titles: '专业资料库支持', xiangqing: '提供各类产品说明书、操作手册、讲座课件、宣传物料、合作协议等全方位资料库。' }, 
                { num: '4', titles: '标准化操作手册支持', xiangqing: '提供自主选拔升学服务SOP手册，市场岗位SOP手册，人力资源岗位SOP手册，生涯报告解读SOP手册等，为合作方运营保驾护航。' }, 
                { num: '5', titles: ' N对1在线答疑支持', xiangqing: '合作方会享受到来自学马产品技术专家、市场专家、校区运营专家等多维度专家服务，通过在线支持，满足合作方各方面的疑难问题。' }, 
                { num: '6', titles: '落地运营督导支持', xiangqing: '专业的运营督导就是合作方的运营管家，为合作方带来线上线下更贴心的指导服务，为合作方提供更高效的解决方案。' }],
            // 加盟流程
            liucheng: [
                { num: '1', titles: '咨询了解', tubiao: 'background:url(/imgs/shangwuhezuo/zixunliaojie.png) no-repeat center center' }, 
                { num: '2', titles: '核实审查', tubiao: 'background:url(/imgs/shangwuhezuo/heshishencha.png) no-repeat center center' }, 
                { num: '3', titles: '实地考察', tubiao: 'background:url(/imgs/shangwuhezuo/shidishencha.png) no-repeat center center' }, 
                { num: '4', titles: '签署协议', tubiao: 'background:url(/imgs/shangwuhezuo/qianshuxieyi.png) no-repeat center center' }, 
                { num: '5', titles: '前期运营<br/>指导', tubiao: 'background:url(/imgs/shangwuhezuo/zhidao.png) no-repeat center center' }, 
                { num: '6', titles: '市场运营<br/>交付培训', tubiao: 'background:url(/imgs/shangwuhezuo/shiachang.png) no-repeat center center' },
                { num: '7', titles: '督导支持<br/>及服务', tubiao: 'background:url(/imgs/shangwuhezuo/dudao.png) no-repeat center center' }

            ],
            // 加盟条件
            tiaojian: [
                { xiangqing: '具备固定的经营场所<br/>和教学场所' },
                { xiangqing: '具有一定的市场拓展能力，拥有稳定<br/>的信息发布渠道及招生渠道，市场信誉良好' },
                { xiangqing: '诚信守约，合法经营' },
                { xiangqing: '熟悉当地市场，又从事教育培训<br/>行业的经营管理能力和资有' },
                { xiangqing: '认可支持学马集团的文化<br/>和政策，并能为学生提供优质服务' },
                { xiangqing: '热爱教育事业，具谋求长期<br/>发展的事业心和责任心求' },
                { xiangqing: '具有投资能力或者<br/>现有教育培训机构者' }
            ],
            // 加盟案例
            anli: [
                { url: '/imgs/shangwuhezuo/chengdu.png', xiangqing: '成都前构想教育' },
                { url: '/imgs/shangwuhezuo/jingling.png', xiangqing: '郑州晶领教育' },
                { url: '/imgs/shangwuhezuo/xueerle.png', xiangqing: '湘潭学而乐教育' },
                { url: '/imgs/shangwuhezuo/loudi.png', xiangqing: '娄底学海教育' },
            ],
            peitu: 1,
            activeLiuda: false,
            activeTubiao: -1
        }
    },
    mounted() {
        // console.log(111111)
        window.addEventListener('scroll', this.scrollTops)
    },
    methods: {
        qiehuan(idx) {
            this.peitu = idx;
        },
        enter(idx) {
            // console.log(this.idx)
            this.activeTubiao =idx;
        },
        scrollTops() {
            this.scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
            // console.log(this.scrollTop)
            if (this.scrollTop > 666) {
                this.activeLiuda = true;
            }
            // if (this.scrollTop > 1300) {
            //     this.activeTubiao = true;
            // }
        }
    }
}
</script>