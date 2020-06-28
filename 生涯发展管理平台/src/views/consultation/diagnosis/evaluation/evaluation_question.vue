<template>
    <!-- 升学途径分析 -->
    <div class="evalustion_question" v-if="question_data&&answered">
    	<div class="question" v-for="(item, index) in question_data" :key="index" :id="'question' + item.id">
            <p class="title">{{item.serialNumber}}.{{item.topic}}</p> 
            <div class="option_box"> 
                <el-radio-group v-model="answered[index].answer">
                    <el-radio :label="key" v-for="(value,key,$index) in item.option" :key="$index">{{key}}</el-radio>
                </el-radio-group>
            </div>
        </div>
        <div class="btn_box">
            <div class="box">
                <div class="btn_next btn" @click="$parent.goStoreResult()" :class="isFinish == true ? '' : 'unactive'">提交</div>
            </div>    
        </div>
        <div class="fixd_box" :class="isShowSlide ? 'slide': 'unslide'">
            <p class="title">答题情况</p>
            <ul>
                <li v-for="(item, index) in answered" :key="index" :class="item.answer=='' ? 'unfinish' : 'finish'" @click="scrollToView(item.questionNum)">{{index + 1}}</li>
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
            question: [],
            // 户籍
            registers:['城镇','农村'],
            register: '',
            pname:'',//省的名字
            cname:'',//市的名字
            bname:'' , //区的名字
        }
    },
    methods: {
        changeQuestion(num) {
            if(this.isFinish === false && num > 0) {
                return;
            }
            this.$parent.changeQuestion(num);
        },
        isFinished() {
            let bol = true;
            this.question_data.forEach((item,index) => {
                if(this.answered[index].answer == '') {
                    bol = false; 
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
        }
    },
    watch: {
        citys(){
            this.getCityData();
        },
        question_data() {
            this.isFinished();
        },
        answered: {
            immediate: false,
            deep: true,
            handler(val) {
                this.isFinished();
            }
        }

    },
    computed:{

    },
    mounted() {
        
    },
    created() {
    }
}
</script>
<style type="text/css" lang='less' scoped>
.evalustion_question {
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
        background-color: #fff;
        width: 210px;
        min-height: 300px;
        position: fixed;
        bottom: 200px;
        right: 2px;
        box-shadow: 0px 0px 10px #dedede; 
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
            background-color: #2c8ffc;
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
.evalustion_question {
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