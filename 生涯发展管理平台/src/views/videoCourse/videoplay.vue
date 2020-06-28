<template>
    <div class="videoplay">
        <div class="inner">
            <div class="videoTitle">
                {{$route.query.title}}
            </div>
            <div class="content">
                <div class="video">
                    <!-- :useH5Prism="useH5Prism" :useFlashPrism="useFlashPrism" -->
                    <aliplayer v-if="playauth" :vid="vid" :playauth="playauth" :encryptType="$route.query.encryptType" ></aliplayer>
                </div>
                <div class="contentRight" v-if="isVideoCourse">
                    <div class="first">
                        <div class="titles">
                            {{$route.query.title}}
                        </div>
                        <p v-if="$route.query.introduction">
                            [简介]{{$route.query.introduction}}
                        </p>
                        <a :href="$route.query.ppt" download title="下载课件"  v-if="$route.query.ppt" class="downloads" target="_blank">
                            <img src="/imgs/video/xiazai1.png" alt="">
                            课件下载
                        </a>
                    </div>
                    <!-- <p class="title">生涯教辅资源</p> -->
                    <ul class="videoList">
                        <li v-for="item in videoList">
                            <span></span>
                            <a @click="getNewVideo(item,'videoCourse')" :style="{color:(item.id==$route.query.id)?'#358DEF':''}">{{item.title}}</a>
                        </li>
                    </ul>
                </div>
                <div class="contentRight" v-if="isShowNavJiaofu">
                    <div class="first">
                        <div class="titles">
                            {{$route.query.title}}
                        </div>
                        <p v-if="$route.query.introduction">
                            [简介]{{$route.query.introduction}}
                        </p>
                        <a :href="$route.query.ppt" download title="下载课件"  v-if="$route.query.ppt" class="downloads" target="_blank">
                            <img src="/imgs/video/xiazai1.png" alt="">
                            课件下载
                        </a>
                    </div>
                    <p class="title">生涯教辅资源</p>
                    <ul class="videoList">
                        <li v-for="item in videoList">
                            <span></span>
                            <a @click="getNewVideo(item,'jiaofuziyuan')" :style="{color:(item.id==$route.query.id)?'#358DEF':''}">{{item.title}}</a>
                        </li>
                    </ul>
                </div>
                <div class="contentRight" v-if="isKecheng">
                    <div class="first">
                        <div class="titles">
                            {{$route.query.title}}
                        </div>
                        <p v-if="$route.query.introduction">
                            [简介]{{$route.query.introduction}}
                        </p>
                        <a :href="$route.query.ppt" download title="下载课件"  v-if="$route.query.ppt" class="downloads" target="_blank">
                            <img src="/imgs/video/xiazai1.png" alt="">
                            课件下载
                        </a>
                    </div>
                    <p class="title">{{kecheng}}</p>
                    <ul class="videoList" id="videoKecheng">
                        <li v-for="item in videoList">
                            <span></span>
                            <a class="tabs">{{item.name}}
                                <img src="/imgs/video/shouqi.png" alt="">
                            </a>
                            <ul class="videoList">
                                <li v-for="items in item.list">
                                    <span></span>
                                    <a @click="getNewVideo(items)" :style="{color:(items.id==$route.query.id)?'#358DEF':''}">{{items.title}}</a>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </div>
                <div class="contentRight" v-if="isZongpingfushi">
                    <div class="first">
                        <div class="titles">
                            {{$route.query.title}}
                        </div>
                        <p v-if="$route.query.introduction">
                            [简介]{{$route.query.introduction}}
                        </p>
                        <a :href="$route.query.ppt" download title="下载课件"  v-if="$route.query.ppt" class="downloads" target="_blank">
                            <img src="/imgs/video/xiazai1.png" alt="">
                            课件下载
                        </a>
                    </div>
                    <p class="title">自招综评复试</p>
                    <ul class="videoList">
                        <li v-for="item in videoList">
                            <span></span>
                            <a @click="getNewVideo(item)" :style="{color:(item.id==$route.query.id)?'#358DEF':''}">{{item.title}}</a>
                        </li>
                    </ul>
                </div>
            </div>
            <!--<div class="footer">-->
                <!--<p class="title">课程概述</p>-->
                <!--<p class="introduction">{{$route.query.introduction}}</p>-->
            <!--</div>-->
        </div>  
    </div>
</template>
<style type="text/css" lang='less' scoped>
    .videoplay {
        padding-bottom: 50px;
        background-color: #1B1F22;
        .inner {
            width: 1200px;
            margin: 0 auto;
            overflow: hidden;
        }
        .videoTitle{
            line-height: 70px;
            font-size: 22px;
            color:white;
        }
        .content {
            margin-bottom: 30px;
            overflow: hidden;
        }
        .video {
            float: left;
            width: 900px;
            height: 590px;
            margin-right: 20px;
        }
        .contentRight {
            box-sizing: border-box;
            padding: 0 0 0 30px;
            width: 280px;
            height: 590px;
            float: left;
            background-color: #333;
            position: relative;
            overflow: hidden;
            .first{
                padding-top: 30px;
                padding-right: 30px;
                .titles{
                    color:#fff;
                }
                p{
                    font-size: 13px;
                    color:#B2B2B2;
                    line-height: 18px;
                }
            }
            .title {
                height: 50px;
                line-height: 50px;
                font-size: 18px;
                color: #3C95FB;
                font-weight: bolder;
            }
            #videoKecheng{
                width: 100%;
                max-height: 360px;
                overflow-y: auto;
                li{
                    padding-left: 20px;
                    font-size: 14px;
                }
                span{
                    left: 5px;
                }
                .videoList{
                    max-height: 5000px;
                    display: none;
                }
                .tabs{
                    margin-right: 5px;
                }
            }
            .videoList{
                position: relative;
                width: 100%;
                max-height: 360px;
                overflow-y: auto;
                li{
                    padding-right: 30px;
                    line-height: 28px;
                    font-size: 12px;
                    color: white;
                    padding-left: 30px;
                    position: relative;
                    span{
                        display: inline-block;
                        width: 3px;
                        height: 3px;
                        border-radius: 50%;
                        background: #fff;
                        margin-right:10px;
                        position: absolute;
                        left: 15px;
                        top: 12px;
                    }
                    .download{
                        position: absolute;
                        right: 20px;
                        top: -2px;
                    }
                }
            }
            .videoList::-webkit-scrollbar{
                width: 4px;
            }
            .videoList::-webkit-scrollbar-thumb{
                width: 4px;
                height: 3px;
                background: #999999;
            }
            .downloads{
                display: block;
                width: 88px;
                height: 28px;
                box-sizing: border-box;
                border:1px solid #EBEBEB;
                border-radius: 5px;
                cursor: pointer;
                font-size: 12px;
                color:#fff;
                img{
                    position: relative;
                    left:8px;
                    top:-1px;
                    margin-right: 10px;
                }
            }
            .introduction {
                height: 42px;
                line-height: 42px;
                font-size: 14px;
                color: #348df0;
                // font-weight: 500;
                margin-bottom: 27px;
                padding-left: 30px;
                background: url(/imgs/gerenzhongxin/videoplay/icon_bofang.png) no-repeat 0px center;
            }
          
            .button {
                width: 104px;
                height: 30px;
                color: #fff;
                // text-align: center;
                line-height: 30px;

                cursor: pointer;
                border: 1px solid #fff;
                a {
                    box-sizing: border-box;
                    display: inline-block;
                    color: #fff;
                    width: 100%;
                    height: 100%;
                    font-size: 14px;
                    padding-left: 30px;
                    background: url(/imgs/gerenzhongxin/videoplay/icon_xiazai.png) no-repeat 5px center;
                }
            }
        }
        .footer {
            padding: 0px 20px;
            background-color: #fff;
            .title {
                border-top: 3px solid #3492f9;
                font-size: 16px;
                color: #333;
                width: 120px;
                line-height: 34px;
                text-align: center;
                font-weight: 500;
            }
            .introduction {
                padding: 7px 0px;
                min-height: 100px;
                font-size: 12px;
                line-height: 22px;
            }

        }
    }
</style>
<script>
import aliplayer from './aliplayer'
export default {
    components: { aliplayer },
    data() {
        return { 
            cdata: [],
            playauth: '',
            vid: '',
            isShowNav: true,
            isShowNavJiaofu: false,
            url: '',
            videoList:[],
            scrollIndex:0,
            isKecheng: false,
            kecheng:"",
            kechengIndex:'',
            isZongpingfushi:false,
            // 是否来自生涯管理-视频课程
            isVideoCourse: false
        }
    },
    methods: {
        dataUpdate(id) {
            var token = window.sessionStorage.getItem('ymtxToken');
            var _this = this;
            this.$ajax
            // /video/videoDetail
                .post(this.G_uri + this.url, {
                    id: id
                }, {
                    headers: {
                        token: token
                    }
                })
                // 监听数据返回
                .then(function (res) {
                    if (res.data.code == 2000) {
                        _this.cdata = res.data.data;
                        _this.playauth = res.data.data.playAuth;
                        _this.vid = res.data.data.videoId;
                        _this.getListByLevelId(res.data.data.cateId);
                    } else if (res.data.code == 1016) {
                        // alert(res.msg)
                        _this.$router.push('/login')
                    } else if (res.data.code == 3002) {
                        _this.$router.push('/onlineClassroom')
                    }
                })
                .catch(function (error) {
                    console.log(error)
                })
        },

        goBack() {
            this.$router.push({
                path: '/gerenzhongxin',
                name: 'gerenzhongxin',
                query: {
                    component: 'Mycourses'
                }
            })
        },
        // 生涯管理系统 - 视频课程 - 根据分类id获取视频列表  -- 视频详情（videoDetail  参数 主键id）
        getListByLevelId(id) {
            var _this = this;
            var token = window.sessionStorage.getItem('ymtxToken');
            this.$ajax.post(this.G_uri + '/careerArchives/getListByLevelId', {
                cateId: id
            }, {
                headers: {
                    token: token
                }
            })
            .then(function (res) {
                if (res.data.code == 2000) {
                    res.data.data.forEach((item,index)=>{
                        if(item.id==_this.$route.query.id){
                            _this.scrollIndex=index;
                        }
                    })
                    _this.videoList = res.data.data;
                } else if (res.data.code == 1016) {
                    _this.$router.push('/login');
                }
            })
            .catch(function (error) {
                console.log(error);
            });
        },
        // 生涯教辅资源视频列表
        getVideoListJiaofu(id) {
            var _this = this;
            var token = window.sessionStorage.getItem('ymtxToken');
            this.$ajax.post(this.G_uri + '/careerVideo/getNewVideoList', {
                cateId: id
            }, {
                headers: {
                    token: token
                }
            })
                .then(function (res) {
                    if (res.data.code == 2000) {
                        res.data.data.forEach((item,index)=>{
                            if(item.id==_this.$route.query.id){
                                _this.scrollIndex=index;
                            }
                        })
                        _this.videoList = res.data.data;
                    } else if (res.data.code == 1016) {
                        _this.$router.push('/login');
                    }
                })
                .catch(function (error) {
                    console.log(error);
                });
        },
        // 个人中心课程视频列表
        getVideoListKecheng(){
            var token = window.sessionStorage.getItem('ymtxToken');
            var _this = this;
            this.$ajax
                .post(this.G_uri + '/video/getViewList',{},{
                    headers:{
                        token: token
                    }
                })
                // 监听数据返回
                .then(function(res) {
                    if(res.data.code == 2000) {
                        console.log(res.data);
                        let bishi=res.data.data[0];
                        let mianshi=res.data.data[1];
                        bishi.forEach((item,number)=>{
                            item.list.forEach((item,index)=>{
                                   if(item.id==_this.$route.query.id){
                                       _this.kecheng='自招笔试'
                                       _this.scrollIndex=index;
                                       _this.kechengIndex=number
                                       _this.videoList=bishi
                                   }
                            })
                        })
                        mianshi.forEach((item,number)=>{
                            item.list.forEach((item,index)=>{
                                if(item.id==_this.$route.query.id){
                                    _this.kecheng='自招面试'
                                    _this.scrollIndex=index;
                                    _this.kechengIndex=number
                                    _this.videoList=mianshi
                                }
                            })
                        })
                        // _this.subjects = res.data.data[0];
                        // _this.subjectsmianshi = res.data.data[1];
                        // _this.rightList = res.data.data[0][0].list;
                    }else if(res.data.code == 2026) {
                        _this.$router.push('/perfectInformation');
                    }else{
                        console.log(res.msg);
                    }
                })
                .catch(function(error) {
                    console.log(error);
                })
        },
        //自招综评复试
        getVideoListZongping(){
            var _this = this;
            this.$ajax.post(this.G_uri + '/agent/getSelfInterviewList', {
            })
                .then(function(res) {
                    if(res.data.code == 2000) {
                        _this.videoList = res.data.data.slice(0,8);
                    }else if(res.data.code == 1016) {
                        _this.$router.push('/login');
                    }
                })
                .catch(function(error) {
                    console.log(error);
                });
        },
        //播放新视频
        getNewVideo(item,type) {
            this.playauth = "";
            this.$router.push({
                path: '/videoCourse/videoplay',
                query: {
                    id: item.id,
                    title: item.title,
                    introduction: item.introduction,
                    ppt: item.ppt,
                    // 视频封面
                    cover: item.coverUrl,
                    from: type
                }
            })
            window.scroll(0, 0);
            if(this.$route.query.from == 'homejiaofu' || this.$route.query.from == 'jiaofuziyuan') {
                this.url = '/agent/videoCareerDetail';
                this.isShowNavJiaofu = true;
                this.getVideoListJiaofu(47,'jiaofuziyuan');
            }else if(this.$route.query.from == 'shengxueguihua') {
                this.url = '/competitionVideo/videoDetail';
            }else if(this.$route.query.from == 'videoCourse') {
                this.url = '/careerArchives/videoDetail';
            }else {
                this.url = '/agent/videoDetail';
                this.isShowNavJiaofu = false;
            }
            if(this.$route.query.from == 'kecheng'){
                this.isKecheng=true;
                this.getVideoListKecheng();
            }
            if(this.$route.query.from == 'zongpingfushi'){
                this.isZongpingfushi=true;
                this.getVideoListZongping();
            }
            if(this.$route.query.from == 'videoCourse'){
                this.isVideoCourse=true;
                // this.getListByLevelId();
            }
            var id= this.$route.query.id
            this.dataUpdate(id);
            if(window.sessionStorage.getItem('ymtxToken')) {
                this.isShowNav = true;
            }else {
                this.isShowNav = false;
            }
        },
        getHeight() {
            let Height = $(window).height();
            let pageHeight = $('.videoplay').innerHeight();
            if(pageHeight < Height) {
                $('.videoplay').innerHeight(Height);
            }
        }
    },
    watch:{
        'videoList'(){
            let _this=this;
            this.$nextTick(function () {
                if(_this.isShowNavJiaofu){
                    let height= $('.videoList li').eq(_this.scrollIndex)[0].offsetTop;
                    $('.videoList').scrollTop(height)
                }
               if(_this.isKecheng){
                   $('#videoKecheng .videoList').hide()
                   $('#videoKecheng .videoList').eq(_this.kechengIndex).show().siblings('img').attr('src','/imgs/video/zhankai.png');
                   $('#videoKecheng .videoList').eq(_this.kechengIndex)[0].scrollTop=$('#videoKecheng .videoList').eq(_this.kechengIndex).children().eq(_this.scrollIndex)[0].offsetTop
                   $('#videoKecheng .tabs').click(function () {
                       if($(this).siblings('.videoList')[0].style.display=='none'){
                           $(this).siblings('.videoList').show().siblings('.tabs').find('img').attr('src','/imgs/video/zhankai.png')
                       }else{
                           $(this).siblings('.videoList').hide().siblings('.tabs').find('img').attr('src','/imgs/video/shouqi.png')
                       }
                   })
               }
            })

        }
    },
    created() {

    },
    mounted() {
        window.scroll(0, 0);
        if(this.$route.query.from == 'homejiaofu' || this.$route.query.from == 'jiaofuziyuan') {
            this.url = '/agent/videoCareerDetail';
            this.isShowNavJiaofu = true;
            this.getVideoListJiaofu(47,'jiaofuziyuan');
        }else if(this.$route.query.from == 'shengxueguihua') {
            this.url = '/competitionVideo/videoDetail';
        }else if(this.$route.query.from == 'videoCourse') {
            this.url = '/careerArchives/videoDetail';
        }else {
            this.url = '/agent/videoDetail';
            this.isShowNavJiaofu = false;
        }
        if(this.$route.query.from == 'kecheng'){
            this.isKecheng=true;
            this.getVideoListKecheng();
        }
        if(this.$route.query.from == 'zongpingfushi'){
            this.isZongpingfushi=true;
            this.getVideoListZongping();
        }
        if(this.$route.query.from == 'videoCourse'){
            this.isVideoCourse=true;
            // this.getListByLevelId();
        }
        var id= this.$route.query.id;
        this.dataUpdate(id);
        if(window.sessionStorage.getItem('ymtxToken')) {
            this.isShowNav = true;
        }else {
            this.isShowNav = false;
        }
        this.getHeight();
    }
}
</script>










