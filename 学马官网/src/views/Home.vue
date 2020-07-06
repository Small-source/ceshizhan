<template>
    <div class="home">
        <div class="banner" @mouseenter="clear()" @mouseleave="leave()">
            <div class="neirongBox">
                <img src="/imgs/home/bg/banner.png" alt="">
               <!--  <div :class="ennter ? 'imgBox':'unimgBox'" v-for="(item, index) in banner" :key="index" :style="bannerStyles[index]">
                    <img :src="item.url" alt="">
                </div> -->
            </div>
            <!-- <div class="btns">
                <div class="leftBtn Btn" @click="left1()">&lt;</div>
                <div class="rightBth Btn" @click="right1()">&gt;</div>
            </div> -->
           <!--  <div class="lis">
                <ul>
                    <li :class="idx == 1 ? 'yuandian':''" @mouseenter="anniu(1)" @mouseleave="unanniu()"></li>
                    <li :class="idx == 2 ? 'yuandian':''" @mouseenter="anniu(2)" @mouseleave="unanniu()"></li>
                    <li :class="idx == 3 ? 'yuandian':''" @mouseenter="anniu(3)" @mouseleave="unanniu()"></li>
                </ul>
            </div> -->
        </div>
        <!-- 口碑 -->
        <div class="public_praise">
            <div class="inner">
                <h5 class="top_title">— 多年教育经验成就行业口碑 —</h5>
                <ul class="lis">
                    <li>
                        <p>将近<span>10</span>年</p>
                        <p>的发展</p>
                    </li>
                     <li>
                        <p>覆盖<span>20</span>个</p>
                        <p>省份</p>
                    </li>
                     <li>
                        <p><span>300+</span>人</p>
                        <p>服务团队</p>
                    </li>
                     <li>
                        <p>辅导<span>10000+</span>名</p>
                        <p>中学生</p>
                    </li>
                </ul>
            </div>
        </div> 
        <!-- 生涯测评系统 -->
        <div class="career_assessment">
            <div class="inner">
                <h5 class="top_title">生涯测评系统</h5>
                <div class="content">
                    <div class="main_box">
                        <div class="substance_box" v-for="(item, index) in career_assessment" :key="index">
                            <p class="title">{{item.title}}</p>
                            <p class="detail">{{item.detail}}</p>
                        </div>
                        <div class="btn_box">
                            <div class="btn_tiyan btn"><a  href="http://www.xuematech.com" target="_blank">立即体验</a></div>
                            <div class="btn_jieshao btn" @click="$router.push('/shengyaceping')">功能介绍</div>
                        </div>
                    </div>
                    <div class="img_box">
                        <!-- <img src="/imgs/home/bg/icon_1.png" alt=""> -->
                    </div>
                </div>
            </div>
        </div> 
        <!-- 选科决策系统 -->
        <div class="new_entrance">
            <div class="inner">
                <h5 class="top_title">选科决策系统</h5>
                <div class="content">
                    <div class="img_box">
                        <!-- <img src="/imgs/home/bg/icon_2.png" alt="新高考选科"> -->
                    </div>
                    <div class="main_box">
                        <div class="substance_box" v-for="(item, index) in new_entrance" :key="index">
                            <p class="title">{{item.title}}</p>
                            <p class="detail">{{item.detail}}</p>
                        </div>
                        <div class="btn_box">
                            <div class="btn_tiyan btn"><a  href="http://www.xuematech.com" target="_blank">立即体验</a></div>
                            <div class="btn_jieshao btn" @click="$router.push('/xuankejuece')">功能介绍</div>
                        </div>
                    </div>

                </div>
            </div>
        </div>   
        <!-- 综合素质评价系统 -->
        <div class="career_development">
            <div class="inner">
                <h5 class="top_title">综合素质评价系统</h5>
                <div class="content">
                    <div class="main_box">
                        <div class="substance_box" v-for="(item, index) in career_development" :key="index">
                            <p class="title">{{item.title}}</p>
                            <p class="detail">{{item.detail}}</p>
                        </div>
                        <div class="btn_box">
                            <div class="btn_tiyan btn"><a href="http://www.xuematech.com" target="_blank">立即体验</a></div>
                            <div class="btn_jieshao btn" @click="$router.push('/zonghesuzhi')">功能介绍</div>
                        </div>
                    </div>
                    <div class="img_box">
                        <!-- <img src="/imgs/home/bg/icon_3.png" alt="生涯发展管理系统"> -->
                    </div>
                </div>
            </div>
        </div>
        <!-- 志愿填报 -->
        <div class="voluntary_reporting">
            <div class="inner">
                <h5 class="top_title">志愿填报系统</h5>
                <div class="content">
                    <div class="img_box">
                        <!-- <img src="/imgs/home/bg/icon_4.png" alt="志愿填报"> -->
                    </div>
                    <div class="main_box">
                        <div class="substance_box" v-for="(item, index) in voluntary_reporting" :key="index">
                            <p class="title">{{item.title}}</p>
                            <p class="detail">{{item.detail}}</p>
                        </div>
                        <div class="btn_box">
                            <div class="btn_tiyan btn"><a  href="http://www.xuematech.com" target="_blank">立即体验</a></div>
                            <div class="btn_jieshao btn" @click="$router.push('/gaokaozhiyuan')">功能介绍</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="use_xuema">
            <div class="inner">
                <h5 class="top_title">我们的用户</h5>
                <p class="detail">已为全国12个省，30个市多地区高中学校提供生涯教育服务</p>
                <div class="content">
                    <ul class="lis">
                        <li  v-for="(item, index) in use_xuema" :key="index">
                            <img :src="item.url" alt="">
                            <p class="title">{{item.title}}</p>
                        </li>
                    </ul>
                </div>
            </div>
        </div>

        <div class="partner">
            <div class="inner">
                <h5 class="top_title">学术合作</h5>
                <ul class="lis">
                    <li><img src="/imgs/home/partner/icon_qinghua.png" alt=""></li>
                    <li><img src="/imgs/home/partner/icon_zhongguokexueyuan.png" alt=""></li>
                    <li><img src="/imgs/home/partner/icon_beijingshifan.png" alt=""></li>
                    <li><img src="/imgs/home/partner/icon_zhongguobiaozhunhua.png" alt=""></li>
                    <li><img src="/imgs/home/partner/icon_beijingwaiguoyu.png" alt=""></li>
                    <li><img src="/imgs/home/partner/icon_xinlangjiaoyu.png" alt=""></li>
                    <li><img src="/imgs/home/partner/icon_jinritoutiao.png" alt=""></li>
                    <li><img src="/imgs/home/partner/icon_xuema.png" alt=""></li>
                    <li><img src="/imgs/home/partner/icon_shijiedaxue.png" alt=""></li>
                    <li><img src="/imgs/home/partner/icon_pac.png" alt=""></li>
                </ul>
            </div>
        </div> 
    </div>
</template>
<style type="text/css" lang="less" scoped>
* {
    list-style: none;
    text-decoration: none;
}

.home {
    .inner {
        width: 1200px;
        margin: 0 auto;
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
        margin-bottom: 40px;
    }

    // 顶部通栏大banner
    .banner {
        width: 100%;
        font-size: 0px;
        position: relative;
        line-height: 0px;

        .neirongBox {
            position: relative;
            overflow: hidden;
            font-size: 0px;

            img {
                width: 100%;
                font-size: 0px;
            }

            .imgBox {
                width: 100%;
                font-size: 0px;
                position: absolute;
                transition: all 1.5s ease;
                z-index: 10;
                img {
                    width: 100%;
                }
            }

            .unimgBox {
                width: 100%;
                // height: 100%;
                font-size: 0px;
                position: absolute;
                // transition: all 1.5s ease;
                z-index: 10;
                img {
                    width: 100%;
                }
            }
        }

        &:hover .btns {
            display: block;
        }

        .btns {
            position: absolute;
            width: 100%;
            height: 70px;
            z-index: 2000;
            top: 50%;
            color: red;
            margin-top: -35px;
            line-height: 70px;
            text-align: center;
            display: none;
            .Btn {
                width: 70px;
                height: 70px;
                // background-color: red;
                cursor: pointer;
                border-radius: 50%;
                position: absolute;
                color: #f2f2f2;
                background: rgba(51, 51, 51, .3);
                font-size: 50px;
                top: 0px;
                z-index: 10000;

                span {
                    width: 50px;
                    height: 50px;
                }
            }

            .leftBtn {
                left: 50px;
            }

            .rightBth {
                right: 50px;
            }
        }

        .lis {
            position: absolute;
            width: 144px;
            height: 30px;
            border-radius: 20px;
            // background-color: red;
            left: 50%;
            bottom: 30px;
            z-index: 2000;
            margin-left: -72px;
            padding: 5px;
            li {
                width: 34px;
                height: 12px;
                border-radius: 6px;
                margin-right: 20px;
                float: left;
                font-size: 14px;
                line-height: 30px;
                text-align: center;
                background: rgba(51, 51, 51, .3);
                color: #fff;

                &:last-child {
                    margin-right: 0px;
                }

            }

            .yuandian {
                background-color: #fff;
                color: #000;

            }

        }
    }
    .inner {
        .top_title {
            font-size: 27px;
            color: #333;
            text-align: center;
            font-weight: 600;
            padding-top: 75px;
            line-height: 32px;
            letter-spacing: 1.5px;
        }
        .content {
            .main_box {
                float: left;
                width: 500px;
                .substance_box {
                    margin-bottom: 22px;
                    .title {
                        font-size: 16px;
                        color: #000;
                        line-height: 30px;
                        font-weight: 600;
                        letter-spacing: 1px;
                    }
                    .detail {
                        font-size: 14px;
                        color: #666;
                        line-height: 33px;
                    }
                }
                .btn_box {
                    padding-top: 15px;
                    height: 44px;
                    .btn {
                        font-size: 16px;
                        width: 138px;
                        height: 42px;
                        text-align: center;
                        line-height: 42px;
                        border: 1px solid #127de1;
                        border-radius: 2px;
                        float: left;
                        margin-right: 20px;
                        cursor: pointer;
                    }
                    .btn_tiyan {
                        background-color: #fff;
                        color: #127de1;
                        a {
                            display: block;
                            width: 100%;
                            height: 100%;
                            color: #127de1;
                        }
                    }
                    .btn_jieshao {
                        background-color: #127de1;
                        color: #fff;
                    }

                }
            }
            .img_box {
                width: 700px;
                height: 500px;
                float: left;
            }
        }
    }
    .career_assessment {
        height: 668px;
        .main_box {
            padding-top: 45px;
        }
        .img_box {
            background: url(/imgs/home/bg/icon_1.png) no-repeat 40px center;
        }
    }
    .new_entrance {
        height: 712px;
        background-color: #f6f8fb;
        .content {
            padding-top: 50px;
            .img_box {
                background: url(/imgs/home/bg/icon_2.png) no-repeat -40px center;
            }
        }
               
    }
    .career_development {
        height: 665px;
        .content {
            padding-top: 20px;
            .main_box {
                padding-top: 25px;
            }
            .img_box {
                background: url(/imgs/home/bg/icon_3.png) no-repeat 130px center;
            }
        }
    }
    .voluntary_reporting {
        height: 690px;
        background-color: #f6f8fb;
        .content {
            padding-top: 50px;
            .img_box {
                background: url(/imgs/home/bg/icon_4.png) no-repeat -80px center;
            }
        }

    }   
    .public_praise {
        height:252px;
        color: #333;
        .inner {
            position: relative;
            background-color: #fff;
            margin-top: -40px;
            border-radius: 2px;
            z-index: 10000000;
            box-shadow: 0 0 6px #dedede;
            height: 252px;
        }
        .top_title {
            color: #333;
            padding-top: 35px;
        }
        .lis {
            display: flex;
            padding-top: 45px;
            padding-left: 52px;
            justify-content: space-between;
            li {
                width: 290px;
                p {
                    line-height: 48px; 
                    font-size: 22px;
                    span {
                        font-size: 40px;
                        color: #4396f7;
                        font-weight: 500;
                    } 
                }
                
                
            }
        }
    }
    .use_xuema {
        background-color: #fff;
        height: 824px;
        .top_title {
            padding-top: 60px;
            margin-bottom: 55px;
        }
        .detail {
            font-size: 18px;
            color: #333;
            margin-bottom: 50px;
            text-align: center;
        }
        .lis {
            // overflow: hidden;
            height: 576px;
            li {
                width: 284px;
                // box-shadow: 0px 0px 6px rgba(235,235,235,.65);
                box-shadow: 0 0 6px #dedede;
                margin-right: 20px;
                float: left;
                color: #333;
                margin-bottom: 24px;
                &:nth-child(4) {
                    margin-right: 0px;
                }
                &:last-child {
                    margin-right: 0px;
                }
                .title {
                    line-height: 70px;
                    text-align: center;
                    font-size: 17px;
                }
            }
        }
    }
    .partner {
        height: 400px;
        background-color: #f6f8fb;
        .top_title {
            padding-top: 60px;
            margin-bottom: 60px;
        }
        ul {
            width: 1210px;
            li {
                width: 230px;
                height: 80px;
                background-color: #fff;
                cursor: pointer;
                float: left;
                margin-right: 12px;
                margin-bottom: 18px;
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
            banner: [
                { url: '/imgs/home/bg/banner.png', idx: 0 },
                { url: '/imgs/home/bg/banner.png', idx: 1 },
                { url: '/imgs/home/bg/banner.png', idx: 2 }
            ],
            styles: [
                { width: '872px', height: '420px', left: '-872px', top: '0px', zIndex: 0, position: 'absolute' },
                { width: '872px', height: '420px', left: '0px', top: '0px', zIndex: 1000, position: 'absolute' },
                { width: '872px', height: '420px', left: '872px', top: '0px', zIndex: 0, position: 'absolute' }
            ],
            bannerStyles: [
                { width: '100%', left: '-100%', top: '0px', zIndex: 0, position: 'absolute' },
                { width: '100%', left: '0px', top: '0px', zIndex: 1000, position: 'absolute' },
                { width: '100%', left: '100%', top: '0px', zIndex: 0, position: 'absolute' }
            ],
            timer: '',
            timer1: '',
            // 顶部banner初始值为idx1
            idx: 1,
            // 改变类名
            ennter: true,
            // 生涯测评系统
            career_assessment: [
                { title: '多维的测评模型', detail: '系统中的认知潜能评价模型和职业定位结构模型申请了两项国家发明专利' },
                { title: '科学的测量方法', detail: '采用经典的心理学实验、本土化的经典问卷、标准化的测试流程' },
                { title: '权威的职业分类', detail: '有效保证职业类型的本土化特征和时代特征' },
                { title: '专业的报告解读', detail: '解读测评报告，多维度分析个体潜能特征，帮助学生认知自我' },
            ],
            // 新高考选科
            new_entrance: [
                { title: '专业的选科流程', detail: '基于生涯规划理念进行选科，测评定位目标专业，专业定位科目 ' },
                { title: '完备的数据支持', detail: '具有完备的学校、专业、职业等数据，满足多种需求' },
                { title: '全面的选科方式', detail: '系统支持6选3、7选3、3+1+2等多种选科方式' },
                { title: '可靠的选科结果', detail: '系统综合学生决策加权的结果，学科可报专业覆盖率等数据为学生提供选科建议，选科结果可靠' },
            ],
            // 生涯发展管理系统
            career_development: [
                { title: '三年全程跟踪记录', detail: '高中三年实时跟踪学生每个阶段，提供全方位服务' },
                { title: '量身定制解决方案', detail: '为每个学生打造合适的升学方案，解决升学问题' },
                { title: '快速了解掌握外部信息', detail: '全面了解院校、专业、职业等信息，方便学生查询' },
                { title: '帮助学生调整自我状态', detail: '系统数据分析给出过程激励分析，帮助学生调整自我状态' },
            ],
            // 志愿填报
            voluntary_reporting: [
                { title: '覆盖精准的院校数据', detail: '系统涵盖教育考试院官方数据，权威精准' },
                { title: '科学的数据结果分析', detail: '推荐适合学生的专业和学校，帮助学生科学填报' },
                { title: '提供快速查询的功能', detail: '学生可查询大学、专业分数线等信息，方便快捷' },
                { title: '满足学生的多种需求', detail: '满足院校优先、专业优先、自主填报等多种填报需求' },
            ],
            use_xuema: [
                { url: '/imgs/home/use_xuema/icon_longnan.png', title: '甘肃省陇南市一中' },
                { url: '/imgs/home/use_xuema/icon_ronghua.png', title: '湖南省岳阳市华容县第二中学' },
                { url: '/imgs/home/use_xuema/icon_tianxin.png', title: '湖南省长沙市天心区第一中学' },
                { url: '/imgs/home/use_xuema/icon_liaochengdiyizhongxue.png', title: '山东聊城第一中学' },
                { url: '/imgs/home/use_xuema/icon_pingyuanxian.png', title: '山东省平原县第一中学' },
                { url: '/imgs/home/use_xuema/icon_shandongshiyan.png', title: '山东省实验中学' },
                { url: '/imgs/home/use_xuema/icon_sichuanmianyang.png', title: '四川省绵阳市南山中学实验学校' },
                { url: '/imgs/home/use_xuema/icon_yunnanluxi.png', title: '云南泸西县第一中学' }
            ]


        }
    },
    mounted() {
        window.addEventListener('scroll', this.scrollTops)
    },
    methods: {
        scrollTops() {
            this.scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
            // console.log(this.scrollTop)
            if(this.scrollTop > 60) {
                this.activeQiqiu = true
            }
            if(this.scrollTop > 725) {
                this.activeZhuying = true
            }
            if(this.scrollTop > 1370) {
                this.activeHezuo = true
            }
            if(this.scrollTop > 2100) {
                this.activeJingdian= true
            }
        },
        play() {
            // this.timer = setInterval(this.right, 2000);
            this.timer1 = setInterval(this.right1, 1500);
        },
        // 清除定时器
        clear() {
            // clearInterval(this.timer);
            clearInterval(this.timer1);
        },

        // banner小圆点
        anniu(num) {
            var nums = num - this.idx;
            if (nums > 0) {
                this.ennter = false;
                var arr1 = this.bannerStyles.splice(0, nums)
                this.bannerStyles = this.bannerStyles.concat(arr1);
                this.idx = num;
            } else if (nums < 0) {
                this.ennter = false;
                var nums1 = nums
                var arr2 = this.bannerStyles.splice(nums1);
                this.bannerStyles = arr2.concat(this.bannerStyles)
                this.idx = num;
            } else {
                return;
            }
        },
        unanniu() {
            this.ennter = true;
        },
        // 鼠标离开开启定时器
        leave() {
            // clearInterval(this.timer);
            clearInterval(this.timer1);
            this.play();
        },
        right1() {
            var me = this;
            if (this.lock === false) {
                return;
            }
            this.idx++;
            if (this.idx > 3) {
                this.idx = 1;
            }
            this.lock = false;
            this.bannerStyles.push(this.bannerStyles.shift());
            setTimeout(function() {
                me.lock = true;
            }, 1500);
        },
    },
    created() {
        this.play();
    }
}
</script>