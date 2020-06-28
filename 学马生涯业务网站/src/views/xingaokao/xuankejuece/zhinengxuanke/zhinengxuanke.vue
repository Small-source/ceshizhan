<template>
    <!-- 智能选科 -->
    <div class="zhinengxuanke">
           <!--  <div class="mianbaoxie">
                <div class="inner">
                    <span class="no1" @click="$router.push('/home')">首页 > </span><span class="no2" @click="$router.push('/xuankejuece')">选科决策 > </span><span class="no3">{{nowPage}}</span>
                    <div class="goBack" @click="$router.go(-1)" v-show="$route.path == '/zhinengxuanke/xuankeyuanxiao'">返回</div>
                </div>
            </div> -->
        <div class="content">
                <keep-alive>
                    <router-view v-if="$route.meta.keepAlive" :src="src" :quanzhong="quanzhong" v-on:go-next="mubiaozhuanyes($event)" :mubiaozhuanye="mubiaozhuanye"></router-view>
                </keep-alive>
                <router-view v-if="!$route.meta.keepAlive" :src="src" :quanzhong="quanzhong" v-on:go-next="mubiaozhuanyes($event)" :mubiaozhuanye="mubiaozhuanye" :checked="checked"></router-view>
            </div>         
        </div>
    </div>
</template>
<style type="text/css" lang='less' scoped>
.zhinengxuanke {
    background-color: #f9f9f9;
    // padding-top: 34px;
   
    .inner {
        width: 1200px;
        margin: 0 auto;
    }
    .mianbaoxie {
            position: fixed;
            left: 0px;
            top: 106px;
            height: 34px;
            font-size: 12px;
            line-height: 34px;
            color: #333;
            background-color: #fff;
            width: 100%;
            z-index: 10;
            .inner {
                width: 1200px;
                margin: 0 auto;
                position: relative;
            }
            .no1 {
                padding-left: 27px;
                background: url(/imgs/nav/hourse.png) no-repeat;
                cursor: pointer;
                &:hover {
                    color: #2d90f8;
                }
            }
            .no2 {
                cursor: pointer;
                &:hover {
                    color: #2d90f8;
                }
            }
            .no3 {
                color: #2d90f8;
            }
            .goBack {
                position: absolute;
                width: 50px;
                height: 20px;
                line-height: 20px;
                background-color: #2d90f8;
                color: #fff;
                right: 0px;
                top: 7px;
                font-size: 12px;
                border-radius: 10px;
                text-align: center;
                cursor: pointer;
                z-index: 1000000000000000;
            }
    }
    .turning {
        padding: 35px 0px;
        .next {
            width: 154px;
            height: 44px;
            border: 1px solid #2d8ffc;
            border-radius: 2px;
            text-align: center;
            line-height: 44px;
            font-size: 16px;
            color: #2d8ffc;
            margin: 0 auto;
            cursor: pointer;
            &:hover {
                background-color: #2d8ffc;
                color: #fff;
            }
        }
    }
}
</style>
<script>
// // 测评
// import Ceping from './components/ceping.vue';   
// // 目标专业
// import Mubiaozhuanye from './components/mubiaozhuanye.vue';
// // 平衡单1
// import Pinghengdan1 from './components/pinghengdan1.vue';
// // 平衡单2
// import Pinghengdan2 from './components/pinghengdan2.vue';
// // 设置选科志愿
// import Xuankezhiyuan from './components/xuankezhiyuan.vue';
export default {
    // components: { Ceping, Mubiaozhuanye, Pinghengdan1, Pinghengdan2, Xuankezhiyuan },
    props: [ 'message' ],
    data() {
        return {
            pages: 'mubiaozhuanye',
            nowPage: '设置目标专业',
            // 当前选科进行状态
            state: 1,
            // 当前所在组件页面
            // pages: 'ceping',
            isShowjihuoka: false,
            src: '',
            serial_no: '',
            // 记录状态
            zhuangtai: '',
            // 权重和平衡单
            quanzhong: [
                // 影响因素，权重，物理，化学，生物，思想政治，历史，地理，技术, 学科兴趣，背景图
                { influenceFactor: '1', influenceFactorWeight: '2', subjectPhysics: '0', subjectChemistry: '0', subjectBiological: '0', subjectIdeologicalPolitics: '0', subjectHistory: '0', subjectGeography: '0', subjectTechnology: '0', titles: '我对这门学科感兴趣', numbers: '01' },
                { influenceFactor: '2', influenceFactorWeight: '2', subjectPhysics: '0', subjectChemistry: '0', subjectBiological: '0', subjectIdeologicalPolitics: '0', subjectHistory: '0', subjectGeography: '0', subjectTechnology: '0', titles: '这门学科与我的能力相匹配', numbers: '02' },
                { influenceFactor: '3', influenceFactorWeight: '2', subjectPhysics: '0', subjectChemistry: '0', subjectBiological: '0', subjectIdeologicalPolitics: '0', subjectHistory: '0', subjectGeography: '0', subjectTechnology: '0', titles: '我在这门学科上的成绩好', numbers: '03' },
                { influenceFactor: '4', influenceFactorWeight: '2', subjectPhysics: '0', subjectChemistry: '0', subjectBiological: '0', subjectIdeologicalPolitics: '0', subjectHistory: '0', subjectGeography: '0', subjectTechnology: '0', titles: '我有信心学好这门学科', numbers: '04' },
                { influenceFactor: '5', influenceFactorWeight: '2', subjectPhysics: '0', subjectChemistry: '0', subjectBiological: '0', subjectIdeologicalPolitics: '0', subjectHistory: '0', subjectGeography: '0', subjectTechnology: '0', titles: '我喜欢这门学科的老师', numbers: '05' },
                { influenceFactor: '6', influenceFactorWeight: '2', subjectPhysics: '0', subjectChemistry: '0', subjectBiological: '0', subjectIdeologicalPolitics: '0', subjectHistory: '0', subjectGeography: '0', subjectTechnology: '0', titles: '学校在这门学科上的师资、资源有竞争力', numbers: '06' },
                { influenceFactor: '7', influenceFactorWeight: '2', subjectPhysics: '0', subjectChemistry: '0', subjectBiological: '0', subjectIdeologicalPolitics: '0', subjectHistory: '0', subjectGeography: '0', subjectTechnology: '0', titles: '家人建议我选这门学科', numbers: '07' },
                { influenceFactor: '8', influenceFactorWeight: '2', subjectPhysics: '0', subjectChemistry: '0', subjectBiological: '0', subjectIdeologicalPolitics: '0', subjectHistory: '0', subjectGeography: '0', subjectTechnology: '0', titles: '教师建议我选这门学科', numbers: '08' },
                { influenceFactor: '9', influenceFactorWeight: '2', subjectPhysics: '0', subjectChemistry: '0', subjectBiological: '0', subjectIdeologicalPolitics: '0', subjectHistory: '0', subjectGeography: '0', subjectTechnology: '0', titles: '朋友建议我选这门学科', numbers: '09' },
                { influenceFactor: '10', influenceFactorWeight: '2', subjectPhysics: '0', subjectChemistry: '0', subjectBiological: '0', subjectIdeologicalPolitics: '0', subjectHistory: '0', subjectGeography: '0', subjectTechnology: '0', titles: '大部分同学都选了这门学科', numbers: '10' },
                { influenceFactor: '11', influenceFactorWeight: '2', subjectPhysics: '0', subjectChemistry: '0', subjectBiological: '0', subjectIdeologicalPolitics: '0', subjectHistory: '0', subjectGeography: '0', subjectTechnology: '0', titles: '我的目标专业要求必须选择这门学科', numbers: '11' },
                { influenceFactor: '12', influenceFactorWeight: '2', subjectPhysics: '0', subjectChemistry: '0', subjectBiological: '0', subjectIdeologicalPolitics: '0', subjectHistory: '0', subjectGeography: '0', subjectTechnology: '0', titles: '我可以报考感兴趣的专业', numbers: '12' },
                { influenceFactor: '13', influenceFactorWeight: '2', subjectPhysics: '0', subjectChemistry: '0', subjectBiological: '0', subjectIdeologicalPolitics: '0', subjectHistory: '0', subjectGeography: '0', subjectTechnology: '0', titles: '我可以报考我有潜力学好的专业', numbers: '13' },
                { influenceFactor: '14', influenceFactorWeight: '2', subjectPhysics: '0', subjectChemistry: '0', subjectBiological: '0', subjectIdeologicalPolitics: '0', subjectHistory: '0', subjectGeography: '0', subjectTechnology: '0', titles: '我可以报考主流热门专业', numbers: '14' },
                { influenceFactor: '15', influenceFactorWeight: '2', subjectPhysics: '0', subjectChemistry: '0', subjectBiological: '0', subjectIdeologicalPolitics: '0', subjectHistory: '0', subjectGeography: '0', subjectTechnology: '0', titles: '有利于我将来从事的职业', numbers: '15' },
            ],
            // 目标专业
            mubiaozhuanye: [],
                                    // 平衡单选中，变为1,idx1平衡单1,idx2平衡单2
            checked:[
                { idx1: 0, idx2: 2 },
                { idx1: 0, idx2: 2 },
                { idx1: 0, idx2: 2 },
                { idx1: 0, idx2: 2 },
                { idx1: 0, idx2: 2 },

                { idx1: 0, idx2: 2 },
                { idx1: 0, idx2: 2 },
                { idx1: 0, idx2: 2 },
                { idx1: 0, idx2: 2 },
                { idx1: 0, idx2: 2 },

                { idx1: 0, idx2: 2 },
                { idx1: 0, idx2: 2 },
                { idx1: 0, idx2: 2 },
                { idx1: 0, idx2: 2 },
                { idx1: 0, idx2: 2 },
            ],
        }
    },
    methods: {
        goCreate() {
            var _this = this;
            var serial_no = this.serial_no;
            var token = window.sessionStorage.getItem('ymtxToken');
            window.sessionStorage.setItem('token',token);
            this.$ajax.post(this.G_uris + '/test/create',{
                type: 2,
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
                    // _this.src = 'http://39.98.37.134:8003/evlua/classify';
                    _this.src = '/evlua/classify';
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
            // console.log(serial_no)
            var token = window.sessionStorage.getItem('ymtxToken');
            window.sessionStorage.setItem('token',token);
            this.$ajax.post(this.G_uris + '/usercenter/test/goon',{
                // type: 1,
                // serial_no: serial_no,
                // cognition_order:"[1,2,3,4,5,6,7,8,9,10,11,12,13]"
                test_id: serial_no
            },{
                headers:{
                    token: token
                }
            })
            .then(function(res) {
                // console.log(res);
                // if(res.data.code == 0) {
                //     _this.src = 'http://39.98.37.134:8003/evlua/classify';
                // }
                console.log(res);
                var data = res.data;
                // console.log(data);
                if (data.code == 0) {

                  // 序列号类型2
                  if (data.result.serial_type == 2) {
                    if (data.result.module == 0) {
                      _this.src = '/evlua/classify';
                    } else if (data.result.module == 1) {
                        _this.src = '/xgtx/guide/' + data.result.node;
                    } else if (data.result.module == 2) {
                      if (data.result.node == 1) {
                        _this.src = '/evlua/classify/23';
                      } else {
                        _this.src = '/rzqn/guide/' + data.result.node;
                      }
                    } else if (data.result.module == 3) {
                      if (data.result.node == 1) {
                        _this.src = '/evlua/classify/22';
                      } else {
                        _this.src = '/xqqx/guide/' + data.result.node;
                      }
                    }
                  }

                }   
                // } else {
                //   console.log(data.msg);
                // }

            })
            .catch(function(error) {
                console.log(error)
            })
        },
        goTest() {
            window.sessionStorage.setItem('testType', 'type2');
            var token = window.sessionStorage.getItem('ymtxToken');
            window.sessionStorage.setItem('token',token);
            var _this = this;
            // http://39.98.37.134:8003/api/test/create
            this.$ajax.post(this.G_uri + '/chooseSubject/intelligentSelectSubject',{
                testType: 2,
            },{
                headers:{
                    token: token
                }
            })
            .then(function(res) {
                // console.log(res)
                if(res.data.code == 2000) {
                     // code: 1.第一次测试2.继续测试3.测试完成4.绑卡5.报告页,
                    // 6直接选三科不做平衡单 7报告页跟后台一样
                    if(res.data.data.code == 7) {
                        _this.$router.push('/zhinengxuanke/xuankeReport');
                        return;
                    }
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
                       _this.isShowjihuoka = true; 
                       return;
                    }
                    if(res.data.data.code == 3) {
                        _this.zhuangtai = 3;
                        _this.serial_no = res.data.data.testId;
                        _this.$router.push('/zhinengxuanke/mubiaozhuanye');

                        return;
                    }
                    if(res.data.data.code == 2) {
                        _this.zhuangtai = 2;
                        _this.serial_no = res.data.data.testId;
                        return;
                    } 
                    if(res.data.data.code == 1) {
                        // var serial_no = res.data.data.testId;
                        _this.zhuangtai = 1;
                        _this.serial_no = res.data.data.testId;
                    }   
                  
                }else if(res.data.code == 1016) {
                    _this.$router.push('/login');
                }else if(res.data.code == 2026) {
                    _this.$router.push('/perfectInformation');
                }
            })
            .then (function(res) {
                // console.log(res + 'hahah')
                // if(this.serial_no == ) {
                if(_this.zhuangtai == 1) {

                    _this.goCreate();
                }else if(_this.zhuangtai == 2) {
                    _this.goOnTest();
                }
                // }
            })
            .catch(function(error) {
                // alert('当前服务器繁忙，请刷新')
            });
        },
        mubiaozhuanyes(msg) {
            this.mubiaozhuanye = msg;
        },
    },
    watch: {
        $route: {
            handler: function(val, oldVal) {
                var me = this;
                var path = val.path.slice(1);
                if(path == 'zhinengxuanke/pinghengdan1') {
                    this.pages = 'pinghengdan1';
                    this.nowPage = '填写平衡单';
                }else if(path == 'zhinengxuanke/pinghengdan2') {
                    this.pages = 'pinghengdan2';
                    this.nowPage = '填写平衡单';
                }else if(path == 'zhinengxuanke/xuankezhiyuan') {
                    this.pages = 'xuankezhiyuan';
                    this.nowPage = '设置选科志愿';
                }else if(path == 'zhinengxuanke/mubiaozhuanye') {
                    this.pages = 'mubiaozhuanye';
                    this.nowPage = '设置目标专业';
                }else if(path == 'zhinengxuanke/xuankeyuanxiao') {
                    this.pages = 'xuekeyaoqiushezhi';
                    this.nowPage = '优先学科设置';
                }else if(path == 'zhinengxuanke/xuekeyaoqiushezhi') {
                    this.pages = 'xuekeyaoqiushezhi';
                    this.nowPage = '优先学科设置';
                }else if(path == 'zhinengxuanke/xuekeyaoqiu') {
                    this.pages = 'xuekeyaoqiushezhi';
                    this.nowPage = '优先学科设置';
                }
                window.scrollTo(0,0);
            }
        }    
    },
    created() {
        console.log(this.$route.path)
        if(this.$route.path == '/zhinengxuanke/ceping' ) {
            // console.log(5555)
            this.goTest();
        }
        if(this.$route.path == '/zhinengxuanke/xuankezhiyuan') {
            this.pages = 'xuankezhiyuan';
            this.nowPage = '设置选科志愿';
        }
        if(this.$route.path == '/zhinengxuanke/xuekeyaoqiu') {
            this.pages = 'xuekeyaoqiushezhi';
            this.nowPage = '优先学科设置';
        }
        if(this.$route.path == '/zhinengxuanke/pinghengdan1') {
            this.pages = 'pinghengdan1';
            this.nowPage = '填写平衡单';
        }
        if(this.$route.path == '/zhinengxuanke/pinghengdan2') {
            this.pages = 'pinghengdan2';
            this.nowPage = '填写平衡单';
        }
        if(this.$route.path == '/zhinengxuanke/xuankezhiyuan') {
            this.pages = 'xuankezhiyuan';
            this.nowPage = '设置选科志愿';
        }
        
    }
}
</script>