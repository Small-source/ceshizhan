<template>
    <div class="beijingtisheng">
        <!-- 通栏大banner -->
        <div class="banner">
            <img src="/imgs/beijingtisheng/beijingtishengbanner.jpg" alt="">
        </div>
        <!-- 背景提升知多少 -->
        <div class="tisheng">
            <div class="inner">
                <h5 class="dabiaoti"> 背景提升知多少 </h5>
                <div class="underline"></div>
                <div class="content">
                    <div class="leftbox">
                        <img src="/imgs/beijingtisheng/beijingtisheng.png" alt="">
                        <div class="xiangqingbox">
                            <p class="title"><span>★</span>什么是背景提升? </p>
                            <p class="xiangqing">背景提升是指在常规校园学习之外的课外活动和学术实践积累，是高考升学中除书面成绩之外，区别于其他竞争者的、充分利用自身能力优势的学习过程</p>
                        </div>
                    </div>
                    <div class="rightbox">
                        <img src="/imgs/beijingtisheng/xuesheng.jpg" alt="">
                        <div class="xiangqingbox">
                            <p class="title"><span>★</span>背景提升的重要性！</p>
                            <div class="xiangqing">
                                <p><span>◇</span> 提升综合素质的重要途径，提升专<br /> &nbsp;&nbsp;&nbsp;&nbsp;业素养·锻炼思维能力·拓展人际关<br />&nbsp;&nbsp;&nbsp;&nbsp;系·提升协作能力 </p>
                                <p><span>◇</span> 考取名校的绿色通道自主招生/综<br />&nbsp;&nbsp;&nbsp;&nbsp;合素质评价等升学途径，多一种<br />&nbsp;&nbsp;&nbsp;&nbsp;选择，与名校更进一步 </p>
                                <p><span>◇</span> 获取职业能力的宝贵实践多种实践<br />&nbsp;&nbsp;&nbsp;&nbsp;活动·深刻认知自我·提前规划职业<br />&nbsp;&nbsp;&nbsp;&nbsp;生涯</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- 服务内容 -->
        <div class="fuwuneirong">
            <div class="inner">
                <h5 class="dabiaoti">服务内容</h5>
                <div class="underline"></div>
                <div class="content">
                    <ul @mouseenter="enter()" @mouseleave="leave()">
                        <li v-for="(item, index) in fuwuneirong" :key="index" :style="styles[index]">
                            <div :class="index === idx ? 'active': 'neirongBox'" @click="go(index)">
                                <p class="num">{{item.num}}</p>
                                <p class="title">{{item.titles}}</p>
                                <p class="zongjie">{{item.zongjie}}</p>
                                <p class="xiangqing1">{{item.xiangqing1}}</p>
                                <p class="xiangqing2">{{item.xiangqing2}}</p>
                                <p class="xiangqing3">{{item.xiangqing3}}</p>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        <!-- 专业保证 -->
        <div class="zhuanyebaozheng">
            <div class="inner">
                <h5 class="dabiaoti">专业保证</h5>
                <div class="underline"></div>
                <div class="content">
                    <div class="neirongbox" v-for="(item, index) in zhuanyebaozheng" :key="index">
                        <div class="yuanbox">
                            <div class="yuan" :style="item.tubiao"></div>
                        </div>
                        <p class="xiangqing">{{item.xiangqing}}</p>
                    </div>
                </div>
            </div>
        </div>
        <!-- 强大的教研团队 -->
        <div class="jiaoyantuandui">
            <div class="inner">
                <h5 class="dabiaoti"> 强大的教研团队 </h5>
                <div class="underline"></div>
                <div class="content">
                    <div class="neirongbox" v-for="(item, index) in teacher" :key="index">
                        <div class="left">
                            <img :src="item.imgs" alt="">
                        </div>
                        <div class="right">
                            <p class="title">{{item.titles}}</p>
                            <p class="xiangqing" v-html="item.xiangqing"></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- 遇见学马成就更好的自己 -->
        <!-- <div class="achieveoneself">
	    	<div class="inner">
	    		<h5 class="dabiaoti">
	    			遇见学马，成就更好的自己
	    		</h5>
	    		<div class="underline"></div>
				<div class="content">
					<div class="topbox">
						<div class="photobox topphoto">
							<div class="top">
							</div>
							<div class="foot"></div>
							<img src="/imgs/lunbotu/2.jpg" alt="">
						</div>
						<div class="photobox topphoto">
							<div class="top"></div>
							<div class="foot"></div>
							<img src="/imgs/lunbotu/2.jpg" alt="">
						</div>
						<div class="photobox topphoto">
							<div class="top"></div>
							<div class="foot"></div>
							<img src="/imgs/lunbotu/2.jpg" alt="">
						</div>
						<div class="photobox topphoto">
							<div class="top"></div>
							<div class="foot"></div>
							<img src="/imgs/lunbotu/2.jpg" alt="">
						</div>
					</div>
					<div class="photoboxft1">
							<div class="top"></div>
							<div class="foot"></div>
							<img src="/imgs/lunbotu/2.jpg" alt="">
					</div>
					<div class="photoboxft2">
							<div class="top"></div>
							<div class="foot"></div>
							<img src="/imgs/lunbotu/2.jpg" alt="">
					</div>
					<div class="photoboxft3">
							<div class="top"></div>
							<div class="foot"></div>
							<img src="/imgs/lunbotu/2.jpg" alt="">
					</div>
				</div>
	    	</div>
	    </div> -->
    </div>
</template>
<style type="text/css" lang="less" scoped>
.beijingtisheng {
    font-size: 16px;
    color: #666666;
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
    // 背景提升知多少
    .tisheng {
        padding: 60px 0px;
        .content {
            height: 304px;
            .leftbox {
                float: left;
                height: 304px;
                width: 567px;
                margin-right: 66px;
                img {
                    width: 247px;
                    height: 304px;
                    float: left;
                    border-radius: 5px;
                }
                .xiangqingbox {
                    padding: 0px 30px;
                    width: 260px;
                    height: 304px;
                    float: left;
                    .title {
                        color: #156def;
                        line-height: 45px;
                        width: 220px;
                        height: 45px;
                        font-size: 18px;
                        span {
                            color: #75c2f0;
                            font-size: 1.5em;
                            margin-right: 30px;
                        }
                    }
                    .xiangqing {
                        padding-top: 20px;
                        // line-height: 20px;
                        height: 239px;
                        p {
                            height: 66px;
                            margin-bottom: 15px;
                            span {
                                font-size: 1.5em;
                            }
                        }
                    }
                }
            }
            .rightbox {
                .leftbox;
                margin-right: 0px;
            }
        }
    }
    // 服务内容
    .fuwuneirong {
        padding: 60px 0px;
        background-color: #f6f7fb;
        .content {
            padding-top: 60px;
            ul {
                height: 460px;
                width: 1200px;
                position: relative;
                overflow: hidden;
                li {
                    transition: all 1s;
                    background-color: #fff;
                    font-size: 16px;
                    // padding: 20px;
                    box-sizing: border-box;
                    border-radius: 5px;
                    overflow: hidden;
                    div {
                        box-sizing: border-box;
                        width: 100%;
                        height: 100%;
                        padding: 20px;
                    }
                    .num {
                        font-size: 6.25em;
                        line-height: 110px;
                        text-align: center;
                        color: #80c7f2;
                    }
                    .title {
                        line-height: 40px;
                        font-size: 20px;
                        text-align: center;
                    }
                    .zongjie {
                        // height: 70px;
                    }
                    p {
                        margin-top: 5px;
                        line-height: 24px;
                    }
                }
                .active {
                    .num {
                        color: #fff;
                    }
                    z-index: 10000;
                    background: -webkit-linear-gradient(#97d4f8, #4aaae7);
                    background: -o-linear-gradient(#97d4f8, #4aaae7);
                    background: linear-gradient(#97d4f8, #4aaae7);
                }
            }
        }
    }
    // 专业保证
    .zhuanyebaozheng {
        padding: 60px 0px;
        background-color: #53b2f2;
        .dabiaoti {
            color: #ffffff;
        }
        .underline {
            background-color: #ffffff;
        }
        .content {
            height: 254px;
            .neirongbox {
                width: 190px;
                height: 250px;
                border: 2px solid #ffffff;
                border-radius: 5px;
                float: left;
                margin-right: 141px;
                &:last-child {
                    margin-right: 0px;
                }
                .yuanbox {
                    height: 144px;
                    overflow: hidden;
                    .yuan {
                        width: 98px;
                        height: 98px;
                        border: 2px solid #ffffff;
                        border-radius: 50%;
                        margin: 0 auto;
                        margin-top: 22px;
                        background: url(/imgs/tubiao/shu02.png) no-repeat center center;
                        background-size: 85px 85px;
                    }
                }
                p {
                    padding: 0px 30px;
                    color: #ffffff;
                }
            }
        }
    }
    // 强大的教研团队
    .jiaoyantuandui {
        padding-top: 60px;
        .content {
            height: 580px;
            .neirongbox {
                float: left;
                width: 300px;
                height: 140px;
                padding: 20px 30px 0px 10px;
                margin-right: 60px;
                margin-bottom: 26px;
                box-shadow: 0 0 20px rgba(176, 224, 251, .5);
                &:nth-child(3),
                &:nth-child(6),
                &:nth-child(9) {
                    margin-right: 0px;
                }
                .left {
                    width: 54px;
                    height: 140px;
                    float: left;
                    img {
                        width: 80px;
                        height: 80px;
                        border-radius: 50%;
                    }
                }
                .right {
                    margin-left: 35px;
                    width: 211px;
                    float: left;
                    .title {
                        height: 40px;
                        line-height: 40px;
                        font-size: 18px;
                        color: #333333;
                    }
                    .xiangqing {
                        color: #666666;
                        font-size: 16px;
                    }
                }
            }
        }
    }
    // 遇见学马成就更好的自己
    .achieveoneself {
        padding: 60px 0px;
        height: 630px;
        background-color: #f6f7fb;
        .content {
            padding-top: 30px;
            height: 510px;
            position: relative;
            .topphoto {
                float: left;
                margin-right: 80px;
                &:last-child {
                    margin-right: 0px;
                }
            }
            .photobox {
                width: 240px;
                height: 280px;
                position: relative;
                overflow: hidden;
                // 上三角
                .top {
                    position: absolute;
                    width: 0px;
                    height: 0px;
                    left: 0px;
                    top: 0px;
                    border-width: 0px 120px 65px 120px;
                    border-style: solid;
                    border-color: #f6f7fb #f6f7fb transparent #f6f7fb;
                }
                // 下三角
                .foot {
                    position: absolute;
                    width: 0px;
                    height: 0px;
                    left: 0px;
                    bottom: 0px;
                    border-width: 65px 120px 0px 120px;
                    border-style: solid;
                    border-color: transparent #f6f7fb #f6f7fb #f6f7fb;
                }
                img {
                    width: 240px;
                    height: 280px;
                }
            }
            .photoboxft1 {
                .photobox;
                position: absolute;
                left: 160px;
                top: 288px;
            }
            .photoboxft2 {
                .photobox;
                position: absolute;
                left: 480px;
                top: 288px;
            }
            .photoboxft3 {
                .photobox;
                position: absolute;
                left: 802px;
                top: 288px;
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
            fuwuneirong: [
            	
            	// { num: '06', titles: '学科专项提升', zongjie: '以高中知识线为基础，结合自招院校命题特点，对学科知识进行拔高，提升专项', xiangqing1: '◇ 剖析高校自招综评命题特点及解题技巧', xiangqing2: '◇ 将自招综评考查重点与高考复习策略进行有效衔接', xiangqing3: '◇ 名校名师指导，高效提升成绩' },
            	{ num: '05', titles: '社会实践', zongjie: '根据学生的专业选择定向，对接社会实践基地，并安排社会实践活动，指导社会', xiangqing1: '◇ 增加对职业生涯的深入了解', xiangqing2: '◇ 提升团队协作能力和领导力等综合素质', xiangqing3: '◇ 增加研学经历，提升录取概率' }, 
            	
            	{ num: '04', titles: '文书撰写指导', zongjie: '搜集学生兴趣、学习、特长等相关信息，针对目标院校的招生风格，为学生进行', xiangqing1: '◇ 加深自我认知，提升文笔写作能力', xiangqing2: '◇ 归纳成长经历，塑造完美简历', xiangqing3: '◇ 展现自我风采，获得名校青睐' },
            	{ num: '03', titles: '', zongjie: '根据学生申请的院校，指导学生撰写论文，并帮助学生在省级/国家级/核心/EI期刊发表论文，使学生快速具备省级期刊文论发表能力', xiangqing1: '◇ 资深专业教师全程辅导', xiangqing2: '◇ 论文选题指导、论文质量把关', xiangqing3: '◇ 提升思辨能力，冲击科研奖项，叩响名校之门' }, 
            	{ num: '02', titles: '研究性学习营', zongjie: '通过3天2晚的学习讨论，指导学生进行课题研究、分享、撰写，形成研究性学习报告，并可获得中国人类工效学学会盖章认可。', xiangqing1: '◇ 与国内名校深度合作', xiangqing2: '◇ 开设相关专业及方向的研学营活动', xiangqing3: '◇ 帮助学生快速建立科研思维、取得研究成果、获得报考资格' }, 
            	{ num: '01', titles: '学科竞赛指导', zongjie: '根据学生的报告专业和学科特长推荐参加 高中省各项大赛（英语、数学、语文、数 理化等），并获得2—3个省级以上奖项。 ', xiangqing1: '◇ 把握前沿的赛事讯息', xiangqing2: '◇ 挖掘学生的强项学科和优势能力', xiangqing3: '◇ 国内资深教师辅导，助力取得好名次' }, 
            	{ num: '07', titles: '面试辅导', zongjie: '针对目标院校的面试内容、面试风格和学生自身特点，进行个性化一对一辅导演练，提升学生临场发挥水平，打造独特竞争力，直击心仪名校。', xiangqing1: '◇ 面试通识内容讲解，掌握面试基本素养', xiangqing2: '◇ 小班辅导，锤炼面试技巧', xiangqing3: '◇ 一对一模拟面试，提升录取概率' },
            	{ num: '06', titles: '学科专项提升', zongjie: '以高中知识线为基础，结合自招院校命题特点，对学科知识进行拔高，提升专项', xiangqing1: '◇ 剖析高校自招综评命题特点及解题技巧', xiangqing2: '◇ 将自招综评考查重点与高考复习策略进行有效衔接', xiangqing3: '◇ 名校名师指导，高效提升成绩' },
            	{ num: '05', titles: '社会实践', zongjie: '根据学生的专业选择定向，对接社会实践基地，并安排社会实践活动，指导社会', xiangqing1: '◇ 增加对职业生涯的深入了解', xiangqing2: '◇ 提升团队协作能力和领导力等综合素质', xiangqing3: '◇ 增加研学经历，提升录取概率' }, 
            	{ num: '04', titles: '文书撰写指导', zongjie: '搜集学生兴趣、学习、特长等相关信息，针对目标院校的招生风格，为学生进行', xiangqing1: '◇ 加深自我认知，提升文笔写作能力', xiangqing2: '◇ 归纳成长经历，塑造完美简历', xiangqing3: '◇ 展现自我风采，获得名校青睐' },
            	{ num: '03', titles: '', zongjie: '根据学生申请的院校，指导学生撰写论文，并帮助学生在省级/国家级/核心/EI期刊发表论文，使学生快速具备省级期刊文论发表能力。', xiangqing1: '◇ 资深专业教师全程辅导', xiangqing2: '◇ 论文选题指导、论文质量把关', xiangqing3: '◇ 提升思辨能力，冲击科研奖项，叩响名校之门' }, 
            	{ num: '02', titles: '研究性学习营', zongjie: '通过3天2晚的学习讨论，指导学生进行课题研究、分享、撰写，形成研究性学习报告，并可获得中国人类工效学学会盖章认可。', xiangqing1: '◇ 与国内名校深度合作', xiangqing2: '◇ 开设相关专业及方向的研学营活动', xiangqing3: '◇ 帮助学生快速建立科研思维、取得研究成果、获得报考资格' }, 
            	{ num: '01', titles: '学科竞赛指导', zongjie: '根据学生的报告专业和学科特长推荐参加 高中省各项大赛（英语、数学、语文、数 理化等），并获得2—3个省级以上奖项。 ', xiangqing1: '◇ 把握前沿的赛事讯息', xiangqing2: '◇ 挖掘学生的强项学科和优势能力', xiangqing3: '◇ 国内资深教师辅导，助力取得好名次' }, 
            	{ num: '07', titles: '面试辅导', zongjie: '针对目标院校的面试内容、面试风格和学生自身特点，进行个性化一对一辅导演练，提升学生临场发挥水平，打造独特竞争力，直击心仪名校。', xiangqing1: '◇ 面试通识内容讲解，掌握面试基本素养', xiangqing2: '◇ 小班辅导，锤炼面试技巧', xiangqing3: '◇ 一对一模拟面试，提升录取概率' },
            	{ num: '06', titles: '学科专项提升', zongjie: '以高中知识线为基础，结合自招院校命题特点，对学科知识进行拔高，提升专项', xiangqing1: '◇ 剖析高校自招综评命题特点及解题技巧', xiangqing2: '◇ 将自招综评考查重点与高考复习策略进行有效衔接', xiangqing3: '◇ 名校名师指导，高效提升成绩' },
                ],
            zhuanyebaozheng: [{ xiangqing: '教学质量有保证, 初审通过率到95%以上', tubiao: 'background:url(/imgs/beijingtisheng/laoshiguanli-2.png) no-repeat center center' }, { xiangqing: '资深名师指导+ 学生体验参与, 强化学习效果, 提升速度看得见', tubiao: 'background:url(/imgs/beijingtisheng/wenjian.png) no-repeat center center' }, { xiangqing: '全方位辅导机制, 更全面地提升学生的综合素质', tubiao: 'background:url(/imgs/beijingtisheng/fudao.png) no-repeat center center' }, { xiangqing: '全程跟踪辅导, 良好的过程, 是成功的开始', tubiao: 'background:url(/imgs/beijingtisheng/genzongfudao.png) no-repeat center center' }],
            jiaoyantuandui: [{ title: '黄彬', xiangqing: 'PAI生涯评测系统开发者<br/>中国科学院大学心理研究所研究生<br/>研究方向社会心理学' }, { title: '徐耀亚', xiangqing: '北京大学博士<br/>研究方向：遥感图像识别，学科背景遥感学' }, { title: '孙明欢', xiangqing: '吉林大学硕士<br/>汉语国际教育' }, { title: '高宇', xiangqing: '北京师范大学硕士研究生<br/>主持中国科协研究生科普能力提升项目<br/>参与基础教育信息化建设教育' }, { title: '王艺彤', xiangqing: '' }, { title: '金波', xiangqing: '技术研发与教育研发双引擎研 发团队，拥有多项国家发明专 利产品 拷贝' }, { title: '肖汉俊', xiangqing: '技术研发与教育研发双引擎研 发团队，拥有多项国家发明专 利产品 拷贝' }, { title: '张宇博', xiangqing: '技术研发与教育研发双引擎研 发团队，拥有多项国家发明专 利产品 拷贝' }, { title: '张老师', xiangqing: '技术研发与教育研发双引擎研 发团队，拥有多项国家发明专 利产品 拷贝' }],
            teacher: [{ imgs: '/imgs/beijingtisheng/huangbin.png', titles: '黄彬', xiangqing: 'PAI生涯评测系统开发者<br/>中国科学院大学心理研究所研究生<br/>研究方向：社会心理学' }, { imgs: '/imgs/beijingtisheng/xuyaoya.png', titles: '徐耀亚', xiangqing: '北京大学博士<br/>研究方向：遥感图像识别，学科背景遥感学' }, { imgs: '/imgs/beijingtisheng/sunminghuan.png', titles: '孙明欢', xiangqing: '吉林大学硕士<br/>研究方向：汉语国际教育' }, { imgs: '/imgs/beijingtisheng/gaoyu.png', titles: '高宇', xiangqing: '北京师范大学硕士研究生<br/>主持中国科协研究生科普能力提升项目<br/>参与基础教育信息化建设项目' }, { imgs: '/imgs/beijingtisheng/wangyitong.png', titles: '王艺彤', xiangqing: '北京师范大学心理学本科<br/>研究方向:生涯教育' }, { imgs: '/imgs/beijingtisheng/jinbo.png', titles: '金波', xiangqing: '清华大学环境学院国际班<br/>2015年以712分湖南省第二名的成绩考入清华大学' }, { imgs: '/imgs/beijingtisheng/linpeng.png', titles: '林鹏', xiangqing: '清华大学机械工程学院学士<br/>英国华威大学、伦敦大学国王学院博士全奖录取' }, { imgs: '/imgs/beijingtisheng/xiaojunhan.png', titles: '肖汉俊', xiangqing: '奥林匹克竟赛金牌，保送清华计算机系<br/>研究生阶段获宾タ法尼亚大学计算机系全奖录取<br' }, { imgs: '/imgs/beijingtisheng/zhangyubo.png', titles: '张宇博', xiangqing: '清华大学博士 <br/>研究方向：认知心理学、用户体验' },
                // { imgs: '/imgs/lunbotu/0.jpg', titles: '张老师', xiangqing: '技术研发与教育研发双引擎研 发团队，拥有多项国家发明专 利产品' }
            ],
            styles: [
            	{ width: '300px', height: '350px', left: '-300px', top: '70px', zIndex: 0, position: 'absolute', color: '#333333' },
             	{ width: '300px', height: '390px', left: '0px', top: '70px', zIndex: 200, position: 'absolute', color: '#333333' }, 
             	{ width: '320px', height: '410px', left: '120px', top: '50px', zIndex: 500, position: 'absolute', color: '#333333' }, 
             	{ width: '345px', height: '430px', left: '265px', top: '30px', zIndex: 1000, position: 'absolute', color: '#333333' }, 
             	{ width: '375px', height: '460px', left: '413px', top: '0px', zIndex: 1001, position: 'absolute', color: '#fff' }, 
             	{ width: '345px', height: '430px', left: '600px', top: '30px', zIndex: 1000, position: 'absolute', color: '#333333' }, 
             	{ width: '320px', height: '410px', left: '760px', top: '50px', zIndex: 500, position: 'absolute', color: '#333333' }, 
             	{ width: '300px', height: '390px', left: '900px', top: '70px', zIndex: 200, position: 'absolute', color: '#333333' }, 
             	{ width: '300px', height: '350px', left: '1200px', top: '70px', zIndex: 0, position: 'absolute', color: '#333333' },

             	{ width: '300px', height: '350px', left: '1200px', top: '70px', zIndex: 0, position: 'absolute', color: '#333333' },
             	{ width: '300px', height: '350px', left: '1200px', top: '70px', zIndex: 0, position: 'absolute', color: '#333333' },
             	{ width: '300px', height: '350px', left: '1200px', top: '70px', zIndex: 0, position: 'absolute', color: '#333333' },
             	{ width: '300px', height: '350px', left: '1200px', top: '70px', zIndex: 0, position: 'absolute', color: '#333333' },
             	{ width: '300px', height: '350px', left: '1200px', top: '70px', zIndex: 0, position: 'absolute', color: '#333333' },

            ],
            idx: 4,

        }
    },
    mounted() {
        window.scroll(0, 0);
    },
    methods: {
        play() {
            this.timer = setInterval(this.autoplay, 1500);
        },
        autoplay() {
            this.idx--;
            if (this.idx < 0) {
                this.idx = 13;
            }
            var pop1 = this.styles.shift();
            this.styles.push(pop1);
        },
        left() {
        	this.idx--;
            if (this.idx < 0) {
                this.idx = 13;
            }
            var pop1 = this.styles.shift();
            this.styles.push(pop1);
        },
        right() {
        	this.idx++;
        	if (this.idx > 13) {
        		this.idx = 0;
        	}
        	var pop2 = this.styles.pop();
        	this.styles.unshift(pop2);
        },
        enter() {
            clearInterval(this.timer);
        },
        leave() {
            clearInterval(this.timer);
            this.play();
        },
        go(index) {
        	var num = this.idx - index;
        	console.log(num);
        	if(num === -11 || num ===3) {
        		// console.log(1111111111)
        		for(var i = 0; i < 3; i++) {
        			this.left();
        		}
        	}else if(num == -12 || num == 2){
        		for(var i = 0; i < 2; i++) {
        			this.left();
        		}
        	}else if(num == 13 || num == 1 ){ 
        		for(var i = 0; i < 1; i ++) {
        			this.left();
        		}
        	}
        	if(num === 11 || num === -3) {
        		for(var i = 0; i < 3; i ++) {
        			this.right();
        		}
        	}else if(num == 12 || num == -2){
        		for(var i = 0; i < 2; i ++) {
        			this.right();
        		}
        	}else if(num == 13 || num == -1){ 
        		for(var i = 0; i < 1; i ++) {
        			this.right();
        		}
        	}


        }
    },
    created() {
        this.play();
    }
}
</script>