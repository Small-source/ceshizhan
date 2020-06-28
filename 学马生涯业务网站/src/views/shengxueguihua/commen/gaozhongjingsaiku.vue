<template>
    <!-- 高中竞赛库 -->
    <div class="gaozhongjingsaiku">
        <div class="top_nav">
            <ul class="inner">
                <span>分类</span>
                <li v-for="(item, index) in leibies" :key="index" @click="changData(item.value)" :class="radio1 == item.value ? 'active' : ''">
                    {{item.leibie}}
                </li>
            </ul>
        </div>  
        <div class="content">
            <div class="inner">
                <div class="main_box" v-for="(item, index) in cdata" :key="index">
                    <div class="img_box">
                        <img :src="item[4]" alt="">
                    </div>
                    <div class="main">
                        <p class="title" @click="goCompetition(item[0])">{{item[2]}}</p>
                        <p class="detail">主办单位：<span>{{item[3]}}</span></p>
                        <div class="go_video" v-show="item[0] == 22 || item[0] == 29" @click="goVideo(item[2])">
                            观看竞赛指导视频
                        </div>
                        <div class="btn" @click="goCompetition(item[0])">竞赛详情</div>
                    </div>
                </div>
            </div>
        </div> 
    </div>
</template>
<style type="text/css" lang='less' scoped>
.gaozhongjingsaiku {
    background-color: #fff;
    margin-top: 0px;
    .top_nav {
        padding-top: 30px;
        padding-bottom: 10px;
        .inner {
            width: 1200px;
            margin: 0 auto;
            overflow: hidden;       
        }
        span {
            line-height: 38px;
            font-size: 16px;
            color: #333;
            font-weight: 600;
            float: left;
        }
        li {
            box-sizing: border-box;
            width: 90px;
            height: 40px;
            line-height: 38px;
            text-align: center;
            color: #666;
            font-size: 14px;
            border: 1px solid #cccccc;
            margin-left: 17px;
            float: left;
            background-color: #eeeeee;
            cursor: pointer;
        }
        .active {
            background-color: #3592fa;
            color: #fff;
            border: 1px solid #3592fa;
        }
    }
    .content {
        .inner {
            width: 1200px;
            padding: 0px;
            margin: 0 auto;
        }
        .main_box {
            padding: 20px 0px;
            height: 160px;
            position: relative;
            border-bottom: 1px solid #ccc;
            .img_box {
                width: 280px;
                height: 160px;
                float: left;
                img {
                    width: 100%;
                    height: 100%;
                }
            }
            .main {
                padding-left: 25px;
                float: left;
                height: 160px;
                .title {
                    line-height: 38px;
                    font-size: 17px;
                    color: #3592fa;
                    font-weight: 600;
                    cursor: pointer;
                }
                .detail {
                    line-height: 30px;
                    color: #666;
                    font-size: 13px;
                    margin-bottom: 25px;
                }
                .go_video {
                    height: 35px;
                    line-height: 35px;
                    padding-left: 42px;
                    background: url(/imgs/shengxueguihua/zizhuzhaosheng/icon_bofang.png) no-repeat 0px -2px;
                    color: #2c8ffc;
                    font-size: 15px;
                    cursor: pointer;
                }
            }
            .btn {
                width: 85px;
                height: 28px;
                line-height: 28px;
                text-align: center;
                color: #fff;
                background-color: #2c8ffc;
                border-radius: 2px;
                position: absolute;
                right: 0px;
                top: 50%;
                margin-top: -14px;
                cursor: pointer;
                font-size: 13px;
            }
        }
    }
}    
</style>
<script>
export default {
    props: [ 'message' ],
    data() {
        return { 
            leibies: [
                // '五大学科类', '科技创新类', '自然科学类', '文学类', '英语类', '演讲类', '社会实践类', '国学类', '其他'
                { leibie: '全部', value: '' },
                { leibie: '科技创新类', value: '科技创新类' },
                { leibie: '学科类', value: '学科类' },
                { leibie: '艺术体育类', value: '艺术体育类' },
              
            ],
            cdata: [],
            data: [],
            radio1: '',
        }
    },

    methods: {
        dataUpdate() {
            var _this = this;
            this.$ajax
                // get请求
                .get('/data/competition.json', {
                    // query数据
                    params: {
                        id: this.$route.params.id
                    }
                })
                // 监听数据返回
                .then(function(res) {
                    // console.log(res)
                    _this.data = res.data;
                    _this.cdata = res.data;

                })
        }, 
        goCompetition(idx) {
            let id = idx;
            if(id==12 || id == 24|| id == 26 || id== 27 || id == 28) {
                return;
            }else {
                if(this.$route.path == '/highSchoolCompetition') {
                    let {href} = this.$router.resolve({
                        path: '/competition?id=' + id,
                    })
                    window.open(href, '_blank');
                }else {
                    let {href}=this.$router.resolve({
                        path: '/zpcompetition?id=' + id,
                    })
                    window.open(href, '_blank');
                }
                
               
            }   
        },
        changData(value) {
            this.radio1 = value;
            this.cdata = this.data.filter((item) => {
                return item[1].includes(value)
            });
        },
        goVideo(categoryName) {
            if(this.$route.path == '/highSchoolCompetition') {
                this.$router.push({
                    path: '/competitionVideoList',
                    name: 'competitionVideoList',
                    query: {
                        categoryName: categoryName,
                    }
                })
            }else {
                this.$router.push({
                    path: '/zpcompetitionVideoList',
                    name: 'zpcompetitionVideoList',
                    query: {
                        categoryName: categoryName,
                    }
                })
            }
        }
    },
    created() {
       this.dataUpdate();
    },
    watch: {
    }
}
</script>