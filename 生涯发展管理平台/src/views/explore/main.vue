<template>
    <div class="explore">
        <img src="imgs/explore/banner.png" alt="" style="margin-bottom: 20px">
        <ul class="electiveBox">
            <li v-for="(item,index) in cdata">
                <div class="left">
                    <img :src="item.src" alt="">
                </div>
                <div class="right">
                    <div class="title">
                        {{item.title}}
                    </div>
                    <p v-html="item.content">
                    </p>
                    <div class="button" @click="jump(item.link)">
                        {{item.button}}
                    </div>
                </div>
            </li>
        </ul>
        <div class="myReports">
            <div class="title">
                <img src="imgs/careerArchives/icon_biaoti.png" alt="">
                新高考资讯
            </div>
            <ul class="list">
                <li v-for="item in lists" v-if="item.pic">
                    <img :src="item.pic" alt="" class="img">
                    <div class="right">
                        <p @click="getJump(item.id)">{{item.title}}</p>
                        <div>
                            <img src="imgs/explore/icon_clock.png" alt="">
                            <span>{{item.date}}</span>
                        </div>
                    </div>
                </li>
            </ul>
        </div>
    </div>
</template>
<script>
    export default {
        name: "",
        data(){
            return{
                cdata:[
                    {
                        src:"/imgs/explore/icon_zhuanyeku2.png",
                        title:"专业库",
                        content:"本科和高职专科所有专业信息。",
                        button:"查看",
                        link:"/explore/zhuanyeku"
                    },
                    {
                        src:"/imgs/explore/icon_yuanxiaoku2.png",
                        title:"院校库",
                        content:"教育部公布的所有大学数据及其信息。",
                        button:"查看",
                        link:"/explore/yuanxiaoku"
                    },
                    {
                        src:"/imgs/explore/icon_zhiyeku2.png",
                        title:"职业库",
                        content:"涵盖职业分类大典海量数据信息。",
                        button:"查看",
                        link:"/explore/zhiyeku"
                    },
                    {
                        src:"/imgs/explore/icon_xuekepinggu.png",
                        title:"学科评估",
                        content:"全国第四轮学科评估结果。",
                        button:"查看",
                        link:"/explore/xuekepinggu/xuekesubject"
                    },
                    {
                        src:"/imgs/explore/icon_zizhaoyuanxiaoku2.png",
                        title:"强基院校库",
                        content:"尽收强基院校及信息。",
                        button:"查看",
                        link:"/explore/zizhaoyuanxiaoku"
                    },
                    {
                        src:"/imgs/explore/icon_wodeshoucang2.png",
                        title:"高考百科",
                        content:"各类隐藏知识点一网打尽",
                        button:"查看",
                        link:"/explore/gaokaobaike"
                    },
                    {
                        src:"/imgs/explore/icon_wodeshoucang2.png",
                        title:"我的收藏",
                        content:"收藏的院校专业和职业。",
                        button:"查看",
                        link:"/explore/myCollection"
                    }
                ],
                lists:[]
            }
        },
        methods:{
            //跳转页面
            jump(path){
                this.$router.push(path)
            },
            //资讯列表
            list(){
                let _this=this;
                this.$ajax.post(this.G_uri+this.ports.information.list,{
                    cateId:12
                },{
                    headers:{
                        token:window.sessionStorage.getItem('ymtxToken')
                    }
                }).then(res=>{
                    if(res.data.code==2000){
                        _this.lists=res.data.data.list;
                    }
                })
            },
            //资讯跳转详情
            getJump(id){
                this.$ajax.post(this.G_uri+this.ports.information.clickNum,{
                    id:id
                }).then(function (res) {
                })
                this.$router.push({
                    path:'/explore/informationDetail',
                    query:{
                        id:id
                    }
                })
            }

        },
        mounted(){
            this.list();
        }
    }
</script>
<style scoped lang="less">
    .explore{
        *{
            box-sizing: border-box;
            letter-spacing: 1.5px;
        }
        width: 100%;
        padding-left: 20px;
        .electiveBox{
            background: #fff;
            width: 970px;
            // height: 424px;
            height: 536px;
            padding:25px 20px 18px;
            border-radius: 5px;
            display: flex;
            justify-content: space-between;
            align-content: space-between;
            flex-wrap: wrap;
            li{
                position: relative;
                width: 455px;
                height: 112px;
                border-radius: 5px;
                border:1px solid #EBEBEB;
                padding-top: 15px;
                .left{
                    width: 100px;
                    float: left;
                    img{
                        position: relative;
                        left:30px;
                        top:16px;
                    }
                }
                .right{
                    width: 350px;
                    float: right;
                    padding-right: 25px;
                    .title{
                        margin-top: 14px;
                        line-height:30px;
                        /*font-weight: bolder;*/
                        font-size: 16px;
                        color:#333333;
                    }
                    p{
                        line-height: 20px;
                        color:#AFAFAF;
                        font-size: 12px;
                    }
                    .button{
                        background: #3D90F6;
                        border-radius: 5px;
                        text-align: center;
                        letter-spacing: 3px;
                        line-height: 30px;
                        color:#fff;
                        font-size: 14px;
                        width: 76px;
                        position: absolute;
                        right: 28px;
                        bottom: 36px;
                        cursor: pointer;
                    }
                }
            }
        }
        .myReports{
            width: 970px;
            background: #fff;
            margin-top: 20px;
            padding: 0 16px;
            img{
                margin-right: 10px;
            }
            .title{
                font-size: 17px;
                color: #348DF1;
                font-weight: bolder;
                padding-top: 24px;
                letter-spacing: 2px;
                margin-bottom: 24px;
            }
            p{
                line-height: 62px;
                color:#333333;
            }
            .list{
                padding-top: 20px;
                flex-wrap: wrap;
                overflow: hidden;
                li{
                    float: left;
                    width: 50%;
                    height: 60px;
                    margin-bottom: 20px;
                    .img{
                        float: left;
                        width: 90px;
                        height: 60px;
                        margin-right: 10px;
                    }
                    .right{
                        float: left;
                        width: 332px;
                        p{
                            font-size: 14px;
                            line-height: 18px;
                            font-weight: bolder;
                            color:#000;
                            &:hover{
                                color:#3492F9;
                            }
                            cursor: pointer;
                        }
                        div{
                            span{
                                font-size: 12px;
                                color:#676767;
                                position: relative;
                                top:2px;
                                left:-2px;
                            }
                        }
                    }
                }
            }
        }
    }
</style>

