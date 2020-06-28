<template>
    <!-- 升学途径 其他主流途径 -->
    <!--  (保送生)-->
    <div class="public_expense studyway_common_father">
        <div class="banner">
            <img src="/imgs/wayToStudy/main/banner.png" alt="">
        </div>
        <div class="main">
            <h6 class="main_title">关于保送生</h6>
            <div class="main_box">
                <p>保送生无需参加高考(有的省规定保送生可自愿参加高考，但不再参加统一录取)。符合保送条件的学生经中学推荐，并通过大学测试合格后即可进入大学就读。省级优秀学生（2020年起不再具有保送资格）、中学生学科奥林匹克竞赛国家集训队成员、部分外国语中学推荐优秀学生、公安英烈子女、退役运动员等5类人员具备高校保送资格。</p>
            </div>    
        </div>
        <div class="who main">
            <h6 class="main_title">哪些考生可以保送</h6>
            <ul>
                <li v-for="(item,index) in who" :key="index">
                    <div class="img_box">
                        <img :src="item.img_url" alt="">
                    </div>
                    <p v-html="item.title"></p>
                </li>
            </ul>
        </div>
        <!-- 具有推荐资格的16所外国语高中生 -->
        <div class="main  high_school">
            <h6 class="main_title">具有推荐资格的16所外国语高中生</h6>
            <ul>
                <li v-for="(item,index) in high_student" :key="index">{{item}}</li>
            </ul>
        </div>
        <!-- 保送录取程序 -->
        <div class="main application_process">
            <h6 class="main_title">保送录取程序</h6>
            <ul class="lis_box">
                <li v-for="(item,index) in admission_procedures" :key="index">
                    <p class="title">{{item.title}}</p>
                    <p class="detail">{{item.detail}}</p>
                </li>
            </ul>
        </div>
       
        <div class="remind main">
            <h6 class="main_title">特别提醒</h6>
            <div class="main_box">
                <p><span>1</span>公安英烈子女按有关规定只能保送至公安类院校。</p>
                <p><span>2</span>已确认保送录取的学生不再参加普通高校招生全国统一录取。</p>
                <p><span>3</span>2017年秋季及以后进入高中阶段一年级的学生，将取消省级优秀学生保送资格条件，2020年起所有高校停止省级优秀学生保送生招生。</p>
                <p><span>4</span>2018年起符合条件的运动员可保送至高校体育学类本科专业，如果运动员申请就读其他专业，应参加国家体育总局统一组织的运动训练、武术与民族传统体育专业单独招生文化课考试，由高校自主划定文化课录取分数线。</p>
                <p><span>5</span>高校要安排外国语言文学类专业招收外国语中学推荐保送生，并向国家“一带一路”战略发展所需非通用语种专业倾斜。</p>
                <p><span>6</span>各省具体保送条件略有调整，请登录考生所在省考试院官网查看保送生相关最新消息</p>
            </div>   
        </div>
        <div class="universities main">
            <h6 class="main_title">
                可接收保送生的院校/专业 
                <span>*由于各方面条件不断调整变化，请考生以各省考试院公布的最新消息为主</span>
            </h6>
            <div class="school_box"  v-for="(item, index) in universities" :key="index">
                <p class="school_title">{{item.title}}</p>
                <ul>
                    <li v-for="(school, index) in item.schoolName" :key="index" @click="goUniversity(school.name)"><span>{{school.name}}</span><span>{{school.major}}</span></li>
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
            // 哪些考生可以保送
            who: [
                { img_url: '/imgs/wayToStudy/common/icon_title.png', title: '省级优秀学生<br/>（2020年起不再具有保送资格）' },
                { img_url: '/imgs/wayToStudy/common/icon_title.png', title: '奥林匹克竞赛<br/>国家集训队成员' },
                { img_url: '/imgs/wayToStudy/common/icon_title.png', title: '部分外国语中学<br/>推荐优秀学生' },
                { img_url: '/imgs/wayToStudy/common/icon_title.png', title: '公安英烈子女' },
                { img_url: '/imgs/wayToStudy/common/icon_title.png', title: '退役运动员' }
            ],
            //具有推荐资格的16所外国语高中生
            high_student: ['天津外国语学校','石家庄外国语学校','太原外国语学校','长春外国语学校','上海外国语大学附中(含浦东、浦西校区)','南京外国语学校','杭州外国语学校','厦门外国语学校','南昌外国语学校','济南外国语学校','郑州外国语学校','武汉外国语学校','广外附设外语学校','　深圳外国语学校','成都外国语学校','重庆外国语学校'],
            // 保送录取程序
            admission_procedures: [
                { title: '提出申请', detail: '考生向有关学校或部门提出保送申请' },
                { title: '审核并公示，参加考核', detail: '经审核确认并通过多级公示后，参加有关高校组织的保送生综合考核' },
                { title: '公 示', detail: '高校确定拟录取保送生名单并进行公示' },
                { title: '办理录取', detail: '省级招生考试机构办理录取手续' },
            ],
            universities: [ 
               { title: '北京市', schoolName: [{"name":"北京大学","major":"外语类"},{"name":"清华大学","major":"语言类"},{"name":"中国人民大学","major":""},{"name":"北京交通大学","major":"外语类"},{"name":"北京航空航天大学","major":"外语类"},{"name":"北京理工大学","major":"外语类"},{"name":"北京科技大学","major":"外语类"},{"name":"北京化工大学","major":""},{"name":"北京邮电大学","major":"外语类"},{"name":"北京第二外国语学院","major":""},{"name":"中国农业大学","major":""},{"name":"北京林业大学","major":""},{"name":"北京师范大学","major":"外语类"},{"name":"首都师范大学","major":"外语类"},{"name":"首都经济贸易大学","major":""},{"name":"北京外国语大学","major":""},{"name":"北京语言大学","major":""},{"name":"中央财经大学","major":"及退役运动员"},{"name":"中国地质大学(北京)","major":""},{"name":"中国青年政治学院","major":""},{"name":"外交学院","major":""},{"name":"中国政法大学","major":""},{"name":"华北电力大学","major":""},{"name":"对外经济贸易大学","major":"外语类"},{"name":"北京中医药大学","major":""},{"name":"中国矿业大学(北京)","major":""},{"name":"北京大学","major":"医学部"}] },{ title: '天津市', schoolName: [{"name":"南开大学","major":""},{"name":"天津大学","major":""},{"name":"天津外国语大学","major":""},{"name":"天津财经大学","major":"外语类"},{"name":"天津师范大学","major":""}] },
               { title: '内蒙古', schoolName: [{"name":"内蒙古大学","major":""}] },
               { title: '辽宁省', schoolName: [{"name":"东北大学","major":""},{"name":"大连理工大学","major":""},{"name":"大连海事大学","major":""},{"name":"沈阳药科大学","major":""},{"name":"东北财经大学","major":""}] },
               { title: '吉林省', schoolName: [{"name":"吉林大学","major":""},{"name":"东北师范大学","major":""},{"name":"吉林建筑大学","major":""},{"name":"","major":""}] },
               { title: '黑龙江', schoolName: [{"name":"黑龙江大学","major":""},{"name":"哈尔滨工业大学","major":"外语类"},{"name":"哈尔滨工程大学","major":""},{"name":"","major":""}] },
               { title: '上海市', schoolName: [{"name":"复旦大学","major":""},{"name":"同济大学","major":""},{"name":"上海交通大学","major":""},{"name":"上海理工大学","major":""},{"name":"华东理工大学","major":"外语类"},{"name":"东华大学","major":""},{"name":"上海海事大学","major":""},{"name":"上海海洋大学","major":""},{"name":"华东师范大学","major":""},{"name":"上海外国语大学","major":""},{"name":"上海大学","major":""},{"name":"上海财经大学","major":""},{"name":"华东政法大学","major":""},{"name":"上海金融学院","major":""},{"name":"上海对外经贸大学","major":""},{"name":"上海纽约大学","major":""},{"name":"上海中医药大学","major":""},{"name":"南京大学","major":""},{"name":"南京理工大学","major":""},{"name":"南京邮电大学","major":""},{"name":"中国药科大学","major":""},{"name":"南京航空航天大学","major":""},{"name":"东南大学","major":""},{"name":"","major":""}]},
               { title: '江苏省', schoolName: [{"name":"江苏大学","major":""},{"name":"南京农业大学","major":""},{"name":"南京师范大学","major":"外语类"},{"name":"中国矿业大学","major":""},{"name":"河海大学","major":""},{"name":"扬州大学","major":""},{"name":"江南大学","major":"(江苏省)"},{"name":"南京医科大学","major":"(省内)"},{"name":"苏州大学","major":""},{"name":"南京信息工程大学","major":""}] },
               { title: '浙江省', schoolName: [{"name":"浙江大学","major":""}] },
               { title: '安徽省', schoolName: [{"name":"中国科学技术大学","major":""},{"name":"合肥工业大学","major":""}]},
               { title: '福建省', schoolName: [{"name":"厦门大学","major":"外语类"},{"name":"福州大学","major":""}]},
               { title: '江西省', schoolName: [{"name":"南昌大学","major":""},{"name":"江西财经大学","major":""}]},
               { title: '山东省', schoolName: [{"name":"山东大学","major":""},{"name":"中国海洋大学","major":""},{"name":"中国石油大学(华东)","major":""}] },
               { title: '河南省', schoolName: [{"name":"郑州大学","major":""},{"name":"河南工业大学","major":""},{"name":"河南科技大学","major":""},{"name":"河南理工大学","major":""},{"name":"郑州轻工业学院","major":""},{"name":"洛阳师范学院","major":""},{"name":"河南农业大学","major":""},{"name":"河南科技学院","major":""},{"name":"河南师范大学","major":""},{"name":"信阳师范学院","major":""},{"name":"新乡医学院","major":""},{"name":"商丘师范学院","major":""},{"name":"郑州航空工业管理学院","major":""},{"name":"许昌学院","major":""},{"name":"河南城建学院","major":""},{"name":"中原工学院","major":""}]},
               { title: '湖北省', schoolName: [{"name":"武汉大学","major":""},{"name":"华中科技大学","major":"外语类"},{"name":"武汉理工大学","major":""},{"name":"华中师范大学","major":""},{"name":"中国地质大学(武汉)","major":""},{"name":"华中农业大学","major":""}] },
               { title: '湖南省', schoolName: [{"name":"湘潭大学","major":""},{"name":"湖南大学","major":""},{"name":"中南大学","major":""},{"name":"长沙理工大学","major":""},{"name":"解放军国防科技大学","major":""}] },
               { title: '广东省', schoolName: [{"name":"暨南大学","major":"外语类"},{"name":"中山大学","major":"外语类"},{"name":"华南师范大学","major":"外语类"},{"name":"华南理工大学","major":""},{"name":"广东外语外贸大学","major":""},{"name":"南方医科大学","major":""}] },
               { title: '四川省', schoolName:[{"name":"四川大学","major":""},{"name":"西南交通大学","major":""},{"name":"电子科技大学","major":""},{"name":"四川农业大学","major":""},{"name":"西南财经大学","major":""}]},
               { title: '重庆市', schoolName: [{"name":"重庆大学","major":"外语类"},{"name":"西南政法大学","major":""},{"name":"西南大学","major":""},{"name":"四川外国语大学","major":""}] },
               { title: '陕西省', schoolName: [{"name":"西安交通大学","major":"外语类"},{"name":"西北工业大学","major":""},{"name":"西安外国语大学","major":""},{"name":"西北农林科技大学","major":""},{"name":"西安电子科技大学","major":""},{"name":"长安大学","major":""},{"name":"陕西师范大学","major":""}] },
               { title: '甘肃省', schoolName: [{"name":"兰州大学","major":""}] },
               { title: '河北省', schoolName: [{"name":"河北大学","major":""},{"name":"华北电力大学(保定)","major":""}] },
            ]
        }
    },
    methods: {
        goUniversity(id) {
            var id = id;
            let {href}=this.$router.resolve({
                path: '/yuanxiaoxiangqing',
                name: 'yuanxiaoxiangqing',
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
    .public_expense {
        .who {
            ul {
                display: flex;
                li {
                    flex: 1;
                    border-right: 1px solid #eaeaea;
                    &:last-child {
                        border: none;
                    }
                    .img_box {
                        height: 70px;
                        line-height: 70px;
                        text-align: center;
                    }
                    p {
                        text-align: center;
                        font-size: 14px;
                        font-weight: 600;
                        color: #333;
                    }
                }
            }
        }
        .high_school {
            ul {
                display: flex;
                flex-wrap: wrap;
                justify-content: space-between;
                li {
                    width: 200px;
                    height: 46px;
                    font-size: 14px;
                    margin-bottom: 20px;
                    text-align: center;
                    box-shadow: 0px 0px 10px #eaeaea;
                    display: flex;
                    align-items: center;
                    line-height: 24px;
                    justify-content: center;
                }
            }
        }
        .universities {
            .school_title {
                line-height: 40px;
            }
            ul {
                li {
                    span {
                        margin-right: 5px;
                    }
                }
            }
        }
    }
</style>