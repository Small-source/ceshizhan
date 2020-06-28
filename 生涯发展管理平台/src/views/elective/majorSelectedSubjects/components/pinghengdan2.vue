<template>
    <!-- 平衡单2 -->
    <div class="pinghengdan2">
        <StepBar step="3"></StepBar>
        <!-- 上一步下一步 -->
       <!--  <div class="set_target_major">
            <div class="inner">
                <div class="btn_next go_next"  @click="goNext">下一步</div>
                <div class="btn_next go_pre" @click="$router.push('/majorSelectedSubjects/pinghengdan1')">上一步</div>  
            </div>   
        </div> -->
        <div class="inner tishi_box">
            <div class="step">
                <div>
                    <p class="step_detail"><span class="tishiyu">提示：</span>请你系统分析每一个因素，根据该因素对各科目的影响进行打分，打分完成后点击“下一步”。</p>
                    <p  class="step_detail step_detail2">（例如：我对这门科目感兴趣:-2表示兴趣很低、-1表示兴趣较低、0分表示一般、1表示兴趣较高、2表示兴趣很高）</p>
                </div> 
            </div>
        </div>
        <ul class="inner inner_content">
            <li v-for="(item, index) in quanzhong" :key="index" v-if="item.influenceFactorWeight > 0" class="innerList"  :class="checked[index].idx2 == 1 ? 'active': ''">

                <div class="title_box">
                    <p class="box1">
                        <span>{{yingxiangNum[index]}}</span>
                        {{item.titles}}
                    </p>
                    <p class="box2">
                        （重要度：<span>{{resultData[item.influenceFactorWeight]}}</span>) 
                    </p>
                </div>
                <ul  class="list">
                    <li v-for="(subject,index1) in xuekes" v-if="checkProvince(subject)&&province">
                        <div>{{subject.name}}</div>
                        <div>
                            <span v-for="(weight,index) in fen" :style="{color:item[subject.Ename]==weight?'#3591F8':'',fontSize:item[subject.Ename]==weight?'14px':''}" >{{weight}}</span>
                        </div>
                        <div @click="addNum(index)">
                            <!-- &&changeYingxiang($event) -->
                            <span v-for="(weight,index) in fen" @click="item[subject.Ename] = weight"></span>
                            <img src="/imgs/elective/majorSelectedSubjects/btn_icon_blue.png" alt="" :style="{left:left[+item[subject.Ename] + 2]+'px'}">
                        </div>
                    </li>
                </ul>
            </li>
        </ul>
        <!-- 底部按钮 -->
        <div class="ft_btns">
            <div class="ft_btn go_pre"@click="$router.push('/elective/majorSelectedSubjects/pinghengdan1')">上一步</div>
            <div  @click="goNext" class="ft_btn go_next)">下一步</div>
        </div>
        <div class="inner">
            <div class="errors" v-show="isShowError">
                <div class="inner">
                    <!-- 白色弹窗 -->
                    <div class="tanchuang">
                        <div class="title">{{waring}}</div>              
                        <div class="close" @click="isShowError=false"></div>
                        <div class="queding"  @click="isShowError=false"></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<style type="text/css" lang='less' scoped>
.pinghengdan2 {
    padding-bottom: 70px;
    letter-spacing: 1.5px;
    background-color: #fff;
    // 设置目标专业
    .set_target_major {
        width: 100%;
        padding-top: 20px;
        border-top: 1px solid #dedede;
        background: #fff;
        z-index: 10;
        .inner {
            position: relative;
            padding-top: 0px;
        }
        .btn_next {
            width: 60px;
            height: 58px;
            text-align: center;
            line-height: 58px;
            font-size: 13px;
            color: #fff;
            cursor: pointer;
            position: absolute;
            position: absolute;
            top: 88px;
            right: -60px;
            background-color: #2d8ffc;
            &:active {
                box-shadow: none;
            }
        }
        .go_pre {
            top: 25px;
            right: -60px;
        }
        .go_next {
            top: 90px;
            right: -60px;
        }
        .target_major_box {
            padding: 0px 20px;
            padding-bottom: 20px;
            background: #fff;
            .target_major {
                .title_box {
                    font-size: 16px;
                    color: #333;
                    height: 60px;
                    line-height: 60px;
                    .tuijian {
                        color: #484cb0;
                        font-size: 14px;
                        font-weight: 600;
                    }
                    .title {
                        font-weight: 600;
                        color: #333;
                    }
                }
                .major_box {
                    overflow: hidden;
                    width: 1165px;
                    border-left: 1px solid #cccccc;
                    .major {
                        box-sizing: border-box;
                        float: left;
                        width: 232px;
                        height: 41px;
                        line-height: 40px;
                        padding: 0px 10px;
                        border-right: 1px solid #cccccc;
                        border-bottom: 1px solid #cccccc;
                        color: #333;
                        position: relative;
                        &:nth-child(-n+5) {
                            border-top: 1px solid #cccccc;
                            line-height: 39px;
                        }
                        .btn_remove {
                            position: absolute;
                            right: 10px;
                            top: 50%;
                            margin-top: -10px;
                            width: 20px;
                            height: 20px;
                            border-radius: 50%;
                            color: #fff;
                            font-size: 16px;
                            text-align: center;
                            cursor: pointer;
                            background: url(/imgs/elective/majorSelectedSubjects/icon_close.png) no-repeat center center;
                        }
                    }
                }
            }
        }
    }
    .inner{
        width: 970px;
        margin: 0 auto;
        .innerList{
            padding: 5px 0;
            height: 115px;
            background: #fff;
            color:black;
            margin-bottom: 14px;
            border: 1px solid #d9d9d9;
            border-radius: 2px;
            .title_box {
                overflow: hidden;
                line-height: 36px;
                .box1{
                    font-size: 15px;
                    float: left;
                    span{
                        font-size: 18px;
                        color:#3492f9;
                        font-weight: bold;
                        margin: 0 10px 0 25px;
                    }
                }
                .box2 {
                    padding-left: 15px;
                    float: left;
                    font-size: 15px;
                    span {
                        color: #2c8ffc;
                        font-size: 16px;
                        font-weight: 600;
                    }
                }
            }
            
            .list{
                display: flex;
                justify-content: space-between;
                font-size: 12px;
                padding: 0 15px;
                li{
                    color: #7A7A7A;
                    width: 136px;
                    div:nth-of-type(1){
                        text-align: center;
                        padding-left: 8px;
                        color:black;
                    }
                    div:nth-of-type(2){
                        display: flex;
                        justify-content: space-between;
                        padding: 0 3px;
                        span:nth-of-type(1){
                            padding-left: 1px;
                        }
                    }
                    div:nth-of-type(3){
                        width: 123px;
                        margin: 0 auto;
                        display: flex;
                        justify-content: space-between;
                        height: 1px;
                        border-bottom: 1px solid #BFBFBF;
                        margin-top: 10px;
                        position: relative;
                        span{
                            display: block;
                            width: 10px;
                            height: 10px;
                            border-radius: 50%;
                            background: #BFBFBF;
                            position: relative;
                            top:-4px;
                            cursor: pointer;
                        }
                        span:nth-of-type(2){
                           left:3px
                        }
                        span:nth-of-type(3){
                            left:5px
                        }
                        span:nth-of-type(4){
                            left:5px
                        }
                        span:nth-of-type(5){
                            left:5px
                        }
                        img{
                            position: absolute;
                            left:-7px;
                            top:-10px;
                        }
                    }
                }
            }
        }
        .active {
            border: 1px solid #3492f9;
        }
    }
    .inner_content {
        width: 930px;
        padding: 0px 20px;
    }
    .tishi_box {
        margin-bottom: 20px;
    }
    //提示
    .step {
        border-radius: 4px;
        margin-top: -100px;
        height: 150px;
        background-color: #fff;
        display: flex;
        align-items: center;
        box-shadow: 0px 0px 15px #edeeee;
        position: relative;
        z-index: 1;
        .tishiyu {
            color: #fd0926;
        }
        .step_detail {
            font-size: 16px;
            line-height: 32px;
            color: #333;
            font-weight: 600;
            width: 970px;
            text-align: center;
        }
        .step_detail2 {
            color: #2c8ffc;
            width: 970px;
            text-align: center;
        }
    }
    // 错误弹窗
    .errors {
        position: fixed;
        left: 0px;
        top: 0px;
        right: 0px;
        bottom: 0px;
        background: rgba(51,51,51,.25);
        z-index: 10000000000000;
        .inner {
            width: 1200px;
            margin: 0 auto;
            position: relative;
            padding-top: 0px;
        }
        .tanchuang {
            position: absolute;
            box-sizing: border-box;
            padding: 20px 50px;
            width: 306px;
            height: 251px;
            top: 200px;
            left: 50%;
            margin-left: -152px;
            background: url(/imgs/elective/majorSelectedSubjects/bg_tanchuang.png) no-repeat center center;
            .title {
                font-size: 18px;
                color: #333;
                text-align: center;
                padding-top: 100px;
                line-height: 30px;
                font-weight: 500;
            }
            .lis {
                width: 306px;
                overflow: hidden;
                line-height: 56px;
                text-align: center;
                display: flex;
                font-size: 16px;
                li {
                    flex: 1;
                    font-size: 16px;
                    line-height: 56px;
                }
                .active {
                    color: #156def;
                    border-bottom: 2px solid #156def;
                }
            }
            .close {
                width: 36px;
                height: 36px;
                text-align: center;
                line-height: 36px;
                color: #333;
                position: absolute;
                border-radius: 18px;
                right: 2px;
                top: 46px;
                z-index: 1000;
                cursor: pointer;
            }
            .queding {
                .close;
                width: 80px;
                height: 34px;
                right: 112px;
                top: 188px;
                // background-color: red;
            }
        }
    }
    // 底部上一步下一步按钮
    .ft_btns {
        padding: 30px 0px;
        height: 40px;
        position: relative;
        width: 970px;
        margin: 0 auto;
        .ft_btn {
            width: 143px;
            height: 40px;
            text-align: center;
            line-height: 40px;
            font-size: 14px;
            color: #fff;
            cursor: pointer;
            position: absolute;
            top: 20px;
            right: 20px;
            background-color: #2d8ffc;
            // background: url(/imgs/xingaokao/xuankejuece/common/icon_next.png);
            box-shadow: 0px 4px 6px #2a76cc;
            border-radius: 4px;
            &:active {
                box-shadow: none;
            }
        }
        .go_pre {
            right: 200px;
        }
        .go_next {
            .ft_btn;
        }
    }
}
</style>
<script>
import StepBar from '../common/stepBar.vue';
export default {
    components: { StepBar },
    // props: [ 'quanzhong','mubiaozhuanye' ],
     props: [ 'quanzhong', 'checked' ,'step'],
    data() {
        return {
            Gmubiaozhuanye_1: JSON.parse(window.sessionStorage.getItem('Gmubiaozhuanye_1')),
            Gmubiaozhuanye_2: JSON.parse(window.sessionStorage.getItem('Gmubiaozhuanye_2')),
            fen:[-2,-1,0,1,2],
            left:[-7,28,56,85,113],
            xuekes: [
                { name:'物理', Ename:'subjectPhysics' },
                { name:'化学', Ename:'subjectChemistry' },
                { name:'生物', Ename:'subjectBiological' },
                { name:'思想政治', Ename:'subjectIdeologicalPolitics' },
                { name:'历史', Ename:'subjectHistory' },
                { name:'地理', Ename:'subjectGeography' },
                { name:'技术', Ename:'subjectTechnology' }
            ],
            // 当前选科进行状态
            state: 1,
            page: '',
            waring:'',
            isShowError: false,
            province: '',
            subjectName: [],
            yingxiang:0,
            numArr: [],
            numed: 0,
            yingxiangNum: [],
            yingxiangNumCount: 0,
            resultData:["'没有影响'","'较为不重要'","'一般'","'重要'","'非常重要'"],
        }
    },
    computed: {
    },
    methods: {
        goNext() {
            var token = window.sessionStorage.getItem('ymtxToken');
            var balance = this.quanzhong;
            var target = JSON.parse(window.sessionStorage.getItem("Gmubiaozhuanye"));
            var subjectName = JSON.parse(window.sessionStorage.getItem("subjectSets2"));
            var _this = this;
            this.$ajax
                .post(this.G_uri + '/chooseSubject/storeBalanceSelectionDecision', {
                    source: 3,
                    balance: balance,
                    target: target,
                    subjectName: subjectName,
                },{
                    headers:{
                        token: token
                    }
                })
                // 监听数据返回
                .then(function(res) {
                    if(res.data.code == 2000) {
                        _this.$router.push('/elective/majorSelectedSubjects/xuankezhiyuan');
                    }else if(res.data.code == 1016) {
                        _this.$router.push('/login');
                    }else if(res.data.code == 2525) {
                        _this.$router.push('/elective/majorSelectedSubjects/xuankezhiyuan');
                    }else {
                        _this.isShowError = true;
                        _this.waring = res.data.msg;
                    }
                   
                })
                .catch(function(error) {
                    console.log(error);
                })
        },
        getData() {
            var token = window.sessionStorage.getItem('ymtxToken');
            var _this = this;
            this.$ajax
                .post(this.G_uri + '/login/getUserInfo',{},{
                    headers:{
                        token: token
                    }
                })
                // 监听数据返回
                .then(function(res) {
                    console.log(res)
                    if(res.data.code == 2000) {
                        _this.province = res.data.data.province;
                        _this.subjectName = JSON.parse(window.sessionStorage.getItem("subjectSets2"));
                    }else if(res.data.code == 1016) {
                        _this.$router.push('/login');
                    }else {
                        // alert(res.msg)
                        console.log(res.msg);
                    }

                })
                .catch(function(error) {
                    console.log(error);
                    // alert('服务器繁忙')
                })
        },
        checkProvince(subject) {
            if(subject.name == '技术') {
                if(this.province != '浙江') {
                    return false;
                }else {
                    return !this.subjectName.some(function(named) {
                        return subject.name == named;
                    })
                }
                                
            }else if(subject.name == '物理') {
                let bol = false;
                let province = new RegExp(this.province);
                // 北京、海南、山东、上海、天津、浙江
                // 河北、辽宁、江苏、福建、湖北、湖南、广东、重庆
                if(province.test('北京、海南、山东、上海、天津、浙江')) {
                    bol = !this.subjectName.some(function(named) {
                        return named == '物理';
                    })
                }else {
                    bol = !this.subjectName.some(function(named) {
                        return named == '物理' || named == '历史';
                    })
                    
                }
                return bol;
            }else if(subject.name == '历史') {
                let bol1 = false;
                let province1 = new RegExp(this.province);
                if(province1.test('北京、海南、山东、上海、天津、浙江')) {
                    bol1 = !this.subjectName.some(function(named) {
                        return named == '历史';
                    })
                }else {
                    bol1 = !this.subjectName.some(function(named) {
                        return named == '物理' || named == '历史';
                    })
                   
                }
                return bol1;
            }else {
                return !this.subjectName.some(function(named) {
                                return subject.name == named;
                            })
            }
        },
        changeYingxiang(e){
            if(!e.target.parentNode.className){
                this.yingxiang=this.yingxiang+1;
                e.target.parentNode.className="xuanjie"
            }
        },
        addNum(idx) {
            this.checked[idx].idx2 = 1;
            let numBlearn = this.numArr.some((item, index) => {
                return item == idx;
            })
            if(!numBlearn) {
               this.numed ++;
               this.numArr.push(idx);
            }   
        },
        quanzhongIdx() {
            let idx = 1;
            this.quanzhong.forEach((item, index) => {
                if(item.influenceFactorWeight > 0) {
                    if(idx < 10) {
                        this.yingxiangNum.push('0' + idx);
                    }else {
                        this.yingxiangNum.push(idx);
                    }
                    idx ++;
                    this.yingxiangNumCount ++;
                }else {
                    if(idx < 10) {
                        this.yingxiangNum.push('0' + idx);
                    }else {
                        this.yingxiangNum.push('0' + idx);
                    }
                }
            })
        }
    },
    created() {
        this.getData();
        this.quanzhongIdx(); 
        window.scrollTo(0, 0);
    },
    mounted() {
        if(window.sessionStorage.tuance=='3'){
            $('.set_target_major').css({top:'80px'})
        }else{
            $('.set_target_major').css({top:''})
        }
    }
}
</script>