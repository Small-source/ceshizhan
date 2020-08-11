<template>
    <div class="shengyaceping">
            <router-view></router-view>
    </div>
</template>
<style>
    .shengyaceping *{
        box-sizing: border-box;
    }
    .shengyaceping>img{
        display: block;
        margin: 0 auto;
    }
</style>
<style type="text/css" lang='less' scoped>
.shengyaceping{
    *{
        box-sizing: border-box;
    }
    .inner {
        width: 1200px;
        margin: 0 auto;
    }
    .top-title {
        text-align: center;
        font-size: 18px;
        color: #fff;
        line-height: 98px;
    }
    .lis {
        text-align: center;
        height: 314px;
        li {
            height: 300px;
            width: 252px;
            border: 7px solid #fff;
            border-color: rgba(255,255,255,.5);
            float: left;
            margin-right: 30px;
            border-radius: 2px;
            &:last-child {
                margin-right: 0px;
            }
        }
        .tubiao1{
            height: 210px;
            background: url(/imgs/xingaokao/shengyaceping/renzhiqiannegceping.png) no-repeat center center;
        }
        .tubiao2 {
            height: 210px;
            background: url(/imgs/xingaokao/shengyaceping/rengetexingceping.png) no-repeat center center;
        }
        .tubiao3 {
            height: 210px;
            background: url(/imgs/xingaokao/shengyaceping/xingquqingxiang.png) no-repeat center center;
        }
        .tubiao4 {
            height: 210px;
            background: url(/imgs/xingaokao/shengyaceping/xinlijiankangceping.png) no-repeat center center;
        }
        .line {
            padding-top: 10px;
            height: 4px;
            width: 174px;
            margin: 0 auto;
            .no1 {
                display: block;
                width: 24px;
                border-radius: 2px;
                height: 4px;
                background-color: #333;
                margin-right: 10px;
                float: left;
            }
            .no2 {
                display: block;
                width: 120px;
                border-radius: 2px;
                height: 4px;
                background-color: #333;
                margin-right: 10px;
                float: left;
            }
            .no3 {
                display: block;
                width: 10px;
                border-radius: 2px;
                height: 4px;
                background-color: #333;
                float: left;
            }
        }
        h6 {
            font-size: 20px;
            color: #fff;
            line-height: 67px;
            text-align: center;
        }
    }
    .chushi {
        position: fixed;
        left: 0;
        top: 0;
        bottom: 0;
        right: 0;
        background: url(/imgs/xingaokao/shengyaceping/loading.jpg) no-repeat center center;
        background-color: #fff;
    }
}
</style>
<script>
// 引入激活生涯卡组件
import Jihuoka from './jihuoka.vue';
export default {
    components: { Jihuoka },
    props: [ 'message' ],
    data() {
        return {
            isShowjihuoka: false,
            src: "",
            serial_no: '',
            // 记录状态
            zhuangtai: '',
            chushi:false
        }
    },
    computed:{
    },
    methods: {
        goCreate() {
            var _this = this;
            var serial_no = this.serial_no;
            // console.log(serial_no)
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
                // console.log(res);
                if(res.data.code == 0) {
                    this.$router.push("/shengyaceping");

                }else if(res.data.code == 1016) {
                    this.$router.push("/login")
                }
            }.bind(this))
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
                            this.chushi = true;
                            this.$router.push('/shengyaceping');
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
                        this.chushi=true;
                    } else if (data.result.serial_type == 2) { // 序列号类型2
                        if (data.result.module == 0) {
                            this.$router.push('/shengyaceping')
                            // _this.src = '/shengyaceping';
                        } else if (data.result.module == 2) {
                            this.$router.push('/shengyaceping/rzqn/guide/' + data.result.node)
                            // _this.src = '/shengyaceping/rzqn/guide/' + data.result.node;
                        } else if (data.result.module == 3) {
                            if (data.result.node == 1) {
                                this.$router.push('/shengyaceping/evlua/classify/22')
                            } else {
                                this.$router.push('/shengyaceping/xqqx/guide/' + data.result.node)
                            }
                        }
                        this.chushi=true;

                    } else if (data.result.serial_type == 3 && data.result.type == 1) {
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
                                this.$router.push('/shengyaceping/evlua/classify/12');
                            } else {
                                this.$router.push('/shengyaceping/xqqx/guide/' + data.result.node);
                            }
                        } else if (data.result.module == 4) {
                            this.$router.push('/shengyaceping/evlua/classify/14');
                        }
                        this.chushi=true;

                    } else if (data.result.serial_type == 3 && data.result.type == 2) {
                        if (data.result.module == 0) {
                            this.$router.push('/shengyaceping')
                        } else if (data.result.module == 3) {
                            this.$router.push('/shengyaceping/xqqx/guide/' + data.result.node);
                        }
                        this.chushi=true;
                    }
                }
            }.bind(this))
            .catch(function(error) {
                console.log(error)
            })
        },
        goTest() {
            window.sessionStorage.setItem('testType', 'type1');
            var token = window.sessionStorage.getItem('ymtxToken');
            window.sessionStorage.setItem('token',token);
            var _this = this;
            this.$ajax.post(this.G_uri + '/chooseSubject/startTest',{
                testType: 1,
            },{
                headers:{
                    token: token
                }
            })
            .then(function(res) {
                console.log(res.data)
                if(res.data.code == 2000) {
                    // code: 1.第一次测试2.继续测试3.测试完成4.绑卡
                    if(res.data.data.code == 3) {
                        _this.serial_no = res.data.data.testId;
                        _this.$router.push('/cepingwancheng');
                        return;
                    }
                    if(res.data.data.code == 2) {
                        _this.serial_no = res.data.data.testId;
                        _this.goOnTest();
                        return;
                    }
                    if(res.data.data.code == 1) {
                        _this.serial_no = res.data.data.testId;
                        _this.goCreate();
                        _this.chushi=true;
                    }
                }else if(res.data.code == 1016) {
                    _this.$router.push('/login');
                }else if(res.data.code == 2026) {
                    _this.$router.push('/perfectInformation');
                }
            }).catch(function(error) {
                console.log(error)
                // alert('当前服务器繁忙，请刷新')
            });
        }
    },
    mounted() {
    },
    created() {
        var testType360 = window.sessionStorage.getItem('testType360');
        this.goTest(testType360);
    }
}
</script>
