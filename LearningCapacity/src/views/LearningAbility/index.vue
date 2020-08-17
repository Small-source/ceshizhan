<template>
    <div id="learningability">
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
                this.$ajax.post(this.G_uris + '/test/create',{
                    type: 1,
                    serial_no: serial_no,
                    cognition_order:"[1,2,3,4,5,6,7,8,9]"
                },{
                    headers:{
                        token:window.sessionStorage.getItem('token')
                    }
                })
                    .then(function(res) {
                        if(res.data.code == 0) {
                            this.$router.push("/learningAbility");
                        }else if(res.data.code == 1016) {

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
                this.$ajax.post(this.G_uris + '/usercenter/test/goon',{
                    test_id: serial_no
                },{
                    headers:{
                        token:window.sessionStorage.getItem('token')
                    }
                })
                    .then(function(res) {
                        var data = res.data;
                            if (data.result.module == 0) {
                                this.$router.push('/learningAbility')
                            } else if (data.result.module == 1) {
                                if (data.result.node == 1) {
                                    this.$router.push('/learningAbility');
                                } else {
                                    this.$router.push('/learningAbility/learningPotential/guide/' + data.result.node);
                                }
                            } else if (data.result.module == 2) {
                                    this.$router.push('/learningAbility/LearningMotivation');


                            } else if (data.result.module == 3) {
                            } else if (data.result.module == 4) {

                            }
                    }.bind(this))
                    .catch(function(error) {
                        console.log(error)
                    })
            },
            goTest() {
                var _this = this;
                this.$ajax.post(this.G_uri + '/chooseSubject/startTest',{
                    testType: 1,
                },{
                    headers:{
                        token:window.sessionStorage.getItem('token')
                    }
                })
                    .then(function(res) {
                        console.log(res.data)
                        if(res.data.code == 2000) {
                            // code: 1.第一次测试2.继续测试3.测试完成4.绑卡
                            if(res.data.data.code == 3) {
                                _this.serial_no = res.data.data.testId;
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
                            }
                        }else if(res.data.code == 1016) {
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
            // var tokens = 'a924a597288912408f7a305153a27575a2b85240606cd1fa621626dafc8e050c'
            // window.sessionStorage.setItem("token",tokens)
            // this.goTest();
        }
    }
</script>
<style lang="less">
    #learningability *{
        box-sizing: border-box;
    }
    #learningability>img{
        display: block;
        margin: 0 auto;
    }
</style>
