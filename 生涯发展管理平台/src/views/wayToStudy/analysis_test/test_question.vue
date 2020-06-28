<template>
    <!-- 升学途径分析 -->
    <div class="test_question" v-if="question_data">
    	<div class="question" v-for="(item, index) in question_data" :key="index" :id="'question' + item.id">
            <p class="title">{{item.topic}}</p> 
            <div class="option_box" v-if="item.typeName == '单选'"> 
                <el-radio-group v-model="answered[item.id].judgeAnswer">
                    <el-radio :label="option" v-for="(option,index) in item.option" :key="index">{{option}}</el-radio>
                </el-radio-group>
            </div>
            <div class="option_box" v-if="item.typeName == '日期'"> 
                <el-date-picker
                      v-model="answered[item.id].judgeAnswer"
                      type="date"
                      placeholder="请选择您的生日"
                      value-format="yyyy-MM-dd">
                </el-date-picker>
            </div>
            <div class="input_box" v-if="item.typeName == '输入框' && item.id==10"> 
                <el-input v-model="answered[item.id].judgeAnswer" placeholder="请输入您的身高(数字)" type="number"></el-input>
            </div>
            <div class="input_box" v-if="item.typeName == '输入框' && item.id==11"> 
                <el-input v-model="answered[item.id].judgeAnswer" placeholder="请输入您的体重(数字)" type="number"></el-input>
            </div>
            <div class="option_box" v-if="item.typeName == '下拉框'&&item.id==2"> 
                <el-select v-model="answered[item.id].judgeAnswer"  placeholder="高考年份">
                    <el-option v-for="(item, $index) in years" :key="$index" :label="item" :value="item">
                    </el-option>
                </el-select>
            </div>
            <div class="option_box" v-if="item.typeName == '下拉框'&&item.id==5"> 
                <div class="inputs">
                    <span><i>*</i>省/市:</span>
                    <el-select v-model="pname" @change="choseProvince" placeholder="省级地区">
                        <el-option v-for="(item,$index) in province" :key="$index" :label="item.value" :value="item.value">
                        </el-option>
                    </el-select>
                </div>
                <div class="inputs">
                    <span><i>*</i>城市:</span>
                    <el-select v-model="cname" @change="choseCity" placeholder="市级地区">
                        <el-option v-for="(item,$index) in city" :key="$index" :label="item.value" :value="item.value">
                        </el-option>
                    </el-select>
                </div>
                <div class="inputs">
                    <span><i>*</i>户籍:</span>
                    <el-select v-model="answered[item.id].judgeAnswer"  placeholder="市级地区">
                        <el-option v-for="(item,$index) in registers" :key="$index" :label="item" :value="item">
                        </el-option>
                    </el-select>
                </div>
            </div>
        </div>
        <div class="btn_box">
            <div class="box">
                <div class="btn_pre btn"  @click="changeQuestion(-1)" v-show="step_idx != 1">上一步</div>
                <div class="btn_next btn" @click="changeQuestion(1)" :class="isFinish == true ? '' : 'unactive'" v-show="step_idx !== 5">下一步</div>
                <div class="btn_next btn" @click="$parent.goStoreResult()" :class="isFinish == true ? '' : 'unactive'" v-show="step_idx == 5">提交</div>
            </div>    
        </div>
        <div class="fixd_box" :class="isShowSlide ? 'slide': 'unslide'">
            <p class="title">答题情况</p>
            <ul>
                <li v-for="(item, index) in question_data" :key="index" :class="isFive(item) ? 'unfinish' : 'finish'" @click="scrollToView(item.id)">{{index + 1}}</li>
            </ul>
            <div class="btn" @click="isShowSlide = !isShowSlide" :class="isShowSlide ? 'slide': 'unslide'"> 
            </div>
        </div>
    </div>
</template>
<script>
export default {
    components: { },
    props: [ 'question_data','answered','step_idx' ],
    data() {
        return {
            // 是否隐藏右边答题情况
            isShowSlide: true,
            isFinish: false,
            header: ['基本信息', '身体条件','家庭条件','个人能力','个人意愿'],
            question: [],
            years: [],
            // 户籍
            registers:['城镇','农村'],
            register: '',
            // 省市区
            province:[],
            shi1: [],
            qu1: [],
            city:[],
            block:[],
            pname:'',//省的名字
            cname:'',//市的名字
            bname:'' , //区的名字
        }
    },
    methods: {
        getYear() {
            let date=new Date();
            let year=date.getFullYear();
            for (let i=0;i<5;i++){
                this.years[i] = year++;
            }
        },
        // 加载china地点数据，三级
        getCityData:function(){
            let that = this;
            that.citys.forEach(function(item,index){
                //省级数据
                that.province.push({ value: item.name, children: item.cityList})
            })
        },
        // 选省
        choseProvince:function(e) {
            let that = this;
            that.city = [];
            that.block = [];
            that.cname = '';
            that.bname = '';
            for (var index2 in that.province) {
                if (e === that.province[index2].value) {
                    that.shi1 = that.province[index2].children
                    that.pname = that.province[index2].value
                    that.shi1.forEach(function(citem,cindex){
                        that.city.push({value: citem.name, children: citem.areaList})
                    })
                }
            }
        },
        // 选市
        choseCity:function(e) {
            let that = this;
            that.block = [];
            for (var index3 in that.city) {
                if (e === that.city[index3].value) {
                    that.qu1 = that.city[index3].children
                    that.cname = that.city[index3].value
                    that.qu1.forEach(function(bitem){
                        that.block.push({value: bitem, children: []})
                    })
                }
            }
        },
        changeQuestion(num) {
            if(this.isFinish === false && num > 0) {
                return;
            }
            window.scroll(0,0);
            this.$parent.changeQuestion(num);
        },
        isFinished() {
            let bol = true;
            this.question_data.forEach((item) => {
                if(item.id == 5) {
                    if(this.answered[item.id].judgeAnswer == '' || this.answered[item.id].showAnswer == '') {
                        bol = false; 
                    } 
                }else {
                    if(this.answered[item.id].judgeAnswer == '') {
                        bol = false; 
                    } 
                } 
            })
            this.isFinish = bol;
        },
        scrollToView(id) {
            document.getElementById('question' + id).scrollIntoView({
                block: 'start',
                inline: 'nearest',
                behavior: 'smooth'
            })
        },
        isFive(item) {
            if(item.id == 5) {
                return this.answered[item.id].judgeAnswer == ''|| this.answered[item.id].showAnswer==''
            }else {
                return this.answered[item.id].judgeAnswer == '';
            }
        }
    },
    watch: {
        citys(){
            this.getCityData();
        },
        // question_data: {
        //     immediate: false,
        //     handler() {
        //         this.question = this.question_data['基本信息'];
        //     },
        // },
        question_data() {
            this.isFinished();
        },
        answered: {
            immediate: false,
            deep: true,
            handler() {
                this.isFinished();
            }
        },
        pname() {
            let province = this.pname;
            let city = this.cname;
            if(province == '' || city == '') {
                this.answered[5].showAnswer = '';
            }else {
                this.answered[5].showAnswer = province + city;
            }
            console.log(this.answered);   
        },
        cname() {
            let province = this.pname;
            let city = this.cname;
            if(province == '' || city == '') {
                this.answered[5].showAnswer = '';
            }else {
                this.answered[5].showAnswer = province + city;
            }   
            console.log(this.answered);   

        }


    },
    computed:{
        citys(){
            return this.$store.state.citys
        }
    },
    mounted() {
        this.getCityData();
    },
    created() {
        this.getYear();
    }
}
</script>
<style type="text/css" lang='less' scoped>
.test_question {
    .question {
        margin-bottom: 10px;
        .title {
            line-height: 38px;
            color: #3187e6;
        }
        .option_box {
            overflow: hidden;
            .inputs {
                float: left;
                margin-right: 20px;
            }
        }
        .input_box {
            width: 200px;
        }
    }
    .btn_box {
        padding: 43px 0px;
        .box {
            width: 300px; 
            height: 36px;
            margin: 0 auto;
            display: flex;
            justify-content: center;
            .btn {
                line-height: 36px;
                text-align: center;
                background-color: #2c8ffc;
                width: 100px;
                border-radius: 5px;
                color: #fff;
                margin: 0px 20px;
                cursor: pointer;
            }
            .unactive {
                background-color: #eaeaea;
            }
        }
    }
    .fixd_box {
        width: 210px;
        height: 300px;
        position: fixed;
        bottom: 200px;
        right: 2px;
        z-index: 3;
        box-shadow: 0px 0px 10px #dedede; 
        background-color: #fff;
        .title {
            line-height: 50px;
            font-size: 20px;
            font-weight: 600;
            text-align: center;
        }
        ul {
            width: 210px;
            display: flex;
            flex-wrap: wrap;
            li {    
                width: 30px;
                height: 30px;
                border-radius: 5px;
                text-align: center;
                line-height: 30px;
                margin-left: 10px;
                margin-bottom: 5px;
                color: #fff;
                cursor: pointer;
                
            }
            .finish {
                color: #fff;
                background-color: #2c8ffc;
            }
            .unfinish {
                color: #fff;
                background-color: #eaeaea;
            }
        }
        .btn {
            width: 30px;
            height: 50px;
            position: absolute;
            left: -30px;
            top: 50%;
            cursor: pointer;
            margin-top: -25px;
        }
        .slide {
            background: url(/imgs/wayToStudy/common/icon_youhua.png) no-repeat center center;
        }
        .unslide {
            background: url(/imgs/wayToStudy/common/icon_zuohua.png) no-repeat center center;
        }
    }
    .slide {
        right: 2px;
        transition: all 1s;
    }
    .unslide {
        right: -210px;
        transition: all 1s;
    }
}
</style>
<style type="text/css" lang='less'>
.test_question {
    .el-input__inner  {
        border: 1px solid #DCDFE6 !important;
        border-radius: 4px;
    }
    .el-radio-group {
        .el-radio {
            display: block;
            line-height: 30px;
        }
    }
}
</style>