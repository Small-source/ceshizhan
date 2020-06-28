<template>
    <div class="xuankejuece">
        <div class="banner">
        </div>
        <div class="inner">
            <ul class="lis">
                <li>
                    <div class="lis_content">
                        <p class="title">360°选科</p>
                        <p class="xiangqing">
                          通过潜能、人格、兴趣多维度定位专业方向，探索高校对专业的选科要求，运用决策平衡单分析适合的选科组合。（适合专业意向不明确的学生）
                        </p>
                    </div>
                    <div class="button" @click="goZhinengXuanke">确定</div>
                </li>
                <li>
                    <div class="lis_content">
                        <p class="title">根据专业选科目</p>
                        <p class="xiangqing">
                            在明确专业方向的前提下，探索高校对专业的选科要求，运用决策平衡单分析适合的选科组合。（适合专业方向明确的学生）
                        </p>
                    </div>
                    <div class="button" @click="goMajorSelectSubject">确定</div>
                </li>
                <li>
                    <div class="lis_content">
                        <p class="title">选科要求查询</p>
                        <p class="xiangqing">
                            <span>按大学查询：</span>快速查询在本省招生普通高校招生专业选考科目要求。<br/>
                            <span>按学科查询：</span>根据选考科目与目标专业查看院校专业选考要求详情。
                        </p>
                    </div>
                    <div class="button"> <router-link tag='a' to="/xuekezhixuan/university" target="_blank">确定</router-link></div>
                </li>
            </ul>
        </div>
        <Jihuoxuankeka v-on:go-back="isShowjihuoxuankeka = false" v-show="isShowjihuoxuankeka" :src="src" :serial_no="serial_no"></Jihuoxuankeka>
        <JihuoMajor v-on:go-back="isShowJihuoMajor = false" v-show="isShowJihuoMajor" :src="src"></JihuoMajor>
    </div>
    </div>
</template>
<style type="text/css" lang='less' scoped>
.xuankejuece {
    background-color: #f5f5f5;
    position: relative;
    .inner {
        box-sizing: border-box;
        width: 1200px;
        background-color: #fff;
        border-radius: 5px;
        padding: 30px 20px;
        position: absolute;
        left: 50%;
        top: 50%;
        margin-left: -600px;
        margin-top: -255px;
    }
    .banner {
        height: 274px;
        background: url(/imgs/xingaokao/xuankejuece/xuankejuece/bg_xuanke.png) no-repeat center center;
    }
    .lis {
        display: flex;
        justify-content: space-around;
        li {
            width: 344px;
            height: 450px;
            position: relative;
            background: url(/imgs/xingaokao/xuankejuece/xuankejuece/bg_360duxuanke.png) no-repeat center center;
             &:nth-child(1) {
                .button {
                    &:hover {
                        background-color: #2d7dec;
                        color: #fff;
                    }
                }
            }
            &:nth-child(2) {
                background: url(/imgs/xingaokao/xuankejuece/xuankejuece/icon_genjuzhuanyexuankemu.png) no-repeat center center;
                .button {
                    color: #e9871c;
                    &:hover {
                        background-color: #e8861c;
                        color: #fff;
                    }
                    // background: url(/imgs/xingaokao/xuankejuece/xuankejuece/icon_02.png) no-repeat center center;
                }
            }
            &:last-child {
                margin-right: 0px;
                background: url(/imgs/xingaokao/xuankejuece/xuankejuece/icon_xuekezhixuan.png) no-repeat center center;
                .button {
                    a {
                        color: #1798ac;
                    }
                    &:hover {
                        background-color: #07a7bc;
                        a {
                            color: #fff;
                        }
                    }
                    // background: url(/imgs/xingaokao/xuankejuece/xuankejuece/icon_03.png) no-repeat center center;
                }
            }
            .lis_content {
                padding-top: 226px;
                .title {
                    line-height: 24px;
                    font-size: 22px;
                    color: #fff;
                    text-align: center;
                }
                .xiangqing {
                    padding: 0px 40px;
                    padding-top: 10px;
                    font-size: 14px;
                    line-height: 22px;
                    color: #fff;
                    // span {
                    //     color: #1798ac;
                    // }
                }
            }
            .button {
                font-size: 16px;
                font-weight: 600;
                color: #3492f9;
                width: 158px;
                height: 44px;
                line-height: 44px;
                border-radius: 22px;
                text-align: center;
                cursor: pointer;
                position: absolute;
                left: 50%;
                margin-left: -79px;
                bottom: 40px;
                background-color: #fff;
                // background: url(/imgs/xingaokao/xuankejuece/xuankejuece/icon_01.png) no-repeat center center;
                a {
                    display: block;
                    width: 100%;
                    height: 100%;
                    font-size: 16px;
                    font-weight: 600;
                    color: #333;

                }
            }
        }
    }
}
</style>
<script>
// 引入激活生涯卡组件
import Jihuoxuankeka from './jihuoxuankeka.vue';
import JihuoMajor from './jihuomajor.vue';
export default {
    components: { Jihuoxuankeka, JihuoMajor },
    props: [ 'message' ],
    data() {
        return {
          isShowjihuoxuankeka: false,
          isShowJihuoMajor: false,
          // 激活选科卡成功后跳转路由
          src: '/zhinengxuanke/xuankeceping',
          serial_no:""
        }
    },
    methods: {
        goXuanke() {
          // 是否激活选科卡
                this.isShowjihuoxuankeka = true;
                this.$router.push('/zhinengxuanke');
        },
        goZhinengXuanke() {// 360选科测评
            window.sessionStorage.setItem('testType', 'type1');
            window.sessionStorage.setItem('testType360', '2');
            var token = window.sessionStorage.getItem('ymtxToken');
            window.sessionStorage.setItem('token',token);
            var _this = this;
            this.$ajax.post(this.G_uri + '/chooseSubject/intelligentSelectSubject',{
                testType: 2,
            },{
                headers:{token: token}
            }).then(function(res) {
                // console.log(res)
                if(res.data.code == 2000) {
                    // code: 1.第一次测试2.继续测试3.测试完成4.绑卡5.报告页,
                    // 6直接选三科不做平衡单 7报告页跟后台一样
                    console.log(res.data.data.code)
                    if(res.data.data.code == 7) {
                        _this.$router.push('/zhinengxuanke/mubiaozhuanye');
                        return;
                    }
                    if(res.data.data.code == 6) {
                        _this.$router.push('/zhinengxuanke/mubiaozhuanye');
                        return;
                    }
                    if(res.data.data.code == 5) {
                        _this.zhuangtai = 5;
                        _this.$router.push('/zhinengxuanke/xuankezhiyuan');
                        return;
                    }
                    if(res.data.data.code == 4) {
                        _this.zhuangtai = 4;
                        //_this.isShowjihuoka = true;
                        _this.isShowjihuoxuankeka = true;
                        return;
                    }
                    if(res.data.data.code == 3) {
                        _this.zhuangtai = 3;
                        _this.$router.push('/zhinengxuanke/mubiaozhuanye');
                        return;
                    }
                    if(res.data.data.code == 2) {//2.继续测试
                        _this.zhuangtai = 2;
                        _this.serial_no = res.data.data.testId;
                        _this.goOnTest();
                        return;
                    }
                    if(res.data.data.code == 1) {//1.第一次测试
                        console.log(158)
                        _this.zhuangtai = 1;
                        _this.serial_no = res.data.data.testId;
                        _this.goCreate();
                    }

                }else if(res.data.code == 1016) {
                    _this.$router.push('/login');
                }else if(res.data.code == 2026) {
                    _this.$router.push('/perfectInformation');
                }
            })
        },
        //创建测试
        goCreate() {
            var _this = this;
            var serial_no = this.serial_no;
            console.log(serial_no);
            var token = window.sessionStorage.getItem('ymtxToken');
            window.sessionStorage.setItem('token',token);
            this.$ajax.post(this.G_uris + '/test/create',{
                type: 1,
                serial_no: serial_no,
                cognition_order:"[1,2,3,4,5,6,7,8,9,10,11,12,13]"
            },{
                headers:{
                    token: token
                }
            })
                .then(function(res) {
                    if(res.data.code == 0) {
                        //_this.src = '/evlua/classify';
                        console.log(100)
                        _this.$router.push('/shengyaceping')
                    }else if(res.data.code == 1016) {
                        _this.$router.push('/login');
                    }
                })
                .catch(function(error) {
                    console.log(error)

                })
        },
        // 跳页
        goOnTest() {
            var _this = this;
            var serial_no = this.serial_no;
            var token = window.sessionStorage.getItem('ymtxToken');
            window.sessionStorage.setItem('token',token);
            this.$ajax.post(this.G_uris + '/usercenter/test/goon',{
                test_id: serial_no
            },{
                headers:{
                    token: token
                }
            })
                .then(function(res) {
                    var data = res.data;
                    if (data.code == 0) {
                        // 序列号类型1
                        if (data.result.serial_type == 1) {
                            if (data.result.module == 0) {
                                this.$router.push('/shengyaceping')
                            } else if (data.result.module == 1) {
                                this.$router.push('/shengyaceping/xgtx/guide/' + data.result.node);
                            } else if (data.result.module == 2) {
                                if (data.result.node == 1) {
                                    this.$router.push('/shengyaceping/evlua/classify/13');
                                } else {
                                    this.$router.push('/shengyaceping/rzqn/guide/' + data.result.node);
                                }
                            } else if (data.result.module == 3) {
                                if (data.result.node == 1) {
                                    this.$router.push('/shengyaceping/evlua/classify/13');
                                } else {
                                    this.$router.push('/shengyaceping/xqqx/guide/' + data.result.node);
                                }
                            } else if (data.result.module == 4) {
                                this.$router.push('/shengyaceping/evlua/classify/14');
                            }
                        }
                    }
                }.bind(this))
                .catch(function(error) {
                    console.log(error)
                })
        },
        // 根据专业选科目进度
        goMajorSelectSubject() {
            var token = window.sessionStorage.getItem('ymtxToken');
            window.sessionStorage.setItem('token',token);
            var _this = this;
            this.$ajax.post(this.G_uri + '/chooseSubject/balanceSelectSubject',{
                testType: 2,
            },{
                headers:{token: token}
            })
            .then(function(res) {
                if(res.data.code == 2000) {
                    // 1未绑卡 2已绑卡未测试 3报告页 4目标页
                    let code = res.data.data.code;
                    if(code == 1) {
                        _this.isShowJihuoMajor = true;
                    } else if(code == 3) {
                        _this.$router.push('/majorSelectedSubjects/xuankezhiyuan');
                    } else {
                        _this.$router.push('/majorSelectedSubjects/mubiaozhuanye');
                    }

                    // else if(code == 3) {
                    //     _this.$router.push('/majorSelectedSubjects/xuankezhiyuan');
                    // }else if(code == 4) {
                    //     _this.$router.push('/majorSelectedSubjects/threeResult');
                    // }else if(code == 5) {
                    //     _this.$router.push('/majorSelectedSubjects/xuankeReport');
                    // }

                }else if(res.data.code == 1016) {
                    _this.$router.push('/login');
                }else if(res.data.code == 2026) {
                    _this.$router.push('/perfectInformation');
                }
            })
        },

        // 根据屏幕高度设置页面高度为一屏高
        resetScreen() {
            let screenH = document.documentElement.clientHeight;
            let topNavH = $('.topNav').outerHeight();
            let footerH = $('.footer').outerHeight();
            let height = screenH - topNavH - footerH;
            if(height > 562) {
                $('.xuankejuece').height(height + 'px');
            }else {
                $('.xuankejuece').height('562px');
            }
        }

    },
    created() {
        if(this.$route.query.source == 5) {
            this.goMajorSelectSubject();
        }
        if(/zhuanye/.test(window.location.hash)){
            this.goMajorSelectSubject();
        }
        if(/360/.test(window.location.hash)){
            this.goZhinengXuanke();
        }
    },
    mounted() {
        this.resetScreen();
    }
}
</script>
