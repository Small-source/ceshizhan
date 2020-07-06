<template>
    <!-- 智能排课系统 -->
    <div class="zhinengpaike">
        <!-- 顶部通栏大banner -->
        <div class="banner">
            <img src="/imgs/zhinengpaike/zhinengpaikebanner.jpg" alt="">
        </div>
        <!-- 高考改革对教务管理带来的新挑战 -->
        <div class="xintiaozhan">
            <div class="inner">
                <h5 class="dabiaoti"> 高考改革对教务管理带来的新挑战 </h5>
                <div class="underline"></div>
                <p class="xiangqing"> 高考新政下，影响排课的约束条件增多，传统的课表编排方式，不仅需要花费大量的时间，且排出的课表不宜调整，已经无法满足“走班制”教学体制的排课需求 </p>
                <div class="content">
                    <div class="left">
                        <p>如何进行分层教学？</p>
                        <p>如何快速排布教学课表？</p>
                        <p>如何合理安排教室场地和教学资源？</p>
                    </div>
                    <div class="middle">
                        <div class="tubiao"></div>
                    </div>
                    <div class="right">
                        <p>如何指导学生走班排课?</p>
                        <p>怎么应对学考、选考?</p>
                        <p><b>... ...</b></p>
                    </div>
                </div>
            </div>
        </div>
        <!-- 系统简介 -->
        <div class="xitongjianjie">
            <div class="inner">
                <h5 class="dabiaoti"> 系统简介 </h5>
                <div class="underline"></div>
                <!-- <p class="xiangqing">
		    		学马走班排课系统，充分考虑“n选3”选科模式对学生、学校带来的困扰，利用信息化技术，研发设计了“学生选科-智能排课-评估资源-在线调课” 的系统流程，能够合理有序的安排教师、教室、学生资源，统筹计划安排，实现教学资源利用效率最大化，更好的满足教务管理需求，帮助学校平滑流畅的实现从行政班教学到走班教学的自然过渡。
		    	</p> -->
                <div class="content">
                    <div class="left"></div>
                    <div class="right">
                        <div class="neirong" v-for="(item, index) in xitongjianjie" :key="index" :style="item.url">
                            <h6>{{item.titles}}</h6>
                            <p>{{item.xiangqing}}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- 系统特点 -->
        <div class="xitongtedian">
            <div class="inner">
                <h5 class="dabiaoti">系统特点</h5>
                <div class="underline"></div>
                <div class="content">
                    <div class="neirong" v-for="(item, index) in xitongtedian" :key="index">
                        <div class="tubiao" :style="item.tubiao"></div>
                        <div class="tubiao1" :style="item.tubiao1"></div>
                        <h6>{{item.titles}}</h6>
                        <p>{{item.xiangqing}}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<style type="text/css" lang="less" scoped>
* {
    list-style: none;
    text-decoration: none;
}
.inner {
    width: 1200px;
    margin: 0 auto;
}
.zhinengpaike {
    // 顶部通栏大banner
    .banner {
        width: 100%;
        font-size: 0px;
        img {
            width: 100%;
        }
    }
    .dabiaoti {
        text-align: center;
        font-size: 24px;
        color: #156dfe;
        line-height: 24px;
        height: 24px;
        margin-bottom: 20px;
    }
    .underline {
        width: 60px;
        height: 4px;
        margin: 0 auto;
        background-color: #156dfe;
        margin-bottom: 20px;
    }
    .xiangqing {
        font-size: 18px;
        color: #666666;
        line-height: 35px;
        padding: 0px 100px;
    }
    // 高考改革对教务管理带来的新挑战
    .xintiaozhan {
        padding-top: 60px;
        padding-bottom: 60px;
        .content {
            height: 290px;
            color: #156dfe;
            font-size: 16px;
            padding-top: 30px;
            .left {
                float: left;
                width: 310px;
                height: 290px;
                p {
                    width: 290px;
                    height: 70px;
                    padding-left: 20px;
                    line-height: 70px;
                    box-shadow: 0 0 20px rgba(176, 224, 251, .5);
                    margin-top: 30px;
                }
            }
            .middle {
                background: url(/imgs/zhinengpaike/danao.png) no-repeat;
                float: left;
                width: 580px;
                height: 290px;
                background-position: center center;
                position: relative;
                .tubiao {
                    position: absolute;
                    left: 50%;
                    top: 50%;
                    margin-top: -118px;
                    margin-left: -135px;
                    width: 270px;
                    height: 230px;
                    // margin: 0 auto;
                    background: url(/imgs/zhinengpaike/mimangxiang.png) no-repeat center center;
                }
            }
            .right {
                .left;
            }
        }
    }
    // 系统简介
    .xitongjianjie {
        padding-top: 60px;
        padding-bottom: 60px;
        background-color: #f6f7fb;
        .content {
            height: 426px;
            padding-top: 70px;
            .left {
                float: left;
                width: 450px;
                height: 386px;
                padding: 20px 0px;
                margin-right: 110px;
                background: url(/imgs/zhinengpaike/jianjie.png) no-repeat;
            }
            .right {
                float: left;
                width: 640px;
                height: 426px;
                .neirong {
                    padding-left: 105px;
                    height: 77px;
                    margin-bottom: 39px;
                    background-repeat: no-repeat;
                    &:last-child {
                        margin-bottom: 0px;
                    }
                    h6 {
                        font-size: 18px;
                        line-height: 36px;
                        height: 36px;
                        color: #333333;
                        // font-weight: normal;
                    }
                    p {
                        font-size: 14px;
                        color: #666666;
                        line-height: 26px;
                    }
                }
            }
        }
    }
    // 系统特点
    .xitongtedian {
        padding-top: 60px;
        padding-bottom: 60px;
        background: url(/imgs/zhinengpaike/beijing.jpg) no-repeat;
        background-size: 100% 500px;
        .dabiaoti {
            color: #ffffff;
        }
        .underline {
            margin-bottom: 40px;
            background-color: #ffffff;
        }
        .content {
            width: 1200px;
            height: 290px;
            .neirong {
                float: left;
                width: 195px;
                height: 287px;
                padding: 0px 30px 0px 30px;
                margin-right: 60px;
                color: #ffffff;
                position: relative;
                &:hover {
                    height: 290px;
                    background: -webkit-linear-gradient(#D6F1FC, #ffffff, #ffffff);
                    background: -o-linear-gradient(#D6F1FC, #ffffff, #ffffff);
                    background: linear-gradient(#D6F1FC, #ffffff, #ffffff);
                    border-radius: 5px;
                    padding-top: 116px;
                    height: 171px;
                    .tubiao {
                        display: none;
                    }
                    .tubiao1 {
                        display: block;
                    }
                    h6 {
                        color: #333333;
                    }
                    p {
                        color: #666666;
                    }
                }
                &:last-child {
                    margin-right: 0px;
                }
                .tubiao {
                    width: 195px;
                    height: 137px;
                }
                // hover时展示图标1
                .tubiao1 {
                    display: none;
                    width: 255px;
                    height: 137px;
                    position: absolute;
                    left: 0px;
                    top: 0px;
                }
                h6 {
                    font-size: 18px;
                    text-align: center;
                    margin-bottom: 15px;
                    font-weight: normal;
                }
                p {
                    font-size: 16px;
                    line-height: 22px;
                }
            }
        }
    }
}
</style>
<script>
// import Swiper from '../components/Swiper.vue'
export default {
    // components: { Swiper },
    data() {
        return {
            // 系统简介
            xitongjianjie: [{ url: 'background:url(/imgs/zhinengpaike/zhineng.png) no-repeat 0px center', titles: '智能在线选课，自动统计数据', xiangqing: '顺应“n选3”高考政策，支持学生在线选科，并自动统计结果，整体数据直观展现，为走班设计提供基础数据' }, { url: 'background:url(/imgs/zhinengpaike/ziyuanpinggu.png) no-repeat 0px center', titles: '资源动态评估，合理安排学校师资', xiangqing: '实时监测学校教室资源和教师安排，便于学校领导及时掌握动态变化情况' }, { url: 'background:url(/imgs/zhinengpaike/dushu.png) no-repeat 0px center', titles: '智能排课走班，提高校方办公效率', xiangqing: '排课依据走班混合式课表，基于学生对学考和选考科目的选科结果，结合学校现有的教学资源，排出混合式课表' }, { url: 'background:url(/imgs/zhinengpaike/zaixianweitiao.png) no-repeat 0px center', titles: '自主在线微调，灵活应对突发状况', xiangqing: '满足各类排课规则需求，支持课表在线调整、临时调代课，轻松应对突发情况' }],
            // 系统特点
            xitongtedian: [{ tubiao: 'background:url(/imgs/zhinengpaike/tieheshiji.png) no-repeat center center', titles: '贴合实际  排课无忧', xiangqing: '洞悉校园管理和教学流程，排课方案可实施性强', tubiao1: 'background:url(/imgs/zhinengpaike/tieheshiji1.png) no-repeat center center' }, { tubiao: 'background:url(/imgs/zhinengpaike/jiaocaixuanze.png) no-repeat center center', titles: '多角色协同  各司其职', xiangqing: '充分考虑学校领导、教师、学生的角色需求，系统操作简单，效果显著。', tubiao1: 'background:url(/imgs/zhinengpaike/jiaocaixuanze1.png) no-repeat center center' }, { tubiao: 'background:url(/imgs/zhinengpaike/biaozhunhuajianshe.png) no-repeat center center', titles: '智能管理  个性课表', xiangqing: '满足学校特色化分层、分班、走班的不同需求，生成每个学生、每名教师的个性化课表，实现一人一课表。', tubiao1: 'background:url(/imgs/zhinengpaike/biaozhunhuajianshe1.png) no-repeat center center' }, { tubiao: 'background:url(/imgs/zhinengpaike/BAI-peixun.png) no-repeat center center', titles: '多维计算  四位一体', xiangqing: '提供学生、教师、教室、时间四位一体的排课维度,用户可以完全按照自己的意愿完成选课、排课任务。', tubiao1: 'background:url(/imgs/zhinengpaike/peixun1.png) no-repeat center center' }]
        }
    },
    mounted() {}
}
</script>