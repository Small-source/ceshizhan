<template>
    <div class="shengyaceping">
            <router-view></router-view>
    </div>
</template>
<script>
export default {
    components: { },
    props: [  ],
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
                    this.$router.push("/start")
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
                    _this.$router.push('/start');
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
        // this.goTest();
    }
}
</script>
<style>
    .shengyaceping *{
        box-sizing: border-box;
    }
    .shengyaceping>img{
        display: block;
        margin: 0 auto;
    }
</style>
