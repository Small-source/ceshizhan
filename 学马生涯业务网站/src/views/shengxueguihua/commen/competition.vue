<template>
    <div class="competition">
        <div class="header">
            <div class="inner">
                <div class="header_content">
                    <img :src="headrData[$route.query.id].imgUrl" alt="">
                    <div class="content_box">
                        <p class="title">{{headrData[$route.query.id].title}}</p>
                        <p class="detail">{{headrData[$route.query.id].detail}}</p>
                        <div class="content_footr">
                            <p class="company">主办单位 :<span>{{headrData[$route.query.id].zuban}}</span></p>
                            <p class="link"><a :href="headrData[$route.query.id].link" target="_blank">查询网址 :<span>{{headrData[$route.query.id].link}}</span></a></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="content">
            <img :src="'http://cdn.xuematech.com/match/'+ $route.query.id + '.png'" alt="">
        </div>
    </div>
</template>
<style type="text/css" lang='less' scoped>
    .competition {
        width: 100%;
        letter-spacing: 1px;
        overflow: hidden;
        .inner {
            width: 1200px;
            margin: 0 auto;
        }
        .header {
            background-color: #fff;
            height: 260px;
            box-shadow: 0px 6px 6px rgba(222,222,222,.5);
            position: relative;
            z-index: 1;
            margin-bottom: 20px;
            // margin-bottom: 2px;
            .header_content {
                padding: 30px 0px;
                img {
                    width: 268px;
                    height: 200px;
                    float: left;
                }
                .content_box {
                    float: left;
                    padding-left: 45px;
                    width: 887px;
                    .title {
                        line-height: 36px;
                        color: #333;
                        font-size: 25px;
                        font-weight: 600;
                        margin-bottom: 25px;
                    }
                    .detail {
                        height: 106px;
                        line-height: 24px;
                        font-size: 14px;
                        color: #666;
                    }
                    .content_footr {
                        font-size: 15px;
                        line-height: 15px;
                        .company {
                            color: #333;
                            float: left;
                            margin-right: 70px;
                        }
                        .link {
                            color: #127de1;
                            float: left;
                            a {
                                color: #127de1;
                            }

                        }

                    }
                }
            }
        }
        .content {
            width: 1920px;
            position: relative;
            left: 50%;
            margin-left: -960px;
            img {
                display: block;
                width: 1920px;
            }
        }
    }
</style>
<script>
export default {
    props: [ ],
    data() {
        return {
            headrData: [ 
                { imgUrl: '/imgs/zizhuxuanba/gaozhongjingsaiku/bg_header/bg_01.jpg', title: '“明天小小科学家”竞赛',zuban: '中国科协青少年科技中心', link: 'http://castic.xiaoxiaotong.org/', detail: '“明天小小科学家”奖励活动是一项面向高中生开展的科技创新后备人才选拔和培养活动。活动旨在发现具有科研潜质的优秀学生，鼓励他们选择学习科学技术专业、未来投身科学研究事业。活动接受品学兼优且拥有个人科学研究成果的高中生自由申报，通过对学生创新意识和科研能力等综合素质的考察，遴选出100名学生给予不同等级的表彰和奖学金资助，并授予其中3名学生“明天小小科学家”称号。'}, 
                { imgUrl: '/imgs/zizhuxuanba/gaozhongjingsaiku/bg_header/bg_02.jpg', title: '中国青少年机器人竞赛',zuban: '中国科协青少年科技中心',link: 'http://robot.xiaoxiaotong.org/', detail: '中国青少年机器人竞赛创办于2001年，是中国科协面向全国中小学生开展的一项将知识积累、技能培养、探究性学习融为一体的普及性科技教育活动。竞赛为广大青少年机器人爱好者在电子信息、自动控制以及机器人高新科技领域进行学习、探索、研究、实践搭建成果展示和竞技交流的平台，旨在通过富有挑战性的比赛项目，将学生在课程中的多学科知识和技能融入竞赛过程中，激发学生对工程技术的学习兴趣，培养学生的创新意识、动手实践能力和团队精神，提高科学素质'}, 
                { imgUrl: '/imgs/zizhuxuanba/gaozhongjingsaiku/bg_header/bg_03.jpg', title: '全国青少年创意编程与智能设计大赛',zuban: '中国科协青少年科技中心', link: 'http://2019cybc.xiaoxiaotong.org/', detail: '“全国青少年创意编程与智能设计大赛”是一项面向广大青少年普及编程知识、推广智能设计技能的科普活动，其活动主题为“智能时代，逐梦成长”，旨在提高青少年对人工智能的认知和初步应用能力，深受青少年和科技教师的关注和喜爱。大赛由中国科协青少年科技中心和中国青少年科技辅导员协会共同主办。自2015年开展以来，经过不断探索与发展，大赛受到社会各界的关注和肯定，为我国青少年人工智能科普活动的发展起到了示范带头作用，为广大青少年创意编程和智能设计爱好者以及科技教师搭建了展示交流的平台。'}, 
                { imgUrl: '/imgs/zizhuxuanba/gaozhongjingsaiku/bg_header/bg_04.jpg', title: '“童创未来”全国青少年人工智能创新挑战赛',zuban: '中国少年儿童发展服务中心', link: 'http://www.china61.org.cn/#/', detail: '“童创未来”全国青少年人工智能创新挑战赛是由中国少年儿童发展服务中心主办，中少发展素质拓展中心、中国青少年宫协会科普事业部承办的面向初、高中学生的赛事。'}, 
                { imgUrl: '/imgs/zizhuxuanba/gaozhongjingsaiku/bg_header/bg_05.jpg', title: '全国青少年电子信息智能创新大赛',zuban: '中国电子学会', link: 'http://www.kpcb.org.cn/', detail: '全国青少年电子信息智能创新大赛是中国电子学会主办的青少年科技创新竞赛活动，是开展青少年电子信息科普的重要内容之一。'}, 

                { imgUrl: '/imgs/zizhuxuanba/gaozhongjingsaiku/bg_header/bg_06.jpg', title: '全国中小学信息技术创新与实践大赛',zuban: '城乡统筹发展研究中心', link: 'http://www.noc.net.cn', detail: '“全国中小学信息技术创新与实践大赛”是一项运用信息技术，培养广大师生的创新精神和实践能力，面向青少年学生开展人工智能科学普及、引领科技创新的素质教育实践平台，简称NOC大赛（NOC为Novelty, Originality, Creativity的缩写）。'}, 

                { imgUrl: '/imgs/zizhuxuanba/gaozhongjingsaiku/bg_header/bg_07.jpg', title: '全国中小学生创·造大赛',zuban: '科技日报社中国发明协会', link: 'http://www.chuangzaodasai.com/', detail: ' 全国中小学生创·造大赛是教育部认可的2019年度面向中小学生开展的全国性竞赛活动，被科技部、中宣部、中国科协列为全国科技活动周常年举办的重大科普示范活动，并获得了多个部门的大力支持。'}, 

                { imgUrl: '/imgs/zizhuxuanba/gaozhongjingsaiku/bg_header/bg_08.jpg', title: '青少年科学调查体验竞赛',zuban: '中国科协青少年科技中心', link: 'http://www.scienceday.org.cn', detail: ' 青少年科学调查体验活动以习近平新时代中国特色社会主义思想和党的十九大精神为指导，服从党和国家工作大局，服务未成年人社会主义核心价值观培育和科学素质提升，着眼扩大活动覆盖面，促进校内外融合，不断提高活动影响力和效果。'}, 

                { imgUrl: '/imgs/zizhuxuanba/gaozhongjingsaiku/bg_header/bg_09.jpg', title: '“明天小小科学家”竞赛',zuban: '中国科协青少年科技中心', link: 'http://mingtian.xiaoxiaotong.org/index.aspx', detail: ' “明天小小科学家”奖励活动是一项面向高中生开展的科技创新后备人才选拔和培养活动。活动旨在发现具有科研潜质的优秀学生，鼓励他们选择学习科学技术专业、未来投身科学研究事业。活动接受品学兼优且拥有个人科学研究成果的高中生自由申报，通过对学生创新意识和科研能力等综合素质的考察，遴选出100名学生给予不同等级的表彰和奖学金资助，并授予其中3名学生“明天小小科学家”称号。'},

                { imgUrl: '/imgs/zizhuxuanba/gaozhongjingsaiku/bg_header/bg_10.jpg', title: '全国青年科普创新实验暨作品大赛',zuban: '中国科学技术协会', link: 'http://kepudasai.cdstm.cn/', detail: '由中国科学技术协会主办，中国科学技术馆、中国科协青少年科技中心承办的活动，动员和激励广大学生参与科普创作，扩大科普活动的社会影响力，树立品牌，整合资源，促进科学思想、科学精神、科学方法和科学知识的传播和普及，扩大科普活动的社会影响力。'}, 

                { imgUrl: '/imgs/zizhuxuanba/gaozhongjingsaiku/bg_header/bg_11.jpg', title: '全国中学生天文知识竞赛',zuban: '中国天文学会', link: 'http://www.bjp.org.cn/', detail: '由中国天文学会主办，北京天文馆、中国天文学会普及工作委员会承办，推动天文基础教育，为全国热心天文学的师生提供交流平台，加强天文科普教育的国际交流与合作。'}, 

                { imgUrl: '/imgs/zizhuxuanba/gaozhongjingsaiku/bg_header/bg_12.jpg', title: '全国防震减灾知识大赛',zuban: '中国地震灾害防御中心', link: '', detail: '通过举办全国防震减灾知识大赛，旨在进一步向全社会宣传防震减灾理念，普及防震减灾知识，增强防震减灾意识， 提高应急避险技能和自救互救能力，推广防震减灾科普宣传教育效果，增进社会公众对防震减灾工作的理解、支持和参与， 推动防震减灾工作更好地为社会服务。'}, 


                { imgUrl: '/imgs/zizhuxuanba/gaozhongjingsaiku/bg_header/bg_13.jpg', title: '全国中学生数学奥林匹克竞赛',zuban: '中国数学会', link: 'http://cso.xiaoxiaotong.org/', detail: '旨在提高中学生学习数学的兴趣，推动数学课外活动的广泛开展，促进数学课内与课外教育的结合，为对数学有兴趣且学有余力的在校学生提供进一步提高的机会，为数学教育改革尤其是课程改革提供新的思路，为发现、培养和选拔一批数学人才，为参加国际数学奥林匹克做准备。'}, 

                { imgUrl: '/imgs/zizhuxuanba/gaozhongjingsaiku/bg_header/bg_14.jpg', title: '全国中学生物理奥林匹克竞赛',zuban: '中国物理学会', link: 'http://cso.xiaoxiaotong.org/', detail: '由中国物理学会主办,高中学生自愿参加的课外学科竞赛活动。这项活动得到国家教育部的同意和支持。竞赛的目的是促进中学生提高学习物理的主动性和兴趣，改进学习方法，增强学习能力；促进学校开展多样化的物理课外活动，活跃学习空气；发现具有突出才能的青少年，以便更好地对他们进行培养。'}, 

                { imgUrl: '/imgs/zizhuxuanba/gaozhongjingsaiku/bg_header/bg_15.jpg', title: '全国中学生化学奥林匹克竞赛',zuban: '中国化学会', link: 'http://cso.xiaoxiaotong.org/', detail: '鼓励青少年接触化学发展的前沿、了解化学对科学技术、社会经济和人民生活的意义、学习化学家的思想方法和工作方法，以激发他们学习化学的兴趣爱好和创造精神；探索早期发现和培养优秀人才的思想、方法和途径；促进化学教学新思想与新方法的交流，推动大学与中学的化学教学改革，提高我国化学教学水平；选拔参加一年一度的国际化学竞赛的选手。'}, 

                { imgUrl: '/imgs/zizhuxuanba/gaozhongjingsaiku/bg_header/bg_16.jpg', title: '全国中学生生物学奥林匹克竞赛',zuban: '中国植物学会 中国动物学会', link: 'http://cso.xiaoxiaotong.org/', detail: '是在中国科学技术协会（主管单位）、 国家教育部和国家自然科学基金委的领导和支持下，由中国动物学会、中国植物学会联合主办，各省、自治区、直辖市自愿参加的群众性生物学科竞赛活动。目的是为加强中学生物学教学，提高生物学教学水平；促进中学生生物学课外活动；向青少年普及生物学知识；提高青少年的生命科学素质；为参加国际生物学奥赛做准备。'}, 

                { imgUrl: '/imgs/zizhuxuanba/gaozhongjingsaiku/bg_header/bg_17.jpg', title: '全国中学生信息学奥林匹克竞赛',zuban: '中国计算机学会', link: 'http://cso.xiaoxiaotong.org/', detail: '竞赛由中国计算机学会主办，为了向那些在中学阶段学习的青少年普及计算机科学知识，为了给学校的信息技术教育课程提供动力和新的思路，为了给那些有才华的学生提供相互交流和学习的机会、也为通过竞赛和相关的活动培养和选拔优秀计算机人才。'}, 

                { imgUrl: '/imgs/zizhuxuanba/gaozhongjingsaiku/bg_header/bg_18.jpg', title: '世界华人学生作文大赛',zuban: '中华全国归国华侨联合会', link: 'http://www.zuowendasai.com/', detail: '世界华人学生作文大赛由《快乐作文》杂志发起，与中国侨联、全国台联、人民日报海外版、中国国际广播电台合作，自2000年开始举办，初始名称为：全国小学生“丑小鸭”作文大赛;随着参赛学生的不断增多，吸引了更多海外华文学校的参与，更名为“世界华人小学生作文大赛”;2008年，参赛范围再次扩大，海内外的初中生也参与到大赛中来，更名为“世界华人学生作文大赛”，沿用至今。'}, 

                { imgUrl: '/imgs/zizhuxuanba/gaozhongjingsaiku/bg_header/bg_19.jpg', title: '全国中学生科普科幻作文大赛',zuban: '中国科普作家协会', link: 'www.kepukehuan.com', detail: '为响应国家繁荣科普科幻创作的号召，切实践行教育部竞赛活动管理的相关要求，由中国科普作家协会主办“第六届全国中学生科普科幻作文大赛”。'}, 

                { imgUrl: '/imgs/zizhuxuanba/gaozhongjingsaiku/bg_header/bg_20.jpg', title: '叶圣陶杯全国中学生新作文大赛',zuban: '中国当代文学研究会', link: 'http://www.ystbds.com/', detail: '“叶圣陶杯”全国中学生新作文大赛是由中国当代文学研究会主办、中国当代文学研究会校园文学委员会和中国少年儿童新闻出版总社《中学生》杂志社承办的一项服务于学校写作教学，具有创新性、引领性、示范性、公益性的中学生作文竞赛活动，每年举办一届，接受教育部的审核与监管。'}, 

                { imgUrl: '/imgs/zizhuxuanba/gaozhongjingsaiku/bg_header/bg_21.jpg', title: '高中生创新能力大赛',zuban: '中国老教授协会', link: 'http://www.iccedu.com.cn/', detail: '为贯彻落实《国务院关于深化考试招生制度改革的实施意见》及教育部关于拔尖创新人才选拔与培育工作的有关规定，进一步提升中学生的综合素质、科学素养和创新能力，发掘出一批具备学科特长和创新潜质的优秀高中生，形成高中生创新人才的发现和培育机制，为培养创新型人才奠定基础，中国老教授协会和博雅闻道考试与评价技术研究院联合举办高中生创新能力大赛。'}, 

                { imgUrl: '/imgs/zizhuxuanba/gaozhongjingsaiku/bg_header/bg_22.jpg', title: '“外研社杯”全国中学生外语素养大赛',zuban: '北京外国语大学', link: 'http://events.fltrp.com/', detail: '“外研社杯”全国中学生外语素养大赛由北京外国语大学主办、外语教学与研究出版社承办，是入围教育部2019年度全国性竞赛活动名单，面向高中学生举办的公益赛事。大赛以全面培养学生的核心素养为理念，设置了主线清晰、内容多元的赛事体系，突出学术权威性与活动丰富性，旨在帮助学生成长为热爱学习、勇于挑战、真正具备国际竞争力的优秀人才。'}, 

                { imgUrl: '/imgs/zizhuxuanba/gaozhongjingsaiku/bg_header/bg_23.jpg', title: '中国日报社“21世纪杯”全国英语演讲比赛',zuban: '中国日报社', link: 'http://contest.i21st.cn/teens2018/', detail: '中国日报社“21世纪杯”全国英语演讲比赛由中国日报社主办、二十一世纪英语教育传媒承办。创办于1996年，每年面向全国大中小学生及青年人群举行。活动高举习近平新时代中国特色社会主义思想伟大旗帜，全面贯彻落实党的十九大精神，发展素质教育，提高中国青少年学生的国际交流能力。自创办以来，大赛作为每年5月在英国伦敦举行的国际公众演讲比赛（IPSC）的中国区官方唯一选拔赛，获胜者将代表中国在国际舞台上展示中国青年学子的风貌。'}, 

                { imgUrl: '/imgs/zizhuxuanba/gaozhongjingsaiku/bg_header/bg_24.jpg', title: '“希望杯”全国数学邀请赛',zuban: '中国国际文化交流中心 《数理天地》杂志社', link: 'http://www.hopecup.org/', detail: ''}, 
                { imgUrl: '/imgs/zizhuxuanba/gaozhongjingsaiku/bg_header/bg_25.jpg', title: '“地球小博士”和“环保之星”全国地理科普知识大赛',zuban: '中国地理学会', link: '', detail: ''}, 

                { imgUrl: '/imgs/zizhuxuanba/gaozhongjingsaiku/bg_header/bg_26.jpg', title: '全国中小学生绘画书法作品比赛',zuban: '中国儿童中心', link: 'http://24shuhua.zget.org/', detail: '为全面贯彻教育方针，全面推进素质教育，促进中小学生德智体美劳全面发展，展示我国艺术教育的成果，根据《学校艺术教育工作规程》，中国儿童中心继续举办全国中小学生绘画书法作品比赛，该项比赛由《中国校外教育》杂志社有限公司承办。'}, 
                { imgUrl: '/imgs/zizhuxuanba/gaozhongjingsaiku/bg_header/bg_27.jpg', title: '中日青少年书画友好交流大赛',zuban: '人民中国杂志社', link: '', detail: ''}, 

                { imgUrl: '/imgs/zizhuxuanba/gaozhongjingsaiku/bg_header/bg_28.jpg', title: '全国青少年科学影像大赛',zuban: '中国科协青少年科技中心', link: 'http://casvf.xiaoxiaotong.org/index.aspx', detail: '为贯彻落实《全民科学素质行动计划纲要实施方案(2016-2020年)》,提升未成年人科学素质，创新青少年科普活动形式,鼓励青少年学习和应用媒介技术,体验并掌握科学探究的过程及方法,中国科协青少年科技中心、中国青少年科技辅导员协会共同举办全国青少年科学影像大赛'}, 
                { imgUrl: '/imgs/zizhuxuanba/gaozhongjingsaiku/bg_header/bg_29.jpg', title: '丝路国家青少年国际摄影竞赛',zuban: '中国艺术摄影学会', link: 'http://www.photobeijing.com/html/slqsnsybs/', detail: ''}, 
                { imgUrl: '/imgs/zizhuxuanba/gaozhongjingsaiku/bg_header/bg_30.png', title: '新概念作文大赛',zuban: '萌芽杂志社', link: 'http://www.mengya.com', detail: '新概念作文大赛是萌芽杂志社举办的具有全国影响力的作文大赛。大赛的理念为：“新思维”——创造性、发散性思维，打破旧观念、旧规范的束缚，打破僵化保守，无拘无束“新表达”——不受题材、体裁限制，使用属于自己的充满个性的语言，反对套话，反对千人一面、众口一词“真体验”——真实、真切、真诚、真挚地关注、感受、体察生活'}, 
            ],
        }
    },
    methods: {
    },
    created() {
    }
}
</script>