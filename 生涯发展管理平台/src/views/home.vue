<template>
    <div class="career ">
        <div class="nav">
            <div class="navs">
                <img src="imgs/careerhome/icon_xitong.png" alt="" class="xitong">
                <span class="title">
                    生涯发展管理平台
                </span>
                <span v-if="days>=0">
                    距离高考还有
                    <img src="imgs/careerhome/icon_rili.png" alt="" class="rili">
                    <span class="number">{{days}}</span>天
                </span>
                <!-- <span class="number">{{hours}}</span>小时 -->
                <!-- <span class="number">{{minutes}}</span>分钟 -->
                <!-- <span class="number">{{seconds}}</span>秒 -->
                <div class="navRight">
                    <img :src="unreadNum>0?message[1]:message[0]" alt="" @click="Jump('/careerArchives',0,'notice')" class="tongzhiImg">
                    <span class="tongzhi" >通知</span>
                    <img :src="person" alt="" style="width:42px">
                    <span>{{uName}}</span> |
                    <a @click="Jump('/login')">退出</a>
                </div>
            </div>
        </div>
        <div class="careerBox">
            <div class="left">
                <ul class="routers">
                  <!--   <li v-for="item,index in routers" @click="Jump(item.path,index)">
                        <img :src="imgs[index]+'.png'" alt="">{{item.name}}
                    </li> -->
                    <router-link v-for="item,index in routers" tag="li" @click.native="index==0&&tiaozhuan()"  :to="index!=0?item.path:''" :class="index == 0 ? 'home' : ''"
                    >
                        <img :src="imgs[index]+'.png'" alt="" class="unactive ">
                        <img :src="imgs[index]+'.png'" alt="" class="active" v-if="index!=0">
                        {{item.name}}
                    </router-link>
                </ul>
            </div>
            <div class="right">
                <div class="rightBottom">
                    <!--<transition name="transitionRouter">-->
                        <router-view></router-view>
                    <!--</transition>-->
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "index",
        data(){
            return {
                routers:[
                    { name:'首页', path:'/careerArchives'},
                    { name:'升学途径',path:'/wayToStudy'},
                    { name:'认识自我',path:'/selfAssessment'},
                    { name:'外部探索',path:'/explore'},
                    { name:'新高考选科',path:'/elective'},
                    { name:'选择决策',path:'/policyDecision'},
                    { name:'行动计划',path:'/plan'},
                    { name:'状态咨询',path:'/consultation'},
                    { name:'成长档案',path:'/growthFile'},
                    { name:'视频课程',path:'/videoCourse'}
                ],
                imgs:[
                    "imgs/careerhome/nav/icon_shouye",
                    "imgs/careerhome/nav/icon_shengxuetujing",
                    "imgs/careerhome/nav/icon_renshiziwo",
                    "imgs/careerhome/nav/icon_waibutansuo",
                    "imgs/careerhome/nav/icon_xingaokaoxuanke",
                    "imgs/careerhome/nav/icon_xuanzejuece",
                    "imgs/careerhome/nav/icon_xingdongjihua",
                    "imgs/careerhome/nav/icon_zhuangtaizixun",
                    "imgs/careerhome/nav/icon_chengzhangdangan",
                    "imgs/careerhome/nav/icon_shipinkecheng"
                ],
                message:['imgs/careerhome/icon_tongzhi.png','imgs/careerhome/icon_youxiaoxi.png'],
                person:'imgs/careerhome/icon_boy.png',
                uName:'',
                noticeNumber:0,
                days:'',
                hours:'',
                minutes:'',
                seconds:'',
                teacherId:''
            }
        },
        methods:{
            //高考倒计时
            countDown(year){
                let time=new Date(year,5,7).getTime()/1000;
                let nowTime=new Date().getTime()/1000;
                this.days=Math.floor((time-nowTime)/3600/24)
                this.hours=Math.floor((time-nowTime)/3600%24)
                this.minutes=Math.floor((time-nowTime)/60%60)
                this.seconds=Math.floor((time-nowTime)%60)
                this.hours=this.hours<10?"0"+this.hours:this.hours
                this.minutes=this.minutes<10?"0"+this.minutes:this.minutes
                this.seconds=this.seconds<10?"0"+this.seconds:this.seconds
            },
            Jump(path){
                window.sessionStorage.clear();
                this.$router.push(path);
            },
            tiaozhuan(){
                if(this.$route.path=='/careerArchives'){
                    this.$router.push('/refresh')
                }else{
                    this.$router.push('/careerArchives');
                }

            }
        },
        computed:{
            //用户信息
            user(){
                return this.$store.state.user
            },
            unreadNum(){
                return this.$store.state.notice.unreadNum
            }
        },
        watch: {
            user(val){
                this.uName=val.name;
                this.teacherId=val.teacher_id||'';
                if(val.sex==1){
                    this.person='imgs/careerhome/icon_boy.png'
                }else{
                    this.person='imgs/careerhome/icon_girl.png'
                }
                this.countDown(val.baccll_year)
                setInterval(()=>{
                    this.countDown(val.baccll_year)
                },1000)
            },
        },
        created() {
            let token= window.sessionStorage.getItem('ymtxToken')
               ///获取个人信息
            this.$store.dispatch({
                type:'getUserInfo',
                token:token,
                vue:this
            });
            this.uName=this.user.name;
            this.teacherId=this.user.teacher_id||'';
            this.countDown(this.user.baccll_year)
            //获取未读通知
            this.$store.dispatch('getUnreadNum',token);
            //获取省市区
            this.$store.dispatch('getCitys');
        },
        mounted(){

            this.routers.forEach((item,index)=>{
                // if(this.$route.path.includes(item.path)){
                //     this.Jump(item.path,index)
                // }
            })
        }
    }
</script>

<style scoped lang="less">
    .career{
        background: #F3F4F8;
        padding-bottom: 20px;
        .nav{
            width: 100%;
            height: 74px;
            background: #fff;
            overflow: hidden;
            .navs{
                width: 1200px;
                height: 100%;
                position: relative;
                margin:0 auto;
                line-height:74px;
                font-size:13px;
                color:#333;
                .navRight{
                    position: absolute;
                    right: 0;
                    top: 0;
                    width: auto;
                    height: 100%;
                    span{
                        letter-spacing: 2px;
                    }
                    img{
                        margin-right: 10px;
                    }
                    .tongzhi{
                        margin-right:40px;
                    }
                    .tongzhiImg{
                        cursor: pointer;
                    }
                    a{
                        color:#333;
                        letter-spacing: 1.5px;
                    }
                }
                .xitong{
                    width: 36px;
                    height: auto;
                    margin-right:5px;
                    position: relative;
                    top:-1px;
                }
                .rili{
                    margin-right: 5px;
                }
                .title{
                    font-size: 17px;
                    color:#333333;
                    letter-spacing: 2px;
                    text-align: center;
                    font-weight: bolder;
                    margin-right: 38px;
                }
                .number{
                    color:red;
                    margin-right: 3px;
                    font-weight: bolder;
                }
            }
        }
        .careerBox{
            width: 1200px;
            margin: 20px auto;
            overflow: hidden;
            .left{
                width: 210px;
                height: 480px;
                margin-top: 1px;
                float: left;
                background: #fff;
                border-radius: 3px;
                box-shadow: 0 0 3px #dedede;
                position: relative;
                z-index: 3;
                .routers{
                    li{
                        height: 44px;
                        width: 100%;
                        line-height: 44px;
                        font-size: 15px;
                        text-indent: 50px;
                        color:#666;
                        /*font-weight: bolder;*/
                        letter-spacing: 2px;
                        cursor: pointer;
                        transition: 0.2s;
                        &:nth-child(1){
                            line-height: 66px;
                            height: 66px;
                            font-size: 16px;
                            border-bottom: 1px solid #F7F6FB;
                            color:#333333;
                            font-weight: normal;
                        }
                        img{
                            margin-right: 15px;
                            position: relative;
                            top:-2px;
                        }
                        .active {
                            display: none;
                        }
                        .unactive {
                            display: inline-block;
                        }
                    }
                    .router-link-active {
                        font-weight:bolder;
                        color:#3C8CEB;
                    }
                    .home {
                        background: none;
                         .active {
                            display: none;
                        }
                        .unactive {
                            display: inline-block;
                        }
                    }
                }
            }
            .right{
                width: 990px;
                float: left;
                .rightTop{
                    width: 100%;
                    height: 65px;
                    background: #fff;
                    border-radius: 3px;
                    box-shadow: 0 0 3px #dedede;
                }
            }
        }
    }
</style>

