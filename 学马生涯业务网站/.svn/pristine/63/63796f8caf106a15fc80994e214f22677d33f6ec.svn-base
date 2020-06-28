<template>
    <div class="zonghepingjia">
        <div class="banner">
            <img src="/imgs/shengxueguihua/zonghepingjia/zonghepingjia_banner.png" alt="">
        </div>
    <div class="more_hard">
            <div class="toolBox">
                <div class="inner">
                    <!-- 自主招生“生涯工具” -->        
                    <ul class="tool">
                        <li @click="changeRouter('/zongpingyuanxiao')">
                            <img src="/imgs/shengxueguihua/common/icon_link01.png" alt="">
                            <div class="title">综评院校库</div>
                        </li>
                        <li @click="$router.push('/zphighSchoolCompetition')">
                            <img src="/imgs/shengxueguihua/common/icon_link02.png" alt="">
                            <div class="title">高中竞赛库</div>
                        </li>
                        <li @click="$router.push('/zizhaozongpingfushi')">
                            <img src="/imgs/shengxueguihua/common/icon_link04.png" alt="">
                            <div class="title">强基综评复试</div>
                        </li>
                    </ul>
                    <p>
                      高校综合评价招生，指的是高校在录取新生时，综合考量考生高考成绩、高校考核结论、高中学业水平测试成绩、</br>综合素质评价以及高校自身培养特色要求等五个维度的内容，对高考成绩达到分数要求的入选考生，综合评价，择优录取。  
                    </p>
                    <p>
                        此外，浙江省的“三位一体”、清华大学的“领军计划”和北京大学的“博雅计划”均属于综合评价招生。
                    </p>
                </div>
            </div>
            <div class="inner">
                <h5 class="main_title">
                    “未来想进名校，纯看高考分将越来越难”
                </h5>
                <p class="small_title">—— 综合评价是名校招生的一种主要途径，录取人数远超其他招生方式 ——</p>
                <div class="content">
                    <div class="content_box" v-for="(item,index) in qingkuang" :key="index">
                        <p class="title">
                            {{item.title}}
                        </p>
                        <p class="detail">
                            {{item.detail}}
                        </p>
                    </div>
                </div>
            </div>
        </div>
        <div class="howStudent">
            <div class="inner">
                <h5 class="main_title">
                    综合评价选择什么样的人才
                </h5>
                <p class="small_title">—— 选拔综合素质优秀的学生，适宜多数考生 ——</p>
                <ul>
                    <li v-for="(item,index) in howStudent" :key="index" :style="'background: url(' + item.imgUrl + ')'">
                        <p class="title">{{item.title}}</p>
                    </li>
                </ul>
            </div>
        </div>
        <div class="whyJoin">
            <div class="inner">
                <h5 class="main_title">
                    为什么要参与综合评价
                </h5>
                <ul>
                    <li v-for="(item,index) in whyJoin" :key="index">
                        <img :src="item.imgUrl" alt="">
                        <p class="title">{{item.title}}</p>
                        <p class="detail">{{item.detail}}</p>
                    </li>
                </ul>
            </div>
        </div>

        <!-- 综合评价招生需要注意的几个方面 -->
        <div class="notice">
            <div class="inner">
                <h5 class="main_title">综合评价招生需要注意的几个方面</h5>
                <ul>
                    <li v-for="(item,index) in notice" :key="index">
                        <img :src="item.imgUrl" alt="">
                        <div class="main_detail">
                            <p class="title">{{item.title}}</p>
                            <p class="detail">{{item.detail}}</p>
                        </div>
                    </li>
                </ul>
            </div>
        </div>


        <!-- 关于学生通过“强基计划”进入理想大学的建议 -->
        <div class="advice">
            <div class="inner">
                <h5 class="main_title">综合评价招生报考建议</h5>
                <ul>
                    <li v-for="(item, index) in advice" :key="index">
                        <img :src="item.imgUrl" alt="">
                        <div class="box">
                            <p class="title">{{item.title}}</p>
                            <p class="detail">{{item.detail}}</p>
                        </div>
                    </li>
                </ul>
            </div>
        </div>

        <!-- 我们的服务 -->
        <div class="our_services">
            <div class="inner">
                <h5 class="main_title">我们的服务</h5>
                <div class="content">
                    <ul>
                        <li v-for="(item, index) in our_services" :key="index" v-show="index < 3">
                            <img :src="item.imgUrl" alt="">
                            <div class="title">{{item.title}}</div>
                            <div class="detail">{{item.detail}}</div>
                        </li>
                    </ul>
                    <ul>
                        <li v-for="(item, index) in our_services" :key="index" v-show="index > 2">
                            <img :src="item.imgUrl" alt="">
                            <div class="title">{{item.title}}</div>
                            <div class="detail">{{item.detail}}</div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        <!-- 学马企业使命 -->
        <div class="mission">
            <div class="inner">
                <div class="content">
                    <ul>
                        <li v-for="(item, index) in mission" :key="index">
                            <p class="title">{{item.title}}</p>
                            <p class="detail">{{item.detail}}</p>
                        </li>
                    </ul>
                </div>                
            </div>
        </div>
        <!-- 综评重点院校，中外合作院校 -->
        <div class="key_institutions_and_cjv">
            <div class="banner">
                <img src="/imgs/shengxueguihua/zonghepingjia/bg_yuanxiao.png" alt="">
            </div>
            <div class="inner">
                <div class="Key_Institutions">
                    <h5 class="title">综评重点院校</h5>
                    <table width="1200" border="1">
                        <tr height="45" bgcolor="#2a75db" class="table_header">
                            <th align="center">地区</th>
                            <th colspan="3" align="center">学校</th>
                        </tr>
                        <tr>
                            <th rowspan="2">北京</th>
                            <td>北京大学</td>
                            <td>清华大学</td>
                            <td>北京外国语大学</td>
                        </tr>
                        <tr> 
                            <td>中国科学院大学</td>
                            <td></td>
                            <td></td>
                        </tr>
                        <tr>
                            <th rowspan="3">上海</th>
                            <td>复旦大学</td>
                            <td>上海交通大学</td>
                            <td>同济大学</td>
                        </tr>
                        <tr> 
                            <td>华东师范大学</td>
                            <td>华东理工大学</td>
                            <td>上海财经大学</td>
                        </tr>
                        <tr> 
                            <td>东华大学</td>
                            <td>上海大学</td>
                            <td>上海外国语大学</td>
                        </tr>
                        <tr> 
                            <th>浙江</th>
                            <td>浙江大学</td>
                            <td></td>
                            <td></td>
                        </tr>
                        <tr> 
                            <th>江苏</th>
                            <td>南京大学</td>
                            <td>东南大学</td>
                            <td>南京师范大学</td>
                        </tr>
                        <tr>
                            <th>广东</th>
                            <td>中山大学</td>
                            <td>华南理工大学</td>
                            <td></td>
                        </tr>
                        <tr>
                            <th>山东</th>
                            <td>山东大学</td>
                            <td>中国海洋大学</td>
                            <td>中国石油大学（华东）</td>
                        </tr>
                        <tr>
                            <th>湖南</th>
                            <td>中南大学</td>
                            <td></td>
                            <td></td>
                        </tr>
                        <tr>
                            <th>辽宁</th>
                            <td>东北大学</td>
                            <td></td>
                            <td></td>
                        </tr>
                        <tr>
                            <th>安徽</th>
                            <td>中国科学技术大学</td>
                            <td></td>
                            <td></td>
                        </tr>
                    </table>
                </div>
                <div class="sino-foreign_cooperation">
                    <h5 class="title">中外合作院校</h5>
                    <table width="1200" border="1">
                        <tr height="45" bgcolor="#2a75db" class="table_header">
                            <th align="center">省市</th>
                            <th colspan="3" align="center">学校</th>
                        </tr>
                        <tr>
                            <th>江苏</th>
                            <td>西交利物浦大学</td>
                            <td>昆山杜克大学</td>
                            <td></td>
                        </tr>
                        <tr>
                            <th>浙江</th>
                            <td>温州肯恩大学</td>
                            <td>宁波诺丁汉大学</td>
                            <td></td>
                        </tr>
                        <tr>
                            <th>上海</th>
                            <td>上海纽约大学</td>
                            <td></td>
                            <td></td>
                        </tr>
                        <tr>
                            <th>广东</th>
                            <td>香港中文大学（深圳）</td>
                            <td>深圳北理莫斯科大学</td>
                            <td>北京师范大学·香港浸会大学联合国际学院</td>
                        </tr>
                    </table>
                </div> 
            </div>    
        </div>
    </div>
</template>
<style type="text/css" lang='less' scoped>
.zonghepingjia {
    padding-bottom: 80px;
    .banner {
        img {
            width: 100%;
        }
    }
    .inner {
        width: 1200px;
        margin: 0 auto;
    }
    // 主要内容标题
    h5.main_title {
        font-size: 26px;
        font-weight: 600;
        text-align: center;
        height: 116px;
        line-height: 116px;
        color: #333;
    }
    .small_title {
        text-align: center;
        font-size: 20px;
        color: #666;
        font-weight: 600;
        margin-top: -20px;
        margin-bottom: 30px;
    }
    .more_hard {
        .toolBox {
            background-color: #fff;
            padding-bottom: 20px;
            p {
                text-align: center;
                color: #333;
                font-size: 17px;
                line-height: 1.5em;
                font-weight: 600;
                margin-bottom: 20px;
            }

        }
        .tool {
            box-sizing: border-box;
            position: relative;
            top: -50px;
            background-color: #fff;
            height: 160px;
            display: flex;
            border-radius: 3px;
            box-shadow: 0px 0px 15px #edeeee;
            padding: 30px 40px 0px 40px;
            justify-content: space-around;
            li {
                // flex: 1;
                cursor: pointer;
                text-align: center;
                &:hover {
                    img {
                        animation: moveUp 1s ease;
                    }
                    .title {
                        color: #3492f9;
                    }
                }
                .title {
                    line-height: 50px;
                    text-align: center;
                    color: #333;
                    font-size: 15px;
                    font-weight: 600;
                    &:hover {
                        color: #3492f9;
                    }
                }
            }
            @keyframes moveUp {
                0% {
                    transform: translate(0px, 0px);
                }
                50% {
                    transform: translate(0px, -15px);
                }
                100% {
                    transform: translate(0px, 0px);
                }
            }
            
        }
        .content {
            height: 460px;
            background: url(/imgs/shengxueguihua/common/icon_yuan01.png) no-repeat center 100px;
            position: relative;
            .content_box {
                width: 245px;
                position: absolute;
                &:nth-child(1) {
                    left: 486PX;
                    top: 8PX;
                }
                &:nth-child(2) {
                    left: 150PX;
                    top: 270PX;
                }
                &:nth-child(3) {
                    left: 800px;
                    top: 270PX;
                }
                .title {
                    font-size: 16px;
                    line-height: 30px;
                    color: #333;
                    font-weight: 600;
                }
                .detail {
                    font-size: 14px;
                    color: #333;
                    line-height: 22px;
                }

            }
        }
    }
    .howStudent {
        padding-bottom: 50px;
        background-color: #fff;
        ul {
            display: flex;
            justify-content: space-between;
            li {
                width: 360px;
                height: 88px;
                box-sizing: border-box;
                padding-left: 140px;
                line-height: 88px;
                font-size: 16px;
                font-weight: 600;
                color: #333;
                box-shadow: 0px 0px 5px #dedede;
            }
        }
    }
    .whyJoin {
        padding-bottom: 50px;
        ul {
            display: flex;
            justify-content: space-between;
            li {
                box-sizing: border-box;
                width: 360px;
                padding: 40px;
                background-color: #fff;

                img {
                    display: block;
                    margin: 0 auto;
                }
                .title {
                    text-align: center;
                    line-height: 70px;
                    font-size: 16px;
                    font-weight: 600;
                    color: #333;
                }
                .detail {
                    color: #333;
                    font-size: 14px;
                    line-height: 1.5em;
                }


            }
        }
    }
    .notice {
        background-color: #fff;
        ul {
            overflow: hidden;
            li {
                margin-bottom: 70px;
                display: flex;
                img {
                    margin-right: 45px;
                }
                .main_detail {
                    padding: 20px 0;
                    .title {
                            font-size: 20px;
                            font-weight: 600;
                            margin-bottom: 20px;
                            color: #333;
                    }
                    .detail {
                        color: #666;
                        font-size: 14px;
                        line-height: 1.5em;
                    }
                }

            }
        }
    }
    .our_services {
        background-color: #fff;
        padding-bottom: 30px;
        ul {
            display: flex;
            flex-wrap: wrap;
            justify-content: space-between;
            &:last-child {
                width: 800px;
                margin: 0 auto;
            }
            li {
                padding: 20px;
                width: 330px;
                text-align: center;
                img {
                    text-align: center;
                }
                .title {
                    font-size: 17px;
                    font-weight: 600;
                    line-height: 50px;
                    color: #333;
                }
                .detail {
                    font-size: 14px;
                    line-height: 1.5em;
                    text-align: center;
                }
            }
        }
    }
    .advice {
        background-color: #f5f7f9;
        ul {
            display: flex;
            flex-wrap: wrap;
            justify-content: space-between;
            li {
                width: 573px;
                box-shadow: 0px 0px 5px #dedede;
                margin-bottom: 45px;
                .box {
                    padding: 20px 30px;
                    color: #333;
                    .title {
                        font-size: 17px;
                        margin-bottom: 12px;
                        font-weight: 600;
                    }
                    .detail {
                        font-size: 14px;
                        line-height: 1.5em;
                    }
                }
            }
        }
    }
    .mission {
        height: 910px;
        background: url(/imgs/shengxueguihua/zizhuzhaosheng/bg_youshi.png) no-repeat center 0px;
        background-color: #f5f7f9;
        .inner {
            height: 910px;
            position: relative;
        }
        .content {
            padding: 0px 72px;
            height: 218px;
            width: 1058px;
            position: absolute;
            left: 0px;
            bottom: 58px;
            ul {
                display: flex;
                justify-content: space-between;
                li {
                    box-sizing: border-box;
                    width: 340px;
                    padding: 0px 60px;
                    .title {
                        line-height: 48px;
                        text-align: center;
                        font-size: 20px;
                        font-weight: 600;
                        color: #333;
                    }
                    .detail {
                        line-height: 28px;
                        color: #333;
                        font-size: 16px;
                        text-align: center;
                    }
                }
            }
        }
    }
    .key_institutions_and_cjv {
        .title {
            line-height: 126px;
            font-size: 26px;
            font-weight: 600;
            text-align: center;
            height: 126px;
            color: #333;
        }
        .Key_Institutions {
           table {
                border: 1px solid #cccccc;
                border-collapse: collapse;
                border-spacing: 0;
                .table_header {
                    th {
                        color: #fff;
                        font-size: 16px;
                        font-weight: 600;
                        text-align: center;
                        background-color: #2a75db;
                        height: 44px;
                        border: 1px solid #cccccc;
                    }
                    
                }
                tr {
                    th {
                        text-align: center;
                        background-color: #e4f0fe;
                        color: #333;
                        width: 248px;
                        border: 1px solid #cccccc;

                    }
                    td {
                        font-size: 14px;
                        text-align: center;
                        color: #333;
                        height: 38px;
                        width: 316px;
                        border: 1px solid #cccccc;
                    }
                }
           }
        }
        .sino-foreign_cooperation {
            .Key_Institutions;
        }

    }
    .tool {
        ul {
            height: 220px;
            display: flex;
            justify-content: space-between;
            li {
                width: 122px;
                cursor: pointer;
                .title {
                    line-height: 60px;
                    text-align: center;
                    color: #3592fa;
                    font-size: 18px;
                    font-weight: 600;
                }
            }
        }
    }

}
</style>
<script>
export default {
    // components: { Yuanxiaoku, Zhuanyeku, Zhiyeku },
    // props: [ 'message' ],
     data() {
        return { 
            qingkuang: [
                { title: '', detail: '在上海，复旦大学、上海交通大学，90%以上的招生名额，都投放在综合评价招生' },
                { title: '', detail: '在浙江，北大 、清华 、复旦等名校的综评名额，占比亦超过90%' },
                { title: '', detail: '在江苏，南京大学、东南大学、江苏大学等20多所重点高校也进行综合评价招生' }
            ],
            // 为什么要参与综合评价？
            whyJoin: [ 
                { imgUrl: '/imgs/shengxueguihua/common/icon_mingxiao.png', title: '增加学生进入名校机会', detail: '综合评价实施院校及区域不断壮大，不仅包括重点院校和中外合作院校，省属高校也有招生计划。并且在同一省份的综合评价招生中，高校层次分布较广，能够覆盖优等生和中等生。' },
                { imgUrl: '/imgs/shengxueguihua/common/icon_shuangbaoxian.png', title: '高考双保险', detail: '如果考生在高考时，较平常发挥失常的话，在高考裸分不占优势的情况下，有可能凭借综合成绩冲进目标院校。' },
                { imgUrl: '/imgs/shengxueguihua/common/icon_jiaoyuziyuan.png', title: '优先获得教育资源', detail: '部分重点招考院校如清华面向全国的招生简章中明确对于通过高校测试的学生，不仅会得到录取优惠，还能优先部分教育资源，如参加骨干项目、海外实习机会、创新实践活动等诸多资源，有利于考生今后的成长发展。' }
            ],
            notice: [
                { imgUrl: '/imgs/shengxueguihua/common/icon_quanguozhaosheng.png', title: '某些具有综合评价招生资格的高校并不是面向全国招生', detail: '比如中国科学院大学2019年只在北京、山东、江苏、浙江、陕西、湖南、四川7个省市招生。每个省份的情况不同，我们要多关注相关动态。' },
                { imgUrl: '/imgs/shengxueguihua/common/icon_shidiangaoxiao.png', title: '在具有综合评价招生资格的试点高校中，并不是所有的专业都以这一形式招生', detail: '综评招生专业是学校的部分专业，当然也包含学校的特色和优势专业。' },
                { imgUrl: '/imgs/shengxueguihua/common/icon-buchongtu.png', title: '报考综合评价与报考专项计划等其他方式不冲突', detail: '综合评价和专项计划可以兼报，并不矛盾冲突，学生参与综合评价相当于多了一份选择的机会。' }
            ],
            howStudent: [
                { imgUrl: '/imgs/shengxueguihua/common/icon_xuexichengjibucuo.png',title: '学习成绩不错' },
                { imgUrl: '/imgs/shengxueguihua/common/icon_xingqutechang.png',title: '有一定的兴趣特长' },
                { imgUrl: '/imgs/shengxueguihua/common/icon_jingsai.png',title: '竞赛奖项不是必须' }
            ],
            // 综合评价招生报考建议
            advice: [
                { imgUrl:'/imgs/shengxueguihua/common/icon_01.png',title: '1.文化课成绩不一定最好', detail: '如果你的文化成绩排名不是很靠前，但综合素质发展比较均衡，不妨尝试报考一下综合评价招生。它作为独立批次，不会影响高考的录取。' },
                { imgUrl:'/imgs/shengxueguihua/common/icon_02.png',title: '2.提高综合素养能力', detail: '在高中动手能力强、有相关学科的实践经验或是有从事社会事务经验的考生，在报考中会有一些优势。相反，除了学习以外，动手能力不强，对社会关注度不高，缺乏社会基本沟通能力的考生，会在考核中处于劣势。' },
                { imgUrl:'/imgs/shengxueguihua/common/icon_03.png',title: '3.对专业有清晰规划', detail: '对专业认知度很高的考生，也就是说一定想读这类专业，甚至想好了毕业后也从事这个专业领域，对这类专业有特别的兴趣爱好，也有一定的专业知识积累，这类考生一定是招生青睐的对象。' },
                { imgUrl:'/imgs/shengxueguihua/common/icon_04.png',title: '4.提前规划和准备', detail: '有不少家长认为孩子高三再准备综合评价也可以，但是实际上一份具有含金量的综评材料需要很多素材支撑，如果在高三才着手准备，往往会把自己和孩子都搞得手忙脚乱，甚至影响孩子高三的复习。所以在学生高一阶段就应当提前准备，这样到了高三才能游刃有余，留出充足的时间备战高考。' },
            ],
            // 我们的服务
            our_services: [
                { imgUrl:'/imgs/shengxueguihua/common/icon_mubiaodingwei.png', title:'目标定位',detail: '通过专业测评定位目标职业和专业，学生明晰未来发展的方向' },
                { imgUrl:'/imgs/shengxueguihua/common/icon_beijingtisheng.png', title:'背景提升',detail: '通过社会实践、研学营、大赛指导、自荐信指导等背景提升使学生获取参加综合评价的实' },
                { imgUrl:'/imgs/shengxueguihua/common/icon_zexiaofanfan.png', title:'择校方案',detail: '根据学生的成绩、材料和奖项，结合学生专业定位并参考高校简章，为学生提供择校方案' },
                { imgUrl:'/imgs/shengxueguihua/common/icon_chushenbaokao.png', title:'初审报考',detail: '协助每个学生按照报考要求搜集、检查各项准备材料，指导家长进行各项准备，完成网上报考，并对初审结果进行跟踪' },
                { imgUrl:'/imgs/shengxueguihua/common/icon_fushifudao.png', title:'复试辅导',detail: '根据学生通过初审学校的情况，选择性挑选学生自身需要的笔面试课程，提前做好针对性笔面试准备。线上线下相结合，提供一对一模拟面试指导，增加复试通过率' },
            ],
            // 我们的优势
            mission: [
                { title: '雄厚的师资力量', detail: '授课老师全部来自985顶尖名校，并拥有自主招生考试经历，高效指导学生校考' },
                { title: '强大的教研团队', detail: '潜心研究各类招生校考，实战经验丰富，根据学生和高校的情况科学定制解决方案' },
                { title: '完善的教学服务', detail: '每位学生匹配专业老师，全程匹配跟踪服务，将高质量服务贯彻每一个环节' }
            ]
        }
    },
    methods: {
        changeRouter(url) {
            this.$router.push(url);
            window.scroll(0,0);
        }
    },
    created() {
    }
}
</script>

