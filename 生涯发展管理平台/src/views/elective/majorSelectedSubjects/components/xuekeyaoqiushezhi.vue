<template>
    <div class="xuekeyaoqiushezhi">
        <div class="inner">
            <div class="content">
                <div class="contentTitle">
                    <span class="shezhi">学科要求设置</span>
                </div>

                <div class="centerBox">
                    <div class="guidance">
                        指导语
                    </div>
                    <div class="neirongBox1" v-if="provinceCode =='1'">
                        <div class="details">
                            请根据设定的目标专业的学科要求，确定选择科目。不同专业的选科要求不同，同一专业在不同学校的选科要求也有差异，你的选考科目是你能够报考该专业的基础。请认真分析目标专业的学科要求，设置你的选考科目。若在此步骤中你还不能确定需要选择的任何一个科目，直接点击下一步，然后通过决策平衡单完成最终选择的科目组合；若在此步骤中你确定<span>1科或2科</span>，则确定的选考科目会计为你的选科志愿科目，未确定的科目通过决策平衡单完成；若在此步骤中确定了<span>3</span>个科目，则直接生成选科报告。
                        </div>
                        <div class="checkBoxs">
                            <el-checkbox-group 
                                v-model="subjectSetting"
                                :max="3">
                                <el-checkbox v-for="(item, index) in subjects1" :key="index" :label="item.name"></el-checkbox>
                            </el-checkbox-group>
                        </div>
                    </div>
                    <div class="neirongBox1" v-if="provinceCode =='2'">
                        <div class="details">
                           请根据设定的目标专业的学科要求，确定选择科目。不同专业的选科要求不同，同一专业在不同学校的选科要求也有差异，你的选考科目是你能够报考该专业的基础。请认真分析目标专业的学科要求，设置你的选考科目。若在此步骤中你还不能确定需要选择的任何一个科目，直接点击下一步，然后通过决策平衡单完成最终选择的科目组合；若在此步骤中你确定<span>1科或2科</span>，则确定的选考科目会计为你的选科志愿科目，未确定的科目通过决策平衡单完成；若在此步骤中确定了<span>3</span>个科目，则直接生成选科报告。
                        </div>
                        <div class="checkBoxs">
                            <el-checkbox-group 
                                v-model="subjectSetting"
                                :max="3">
                                <el-checkbox v-for="(item, index) in subjects2" :key="index" :label="item.name"></el-checkbox>
                            </el-checkbox-group>
                        </div>
                    </div>
                    <div class="neirongBox1" v-if="provinceCode =='3'">
                        <div class="details">
                            请根据设定的目标专业的学科要求，确定选择科目。不同专业的选科要求不同，同一专业在不同学校的选科要求也有差异，你的选考科目是你能够报考该专业的基础。请认真分析目标专业的学科要求，设置你的选考科目。若在此步骤中你还不能确定需要选择的任何一个科目，直接点击下一步，然后通过决策平衡单完成最终选择的科目组合；若在此步骤中你确定<span>1科或2科</span>，则确定的选考科目会计为你的选科志愿科目，未确定的科目通过决策平衡单完成；若在此步骤中确定了<span>3</span>个科目，则直接生成选科报告。
                        </div>
                        <div class="checkBoxs">
                            <p>首选科目<span class="tishi">（首选1科或不选）</span></p>
                            <el-checkbox-group 
                                v-model="subjectSetting1"
                                :max="1">
                                <el-checkbox v-for="(item, index) in subjects3a" :key="index" :label="item.name"></el-checkbox>
                            </el-checkbox-group>
                        </div>
                        <div class="checkBoxs">
                            <p>再选科目<span class="tishi">（可选0-2科）</span></p>
                            <el-checkbox-group 
                                v-model="subjectSetting"
                                :max="2">
                                <el-checkbox v-for="(item, index) in subjects3b" :key="index" :label="item.name"></el-checkbox>
                            </el-checkbox-group>
                        </div>
                    </div>
                </div>
                <div class="turning">
                    <div class="pre" @click="$router.push('/majorSelectedSubjects/xuekeyaoqiu')">上一步</div>
                    <div class="next" @click="goNext">下一步</div>
                </div>
            </div>
        </div>
        <div class="tixing" v-if="isShowTixing">
            <div class="tanchuang">
                <div class="title">
                    是否确定目标学科组合？
                </div>
                <div class="jeishi">
                    一经确认，将跳过决策平衡单设置，保存学科组合
                </div>
                <div class="button">
                    <div class="determine" @click="goDetermine()">确定</div>
                    <div class="cancel" @click="isShowTixing = false">取消</div>
                </div>
            </div>
        </div>
    </div>
</template>
<style type="text/css" lang='less' scoped>
.xuekeyaoqiushezhi {
    .inner {
        width: 1200px;
        margin: 0 auto;
    }
    .content {
        padding: 30px 22px;
        background-color: #fff;
        .contentTitle {
            height: 30px;
            padding: 10px 0px;
            background-color: #f9f9f9;
            margin-bottom: 20px;
            span {
                display: inline-block;
                padding-left: 20px;
                font-size: 18px;
                color: #333333;
                float: left;
                height: 30px;
                line-height: 30px;

            }
            .shezhi {
                border-left: 4px solid #2d8ffc;
                font-weight: 550;
            }
            .tixing {
                font-size: 14px;
                color: #f1102b;
                margin-left: 30px;
            }
        }
        .centerBox {
            padding-top: 10px;
            height: 454px;
            background: url(/imgs/elective/majorSelectedSubjects/beijing.png) no-repeat;
            .guidance {
                height: 58px;
                line-height: 58px;
                font-size: 18px;
                color: #333;
                font-weight: 600;
                padding-left: 88px;
                background: url(/imgs/elective/majorSelectedSubjects/xiaoshou1.png) no-repeat 15px center;
            }
            .neirongBox1 {
                padding-left: 88px;
                padding-right: 20px;
                .details {
                    font-size: 14px;
                    color: #666;
                    line-height: 24px;
                    span {
                        color: #499adc;
                        display: inline-block;
                        white-space: none;
                    }
                }
            }
            .checkBoxs {
                padding-top: 40px;
                overflow: hidden;
                p {
                    font-size: 16px;
                    color: #333;
                    line-height: 30px;
                    .tishi {
                        font-size: 14px;
                        color: #499adc;
                    }
                }
            }
        }
        .turning {
            padding: 35px 0px;
            height: 46px;
            width: 524px;
            margin: 0 auto;
            .pre {
                width: 154px;
                height: 44px;
                border: 1px solid #2d8ffc;
                border-radius: 2px;
                text-align: center;
                line-height: 44px;
                font-size: 16px;
                color: #2d8ffc;
                float: left;
                cursor: pointer;
                &:hover {
                    background-color: #2d8ffc;
                    color: #fff;
                }
            }
            .next {
                width: 154px;
                height: 44px;
                border: 1px solid #2d8ffc;
                border-radius: 2px;
                text-align: center;
                line-height: 44px;
                font-size: 16px;
                color: #2d8ffc;
                float: right;
                cursor: pointer;
                &:hover {
                    background-color: #2d8ffc;
                    color: #fff;
                }
            }
        }
    }
    .tixing {
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        z-index: 100000; 
        // background-color: rgba(51,51,51,.35);
        .tanchuang {
            width: 490px;
            height: 240px;
            position: absolute;
            left: 50%;
            // top: 50%;
            margin-top: 120px;
            margin-left: -245px;
            background-color: #fff; 
            z-index: 100000;  
            box-shadow: 0px 0px 15px rgb(222,222,222);  
            .title {
                text-align: center;
                color: #333;
                font-size: 22px;
                padding-top: 10px;
                line-height: 82px;
            } 
            .jeishi {
                font-size: 14px;
                text-align: center;
                line-height: 24px;
            } 
            .button {
                padding-top: 40px;
                width: 365px;
                margin: 0 auto;
                text-align: center;
                line-height: 50px;
                font-size: 16px; 
                .determine {
                    float: left;
                    width: 154px;
                    height: 48px;
                    border: 1px solid #3492f9;
                    color: #3492f9;
                    border-radius: 5px;
                    cursor: pointer;
                    &:active {
                        background-color: #156def;
                        color: #fff;
                    }
                    
                }
                .cancel {
                    float: right;
                    width: 154px;
                    height: 48px;
                    border: 1px solid #dedede;
                    color: #fff;
                    border-radius: 5px;
                    background-color: #3492f9;
                    cursor: pointer;
                    &:active {
                        background-color: #156def;
                    }

                }
            }
        }
    }
}
</style>
<script>
export default {
    // props: [ 'mubiaozhuanye' ],
    data() {
        return { 
            // 省份
            provinceCode: '',
            // 是否显示提示弹窗
            isShowTixing: false,
            cdata: [],
            subject: [],
            subjectSetting1: [],
            subjectSetting: [],
            // 浙江
            subjects1: [
                { name: '物理', idx: '0' },
                { name: '化学', idx: '1' },
                { name: '生物', idx: '2' },
                { name: '历史', idx: '3' },
                { name: '思想政治', idx: '4' },
                { name: '地理', idx: '5' },
                { name: '技术', idx: '6' },
            ],
            // 北京、上海、天津、海南、山东
            subjects2: [
                { name: '物理', idx: '0' },
                { name: '化学', idx: '1' },
                { name: '生物', idx: '2' },
                { name: '历史', idx: '3' },
                { name: '思想政治', idx: '4' },
                { name: '地理', idx: '5' },
            ],
            // 重庆、广东、福建、江苏、河北、湖南、湖北、辽宁
            subjects3a: [
                { name: '物理', idx: '0' },
                { name: '历史', idx: '1' }
            ],
            subjects3b: [
                { name: '化学', idx: '0' },
                { name: '生物', idx: '1' },
                { name: '思想政治', idx: '2' },
                { name: '地理', idx: '3' }
            ],
        }
    },
    methods: {
        getProvince() {
            var token = window.sessionStorage.getItem('ymtxToken');
            var _this = this;
            this.$ajax
                // get请求
                // /api/target/getUniversityList
                .post(this.G_uri + '/login/getUserInfo',{},{
                    headers:{
                        token: token
                    }
                })
                // 监听数据返回
                // .then(({ data }) => console.log(data))
                .then(function(res) {
                    // console.log(res)
                    if(res.data.code == 2000) {
                        var province = res.data.data.province;
                        switch (province) {
                            case "浙江":
                                _this.provinceCode = '1';
                                break;
                            case "北京":
                            case "上海":
                            case "天津":
                            case "海南":
                            case "山东":
                            case "山西":
                            case "内蒙古":
                            case "吉林":
                            case "黑龙江":
                            case "安徽":
                            case "福建":
                            case "江西":
                            case "河南":
                            case "广西":
                            case "四川":
                            case "云南":
                            case "西藏":
                            case "陕西":
                            case "甘肃":
                            case "青海":
                            case "宁夏":
                            case "新疆":
                            case "台湾":
                            case "香港":
                            case "澳门":
                                _this.provinceCode = '2';
                                break;
                            case "重庆":
                            case "广东":
                            case "福建":
                            case "江苏":
                            case "河北":
                            case "湖南":
                            case "湖北":
                            case "辽宁":
                                _this.provinceCode = '3';
                                break;
                            default:
                        }
                    }else if(res.data.code != 2000) {
                        // alert(res.msg)
                        console.log(res.msg);
                    }
                   
                })
                .catch(function(error) {
                    console.log(error);
                    // alert('服务器繁忙')
                })
        },
        // 下一步，存储科目
        goNext() {
            var arr1 = this.subjectSetting1;
            var arr2 = this.subjectSetting;
            var subjectSets = [];
            subjectSets = arr1.concat(arr2);
            window.sessionStorage.setItem("subjectSets2",JSON.stringify(subjectSets));
            if(subjectSets.length < 3) {
                this.$router.push('/majorSelectedSubjects/pinghengdan1');
            }else {
                this.isShowTixing = true;
            }
        },
        goDetermine() {
            
            // this.$router.push('/zhinengxuanke/xuekeyaoqiu');
            var token = window.sessionStorage.getItem('ymtxToken');
            var balance = [];
            var target = JSON.parse(window.sessionStorage.getItem("mubiaozhuanye"));
            var subjectName = JSON.parse(window.sessionStorage.getItem("subjectSets2"));
            // console.log(data)
            var _this = this;
            this.$ajax
                .post(this.G_uri + '/chooseSubject/storeSelectionDecision', {
                    // data
                    source: 1,
                    balance: balance,
                    target: target,
                    subjectName: subjectName

                },{
                    headers:{
                        token: token
                    }
                })
                // 监听数据返回
                // .then(({ data }) => console.log(data))
                .then(function(res) {
                    // console.log(res)
                    if(res.data.code == 2000) {
                        _this.$router.push('/majorSelectedSubjects/threeResult');
                    }else if(res.data.code == 1016) {
                        _this.$router.push('/login');
                    }else {
                        // _this.isShowError = true;
                        // alert(res.data.msg);
                        console.log(res.data.msg)
                    }
                   
                })
                .catch(function(error) {
                    // alert('请检查网络')
                })
        }
    },
    created() {
        this.getProvince();
    }
}
</script>