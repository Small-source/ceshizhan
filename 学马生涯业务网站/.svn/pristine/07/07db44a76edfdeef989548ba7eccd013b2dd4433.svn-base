<template>
    <div class="gangaoliuxue">
        <div class="banner">
        </div>
        <div class="shengxueBox">
            <div class="shengxue">
                <h1>为什么选择港澳升学</h1>
                <ul class="shengxueList">
                    <li>
                        <img src="/imgs/shengxueguihua/gangaoliuxue/icon_jiaoyuziyuan.png" alt="">
                        <p>优质的教育资源</p>
                        <p>香港的教育质量再世界范围内不负盛名，多所大学都名列世界百强，香港的大学学历在世界范围
                        内认可的程度非常高</p>
                    </li>
                    <div class="line"></div>
                    <li>
                        <img src="/imgs/shengxueguihua/gangaoliuxue/icon_biyexinzi.png" alt="">
                        <p>毕业薪资</p>
                        <p>港澳高校更注重孩子专业的实习经验，毕业后薪资待遇比国内大学高</p>
                    </li>
                    <div class="line"></div>
                    <li>
                        <img src="/imgs/shengxueguihua/gangaoliuxue/icon_shenzaojihui.png" alt="">
                        <p>深造机会</p>
                        <p>香港作为一个国际化的大都市，可以提供国际化的视野。每个学校均有与国际知名院校的学术交流
                        活动，每年有更多海外学习的机会</p>
                    </li>
                </ul>
            </div>
        </div>
        <div class="fuwuBox">
            <h1>我们的服务</h1>
            <ul class="fuwu">
                <li>
                    <img src="/imgs/shengxueguihua/gangaoliuxue/icon_fuwu.png" alt="">
                    <p>目标定位</p>
                    <p>通过专业测评定位目标职业和专业，学生明晰未来发展的方向</p>
                </li>
                <li>
                    <img src="/imgs/shengxueguihua/gangaoliuxue/icon_fuwu.png" alt="">
                    <p>背景提升</p>
                    <p>通过社会实践、研学营、大赛指导、自荐信指导等背景提升使
                        学生获取参加综合评价的实力</p>
                </li>
                <li>
                    <img src="/imgs/shengxueguihua/gangaoliuxue/icon_fuwu.png" alt="">
                    <p>择校方案</p>
                    <p>根据学生的成绩、材料和奖项，结合学生专业定位并参考高校简章，为学生提供择校方案</p>
                </li>
                <div class="liempty"></div>
                <li>
                    <img src="/imgs/shengxueguihua/gangaoliuxue/icon_fuwu.png" alt="">
                    <p>初审报考</p>
                    <p>协助每个学生按照报考要求搜集、检查各项准备材料，指导家长进行各项准备，完成网上报考
                        ，并对初审结果进行跟踪</p>
                </li>
                <li>
                    <img src="/imgs/shengxueguihua/gangaoliuxue/icon_fuwu.png" alt="">
                    <p>复试指导</p>
                    <p>根据学生通过初审学校的情况，选择性挑选学生自身需要的笔面试课程，提前做好针对性笔
                        面试准备。线上线下相结合，提供一对一模拟面试指导，增加复试通过率</p>
                </li>
                <div class="liempty"></div>
            </ul>
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
    </div>
</template>
<script>
    export default {
        name: "gaoaoliuxue",
        data() {
            return {
                mission: [
                    { title: '雄厚的师资力量', detail: '授课老师全部来自985顶尖名校，并拥有自主招生考试经历，高效指导学生校考' },
                    { title: '强大的教研团队', detail: '潜心研究各类招生校考，实战经验丰富，根据学生和高校的情况科学定制解决方案' },
                    { title: '完善的教学服务', detail: '每位学生匹配专业老师，全程匹配跟踪服务，将高质量服务贯彻每一个环节' }
                ]
            }
        }
    }
</script>

<style lang="less" scoped>
    .gangaoliuxue{
        .banner{
            height: 440px;
            overflow: hidden;
            background-size: auto 440px;
            background-image: url("/imgs/shengxueguihua/gangaoliuxue/banner.png");
            background-position: center center;
        }
        .shengxueBox{
            height:550px;
            background: #F6F7F9;
            .shengxue{
                width: 1200px;
                margin: 0 auto;
                h1{
                    text-align: center;
                    font-size: 25px;
                    color:#333333;
                    line-height: 125px;
                    font-weight: bolder;
                    letter-spacing: 4px;
                }
                .shengxueList{
                    width: 100%;
                    height: 370px;
                    background: #fff;
                    margin-bottom: 50px;
                    padding: 40px 100px;
                    box-sizing: border-box;
                    display: flex;
                    justify-content: space-between;
                    li{
                        width: 200px;
                        img{
                            display: block;
                            margin: 0 auto;
                        }
                        p:nth-of-type(1){
                            line-height: 70px;
                            text-align: center;
                            font-weight: bolder;
                            color: #343434;
                            letter-spacing: 1.5px;
                        }
                        p:nth-of-type(2){
                            font-size: 13px;
                            letter-spacing: 1.5px;
                            color: #343434
                        }
                    }
                    .line{
                        height: 100%;
                        width: 1px;
                        background: #D2D2D2;
                    }
                }
            }
        }
        .fuwuBox{
            *{
                box-sizing: border-box;
            }
            width: 100%;
            height: 600px;
            background-image: url('/imgs/shengxueguihua/gangaoliuxue/bg_fuwu.png');
            background-position:center center;
            h1{
                text-align: center;
                font-size: 25px;
                color:#FFFFFF;
                line-height: 125px;
                font-weight: bolder;
                letter-spacing: 4px;
            }
            .fuwu{
                width: 1200px;
                margin: 0 auto;
                display: flex;
                display: -webkit-flex;
                justify-content: space-between;
                flex-direction: row;
                flex-wrap: wrap;
                li{
                    width: 375px;
                    height: 142px;
                    background: #fff;
                    position: relative;
                    margin: 35px 0;
                    padding:  0 30px;
                    img{
                        position: absolute;
                        width: 75px;
                        height: 75px;
                        left: 30px;
                        top: -43px;
                    }
                    p:nth-of-type(1){
                        text-align: center;
                        letter-spacing:2px;
                        color:#333333;
                        font-weight: bolder;
                        position: relative;
                        z-index: 999;
                        line-height: 44px;
                        font-size: 18px;
                    }
                    p:nth-of-type(2){
                        font-size: 13px;
                        font-weight: bolder;
                        letter-spacing: 1.5px;
                        color:#666;
                        line-height: 24px;
                    }
                }
                .liempty{
                    width: 168px;
                    line-height: 50px;
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
                width: 1200px;
                margin: 0 auto;
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
    }
</style>