<template>
    <div class="evaluation_question7">
        <masks v-if="flag"></masks>
        <div class="content">
            <div class="daojishi">
                计时
                <span>{{fen}}</span>
                <span>:</span>
                <span>{{miao}}</span>
            </div>
            <div class="pingmu">
                <div class="fangkuang" v-show="flag2">
                    <table>
                        <tr v-for="item in 5">
                            <td v-for="item in 5"></td>
                        </tr>
                    </table>
                </div>
                <img :src="'/imgs/careerManagement/counseling/'+imgs[number]" alt="" class="numbers" v-if="!flag2">
            </div>
        </div>
        <div class="defen" v-show="flag">
            <img src="/imgs/careerManagement/counseling/guanbi.png" @click="flag=false" alt="" class="close">
            <div class="showFen">{{fen}}分{{miao}}秒</div>
            <div class="button" @click="reset">再来一次</div>
        </div>
    </div>
</template>

<script>
    import  masks from '../../../components/mask.vue'
    export default {
        name: "evaluation_question7",
        data(){
            return {
                data:[],
                fen:0,
                miao:"00",
                t:'',
                t2:'',
                number:3,
                imgs:['number1.png','number2.png','number3.png'],
                showNumber:'',
                arr:[],
                arrChange:[],
                flag:false,
                flag2:false
            }
        },
        components:{masks},
        methods:{
            //计算数据添加span标签
            jisuan(){
                let _this=this;
                for(let i=1;i<=25;i++){
                    this.arr.push(i)
                    this.arrChange.push(i)
                }
                function randomsort(a, b) {
                    return Math.random()>.5 ? -1 : 1;
                    //用Math.random()函数生成0~1之间的随机数与0.5比较，返回-1或1
                }
                this.arr.sort(randomsort);
                $('td').each(function(i,item){
                    item.innerHTML=_this.arr[i];
                })
                this.clickNumber();
            },
            //计时
            time(){
                let times=0;
                setTimeout(()=>{
                    this.t=setInterval(()=>{
                        times++;
                        let miao=times%60;
                        this.miao=miao<10?"0"+miao:miao
                        this.fen=Math.floor(times/60);
                    },1000)
                },3000)
                this.t2=setInterval(()=>{
                    if(this.number==0){
                        clearInterval(this.t2);
                        this.flag2=true
                        return;
                    }
                    this.number--;

                },1000)
            },
            //提交答案
            submit(){
                let _this=this;
                this.$ajax.post(this.G_uri+"/coach/storeAttentionTrain",{
                    overTime:this.fen+":"+this.miao
                },{
                    headers:{
                        token: window.sessionStorage.getItem('ymtxToken')
                    }
                }).then((res)=>{
                    if(res.data.code==2000){
                        _this.flag=true;
                    }
                })
            },
            //点击数字
            clickNumber(){
                let _this=this;
                $('td').on('click',function(){
                    if($(this).html() ==_this.arrChange[0]){
                        $(this).addClass('change')
                        _this.arrChange.shift()
                    }
                    if(_this.arrChange.length==0){
                        clearInterval(_this.t)
                        _this.submit();
                    }
                })
            },
            //重新测试
            reset(){
                this.flag=false;
                this.fen=0;
                this.miao="00"
                this.t=''
                this.t2=''
                this.arr=[]
                this.arrChange=[]
                this.number=3
                this.flag2=false;
                let _this=this;
                $('td').removeClass('change')
                _this.jisuan()
                _this.time()
            }
        },
        mounted(){
            this.jisuan();
            this.time();
        }
    }
</script>
<style scoped lang="less">
    .evaluation_question7 {
        padding-left: 20px;
        height: 685px;
        * {
            box-sizing: border-box;
            letter-spacing: 2px;
        }
        .content{
            width: 100%;
            height: 685px;
            background:url(/imgs/careerManagement/counseling/bg_shuerte.png) no-repeat;
            background-color: #fff;
            &>p{
                line-height: 74px;
                text-align: center;
                font-size: 28px;
                color:#fff;
            }
            .duishu{
                width: 650px;
                margin: 0 auto;
                display: flex;
                justify-content: space-between;
                li{
                    width: 282px;
                    text-align: center;
                    padding: 15px 0;
                    color:#333333;
                    span{
                        font-size: 20px;
                        color:#EA6942;
                        font-weight: bolder;
                    }
                }
            }
            .pingmu{
                width: 835px;
                height: 380px;
                border:10px solid #A7D7FD;
                background: #086FBE;
                margin: 0 auto;
                position: relative;
                box-sizing: border-box;
                z-index: 9;
                .next{
                    width: 56px;
                    height: 52px;
                    position: absolute;
                    right: 25px;
                    bottom: 25px;
                    color:#0CFCF3;
                    cursor: pointer;
                }
                .numbers{
                    position: absolute;
                    left: 50%;
                    top: 50%;
                    margin-left: -32px;
                    margin-top: -32px;
                }
            }
            .daojishi{
                line-height: 60px;
                text-align: center;
                font-size: 20px;
                color:#FF3435;
                padding-top: 160px;
            }
            .number{
                text-align: center;
                font-size: 34px;
                color:white;
                font-weight: bolder;
                margin: 105px auto 0;
                cursor: pointer;
                position: relative;
                top:0;
                left: 0;
                z-index: 9;
            }
            .submit{
                width: 80px;
                height: 38px;
                border-radius: 5px;
                background: #3D91F4;
                color: white;
                line-height: 38px;
                text-align: center;
                margin: 25px auto;
                cursor: pointer;
            }
            .xuanzhong{
                color:#0CFCF3;
                border:1px solid #0EFBF3;
            }
            .fangkuang{
                margin: 25px auto;
                width: 300px;
                height: 300px;
                table{
                    td{
                        height: 60px;
                        border:2px solid #fff;
                        cursor: pointer;
                        text-align: center;
                        font-size: 24px;
                        font-weight: bolder;
                        color:#fff;
                        width: 20%;
                    }
                }
            }
        }
    }
    .defen{
        width: 680px;
        height: 680px;
        position: absolute;
        left: 50%;
        top: 50%;
        z-index: 99;
        margin-left: -340px;
        margin-top: -340px;
        background: url(/imgs/careerManagement/counseling/ion_defen.png) center center no-repeat;
        .button{
            position: absolute;
            width: 160px;
            height: 44px;
            bottom:173px;
            margin-left: -90px;
            line-height: 44px;
            text-align: center;
            left:50%;
            color:#E6812D;
            font-size: 15px;
            font-weight: bolder;
            cursor: pointer;
        }
        .showFen{
            width: 300px;
            text-align: center;
            margin:  330px auto;
            font-size: 60px;
            font-weight: bolder;
            color: #FDE458;
        }
        .close{
            position: absolute;
            right: 50px;
            top: 72px;
            cursor: pointer;
        }
    }
</style>
<style>
    .evaluation_question7 .hui{
        color:#9e9e9e;
    }
    .evaluation_question7 .change{
        background: #0EFBF3;
        color:#03A8A2 !important;
    }

</style>
