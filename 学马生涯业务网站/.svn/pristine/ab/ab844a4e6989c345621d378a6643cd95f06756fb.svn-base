<template>
    <div class="Mycourses">
        <!-- 自招课程 -->
        <div class="content" v-if="rightList.length">
            <p class="mycourses_title">我的课程</p>
            <div class="top" v-show="subjects.length">
                <div class="top_list" >
                    <div class="topTitle">
                        <span @click="isShowSubjects = true" :class="isShowSubjects ? 'active' : 'no1'">自招笔试</span>
                        <span @click="isShowSubjects = false" :class="isShowSubjects ? '' : 'active2'">自招面试</span>
                    </div>
                    <ul class="bishi" v-show="isShowSubjects">
                        <li v-for="(item, index) in subjects" :key="index" @click="leftList(item.list, index)" :class="idx == index ? 'actived' : ''">{{item.name}}</li>
                    </ul>  
                    <ul class="mianshi" v-show="!isShowSubjects">
                        <li v-for="(item, index) in subjectsmianshi" :key="index" @click="leftList(item.list, index)" :class="idx == index ? 'actived' : ''">{{item.name}}</li>
                    </ul> 
                </div>
            </div>
            <ul class="footer_list">
                <li v-for="(item, index) in rightListFuben" :key="index" v-show="rightList.length" :class="item.id == nowId ? 'active' : ''">
                    <p class="name">{{item.title}}</p>
                    <span class="player" @click="goPlay(item.id, item.title, item.introduction,item.ppt)">播放</span>
                </li>
            </ul>
            <OwerPager v-bind:right-list="rightList"></OwerPager>
        </div>
        <div class="noReport" v-if="!rightList.length">
            <div class="tubiao"></div>
            <p>暂无课程~~~</p>
        </div>
    </div>
</template>
<style type="text/css" lang='less' scoped>
.Mycourses {
    background-color: #fff;
    min-height: 628px;
    box-sizing: border-box;
    padding-left: 46px;
    padding-right: 20px;
    position: relative;
    .mycourses_title {
        line-height: 70px;
        color: #333;
        font-size: 16px;
    } 
    .content {
        .top_list {
            .topTitle {
                height: 38px;
                line-height: 28px;
                border-bottom: 1px solid #dedede;
                span {
                    display: inline-block;
                    width: 108px;
                    height: 38px;
                    text-align: center;
                    cursor: pointer;
                    font-size: 16px;
                }
                .active {
                    position: relative;
                    top: -0px;
                    color: #3492f9;
                    height: 35px;
                    border-bottom: 3px solid #3492f9;
                }
                .active2 {
                    .active;
                }
            }
            ul {
                padding-top: 15px;
                height: 55px;
            }
            li {
                float: left;
                margin-right: 15px;
                height: 24px;
                line-height: 24px;
                text-align: center;
                font-size: 14px;
                color: #666;
                padding: 0px 15px;
                border-radius: 12px;
                cursor: pointer;
            }
            .actived {
                color: #fff;
                background-color: #3492f9;

            }
        }
        .footer_list {
            height: 351px;
            display: flex;
            flex-wrap: wrap;
            justify-content: space-between;
            align-content: flex-start;
            li {
                box-sizing: border-box;
                width: 434px;
                height: 76px;
                padding: 0px 20px;
                line-height: 74px;
                font-size: 14px;
                color: #666;
                border: 1px solid #f2f2f2;
                cursor: pointer;
                position: relative;
                margin-bottom: 11px;
                border-radius: 4px;
                .name {
                    color: #333;
                    font-size: 14px;
                    padding-left: 40px;
                    background: url(/imgs/gerenzhongxin/icon/icon_shipin.png) no-repeat 0px center;
                }
                .player {
                    position: absolute;
                    width: 64px;
                    height: 26;
                    line-height: 26px;
                    font-size: 14px;
                    color: #3492f9;
                    border-radius: 13px;
                    text-align: center;
                    right: 20px;
                    top: 50%;
                    margin-top: -13px;
                    border: 1px solid #3492f9;
                    &:hover {
                        color: #fff;
                        background-color: #3492f9;
                    }
                }
                &:hover {
                    border: 1px solid #3592f9;
                    .name {
                        background: url(/imgs/gerenzhongxin/icon/icon_shipin_active.png) no-repeat 0px center;
                        color: #3492f9;
                    }
                }

            }
            .active {
                border: 1px solid #3592f9;
                .name {
                    background: url(/imgs/gerenzhongxin/icon/icon_shipin_active.png) no-repeat 0px center;
                    color: #3492f9;
                }
            }
        }
    }
    .noReport {
        width: 400px;
        height: 300px;
        position: absolute;
        left: 50%;
        top: 50%;
        margin-top: -150px;
        margin-left: -200px;
        text-align: center;
        .tubiao {
            height: 122px;
            background: url(/imgs/gerenzhongxin/zhanwushuju.png) no-repeat center center;
        }
        p {
            line-height: 54px;
            color: #666;
            font-size: 14px;
        }
    }
}
</style>
<script>
import OwerPager from './OwnerPager.vue';
export default {
    components: { OwerPager },
    // props: [ 'message' ],
    data() {
        return { 
            isShowSubjects: true,
            idx: 0,
            subjects: [],
            subjectsmianshi: [],
            rightList:[],
            // rightList的副本
            rightListFuben: [],
            // 当前播放id
            nowId: '',
        }
    },
    watch: {
        isShowSubjects() {
            if(!this.isShowSubjects) {
                let arr = this.subjectsmianshi[0].list;
                this.idx = 0;
                this.rightList = arr;
            }else {
                this.idx = 0;
                let arr = this.subjects[0].list;
                this.rightList = arr;
               
            }
            
        },
        rightList() {
            let arr = this.rightList;
            if(arr.length <= 8) {
                this.rightListFuben = arr;
            }else {
                this.rightListFuben = arr.slice(0,8);
            }
        }
    },
    methods: {
        // 获取科目
        getSubject() {
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
                        _this.subjects = res.data.data[0];
                        _this.subjectsmianshi = res.data.data[1];
                        _this.rightList = res.data.data[0][0].list;

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
        // 对应的学科下的视频列表数据
        leftList(arr, idx) {
            // console.log(arr)
            this.idx = idx;
            this.rightList = arr;
        },

        // 播放
        goPlay(id, title, introduction,ppt) {
            this.nowId = id;
            // this.$router.push({
            //     path: '/videoplay',
            //     query: {
            //         id: id,
            //         title: title,
            //         introduction: introduction,
            //         ppt: ppt
            //     },
            //     params: {   
            //         id: id,
            //         title: title,
            //         introduction: introduction,
            //         ppt: ppt
            //     },  
            // })
            let {href}=this.$router.resolve({
                path: '/videoplay',
                query: {
                    id: id,
                    title: title,
                    introduction: introduction,
                    ppt: ppt,
                    from:'kecheng'
                }
            })
            window.open(href, '_blank'); 
        },
        // 分页改变，数据随之改变
        changeRightList(value) {
            let arr = this.rightList
            this.rightListFuben = arr.slice(8*(value-1), 8*value);
        },     
    },
    created() {
       this.getSubject();

    }
}
</script>
