<template>
    <!-- 激活通道 -->
    <div class="active_channel">
        <div class="title">{{'您好！' + user}}</div>
        <form class="register">
            <div class="inputs">
                <div class="neirong"><span>激活卡号：</span><input type="number" v-model.trim="activationCardNumber" placeholder="请输入您所购买的VIP卡的卡号" class="Username"></div>
            </div>
             <div class="inputs inputs2">
                <div class="neirong"><span>激活密码：</span><input type="password" v-model="activationPassword" placeholder="请输入您所购买的VIP卡的激活密码" class="Username0"></div>
                <!-- <p class="warning"></p> -->
            </div>
            <p class="warning4">{{warning4}}</p>
            <div :class="isclick ? 'button' : 'unclick'" @click="Submission">立即激活</div>
        </form> 
        <jihuochengong v-show="isShowSucces" :src="src" :message="message"></jihuochengong>
        <div class="jihuochengong360" v-show="isJihuo360">
            <div class="mark">
                <div class="tanchuang2">
                    <div class="tubiao"><img src="/imgs/tongyongtanchuang/chenggong.png" alt=""></div>
                    <div class="title">360°选科卡激活成功</div>
                    <p class="tishiyu">可使用该功能</p>
                    <div class="goback" @click="goBack">确定</div>
                </div>
            </div>
        </div>  
        <!-- 激活视频卡后展示自招学校，从中选取三所学校 -->
        <div class="universitySelection" v-if="isShowUniversitySelection">
            <div class="selectionBox">
                <div class="title">
                    选择大学*本课程可匹配三所自主招生的大学，请选择3所大学
                </div>
                <div class="prompt">
                    提示：确认后无法重新选择，请慎重考虑！
                </div>
                <ul class="universityLis">
                    <li v-for="(item, index) in universityList" :key="index" @click="pushId(item.id)" :class="universityIds.some(function(value,index, arr) { 
                        // console.log(1111)
                        return value == item.id }) ? 'Active': '' ">
                        <div class="imgBox">
                            <img :src="item.pic" alt="">
                        </div>
                        <p class="universityName">{{item.name}}</p>
                        <div class="check">
                            √
                        </div>
                    </li>                   
                </ul>
                <div :class="isActiveBtn ? 'btn' : 'unBtn'" @click="saveUniversityIds">
                        确定
                </div>
            </div>
        </div>
    </div>
</template>
<style type="text/css" lang='less' scoped>
.active_channel {
    .title {
        font-size: 16px;
        color: #333;
        text-align: center;
        font-weight: 600;
        line-height: 60px;
        background-color: #fff;
    }
    .register {
        padding: 0px 55px;
        .inputs {
            // height: 70px;
            margin-bottom: 26px;
            overflow: hidden;
            .neirong {
                height: 46px;
                span {
                    float: left;
                    width: 86px;
                    height: 44px;
                    line-height: 44px;
                    text-align: right;
                    color: #000;
                    font-size: 15px;
                }
                input {
                    float: left;
                    border: none;
                    border: 1px solid #e8e4e5;
                    width: 380px;
                    height: 44px;
                    border-radius: 2px;
                    padding-left: 14px;
                    font-size: 14px;
                }

                .KeyCode {
                    width: 235px;
                    margin-right: 10px;
                }
                .getKeyCode {
                    width: 135px;
                    height: 46px;
                    float: right;
                    background-color: #2d8ffc;
                    color: #fff;
                    text-align: center;
                    line-height: 46px;
                    border-radius: 5px;
                    cursor: pointer;
                }

            }
            // .Username {
            //     background: url(/imgs/login/touxiang.png) no-repeat 10px center;
            // }
            // .Password {
            //     background: url(/imgs/login/mima.png) no-repeat 10px center;

            // }
            // .Password1 {
            //     background: url(/imgs/login/mima.png) no-repeat 10px center;

            // }
            .warning {
                height: 24px;
                font-size: 12px;
                color: #FF0058;
                line-height: 24px;
                margin-left: 86px; 
                padding-left: 14px; 
                background-color: #f9f9f9;
            }
            .warning4 {
                padding-left: 86px;
                height: 35px;
                font-size: 14px;
                width: 100%;
                color: #FF0058;
                line-height: 35px;
                height: 35px;
                // margin-bottom: 20px;
            }

            // 显示密码
            .isshowpassword {
                position: absolute;
                display: block;
                background-color: red;
                width: 40px;
                height: 50px;
                right: 0px;
                top: 0px;
            }
            .time {
                width: 135px;
                height: 50px;
                float: right;
                background-color: #dedede;
                color: #fff;
                text-align: center;
                line-height: 50px;
                border-radius: 5px;
            }
        }
        .inputs2 {
            margin-bottom: 0px;
        }
        // 可以点击的状态
        .button {
                width: 360px;
                height: 46px;
                border-radius: 5px;
                background-color: #2d8ffc;
                text-align: center;
                line-height: 46px;
                font-size: 16px;
                color: #fff;
                cursor: pointer;
                margin: 0 auto;
        }
        // 不能点击的状态
        .unclick {
            .button;
            background-color: #666;
            color: #fff;
            cursor: no-drop; 
        }
        .warning4 {
            width: 360px;
            text-align: center;
            margin: 0 auto;
            height: 35px;
            font-size: 14px;
            width: 100%;
            color: #FF0058;
            line-height: 35px;
            height: 35px;
        }
    }   
    .universitySelection {
        position: fixed;
        left: 0px;
        top: 0px;
        right: 0px;
        bottom: 0px;
        z-index: 100;
        background-color: rgba(51,51,51,.5);
        .selectionBox {
            position: absolute;
            top: 120px;
            left: 50%;
            margin-left: -366px;
            width: 672px;
            // height: 440px;
            padding-top: 10px;
            padding-left: 40px;
            padding-bottom: 30px;
            background-color: #fff;

            .title {
                font-size: 18px;
                color: #333333;
                line-height: 46px;
            }
            .prompt {
                font-size: 12px;
                color: #f60e0e;
                line-height: 24px;
            }
            .universityLis {
                padding-top: 20px;
                overflow: auto;
                height: 312px;
                li {
                    box-sizing: border-box;
                    width: 136px;
                    height: 136px;
                    border: 1px solid #d9d9d9;
                    margin-right: 26px;
                    padding-top: 13px;
                    float: left;
                    margin-bottom: 20px;
                    position: relative;
                    cursor: pointer;
                    .imgBox {
                        width: 86px;
                        height: 86px;
                        border-radius: 50%;
                        margin: 0 auto;
                        img {
                            width: 86px;
                            height: 86px;
                            border-radius: 50%;
                        }

                    }
                    .check {
                        width: 18px;
                        height: 18px;
                        border-radius: 50%;
                        text-align: center;
                        line-height: 18px;
                        position: absolute;
                        top: 7px;
                        right: 7px;
                        border: 1px solid #d9d9d9;
                        font-size: 16px;
                        color: #d9d9d9;
                    }
                    .universityName {
                        padding-top: 6px;
                        font-size: 14px;
                        color: #333;
                        text-align: center;
                        line-height: 30px;
                    }
                }
                .Active {
                    border: 1px solid #3492f9;
                    .check {
                        background-color: #3492f9;
                        border: 1px solid #3492f9;
                        color: #fff;
                    }

                }
            }
            .btn {
                width: 120px;
                height: 40px;
                text-align: center;
                line-height: 40px;
                font-size: 14px;
                color: #fff;
                background-color: #3492f9;
                border-radius: 2px;
                margin: 0 auto;
                margin-top: 10px;
                cursor: pointer;
                &:active {
                    background-color: #156def;
                }
            }
            .unBtn {
                width: 120px;
                height: 40px;
                text-align: center;
                line-height: 40px;
                font-size: 14px;
                color: #fff;
                background-color: #d9d9d9;
                border-radius: 2px;
                margin: 0 auto;
                margin-top: 10px;
                cursor: pointer;
                cursor:not-allowed
            }
        }
    }
    .jihuo360 {
        position: absolute;
        width: 100%;
        height: 100%;
        background-color: #fff;
    }
    .jihuochengong360{
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        background-size: 100% 100%;
        .mark {
            position: fixed;
            left: 0px;
            top: 0px;
            right: 0px;
            bottom: 0px;
            z-index: 100;
            background-color: rgba(51,51,51,.5);
            text-align: center;
        }   
        .inner {
            width: 1200px;
            margin: 0 auto;
        }
        .tanchuang2 {
            box-sizing: border-box;
            padding: 50px 50px 20px 50px;
            position: absolute;
            left: 50%;
            top: 180px;
            margin-left: -245px;
            width: 490px;
            height: 350px;
            background-color: #fff;
            .tubiao {
                width: 78px;
                height: 78px;
                margin: 0 auto;
                overflow: hidden;
                border-radius: 50%;
            }
            .title {
                line-height: 58px;
                font-size: 18px;
                color: #333;
                text-align: center;
            }
            .tishiyu {
                // line-height: 58px;
                font-size: 14px;
                color: #666;
                text-align: center;
                margin-bottom: 50px;
            }
            .goback {
                height: 50px;
                line-height: 50px;
                text-align: center;
                border-radius: 5px;
                color: #fff;  
                cursor: pointer; 
                background-color: #2c8ffc;
            }

        }   
    }
}
</style>
<script>
    // 引入激活生涯卡组件
    import jihuochengong from '../../../components/jihuochengong.vue';
    export default {
        components: { jihuochengong },
        data() {
            return {

                isShowSucces: false,
                universityList: [],
                universityIds: [],
                isShowUniversitySelection: false,
                message: '',
                src: '',
                user: '',
                // 激活卡号
                activationCardNumber: '',
                // 激活密码
                activationPassword: '',

                warning4: '',
                isclick: false,
                isshowxieyi: false,
                isChecked: true,
                time: 60,
                isShowKeyCode: true,
                isActiveBtn: false,
                isJihuo360: false
            }
        },
        watch: {
            activationCardNumber() {
                this.panduan();
            },
            activationPassword() {
                this.panduan();
            },
            universityIds() {
                // console.log(this.universityIds);
                if(this.universityIds.length == 3) {
                    this.isActiveBtn = true;
                }else {
                    this.isActiveBtn = false;
                }
            }
            // Username() {
            //     this.panduan();
            // },
            // KeyCode() {
            //     this.panduan();
            // },
            // Password() {
            //     this.panduan();
            // },
            // Password1() {
            //     this.panduan();
            // },
            // // 勾选同意
            // isChecked() {
            //     this.panduan();
            // }
        },
        methods: {
            Submission() {
                // var OEMdomain = this.$OEMdomain;
                // 激活卡号
                var activationCardNumber = this.activationCardNumber;
                // // 激活密码
                var activationPassword = this.activationPassword;
                var token = window.sessionStorage.getItem('ymtxToken');
                window.sessionStorage.setItem('token',token);
                var type = activationCardNumber.slice(0,1);
                if(!activationCardNumber || !activationPassword) {
                    // console.log(5555555)
                    this.warning4 = '激活卡号或激活密码不能为空';
                    return;
                }
                // 1激活生涯卡2选课卡3视频卡4教辅资源视频卡
                if(type == 1) {
                    // console.log(44444)
                    this.goShengya();
                }else if(type == 2) {
                    // console.log(3333);
                    this.goXuanke();

                }else if(type == 3) {

                    this.goJihuo();
                }else if(type == 4) {
                    this.goJiaofu();
                }else if(type == 5) {
                    this.goMajorSelectedSubjects();
                }else if(type == 6) {
                    this.goCompetition();
                }
            },
            panduan() {
                var num1 = this.activationCardNumber;
                var num2 = this.activationPassword;
                if(num1 && num2) {
                    this.isclick = true;
                }else {
                    this.isclick = false;
                }
            },
            gobackCheckd() {
                this.isshowxieyi = false;
                this.isChecked = true;
            },
            // 购买生涯卡1
            goShengya() {
                let _this = this;
                let token = window.sessionStorage.getItem('ymtxToken');
                let activationCardNumber = this.activationCardNumber;
                // 激活密码
                let activationPassword = this.activationPassword;
                this.$ajax.post(this.G_uri + '/chooseSubject/bindChooseSubjectCard',{
                    card:activationCardNumber,
                    password: activationPassword
                },{
                    headers:{
                        token: token
                    }
                })
                    .then(function(res) {
                        // console.log(res)
                        if(res.data.code == 2000) {
                            // 激活生涯卡成功显示成功弹窗
                            _this.message = '生涯测评卡激活成功';
                            _this.src = '/zhongzhuan';
                            window.sessionStorage.setItem('testType360', '1');
                            _this.isShowSucces = true;
                        }else if(res.data.code == 1016) {
                            _this.$router.push('/login');
                        }else {
                            _this.warning4 = res.data.msg;
                        }

                    })
                    .catch(function(error) {
                        console.log(error)
                        // alert('当前服务器繁忙，请刷新')
                    });
            },
            //激活选科卡2
            goXuanke() {
                let _this = this;
                let token = window.sessionStorage.getItem('ymtxToken');
                let activationCardNumber = this.activationCardNumber;
                // 激活密码
                let activationPassword = this.activationPassword;
                this.$ajax.post(this.G_uri + '/chooseSubject/bindSelectSubjectCard',{
                    card: activationCardNumber,
                    password: activationPassword
                },{
                    headers:{

                        token: token
                    }
                })
                    .then(function(res) {
                        if(res.data.code == 2000) {
                            // 激活生涯卡成功显示成功弹窗
                            _this.isJihuo360 = true;
                            // _this.isShowSucces = true;
                            // _this.message = '360°选科卡激活成功';
                            // _this.src = '/home';

                        }else if(res.data.code == 1016) {
                            _this.$router.push('/login');
                        }else {
                            _this.warning4 = res.data.msg;
                            // alert(res.data.msg);
                        }

                    })
                    .catch(function(error) {
                        console.log(error);
                        // alert('当前服务器繁忙，请刷新')
                    });
            },
            goBack() {
                // 点击按钮关闭激活卡页面
                //this.$router.push('/shengyaceping')
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
                        _this.$router.push('/login');
                    }else if(res.data.code == 2026) {
                        _this.$router.push('/perfectInformation');
                    }
                })
                // .then (function(res) {
                //     if(_this.zhuangtai == 1) {//创建测试
                //         _this.goCreate();
                //     }else if(_this.zhuangtai == 2) {//继续测试
                //         _this.goOnTest();
                //     }
                // })
            },
           //创建测试
            goCreate() {
                var _this = this;
                var serial_no = this.serial_no;
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
                            _this.$router.push("/shengyaceping")
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
                        console.log(res);
                        var data = res.data;
                        // console.log(data);
                        if (data.code == 0) {
                            // 序列号类型1
                            if (data.result.serial_type == 1) {
                                // 进行到哪个模块，node是module的子模块
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
                            }
                        }
                    }.bind(this))
                    .catch(function(error) {
                        console.log(error)
                    })
            },
            // 获取购买视频卡进度 isCanView// 视频卡进度 // 1 未绑卡  2绑卡 未选科 3选完课
            // getCanView() {
            //     var token = window.sessionStorage.getItem('ymtxToken');
            //     var _this = this;
            //     this.$ajax
            //         // get请求
            //         // /api/target/getUniversityList
            //         .post(this.G_uri + '/video/isCanView', {
            //             token: token,
            //         },{
            //             headers:{
            //                 token: token
            //             }
            //         })
            //         // 监听数据返回
            //         // .then(({ data }) => console.log(data))
            //         .then(function(res) {
            //             console.log(res)
            //             if(res.data.code == 2000) {
            //                 _this.isCanView = res.data.data.isCanView;
            //                 if(_this.isCanView == 2) {
            //                     _this.isShowUniversitySelection = true;
            //                 }
            //             }else if(res.data.code == 1016) {
            //                 _this.$router.push('/login');
            //             }else if(res.data.code == 2026) {
            //                 _this.$router.push('/perfectInformation');
            //             }

            //         })
            //         .catch(function(error) {
            //             // alert('请检查网络')
            //         })
            // },
            // 获取自主招生学校列表，pid：2自招面试
            getUniversityList() {
                let token = window.sessionStorage.getItem('ymtxToken');
                var _this = this;
                this.$ajax
                    .post(this.G_uri + '/video/getCategoryList', {
                        pid: 2
                    },{
                        headers:{
                            token: token
                        }
                    })
                    // 监听数据返回
                    .then(function(res) {
                        // console.log(res)
                        if(res.data.code == 2000) {
                            _this.universityList = res.data.data.filter(function(item, index, arr) {
                                return item.id != 12;
                            });
                        }else if(res.data.code == 1016) {
                            _this.$router.push('/login');
                        }

                    })
                    .catch(function(error) {
                        console.log(error);
                        // alert('请检查网络')
                    })
            },
            // 购买视频卡3
            goJihuo() {
                let _this = this;
                let activationCardNumber = this.activationCardNumber;
                // 激活密码
                let activationPassword = this.activationPassword;
                let token = window.sessionStorage.getItem('ymtxToken');
                this.$ajax.post(this.G_uri + '/video/bindViewCard',{
                    card: activationCardNumber,
                    password: activationPassword
                },{
                    headers:{
                        token: token
                    }
                })
                    .then(function(res) {
                        // console.log(res)
                        if(res.data.code == 2000) {
                            _this.isShowUniversitySelection = true;
                            // _this.$emit('go-oppenUniversity');
                            // _this.$emit('go-close');

                        }else if(res.data.code == 1016) {
                            _this.$router.push('/login');
                        }else if(res.data.code == 2026) {
                            _this.$router.push('/perfectInformation');
                        }else {
                            _this.warning4 = res.data.msg;
                        }

                    })
                    .catch(function(error) {
                        // alert('当前服务器繁忙，请刷新')
                    });
            },
            // 向数组universityIds，添加自招学校id
            pushId(id) {
                // var ids = this.universityIds;
                var length = this.universityIds.length;
                if(length == 0) {
                    this.universityIds.push(id);
                    return;
                }
                if(length > 0 && length < 3) {
                    var boolean = this.universityIds.some(function(item, index) {
                        return item == id;
                    })
                    if(boolean) {
                        this.universityIds = this.universityIds.filter(function(item, index) {
                            return item != id;
                        })
                    }else {
                        this.universityIds.push(id);
                    }
                }
                if(length == 3) {
                    var boolean2 = this.universityIds.some(function(item, index) {
                        return item == id;
                    })
                    if(boolean2) {
                        this.universityIds = this.universityIds.filter(function(item, index, arr) {
                            return item != id;
                        })
                    }else {
                        return;
                    }
                }
            },
            // 将添加好的自招学校id发送
            saveUniversityIds() {
                let token = window.sessionStorage.getItem('ymtxToken');
                var cateId = this.universityIds;
                var _this = this;
                if(cateId.length !== 3) {
                    return;
                }
                this.$ajax
                    .post(this.G_uri + '/video/storeViewList', {
                        cateId: cateId
                    },{
                        headers:{
                            token: token
                        }
                    })
                    // 监听数据返回
                    .then(function(res) {
                        console.log(res)
                        if(res.data.code == 2000) {
                            if(res.data.data.id) {
                                _this.$router.push({
                                    path: '/gerenzhongxin',
                                    query: {
                                        component: 'Mycourses'
                                    },
                                    params: {
                                        component: 'Mycourses',
                                    },
                                })
                            }
                        }else if(res.data.code == 1016) {
                            _this.$router.push('/login');
                        }

                    })
                    .catch(function(error) {
                        console.log(error);
                        // alert('请检查网络')
                    })
            },

            // 购买教辅资源视频卡
            goJiaofu() {
                var token = window.sessionStorage.getItem('ymtxToken');
                var card = this.activationCardNumber;
                var password = this.activationPassword;
                var _this = this;
                this.$ajax.post(this.G_uri + '/careerVideo/bindViewCard',{
                    card: card,
                    password: password
                },{
                    headers:{
                        token: token
                    }
                })
                .then(function(res) {
                    // console.log(res)
                    if(res.data.code == 2000) {
                        // 激活生涯卡成功显示成功弹窗
                        _this.isShowSucces = true;
                        _this.message = '教辅资源卡激活成功';
                        _this.src = '/jiaofuziyuan';

                    }else if(res.data.code == 1016) {
                        _this.$router.push('/login');
                    }else if(res.data.code == 2026) {
                            _this.$router.push('/perfectInformation');
                    }else {
                        _this.warning4 = res.data.msg;
                    }
               
                })
                .catch(function(error) {
                    // alert('当前服务器繁忙，请刷新')
                    console.log(error);
                }); 
            },


            //激活根据专业选科目选科卡
            goMajorSelectedSubjects() {
                // 上线前删除
                // this.isJihuo = true;
                // return;

                let token = window.sessionStorage.getItem('ymtxToken');
                window.sessionStorage.setItem('token',token);
                let card = this.activationCardNumber;
                let password = this.activationPassword;
                let _this = this;
                // if(!card && !password) {
                //     this.warning4="账号或密码不能为空";
                //     return;
                // }
                this.$ajax.post(this.G_uri + '/chooseSubject/bindBalanceChooseSubjectCard',{
                    card: card,
                    password: password
                },{
                    headers:{
                        token: token
                    }
                })
                    .then(function(res) {
                        if(res.data.code == 2000) {
                            // 激活生涯卡成功显示成功弹窗
                            _this.isShowSucces = true;
                            _this.message = '根据专业选科目选科卡激活成功';
                            _this.src = '/majorSelectedSubjects/mubiaozhuanye';

                        }else if(res.data.code == 1016) {
                            _this.$router.push('/login');
                        }else {
                            _this.warning4 = res.data.msg;
                        }

                    })
                    .catch(function(error) {
                        console.log(error);
                    });
            },


            // 激活高中竞赛库竞赛视频
            goCompetition() {
                let token = window.sessionStorage.getItem('ymtxToken');
                let card = this.activationCardNumber;
                let password = this.activationPassword;
                let _this = this;
                this.$ajax.post(this.G_uri + '/competitionVideo/bindViewCard',{
                    card: card,
                    password: password
                },{
                    headers:{
                        token: token
                    }
                })
                .then(function(res) {
                    // console.log(res)
                    if(res.data.code == 2000) {
                        // 激活教辅资源卡成功显示成功弹窗
                        _this.isShowSucces = true;
                        _this.message = '高中竞赛指导视频激活成功';
                        _this.src = '/highSchoolCompetition';
                    }else if(res.data.code == 1016) {
                        _this.$router.push('/login');
                    }else if(res.data.code == 2026) {
                            _this.$router.push('/perfectInformation');
                    }else {
                        _this.warning4 = res.data.msg;
                    }
               
                })
                .catch(function(error) {
                    // alert('当前服务器繁忙，请刷新')
                    console.log(error);
                }); 
            }



        },
        created() {
            if(window.sessionStorage.getItem('name')) {
                this.user = window.sessionStorage.getItem('name');
            }
            this.getUniversityList();
        }
    }
</script>