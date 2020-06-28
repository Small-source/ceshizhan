<template>
    <!-- 升学途径 主页面-->
    <div class="studyway">
        <div class="banner">
            <img src="/imgs/wayToStudy/main/banner.png" alt="">
        </div>
        <!-- 升学途径分析 -->
        <div class="analysis">
            <h5>升学途径分析</h5>
            <div class="main_box">
                <p class="title">测试简介</p>
                <p class="detail">
                    我国高考发展到现在已经变得越来越复杂，由原来的独木桥变成了多元化的升学途径，那么，如何根据你的特点来进行升学途径规划呢？
                </p>
                <p class="detail">
                    升学途径分析通过全方位分析你的考学条件，为你在升学途径中提供科学可靠的指导！让你进入目标大学有更多的可能性！
                </p>
            </div>
            <div class="btn_box">
                 <div class="btn test_again" @click="$router.push('/wayToStudy/testentry')"><template v-if="isFinishTest">再测一次</template><template v-else>开始测试</template></div>
                <!-- <div class="btn view_report" @click="$router.push('/wayToStudy/testreport')">查看报告</div> -->
                <router-link target="_blank" to="/wayToStudy/testreport" class="btn view_report" tag="a" v-if="isFinishTest">查看报告</router-link>
            </div>
        </div>
        <!-- 升学途径分析 -->
        <div class="analysis fangan">
            <h5>升学建议方案</h5>
            <div class="main_box">
                <p class="title">方案简介</p>
                <p class="detail">
                    通过生涯测评、升学途径分析、学习状态诊断等测评对学生进行多方面分析，综合学生个人情况和现有目标，推荐适合升学途径，并给出相应的升学建议方案。
                </p>
            </div>
            <div class="btn_box">
                 <div class="btn test_again" @click="isToProducedPlan()">生成方案</div>
                <router-link target="_blank" to="/wayToStudy/studyAdviceReport" class="btn view_report" tag="a" v-if="isFangan">查看方案</router-link>
            </div>
        </div>
        <!-- 升学途径月历 -->
        <div class="monthly_calendar">
            <h5>升学途径月历</h5>
            <div class="main_box">
                <div class="line">
                    <div class="detail_box" v-for="(item, index) in monthly" :key="index"  :class="index > 3 ? 'year_20' : 'year_19'" @click="monthly_data = monthly_calendar[index];isActiveMonth = index">
                        <div class="circle_small" :class="isActiveMonth == index ? 'active' : 'unactive'"><span>{{item.title}}</span></div>
                        <div class="detail">
                            <p v-for="(detail, index) in item.detail" :key="index">{{detail}}</p>
                        </div>
                    </div>
                    <div class="circle circle_19">
                        2019
                    </div>
                    <div class="circle circle_20">
                        2020
                    </div>
                </div>
            </div>
            <div class="main_detail">
                <h6 class="title">{{monthly_data.title}}</h6>
                <div class="detail_box">
                    <p v-for="(item,index) in monthly_data.detail" :key="index">{{item}}</p>
                </div>
                <p class="quick_entry" v-show="monthly_data.quick_entry.length">快捷入口：<span v-for="(item, index) in monthly_data.quick_entry" :key="index" @click="change(item.url)">{{item.entru}}</span></p>
            </div>
        </div>

        <div class="content">
            <!-- 升学途径指南 -->
            <div class="guide">
                <h5>升学途径指南</h5>
                <div class="main_box">
                    <div class="img_box">
                        <img src="/imgs/wayToStudy/main/icon_guide.png" alt="">
                    </div>
                    <p>
                       首先给大家介绍裸分统招升学途径。裸分统招是指不借助任何一种途径获得高考加分或录取优惠，仅通过参加普通高考进入理想大学的一种方式，目前大多数考生均采用该方式进入理想大学。<br/>随着新高考录取模式的增加，裸分上名校的难度也在不断增加。 
                    </p>
                </div>
            </div>
            <!-- 常见升学途径 -->
            <div class="common_school_path">
                <h5>常见升学途径</h5>
                <ul>
                    <router-link tag="li" :to="item.url" v-for="(item, index) in common_school_path" :key="index">
                        <div class="img_box">
                            <img :src="item.imgUrl" alt="">
                        </div>
                        <p class="title">{{item.title}}</p>
                        <p class="detail">{{item.detail}}</p>
                    </router-link>
                </ul>
            </div>
            <!-- 其他主流途径 -->
            <div class="other_main_path">
                <h5>其他主流途径</h5>
                <ul>
                    <router-link tag="li" :to="item.url" v-for="(item, index) in other_main_path" :key="index">{{item.title}}</router-link>
                </ul>
            </div>
            <!-- 军事/公安类升学 -->
            <div class="military_scholl">
                <h5>军事/公安类升学</h5>
                <ul>
                    <router-link tag="li" :to="item.url" v-for="(item, index) in military_scholl" :key="index">
                        <div class="img_box"><img :src="item.imgUrl" alt=""></div>
                        <p class="title">{{item.title}}</p>
                    </router-link>
                </ul>
            </div>
            <!-- 其他升学途径 -->
            <div class="other_goschool_path">
                <h5>其他升学途径</h5>
                <ul>
                    <router-link tag="li" :to="item.url" v-for="(item, index) in other_goschool_path" :key="index">
                        <img :src="item.imgUrl" alt="">
                        <p>{{item.title}}</p>
                    </router-link>
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
            fanganData: [],

            isActiveMonth: 3,
            // 是否完成测试并生成报告
            isFinishTest: false,
            // 升学途径月历
            monthly: [
                { title: '9月', detail:['空军招飞','海军招飞','民航招飞'] },
                { title: '10月', detail:['招飞初检','特殊类招生'] },
                { title: '11月', detail:['高考报名','艺术类统考','民航招飞'] },
                { title: '12月', detail:['高考报名','艺术类统考'] },
                { title: '1月', detail:['高考说明','特殊类招生','港澳内地招生'] },
                { title: '2月', detail:['艺术类专业','特殊类招生'] },
                { title: '3月', detail:['高考体检','各省招生规定','高职单招'] },
                { title: '4月', detail:['高校招生章程','高校专项计划'] },
                { title: '5月', detail:['招生咨询会','志愿填报政策','名单公示'] },
                { title: '6月', detail:['高考','高考查分','填报志愿'] },
                { title: '7月', detail:['高考志愿填报','高考录取','征集志愿','警惕高招诈骗'] },
                { title: '8月', detail:['专科录取','录取通知书','助学贷款'] }
            ],
            monthly_data: { 
                month: '12月', 
                title: '12月升学途径关键词：高考报名、艺术类统考',
                detail: ['到本月，部分省份2019年高考报名工作已完成，还有部分省份的高考报名将在12月进行，考生要根据省级招办的统一安排，在指定时间、地点报名。特别提示考生要注意看清报名要求，认真核对有关信息，避免出错。','部分省份还公布了艺术类专业统考的报名、考试安排。有意报考艺术类专业的考生要注意报名时间。 '], 
                quick_entry: [
                    {entru: '艺术类专业', url: '/wayToStudy/ArtEnrollment'},
                ]  
            },
            monthly_calendar: [
                { 
                    month: '9月', 
                    title: '9月升学途径关键词：空军招飞/海军招飞/民航招飞',
                    detail: [ '空军、海军招飞工作一般于9月底10月初启动。致力于当飞行员的考生可在所在中学关注报名通知，也可在空军招飞网、海军招飞网了解相关政策。需要知道的是，招飞选拨是一个长线过程。考生要参加严格的体格检查、心理检测、 政治审查等，还要参加高考。', '除了空军、海军招飞，一些民航委托高校也在招收飞行学员。经教育部批准可开展民航招飞工作的院校包括中国民用航空飞行学院、北京航空航天大学、南京航空航天大学、中国民航大学、滨州学院、沈阳航空航天大学、上海工程技术大学、南昌航空大学、黑龙江八一农垦大学、安阳工学院、烟台南山学院等11所。有意报考民航飞行学员的考生，可关注上述高校网站招飞信息。','无论空军招飞，还是民航招飞，对考生的身体要求都比较严格。考生应结合自身的身体、兴趣、学习成绩等情况，做出是否报考招飞的选择。'], 
                    quick_entry: [
                        {entru: '民航招飞', url: '/wayToStudy/civilaviation'},
                        {entru: '空军招飞', url: '/wayToStudy/airforce'},
                        {entru: '海军招飞', url: '/wayToStudy/seaforce'}
                    ] 
                },
                { 
                    month: '10月', 
                    title: '10月升学途径关键词：招飞初检/特殊类招生',
                    detail: ['空军、民航招飞初选检测从本月陆续进行，具体要根据各地的初选日程安排来看，也会有部分省份将在国庆节后对报名考生进行检测。', '另外，根据历年规律，每年进入10月后，部分高校会陆续发布艺术特长生、高水平运动员、保送生等信息，建议考生及时予以关注。'], 
                    quick_entry: [
                        {entru: '保送生', url: '/wayToStudy/recommendedstudent'},
                        {entru: '艺术类专业', url: '/wayToStudy/ArtEnrollment'},
                        {entru: ' 高水平运动员', url: '/wayToStudy/sportsteam'},
                    ] 
                },
                {
                    month: '11月', 
                    title: '11月升学途径关键词：高考报名/艺术类专业/民航招飞',
                    detail: [ '本月对高考生来说非常重要，很多省份的2019年高考报名时间在这个月对外公布。考生和家长要密切关注当地教育考试院网站上发布的相关信息，然后根据省级招办的统一安排，在指定时间、地点报名。','艺术类考生本月需要关注本省艺术类专业省统考的范围及报名考试时间，有些省份艺术类专业试报名与高考报名同时进行，也有分开进行报名的。对于拟报考专业在省统考范围内，考生必须参加省统考并获得合格成绩。','此外，本月各省海军、空军、民航招飞持续进行中。民航招飞政策一般也已陆续公布了，其初检将一般在11月初进行。' ], 
                    quick_entry: [
                        {entru: '艺术类专业', url: '/wayToStudy/ArtEnrollment'},
                        {entru: '民航招飞', url: '/wayToStudy/civilaviation'},
                    ] 
                },
                {  
                    month: '12月', 
                    title: '12月升学途径关键词：高考报名、艺术类统考',
                    detail: ['到本月，部分省份2019年高考报名工作已完成，还有部分省份的高考报名将在12月进行，考生要根据省级招办的统一安排，在指定时间、地点报名。特别提示考生要注意看清报名要求，认真核对有关信息，避免出错。','部分省份还公布了艺术类专业统考的报名、考试安排。有意报考艺术类专业的考生要注意报名时间。 '], 
                    quick_entry: [
                        {entru: '艺术类专业', url: '/wayToStudy/ArtEnrollment'},
                    ] 
                },
                {  
                    month: '1月', 
                    title: '1月升学途径关键词：高考说明/特殊类招生/港澳招生',
                    detail: ['一般情况下，各地高考生本月可陆续领到《高考考试说明》，这本书很重要，不但是高考命题的重要依据，也是考生复习与备考的重要参考。','此外，有关高校将陆续公布保送生、艺术类专业等特殊类型招生简章，香港、澳门高校内地招生也将在本月陆续进行，对于有意港澳高校的考生家长需要及时关注。'], 
                    quick_entry: [
                        {entru: '保送生', url: '/wayToStudy/recommendedstudent'},
                        {entru: '艺术类专业', url: '/wayToStudy/ArtEnrollment'},
                        {entru: '港澳招生', url: '/wayToStudy/gangaorecruitstudents'}
                    ] 
                },
                {  
                    month: '2月', 
                    title: '2月升学途径关键词：艺术类专业/特殊类专业',
                    detail: ['本月，艺术类专业考试是艺考生关注的热点。艺术类专业考试分为省级招办统一组织的专业考试(简称省级统考)和招生学校组织的专业考试(简称校考)两种形式。考生所报考专业涉及省级统考的，考生须参加省级统考。学校组织校考的，考生还要按招生院校的规定时间报名、考试。','另外，高校2019年保送生、高水平艺术团等招生简章仍将在陆续公布，考生家长需要及时关注。'], 
                    quick_entry: [
                        {entru: '保送生', url: '/wayToStudy/recommendedstudent'},
                        {entru: '艺术类专业', url: '/wayToStudy/ArtEnrollment'},
                        {entru: '高水平艺术团', url: '/wayToStudy/artensemble'}
                    ] 
                },
                {  
                    month: '3月', 
                    title: '3月升学途径关键词：高考体检/各省招生规定/高职单招',
                    detail: ['部分省市高考体检安排在3月进行，考生要在学校(或报名所在地招办)组织下到指定医院参加体检。体检前，考生应该注意保持身体健康。体检中发现身体指标有异常的考生，在填报志愿时要避开限报专业。','各省市2019年招生工作规定也将从本月陆续公布。招生工作规定是本省市高考工作的指导性文件，对高考报名、考试、志愿填报、录取、照顾政策等方面做出了详细要求，是考生和家长必须了解的政策。','一些省份的高职单招工作一般也在3月开始，考生需要先按照本省的时间规定进行报名，然后了解各校所发布的招生政策、专业、计划等信息，并提前做好考试准备工作。需要了解的是，考生通过单独招生被高职院校录取后，就不用再参加高考了'], 
                    quick_entry: [
                        // {entru: '自主招生', url: '/wayToStudy/AutonomousEnrollment'},
                        {entru: '高职单招', url: '/wayToStudy/gaozhidanzhao'},
                    ] 
                },
                {  
                    month: '4月', 
                    title: '4月升学途径关键词：高校招生章程/高校专项计划',
                    detail: ['本月，高校2019年招生章程将陆续发布，招生章程是考生了解高校招生信息、招生办法最重要的途径之一。请考生和家长仔细阅读有意报考高校的招生章程。如有不明白的地方，可咨询高校招办。','按照往年规律，高校专项计划报名申请将在本月。高校专项计划(又称“农村学生单独招生”)由教育部直属高校和部分高校承担，招生计划不少于学校本科招生规模的2%。高校专项计划主要招收边远、贫困、民族等地区县(含县级市)以下高中勤奋好学、成绩优良的农村学生。'], 
                    quick_entry: [
                        {entru: '三大专项计划', url: '/wayToStudy/threespecialplan'},
                    ] 
                },
                {  
                    month: '5月', 
                    title: '5月升学途径关键词：招生咨询会/熟悉志愿填报政策/名单公示',
                    detail: ['本月，部分高校会集中举行招生咨询会、校园开放日，考生家长可通过此活动了解心仪高校的招生信息，与招办老师面对面咨询沟通。而部分省份会在本月进行高考志愿填报演练，让考生家长熟悉如何正确填报志愿。需要提醒各位考生家长，志愿填报是非常重要且复杂的事情，考生家长应提前了解本省填报志愿政策，早知道、早准备。','此外，高校2019年招生章程仍将持续发布，其他类型的名单公示也将陆续开始。'], 
                    quick_entry: [
                        // {entru: '自主招生', url: '/wayToStudy/AutonomousEnrollment'},
                    ] 
                },
                {  
                    month: '6月', 
                    title: '6月升学途径关键词：高考/高考查分/填报志愿',
                    detail: ['6月7日，考生将走向高考考场，检验十多年的学习成果。在此也预祝2019高考学子金榜题名，考入自己理想的大学。','需要注意的是，往年，考生因不熟悉考试地点而走错考场，忘带证件而未能准时入场，携带违规物品进入考场而被视为作弊等意外情况屡有发生。为此，考生要提前规划好出行路线，合理选择交通工具，注意交通安全;提前准备好证件和文具，避免遗漏或丢失;不要携带手机等与考试无关的物品进入考场。答题时要放平心态，不要过于紧张，时间充裕时要认真检查;考后迅速离场，不要对答案，以免心情起伏，影响下一场考试。','报考军事、武警、公安类院校的考生还要在6月下旬参加军检、面试等。一些香港高校也将陆续在全国开始面试。','目前所有省份都将在考后填报志愿，所以，考试结束后考生需要立即做好志愿填报准备工作，届时，市面上也会有各种志愿填报辅助的产品，考生家长需要做好甄别筛选，切勿一味轻信。','6月下旬，各省市区将公布2019年高考成绩和各批次分数线。'], 
                    quick_entry: [
                        {entru: '军校招生', url: '/wayToStudy/militaryschool'},
                        {entru: '公安院校', url: '/wayToStudy/policeschool'},
                        {entru: '港澳招生', url: '/wayToStudy/gangaorecruitstudents'}
                    ] 
                },
                {  
                    month: '7月', 
                    title: '7月升学途径关键词：高考志愿填报/高考录取/征集志愿/高招诈骗',
                    detail: ['进入7月，各省市高招录取陆续开始，考生按时填好志愿后，仍需及时了解录取信息。在高考录取进程中，因为上线生源不足等原因，某些批次某些高校会出现招生计划未完成的情况。针对这些情况，部分省份将会发布征集志愿。对于未录取的考生一定要重视征集志愿，根据自身情况进行选择，及时填报，不要错过这趟高考录取的“末班车”。','7月还将有部分省份公布专科录取控制分数线，月底，部分省份的考生还将要填报高职志愿。','需要提醒考生的是，高招进入录取阶段。考生和家长在等待录取结果的同时，一些不法分子也打着各种招生诈骗旗号到处行骗。求学心切的考生和家长一定要提高警惕，不要相信“花钱就能上大学”的骗局。'], 
                    quick_entry: [
                    ] 
                },
                {  
                    month: '8月', 
                    title: '8月升学途径关键词：专科录取/录取通知书/助学贷款',
                    detail: ['一般情况下，本科批次录取基本在7月结束，专科批次将在8月录取，考生家长仍需持续关注该批次录取，了解专科院校招生信息和特色专业等','录取通知书在7月中下旬将陆续开始发送，进入8月将达到高峰期，录取通知书是由招生院校通过邮政特快专递等邮件方式寄送，通知书上加盖招生院校印章。随录取通知书一同寄给考生的，还有入学报到须知、资助政策办法等相关材料。','对于考上大学的寒门学子，不必为学费和生活费犯愁，考生可申请助学贷款。目前，国家已经建立起国家奖学金、国家励志奖学金、国家助学金、国家助学贷款、新生入学资助、勤工助学、学费减免、补偿代偿、“绿色通道”等多种方式并举的混合资助政策体系，资助政策已经覆盖了求学全过程。'], 
                    quick_entry: [
                    ] 
                }
            ],


            // 常见升学途径
            common_school_path: [
                // { title: '自主招生',detail: '通过自主招生，你可以获得名校一定分数的优惠，最高可降低至一本线录取。',url: '/wayToStudy/AutonomousEnrollment',imgUrl: '/imgs/wayToStudy/main/icon_zizhuzhaosheng.png' },
                { title: '艺术类招生',detail: '一般来说，文化课成绩一般，有一定的艺术天赋，可以尝试该升学途径。',url: '/wayToStudy/ArtEnrollment',imgUrl: '/imgs/wayToStudy/main/icon_yishuleizhaosheng.png' },
                { title: '体育类专业',detail: '文化课成绩一般，身体素质较好，有一定体育特长，可尝试该升学路径。',url: '/wayToStudy/SportsMajor',imgUrl: '/imgs/wayToStudy/main/icon_tiyuleizhaosheng.png' },
                { title: '综合评价录取',detail: '文化成绩排名不是最靠前和最靠后的考生，可以考虑“综合评价招生”升学途径。',url: '/wayToStudy/ComprehensiveEvaluation',imgUrl: '/imgs/wayToStudy/main/icon_zonghepingjialuqu.png' }
            ],
            // 其他主流途径
            other_main_path: [ 
                { title: '三大专项计划', url: '/wayToStudy/threespecialplan'}, 
                { title: '公费师范生', url: '/wayToStudy/publicexpense'}, 
                { title: '免费医学生', url: '/wayToStudy/freemedicalstudents'}, 
                { title: '保送生', url: '/wayToStudy/recommendedstudent'}, 
                { title: '高水平艺术团', url: '/wayToStudy/artensemble'}, 
                { title: '高水平运动队', url: '/wayToStudy/sportsteam'}, 
                { title: '体育单招', url: '/wayToStudy/tiyudanzhao'}, 
                { title: '高职单招', url: '/wayToStudy/gaozhidanzhao'}
            ],
            // 军事/公安类升学
            military_scholl: [
                { title: '民航招飞', url: '/wayToStudy/civilaviation', imgUrl: '/imgs/wayToStudy/main/icon_minhangzhaofei.png' },
                { title: '海军招飞', url: '/wayToStudy/seaforce', imgUrl: '/imgs/wayToStudy/main/icon_haijunzhaofei.png' },
                { title: '空军招飞', url: '/wayToStudy/airforce', imgUrl: '/imgs/wayToStudy/main/icon_kongjunzhaofei.png' },
                { title: '军校招生', url: '/wayToStudy/militaryschool', imgUrl: '/imgs/wayToStudy/main/icon_junxiaozhaosheng.png' },
                { title: '公安院校', url: '/wayToStudy/policeschool', imgUrl: '/imgs/wayToStudy/main/icon_gonganyuanxiao.png' },
                { title: '航海类院校', url: '/wayToStudy/nauticalcategoryschool', imgUrl: '/imgs/wayToStudy/main/icon-hanghaileiyuanxiao.png' }
            ],
            // 其他升学途径
            other_goschool_path: [
                { title: '民族预科班', url: '/wayToStudy/nationprepclass', imgUrl: '/imgs/wayToStudy/main/icon_minzuyukeban.png' },
                { title: '港澳招生', url: '/wayToStudy/gangaorecruitstudents', imgUrl: '/imgs/wayToStudy/main/icon_gangaozhaosheng.png' },
                { title: '中外合作', url: '/wayToStudy/sinoforeigncooperation', imgUrl: '/imgs/wayToStudy/main/icon_zhongwaihezuo.png' },
                { title: '海外留学', url: '/wayToStudy/studyingabroad', imgUrl: '/imgs/wayToStudy/main/icon_haiwailiuxue.png' }                 
            ]
        }
    },
    computed: {
        isFangan() {
            if(this.fanganData.constructor == Array) {
                return false;
            }else {
                return true;
            }
        }
    },
    methods: {
        // 保存成功提示
        successMessage(detail) {
            this.$message({
                type: 'success',
                message: detail
            });
        },
        // 保存有问题提示
        unSuccess(detail) {
            this.$message({
                type: 'error',
                message: detail
            });
        },
        change(url) {
            this.$router.push(url);
            window.scrollTo(0, 0);
        },
        //生涯管理系统 - 升学途径 - 报告
        getReport(){
            this.$ajax.post(this.G_uri + '/furtherWay/getReport',{
            },{
                headers:{
                    token: window.sessionStorage.getItem('ymtxToken')
                }
            })
            .then((res)=>{
                let data = res.data.data;
                if(res.data.code == 2000) {
                    if(Array.isArray(data)) {
                        this.isFinishTest = false;
                    }else {
                        this.isFinishTest = true;
                    }
                }
            })
            .catch((error) => {
                console.log(error);
            }) 
        },


        // 升学建议方案  -  查看是否可以生成方案 - 列表
        isToProducedPlan(){
            this.$ajax.post(this.G_uri + '/furtherWay/isToProducedPlan',{
            },{
                headers:{
                    token: window.sessionStorage.getItem('ymtxToken')
                }
            })
            .then((res)=>{
                let data = res.data.data;
                if(res.data.code == 2000) {
                    let isToProducedPlan = true;
                    // 1是可以生成2是不可以生成
                    // careerEvaluation   识自我 - 生涯测评  
                    // selfInfo           认识自我 - 个人信息
                    // scoreInfo          认识自我 - 学业信息
                    // awardInfo          认识自我 - 获奖信息
                    // goal               选择决策 - 确定目标 - 我的目标(目标院校、目标专业)
                    // furtherWay         升学途径分析  只显示推荐升学途径
                    // assess             认识自我 - 学习状态诊断(8项测评)
                    // universityShaving  选择决策 - 确定目标 - 目标大学剃度表
                    if(data.careerEvaluation == 2) {
                        isToProducedPlan = false;
                        this.unSuccess('请前往认识自我，完成生涯测评后再点击生成！');
                    }else if(data.selfInfo == 2) {
                        this.unSuccess('请前往认识自我，完善个人信息后再点击生成！');
                        isToProducedPlan = false;
                    }else if(data.scoreInfo == 2) {
                        isToProducedPlan = false;
                        this.unSuccess('请前往认识自我，完善学业信息后再点击生成！');
                    }else if(data.awardInfo == 2) {
                        isToProducedPlan = false;
                        this.unSuccess('请前往认识自我，完善获奖信息后再点击生成！');
                    }else if(data.goal == 2) {
                        isToProducedPlan = false;
                        this.unSuccess('请前往选择决策-确定目标，完善我的目标后再点击生成！');
                    }else if(data.furtherWay == 2) {
                        isToProducedPlan = false;
                        this.unSuccess('请前往升学途径，完成升学途径测试后再点击生成！');
                    }else if(data.assess == 2) {
                        isToProducedPlan = false;
                        this.unSuccess('请前往认识自我，完成学习状态诊断后再点击生成！');
                    }else if(data.universityShaving == 2) {
                        isToProducedPlan = false;
                        this.unSuccess('请前往选择决策-确定目标，完善目标大学梯度表后再点击生成！');
                    }
                    if(isToProducedPlan) {
                        this.producedPlan();
                    }
                }
            })
            .catch((error) => {
                console.log(error);
            }) 
        },


        // 升学建议方案  -  生成升学建议方案
        producedPlan(){
            this.$ajax.post(this.G_uri + '/furtherWay/producedPlan',{
            },{
                headers:{
                    token: window.sessionStorage.getItem('ymtxToken')
                }
            })
            .then((res)=>{
                let data = res.data.data;
                if(res.data.code == 2000) {
                    this.successMessage('已生成升学方案，可点击“查看方案查看”！');
                    this.getProducedPlanReport();
                }
            })
            .catch((error) => {
                console.log(error);
            }) 
        },


        // 升学建议方案 - 获取升学建议方案报告
        getProducedPlanReport(){
            this.$ajax.post(this.G_uri + '/furtherWay/getProducedPlanReport',{
            },{
                headers:{
                    token: window.sessionStorage.getItem('ymtxToken')
                }
            })
            .then((res)=>{
                let data = res.data.data;
                if(res.data.code == 2000) {
                    this.fanganData = data;
                }
            })
            .catch((error) => {
                console.log(error);
            }) 
        },     
    },
    created() {
        this.getReport();
        this.getProducedPlanReport();
    }
}
</script>
<style type="text/css" lang='less' scoped>
.studyway {
    .banner {
        margin-bottom: 20px;
        height: 160px;
    }
    h5 {
        line-height: 64px;  
        color: #338cef;
        font-size: 16px;  
        font-weight: 600; 
        padding-left: 30px; 
        background: url(/imgs/wayToStudy/main/icon_title.png) no-repeat 0px center;
    }
    .analysis {
        background-color: #fff;
        padding: 0px 20px;
        margin-bottom: 20px;
        border-radius: 5px;
        height: 286px;
        position: relative;
        .main_box {
            padding-left: 200px;
            background: url(/imgs/wayToStudy/main/icon_ceshijianjie.png) no-repeat 40px center;
            .title { 
                font-size: 16px;
                color: #333;
                font-weight: 600;
                line-height: 40px;
                margin-bottom: 10px;
            }
            .detail {
                color: #666;
                font-size: 14px;
                line-height: 20px;
                margin-bottom: 6px;
            }
        }
        .btn_box {
            overflow: hidden;
            position: absolute;
            bottom: 30px;
            right: 20px;
            .btn {
                border-radius: 3px;
                width: 76px;
                height: 30px;
                line-height: 30px;
                text-align: center;
                float: left;
                margin-left: 30px;
                box-sizing: border-box;
                cursor: pointer;
            }
            .view_report {
                background-color: #3c91f4;
                color: #fff;
            }
            .test_again {
                border: 1px solid #3c91f4;
                color: #3c91f4;
            }
        }
    }
    .fangan {
        .main_box {
            padding-top: 20px;
            background: url(/imgs/wayToStudy/main/icon_shengxuejianyifangan.png) no-repeat 40px center;
        }
    }
    .monthly_calendar {
        background-color: #fff;
        padding: 0px 20px 20px 20px;
        margin-bottom: 20px;
        .main_box {
            height: 240px;
            position: relative;
            .line {
                width: 100%;
                height: 0px;
                position: absolute;
                top: 50%;
                border-bottom: 1px dashed #a2a2a2;
            }
            .detail_box {
                width: 90px;
                height: 50px;
                position: absolute;
                box-sizing: border-box;
                position: absolute;
                cursor: pointer;
                .detail {
                    width: 90px;
                    text-align: center;
                    line-height: 16px;
                    font-size: 12px;
                    color: #333;
                    position: absolute;
                }
                .circle_small {
                    width: 36px;
                    height: 36px;
                    position: relative;
                    z-index: 2;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    margin: 0 auto;
                    border-radius: 50%;

                    span {
                        color: #fff;
                    }
                    &:after {
                        content: '';
                        width: 0px;
                        height: 0px;
                        bottom: -14px;
                        left: 50%;
                        margin-left: -5px;
                        position: absolute;
                        z-index: 1;
                        border-width: 10px 5px 10px 5px;
                        border-style: solid;
                    }
                }
                .active {
                    width: 42px;
                    height: 42px;
                }
                .unactive {
                    &:hover {
                        transform: scale(1.2);
                    }
                }
                &:nth-child(odd) {
                    &:before {
                        content: '';
                        position: absolute;
                        width: 6px;
                        height: 6px;
                        border-radius: 50%;
                        bottom: -3px;
                        left: 50%;
                        margin-left: -3px;
                    }
                    .detail {
                        position: absolute;
                        bottom: 50px;
                        padding-bottom: 5px;
                    }
                    .circle_small {
                        &:after {
                            border-color: #ee9166 transparent transparent transparent;
                        }
                    }
                }
                &:nth-child(even) {
                    padding-top: 12px;
                    &:before {
                        content: '';
                        position: absolute;
                        width: 6px;
                        height: 6px;
                        border-radius: 50%;
                        top: -3px;
                        left: 50%;
                        margin-left: -3px;
                    }
                    .detail {
                        position: absolute;
                        top: 50px;
                        padding-top: 5px;
                    }
                    .circle_small {
                        &:after {
                            top: -14px;
                            border-width: 10px 5px 10px 5px;
                            border-color: transparent transparent #ee9166 transparent;
                        }
                    }
                }
                &:nth-child(1) {
                    left: 60px;
                    bottom: 0;
                }
                &:nth-child(2) {
                    left: 130px;
                    top: 0;
                }
                &:nth-child(3) {
                    left: 200px;
                    bottom: 0;
                }
                &:nth-child(4) {
                    left: 275px;
                    top: 0;
                }
                &:nth-child(5) {
                    left: 400px;
                    bottom: 0;
                }
                &:nth-child(6) {
                    left: 475px;
                    top: 0;
                }
                &:nth-child(7) {
                    left: 536px;
                    bottom: 0;
                }
                &:nth-child(8) {
                    left: 600px;
                    top: 0;
                }
                &:nth-child(9) {
                    left: 660px;
                    bottom: 0;
                }
                &:nth-child(10) {
                    left: 740px;
                    top: 0;
                }
                &:nth-child(11) {
                    left: 790px;
                    bottom: 0;
                }
                &:nth-child(12) {
                    left: 860px;
                    top: 0;
                }
            }
            .year_19 {
                &:before {
                    background-color: #ee9166;
                }
                &:nth-child(even) { 
                    .circle_small {
                        &:after {
                            border-color:  transparent transparent #ee9166 transparent;
                        }
                    }
                    .active {
                        background-color: #ec7944;
                        &:after {
                            border-color:  transparent transparent #ec7944 transparent;
                        }
                    }
                }
                &:nth-child(odd) { 
                    .circle_small {
                        &:after {
                            border-color: #ee9166 transparent transparent transparent;
                        }
                    }
                    .active {
                         background-color: #ec7944;
                        &:after {
                            border-color: #ec7944 transparent transparent transparent;
                        }
                    }
                }
                .circle_small {
                    background-color: #ee9166;
                }
            }
            .year_20 {
                &:before {
                    background-color: #87cd60;
                }
                .circle_small {
                    background-color: #87cd60;
                }
                &:nth-child(even) { 
                    .circle_small {
                        &:after {
                            border-color:  transparent transparent #87cd60 transparent;
                        }
                    }
                    .active {
                        background-color: #4fce09;
                        &:after {
                            border-color:  transparent transparent #4fce09 transparent;
                        }
                    }
                }
                &:nth-child(odd) { 
                    .circle_small {
                        &:after {
                            border-color: #87cd60 transparent transparent transparent;
                        }
                    }
                    .active {
                        background-color: #4fce09;
                        &:after {
                            border-color: #4fce09 transparent transparent transparent;
                        }
                    }
                }
            }
            .circle {
                width: 50px;
                height: 50px;
                border-radius: 50%;
                background-color: #ee9166;
                position: relative;
                text-align: center;
                line-height: 50px;
                color: #fff;
                position: absolute;
                top: 50%;
                font-size: 18px;
                margin-top: -25px;
                &:after {
                    content: '';
                    width: 0px;
                    height: 0px;
                    right: -16px;
                    top: 50%;
                    margin-top: -5px;
                    position: absolute;
                    border-width: 5px 10px 5px 10px;
                    border-style: solid;
                    border-color: transparent transparent transparent #ee9166;
                }
            }
            .circle_20 {
                left: 355px;
                background-color: #87cd60;
                &:after {
                    border-color: transparent transparent transparent #87cd60;
                }
            }
        }
        .main_detail {
            padding-top: 10px;
            min-height: 244px;
            background: url(/imgs/wayToStudy/main/bg_yueli.png) no-repeat;
            .title {
                line-height: 44px;
                font-size: 16px;
                font-weight: 600;
                color: #333;
                text-align: center;
            }
            .detail_box {
                padding: 20px;
                p {
                    font-size: 14px;
                    color: #333;
                    line-height: 24px;
                    margin-bottom: 10px;
                }
            }
            .quick_entry {
                padding-left: 20px;
                font-weight: 600;
                span {
                    color: #3c91f4;
                    margin-left: 5px;
                    cursor: pointer;
                }
            }
        }
    }
    .content {
        padding: 0px 20px;
        background-color: #fff;
    }
    .guide {
        padding-bottom: 16px;
        .main_box {
            border: 1px solid #eaeaea;
            border-radius: 5px;
            overflow: hidden;
            .img_box {
                float: left;
                width: 120px;
                height: 124px;
                line-height: 124px;
                text-align: center;
            }
            p {
                float: left;
                width: 780px;
                padding: 24px 0px;
                line-height: 26px;
                font-size: 14px;
                color: #666;
            }
        }
    }
    .common_school_path {
        ul {
            display: flex;
            justify-content: space-between;
            li {
                width: 200px;
                height: 252px;
                text-align:center;
                cursor: pointer;
                &:hover {
                    box-shadow: 0px 0px 10px #dedede;
                }
                .img_box {
                    width: 180px;
                    height: 100px;
                    text-align: center;
                    line-height: 100px;
                    img {
                        vertical-align:middle;
                    }
                }
                .title {
                    line-height: 36px;
                    font-size: 16px;
                    font-weight: 600;
                    color: #333;
                }
                .detail {
                    padding: 10px;
                    line-height: 24px;
                    font-size: 14px;
                    color: #666;
                    text-align: left;
                }
            }
        }
    }
    .other_main_path {
        padding-bottom: 16px;
        ul {
            display: flex;
            flex-wrap: wrap;
            justify-content: flex-start;
            height: 110px;
            overflow: hidden;
            li {
                text-align: center;
                border-radius: 5px;
                border: 1px solid #eaeaea;
                background-color: #f2fafd;
                font-size: 14px;
                font-weight: 600;
                width: 170px;
                height: 42px;
                line-height: 42px;
                margin-right: 80px;
                margin-bottom: 22px;
                cursor: pointer;
                &:nth-child(4) {
                    margin-right: 0px;
                }
                &:last-child {
                    margin-right: 0px;
                }
                &:hover {
                    color: #fff;
                    background-color: #3187e6;
                    border: 1px solid #3187e6;
                }
            }
        }
    }
    .military_scholl {
        padding-bottom: 16px;
        ul {
            display: flex;
            justify-content: space-between;
            li {
                width: 76px;
                text-align:center;
                cursor: pointer;
                &:hover {
                    p {
                        color: #2c8ffc;
                    }
                }
                .img_box {
                    width: 76px;
                    height: 72px;
                }
                .title {
                    line-height: 30px;
                    font-size: 14px;
                    font-weight: 600;
                }
            }
        }
    }
    .other_goschool_path {
        padding-bottom: 16px;
        ul {
            display: flex;
            justify-content: space-between;
            li {
                cursor: pointer;
                width: 171px;
                &:hover {
                    p {
                        color: #2c8ffc;
                    }
                }
                img {
                    border-radius: 5px;
                }
                p {
                    line-height: 42px;
                    font-size: 14px;
                    font-weight: 600;
                    text-align: center;
                    font-size: 14px;
                    font-weight: 600;
                }
            }
        }
    }
    
}
</style>