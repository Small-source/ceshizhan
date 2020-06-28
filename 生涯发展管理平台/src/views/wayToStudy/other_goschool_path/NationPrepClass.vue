<template>
    <!-- 其他升学途径(民族预科班、港澳招生、中外合作、海外留学) -->
    <!-- 民族预科班 -->
    <div class="nation_prep_class">
        <h5>什么是预科班？什么是民族预科班？预科班到底是什么意思</h5>
        <div class="content">
            <p>每年都有很多大学在进行预科班招生，但很多学生对预科班是什么意思，什么是预科班并不是很了解，下面我们来看看什么是预科班。</p>
            <div class="main">
                <p class="main_title">什么是预科班</p>
                <p class="main_detail">预科班通常是指你进入普通本专科学习之前的预备期。就是说你的同学读大二的时候,你才真正开始大一,先前的那一年你读的预科班,之后由你学校组织考试,考了就分专业,不过也有先分好专业的,这个问题每个学都不同,你需要打听清楚,还有就是录取分数的问题,也是看学校而言的,并不是每个学校的预科班都比录取分低很多,有的甚至只低2分3分的。</p>
            </div>
            <div class="main">
                <p class="main_title">什么是民族预科班</p>
                <p class="main_detail">预科班的种类主要有少数民族预科班、文体特长生预科班等。少数民族预科班主要面向少数民族地区招生,分为民考民（用少数民族文字参加高考）、民考汉（用汉语参加考试）两种。国家规定预科班生的录取要在学校在当地提档线以下80分以内。少数民族预科班生毕业后一般要回生源所在地工作。文体特长预科班生是指具有突出的文艺体育特长、但是文化基础较弱的预科班生,这一类预科班生数量较少。</p>
            </div>
            <p>普通高校或民族院校举办的少数民族预科班,是党和国家为提高少数民族文化水平。加速发展少数民族地区和边远地区社会主义现代化建设,更多地培养少数民族各类专门人才而采取的一项特殊措施,只招收少数民族考生,招生科类主要有文科和理科,录取标准不得低于有关高校在录取省同批次统招最低分数线下80分。</p>
            <p>预科班的学制通常为一年或者两年,预科班的学习也分两种：一种是预科班阶段和正常的学习阶段都在本校学习；另一种是预科班阶段在另一所学校学习,预科班结束考试合格后转入本校本专科阶段学习。预科班虽然重点补习高中文化课程,但教学目的与一般高考补习班不同,教学内容与将来的专业学习有联系也有区别。</p>
            <p>目前,少数民族预科班的招生计划都是国家下达的指令性计划,因此,并不是所有的学校都有预科班招生计划。考生可以根据省级招办公布的分学校招生计划来查阅预科班的招生计划情况。报考预科班的考生必须要符合预科班招生的条件,比如报考少数民族预科班的考生必须是少数民族,而且要在本地有招生计划才行。</p>
            <p>目前几个比较集中的预科培养学校有西南民族大学,宁夏大学,南昌工学院，黄河科技学院,中南民族大学等。预科所学内容处于高中与大学的含接部分,基本属于高中内容，数学有部分是高数，难度不大.</p>
            <p>本网站的信息及数据主要来源于网络及各院校网站，本站提供此信息之目的在于为高考生提供更多信息作为参考，由于各方面情况的不断调整与变化，敬请以权威部门公布的正式信息为准</p>
        </div>
    </div>
</template>
<script>
export default {
    // components: { Yuanxiaoku },
    // props: [ 'message' ],
     data() {
        return {
            universities: [

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
    .nation_prep_class {
        margin-left: 20px;
        background-color: #fff;
        padding: 0px 20px;
        font-size: 14px;
        min-height: 800px;
        h5 {
            line-height: 70px;
            font-size: 24px;
            color: #333;
            text-align: center;
            font-weight: 600;
            border-bottom: 1px solid #dedede;
        }
        p {
            margin-bottom: 10px;
        }
        .content {
            padding: 20px 0px;
            .main {
                .main_title {
                    font-size: 18px;
                    color: #2c8ffc;
                    line-height: 40px;
                }
                .main_detail {
                    font-size: 14px;
                    // margin-bottom: 10px;
                }
            }
        }

    }
</style>