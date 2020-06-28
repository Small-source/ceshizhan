<template>
    <!-- 升学途径 其他主流途径 -->
    <!--  (高水平运动队)-->
    <div class="sports_team studyway_common_father">
        <div class="banner">
            <img src="/imgs/wayToStudy/main/banner.png" alt="">
        </div>
        <div class="main">
            <h6 class="main_title">什么是高水平运动队招生</h6>
            <div class="main_box">
                <p>根据教育部文件精神,报考高水平运动队的考生竞技水平要达到比较高的程度。考生要经过报名、测试、高考等几个环节的严格筛选，才能被高校顺利录取。教育部对高水平运动队招生项目也有明确的规定。</p>
            </div>    
        </div>
        <div class="application_condition main">
            <h6 class="main_title">招生情况</h6>
            <div class="main_box">
                <p><span>招生项目</span>：须在教育部核准公布的运动项目范围内招生。</p>
                <p><span>招生人数</span>：各校招生人数不超过本校上一年度本科招生计划总数的1%。</p>
            </div>
        </div>
        <div class="benefit main">
            <h6 class="main_title">报考条件是什么？</h6>
            <div class="main_box">
                <p>1.符合普通高校年度招生工作规定的报名要求、年龄不超过22周岁且具备以下条件之一者方可参加高水平运动员招生考试报名：</p>
                <p>(1)高级中等教育学校毕业，获得国家二级运动员(含)以上证书且高中阶段在省级(含)以上比赛中获得集体项目前六名的主力队员或个人项目前三名者;</p>
                <p>(2)具有高级中等教育毕业同等学力，获得国家一级运动员(含)以上证书者，或近三年内在全国(或国际)集体项目比赛中获得前八名的主力队员。</p>
                <p>2.参加高水平运动员测试的考生应参加其户口所在地省级高校招生委员会办公室(以下简称省级招办)统一组织的高考报名。</p>
                <p>凡以同等学力报考的考生必须提供与高级中等教育相当的学习证明和成绩单，由省级教育行政部门协助招生院校对其资格进行认定。未经资格认定的同等学力考生不得报考。</p>
            </div>
        </div>
        <div class="remind main">
            <h6 class="main_title">特别提醒</h6>
            <div class="main_box">
                <p><span>1</span>文化课考试科目为语文、数学、政治、英语4科，每科满分为150分，4科满分为600分。考试时间一般在4月份。考试大纲将在教育部阳光高考平台和中国运动员文化教育网公布。</p>
                <p><span>2</span>凡符合试点高校高水平运动队报名条件且获得一级运动员、运动健将、国际健将称号之一，拟申请试点高校单独招生考试资格的考生，应及时登录教育部阳光高考平台或中国运动员文化教育网的“高校高水平运动队文化考试报名系统”自主报名、交费。</p>
                <p><span>3</span>高水平运动队招生录取的专业一般为文理科专业，所有考生入校后均须参加运动队教学训练和竞赛活动，录取高校与考生签订协议，明确入校后参加运动队的义务和责任。</p>
            </div>   
        </div>
        <div class="sport_universities">
            <h6 class="main_title">
                招生院校信息 
                <span>*由于各方面条件不断调整变化，请考生以各省考试院公布的最新消息为主</span>
            </h6>
            <ul class="detail_title">
                <li>
                    <p>学校名称</p>
                    <p>教育部批准招生项目</p>
                </li>
                <li>
                    <p>学校名称</p>
                    <p>教育部批准招生项目</p>
                </li>
            </ul>
            <ul class="detail_box">
                <li v-for="(item, index) in universities" :key="index">
                    <p class="school_name" @click="goUniversity(item.name)">{{item.name}}</p>
                    <p class="school_detail">{{item.detail}}</p>
                </li>
            </ul>
        </div>
    </div>
</template>
<script>
export default {
    // components: { Yuanxiaoku },
    // props: [ 'message' ],
     data() {
        return {
            universities: [{"name":"北京大学","detail":"田径、篮球、足球、乒乓球、羽毛球、健美操、游泳"},{"name":"复旦大学","detail":"田径、排球、游泳、武术、射击、足球"},{"name":"华中农业大学","detail":"羽毛球、田径"},{"name":"中国人民大学","detail":"田径、篮球、排球、足球、网球、武术"},{"name":"同济大学","detail":"田径、足球、游泳、羽毛球、手球、健美操"},{"name":"华中师范大学","detail":"田径、羽毛球、健美操"},{"name":"清华大学","detail":"田径、篮球、排球、游泳、射击、健美操、击剑、足球"},{"name":"上海交通大学","detail":"田径、篮球、游泳、乒乓球、网球、健美操、赛艇"},{"name":"湖北中医药大学","detail":"武术"},{"name":"北京交通大学","detail":"田径、篮球、排球、羽毛球、跆拳道"},{"name":"华东理工大学","detail":"田径、篮球、乒乓球、网球、武术、射击"},{"name":"湖北大学","detail":"田径、足球、武术、乒乓球"},{"name":"北京科技大学","detail":"田径、篮球、足球、羽毛球、跆拳道"},{"name":"东华大学","detail":"田径、足球、手球、射击"},{"name":"三峡大学","detail":"武术、足球"},{"name":"中国石油大学(北京)","detail":"田径、羽毛球、游泳"},{"name":"华东师范大学","detail":"田径、篮球、排球"},{"name":"武汉科技大学","detail":"田径、篮球"},{"name":"北京邮电大学","detail":"乒乓球、武术"},{"name":"上海外国语大学","detail":"棒球、棋牌"},{"name":"湖北工业大学","detail":"篮球、乒乓球"},{"name":"华北电力大学","detail":"田径、篮球"},{"name":"上海财经大学","detail":"游泳、网球、棋牌"},{"name":"武汉工程大学","detail":"健美操"},{"name":"北京化工大学","detail":"篮球、网球、健美操"},{"name":"上海大学","detail":"田径、排球、网球、武术"},{"name":"武汉轻工大学","detail":"篮球"},{"name":"中国农业大学","detail":"田径、足球、橄榄球"},{"name":"上海理工大学","detail":"田径、足球"},{"name":"湖北经济学院","detail":"田径、排球"},{"name":"北京林业大学","detail":"田径"},{"name":"上海海事大学","detail":"游泳、武术、龙舟"},{"name":"中南大学","detail":"田径、篮球、排球、射击、足球"},{"name":"北京中医药大学","detail":"武术、健美操、女子足球"},{"name":"上海工程技术大学","detail":"足球、篮球"},{"name":"湖南大学","detail":"田径、篮球、足球"},{"name":"北京师范大学","detail":"田径、篮球、足球、排球、健美操"},{"name":"上海海洋大学","detail":"田径"},{"name":"湘潭大学","detail":"田径、篮球、羽毛球"},{"name":"北京外国语大学","detail":"游泳"},{"name":"上海中医药大学","detail":"排球、武术"},{"name":"长沙理工大学","detail":"田径、足球"},{"name":"对外经济贸易大学","detail":"篮球"},{"name":"华东政法大学","detail":"棒球、垒球"},{"name":"南华大学","detail":"排球"},{"name":"中央财经大学","detail":"室内排球、沙滩排球"},{"name":"上海立信会计金融学院","detail":"击剑"},{"name":"湖南工业大学","detail":"田径、篮球"},{"name":"中国政法大学","detail":"排球、乒乓球、羽毛球"},{"name":"上海电力学院","detail":"手球、击剑"},{"name":"湖南农业大学","detail":"足球"},{"name":"中央民族大学","detail":"网球、排球"},{"name":"南京大学","detail":"田径、篮球、排球、足球"},{"name":"湖南师范大学","detail":"田径、篮球、排球、乒乓球"},{"name":"北京理工大学","detail":"田径、足球、武术"},{"name":"东南大学","detail":"田径、排球、游泳、乒乓球、射击、定向越野"},{"name":"湘南学院","detail":"篮球、定向越野"},{"name":"北京航空航天大学","detail":"田径、排球、足球、羽毛球"},{"name":"中国矿业大学","detail":"田径、篮球、游泳、网球、定向越野"},{"name":"湖南人文科技学院","detail":"足球、定向越野"},{"name":"北京联合大学","detail":"足球、健美操"},{"name":"河海大学","detail":"足球、健美操、乒乓球"},{"name":"中南林业科技大学","detail":"田径、排球"},{"name":"北京工业大学","detail":"篮球、足球、排球、游泳、羽毛球"},{"name":"江南大学","detail":"棒球、足球"},{"name":"国防科学技术大学","detail":"田径、篮球、足球"},{"name":"北方工业大学","detail":"棒球、垒球"},{"name":"南京农业大学","detail":"女子排球、武术、网球"},{"name":"中山大学","detail":"田径、排球、游泳、击剑"},{"name":"首都师范大学","detail":"健美操、定向越野"},{"name":"中国药科大学","detail":"排球、健美操"},{"name":"华南理工大学","detail":"田径、篮球、排球、乒乓球、足球"},{"name":"首都经济贸易大学","detail":"篮球、游泳"},{"name":"南京理工大学","detail":"田径、篮球"},{"name":"暨南大学","detail":"田径、游泳、羽毛球、网球、武术"},{"name":"北京石油化工学院","detail":"田径"},{"name":"南京航空航天大学","detail":"田径、篮球、足球、乒乓球"},{"name":"深圳大学","detail":"乒乓球、定向越野"},{"name":"中国地质大学(北京)","detail":"田径、攀岩、跆拳道"},{"name":"苏州大学","detail":"田径、游泳、篮球"},{"name":"广东工业大学","detail":"篮球、足球、乒乓球"},{"name":"南开大学","detail":"田径、排球、棋牌"},{"name":"扬州大学","detail":"田径、乒乓球、武术"},{"name":"华南农业大学","detail":"羽毛球"},{"name":"天津大学","detail":"田径、篮球、游泳"},{"name":"江苏大学","detail":"排球、足球"},{"name":"华南师范大学","detail":"田径、游泳、乒乓球、羽毛球、武术"},{"name":"中国民航大学","detail":"篮球、柔道"},{"name":"南京邮电大学","detail":"篮球、足球"},{"name":"广州大学","detail":"篮球"},{"name":"天津工业大学","detail":"田径、排球、游泳、健美操、龙舟"},{"name":"南京工业大学","detail":"田径、篮球、棒球、垒球"},{"name":"韩山师范学院","detail":"定向越野"},{"name":"天津科技大学","detail":"乒乓球、健美操、龙舟"},{"name":"南京师范大学","detail":"田径、网球"},{"name":"广东财经大学","detail":"田径、游泳"},{"name":"天津理工大学","detail":"排球、武术、跆拳道、柔道"},{"name":"江苏师范大学","detail":"田径、足球"},{"name":"汕头大学","detail":"篮球"},{"name":"天津医科大学","detail":"游泳、龙舟"},{"name":"南京财经大学","detail":"田径、篮球、羽毛球"},{"name":"广西大学","detail":"篮球、游泳、乒乓球、羽毛球、健美操"},{"name":"天津师范大学","detail":"田径、足球、龙舟、棋牌"},{"name":"南通大学","detail":"田径、击剑"},{"name":"桂林电子科技大学","detail":"网球"},{"name":"天津外国语大学","detail":"网球、击剑、龙舟"},{"name":"南京信息工程大学","detail":"排球、乒乓球、跆拳道"},{"name":"广西师范大学","detail":"田径、篮球、足球"},{"name":"天津财经大学","detail":"田径、篮球、定向越野"},{"name":"苏州科技大学","detail":"羽毛球"},{"name":"广西民族大学","detail":"足球、龙舟"},{"name":"天津商业大学","detail":"游泳"},{"name":"浙江大学","detail":"田径、篮球、网球、排球"},{"name":"广西中医药大学","detail":"羽毛球、武术"},{"name":"天津城建大学","detail":"足球"},{"name":"宁波大学","detail":"篮球、足球、乒乓球"},{"name":"广西师范学院","detail":"田径、篮球"},{"name":"燕山大学","detail":"排球"},{"name":"浙江工业大学","detail":"田径、定向越野"},{"name":"海南大学","detail":"田径、篮球、排球、足球"},{"name":"河北工程大学","detail":"田径、篮球、健美操"},{"name":"浙江理工大学","detail":"田径、篮球"},{"name":"海南师范大学","detail":"田径、篮球、排球、足球"},{"name":"河北农业大学","detail":"田径、排球"},{"name":"浙江中医药大学","detail":"武术"},{"name":"海南热带海洋学院(原琼州学院)","detail":"排球"},{"name":"河北师范大学","detail":"足球、排球"},{"name":"浙江师范大学","detail":"田径、篮球"},{"name":"重庆大学","detail":"田径、篮球、网球、足球"},{"name":"河北地质大学(原石家庄经济学院)","detail":"足球、攀岩"},{"name":"浙江工商大学","detail":"篮球、游泳"},{"name":"西南大学","detail":"足球、游泳、网球"},{"name":"河北传媒学院","detail":"足球、健美操"},{"name":"浙江财经大学","detail":"游泳、乒乓球"},{"name":"重庆邮电大学","detail":"乒乓球"},{"name":"山西大学","detail":"田径、篮球、健美操"},{"name":"合肥工业大学","detail":"篮球、手球"},{"name":"重庆师范大学","detail":"田径、篮球"},{"name":"太原理工大学","detail":"田径、篮球、足球"},{"name":"中国科学技术大学","detail":"羽毛球"},{"name":"重庆工商大学","detail":"排球"},{"name":"中北大学","detail":"排球、跆拳道"},{"name":"安徽工业大学","detail":"田径、篮球"},{"name":"西南政法大学","detail":"田径、排球"},{"name":"山西农业大学","detail":"田径"},{"name":"安徽工程大学","detail":"武术"},{"name":"重庆科技学院","detail":"女子足球"},{"name":"山西医科大学","detail":"健美操"},{"name":"安徽师范大学","detail":"田径、武术"},{"name":"重庆文理学院","detail":"篮球"},{"name":"山西师范大学","detail":"田径、篮球、健美操"},{"name":"安徽建筑大学","detail":"乒乓球、击剑"},{"name":"四川大学","detail":"田径、排球、足球、游泳、网球"},{"name":"山西财经大学","detail":"田径、篮球"},{"name":"合肥学院","detail":"击剑"},{"name":"西南交通大学","detail":"田径、篮球、排球、健美操"},{"name":"太原师范学院","detail":"游泳"},{"name":"厦门大学","detail":"田径、篮球、棒球、武术、健美操"},{"name":"电子科技大学","detail":"田径、篮球、足球、游泳、网球"},{"name":"内蒙古大学","detail":"足球"},{"name":"华侨大学","detail":"田径、篮球、足球、游泳、羽毛球"},{"name":"西南财经大学","detail":"篮球、健美操、网球、足球"},{"name":"内蒙古科技大学","detail":"田径、篮球、排球"},{"name":"集美大学","detail":"田径、游泳、武术"},{"name":"四川师范大学","detail":"篮球"},{"name":"内蒙古工业大学","detail":"排球"},{"name":"福州大学","detail":"游泳、篮球"},{"name":"西华大学","detail":"健美操、跆拳道、乒乓球"},{"name":"内蒙古农业大学","detail":"田径、篮球"},{"name":"福建师范大学","detail":"田径、篮球、游泳、排球"},{"name":"成都中医药大学","detail":"武术"},{"name":"内蒙古师范大学","detail":"田径、足球、摔跤、柔道"},{"name":"厦门理工学院","detail":"篮球、健美操"},{"name":"西华师范大学","detail":"射击"},{"name":"呼伦贝尔学院","detail":"冰雪"},{"name":"南昌大学","detail":"田径、篮球、排球、足球、赛艇"},{"name":"西南石油大学","detail":"网球"},{"name":"大连理工大学","detail":"田径、篮球"},{"name":"华东交通大学","detail":"田径、篮球、网球、武术"},{"name":"成都学院","detail":"足球"},{"name":"东北大学","detail":"田径、篮球、羽毛球、冰雪"},{"name":"南昌航空大学","detail":"羽毛球"},{"name":"贵州大学","detail":"田径、篮球、乒乓球、足球"},{"name":"辽宁大学","detail":"篮球"},{"name":"江西师范大学","detail":"田径、足球、健美操、跆拳道"},{"name":"贵州师范大学","detail":"足球"},{"name":"大连大学","detail":"田径、游泳"},{"name":"江西财经大学","detail":"网球"},{"name":"云南大学","detail":"田径"},{"name":"沈阳理工大学","detail":"足球"},{"name":"井冈山大学","detail":"篮球"},{"name":"昆明理工大学","detail":"排球、足球"},{"name":"沈阳工业大学","detail":"足球"},{"name":"江西科技师范大学","detail":"健美操"},{"name":"云南师范大学","detail":"田径、网球"},{"name":"沈阳建筑大学","detail":"游泳、网球"},{"name":"赣南师范大学","detail":"田径"},{"name":"云南财经大学","detail":"篮球、网球"},{"name":"沈阳师范大学","detail":"乒乓球、武术"},{"name":"山东大学","detail":"田径、足球"},{"name":"西安交通大学","detail":"田径、篮球、足球、游泳、乒乓球"},{"name":"辽宁石油化工大学","detail":"羽毛球、击剑"},{"name":"中国海洋大学","detail":"田径、排球"},{"name":"长安大学","detail":"田径、足球、乒乓球、健美操"},{"name":"大连交通大学","detail":"乒乓球"},{"name":"青岛大学","detail":"田径、足球、健美操"},{"name":"西安电子科技大学","detail":"游泳、健美操"},{"name":"沈阳化工大学","detail":"排球、网球"},{"name":"山东科技大学","detail":"篮球"},{"name":"西北农林科技大学","detail":"网球"},{"name":"辽宁师范大学","detail":"田径"},{"name":"山东理工大学","detail":"田径、篮球"},{"name":"陕西师范大学","detail":"田径、足球"},{"name":"东北财经大学","detail":"田径、篮球、足球"},{"name":"聊城大学","detail":"赛艇、龙舟"},{"name":"西北工业大学","detail":"田径、篮球、排球、乒乓球、羽毛球"},{"name":"大连艺术学院","detail":"田径、健美操"},{"name":"青岛科技大学","detail":"足球"},{"name":"西安理工大学","detail":"田径、游泳"},{"name":"吉林大学","detail":"田径、篮球、排球、足球、乒乓球"},{"name":"济南大学","detail":"男子足球"},{"name":"西安建筑科技大学","detail":"田径、足球、网球、健美操"},{"name":"东北师范大学","detail":"田径、篮球"},{"name":"山东农业大学","detail":"田径、篮球、跆拳道"},{"name":"西安工业大学","detail":"篮球"},{"name":"延边大学","detail":"足球、跆拳道"},{"name":"山东中医药大学","detail":"田径、武术"},{"name":"西安邮电大学","detail":"田径"},{"name":"北华大学","detail":"龙舟、冰雪"},{"name":"山东师范大学","detail":"田径、排球、乒乓球、健美操"},{"name":"西安财经学院","detail":"足球"},{"name":"吉林农业大学","detail":"篮球、跆拳道、定向越野"},{"name":"鲁东大学","detail":"田径、篮球"},{"name":"兰州大学","detail":"田径、排球、武术"},{"name":"东北电力大学","detail":"龙舟、冰雪"},{"name":"德州学院","detail":"射击"},{"name":"西北民族大学","detail":"田径、足球、武术"},{"name":"吉林化工学院","detail":"足球"},{"name":"山东财经大学","detail":"排球"},{"name":"兰州交通大学","detail":"田径、乒乓球"},{"name":"长春工程学院","detail":"篮球"},{"name":"山东工商学院","detail":"田径"},{"name":"甘肃政法学院","detail":"足球"},{"name":"长春师范大学","detail":"排球、足球、冰雪"},{"name":"中国石油大学(华东)","detail":"田径、篮球、排球、乒乓球"},{"name":"西北师范大学","detail":"田径、足球、健美操"},{"name":"东北林业大学","detail":"田径、篮球、游泳"},{"name":"郑州大学","detail":"田径、篮球、乒乓球、网球"},{"name":"青海师范大学","detail":"田径、篮球"},{"name":"哈尔滨工业大学","detail":"田径、篮球"},{"name":"河南大学","detail":"田径、篮球、武术"},{"name":"青海民族大学","detail":"篮球"},{"name":"哈尔滨工程大学","detail":"田径、篮球、排球、乒乓球、冰雪"},{"name":"河南理工大学","detail":"篮球、武术、乒乓球"},{"name":"北方民族大学","detail":"武术"},{"name":"黑龙江大学","detail":"田径、乒乓球、射击"},{"name":"河南师范大学","detail":"排球"},{"name":"宁夏大学","detail":"田径、篮球、足球"},{"name":"齐齐哈尔大学","detail":"田径、冰雪"},{"name":"河南财经政法大学","detail":"田径、武术、健美操"},{"name":"新疆大学","detail":"田径、篮球、足球"},{"name":"哈尔滨理工大学","detail":"游泳、乒乓球、健美操、冰雪"},{"name":"武汉大学","detail":"田径、排球、乒乓球、羽毛球"},{"name":"石河子大学","detail":"跆拳道"},{"name":"东北石油大学","detail":"田径"},{"name":"中南财经政法大学","detail":"田径、篮球、足球、乒乓球"},{"name":"新疆农业大学","detail":"排球"},{"name":"东北农业大学","detail":"田径"},{"name":"华中科技大学","detail":"田径、篮球、乒乓球、足球、武术"},{"name":"新疆师范大学","detail":"田径、足球、乒乓球、健美操"},{"name":"哈尔滨师范大学","detail":"田径、武术、健美操、冰雪"},{"name":"武汉理工大学","detail":"田径、篮球、网球、武术、跆拳道"},{"name":"新疆财经大学","detail":"田径、篮球"},{"name":"哈尔滨商业大学","detail":"田径、游泳、网球"},{"name":"中国地质大学(武汉)","detail":"田径、游泳、羽毛球、攀岩、篮球"}]
        }
    },
    methods: {
        goUniversity(id) {
            var id = id;
            let {href}=this.$router.resolve({
                path: '/explore/yuanxiaoxiangqing',
                name: '院校详情',
                query: {
                    id: id,
                }
            })
            window.open(href, '_blank');
        }
    },
    created() {
        this.getZizhuzhaoshengList();
    }
}
</script>
<style type="text/css" lang='less' scoped>
    @import "../study_way_common.less";
    .sports_team {
        .sport_universities {
            .main_title {
                line-height: 40px;
                text-align: left;
                font-size: 16px;
                font-weight: 600;
                color: #333;
                margin-bottom: 20px;
                padding-left: 40px;
                background: url(/imgs/wayToStudy/common/icon_title.png) no-repeat 0px center;
                span {
                    font-size: 14px;
                    color: red;
                    margin-left: 5px;
                }
            }
            .detail_title {
                line-height: 40px;
                background-color: #60badf;
                text-align: center;
                overflow: hidden;
                li {
                    float: left;
                    width: 50%;
                    p {
                        color: #fff;
                        float: left;
                        &:nth-child(1) {
                            width: 40%;
                        }
                        &:nth-child(2) {
                            width: 60%;
                        }
                    }
                }
            }
            .detail_box {
                line-height: 40px;
                text-align: center;
                overflow: hidden;
                li {
                    box-sizing: border-box;
                    float: left;
                    width: 50%;
                    border: 1px solid #eaeaea;
                    border-top: none;
                    &:nth-child(4n),&:nth-child(4n-1) {
                        background-color: #e6f8ff;
                    }
                    &:nth-child(even) {
                        border-left: none
                    }
                    p {
                        color: #fff;
                        float: left;
                        color: #333;
                        line-height: 20px;
                        height: 40px;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        cursor: pointer;
                        &:nth-child(1) {
                            box-sizing: border-box;
                            width: 40%;
                            border-right: 1px solid #eaeaea;
                        }
                        &:nth-child(2) {
                            width: 60%;
                            font-size: 14px;
                        }
                    }
                }
            }
        }   
    }
</style>