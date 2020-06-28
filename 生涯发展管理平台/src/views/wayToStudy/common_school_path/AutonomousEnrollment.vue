<template>
    <!-- 升学途径 (自主招生)-->
    <div class="autonomous_enrollment">
        <div class="banner">
            <img src="/imgs/wayToStudy/main/banner.png" alt="">
        </div>
        <div class="what_zizhao main">
            <h6 class="main_title">什么是自主招生？</h6>
            <div class="main_box">
                <p>自主招生是我国高校考试招生制度的有机组成部分，是对现行统一高考招生录取的一种补充，主要选拔具有学科特长和创新潜质的优秀学生，也就是所谓的“偏才怪才”。</p>
                <p>各大学（2019年全国共有90所名校有自招资格）在高考后独立组织考试，给予在考试中表现优秀的学生降分录取等优惠。最多能降至一本线录取（即分数达到当地高考一本线即可进入该大学）学生只要具有学科特长和创新潜质，就可以参加自主招生。</p>
            </div>    
        </div>
        <div class="benefit main">
            <h6 class="main_title">参加自主招生的好处</h6>
            <div class="main_box">
                <p>（1）自主招生是985，211等重点大学选拔人才的重点补充形式，因而可以理解为是一个进入名校的捷径。</p>
                <p>（2）每年高校都会抽取百分之五的名额用于自主招生录取，这也为那种平常学习成绩可能不是最拔尖，但是在某一方面确实很感兴趣、有特长的学生开了另外一条路。</p>
                <p>（3）可以降分录取，当考生的高考分数没有达到某院校在该省的统招分数线时，可以使用自主招生的优惠政策进入该大学。
    例如2017年北大的分数线在695左右，某学生高考失利考了670分，同时在自主招生考试中表现优秀，获得降分录取优惠，顺利进入北京大学。</p>
            </div>
        </div>
        <div class="zhaoshengduixiang main">
            <h6 class="main_title">自主招生的招生对象</h6>
            <div class="main_box">
                <p>招收的主要对象是具有学科特长和创新潜质的优秀学生。从2019年的政策来看，自招对学生的要求比较高，很多学校要求学生有五大学科竞赛（数学、物理、化学、生物、信息学）省一及以上的奖项。</p>
                <p>每个学校的要求是不一样的，具体我们可以查看学校的招生简章。</p>
            </div>    
        </div>
        <div class="application_process main">
            <h6 class="main_title">自主招生的流程</h6>
            <ul class="lis_box">
                <li  v-for="(item, index) in zizhaoliucheng" :key="index">
                    <p class="detail">{{item.detail}}</p>
                    <p class="time">{{item.time}}</p>
                </li>
            </ul>
        </div>
        <div class="remind main">
            <h6 class="main_title">特别提醒</h6>
            <div class="main_box">
                <p><span>1</span>自主招生考核由各高校单独组织，如需笔试，考试科目原则上一门、不超过两门。</p>
                <p><span>2</span>所有试点高校自主招生考核统一安排在高考结束后、高考成绩公布前进行。</p>
                <p><span>3</span>入选考生高考总分原则上不应低于考生所在省(区、市)有关高校同批次同科类录取控制分数线。</p>
                <p><span>4</span>自主招生对象虽然是高三考生，但并不是所有的高三考生都符合高校自主招生报名条件，仔细阅读高校招生简章可以发现，虽然认可奖项不同，但是所有的高校都对竞赛奖项有一定的要求，所以考生如果想要报考自主招生的话，一定要从高一就开始准备起来。</p>
            </div>   
        </div>
        <div class="universities main">
            <h6 class="main_title">
                2019年具有自主招生资格的学校名单
                <span>*由于各方面条件不断调整变化，请考生以各省考试院公布的最新消息为主</span>
            </h6>
            <ul>
                <li v-for="(item, index) in universityData" :key="index" @click="goUniversity(item.id)">{{item.name}}</li>
            </ul>
            <p class="school_title">只在本省实行自主选拔录取院校</p>
            <ul>
                <li v-for="(item, index) in universityShengnei" :key="index" @click="goUniversity(item.id)">{{item.name}}</li>
            </ul>
        </div>
    </div>
</template>
<script>
export default {
    // components: { Yuanxiaoku },
    // props: [ 'message' ],
     data() {
        return {
            zizhaoliucheng: [
                { time: '3月初', detail: '高校发布招生简章' },
                { time: '3月', detail: '考生提交申请材料' },
                { time: '4月', detail: '高校审核学生材料' },
                { time: '4月底前', detail: '公示初审通过名单' },
                { time: '6月7号-8号', detail: '学生参加全国统一高考' },
                { time: '6月10日-22日', detail: '试点高校组织考核' },
                { time: '高考出分前', detail: '高校确定并公示资格名单' },
                { time: '高考出分后 ', detail: '考生填报志愿高校录取公示录取名单' }
            ],
            // 自招院校
            universityData: [
                // '北京大学','中国人民大学','清华大学','北京交通大学','北京航空航天大学',
                // '北京理工大学','北京科技大学','北京化工大学','北京邮电大学','北京林业大学',
                // '北京中医药大学','北京师范大学','北京语言大学','中国传媒大学','中央财经大学',
                // '对外经济贸易大学','中国政法大学','华北电力大学 (北京) (保定)','南开大学','天津大学',
                // '大连理工大学','东北大学','大连海事大学','吉林大学','东北师范大学',
                // '哈尔滨工业大学','哈尔滨工程大学','复旦大学','同济大学','上海交通大学',
                // '华东理工大学','东华大学','华东师范大学','上海外国语大学','上海财经大学',
                // '南京大学','苏州大学','东南大学','南京航空航天大学','南京理工大学',
                // '中国矿业大学','河海大学','江南大学','南京农业大学','中国药科大学',
                // '浙江大学','中国科学技术大学','合肥工业大学','厦门大学','山东大学',
                // '中国海洋大学','中国石油大学(华东)','中国石油大学(北京)','武汉大学','华中科技大学',
                // '中国地质大学(武汉)','武汉理工大学','华中农业大学','华中师范大学','中南财经政法大学',
                // '湖南大学','中南大学','中山大学','华南理工大学','四川大学',
                // '重庆大学','西南交通大学','电子科技大学','西南大学','西南财经大学',
                // '西安交通大学','西北工业大学','西安电子科技大学','长安大学','西北农林科技大学',
                // '陕西师范大学','兰州大学'
            ],
            // 仅对省内招生的自招院校
            universityShengnei: []

        }
    },
    methods: {
        goUniversity(id) {
            var id = id;
            let {href}=this.$router.resolve({
                path: '/explore/yuanxiaoxiangqing',
                name: '院校详情',
                query: {
                    id: id,
                }
            })
            window.open(href, '_blank');
        },
        // 获取自招院校，省内是1，全部是2
        getZizhuzhaoshengList() {
            var _this = this;
            var token = window.sessionStorage.getItem('ymtxToken');
            this.$ajax
                .post(this.G_uri + '/target/getGroupZizhuzhaoshengList', {
                    token: token
                },{
                    headers:{
                        token: token
                    }
                })
                // 监听数据返回
                .then(function(res) {
                    _this.universityData = res.data.data[2];
                    _this.universityShengnei = res.data.data[1];
                })
                .catch(function(error) {
                    console.log(error)
                })
        },
    },
    created() {
        this.getZizhuzhaoshengList();
    }
}
</script>
<style type="text/css" lang='less' scoped>
.autonomous_enrollment {
    box-sizing: border-box;
    width: 970px;
    background-color: #fff;
    padding: 20px;
    .banner {
        width: 100%;
        position: relative;
        p {
            width: 930px;
            height: 143px;
            line-height: 143px;
            height: 60px;
            font-size: 32px;
            color: #fff;
            padding-left: 200px;
            // text-align: center;
            position: absolute;
            top: 0px;
            left: 0px;

        }
    }
    .main {
        padding-top: 40px;
    }
    .main_title {
        line-height: 40px;
        text-align: left;
        font-size: 16px;
        font-weight: 600;
        color: #333;
        margin-bottom: 20px;
        padding-left: 40px;
        background: url(/imgs/wayToStudy/common/icon_title.png) no-repeat 0px center;
    }
    .main_box {
        p {
            line-height: 30px;
            font-size: 14px;
            color: #666;
            margin-bottom: 10px;
        }
    }   
    .what_zizhao {

    }
    .benefit {

    }
    .zhaoshengduixiang {

    }
    .application_process {
        ul.lis_box {
            display: flex; 
            justify-content: space-between;
            li {
                width: 160px;
                text-align: center;
                box-shadow: 0px 0px 10px 0 rgba(4,0,0,0.27);
                p {
                    &:first-child {
                        line-height: 30px;
                        background-color: #8fcfe9;
                        color: #fff;
                    }
                    &:last-child {
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        height: 70px;
                        line-height: 24px;
                        color: #333;
                        font-size: 14px;
                    }
                }
            }
        }
    }
    .remind {
        .main_box {
            p {
                span {
                    display: inline-block;
                    width: 24px;
                    height: 24px;
                    line-height: 24px;
                    text-align: center;
                    border-radius: 50%;
                    background-color: #2c8ffc;
                    color: #fff;
                    vertical-align: middle;
                    margin-right: 6px;
                    font-size: 12px;
                }
            }
        }
    }
    .universities {
        .main_title {
            span {
                font-size: 14px;
                color: red;
            }
        }
        .school_title {
            line-height: 50px;
            text-align: center;
            background: #60badf;
            color: #fff;
        }
        ul {
            width: 933px;
            overflow: hidden;
            li {
                font-size: 14px;
                box-sizing: border-box;
                float: left;
                width: 25%;
                border: 1px solid #eaeaea;
                margin-left: -1px;
                margin-top: -1px;
                min-height: 42px;
                cursor: pointer;
                display: flex;
                align-items: center;
                justify-content: center;
                line-height: 20px;
                text-align: center;
                &:nth-child(4n+1) {
                    margin-left: 0px;
                }
                &:nth-child(-n + 4) {
                    margin-top: 0px;
                }
                &:nth-child(8n-1),&:nth-child(8n-2),&:nth-child(8n-3),&:nth-child(8n) {
                    background-color: #e6f8ff;
                }
            }
        }
    }

}

</style>