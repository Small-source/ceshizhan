<template>
    <div class="zhiyuantianbao">
        <div class="banner">
            <img src="/imgs/zhiyuantianbao/banner.png" alt="志愿填报">
        </div>
        <div class="result">
            <div class="go_peigeng">
                <a class="btn" href="http://xuemaedu.net/accounts/login?fromUrl=/tzy/choosebatch" target="_blank">进入志愿填报</a>
            </div>
            <div class="inner">
                <div class="title">90%以上的学生遗憾没有填好高考志愿 </div>
                <ul class="main_box">
                    <li>录取到不喜欢的专业</li>
                    <li>上学的城市不喜欢</li>
                    <li>不懂填报规则，被大学退档</li>
                    <li>高分低报，原本可以报更好的学校</li>
                </ul>
            </div>
        </div>
        <div class="important">
            <div class="inner">
                <div class="title">志愿填报很复杂且非常重要</div>
                <ul>
                    <li v-for="(item, index) in important" :key="index">
                        <img :src="item.imgUrl" alt="">
                        <p class="main_title">{{item.title}}</p>
                        <p class="main_detail">{{item.detail}}</p>
                    </li>
                </ul>
            </div>   
        </div>
        <div class="cepingdingwei">
            <div class="inner">
                <div class="title">专业填报看这里</div>
                <div class="detail">—— 量身打造最合适的志愿填报方案 ——</div>
                <p class="miaosu">专家一对一服务从学生的兴趣爱好、性格特征、未来职业发展等角度出发，为学生量身设计符合其生涯发展的最优志愿方案。</p>
                <div class="header"><img src="/imgs/zhiyuantianbao/icon_biaoti.png" alt=""></div>
                <p class="header_detail">通过专业生涯测评对认知潜能、人格特征、兴趣倾向、学习特征、心理健康进行综合测评，帮助学生发现天赋，全方位了解自我，精准定位专业</p>
                <ul class="main_box">
                    <li><img src="/imgs/zhiyuantianbao/zl01.png" alt=""></li>
                    <li><img src="/imgs/zhiyuantianbao/zl02.png" alt=""></li>
                    <li><img src="/imgs/zhiyuantianbao/zl03.png" alt=""></li>
                    <li><img src="/imgs/zhiyuantianbao/zl04.png" alt=""></li>
                </ul>
                <div class="footer">(生涯测评系统中认知潜能评价模型和职业定位结构模型申请了国家发明专利) </div>
            </div>
        </div>
        <div class="tianbaoxitong">
            <div class="inner">
                <ul class="main_box">
                    <li v-for="(item, index) in tianbaoxitong" :key="index">
                        <p class="main_title">{{item.title}}</p>
                        <p class="main_detail">{{item.detail}}</p>
                    </li>
                </ul>
            </div>
        </div>
        <div class="quanmianfenxi">
            <div class="inner">
                <ul class="main_box">
                    <li v-for="(item, index) in quanmianfenxi" :key="index">
                        <p class="main_title">{{item.title}}</p>
                        <p class="main_detail">{{item.detail}}</p>
                    </li>
                </ul>
            </div>
        </div>
        <div class="fuwuliucheng">
            <div class="inner">
                <div class="title">服务流程</div>
                <ul class="main_box">
                    <li v-for="(item, index) in fuwuliucheng" :key="index">
                        <p class="main_title">{{item.title}}</p>
                        <p class="main_detail">{{item.detail}}</p>
                    </li>
                </ul>
            </div>
        </div>
        <div class="our_advantage">
            <div class="title">我们的优势</div>
            <div class="content">
                <div class="inner">
                    <ul>
                        <li v-for="(item, index) in ourAdvantage" :key="index" @mouseenter="activeClass = index" @mouseleave="activeClass='6'" :class="activeClass==index ? 'active' : ''">
                            <img :src="activeClass == index ? item.imgUrl2: item.imgUrl" alt="">
                            <p class="small_title">{{item.title}}</p>
                            <div class="line"></div>
                            <p class="small_detail" v-html="item.detail"></p>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: "zhiyuantianbao",
    data() {
        return { 
            activeClass: '6',
            important: [
                { title: '填报规则复杂', detail: '新高考改革后，志愿填报规则 发生了巨大变化', imgUrl: '/imgs/zhiyuantianbao/icon_tianbaoguize.png' },
                { title: '影响因素较多', detail: '面临地域、院校、成绩、家庭 等因素，不知如何抉择', imgUrl: '/imgs/zhiyuantianbao/icon_yingxiangyinsu.png' },
                { title: '院校专业信息量大', detail: '院校专业多，填报依据的数据多，信息量大', imgUrl: '/imgs/zhiyuantianbao/icon_zhuanyeyinsu.png' },
                { title: '了解信息少', detail: '读不懂政策，了解渠道少，掌握信息有限', imgUrl: '/imgs/zhiyuantianbao/icon_liaojiexinxishao.png' }
            ],
            tianbaoxitong: [
                { title: '数据权威', detail: '数据与考试院数据完全同步，2800多所院校近5年院校、专业录取数据、招生计划与省考试院同 步更新。' },
                { title: '推荐精准', detail: '根据院校历5年录取分数线、位次和当年招生计划等数据，结合目标专业、高考成绩、运用6大核 心算法推荐录取率最高的院校，推荐精准度' },
                { title: '功能强大', detail: '满足自主填报、院校优先、专业优先等多种填报模式需求。' }
            ],
            quanmianfenxi: [
                { title: '高校概况', detail: '历史沿革，基本情况等 ' },
                { title: '开设专业', detail: '高校开设的全部专业 ' },
                { title: '优势学科', detail: '包含国家重点学科，特色专业' },
                { title: '录取分数', detail: '包含国家重点学科，特色专业' },
                { title: '招生简章', detail: '考生所在省份的招生简章分析' },
                { title: '招生计划', detail: '考生所在省份的招生计划' }
            ],
            fuwuliucheng: [
                { title: '专业定位', detail: '专业版测评报告+专业外 部探索+王牌专业分析' },
                { title: '院校筛选', detail: '精准院校专业数据+目标院校方案' },
                { title: '学业规划', detail: '学生高中成绩分析+目标分解行动计划+学习状态激励' },
                { title: '机会分析', detail: '院校招生分析+低分高就机会点+填报方案优选' },
                { title: '知分填报', detail: '提档概率以及录取概率分析+录取风险评估+填报方案调整（保证录取结果、不退档、不滑档 、避免高分低就）' }
            ],
            ourAdvantage: [
                { title: '科学的指导理念', detail: '以生涯规划理念为指导， 按照认知自我-外部探索-科学决策进行志愿填报， 解决：专业不适合、毕业就转行等问题。', imgUrl: '/imgs/zhiyuantianbao/icon_kexuepeiyanglinian.png', imgUrl2: '/imgs/zhiyuantianbao/icon_kexuedezhidaolinianlan.png' },
                { title: '完善的填报流程', detail: '将专业结合成绩筛选院 校，制定行动方案。知分填报，保证录取结果 ，避免高分低就', imgUrl: '/imgs/zhiyuantianbao/icon_kexuedejiejuefangan.png',imgUrl2: '/imgs/zhiyuantianbao/icon_kexuedejiejuefanganlan.png' },
                { title: '精准的填报数据', detail: '院校、专业等信息来源于官方，精准全面，及时更新，为志愿填报提供有力的数据支撑', imgUrl: '/imgs/zhiyuantianbao/icon_xionghoudeshizililiang.png',imgUrl2: '/imgs/zhiyuantianbao/icon_xionghoudeshizililianglan.png' },
                { title: '丰富的规划经验', detail: '一线志愿填报规划师实操经验丰富，拥有多年志愿填报规划工作经验 ，填报零失误', imgUrl: '/imgs/zhiyuantianbao/icon_fuwuguochengquanchenggenzong.png',imgUrl2: '/imgs/zhiyuantianbao/icon_fuwuguochengquanchenggenzonglan.png' },
                { title: '个性化的填报方案', detail: '依据学生的基本情况，千人千面，依据学生的基本情况以及特点延伸 ，为学生量身打造适合的填报方案', imgUrl: '/imgs/zhiyuantianbao/icon_qiangdadepingtaizhicheng.png',imgUrl2: '/imgs/zhiyuantianbao/icon_qiangdadepingtaizhichenglan.png' }
            ]
        }
    },
    methods: {
    },
    created() {
    }
}
</script>
<style type="text/css" lang='less' scoped>
    .zhiyuantianbao {
        padding-bottom: 30px;
        background-color: #F4F7F9;
        .inner {
            width: 1200px;
            margin: 0 auto;
        }
        .title {
            height: 130px;
            line-height: 130px;
            font-size: 32px;
            font-weight: bold;
            color: #333;
            text-align: center;
        }
        .banner {
            img {
                width: 100%;
            }
        }
        .result {
            background-color: #FFFFFF;
            padding-bottom: 40px;
            position: relative;
            padding-top: 80px;
            color: #333;
            .go_peigeng {
                width: 910px;
                height: 140px;
                background-color: #fff;
                border-radius: 5px;
                box-shadow: 0px 0px 10px #dedede;
                display: flex;
                align-items: center;
                justify-content: center;
                color: #fff;
                position: absolute;
                left: 50%;
                top: -60px;
                margin-left: -455px;
                .btn {
                    width: 400px;
                    height: 70px;
                    border-radius: 35px;
                    background-color: #377CEE;
                    text-align: center;
                    line-height: 70px;
                    cursor: pointer;
                    box-shadow: 0px 5px 5px #0F4FB5;
                    &:hover {
                        color: #fff;
                    }
                    &:active {
                        box-shadow: none;
                    }
                }
            }
            ul {
              height: 344px;
              background: url(/imgs/zhiyuantianbao/icon_zhiyuantianbao.png) no-repeat center center;
              position: relative;
              li {
                line-height: 60px;
                font-size: 18px;
                position: absolute;
                width: 280px;
                &:nth-child(1) {
                    left: 135px;
                    top: 30px;
                }
                &:nth-child(2) {
                    left: 895px;
                    top: 30px;
                }
                &:nth-child(3) {
                    left: 35px;
                    top: 160px;
                }
                &:nth-child(4) {
                    left: 935px;
                    top: 160px;
                }
              }
            }
        }
        .important {
            padding-bottom: 60px;
            background-color: #F4F6F8;
            ul {
                display: flex;
                justify-content: space-between;
                li {
                    width: 274px;
                    height: 306px;
                    box-sizing: border-box;
                    padding: 30px;
                    text-align: center;
                    background-color: #fff;
                    border-radius: 10px;
                    img {
                        margin-bottom: 10px;
                    }
                    .main_title {
                        color: #333;
                        font-size: 22px;
                        line-height: 50px;
                    }
                    .main_detail {
                        color: #333;
                        font-size: 16px;
                    }
                }
            }
        }
        .cepingdingwei {
            background-color: #fff;
            padding-bottom: 50px;
            .title {
                color: #3972EA;
            }
            .detail{
              font-size: 24px;
              color: #666;  
              margin-top: -20px;
              text-align: center;
              margin-bottom: 50px;
            }
            .miaosu {
                line-height: 86px;
                background-color: #F5F4F8;
                text-align: center;
                margin-bottom: 70px;
            }
            .header_detail {
                line-height: 60px;
                margin-bottom: 35px;
            }
            .main_box {
                display: flex;
                justify-content: space-between;
                margin-bottom: 45px;
            }
            .footer {
                text-align: center;
                color: #3872EA;
            }
        }
        .tianbaoxitong {
            height: 607px;
            background: url(/imgs/zhiyuantianbao/bg.png) no-repeat center center;
            .main_box {
                padding-top: 160px;
                width: 590px;
                float: right;
                color: #fff;
                li {
                    margin-bottom: 30px;
                }
                .main_title {
                    line-height: 50px;
                    font-size: 20px;
                }
                .main_detail {
                    font-size: 14px;
                }
            }
        }
        .quanmianfenxi {
            height: 736px;
            background: url(/imgs/zhiyuantianbao/bg_tianbaoyinsu.png) no-repeat center center;
            .main_box {
                position: relative;
                padding-top: 230px;
                li {
                    width: 220px;
                    position: absolute;
                    color: #333;
                    .main_title {
                        line-height: 40px;
                        font-size: 18px;
                        font-weight: 600;
                        color: #3C73EA;
                    }
                    .main_detail {
                        line-height: 40px;
                        font-size: 14px;
                    }
                    &:nth-child(1) {
                        left: 130px;
                        top: 225px;
                    }
                    &:nth-child(2) {
                        left: 920px;
                        top: 225px;
                    }
                    &:nth-child(3) {
                        left: 130px;
                        top: 376px;
                    }
                    &:nth-child(4) {
                        left: 920px;
                        top: 380px;
                    }
                    &:nth-child(5) {
                        left: 130px;
                        top: 538px;
                    }
                    &:nth-child(6) {
                        left: 920px;
                        top: 543px;
                    }
                }
            }
        }
        .fuwuliucheng {
            height: 517px;
            background: url(/imgs/zhiyuantianbao/bg_fuwuliucheng.png) no-repeat center center;
            .title {
                color: #3972EA;
            }
            .main_box {
                position: relative;
                padding-top: 230px;
                li {
                    width: 202px;
                    position: absolute;
                    color: #333;
                    box-sizing: border-box;
                    padding: 0 25px;
                    text-align: center;
                    .main_title {
                        line-height: 40px;
                        font-size: 18px;
                        font-weight: 600;
                    }
                    .main_detail {
                        line-height: 22px;
                        font-size: 14px;
                    }
                    &:nth-child(1) {
                        left: 85px;
                        top: 110px;
                    }
                    &:nth-child(2) {
                        left: 290px;
                        top: 165px;
                    }
                    &:nth-child(3) {
                        left: 500px;
                        top: 110px;
                    }
                    &:nth-child(4) {
                        left: 700px;
                        top: 165px;
                    }
                    &:nth-child(5) {
                        left: 900px;
                        top: 110px;
                    }
                }
            }
        }
        .our_advantage {
            padding-bottom: 30px;
            .content {
                background: url(/imgs/xmsy_huhangjihua/bg_youshi.png) no-repeat center center;
                height: 366px;
                ul {
                    display: flex;
                    justify-content: space-between;
                    height: 366px;
                    position: relative;
                    top: 0px;
                    z-index: 10;
                    li {
                        box-sizing: border-box;
                        width: 240px;
                        height: 366px;
                        padding-top: 70px;
                        color: #fff;
                        text-align: center;
                        .small_title {
                            line-height: 60px;
                            text-align: center;
                            font-size: 20px;
                        }
                        .line {
                            width: 95px;
                            border: 1px solid #fff;
                            margin: 0 auto;
                        }
                        .small_detail {
                            padding: 0 40px;
                            padding-top: 25px;
                            font-size: 14px;
                            text-align: left;
                            text-align: center;
                        }
                    }
                    .active {
                        position: relative;
                        z-index: 2;
                        box-shadow: 0px 0px 35px rgba(167,169,180,.2);
                        background-color: #fff;
                        color: #333;
                        .small_title {
                            color: #333;
                        }
                        .line {
                            border: 1px solid #377BED;
                        }
                        .small_detail {
                             color: #333;
                        }
                    }

                }
            }
        }
    }
</style>