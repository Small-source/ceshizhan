<template>
    <!-- 军事/公安类升学(民航招飞，海军招飞，空军招飞，军校招生，公安院校，航海类院校) -->
    <!-- 民航招飞 -->
    <div class="civil_aviation studyway_common_father">
        <div class="banner">
            <img src="/imgs/wayToStudy/main/banner.png" alt="">
        </div>
        <div class="main">
            <h6 class="main_title">关于民用航空飞行员</h6>
            <div class="main_box">
                <p>民用航空飞行员是指由指定高校进行培养，这些院校培养的飞行员，毕业后一般定向分配到国航、海航、东航、中联航及其他国内各航空公司等单位。为进一步规范民航招飞工作，中国民用航空局综合司、教育部办公厅联合发文，自2017年起正式启用“中国民用航空招飞系统”，考生须通过教育部“阳光高考”招飞信息系统(http://gaokao.chsi.com.cn/gkzt/mhzf),进行信息查询、考生注册、填报招飞志愿以及预选、初检、招飞体检鉴定、民用航空背景调查、招飞志愿确认等高考前选拔工作。</p>
            </div>    
        </div>
        <div class="main application_condition">
            <h6 class="main_title">报考条件有哪些？</h6>
            <div class="main_box">
                <p><span>身体条件</span>：（1）身高：男性170-185厘米，女性身高168-180厘米；（2）体重：符合民航招收飞行员体重指数标准；（3）视力：双眼没有经过任何手术，任何一只眼睛裸视力(按C字视力表)不低于0.3，无色盲、色弱、斜视，无较重的沙眼或倒睫；（4）无传染病，本人及家族无精神病史。</p>
                <p><span>文化条件</span>：（1）高中生：报考飞行技术专业的考生，外语限考英语；录取按照教育部及民航总局划定的录取分数线（一般要求高考成绩总分应达到当年普通文理科本科第二批次录取分数线）以及英语最低控制线确定，按考生高考成绩排序，从高分到低分择优录取。 （2）本科及以上学历毕业生：要求具有较好的英语听说基础，通过国家英语四级考试或六级考试（分数在425分及以上）。</p>
                <p><span>政治条件</span>：遵纪守法、作风正派、忠诚老实、成绩优良，有志于为民用航空飞行事业服务；具有高度的责任心、良好的工作态度、服务社会的意识以及团结协作的精神；具有良好的道德修养、品行端正，无不良行为记录。</p>
            </div>
        </div>
        <div class="main">
            <h6 class="main_title">招收对象是谁？</h6>
            <div class="main_box">
                <p>（1）高中毕业生：年龄16-20周岁。</p>
                <p>（2）本科及以上学历毕业生：本科学历者25周岁(含)以下，硕士研究生学历者27周岁(含)以下，博士研究生学历者29周岁(含)以下。</p>
            </div>
        </div>
        <div class="main">
            <h6 class="main_title">学员类别</h6>
            <div class="main_box">
                <p>目前，国内航空公司招收飞行员的主要方式是委托培训，委托培训的飞行学员分为两种：养成学员和大改驾学员。</p>
                <p>养成学员，是指民航公司招收的应届高中毕业生，通过高考录取在相关培训院校（一般为中国民航大学或中国民用航空飞行学院）完成四年本科学习，并完成初始飞行驾驶技术培训。期间，安排部分学员到国外航校进行飞行技术训练。取得相应资格、证书后进入民航公司。</p>
                <p>大改驾学员，是指从大学生转为飞行员，一般又包括“2+2”和“3+1”以及“4+1”三种，“2+2”是指接受两年普通大学课程教育后，再接受两年飞行驾驶专业教育，“3+1”是指接受三年普通大学专科课程教育后，再接受一年飞行驾驶专业教育，“4+1”是指大学本科毕业后，再接受一年飞行驾驶专业教育。取得相应资格、证书后进入民航公司。</p>
            </div>
        </div>
        <div class="main application_process">
            <h6 class="main_title">报考流程（以简章为主）</h6>
            <p class="title">高中生：</p>
            <ul class="lis_box top">
                <li v-for="(item, index) in high_school" :key="index">
                    <p class="title">{{item.title}}</p>
                    <p class="detail" v-html="item.detail"></p>
                </li>
            </ul>
            <p class="title">大学生：</p>
            <ul class="lis_box bottom">
                <li v-for="(item, index) in college_student" :key="index">
                    <p class="title">{{item.title}}</p>
                    <p class="detail" v-html="item.detail"></p>
                </li>
            </ul>
        </div>

        <div class="main">
            <h6 class="main_title">就业情况</h6>
            <div class="main_box">
                <p>飞行员具有丰厚的福利待遇、良好的职业生涯。</p>
                <p>飞行员的待遇一般包括：基本工资、年功工资、年终绩效工资、飞行出差补贴、津补贴及福利、长期激励。</p>
                <p>飞行员的职业发展路径：飞行员→副驾驶→机长→飞行教员</p>
                <p>民航飞行学员毕业后，将被分配到航空公司所属的各分公司当客机驾驶员。在正式执机前，还要参加数月的模拟训练，全部考试合格后，就可以成为一名副驾驶员。飞行员待遇根据其级别和所飞机型不同会有所差别，总体上薪水丰厚，副驾驶月薪超过2万元，如果成为正驾驶，或者飞国际航班，收入会成倍增长。 副驾驶分为第二副驾驶、副驾驶和第一副驾驶。根据飞行经历及技术考核逐步晋升。副驾驶飞行经历时间及飞行技术达到标准，通过相应考核、面试后可聘任为机长。机长经过相应程序选拔和训练，可聘任为飞行教员。另外，还有一些飞行人员进入公司飞行技术管理和企业管理岗位。</p>
            </div>   
        </div>
        <div class="universities main">
            <h6 class="main_title">
                招飞院校 
                <span>*由于各方面条件不断调整变化，请考生以各省考试院公布的最新消息为主</span>
            </h6>
            <table>
                <tr>
                    <th>院校名称</th>
                    <th>院校所在地</th>
                    <th>招生范围</th>
                    <th>备注</th>
                </tr>
                <tr v-for="(item,index) in universities" :key="index">
                    <td @click="goUniversity(item.title)">{{item.title}}</td>
                    <td>{{item.address}}</td>
                    <td class="range"><p>{{item.range}}</p></td>
                    <td class="remarks"><p>{{item.remarks}}</p></td>
                </tr>
            </table>
        </div>
    </div>
</template>
<script>

export default {
    // components: { Yuanxiaoku },
    // props: [ 'message' ],
     data() {
        return {
            high_school: [
                { title: '9月-10月', detail: '报名' },
                { title: '10月-11月', detail: '面试' },
                { title: '11月-12月', detail: '体检初检' },
                { title: '2月-5月', detail: '背景调查' },
                { title: '6月', detail: '高考' },
                { title: '高考后', detail: '体检复查' },
                { title: '七月', detail: '录取' }
            ],
            college_student: [
                { title: '9月-10月', detail: '报名' },
                { title: '10月-11月', detail: '面试' },
                { title: '11月-12月', detail: '体检初检' },
                { title: '11月-12月', detail: '心理测评<br/>英语测评' },
                { title: '2月-3月', detail: '背景调查' },
                { title: '3月', detail: '体检复查' },
                { title: '3月', detail: '签订<br/>第三方协议' },
                { title: '9月', detail: '录取' }
            ],
            universities: [ 
                { title: '北京航空航天大学', address: '北京市', range: '详情请见北航招生办公室本科招生信息网发布的2017年本科生招生计划。', remarks: '北京市有部分女生招生计划，其余省份只招男生，外语语种仅限英语。' },
                { title: '南京航空航天大学', address: '江苏省 南京市', range: '江苏省、安徽省、浙江省、山东省、北京市、天津市、辽宁省、黑龙江省、陕西省、湖北省、山西省、甘肃省', remarks: '要求理科毕业生，性别要求为男性，外语语种为英语' },
                { title: '中国民航大学', address: '天津市', range: '以各省级招生考试机构最终公布的计划为准', remarks: '男生均可报考（根据委培单位需要部分地区招女生），英语语种，文理兼招（浙江、上海考生不限选考科目）' },
                { title: '中国民用航空飞行学院', address: '四川省 广汉市', range: '以当地教育考试院或招办面向社会公布数为准', remarks: '要求理科毕业生，性别要求为男性，外语语种为英语' },
                { title: '滨州学院', address: '山东省 滨州市', range: '湖北省、河北省、江苏省、北京市、湖南省、安徽省', remarks: '男性高中毕业生（文理兼招，外语语种仅限英语）' },
                { title: '沈阳航空航天大学', address: '辽宁省 沈阳市', range: '黑龙江、吉林、辽宁、河北、陕西、湖南、云南、贵州', remarks: '要求理科毕业生，性别要求为男性，外语语种为英语' },
                { title: '上海工程技术飞行学院', address: '上海市', range: '上海市、山东省、广东省、河南省、辽宁省', remarks: '男性，文理兼收，高考语种为英语' },
                { title: '南昌航空大学', address: '江西省 南昌市', range: '以各省级招生考试机构最终公布的计划为准', remarks: '男性高中毕业生（文理不限，外语语种仅限英语）' },
                { title: '安阳工学院', address: '河南省 安阳市', range: '以各省级招生考试机构最终公布的计划为准', remarks: '男性高中毕业生（文理不限，外语语种仅限英语）' },
                { title: '黑龙江八一农垦大学', address: '黑龙江 大庆市', range: '黑龙江省、内蒙古自治区', remarks: '男性高中毕业生，外语语种仅限英语' },
                { title: '烟台南山大学', address: '山东省 烟台市', range: '山东省、河南省、黑龙江省、吉林省', remarks: '男性高中毕业生（文理兼招，外语语种仅限英语）' },
            ]
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
    }
}
</script>

<style type="text/css" lang='less' scoped>
    @import "../study_way_common.less";
    .civil_aviation {
        .application_process {
            .title {
                line-height: 40px;
            }
            .top {
                padding-bottom: 10px;
                li {
                    width: 100px;
                }
            }
            .bottom {
                li {
                    width: 100px;
                }
            }
        }
        .universities {
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
                            width: 30%; 
                        }
                        &:nth-child(4) {
                            width: 30%; 
                        }
                    }
                }
                tr {
                    &:nth-child(odd) {
                        background-color: #e6f8ff;
                    }
                    td {
                        border: 1px solid #eaeaea;
                        line-height: 40px;
                        align-items: center;
                        &:first-child {
                            cursor: pointer;
                        }
                        p {
                            line-height: 24px;
                        }
                    }
                    .range {
                        padding: 5px 10px;
                        text-align: left;
                    }
                    .remarks {
                        padding: 5px 10px;
                        text-align: left;
                    }
                }
            }
        }
    }
</style>