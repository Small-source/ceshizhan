<template>
    <div class="evaluation_question7">
        <div class="content">
            <p>注意力测评</p>
            <ul class="duishu">
                <li>
                    一共找出 <br>
                    <span>{{total}}</span>对
                </li>
                <li>
                    本组找出 <br>
                    <span>{{part}}</span>对
                </li>
            </ul>
            <div class="daojishi">
                倒计时
                <span>0</span>
                <span>{{fen}}</span>
                <span>:</span>
                <span>{{miao}}</span>
            </div>
            <div class="pingmu">
                <div class="number" v-html="showNumber">
                </div>
                <div class="next" v-if="flag" @click="add">
                    <img src="/imgs/careerManagement/decompose/icon_xiayizu.png" alt=""> <br>
                    <span @click="add">下一组</span>
                </div>
                <div class="fangkuang">
                </div>
            </div>
            <div class="submit" v-if="!flag" @click="submit">提交</div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "evaluation_question7",
        data(){
          return {
              data:[],
              number:0,
              flag:true,
              fen:5,
              miao:"00",
              t:'',
              total:0,
              part:0,
              showNumber:'',
              arrBian:[] //判断边缘
          }
        },
        methods:{
            //获取数据
            getData(){
                this.$ajax.post(this.G_uri+"/assessQuestion/getRandomNumberFor10",{
                },{
                    headers:{
                        token: window.sessionStorage.getItem('ymtxToken')
                    }
                }).then((res)=>{
                    if(res.data.code==2000){
                        this.data=res.data.data;
                        this.jisuan(this.data[this.number])
                    }
                })
            },
            //返回数据添加span标签
            jisuan(string){
                let res=string.replace(/(\d)/g,'<span style="width:23px;display: inline-block">$1</span>');
                this.showNumber=res;
            },
            //切换下一组
            add(){
                if(this.number==200){
                    this.flag=false;
                    return
                }
                this.number++;
                this.part=0;
                this.arrBian=[];
                this.jisuan(this.data[this.number])
            },
            //倒计时
            time(){
                let times=300;
                this.t=setInterval(()=>{
                    times--;
                    let miao=times%60;
                    this.miao=miao<10?"0"+miao:miao
                    this.fen=Math.floor(times/60);
                    if(times==0){
                        clearInterval(this.t)
                        this.flag=false;
                    }
                },1000)
            },
            //数字hover显示效果
            numbersHover(){
                let _this=this;
                $('.number span').on({
                    "mouseenter":function (e) {
                        let index=$(this).index();
                        if(_this.arrBian.indexOf(index)!=-1&&_this.arrBian.indexOf(index+1)!=-1){
                            $('.fangkuang').hide();
                            return
                        }
                        if(_this.arrBian.indexOf(index)!=-1&&_this.arrBian.indexOf(index-1)!=-1){
                            $('.fangkuang').hide();
                            return
                        }
                        if(e.offsetX<12){
                            index--;
                        }else{
                            index=$(this).index();
                        }
                        if(_this.arrBian.indexOf(index)==-1&&_this.arrBian.indexOf(index+1)!=-1){
                            index--;
                        }
                        if(_this.arrBian.indexOf(index)!=-1&&_this.arrBian.indexOf(index+1)==-1){
                            index++;
                        }
                        if(index==$(".number span").length-1){
                            index--;
                        }
                        if(index<0){
                            index=0
                        }
                        $('.fangkuang').css('left',14+23*index+"px").show();
                    },
                    "mousemove":function (e) {
                        let index=$(this).index();
                        if(_this.arrBian.indexOf(index)!=-1&&_this.arrBian.indexOf(index+1)!=-1){
                            $('.fangkuang').hide();
                            return
                        }
                        if(_this.arrBian.indexOf(index)!=-1&&_this.arrBian.indexOf(index-1)!=-1){
                            $('.fangkuang').hide();
                            return
                        }
                        if(e.offsetX<12){
                            index--;
                        }else{
                            index=$(this).index();
                        }
                        if(_this.arrBian.indexOf(index)==-1&&_this.arrBian.indexOf(index+1)!=-1){
                            index--;
                        }
                        if(_this.arrBian.indexOf(index)!=-1&&_this.arrBian.indexOf(index+1)==-1){
                            index++;
                        }
                        if(index==$(".number span").length-1){
                            index--;
                        }
                        if(index<0){
                            index=0
                        }
                        $('.fangkuang').css('left',14+23*index+"px").show();
                    },
                    "click":function (e) {
                        let index=$(this).index();
                        if(e.offsetX<12){
                            index--;
                        }else{
                            index=$(this).index();
                        }
                        if(index==$(".number span").length-1){
                            index--;
                        }
                        if(index<0){
                            index=0
                        }
                        let text1= $('.number span').eq(index).text()
                        let text2= $('.number span').eq(index+1).text()
                        if(Number(text1)+Number(text2)==10){
                            if($('.number span').eq(index).hasClass('hui')){
                                return;
                            }
                            $('.number span').eq(index).addClass('hui')
                            $('.number span').eq(index+1).addClass('hui')
                            _this.arrBian.push(index,index+1);
                            _this.part++;
                            _this.total++;
                        }
                    }
                })
                $('.number').on('mouseleave',function () {
                        $('.fangkuang').hide();
                })
            },
            //提交答案
            submit(){
                this.$ajax.post(this.G_uri+"/assessQuestion/storeResult",{
                    assessType:7,
                    answer:this.total
                },{
                    headers:{
                        token: window.sessionStorage.getItem('ymtxToken')
                    }
                }).then((res)=>{
                    if(res.data.code==2000){
                        this.$router.push('/consultation/main')
                        let {href}=this.$router.resolve({
                            path: '/consultation/diagnosis/evaluationReport7',
                        })
                        window.open(href, '_blank');
                    }
                })
            }
        },
        mounted(){
            this.getData();
            this.time();
        },
        watch:{
          showNumber(){
              let _this=this;
              this.$nextTick(function () {
                  _this.numbersHover();
              })

          }
        },
        created(){

        }
    }
</script>

<style scoped lang="less">
    .evaluation_question7 {
        // padding-left: 20px;
        height: 685px;
        * {
            box-sizing: border-box;
            letter-spacing: 2px;
        }
        .content{
            width: 100%;
            height: 685px;
            background:url(/imgs/careerManagement/decompose/ques7_banner.png) no-repeat;
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
                width: 860px;
                height: 380px;
                border:10px solid #A7D7FD;
                background: #086FBE;
                margin: 0 auto;
                position: relative;
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
            }
            .daojishi{
                line-height: 60px;
                text-align: center;
                font-size: 20px;
                color:#FF3435;
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
                position: absolute;
                width: 50px;
                height:37px;
                border:1px solid #0EFBF3;
                top:110px;
                left:14px;
                z-index: 0;
                display: none;
            }
        }
    }
</style>
<style>
    .evaluation_question7 .hui{
        color:#9e9e9e;
    }

</style>
