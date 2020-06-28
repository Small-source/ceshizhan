<template>
    <!-- 升学途径 其他主流途径 -->
    <!--  (三大专项计划)-->
    <div class="three_special_plan">
        <div class="banner">
            <img src="/imgs/wayToStudy/main/banner.png" alt="">
        </div>
        <div class="main">
            <h6 class="main_title">什么是三大专项计划 ？</h6>
            <div class="main_box">
                <p>三大专项计划是指：国家专项计划、高校专项计划以及地方专项计划，三大专项计划实质上是招生政策在贫困地区的倾斜，主旨都是为了帮助贫困地区的学生。虽然三大专项计划都是面对贫困地区的学生，但也有具体的差别，各位小伙伴在做相关报考功课时，一定要注意区分。</p>
            </div>    
        </div>
        <div class="main plan">
            <h6 class="plan_title">国家专项计划</h6>
            <ul class="plan_box">
                <li v-for="(item, index) in country_plan" :key="index">
                    <p class="title">{{item.title}}</p>
                    <div class="detail_box">
                        <p class="detail_title">{{item.detail_title}}</p>
                        <p v-for="(child, index) in item.detail" :key="index">{{child}}</p>
                    </div>
                </li>
            </ul>
        </div>
        <div class="main plan">
            <h6 class="plan_title">地方专项计划</h6>
            <ul class="plan_box">
                <li v-for="(item, index) in place_plan" :key="index">
                    <p class="title">{{item.title}}</p>
                    <div class="detail_box">
                        <p class="detail_title">{{item.detail_title}}</p>
                        <p v-for="(child, index) in item.detail" :key="index">{{child}}</p>
                    </div>
                </li>
            </ul>  
        </div>
        <div class="main plan">
            <h6 class="plan_title">高校专项计划</h6>
            <ul class="plan_box">
                <li v-for="(item, index) in university_plan" :key="index">
                    <p class="title">{{item.title}}</p>
                    <div class="detail_box">
                        <p class="detail_title">{{item.detail_title}}</p>
                        <p v-for="(child, index) in item.detail" :key="index">{{child}}</p>
                    </div>
                </li>
            </ul>
        </div>
        <!-- 三大计划区别 -->
        <div class="main">
            <h6 class="main_title university_plan">三大计划区别</h6>
            <table>
                <tr>
                    <th>计划名称</th>
                    <th>户籍要求</th>
                    <th>招生范围</th>
                    <th>招生院校</th>
                    <th>录取方式</th>
                    <th>录取层次</th>
                </tr>
                <tr v-for="(item, index) in three_plan_difference" :key="index">
                    <td>{{item.title}}</td>
                    <td>{{item.require}}</td>
                    <td>{{item.range}}</td>
                    <td>{{item.school}}</td>
                    <td>{{item.admission_method}}</td>
                    <td>{{item.enrollment_level}}</td>      
                </tr>
            </table>
        </div>
        <!-- 单招流程 -->
        <div class="universities main">
            <h6 class="main_title">2017年高校专项计划试点高校名单<span>*由于各方面条件不断调整变化，请考生以各省考试院公布的最新消息为主</span></h6>
            <div class="school_box"  v-for="(item, index) in universities" :key="index">
                <p class="school_title">{{item.title}}</p>
                <ul>
                    <li v-for="(school, index) in item.schoolName" :key="index" @click="goUniversity(school)"><span>{{school}}</span></li>
                </ul>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    // components: { Yuanxiaoku },
    // props: [ 'message' ],
     data() {
        return {
            // 国家专项计划
            country_plan: [
                { title: '什么样的学生可以报考国家专项计划？', detail_title: '报考学生须同时具备下列三项条件：', detail: ['(1)符合2017年统一高考报名条件；', '(2)本人具有实施区域当地连续3年以上户籍，其父亲或母亲或法定监护人具有当地户籍；', '(3)本人具有户籍所在县高中连续3年学籍并实际就读。'] },
                { title: '哪些高校具有国家专项计划招生资格？', detail_title: '', detail: ['国家专项计划招生学校为中央部门高校和各省(区、市)所属重点高校。', '本科计划由中央部门高校和在本科一批招生的地方高校共同承担招生及培养任务，高职计划由国家示范性(含骨干)高等职业学校承担招生及培养任务。', '具体高校可登陆本省教育考试院官网查看。'] },
                { title: '如何报考国家专项计划？', detail_title: '', detail: ['报考国家专项计划考生均须参加当年全国统一考试，根据各省招办要求填报志愿。在本科一批前开始投档录取，录取分数原则上不低于招生学校所在批次科类录取控制分数线。同批次内生源不足时，高校应通过多次公开征集志愿方式录取。经征集志愿仍未完成的计划，应适当降分录取。'] },
            ],
            // 地方专项计划
            place_plan: [
                { title: '什么样的学生可以报考地方专项计划？', detail_title: '什么样的学生可以报考地方专项计划？', detail: ['可登陆本省教育考试院官网查看。', '地方专项计划的具体实施区域、报考条件和录取办法由各省(区、市)根据本地实际情况确定，实施区域要对本省(区、市)民族自治县实现全覆盖。'] },
                { title: '哪些高校具有地方专项计划招生资格？', detail_title: '', detail: ['地方专项计划定向招收各省(区、市)实施区域的农村学生，招生学校为各省(区、市)所属重点高校。', '具体高校可登陆本省教育考试院官网查看'] },
                { title: '如何报考地方专项计划？', detail_title: '', detail: ['报考地方专项计划考生均须参加当年全国统一考试。具体报名要求、录取办法、填报志愿方式考生可详细阅读各省招生考试单位下发的地方专项计划相关规定。'] }
            ],
            // 高校专项计划
            university_plan: [
                { title: '什么样的学生可以报考高校专项计划？', detail_title: '报考学生须同时具备下列三项条件：', detail: ['(1)符合2017年统一高考报名条件；', '(2)本人及父亲或母亲或法定监护人户籍地在实施区域的农村，本人具有当地连续3年以上户籍；', '(3)本人具有户籍所在县高中连续3年学籍并实际就读。'] },
                { title: '哪些高校具有高校专项计划招生资格？', detail_title: '', detail: ['高校专项计划招生学校为教育部直属高校和其他自主招生试点高校。', '2017年，全国共95所高校具有高校专项计划招生资格。具体招生高校名单见底部列表。'] },
                { title: '如何报考高校专项计划？', detail_title: '', detail: ['报考高校专项计划考生均须参加当年全国统一考试，并于4月底前在阳光高考网完成报名，按照高校简章要求提交相应材料及参与后续考核，获得相应优惠分数。高校专项计划单报志愿、单独录取，录取分数原则上不低于有关高校所在批次科类录取控制分数线。'] }
            ],
            // 三大专项计划区别
            three_plan_difference: [
                { title: '国家专项计划', require: '国家国家专项计划实施区域的城市户籍或农村户籍的考生，只要符合报考条件和要求就可以。', range: '定向招收集中连片特殊困难县、国家级扶贫开发重点县以及新疆南疆四地州学生。', school: '由中央部门和地方本科一批招生为主的学校。', admission_method: '不需要单独报名和递交其它材料，高考成绩下发后，单独设置志愿填报及录取批次，省招办单独划线，单独录取。',enrollment_level: '有一本及二本院校层次录取，在高考录取过程中二本分数也可以通过国家专项计划中未完成招生计划的一本院校在二本控制线上征集志愿，进而录取到一本院校。' },
                { title: '地方专项计划', require: '只限于指定县市的农村户籍的考生。', range: '主要招收各省（区、市）实施区域的农村学生。', school:'地方省属重点高校', admission_method: '不需要单独报名和递交其它材料，高考成绩下发后，单独设置志愿填报及录取批次，省招办单独划线，单独录取。',enrollment_level: '只有所在省市的部分一本院校和二本院校中的一本专业。' },
                { title: '高校专项计划', require: '只限于指定县市的农村户籍的考生。', range: '主要招收边远、贫困、民族等地区县以下的农村学生。', school: '具有高校专项计划招生资格的重点高校。', admission_method: '需要在“阳光高考”平台里单独报名，并提交相应的纸质材料，经过该校专家审核后，于固定日期到该校参加笔试和面试（有的学校不需要笔试和面试），合格后享受该校一定的录取分数照顾。',enrollment_level: '对生源质量要求较高。' },
            ],
            universities: [
                { title: '教育部直属高校', schoolName: ["北京大学","清华大学","中国人民大学","北京交通大学","北京科技大学","北京化工大学","北京邮电大学","中国农业大学","中国政法大学","华北电力大学","北京林业大学","北京中医药大学","北京师范大学","北京外国语大学","北京语言大学","中国传媒大学","中央财经大学","对外经济贸易大学","中国矿业大学(北京)","中国石油大学(北京)","中国地质大学(北京)","南开大学","天津大学","复旦大学","同济大学","上海交通大学","华东理工大学","东华大学","华东师范大学","上海外国语大学","上海财经大学","南京大学","东南大学","中国矿业大学","河海大学","江南大学","南京农业大学","中国药科大学","浙江大学","合肥工业大学","厦门大学","山东大学","中国海洋大学","中国石油大学(华东)","大连理工大学","东北大学","吉林大学","东北师范大学","东北林业大学","武汉大学","华中科技大学","中国地质大学(武汉)","武汉理工大学","华中农业大学","华中师范大学","中南财经政法大学","湖南大学","中南大学","中山大学","华南理工大学","重庆大学","西南大学","四川大学","西南交通大学","电子科技大学","西南财经大学","西安交通大学","西安电子科技大学","长安大学","西北农林科技大学","陕西师范大学","兰州大学"] },
                { title: '教育部直属高校', schoolName: ["北京航空航天大学","北京理工大学","哈尔滨工业大学","哈尔滨工程大学","南京航空航天大学","南京理工大学","西北工业大学","大连海事大学","中国科学技术大学","北京工业大学","黑龙江大学","上海大学","苏州大学","南京师范大学","福州大学","郑州大学","湖南师范大学","广西大学","西南政法大学","四川农业大学","贵州大学","云南大学","西北大学"] },
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
    @import "../study_way_common.less";
    .three_special_plan {
        background-color: #fff;
        padding: 20px;
        .plan {
            .plan_title {
                text-align: center;
                line-height: 40px;
                font-size: 20px;
                color: #2c8ffc;
                font-weight: 600;
                padding-bottom: 20px;
            }
            ul {
                display: flex;
                justify-content: space-between;
                li {
                    width: 30%;
                    border-radius: 5px;
                    box-shadow: 0px 0px 10px #dedede;
                    .title {
                        line-height: 40px;
                        background-color: #2c8ffc;
                        color: #fff;
                        text-align: center;
                        border-radius: 5px 5px 0px 0px;
                    }
                    .detail_box {
                        padding: 10px;
                        p {
                            color: #666;
                            margin-bottom: 5px;
                            line-height: 24px;
                        }
                        .detail_title {
                            color: #333;
                            font-weight: 600;
                            
                        }
                    }

                }
            }    
        }
        .main {
            table {
                border: 1px solid #eaeaea;
                font-size: 14px;
                text-align: center;
                tr {
                    th {
                        line-height: 50px;
                        text-align: center;
                        border: 1px solid #60badf;
                        background-color: #60badf;
                        color: #fff;
                        &:nth-child(1) {
                            width: 15%; 
                        }
                        &:nth-child(2) {
                            width: 15%; 
                        }
                        &:nth-child(3) {
                            width: 15%; 
                        }
                        &:nth-child(4) {
                            width: 15%; 
                        }
                        &:nth-child(5) {
                            width: 20%; 
                        }
                        &:nth-child(6) {
                            width: 20%; 
                        }
                    }
                }
                tr {
                    &:nth-child(odd) {
                        background-color: #e6f8ff;
                    }
                    td {
                        border: 1px solid #eaeaea;
                        min-height: 40px;
                        align-items: center;
                        padding: 10px;
                        text-align: left;
                        &:first-child {
                            cursor: pointer;
                            text-align: center;
                        }
                        p {
                            line-height: 24px;
                        }
                        a {
                            color: #2c8ffc;
                        }
                    }
                }
            }
        }
        .universities  ul {
            overflow: hidden;
            width: 933px;
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
            }
        }
    }
</style>