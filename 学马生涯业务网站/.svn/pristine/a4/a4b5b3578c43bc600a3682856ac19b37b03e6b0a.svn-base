<template>
    <div class="tHome">
        <div class="content">
            <ul class="top">
                <li></li>
                <li></li>
            </ul>
            <img src="/imgs/tuance/icon_xuanke.png" alt="">
            <p>{{title}}</p>
            <span class="span">( {{city}} )</span>
            <div class="miaoshu">
                {{content}}

            </div>
            <div class="button" @click="tiaozhuan">
                {{text}}
            </div>
            <div class="miaoshu" style="text-align: center" v-if="wancheng">预计30分钟可以完成</div>
            <div class="person">
                <img src="/imgs/tuance/icon_ren.png" alt="">
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        name: "tHome",
        data() {
            return {
                city:'',
                text:"开始测评",
                flag:true,
                wancheng:true,
                title:'新高考选科测评',
                content:" 新高考选科测评帮助学生认识自己的人格类型和职业兴趣，明确目标专业的院校专业选考科目要求，在此基础上使用决策平衡单进行选科决策，并最终根据加权分、目标专业覆盖率等指标决定选考科目。"
            }
        },
        mounted(){
            this.city=window.localStorage.cityNow;
            var token = window.sessionStorage.getItem('ymtxToken');
            var _this = this;
            window.sessionStorage.setItem('token',token);
            this.$ajax.post(this.G_uri + '/chooseSubject/intelligentSelectSubject',{
                testType: 2,
            },{
                headers:{token: token}
            }).then(function(res) {
                // console.log(res)
                if(res.data.code == 2000) {
                    if(res.data.data.code == 7) {
                        window.sessionStorage.wancheng=true
                        _this.flag=false;
                        _this.wancheng=false
                        _this.text='查看选科报告'
                        return;
                    }
                    // code: 1.第一次测试2.继续测试3.测试完成4.绑卡5.报告页
                    if(res.data.data.code == 6) {
                        window.sessionStorage.wancheng=true
                        _this.flag=false;
                        _this.wancheng=false
                        _this.text='查看选科报告'
                        return;
                    }
                }
            })
            this.$ajax.post(this.G_uri + '/chooseSubject/balanceSelectSubject',{
                testType: 2,
            },{
                headers:{token: token}
            }).then(function(res) {
                if(res.data.code == 2000) {
                    // 1未绑卡 2已绑卡未测试 3报告页 4目标页
                    let code = res.data.data.code;
                    if(code == 1) {
                    }else if(code == 2) {
                        // _this.$router.push('/majorSelectedSubjects/mubiaozhuanye');
                    }else if(code == 3) {
                        // _this.$router.push('/majorSelectedSubjects/xuankezhiyuan');
                    }else if(code == 4) {
                        window.sessionStorage.wancheng=true
                        _this.flag=false;
                        _this.wancheng=false
                        _this.text='查看选科报告'
                        // _this.$router.push('/majorSelectedSubjects/threeResult');
                    }else if(code == 5) {
                        window.sessionStorage.wancheng=true
                        _this.flag=false;
                        _this.wancheng=false
                        _this.text='查看选科报告'
                        // _this.$router.push('/majorSelectedSubjects/xuankeReport');
                    }

                }else if(res.data.code == 1016) {
                    _this.$router.push('/login');
                }else if(res.data.code == 2026) {
                    _this.$router.push('/perfectInformation');
                }
            })
            if(this.flag&&(window.sessionStorage.ceshi=="1")){
                this.text='继续测评'
            }
            if(window.sessionStorage.tuanceCards==5){
                this.wancheng=false;
                this.title="新高考选科";
                this.content="新高考选科帮助学生了解院校、专业与职业，明确院校专业选考科目要求，在此基础上使用决策平衡单进行选科决策，并最终根据加权分、目标专业覆盖率等指标决定选考科目。"
            }
        },
        methods:{
            //测试是否是选科测评还是自主选课
            tiaozhuan(){
                if(window.sessionStorage.tuanceCards==5){
                    this.goMajorSelectSubject()
                }else{
                    this.goZhinengXuanke()
                }
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
                }).then(function(res) {
                        if(res.data.code == 2000) {
                            // 1未绑卡 2已绑卡未测试 3报告页 4目标页
                            let code = res.data.data.code;
                            if(code == 1) {
                            }else if(code == 2) {
                                _this.$router.push('/majorSelectedSubjects/mubiaozhuanye');
                            }else if(code == 3) {
                                _this.$router.push('/majorSelectedSubjects/xuankezhiyuan');
                            }else if(code == 4) {
                                _this.$router.push('/majorSelectedSubjects/threeResult');
                            }else if(code == 5) {
                                _this.$router.push('/majorSelectedSubjects/xuankeReport');
                            }

                        }else if(res.data.code == 1016) {
                            _this.$router.push('/login');
                        }else if(res.data.code == 2026) {
                            _this.$router.push('/perfectInformation');
                        }
                    })
            },
            goZhinengXuanke() {// 360选科测评
                window.sessionStorage.setItem('testType', 'type1');
                window.sessionStorage.setItem('testType360', '2');
                window.sessionStorage.setItem('ceshi', '1');
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
                        if(res.data.data.code == 7) {
                            _this.$router.push('/zhinengxuanke/xuankeReport');
                            return;
                        }
                        // code: 1.第一次测试2.继续测试3.测试完成4.绑卡5.报告页
                        if(res.data.data.code == 6) {
                            _this.$router.push('/zhinengxuanke/threeResult');
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
                            //_this.serial_no = res.data.data.testId;
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
                            _this.zhuangtai = 1;
                            _this.serial_no = res.data.data.testId;
                            _this.goCreate();
                        }

                    }else if(res.data.code == 1016) {
                        _this.$router.push('/tuance');
                    }else if(res.data.code == 2026) {
                        _this.$router.push('/perfectInformation');
                    }
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
                        // console.log(data.result.serial_type);
                        if (data.code == 0) {
                            // 序列号类型1
                            if (data.result.serial_type == 1) {
                                if (data.result.module == 0) {
                                    if(window.sessionStorage.tuance=='3'){
                                        this.$router.push('/shengyaceping/xgtx')
                                    }else{
                                        this.$router.push('/shengyaceping')
                                    }
                                } else if (data.result.module == 1) {
                                    this.$router.push('/shengyaceping/xgtx/guide/' + data.result.node);
                                } else if (data.result.module == 2) {
                                    if (data.result.node == 1) {
                                        if(window.sessionStorage.tuance=='3'){
                                            this.$router.push('/shengyaceping/xqqx')
                                        }else{
                                            this.$router.push('/shengyaceping/evlua/classify/13')
                                        }
                                    } else {
                                        this.$router.push('/shengyaceping/rzqn/guide/' + data.result.node);
                                    }
                                } else if (data.result.module == 3) {
                                    if (data.result.node == 1) {
                                        if(window.sessionStorage.tuance=='3'){
                                            this.$router.push('/shengyaceping/xqqx')
                                        }else{
                                            this.$router.push('/shengyaceping/evlua/classify/13')
                                        }
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
                            if(window.sessionStorage.tuance=='3'){
                                _this.$router.push('/shengyaceping/xgtx')
                            }else{
                                _this.$router.push('/shengyaceping')
                            }
                        }else if(res.data.code == 1016) {
                            _this.$router.push('/login');
                        }
                    })
                    .catch(function(error) {
                        console.log(error)

                    })
            },
        },
    }
</script>

<style lang="less" scoped>
    .tHome{
        width: 100%;
        height: 600px;
        background-image: url("/imgs/tuance/bg_shenlan.png");
        background-size: 100% 100%;
        overflow: hidden;
        .content{
            position: relative;
            margin: 45px auto;
            width: 700px;
            height: 510px;
            background: #ffffff;
            .top{
                height: 4px;
                width: 100%;
                li{
                    float: left;
                    width: 50%;
                    background: #FE8800;
                    height: 100%;
                    &:last-child{
                        background:#22BD3D;
                    }
                }
            }
            img{
                display: block;
                margin: 40px auto 30px;
            }
            p{
                text-align: center;
                font-size: 26px;
                font-weight: bolder;
                color:#333333;
                margin-bottom: 30px;
            }
            .span{
                font-size: 16px;
                font-weight: bolder;
                color: #333333;
                position: absolute;
                left: 448px;
                top: 192px;
            }
            .miaoshu{
                width: 490px;
                margin: 0 auto;
                line-height: 24px;
                color:#666666;
                font-weight: bolder;
            }
        }
        .button{
            margin:45px auto 15px;
            width: 120px;
            height: 33px;
            line-height: 33px;
            text-align: center;
            background: #2d8ffc;
            color: #fefdfb;
            letter-spacing: .15em;
            cursor: pointer;
            border-radius: 3px;
            box-shadow: 0 2px 1px #1670d1;
        }
        .person{
            position: absolute;
            bottom: -40px;
            right: -70px;
            img{
                margin: 0;
            }
        }
    }
</style>