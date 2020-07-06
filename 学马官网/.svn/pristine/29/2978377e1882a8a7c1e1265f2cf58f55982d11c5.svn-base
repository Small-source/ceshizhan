<template>
    <!-- 走班校园管理系统页面 -->
    <div class="zoubanxiaoyuan">
        <!-- 顶部通栏大banner -->
        <div class="banner">
            <img src="/imgs/zoubanxiaoyuan/zoubanxiaoyuanbanner.jpg" alt="">
        </div>
        <!-- 颠覆传统的教学管理模式 -->
        <div class="dianfuchuantong">
            <div class="inner">
                <h5 class="dabiaoti">颠覆传统教学管理模式</h5>
                <div class="underline"></div>
                <div class="content">
                    <div class="xiangqing" v-for="(item, index) in dianfuchuantong" :key="index" :style="item.tubiao">
                        <h6>{{item.titles}}</h6>
                        <p>{{item.xiangqing}}</p>
                    </div>
                </div>
            </div>
        </div>
        <!-- 系统简介 -->
        <!-- 	<div class="xitongjianjie">
			<div class="inner">
				<h5 class="dabiaoti">系统简介</h5>
				<div class="underline"></div>
				<div class="content">
					<div class="imgBox">
						<img src="/imgs/lunbotu/0.jpg" alt="" :class="activeJianjie ? 'active' : ''">
					</div>
					<p>基于选科走班教学模式 的考试成绩统计系统，系统涵盖多维度、多层 次的成绩分析功能，可以帮助学校快速分析整体成绩水平，并兼顾个体，记录学生个体的成绩走势，是可视化教学管理的典型辅助工具</p>
				</div>
			</div>
		</div> -->
        <!-- 系统功能 -->
        <div class="xitonggongneng">
            <div class="inner">
                <h5 class="dabiaoti">系统功能</h5>
                <div class="underline"></div>
                <div class="content">
                    <div class="xiangqingbox" v-for="(item, index) in xitonggongneng" :key="index">
                        <p class="titles">{{item.titles}}</p>
                        <p class="xiangqing">{{item.xiangqing}}</p>
                        <div class="arrow"></div>
                    </div>
                </div>
            </div>
        </div>
        <!-- 核心优势 -->
        <div class="hexinyoushi">
            <div class="inner">
                <h5 class="dabiaoti">核心优势</h5>
                <div class="underline"></div>
                <div class="content">
                    <div class="contentLeft">
                        <div class="imgBox">
                            <img src="/imgs/zoubanxiaoyuan/zhinenghulianwang.png" alt="" :class="activeImg ? 'active' : ''">
                        </div>
                        <p class="titles">智能互联技术助力移动办公</p>
                        <p class="xiangqing">系统引入智能穿戴设备进行考勤打卡，并自主研发移动办公系统 ，可让师生随时了解动态信息，实现移动教学办公。</p>
                    </div>
                    <div class="contentRight">
                        <div class="imgBox">
                            <img src="/imgs/zoubanxiaoyuan/duofangmiangongneng.png" alt="" :class="activeImg ? 'active' : ''">
                        </div>
                        <p class="titles">多方面功能辅助教学行政管理</p>
                        <p class="xiangqing">系统涵盖学生考勤、校内通知等多项功能，形成完备的行政管理 体系，减轻繁杂的工作量。</p>
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
.zoubanxiaoyuan {
    .inner {
        width: 1200px;
        margin: 0 auto;
    }
    .banner {
        width: 100%;
        font-size: 0px;
        img {
            width: 100%;
        }
    }
    // 大标题h5
    .dabiaoti {
        text-align: center;
        font-size: 24px;
        color: #156dfe;
        line-height: 24px;
        height: 24px;
        margin-bottom: 20px;
    }
    // 下方的横线
    .underline {
        width: 60px;
        height: 4px;
        margin: 0 auto;
        background-color: #156dfe;
        margin-bottom: 35px;
    }
    // 颠覆传统的教学管理模式
    .dianfuchuantong {
        padding-top: 60px;
        padding-bottom: 60px;
        // padding-bottom: 60px;
        .content {
            display: flex;
            .xiangqing {
                flex: 1;
                padding: 100px 43px 0px 43px;
                width: 314px;
                h6 {
                    font-size: 20px;
                    height: 46px;
                    line-height: 46px;
                    text-align: center;
                    color: #333333;
                }
                p {
                    font-size: 18px;
                    color: #666666;
                    line-height: 30px;
                }
            }
        }
    }
    // 系统简介
    .xitongjianjie {
        padding-top: 60px;
        padding-bottom: 60px;
        .content {
            padding: 40px 0px 35px 60px;
            height: 435px;
            background: url(/imgs/zoubanxiaoyuan/beijing1.png) no-repeat;
            background-size: 1200px 510px;
            .imgBox {
                width: 660px;
                height: 435px;
                border-radius: 10px;
                float: left;
                display: flex;
                justify-content: center;
                align-items: center;
                img {
                    width: 165px;
                    height: 108.75px;
                }
                .active {
                    width: 660px;
                    height: 435px;
                    border-radius: 10px;
                    transition: all 1s;
                }
            }
            img {
                width: 660px;
                height: 435px;
                border-radius: 10px;
                float: left;
            }
            p {
                padding: 165px 72.5px 0px 72.5px;
                width: 335px;
                font-size: 18px;
                line-height: 30px;
                color: #666666;
                float: left;
            }
        }
    }
    // 系统功能
    .xitonggongneng {
        padding-top: 60px;
        padding-bottom: 60px;
        background-color: #f6f7fb;
        .content {
            height: 430px;
            width: 1200px;
            position: relative;
            background: url(/imgs/zoubanxiaoyuan/xitonggongneng.png) no-repeat center center;
            .xiangqingbox {
                padding: 0px 20px;
                width: 324px;
                height: 114px;
                background-color: #ffffff;
                position: absolute;
                .arrow {
                    position: absolute;
                    width: 0px;
                    height: 0px;
                    border-style: solid;
                    border-width: 15px 20px 15px 20px;
                    border-color: transparent transparent transparent #ffffff;
                }
                .titles {
                    height: 44px;
                    line-height: 44px;
                    font-size: 18px;
                    color: #333333;
                }
                .xiangqing {
                    // line-height: ;
                    font-size: 16px;
                    color: #666666;
                }
                &:first-child {
                    left: 0px;
                    top: 0px;
                    .arrow {
                        right: -40px;
                        top: 50%;
                        margin-top: -15px;
                    }
                }
                &:nth-child(2) {
                    right: 0px;
                    top: 0px;
                    .arrow {
                        left: -40px;
                        top: 50%;
                        margin-top: -15px;
                        border-color: transparent #ffffff transparent transparent;
                    }
                }
                &:nth-child(3) {
                    left: 0px;
                    bottom: 0px;
                    .arrow {
                        right: -40px;
                        top: 50%;
                        margin-top: -15px;
                    }
                }
                &:last-child {
                    right: 0px;
                    bottom: 0px;
                    .arrow {
                        left: -40px;
                        top: 50%;
                        margin-top: -15px;
                        border-color: transparent #ffffff transparent transparent;
                    }
                }
            }
        }
    }
    // 核心优势
    .hexinyoushi {
        padding-top: 60px;
        padding-bottom: 60px;
        .content {
            height: 500px;
            width: 1200px;
            background-color: #ffffff;
            box-shadow: 0 0 20px rgba(176, 224, 251, .5);
            .contentLeft {
                padding: 40px 55px 30px 55px;
                width: 490px;
                height: 330px;
                float: left;
                // img {
                // 	width: 490px;
                // 	height: 330px;
                // }
                .imgBox {
                    width: 490px;
                    height: 330px;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    img {
                        width: 122.5px;
                        height: 82.5px;
                        opacity: 0;
                    }
                    .active {
                        width: 490px;
                        height: 330px;
                        border-radius: 5px;
                        opacity: 1;
                        transition: all 1.5s;
                    }
                }
                .titles {
                    height: 56px;
                    line-height: 56px;
                    font-size: 18px;
                    color: #333333;
                }
                .xiangqing {
                    font-size: 18px;
                    line-height: 30px;
                    color: #666666;
                }
            }
            .contentRight {
                .contentLeft;
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
            // 颠覆传统的教学管理模式
            dianfuchuantong: [{ tubiao: 'background:url(/imgs/zizhuzhaosheng/zhizhuzhaosheng.png) no-repeat center 0px; background-size: 110px 100px', titles: '智能排序，大幅度提高选科效率', xiangqing: '智能化系统，极大提升学生选课效率，避 免教师的重复性工作' }, { tubiao: 'background:url(/imgs/zizhuzhaosheng/geyuanxiao.png) no-repeat center 0px; background-size: 110px 100px', titles: '"走班制"将学生需求放在首位', xiangqing: '保证学生受到公平、平等的教学资源，同时 满足学生的个性需求 ' }, { tubiao: 'background:url(/imgs/zizhuzhaosheng/zizhaobaokao.png) no-repeat center 0px; background-size: 110px 100px', titles: '及时、灵活的做出选科调整', xiangqing: '支持后台调整选课结果，保障学校对选修课 程的管理效率 ' }],
            // 系统功能
            xitonggongneng: [{ titles: '连接智能设备，便捷管理学生考勤', xiangqing: '对接智能考勤设备，如电子班牌、刷卡机、 智能手环等，提供多样化的便捷考勤方式， 减少教师工作量' }, { titles: '线上预约教学场地，保障课程正常开展', xiangqing: '教师可根据课程安排，线上预约学校教室， 系统可自动公示，提升教师间的沟通效率' }, { titles: '发布校内通知，及时通报重要讯息', xiangqing: '教师可在系统内编辑并发布重要通知，精准抵达个人账号' }, { titles: '“移动微校园”办公系统，互联便捷办公', xiangqing: '教师可通过手机关注微信公众号，实 现线上管理，实时信息互联，便捷沟通' }],
            // 系统简介
            activeJianjie: false,
            // 核心优势
            activeImg: false
        }
    },
    mounted() {
        window.addEventListener('scroll', this.scrollTops)
    },
    methods: {
        scrollTops() {
            this.scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
            console.log(this.scrollTop)
            if (this.scrollTop > 600) {
                this.activeJianjie = true
            }
            if (this.scrollTop > 1300) {
                this.activeImg = true
            }
        }
    }
}
</script>