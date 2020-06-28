<template>
    <!-- 升学途径 其他主流途径 -->
    <!--  (公费师范生)-->
    <div class="public_expense studyway_common_father">
        <div class="banner">
            <img src="/imgs/wayToStudy/main/banner.png" alt="">
        </div>
        <div class="main">
            <h6 class="main_title">“公费师范生”和“免费师范生”的关系</h6>
            <div class="main_box">
                <p>根据教育部等五部门，于2018年印发的关于《教师教育振兴行动计划（2018-2022年）》通知中，提出将“免费师范生”改称为“公费师范生”，履约任教服务期调整为6年。</p>
            </div>    
        </div>
        <div class="benefit main">
            <h6 class="main_title">什么是公费师范生？</h6>
            <div class="main_box">
                <p>根据教育部文件精神,公费师范生是国家在2007年推出的一项政策，旨在培养大批优秀的中小学教师，鼓励更多的优秀青年终身做教育工作者。对教师职业有浓厚兴趣的考生来说，就读公费师范生是个不错的选择。目前，国家在北京师范大学、华东师范大学、东北师范大学、华中师范大学、陕西师范大学和西南大学六所教育部直属高校实行师范生公费教育。</p>
            </div>
        </div>
        <div class="main">
            <h6 class="main_title">报考条件是什么？</h6>
            <div class="main_box">
                <p>（1）参加普通高校招生全国统一考试，达到部属师大在本地区的录取分数线。</p>
                <p>（2）符合《教育部普通高校招生工作规定》，热爱教育事业，毕业后愿意长期从教。</p>
                <p>（3）身体健康，符合《普通高等学校招生体检工作指导意见》的有关规定。</p>
            </div>
        </div>
        <div class="main">
            <h6 class="main_title">有哪些优惠政策？</h6>
            <div class="main_box">
               <p>
                   在校学习期间免除学费，免缴住宿费，并补助生活费。
               </p>
               <p>在相关省级政府统筹下，由省级教育行政部门负责落实公费师范毕业生的教师岗位，确保每一个公费师范生毕业后在中小学任教有编有岗。</p>
               <p>在协议规定服务期内，可在学校间流动或从事教育管理工作。</p>
               <p>到中小学任教满一学期后，可申请免试在职攻读教育硕士专业学位。</p>
            </div>   
        </div>
        <div class="main">
            <h6 class="main_title">关于就业</h6>
            <div class="main_box">
               <p>
                   公费师范生入学前需要与学校和生源所在地省级教育行政部门签订协议——《师范生公费教育协议书》，毕业后一般回生源所在地省份从事中小学教育六年以上。
               </p>
               <p>到城镇学校工作的公费师范毕业生，应先到农村义务教育学校任教服务一年。</p>
               <p>在毕业前及在协议规定服务期内，一般不得报考脱产研究生。</p>
            </div>   
        </div>
        <div class="remind main">
            <h6 class="main_title">特别提醒</h6>
            <div class="main_box">
                <p><span>1</span>不履行协议须交违约金</p>
                <p>
                    公费师范毕业生未按协议从事中小学教育工作的，要按规定退还已享受的公费教育费用并缴纳违约金。省级教育行政部门负责履约管理，并建立公费师范生的诚信档案。确有特殊原因不能履行协议的，需报经省级教育行政部门批准。
                </p>
                <p><span>2</span>毕业前不得考脱产研究生</p>
                <p>公费师范生毕业前及在协议规定服务期内，一般不得报考脱产研究生。毕业生经考核符合要求的，可录取为教育硕士专业学位研究生，在职学习专业课。</p>
                <p><span>3</span>填报志愿时请注意</p>
                <p>如果你在提前批志愿中填报了招收公费师范生的这六所院校，并且分数达到录取线，你的高考档案就不会被投档到其他批次的学校中去。因此，一旦发生这种情况，除了被录取为公费师范生，你没有机会选择其他的院校。被退档后不会影响本一批，本二批的录取。</p>
                <p><span>4</span>各省招生计划不同，请登录考生所在省考试院官网以及院校官网查看</p>
            </div>   
        </div>
        <div class="universities main">
            <h6 class="main_title">
                招生院校信息 
                <span>*由于各方面条件不断调整变化，请考生以各省考试院公布的最新消息为主</span>
            </h6>
            <table>
                <tr>
                    <th>院校名称</th>
                    <th>院校所在地</th>
                    <th>公费师范生教学特点</th>
                    <th>录取批次</th>
                </tr>
                <tr v-for="(item,index) in universities" :key="index">
                    <td class="school_name" @click="goUniversity(item.name)">{{item.name}}</td>
                    <td>{{item.address}}</td>
                    <td class="detail">{{item.detail}}</td>
                    <td>{{item.pici}}</td>
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
            universities: [ 
                { name: '北京师范大学', address: '北京市', detail: '在北师大，公费师范生的课程体系由通识教育课程、专业教育课程和教师教育课程构成，其中教师教育课程比例达到20％，重点加强了教育教学技能的培训、见习和实习环节，着力提高学生的实践能力。', pici: '本科提前批' },
                { name: '华东师范大学', address: '上海市', detail: '华东师范大学的公费师范生拥有99位兼职导师，他们都是来自实习基地学校的富有教学经验的优秀教师。还有8位基础教育特聘教授，均由长期在基础教育学校管理、教学工作岗位上的校长和特级教师担任。', pici: '本科提前批' },
                { name: '东北师范大学', address: '吉林省 长春市', detail: '东北师范大学对师范专业实行“本硕一体”的人才培养模式，即“3＋0.5＋0.5＋2”的“教育家培养工程”。 “3”指的是大学本科培养的前3年，主要是基础理论的学习。包括通识教育、专业教育和部分教师职业教育课程。前一个0．5指的是大学本科培养第4年的前半年，主·······要是教育实习。后一个0．5是大学本科培养第4年的后半年，主要进行反思性、发展性学习。“2”指的是两年的教育硕士学习阶段。', pici: '本科提前批' },
                { name: '华中师范大学', address: '湖北省 武汉市', detail: ' 该校的师范专业课程体系以“主修专业课程加教师教育课程模块”的模式设计，加大了师范课程的比例，使师范课程和非师范课程的比例达到了3∶1。在课程内容改革上，强调专业课程教学的师范性，更加注重知识的系统性、贯通性、鲜明性和生动性，以适应中学教育的需要。', pici: '本科提前批' },
                { name: '陕西师范大学', address: '陕西省 西安市', detail: '该校按照“厚基础、宽口径、高素质、强能力”的培养理想和通专结合、文理渗透的原则，实施“2＋2”教师教育人才培养模式改革，学生前两年按一级学科为基础的大类进行通识教育，后两年进行专业培养。', pici: '本科提前批' },
                { name: '西南大学', address: '重庆市', detail: '在西南大学师范生公费教育培养理念中，“专业化”是一个重要的内容。学校认为，“教师只有具备足够的专业能力和较强的自主性，成为教育教学方面的‘临床专家’，方能满足社会日益发展和学生在认知、情意学习等方面的需要”。', pici: '本科提前批' }
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
        this.getZizhuzhaoshengList();
    }
}
</script>

<style type="text/css" lang='less' scoped>
    @import "../study_way_common.less";
    .public_expense {
        .universities {
            table {
                border: 1px solid #eaeaea;
                font-size: 16px;
                text-align: center;
                tr {
                    th {
                        line-height: 50px;
                        text-align: center;
                        border: 1px solid #60badf;
                        background-color: #60badf;
                        color: #fff;
                        &:nth-child(1) {
                            width: 20%; 
                        }
                        &:nth-child(2) {
                            width: 20%; 
                        }
                         &:nth-child(3) {
                            width: 40%; 
                        }
                         &:nth-child(4) {
                            width: 20%; 
                        }
                    }
                }
                tr {
                    td {
                        border: 1px solid #eaeaea;
                    }
                    .detail {
                        text-align: left;
                        padding: 10px;
                        font-size: 14px;
                    }
                    .school_name {
                        cursor: pointer;
                        &:hover {
                            color: #2c8ffc;
                        }
                    }
                }
            }
        }
    }
</style>