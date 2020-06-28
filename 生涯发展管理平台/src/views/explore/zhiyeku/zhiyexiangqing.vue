<template>
    <div class="zhiyexiangqing">
        <div class="top-xueke">
            <div class="inner">
                <div class="top_title">
                    <div class="imgBox"></div>
                    <span class="title">{{cdata.name}}</span>
                </div>    
            </div>
        </div>
        <div class="inner">
            <div class="content">
                <div class="neirongBox">
                    <div class="title"><span>职业简介</span><p class="xian"></p></div>
                    <p class="xiangqing">{{cdata.introduction}}</p>
                </div>
                <div class="neirongBox">
                    <div class="title"><span>任务职责</span><p class="xian"></p></div>
                    <p class="xiangqing">{{cdata.duties}}</p>
                </div>
                <div class="neirongBox beijing">
                    <div class="title"><span>知识背景</span><p class="xian"></p></div>
                    <p class="titles">学历</p>
                    <p class="xiangqings">{{cdata.degree}}</p>
                    <p class="titles">专业知识背景</p>
                    <p class="xiangqings">{{cdata.knowledge}}</p>
                </div>
                <div class="neirongBox">
                    <div class="title"><span>职业技能</span><p class="xian"></p></div>
                    <p class="xiangqing">{{cdata.skill}}</p>
                </div>
                <div class="neirongBox">
                    <div class="title"><span>从业资格</span><p class="xian"></p></div>
                    <p class="xiangqing">{{cdata.qualification}}</p>
                </div>
                <div class="neirongBox">
                    <p class="title"><span>职业发展前景</span><p class="xian"></p></p>
                    <p class="xiangqing">{{cdata.development}}</p>
                </div>
                <div class="neirongBox">
                    <p class="title"><span>个人晋升路径</span><p class="xian"></p></p>
                    <p class="xiangqing">{{cdata.promotionPath}}</p>
                </div>
            </div>
        </div>
        <!-- <div class="loading" v-show="isShowLoading">
            <Loading></Loading>
        </div> -->
    </div>
</template>
<style type="text/css" lang='less' scoped>
    .zhiyexiangqing {
        background-color: #fff;
        padding-bottom: 30px;
        margin-left: 20px;
        .inner {
            width: 930px;
            margin: 0 auto;

        }
        // 小导航，用于返回上一页
        .mianbaoxie {
            height: 40px;
            font-size: 12px;
            line-height: 40px;
            color: #fff;
            position: relative;
            .no1 {
                padding-left: 5px;
                cursor: pointer;
                &:hover {
                    color: #2d90f8;
                }
            }
            .no2 {
                padding-left: 10px;
                cursor: pointer;
                &:hover {
                    color: #2d90f8;
                }
            }
            .no3 {
                padding-left: 10px;
                color: #2d90f8;
            }
            .goBack {
                position: absolute;
                width: 50px;
                height: 26px;
                line-height: 26px;
                background-color: #2d90f8;
                color: #fff;
                right: 0;
                top: 3px;       
                border-radius: 2px;
                text-align: center;
                cursor: pointer;
            }
        }
        .top-xueke {
            height: 140px;
            color: #333;
            background: url(/imgs/explore/zhiyeku/bg_xiangqing.png) no-repeat center center;
            .top_title {
                padding-top: 18px;
                .imgBox {
                    width: 56px;
                    height: 56px;
                    float: left;
                    border: 2px solid #fff;
                    background: url(/imgs/explore/zhiyeku/icon_gongjuxiang.png) no-repeat center center;
                }
                .title {
                    margin-left: 20px;
                    font-size: 22px;
                    color: #fff;
                    line-height: 24px;
                }
            }  
        }
        .content {
            padding-bottom: 50px; 
            margin-top: 20px;
            background-color: #fff;
            .neirongBox {
                .title {
                    font-size: 20px;
                    color: #333;
                    height: 54px;
                    line-height: 54px;
                    font-weight: 600;  
                    border-bottom: 1px solid #dedede; 
                    padding-left: 20px;
                    position: relative;
                    &:before {
                        content: '';
                        position: absolute;
                        width: 6px;
                        height: 6px;
                        border-radius: 50%;
                        background-color: #333;
                        left: 0;
                        top: 24px;
                    }
                }
                .xiangqing {
                    font-size: 14px;
                    color: #666666;
                    line-height: 24px;
                    padding-top: 32px;
                    padding-bottom: 26px;
                }
            } 
            .beijing {
                // padding-top: 20px;
                .title {
                    margin-bottom: 20px;
                }
                .titles {
                    color: #333;
                    line-height: 30px;
                }
                .xiangqings {
                    font-size: 14px;
                    color: #666666;
                    line-height: 24px;
                    padding-top: 10px;
                    padding-bottom: 20px;
                }
            }  
        }
        .loading {
            position: fixed;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background-color: rgba(255,255,255,.6);
        }
    }
</style>
<script>
// import Loading from '../../../.././components/Loading.vue'
export default {
    // components: { Loading },
    // props: [ 'message' ],
    data() {
        return { 
            isShowLoading: true,
            cdata: [],
        }
    },
    methods: {
        dataUpdate() {
            var id = this.$route.query.id;
            var _this = this;
            var token = window.sessionStorage.getItem('ymtxToken');
            this.$ajax
                // get请求
                .post(this.G_uri + '/target/occupationDetail', {
                    id: id,
                },{
                    headers:{
                        token: token
                    }
                })
                // 监听数据返回
                // .then(({ data }) => console.log(data))
                .then(function(res) {
                    if(res.data.code == 2000) {
                        _this.cdata = res.data.data;
                        _this.isShowLoading = false;
                    }else if(res.data.code == 1016) {
                        _this.$router.push('/login')
                    } 
                })
                .catch(function(error) {
                    console.log(error)
                })
        }
    },

    created() {
        this.dataUpdate()
    },
    mounted() {
        window.scrollTo(0,0)
    }
}
</script>