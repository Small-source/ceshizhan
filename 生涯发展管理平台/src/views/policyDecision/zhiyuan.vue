<template>
    <div class="zhiyuantianbao">
        <div class="banner">
            <!-- <img src="/imgs/policyDecision/zhiyuantianbao/banner.png" alt="志愿填报"> -->
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
                <div class="header"><img src="/imgs/policyDecision/zhiyuantianbao/icon_biaoti.png" alt=""></div>
                <p class="header_detail">通过专业生涯测评对认知潜能、人格特征、兴趣倾向、学习特征、心理健康进行综合测评，帮助学生发现天赋，全方位了解自我，精准定位专业</p>
                <ul class="main_box">
                    <li><img src="/imgs/policyDecision/zhiyuantianbao/zl01.png" alt=""></li>
                    <li><img src="/imgs/policyDecision/zhiyuantianbao/zl02.png" alt=""></li>
                    <li><img src="/imgs/policyDecision/zhiyuantianbao/zl03.png" alt=""></li>
                    <li><img src="/imgs/policyDecision/zhiyuantianbao/zl04.png" alt=""></li>
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
        <div class="ourAdvantage">
            <div class="inner">
                <ul class="main_box">
                    <li v-for="(item, index) in ourAdvantage" :key="index">
                        <img :src="item.imgUrl" alt="">
                        <p class="main_title">{{item.title}}</p>
                        <p class="main_detail">{{item.detail}}</p>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        name: "zhiyuan",
        data() {
	        return { 
	            important: [
	                { title: '填报规则复杂', detail: '新高考改革后，志愿填报规则 发生了巨大变化', imgUrl: '/imgs/policyDecision/zhiyuantianbao/icon_tianbaoguize.png' },
	                { title: '影响因素较多', detail: '面临地域、院校、成绩、家庭 等因素，不知如何抉择', imgUrl: '/imgs/policyDecision/zhiyuantianbao/icon_yingxiangyinsu.png' },
	                { title: '院校专业信息量大', detail: '院校专业多，填报依据的数据多，信息量大', imgUrl: '/imgs/policyDecision/zhiyuantianbao/icon_zhuanyeyinsu.png' },
	                { title: '了解信息少', detail: '读不懂政策，了解渠道少，掌握信息有限', imgUrl: '/imgs/policyDecision/zhiyuantianbao/icon_liaojiexinxishao.png' }
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
	                { title: '科学的指导理念', detail: '以生涯规划理念为指导， 按照认知自我-外部探索-科学决策进行志愿填报， 解决：专业不适合、毕业就转行等问题。', imgUrl: '/imgs/policyDecision/zhiyuantianbao/icon_kexuedezhidaolinian.png' },
	                { title: '完善的填报流程', detail: '将专业结合成绩筛选院 校，制定行动方案。知分填报，保证录取结果 ，避免高分低就', imgUrl: '/imgs/policyDecision/zhiyuantianbao/icon_tianbaoliucheng.png' },
	                { title: '精准的填报数据', detail: '院校、专业等信息来源于官方，精准全面，及时更新，为志愿填报提供有力的数据支撑', imgUrl: '/imgs/policyDecision/zhiyuantianbao/icon_tianbaoshuju.png' },
	                { title: '丰富的规划经验', detail: '一线志愿填报规划师实操经验丰富，拥有多年志愿填报规划工作经验 ，填报零失误', imgUrl: '/imgs/policyDecision/zhiyuantianbao/icon_guihuajingyan.png' },
	                { title: '个性化的填报方案', detail: '依据学生的基本情况，千人千面，依据学生的基本情况以及特点延伸 ，为学生量身打造适合的填报方案', imgUrl: '/imgs/policyDecision/zhiyuantianbao/icon_tianbaofangan.png' }
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
    	margin-left: 20px;
        padding-bottom: 30px;
        // background-color: #F4F7F9;
        background-color: #F3F4F8;
        .title {
            height: 104px;
            line-height: 104px;
            font-size: 26px;
            font-weight: bold;
            color: #333;
            text-align: center;
        }
        .banner {
        	height: 336px;
        	background: url(/imgs/policyDecision/zhiyuantianbao/banner.png) no-repeat center center;
            background-size: 1344px 336px;
            // img {
            //     width: 100%;
            // }
        }
        .result {
            background-color: #FFFFFF;
            padding-bottom: 32px;
            position: relative;
            padding-top: 64px;
            color: #333;
            margin-bottom: 20px;
            .go_peigeng {
                width: 728px;
                height: 112px;
                background-color: #fff;
                border-radius: 5px;
                box-shadow: 0px 0px 10px #dedede;
                display: flex;
                align-items: center;
                justify-content: center;
                color: #fff;
                position: absolute;
                left: 50%;
                top: -48px;
                margin-left: -364px;
                .btn {
                    width: 320px;
                    height: 56px;
                    border-radius: 28px;
                    background-color: #377CEE;
                    text-align: center;
                    line-height: 56px;
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
              height: 276px;
              background: url(/imgs/policyDecision/zhiyuantianbao/icon_zhiyuantianbao.png) no-repeat center center;
              background-size: 525px 276px;
              position: relative;
              li {
                line-height: 48px;
                font-size: 14px;
                position: absolute;
                width: 220px;
                &:nth-child(1) {
                    left: 108px;
                    top: 24px;
                }
                &:nth-child(2) {
                    left: 716px;
                    top: 24px;
                }
                &:nth-child(3) {
                    left: 28px;
                    top: 128px;
                }
                &:nth-child(4) {
                    left: 748px;
                    top: 128px;
                }
              }
            }
        }
        .important {
            padding-bottom: 48px;
            background-color: #fff;
            margin-bottom: 20px;
            ul {
                display: flex;
                justify-content: space-between;
                padding: 0px 20px;
                li {
                    width: 215px;
                    height: 280px;
                    box-sizing: border-box;
                    padding: 24px;
                    text-align: center;
                    background-color: #fff;
                    border-radius: 8px;
                    box-shadow: 0px 0px 10px #dedede;
                    img {
                        margin-bottom: 8px;
                    }
                    .main_title {
                        color: #333;
                        font-size: 18px;
                        line-height: 50px;
                    }
                    .main_detail {
                        color: #333;
                        font-size: 14px;
                    }
                }
            }
        }
        .cepingdingwei {
            background-color: #fff;
            padding: 0 20px;
            padding-bottom: 40px;
            margin-bottom: 20px;
            .title {
                color: #3972EA;
            }
            .header img {
            	display: block;
            	width: 128px;
            	height: 40px;
            }
            .detail{
              font-size: 20px;
              color: #666;  
              margin-top: -16px;
              text-align: center;
              margin-bottom: 40px;
            }
            .miaosu {
                line-height: 69px;
                background-color: #F5F4F8;
                text-align: center;
                margin-bottom: 56px;
            }
            .header_detail {
                line-height: 48px;
                margin-bottom: 28px;
            }
            .main_box {
                display: flex;
                justify-content: space-between;
                margin-bottom: 36px;
                li {
                	width: 216px;
                	height: 324px;
                	img {
                		display: block;
                		width: 100%;
                		height: 100%;
                	}
                }
            }
            .footer {
                text-align: center;
                color: #3872EA;
            }
        }
        .tianbaoxitong {
            height: 485px;
            margin-bottom: 20px;
            background: url(/imgs/policyDecision/zhiyuantianbao/bg.png) no-repeat center center;
            background-size: 1500px 486px;
            .main_box {
                padding-top: 128px;
                width: 472px;
                float: right;
                color: #fff;
                li {
                    margin-bottom: 28px;
                    padding-right: 10px;
                }
                .main_title {
                    line-height: 40px;
                    font-size: 16px;
                }
                .main_detail {
                    font-size: 14px;
                }
            }
        }
        .quanmianfenxi {
            height: 560px;
            margin-bottom: 20px;
            background: url(/imgs/policyDecision/zhiyuantianbao/bg_tianbaoyinsu.png) no-repeat center center;
            background-size: 1500px 560px;
            .main_box {
                position: relative;
                padding-top: 184px;
                li {
                    width: 190px;
                    position: absolute;
                    color: #333;
                    .main_title {
                        line-height: 32px;
                        font-size: 16px;
                        font-weight: 600;
                    }
                    .main_detail {
                        line-height: 40px;
                        font-size: 14px;
                    }
                    &:nth-child(1) {
                        left: 104px;
                        top: 180px;
                    }
                    &:nth-child(2) {
                        left: 736px;
                        top: 180px;
                    }
                    &:nth-child(3) {
                        left: 104px;
                        top: 300px;
                    }
                    &:nth-child(4) {
                        left: 736px;
                        top: 300px;
                    }
                    &:nth-child(5) {
                        left: 104px;
                        top: 420px;
                    }
                    &:nth-child(6) {
                        left: 736px;
                        top: 424px;
                    }
                }
            }
        }
        .fuwuliucheng {
            height: 414px;
            background: url(/imgs/policyDecision/zhiyuantianbao/bg_fuwuliucheng.png) no-repeat center center;
            background-size: 1536px 414px;
            .title {
                color: #3972EA;
            }
            .main_box {
                position: relative;
                padding-top: 184px;
                li {
                    width: 164px;
                    position: absolute;
                    color: #333;
                    box-sizing: border-box;
                    padding: 0 22px;
                    text-align: center;
                    .main_title {
                        line-height: 32px;
                        font-size: 16px;
                        font-weight: 600;
                    }
                    .main_detail {
                        line-height: 20px;
                        font-size: 12px;
                    }
                    &:nth-child(1) {
                        left: 70px;
                        top: 88px;
                    }
                    &:nth-child(2) {
                        left: 236px;
                        top: 132px;
                    }
                    &:nth-child(3) {
                        left: 400px;
                        top: 88px;
                    }
                    &:nth-child(4) {
                        left: 568px;
                        top: 132px;
                    }
                    &:nth-child(5) {
                        left: 732px;
                        top: 88px;
                    }
                }
            }
        }
        .ourAdvantage {
            height: 638px;
            background: url(/imgs/policyDecision/zhiyuantianbao/icon_youshi.png) no-repeat center center;
            background-size: 1536px 638px;
            background-color: #fff;
            box-sizing: border-box;
            padding-top: 376px;
            color: #333;
            ul {
                padding: 0 32px;
                display: flex;
                justify-content: space-between;
                li {
                    width: 20%;
                    box-sizing: border-box;
                    padding: 0 24px;
                    text-align: center;
                    img {
                        margin-bottom: 8px;
                    }
                    .main_title {
                        line-height: 32px;
                        font-size: 16px;
                        font-weight: 600;
                    }
                    .main_detail {
                        line-height: 20px;
                        font-size: 12px;
                    }
                }
            }
        }
    }
</style>
