<template>
    <div class="MyMessage" v-if="data">
        <p class="personal">个人信息</p>
        <div class="user_box">
            <div :class="data.sex == 1 ? 'user_img_boy' : 'user_img_girl'"></div>
            <p class="user">{{user}}</p>
        </div>
        <div class="neirong">
            <p class="left">姓&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;名 :</p>
            <p class="right">{{data.name}}</p>
        </div>
        <div class="neirong">
            <p class="left">性&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;别 :</p>
            <p class="right">{{sex}}</p>
        </div>
        <div class="neirong">
            <p class="left">所在省份:</p>
            <p class="right">{{data.province}} </p>
        </div>
        <div class="neirong">
            <p class="left">所在城市 :</p>
            <p class="right">{{data.city}} {{data.area}} </p>
        </div>
        <div class="neirong">
            <p class="left">就读中学 :</p>
            <p class="right">{{data.school_name}}</p>
        </div>
        <div class="neirong">
            <p class="left">年&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;级 :</p>
            <p class="right">{{nianji}}</p>
        </div>
        <div class="neirong" v-if="data.school_class">
            <p class="left">班&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;级 :</p>
            <p class="right">{{data.school_class}}</p>
        </div>
        <div class="neirong" v-if="data.phone">
            <p class="left">手&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;机 :</p>
            <p class="right">{{data.phone}}</p>
        </div>
    </div>
</template>
<style type="text/css" lang='less' scoped>
.MyMessage {
    padding: 0px 46px;
    box-sizing: border-box;
    min-height: 628px;
    background-color: #fff;
    .personal {
        line-height: 50px;
        color: #333;
        font-size: 16px;
        float: left;
    }
    .user_box {
        width: 200px;
        height: 190px;
        padding-top: 10px;
        margin: 0 auto;
        .user_img_boy {
            height: 140px;
            background: url(/imgs/gerenzhongxin/icon_boy.png) no-repeat center center;
        }
        .user_img_girl {
            height: 140px;
            background: url(/imgs/gerenzhongxin/icon_girl.png) no-repeat center center;
        }
        .user {
            line-height: 50px;
            text-align: center;
            font-size: 16px;
            color: #333;
        }
    }
    .neirong {
        font-size: 14px;
        line-height: 48px;
        height: 48px;
        border: 1px solid #f2f2f2;
        background-color: #fff;
        margin-bottom: 12px;
        color: #333;
        font-weight: 500;
        .left {
            padding-left: 12px;
            float: left;
            width: 85px;
            text-align: right;
        }
        .right {
            float: left;
            padding-left: 16px;
        }
    }

}
</style>
<script>
export default {
    data() {
        return {
            data: null,
            user: window.sessionStorage.getItem('name'),
            nianji:'',
            year:'',
            nianjis:['高三','高二','高一','初三','初二','初一']
        }
    },
    computed: {
        sex() {
            if(this.data.sex == 1) {
                return '男';
            }else if(this.data.sex == 2) {
                return '女';
            }
        }
    },
    methods: {
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
                        _this.data = res.data.data;
                        if(_this.data.baccll_year=='成年人'){
                            _this.nianji='成年人'
                        }else{
                            let number=Number(_this.data.baccll_year)
                            _this.nianji=_this.nianjis[number-Number(_this.year)]||'成年人'
                        }
                    }else if(res.data.code == 2026) {
                        _this.$router.push('/perfectInformation');
                    }else {
                        console.log(res.msg);
                    }

                })
                .catch(function(error) {
                    console.log(error);
                })
        },
        //获取最低高考年份
        getYear(){
            var date=new Date();
            var year=date.getFullYear();
            var mounth=date.getMonth()+1;
            var day=date.getDate();
            if(mounth>=7){
                year+=1
            }
            if(mounth==6&&day>=7){
                year+=1
            }
            this.year=year;
        }
    },
    created() {
        this.getYear();
        this.getData();
    }
}
</script>
