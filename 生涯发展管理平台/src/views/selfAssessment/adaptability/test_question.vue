<template>
    <!-- 生涯适应力测评 -->
    <div class="test_question" v-if="question_data">
    	<div class="question" v-for="(item, index) in question_data" :key="index" :id="'question' + item.serialNumber">
            <p class="title">{{item.serialNumber}}、{{item.topic}}</p>
            <div class="option_box">
                <el-radio-group v-model="answered[index].answer">
                    <el-radio :label="option" v-for="(option,index) in item.option">{{option}}</el-radio>
                </el-radio-group>
            </div>
        </div>
        <div class="btn_box">
            <div class="box">
                <div class="btn_next btn" @click="$parent.goStoreResult()"  v-if="isFinish">提交</div>
                <div class="btn_next btn unactive" v-else>提交</div>

            </div>
        </div>
        <div class="fixd_box" :class="isShowSlide ? 'slide': 'unslide'">
            <p class="title">答题情况</p>
            <ul>
                <li v-for="(item, index) in answered" :key="index" :class="item.answer == '' ? 'unfinish' : 'finish'" @click="scrollToView(item.question_num)">{{item.question_num}}</li>
            </ul>
            <div class="btn" @click="isShowSlide = !isShowSlide" :class="isShowSlide ? 'slide': 'unslide'">
            </div>
        </div>
    </div>
</template>
<script>
export default {
    components: { },
    props: [ 'question_data','answered' ],
    data() {
        return {
            // 是否隐藏右边答题情况
            isShowSlide: true,
            isFinish: false,
            header: ['基本信息', '身体条件','家庭条件','个人能力','个人意愿'],
            question: [],



        }
    },
    methods: {

        changeQuestion(num) {
            if(this.isFinish === false && num > 0) {
                return;
            }
            window.scroll(0,0);
            this.$parent.changeQuestion(num);
        },
        isFinished() {
            let bol = true;
            this.question_data.forEach((item, index) => {
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
        box-shadow: 0px 0px 10px #dedede;
        background-color: #fff;
        z-index: 5;
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
