<template>
    <!-- 升学途径 其他主流途径 -->
    <!--  (免费医学生)-->
    <div class="free_medical_students studyway_common_father">
        <div class="banner">
            <img src="/imgs/wayToStudy/main/banner.png" alt="">
        </div>
        <div class="main">
            <h6 class="main_title">什么是免费医学生？</h6>
            <div class="main_box">
                <p>免费医学生是为农村基层医疗卫生机构定向招收培养的一种医学特殊招生模式。在培养方式上，免费医学生分5年制本科和3年制专科两种，以5年制本科为主，培养专业主要是临床医学、中医学(含民族医学)专业，培养工作主要由举办医学教育的地方高等学校承担。3年制专科主要面向乡镇卫生院以下的医疗卫生机构和欠发达地区乡镇卫生院医疗卫生岗位。</p>
                <p>在费用上，免费医学生在校学习期间，享受“二免一补”，也就是免除学费，免缴住宿费，并补助生活费，所需经费由省级财政在医疗卫生支出中统筹落实。</p>
            </div>    
        </div>
        <div class="benefit main">
            <h6 class="main_title">报考条件是什么？</h6>
            <div class="main_box">
                <p>免费定向本科医学生只招收农村学生，报考学生须同时具备下列条件</p>
                <p>（1）符合2017年统一高考报名条件；</p>
                <p>（2）本人及父亲或母亲或法定监护人户籍地须在农村，本人具有当地连续3年以上户籍；</p>
                <p>（3）本省份规定的其他条件。采取以县为单位定向招生的地方，报考学生除同时具备上述条件外，本人及父亲或母亲或法定监护人户籍地须在定岗单位所在县农村</p>
            </div>
        </div>
        <div class="main">
            <h6 class="main_title">志愿填报怎么报？</h6>
            <div class="main_box">
               <p>
                   报考免费医学定向招生计划的考生均须参加当年全国统一高考，实行单列志愿、单设批次、单独划线，只招收农村生源，在本科提前批次录取。
               </p>
               <p>生源不足时，未完成的计划通过补征志愿方式从高分到低分顺序录取，直至完成计划。</p>
            </div>   
        </div>
        <div class="main">
            <h6 class="main_title">如何就业？</h6>
            <div class="main_box">
               <p>
                   免费定向本科医学生录取后、获得入学通知书前，须与培养高校和定向就业所在地的县级卫生计生、人力资源社会保障行政部门签署定向培养和就业协议。免费定向本科医学生在学期间户籍仍保留在原户籍所在地，毕业后可按有关规定迁入定向就业所在地。
               </p>
            </div>   
        </div>
        <div class="remind main">
            <h6 class="main_title">特别提醒</h6>
            <div class="main_box">
                <p><span>1</span>国家免费医学生在学期间户籍仍保留在原户籍所在地，毕业后可按有关规定迁入定向就业所在地。</p>
                <p><span>2</span>按照要求，国家免费医学生未按入学前签署的协议规定履约的，退还已减免的教育培训费用、生活补助和以上费用50%的违约金；履约情况纳入医师诚信管理，公布违约记录，并记入人事档案。国家免费医学生毕业后拒绝履约的，5年内不得应聘全省行政范围内的各级各类事业单位。</p>
                <p><span>3</span>由于各省份政策略有不同，如需报考免费医学生，请登录考生所在省教育考试院查询具体要求。</p>
            </div>   
        </div>
        <div class="universities main">
            <h6 class="main_title">
                各省招生计划 
                <span>*由于各方面条件不断调整变化，请考生以各省考试院公布的最新消息为主</span>
            </h6>
            <table>
                <tr>
                    <th>省份</th>
                    <th>招生人数</th>
                    <th>招生院校</th>
                    <th>招生专业</th>
                    <th>招生年份</th>
                </tr>
                <tr v-for="(item,index) in universities" :key="index">
                    <td class="province">{{item.province}}</td>
                    <td>{{item.number}}</td>
                    <td class="school"><p>{{item.school}}</p></td>
                    <td class="major"><p>{{item.major}}</p></td>
                    <td>{{item.year}}</td>
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
                {"province":"河北","number":"100","school":"河北医科大学、华北理工大学","major":"临床医学","year":"2017"},
                {"province":"山西","number":"270","school":"山西医科大学、山西中医药大学和长治医学院","major":"临床医学专业招生220人，中医学专业招生50人","year":"2017"},
                {"province":"内蒙古","number":"180","school":"内蒙古医科大学、内蒙古科技大学包头医学院、内蒙古民族大学、赤峰学院","major":"临床医学、中医学、蒙医学","year":"2017"},
                {"province":"吉林","number":"200","school":"吉林医药学院","major":"临床医学","year":"2017"},
                {"province":"黑龙江","number":"40","school":"齐齐哈尔医学院、牡丹江医学院、黑龙江中医药大学","major":"临床医学","year":"2017"},
                {"province":"安徽","number":"200","school":"安徽医科大学、蚌埠医学院、皖南医学院、安徽中医药大学、安徽医学高等专科学校、安庆医药高等专科学校、安徽中医药高等专科学校","major":"临床医学、中医学","year":"2017"},
                {"province":"江西","number":"130","school":"江西中医药大学、赣南医学院、九江学院、江西医学高等专科学校、省卫生职业学院","major":"临床医学、中医学","year":"2017"},
                {"province":"河南","number":"80","school":"河南中医药大学、新乡医学院","major":"临床医学、中医学","year":"2017"},
                {"province":"湖北","number":"130","school":"湖北医药学院、湖北民族学院科技学院","major":"助产","year":"2017"},
                {"province":"湖南","number":"250","school":"湖南中医药大学、南华大学、湘南学院、吉首大学、长沙医学院","major":"临床医学、中医学","year":"2017"},
                {"province":"广西","number":"520","school":"广西医科大学、桂林医学院、右江民族医学院、广西中医药大学","major":"临床医学、中医学","year":"2017"},
                {"province":"海南","number":"100","school":"重庆医科大学","major":"临床医学、中医学","year":"2017"},
                {"province":"四川","number":"530","school":"西南医科大学、川北医学院、成都中医药大学、成都医学院","major":"临床医学","year":"2017"},
                {"province":"贵州","number":"500","school":"贵州医科大学、遵义医学院、贵阳中医学院","major":"临床医学","year":"2017"},
                {"province":"云南","number":"770","school":"昆明医科大学、大理大学、昆明理工大学、云南中医学院、曲靖医学高等专科学校、楚雄医药高等专科学校、红河卫生职业学院、保山中医药专科学校、德宏职业学院","major":"中医学、针灸推拿学、临床医学","year":"2017"},
                {"province":"西藏","number":"220","school":"","major":"临床医学、藏医学","year":"2017"},
                {"province":"陕西","number":"250","school":"延安大学、西安医学院、陕西中医药大学","major":"临床医学、中医学","year":"2017"},
                {"province":"甘肃","number":"510","school":"兰州大学、甘肃中医药大学","major":"临床医学","year":"2017"},
                {"province":"青海","number":"200","school":"青海大学","major":"临床医学、藏医学","year":"2017"},
                {"province":"宁夏","number":"70","school":"宁夏医科大学","major":"临床医学、中医学","year":"2017"},
                {"province":"新疆","number":"400","school":"新疆医科大学","major":"临床医学、中医学、维医学、哈医学","year":"2017"},
                {"province":"新疆生产建设兵团","number":"50","school":"石河子大学","major":"临床医学","year":"2017"},
                {"province":"山东","number":"600","school":"山东中医药大学、滨州医学院、潍坊医学院、济宁医学院","major":"临床医学、中医学","year":"2017"},
                {"province":"江苏","number":"1200","school":"江苏大学、南京医科大学、徐州医科大学、南京中医药大学、苏州卫生职业技术学院、江苏卫生健康职业学院","major":"临床医学、预防医学、麻醉学、中医学、针灸推拿","year":"2017"}
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
        this.getZizhuzhaoshengList();
    }
}
</script>

<style type="text/css" lang='less' scoped>
    @import "../study_way_common.less";
    .free_medical_students {
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
                            width: 10%; 
                        }
                        &:nth-child(3) {
                            width: 40%; 
                        }
                        &:nth-child(4) {
                            width: 25%; 
                        }
                        &:nth-child(5) {
                            width: 10%; 
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
                        p {
                            line-height: 24px;
                        }
                    }
                    .school {
                        padding: 5px 10px;
                        text-align: left;
                    }
                    .major {
                        padding: 5px 10px;
                        text-align: left;
                    }
                }
            }
        }
    }
</style>