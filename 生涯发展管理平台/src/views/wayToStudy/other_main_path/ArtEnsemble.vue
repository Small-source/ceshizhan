<template>
    <!-- 升学途径 其他主流途径 -->
    <!--  (高水平艺术团)-->
    <div class="free_medical_students studyway_common_father">
        <div class="banner">
            <img src="/imgs/wayToStudy/main/banner.png" alt="">
        </div>
        <div class="main">
            <h6 class="main_title">什么是高水平艺术团招生</h6>
            <div class="main_box">
                <p>根据教育部文件精神,为提高普通高等学校艺术教育水平和大学生的艺术素养，活跃校园文化生活，推进学校素质教育，经教育部批准的部分普通高等学校每年招收一些高考成绩达到一定要求，同时又具有声乐、器乐、舞蹈、戏剧等某方面特长的考生进入本校高水平艺术团。考生被高校录取后进入普通专业学习，并利用课余时间参加文艺排练和演出。</p>
            </div>    
        </div>
        <div class="application_condition main">
            <h6 class="main_title">报考条件是什么？</h6>
            <div class="main_box">
                <p><span>招生范围</span>：原则上仅面向高校组建的音乐、舞蹈、戏剧类艺术团。</p>
                <p><span>招生院校</span>：教育部批准的53所试点院校。</p>
                <p><span>招生人数</span>：不超过本校上一年度本科招生计划总数的1%。</p>
            </div>
        </div>
        <div class="main liucheng">
            <h6 class="main_title">报考流程</h6>
            <ul>
                <li>报名</li>
                <li>艺术测试</li>
                <li>名单公示</li>
                <li>高考</li>
                <li>自愿填报</li>
                <li>录取</li>
            </ul>
        </div>
        <div class="remind main">
            <h6 class="main_title">特别提醒</h6>
            <div class="main_box">
                <p><span>1</span>各高校的招生项目是不同的，同一高校不同项目的招生人数也相差很大。因此，考生一定要先查阅高校的简章，看看今年有哪些高校招收自己的特长项目。</p>
                <p><span>2</span>高水平艺术团招生虽然没有艺术类专业考试那么火爆，但竞争也是十分激烈的。考生要有“真本事”，不要盲目报名。如果考生基础不好，仅靠考前突击几个月，不可能取得好成绩。</p>
                <p><span>3</span>很多考生报考艺术团就是冲着录取优惠条件，但大家要评估自己的高考成绩能否达到高校要求。具体可参考一下高校近几年的录取情况，看拿到加分后能否达到高校的录取线。</p>
                <p><span>4</span>“上了大学之后，我是否愿意积极参加排练和演出？”这个问题考生也要事先想清楚。从2017年起，艺术团学生要接受所在院系和艺术团的双重管理，既要完成本专业的学习任务，还要认真履行排练演出义务。</p>
                <p><span>5</span>2018年后，已开设有艺术类专业的试点高校不再单独招收相应专业项目的艺术特长生（如高校招收小提琴方向的艺术类专业学生，就不得再招收小提琴项目的艺术特长生）。</p>
                <p><span>6</span>适合具备音乐、舞蹈、戏剧、书画等艺术特长但大学专业想学习普通专业的同学。</p>
            </div>   
        </div>
        <div class="universities main">
            <h6 class="main_title">
                招生院校信息 
                <span>*由于各方面条件不断调整变化，请考生以各省考试院公布的最新消息为主</span>
            </h6>
            <ul>
                <li v-for="(item, index) in universities" :key="index" @click="goUniversity(item)">{{item}}</li>
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
            universities: ["北京大学", "清华大学", "中国人民大学", "北京航空航天大学", "北京师范大学", "北京理工大学", "北京科技大学", "北京化工大学", "北京交通大学", "北京邮电大学", "中国农业大学", "北京林业大学", "北京中医药大学", "中国政法大学", "对外经济贸易大学", "中国地质大学（北京）", "南开大学", "天津大学", "上海财经大学", "复旦大学", "同济大学", "上海交通大学", "东华大学", "华东师范大学", "南京大学", "东南大学", "南京理工大学", "南京航空航天大学", "河海大学", "南京农业大学", "中国药科大学", "浙江大学", "山东大学", "中国海洋大学", "中山大学", "华南理工大学", "大连理工大学", "吉林大学", "哈尔滨工业大学", "厦门大学", "湖南大学", "中南大学", "武汉大学", "华中科技大学", "华中农业大学", "四川大学", "西南交通大学", "电子科技大学", "重庆大学", "西安交通大学", "西北工业大学", "西北农林科技大学", "长安大学", "中国地质大学(武汉)"]
        }
    },
    methods: {
        goUniversity(id) {
            var id = id;
            let {href}=this.$router.resolve({
                path: '/explore/yuanxiaoxiangqing',
                name: 'yuanxiaoxiangqing',
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
    .free_medical_students {
        .liucheng {
            ul {
                display: flex;
                li {
                    text-align: center;
                    flex: 1;
                    line-height:50px;
                    padding-right: 60px;
                    background: url(/imgs/wayToStudy/common/icon_liucheng.png) no-repeat 120px center;
                    &:last-child {
                        padding-right: 0px;
                    }
                }
            }
        }
        .universities {
        	ul {
	            li {
	                &:nth-child(8n-1),&:nth-child(8n-2),&:nth-child(8n-3),&:nth-child(8n) {
	                    background-color: #e6f8ff;
	                }
	            }
	        }
        }
    }
</style>