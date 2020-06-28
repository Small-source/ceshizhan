<template>
    <!--自定义资讯-->
    <div class="content_information">
        <div class="informationList">
            <div class="yuanxiao">
                <div class="title">
                    <div class="line"></div>
                    {{zixunname}}
                </div>
                <ul class="ulList">
                    <li v-for="item in dailishangzixun">
                        <img :src="item.pic" alt="" class="img">
                        <div class="right">
                            <p @click="getJump(item.id)">{{item.title}}</p>
                            <div>
                                <!--<img src="imgs/home/zixun/icon_clock.png" alt="">-->
                                <!--<span>{{item.date}}</span>-->
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "list",
        data(){
            return{
                dailishangzixun:[],
                zixunname:''
            }
        },
        methods:{
            //资讯跳转
            getJump(id){
                this.$ajax.post(this.G_uri+'/article/storeClickNum',{
                    id:id
                }).then(function (res) {
                })
                this.$router.push({
                    path:'/informationDetails',
                    query:{
                        id:id
                    }
                })
            },
            getLogo() {
                var _this = this;
                var OEMdomain = this.$OEMdomain;
                this.$ajax.post(this.G_uri + '/agent/detail', {
                    webSite: OEMdomain
                })
                    .then(function(res) {
                        _this.zixunname=res.data.data.webBaseInfo.article_name;
                    })
                    .catch(function(error) {

                    });
            },
            //后去代理商资讯
            getZixun(){
                let _this=this
                this.$ajax.post(this.G_uri+'/article/getSelfArticleALlList',{
                    webSite: this.$OEMdomain
                }).then(function (res) {
                    _this.dailishangzixun=res.data.data;
                })
            }
        },
        created(){
            this.getLogo();
            this.getZixun();
        }
    }
</script>

<style scoped lang="less">
    .content_information{
        .informationList{
            margin-bottom: 20px;
        }
        .gaokao,.yuanxiao,.zhuanye,.shengya{
            width: 1200px;
            margin: 0 auto;
            overflow: hidden;
            padding: 0 20px;
            box-sizing: border-box;
            background: #fff;
            .ulTop{
                height: 132px;
                width: 100%;
                li{
                    overflow: hidden;
                    width: 560px;
                    .img{
                        float: left;
                        width: 234px;
                        height: 132px;
                        cursor: pointer;
                    }
                    .right{
                        float: right;
                        width: 313px;
                        p{
                            font-size: 15px;
                            color:#000;
                            cursor: pointer;
                            &:hover{
                                color:#3492F9;
                            }
                        }
                        .content{
                            height: 100px;
                            font-size:12px !important;
                            padding: 0 !important;
                            overflow: hidden;
                            text-indent: 20px;
                        }
                    }
                }
            }
            .ulBottom{
                display: flex;
                justify-content: space-between;
                flex-wrap: wrap;
                li{
                    overflow: hidden;
                    width: 560px;
                    font-size: 13px;
                    color:#000;
                    line-height: 35px;
                    span{
                        font-size: 13px;
                        color:#000;
                        &:nth-child(2){
                            color:#676767;
                        }
                        cursor: pointer;
                        &:hover{
                            color:#3492F9;
                        }
                    }
                    div{
                        min-width: 80px;
                    }
                }
            }
            .ulList{
                display: flex;
                justify-content: space-between;
                flex-wrap: wrap;
                li{
                    width: 368px;
                    height: 60px;
                    margin-bottom: 30px;
                    .img{
                        float: left;
                        width: 90px;
                        height: 60px;
                    }
                    .right{
                        float: right;
                        width: 265px;
                        p{
                            font-size: 14px;
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
                                margin-left:10px;
                            }
                        }
                    }
                }
            }
        }
        .title{
            .line{
                position: absolute;
                left:-20px;
                top:30px;
                width: 4px;
                height: 23px;
                background: #117DE0;
            }
            height: 80px;
            line-height: 80px;
            position: relative;
            font-size: 20px;
            font-weight: 600;
            color: #333;
            letter-spacing: 0.1em;
        }
    }
</style>