<template>
    <div class="zhuanyeku" id="zhuanyeku" :class="radio1 == 1 ? 'zhuanyeku_benke': 'zhuanyeku_zhuanke'">
        <div :class="isShowdingwei ? 'isDingwei' : 'dingwei'">
            <div class="inner">
                <div class="searchBox">
                    <input type="text" v-model="searchValue" placeholder="搜索你感兴趣的专业" @keydown.enter="query">
                    <span @click="query">
                    </span>
                </div>
            </div>
            <div class="top_navs">
                <!-- 本科、专科 -->
                <div class="education">
                    <div class="inner">
                        <ul>
                            <li v-for="(item, index) in education" :key="index" @click="radio1 = item.value" :class="radio1 == item.value ? 'active': ''">{{item.names}}</li>
                        </ul>
                    </div>
                </div>
                <!-- 学科门类 -->
                <div class="discipline ">
                    <div class="inner">
                        <div class="right" id="right">
                            <span v-for="(item, index) in discipline" @click="goToMajorScroll(item.names)" :class="item.names == radio2 ? 'active' : ''">{{item.names}}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="main_content" >
            <div class="inner">
                <!-- 专业 -->
                <div class="major" v-show="!isShowSearchData">
                    <div class="neirongBox" v-for="(item, index) in cdata" :key="index" :style="{marginTop:index==0&&'0'}">
                        <p class="title" :id="item.name">{{item.name}}</p>
                        <div class="major_lei_box" v-for="(major_lei, index) in item.list">
                            <div class="major_lei">{{major_lei.name}}</div>
                            <div class="right_major">
                                <p v-for="(major, index) in major_lei.list"><span @click="go(major.id)">{{major.name}}</span></p>
                            </div>
                        </div>
                    </div>
                </div>
                 <!-- 搜索展示 -->
                <div class="major" v-show="isShowSearchData">
                    <div class="tishi" v-show="searchData.length == 0">
                        没有满足条件的结果,换一个试试？
                    </div>
                    <div class="neirongBox" >
                        <div class="major_lei_box" v-for="(item, index) in searchData">
                            <div class="major_lei">{{item.name}}</div>
                            <div class="right_major">
                                <p v-for="(major, index) in item.list"><span @click="go(major.id)">{{major.name}}</span></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="loading" v-show="isShowLoading">
            <Loading></Loading>
        </div>
    </div>
</template>
<style type="text/css" lang='less' scoped>
    *{
        letter-spacing: 1px;
    }
    .zhuanyeku {
        background-color: #f5f5f5;
        padding-bottom: 30px;
        .dingwei {
            padding-top: 20px;
            width: 100%;
            z-index: 10;
            background-color: #fff;
            box-shadow: 0 0 6px #dedede;
        }
        .isDingwei {
            padding-top: 20px;
            position: fixed;
            left: 0;
            top: 0;
            width: 100%;
            z-index: 10;
            background-color: #fff;
            box-shadow: 0 0 6px #dedede;
        }
        .searchBox{
            width: 1000px;
            height: 40px;
            margin: 0 auto;
            margin-bottom: 10px;
            border: 1px solid #2c8ffc;
            border-radius: 5px;
            input {
                width: 920px;
                float: left;
                line-height: 40px;
                padding-left: 20px;
                border-radius: 5px;
            }
            span {
                float:left;
                width: 60px;
                height: 40px;
                cursor: pointer;
                background: url(/imgs/xingaokao/mubiaotansuo/icon_search.png) no-repeat center center;
            }
        }

        .inner {
            box-sizing: border-box;
            width: 1200px;
            margin: 0 auto;
        }
        .top_navs {
            background-color: #fff;
            .education {
                width: 100%;
                border-bottom: 1px solid #eaebec;
                ul {
                    height: 42px;
                    li {
                        float: left;
                        width: 96px;
                        margin-right: 24px;
                        height: 42px;
                        color: #333;
                        font-size: 15px;
                        font-weight: 600;
                        line-height: 42px;
                        box-sizing: border-box;
                        cursor: pointer;
                        text-align: center;
                    }
                    .active {
                        color: #2c8ffc;
                        border-bottom: 2px solid #2c8ffc;
                    }
                }
            }
            .discipline {
                .right {
                    font-size: 14px;
                    color: #333333;
                    padding: 15px 8px;
                    padding-bottom: 0px;
                    overflow: hidden;
                    span {
                        float: left;
                        font-size: 15px;
                        height: 30px;
                        line-height: 30px;
                        padding: 0px 15px;
                        margin-bottom: 10px;
                        cursor: pointer;
                        margin-right: 20px;
                        &:hover {
                            background-color: #2c8ffc;
                            border-radius: 5px;
                            color: #fff;
                        }
                    }
                    .active {
                        background-color: #2c8ffc;
                        border-radius: 5px;
                        color: #fff;
                    }
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
    .main_content {
        min-height: 1000px;
        height: auto;
        background-color: #f5f5f5;
        .inner {
            box-sizing: border-box;
            padding: 0px 20px;
            width: 1200px;
            margin: 0 auto;
            background-color: #fff;
        }
        .major {
            .tishi {
                text-align: center;
                font-size: 18px;
                line-height: 200px;
                color:#666;
                position: relative;
                height: 200px;
            }
            .neirongBox {
                padding-top: 20px;
                .title {
                    &:before {
                        content: '';
                        width: 4px;
                        height: 17px;
                        position: absolute;
                        left: 0;
                        top: 50%;
                        margin-top: -8px;
                        background-color: #2c8ffc;
                    }
                    position: relative;
                    height: 40px;
                    font-size: 16px;
                    color: #333333;
                    line-height: 40px;
                    font-weight: 600;
                    padding-left: 15px;
                    margin-bottom: 20px;
                    background-color: #f5f5f5;
                }
                .major_lei_box {
                    padding: 0 15px;
                    overflow: hidden;
                    .major_lei {
                        height: 48px;
                        line-height: 48px;
                        border-bottom: 1px solid #eaebec;
                        color: #333;
                        font-weight: 600;
                    }
                    .right_major {
                        padding: 8px 0px;
                        display: flex;
                        flex-wrap: wrap;
                        p {
                            height: 32px;
                            line-height: 32px;
                            cursor: pointer;
                            display: inline-block;
                            white-space:nowrap;
                            float: left;
                            font-size: 13px;
                            width: 16.66%;
                            span {
                                display: inline-block;
                                padding: 0px 2px;
                                height: 100%;
                                color: #333;
                                cursor: pointer;
                            }
                            &:hover {
                                span {
                                    color: #2c8ffc;
                                }
                            }
                            &:last-child {
                                // span {
                                //     border-right: none;
                                // }
                            }
                        }
                    }
                }
            }
        }
    }
    .zhuanyeku_benke {
    }
    .zhuanyeku_zhuanke {
    }
</style>
<script>
import Loading from '../../../.././components/Loading.vue'
export default {
    components: { Loading },
    props: [ 'message' ],

    data() {
        return {
            // 是否显示定位
            isShowdingwei: false,
            isShowLoading: true,
            isShowSearchData: false,
            searchData: [],
            cdata2: [],
            type: '',
            // 开设院校及排名
            kaisheyaunxiao:[],
            radio1: '1',
            radio2: '哲学',
            pageNumber: 1,
            pageSize: 15,
            searchValue: '',
            data: [],
            cdata: [],
            education: [
                { names: '本科专业', value: '1' },
                { names: '专科专业', value: '2' },
            ],
            seachvalue: '',
            // 本科学科门类
            discipline1: [
                { names: '哲学', value: '1' },
                { names: '经济学', value: '7' },
                { names: '法学', value: '33' },
                { names: '教育学', value: '77' },
                { names: '文学', value: '100' },
                { names: '历史学', value: '206' },

                { names: '理学', value: '215' },
                { names: '工学', value: '267' },
                { names: '农学', value: '495' },
                { names: '医学', value: '531' },
                { names: '管理学', value: '599' },
                { names: '艺术学', value: '662' },
                { names: '军事学', value: '1598' },
            ],
            // 专科学科门类
            discipline2: [
                { names: '农林牧渔大类', value: '710' },
                { names: '资源环境与安全大类', value: '768' },
                { names: '能源动力与材料大类', value: '846' },
                { names: '土木建筑大类', value: '905' },
                { names: '水利大类', value: '945' },
                { names: '装备制造大类', value: '966' },
                { names: '生物与化工大类', value: '1039' },
                { names: '轻工纺织大类', value: '1059' },
                { names: '食品药品与粮食大类', value: '1097' },
                { names: '交通运输大类', value: '1126' },
                { names: '电子信息大类', value: '1200' },
                { names: '医药卫生大类', value: '1246' },
                { names: '财经商贸大类', value: '1303' },
                { names: '旅游大类', value: '1362' },
                { names: '文化艺术大类', value: '1378' },
                { names: '新闻传播大类', value: '1442' },
                { names: '教育与体育大类', value: '1468' },
                { names: '公安与司法大类', value: '1523' },
                { names: '公共管理与服务大类', value: '1573' }
            ],
            discipline: [
                { names: '哲学', value: '1' },
                { names: '经济学', value: '7' },
                { names: '法学', value: '33' },
                { names: '教育学', value: '77' },
                { names: '文学', value: '100' },
                { names: '历史学', value: '206' },

                { names: '理学', value: '215' },
                { names: '工学', value: '267' },
                { names: '农学', value: '495' },
                { names: '医学', value: '531' },
                { names: '管理学', value: '599' },
                { names: '艺术学', value: '662' },
                { names: '军事学', value: '1598' },
            ],
        }
    },
    watch: {
        radio1() {
            if(this.radio1 == '1' ) {
                this.radio2 = '哲学';
                this.discipline = this.discipline1;
                this.cdata = this.data.undergraduate;
                window.scrollTo(0, 0);
            }else {
                this.radio2 = '农林牧渔大类';
                this.discipline = this.discipline2;
                this.cdata = this.data.specialty;
                window.scrollTo(0, 0);
            }
        }
    },
    computed: {

    },
    methods: {
        dataUpdate() {
            var _this = this;
            // 本科、专科
            var type = this.radio1;
            // 大类id
            var firstId = this.radio2;
            // 搜索的值
            // var name = this.name;
            var token = window.sessionStorage.getItem('ymtxToken');
            this.$ajax
                // get请求
                .post(this.G_uri + '/target/getThreeLevelSubjectCategoryList', {
                    // data
                    // type: type,
                    // firstId: firstId
                },{
                    headers:{
                        token: token
                    }
                })
                // 监听数据返回
                // .then(({ data }) => console.log(data))
                .then(function(res) {
                    if(res.data.code == 2000) {
                        _this.data = res.data.data;
                        _this.cdata = res.data.data.undergraduate;
                        _this.isShowLoading =  false;
                    }else if(res.data.code == 1016) {
                        _this.$router.push('/login')
                    }

                })
                .catch(function(error) {
                    console.log(error)
                })
        },
        // 查询搜索
        query() {
            var _this = this;
            this.radio1 = '1';
            // 本科、专科
            var type = '1';
            // 大类id
            var name = this.searchValue;
            if(name) {
                this.isShowSearchData = true;
            }else {
                return;
            }
            var token = window.sessionStorage.getItem('ymtxToken');
            this.$ajax
                // get请求
                .post(this.G_uri + '/target/getSubjectCategoryList', {
                    type: type,
                    name: name
                },{
                    headers:{
                        token: token
                    }
                })
                // 监听数据返回
                .then(function(res) {
                        _this.searchData = res.data.data;
                })
                .catch(function(error) {
                    console.log(error)
                })
        },
        // 查看详情
        go(id) {
            var id = id;
            var type = this.radio1;
            let {href}=this.$router.resolve({
                path: '/zhuanyexiangqing',
                name: 'zhuanyexiangqing',
                query: {
                    id: id,
                    type: type,
                    from: 'zhuanyeku'
                }
            })
            window.open(href, '_blank');
        },
        goToMajorScroll(id) {
            this.isShowSearchData = false;
            this.searchValue = '';
             // console.log(document.getElementById(id).offsetTop);
            var _this = this;
            setTimeout(function(){
                _this.radio2 = id;
                var num = document.getElementById(id).offsetTop;
                if(_this.radio1 == '1') {
                    if(id == '哲学') {
                        window.scrollTo(0, 0);
                    }else {
                        window.scrollTo(0, num - 220);
                    }
                }else {
                    if(id == '农林牧渔大类') {
                        window.scrollTo(0, 0);
                    }else {
                        window.scrollTo(0, num - 340);
                    }
                }
            },0)

        },
        scrollTops() {
            this.scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
            // console.log(this.scrollTop)
            if(this.scrollTop > 125) {
                this.isShowdingwei = true;
            }else {
                this.isShowdingwei = false;
            }

        },
    },
    mounted() {
        // document.documentElement.scrollTop;
        document.addEventListener('scroll', this.scrollTops)

    },

    created() {
        this.dataUpdate();

    }
}
</script>
