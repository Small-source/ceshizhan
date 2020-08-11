<template>


  <div class="pc-page">
    <headerEl></headerEl>

    <div class="main main_bg">
      <div class="auto">
        <div class="crumb_goback">
          <router-link to="/" class="button">返回首页</router-link>
        </div>
        <div class="clearfix">
          <usercenter></usercenter>
          <div class="admin_r fr">
            <div class="admin_topbox d-relative clearfix">
					<span class="tit fl">
						我的报告 <em class="en">query report</em>
					</span>

              <router-link to="/user/report" class="backlist fr">返回列表</router-link>
              <a href="javascript:;" @click="getCanvasImg(canvasImgSeq)" class="backlist downReport fr">下载报告</a>
            </div>
            <!--<div class="report_main">-->
            <!--<div class="pdfContent">-->

            <!--&lt;!&ndash;page 1&ndash;&gt;-->
            <!--<div class="pdf-page">-->
            <!--<div class="pdf-header border-no"></div>-->
            <!--<div class=" pdf-content">-->
            <!--<div class="pdf-title">-->
            <!--EVALUATION REPORT OF HIGH SCHOOL STUDENTS` ENTRANCE PLANNING-->
            <!--</div>-->
            <!--<img class="page-one-title" src="../../assets/pdf/title.png" alt="">-->
            <!--<img class="page-one-logo" src="../../assets/pdf/logo.png" alt="">-->
            <!--<div class="page-one-name">-->
            <!--<ul>-->
            <!--<li>-->
            <!--<p>姓&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;名：</p>-->
            <!--<p>{{user.realname}}</p>-->
            <!--</li>-->
            <!--<li>-->
            <!--<p>报告编号：</p>-->
            <!--<p>{{userInfo.report_no}}</p>-->
            <!--</li>-->
            <!--<li>-->
            <!--<p>报告日期：</p>-->
            <!--<p>{{reportTime}}</p>-->
            <!--</li>-->
            <!--</ul>-->
            <!--</div>-->
            <!--<div class="page-one-bottom">-->
            <!--<img src="../../assets/pdf/page-one-line.png" alt="">-->
            <!--<p>学马教育集团旗下品牌</p>-->
            <!--<p>测评网址：www.ymtest.com</p>-->
            <!--<p>地址：北京海淀区清华科技园科技大厦D座</p>-->
            <!--<p>系统开发技术、测评方法及报告设计已申请知识产权保护</p>-->
            <!--<p>本报告仅供相关个人阅读参考，未经许可不得传阅 严禁用做他途</p>-->
            <!--</div>-->
            <!--</div>-->
            <!--<div class="pdf-footer border-no">-->
            <!--</div>-->
            <!--</div>-->
            <!--&lt;!&ndash;page 1&ndash;&gt;-->

            <!--&lt;!&ndash;page 2&ndash;&gt;-->
            <!--<div class="pdf-page">-->
            <!--<div class="pdf-header">-->
            <!--<img class="pull-left" src="../../assets/pdf/header-logo.png" height="39px">-->
            <!--<p class="pull-right pdf-page-seq"></p>-->
            <!--<p class="pull-right font-blue">高中生升学规划测评报告</p>-->
            <!--</div>-->
            <!--<div class=" pdf-content">-->
            <!--<div class="font-blue pdf-page-title"><span>测评背景</span></div>-->
            <!--<div class="font-medium pdf-paragraph">-->
            <!--随着高考制度的改革，职业生涯规划已被纳入到高中的必修课，一方面源于学生临到高考时，对于如何填报志愿，一片茫然；另一方面源于我国当前的就业形势非常严峻，许多大学生毕业即意味着失业。作为一名青年学子，如何才能使自己在中学阶段做到“未雨绸缪”，使得职业生涯规划在高中教育中变得尤为重要。-->
            <!--</div>-->
            <!--<div class="font-medium pdf-paragraph">-->
            <!--高中阶段是职业生涯规划的源头，它对以后的就业和职业发展意义十分重大。对高中生进行科学的职业生涯测评将有效地帮助学生认识自己，尽早确定目标，有的放矢的进行规划和学习。提高学生的学习动机，帮助学生直达成功的彼岸。-->
            <!--</div>-->
            <!--<div class="font-medium pdf-paragraph">-->
            <!--目前，各类职业测评屡见不鲜，但大多是单一维度的测量，或是问卷形式的自我汇报，无法做到多个方面的综合评估。高中生升学规划测评系统，旨在为高中生职业生涯规划提供科学参考，从人格特性、职业兴趣和一般认知潜能三个方面来反映适合个体的职业类型，并根据国家职业大典建立具有以上三个方面特征的职业数据库，在现有成熟的测评技术基础之上，实现职业的精准定位。-->
            <!--</div>-->
            <!--<div class="font-medium pdf-paragraph">-->
            <!--本报告的主要内容包括：人格特性评估、认知潜能评估、兴趣倾向评估、职业生涯规划、学习特征评估、心理健康评估六大方面的内容。通过专业人员的解读，学生可全方位的剖析自己、认识职业、了解专业，对自己的升学过程作出科学合理的规划。-->
            <!--</div>-->
            <!--<div class="page-2-user">-->
            <!--<div class="text-center">测试者基本信息</div>-->
            <!--<ul>-->
            <!--<li>-->
            <!--<p><span>年级：</span></p>-->
            <!--<p>{{user.grade}}</p>-->
            <!--</li>-->
            <!--<li>-->
            <!--<p><span>性别：</span></p>-->
            <!--<p>{{user.sex}}</p>-->
            <!--</li>-->
            <!--<li>-->
            <!--<p><span>学校：</span></p>-->
            <!--<p>{{user.school}}</p>-->
            <!--</li>-->
            <!--<li>-->
            <!--<p><span>所在省市：</span></p>-->
            <!--<p>{{user.province}}{{user.city}}</p>-->
            <!--</li>-->
            <!--<li>-->
            <!--<p><span>评测日期：</span></p>-->
            <!--<p>{{testTime}}</p>-->
            <!--</li>-->
            <!--<li>-->
            <!--<p><span>评测使用编号：</span></p>-->
            <!--<p>{{userInfo.serial_no}}</p>-->
            <!--</li>-->
            <!--<li>-->
            <!--<p><span>信度指数：</span></p>-->
            <!--<p>{{cehuang}}分</p>-->
            <!--</li>-->
            <!--</ul>-->
            <!--</div>-->
            <!--</div>-->
            <!--<div class="font-blue pdf-footer">-->
            <!--<p class="pull-left">测评网址：www.ymtest.com</p>-->
            <!--<p class="pull-right">测评方法、工具及报告设计已申请产权保护</p>-->
            <!--</div>-->
            <!--</div>-->
            <!--&lt;!&ndash;page 2&ndash;&gt;-->

            <!--&lt;!&ndash;page 3&ndash;&gt;-->
            <!--<div class="pdf-page">-->
            <!--<div class="pdf-header">-->
            <!--<img class="pull-left" src="../../assets/pdf/header-logo.png" height="39px">-->
            <!--<p class="pull-right pdf-page-seq"></p>-->
            <!--<p class="pull-right font-blue">高中生升学规划测评报告</p>-->
            <!--</div>-->
            <!--<div class=" pdf-content">-->
            <!--<img class="page-3-title" src="../../assets/pdf/3-title.png" alt="">-->
            <!--<div class="d-relative page-menu">-->

            <!--<ul>-->
            <!--<li class="title1">-->
            <!--<p>第一部分 人格特性评估</p>-->
            <!--<span>.......................................................................................................<small>04</small></span>-->
            <!--</li>-->
            <!--<li class="title2">-->
            <!--<p>1.1人格特性类别评估结果</p>-->
            <!--<span>......................................................................................................<small>04</small></span>-->
            <!--</li>-->
            <!--<li class="title2">-->
            <!--<p>1.2人格特性类型分析</p>-->
            <!--<span>.............................................................................................................<small-->
            <!--class="page-menu-seq" cid="12">04</small></span>-->
            <!--</li>-->
            <!--<li class="title3">-->
            <!--<p>1.2.1人格类型基本描述</p>-->
            <!--<span>....................................................................................................<small-->
            <!--class="page-menu-seq" cid="121">04</small></span>-->
            <!--</li>-->
            <!--<li class="title3">-->
            <!--<p>1.2.2气质类型</p>-->
            <!--<span>...................................................................................................................<small-->
            <!--class="page-menu-seq" cid="122">04</small></span>-->
            <!--</li>-->
            <!--<li class="title3">-->
            <!--<p>1.2.3人格类型优势</p>-->
            <!--<span>............................................................................................................<small-->
            <!--class="page-menu-seq" cid="123">04</small></span>-->
            <!--</li>-->
            <!--<li class="title3">-->
            <!--<p>1.2.4人格类型劣势</p>-->
            <!--<span>............................................................................................................<small-->
            <!--class="page-menu-seq" cid="124">04</small></span>-->
            <!--</li>-->
            <!--<li class="title3">-->
            <!--<p>1.2.5人格类型的功能运用</p>-->
            <!--<span>.................................................................................................<small-->
            <!--class="page-menu-seq" cid="125">04</small></span>-->
            <!--</li>-->
            <!--<li class="title3">-->
            <!--<p>1.2.6成功秘诀</p>-->
            <!--<span>..................................................................................................................<small-->
            <!--class="page-menu-seq" cid="126">04</small></span>-->
            <!--</li>-->

            <!--<li class="title2">-->
            <!--<p>1.3人格特性深度评估与分析</p>-->
            <!--<span>..................................................................................................<small-->
            <!--class="page-menu-seq" cid="131">04</small></span>-->
            <!--</li>-->
            <!--<li class="title3">-->
            <!--<p>1.3.1子维度一（外向与内向）</p>-->
            <!--<span>.........................................................................................<small-->
            <!--class="page-menu-seq" cid="131">04</small></span>-->
            <!--</li>-->
            <!--<li class="title3">-->
            <!--<p>1.3.2子维度二（直觉与实感）</p>-->
            <!--<span>.........................................................................................<small-->
            <!--class="page-menu-seq" cid="132">04</small></span>-->
            <!--</li>-->
            <!--<li class="title3">-->
            <!--<p>1.3.3子维度三（思考与情感）</p>-->
            <!--<span>.........................................................................................<small-->
            <!--class="page-menu-seq" cid="133">04</small></span>-->
            <!--</li>-->
            <!--<li class="title3">-->
            <!--<p>1.3.4子维度四（判断与知觉）</p>-->
            <!--<span>.............................................................................................<small-->
            <!--class="page-menu-seq" cid="134">04</small></span>-->
            <!--</li>-->
            <!--<li class="title3">-->
            <!--<p>1.3.5与{{personality.name}}人群子维度常模比较</p>-->
            <!--<span>.......................................................................................<small-->
            <!--class="page-menu-seq" cid="135">04</small></span>-->
            <!--</li>-->
            <!--<li class="title1">-->
            <!--<p>第二部分 认知潜能评估</p>-->
            <!--<span>.........................................................................................................<small-->
            <!--class="page-menu-seq" cid="2">04</small></span>-->
            <!--</li>-->
            <!--<li class="title2">-->
            <!--<p>2.1认知潜能评估结果</p>-->
            <!--<span>................................................................................................................<small-->
            <!--class="page-menu-seq" cid="21">02</small></span>-->
            <!--</li>-->
            <!--<li class="title2">-->
            <!--<p>2.2认知潜能分析</p>-->
            <!--<span>................................................................................................................<small-->
            <!--class="page-menu-seq" cid="22">02</small></span>-->
            <!--</li>-->
            <!--<li class="title1">-->
            <!--<p>第三部分 兴趣倾向评估</p>-->
            <!--<span>.........................................................................................................<small-->
            <!--class="page-menu-seq" cid="31">04</small></span>-->
            <!--</li>-->
            <!--<li class="title2">-->
            <!--<p>3.1兴趣倾向评估结果</p>-->
            <!--<span>................................................................................................................<small-->
            <!--class="page-menu-seq" cid="31">02</small></span>-->
            <!--</li>-->
            <!--<li class="title2">-->
            <!--<p>3.2兴趣倾向分析</p>-->
            <!--<span>................................................................................................................<small-->
            <!--class="page-menu-seq" cid="32">02</small></span>-->
            <!--</li>-->

            <!--<li class="title1">-->
            <!--<p>第四部分 职业生涯规划</p>-->
            <!--<span>.........................................................................................................<small-->
            <!--class="page-menu-seq" cid="41">04</small></span>-->
            <!--</li>-->
            <!--<li class="title2">-->
            <!--<p>4.1职业匹配结果评估</p>-->
            <!--<span>...........................................................................................................<small-->
            <!--class="page-menu-seq" cid="41">02</small></span>-->
            <!--</li>-->
            <!--<li class="title2">-->
            <!--<p>4.2最佳匹配职业与专业</p>-->
            <!--<span>...........................................................................................................<small-->
            <!--class="page-menu-seq" cid="41">02</small></span>-->
            <!--</li>-->
            <!--<li class="title2">-->
            <!--<p>4.3第二匹配职业与专业</p>-->
            <!--<span>...........................................................................................................<small-->
            <!--class="page-menu-seq" cid="42">02</small></span>-->
            <!--</li>-->
            <!--<li class="title2">-->
            <!--<p>4.4第三匹配职业与专业</p>-->
            <!--<span>...........................................................................................................<small-->
            <!--class="page-menu-seq" cid="43">02</small></span>-->
            <!--</li>-->
            <!--<li class="title1">-->
            <!--<p>第五部分 学习特征评估</p>-->
            <!--<span>.........................................................................................................<small-->
            <!--class="page-menu-seq" cid="51">04</small></span>-->
            <!--</li>-->
            <!--<li class="title2">-->
            <!--<p>5.1基本学习能力</p>-->
            <!--<span>...................................................................................................................<small-->
            <!--class="page-menu-seq" cid="51">02</small></span>-->
            <!--</li>-->


            <!--</ul>-->

            <!--</div>-->
            <!--</div>-->
            <!--<div class="font-blue pdf-footer">-->
            <!--<p class="pull-left">测评网址：www.ymtest.com</p>-->
            <!--<p class="pull-right">测评方法、工具及报告设计已申请产权保护</p>-->
            <!--</div>-->
            <!--</div>-->
            <!--&lt;!&ndash;page 3&ndash;&gt;-->

            <!--&lt;!&ndash;page 4&ndash;&gt;-->
            <!--<div class="pdf-page">-->
            <!--<div class="pdf-header">-->
            <!--<img class="pull-left" src="../../assets/pdf/header-logo.png" height="39px">-->
            <!--<p class="pull-right pdf-page-seq"></p>-->
            <!--<p class="pull-right font-blue">高中生升学规划测评报告</p>-->
            <!--</div>-->
            <!--<div class=" pdf-content">-->
            <!--<div class="d-relative page-menu">-->

            <!--<ul>-->
            <!--<li class="title3">-->
            <!--<p>5.1.1基本学习能力评估结果</p>-->
            <!--<span>...............................................................................................<small-->
            <!--class="page-menu-seq" cid="511">04</small></span>-->
            <!--</li>-->
            <!--<li class="title3">-->
            <!--<p>5.1.2基本学习能力分析</p>-->
            <!--<span>....................................................................................................<small-->
            <!--class="page-menu-seq" cid="512">04</small></span>-->
            <!--</li>-->
            <!--<li class="title2">-->
            <!--<p>5.2学习态度</p>-->
            <!--<span>.........................................................................................................................<small-->
            <!--class="page-menu-seq" cid="52">04</small></span>-->
            <!--</li>-->

            <!--<li class="title3">-->
            <!--<p>5.2.1学习态度评估结果</p>-->
            <!--<span>...............................................................................................<small-->
            <!--class="page-menu-seq" cid="521">04</small></span>-->
            <!--</li>-->
            <!--<li class="title3">-->
            <!--<p>5.2.2学习态度分析</p>-->
            <!--<span>....................................................................................................<small-->
            <!--class="page-menu-seq" cid="522">04</small></span>-->
            <!--</li>-->

            <!--<li class="title2">-->
            <!--<p>5.3学习过程</p>-->
            <!--<span>..........................................................................................................................<small-->
            <!--class="page-menu-seq" cid="53">04</small></span>-->
            <!--</li>-->

            <!--<li class="title3">-->
            <!--<p>5.3.1学习过程评估结果</p>-->
            <!--<span>....................................................................................................<small-->
            <!--class="page-menu-seq" cid="531">04</small></span>-->
            <!--</li>-->
            <!--<li class="title3">-->
            <!--<p>5.3.2学习过程分析</p>-->
            <!--<span>.............................................................................................................<small-->
            <!--class="page-menu-seq" cid="532">04</small></span>-->
            <!--</li>-->

            <!--<li class="title2">-->
            <!--<p>5.4学习风格</p>-->
            <!--<span>........................................................................................................................<small-->
            <!--class="page-menu-seq" cid="541">04</small></span>-->
            <!--</li>-->

            <!--<li class="title3">-->
            <!--<p>5.4.1学习风格评估结果</p>-->
            <!--<span>.....................................................................................................<small-->
            <!--class="page-menu-seq" cid="541">04</small></span>-->
            <!--</li>-->
            <!--<li class="title3">-->
            <!--<p>5.4.2学习风格分析</p>-->
            <!--<span>............................................................................................................<small-->
            <!--class="page-menu-seq" cid="542">04</small></span>-->
            <!--</li>-->
            <!--<li class="title1">-->
            <!--<p>第六部分 心理健康评估</p>-->
            <!--<span>.........................................................................................................<small-->
            <!--class="page-menu-seq" cid="61">04</small></span>-->
            <!--</li>-->
            <!--<li class="title2">-->
            <!--<p>6.1心理健康评估结果</p>-->
            <!--<span>.............................................................................................................<small-->
            <!--class="page-menu-seq" cid="61">04</small></span>-->
            <!--</li>-->

            <!--<li class="title2">-->
            <!--<p>6.2心理健康分析</p>-->
            <!--<span>....................................................................................................................<small-->
            <!--class="page-menu-seq" cid="62">04</small></span>-->
            <!--</li>-->

            <!--</ul>-->
            <!--</div>-->
            <!--</div>-->
            <!--<div class="font-blue pdf-footer">-->
            <!--<p class="pull-left">测评网址：www.ymtest.com</p>-->
            <!--<p class="pull-right">测评方法、工具及报告设计已申请产权保护</p>-->
            <!--</div>-->
            <!--</div>-->
            <!--&lt;!&ndash;page 4&ndash;&gt;-->

            <!--&lt;!&ndash;page 5&ndash;&gt;-->
            <!--<div class="pdf-page">-->
            <!--<div class="pdf-header">-->
            <!--<img class="pull-left" src="../../assets/pdf/header-logo.png" height="39px">-->
            <!--<p class="pull-right pdf-page-seq"></p>-->
            <!--<p class="pull-right font-blue">高中生升学规划测评报告</p>-->
            <!--</div>-->
            <!--<div class=" pdf-content">-->
            <!--<div class="font-blue pdf-page-title"><span>第一部分 人格特性评估</span></div>-->
            <!--<div class="pdf-border-paragraph m-b20">-->
            <!--<p>-->
            <!--该部分是对您人格特性的个性化描述。基于MBTI性格评估理论模型，用以衡量和描述人们在能量来源（外向或内向）、获取信息（实感或直觉）、作出决策（思考或情感）、行动方式（判断或知觉）四个维度的心理活动规律和人格类型，并且该理论模型清楚的解释了人格与职业之间的关系。-->
            <!--</p>-->
            <!--<p>-->
            <!--四个维度如同四把标尺，每个人的性格都会落在标尺的某个点上，这个点靠近哪个端点，就意味着个体就有哪方面的偏好。如在第一维度上，个体的性格靠近外向这一端，性格就偏外向，而且越接近端点，偏好越强。作为个体，一方面可以根据内心的感受识别自我偏好，发挥优势，另一方面，又要约束自我性格的弱点。性格没有好与坏，测试的目的是反映最真实的自己，而不是别人所期待的你。-->
            <!--</p>-->
            <!--</div>-->

            <!--<div class="pdf-blue-title">-->
            <!--<img src="../../assets/pdf/title-trn.png" alt="">1.1人格特性类别评估结果-->
            <!--</div>-->

            <!--<div class="pdf-border-paragraph m-b20" style="margin-bottom:40px">-->
            <!--<p>-->
            <!--下图为人格特性的评估结果，展示了测试者在四个人格维度上的倾向以及程度描述。根据该结果能够清楚知道自己的人格类型，并结合后面的详细解释准确了解自己。-->
            <!--</p>-->
            <!--</div>-->

            <!--<div class="page-5-biao rgtx-biao-1">-->
            <!--<h3><span>偏好程度</span></h3>-->
            <!--<div class="grade">-->
            <!--<p>强</p>-->
            <!--<p>明显</p>-->
            <!--<p>中等</p>-->
            <!--<p>轻微</p>-->
            <!--<p>中等</p>-->
            <!--<p>明显</p>-->
            <!--<p>强</p>-->
            <!--</div>-->
            <!--<div class="biao-content">-->
            <!--<ul>-->
            <!--<li v-if="xgtxFoData1>0"-->
            <!--:style="{marginLeft:-xgtxFoData1-1.5+'px',width:xgtxFoData1+'px'}"></li>-->
            <!--<li v-if="xgtxFoData1<0" :style="{width:-xgtxFoData1+'px'}"></li>-->
            <!--<li v-if="xgtxFoData1==0" :style="{width:4+'px',marginLeft:-2.5+'px'}"></li>-->
            <!--<li v-if="xgtxFoData2>0"-->
            <!--:style="{marginLeft:-xgtxFoData2-1.5+'px',width:xgtxFoData2+'px'}"></li>-->
            <!--<li v-if="xgtxFoData2<0" :style="{width:-xgtxFoData2+'px'}"></li>-->
            <!--<li v-if="xgtxFoData2==0" :style="{width:4+'px',marginLeft:-2.5+'px'}"></li>-->
            <!--<li v-if="xgtxFoData3>0"-->
            <!--:style="{marginLeft:-xgtxFoData3-1.5+'px',width:xgtxFoData3+'px'}"></li>-->
            <!--<li v-if="xgtxFoData3<0" :style="{width:-xgtxFoData3+'px'}"></li>-->
            <!--<li v-if="xgtxFoData3==0" :style="{width:4+'px',marginLeft:-2.5+'px'}"></li>-->
            <!--<li v-if="xgtxFoData4>0"-->
            <!--:style="{marginLeft:-xgtxFoData4-1.5+'px',width:xgtxFoData4+'px'}"></li>-->
            <!--<li v-if="xgtxFoData4<0" :style="{width:-xgtxFoData4+'px'}"></li>-->
            <!--<li v-if="xgtxFoData4==0" :style="{width:4+'px',marginLeft:-2.5+'px'}"></li>-->
            <!--</ul>-->
            <!--</div>-->
            <!--<div class="biao-font biao-left-font">-->
            <!--<ul>-->
            <!--<li :class="xgtxFoData1>0?'active':''">外向（E）</li>-->
            <!--<li :class="xgtxFoData2>0?'active':''">实感（S）</li>-->
            <!--<li :class="xgtxFoData3>0?'active':''">思考（T）</li>-->
            <!--<li :class="xgtxFoData4>0?'active':''">判断（J）</li>-->
            <!--</ul>-->
            <!--</div>-->

            <!--<div class="biao-font biao-right-font">-->
            <!--<ul>-->
            <!--<li :class="xgtxFoData1<0?'active':''">（I）内向</li>-->
            <!--<li :class="xgtxFoData2<0?'active':''">（N）直觉</li>-->
            <!--<li :class="xgtxFoData3<0?'active':''">（F）情感</li>-->
            <!--<li :class="xgtxFoData4<0?'active':''">（P）知觉</li>-->
            <!--</ul>-->
            <!--</div>-->

            <!--<div class="conclusion">-->
            <!--<p>你的人格类型为</p>-->
            <!--<p class="name name1">{{personality.name}}</p>-->
            <!--<p class="name name2">{{personalityDesc}}</p>-->
            <!--<p>人格特性评估结果示意图</p>-->
            <!--</div>-->

            <!--</div>-->

            <!--</div>-->
            <!--<div class="font-blue pdf-footer">-->
            <!--<p class="pull-left">测评网址：www.ymtest.com</p>-->
            <!--<p class="pull-right">测评方法、工具及报告设计已申请产权保护</p>-->
            <!--</div>-->
            <!--</div>-->
            <!--&lt;!&ndash;page 5&ndash;&gt;-->

            <!--&lt;!&ndash;page 6&ndash;&gt;-->
            <!--<div class="pdf-page">-->
            <!--<div class="pdf-header">-->
            <!--<img class="pull-left" src="../../assets/pdf/header-logo.png" height="39px">-->
            <!--<p class="pull-right pdf-page-seq"></p>-->
            <!--<p class="pull-right font-blue">高中生升学规划测评报告</p>-->
            <!--</div>-->
            <!--<div class=" pdf-content">-->
            <!--<div class="pdf-blue-title" id="12">-->
            <!--<img src="../../assets/pdf/title-trn.png" alt="">1.2人格特性类型分析-->
            <!--</div>-->

            <!--<div class="pdf-border-paragraph m-b20">-->
            <!--<p>-->
            <!--根据测试结果，您的类型为{{personality.desc}}，下面我们将从人格类型基本描述、气质类型、人格类型的优劣势、人格类型的功能运用以及成功秘诀方面，进行具体的解释。-->
            <!--</p>-->
            <!--</div>-->
            <!--<div class="pdf-blue-title pdf-yellow-title" id="121">-->
            <!--<img src="../../assets/pdf/title-trn.png" alt="">1.2.1人格类型基本描述-->
            <!--</div>-->

            <!--<div class="pdf-border-paragraph m-b20">-->
            <!--<div class="left-block" v-for="desc in personality.basic_desc">-->
            <!--<div class="pull-left"></div>-->
            <!--<div class="text-container">-->
            <!--{{desc.detail}}-->
            <!--</div>-->
            <!--</div>-->

            <!--</div>-->


            <!--</div>-->
            <!--<div class="font-blue pdf-footer">-->
            <!--<p class="pull-left">测评网址：www.ymtest.com</p>-->
            <!--<p class="pull-right">测评方法、工具及报告设计已申请产权保护</p>-->
            <!--</div>-->
            <!--</div>-->
            <!--&lt;!&ndash;page 6&ndash;&gt;-->

            <!--&lt;!&ndash;page 6补充&ndash;&gt;-->
            <!--<div class="pdf-page">-->
            <!--<div class="pdf-header">-->
            <!--<img class="pull-left" src="../../assets/pdf/header-logo.png" height="39px">-->
            <!--<p class="pull-right pdf-page-seq"></p>-->
            <!--<p class="pull-right font-blue">高中生升学规划测评报告</p>-->
            <!--</div>-->
            <!--<div class=" pdf-content">-->

            <!--<div class="pdf-blue-title pdf-yellow-title" id="122">-->
            <!--<img src="../../assets/pdf/title-trn.png" alt="">1.2.2气质类型-->
            <!--</div>-->

            <!--<div class="pdf-border-paragraph">-->
            <!--<div class="left-block" v-for="(desc,index) in personality.temper">-->
            <!--<div class="pull-left"></div>-->
            <!--<div class="text-container">-->
            <!--{{desc.detail}}-->
            <!--</div>-->
            <!--</div>-->
            <!--</div>-->

            <!--</div>-->
            <!--<div class="font-blue pdf-footer">-->
            <!--<p class="pull-left">测评网址：www.ymtest.com</p>-->
            <!--<p class="pull-right">测评方法、工具及报告设计已申请产权保护</p>-->
            <!--</div>-->
            <!--</div>-->
            <!--&lt;!&ndash;page 6补充&ndash;&gt;-->

            <!--&lt;!&ndash;page 7&ndash;&gt;-->
            <!--<div class="pdf-page">-->
            <!--<div class="pdf-header">-->
            <!--<img class="pull-left" src="../../assets/pdf/header-logo.png" height="39px">-->
            <!--<p class="pull-right pdf-page-seq"></p>-->
            <!--<p class="pull-right font-blue">高中生升学规划测评报告</p>-->
            <!--</div>-->
            <!--<div class=" pdf-content">-->
            <!--<div class="pdf-blue-title pdf-yellow-title" id="123">-->
            <!--<img src="../../assets/pdf/title-trn.png" alt="">1.2.3人格类型优势-->
            <!--</div>-->
            <!--<div class="pdf-border-paragraph m-b20">-->
            <!--<div class="left-block" v-for="desc in personality.advantage">-->
            <!--<div class="pull-left"></div>-->
            <!--<div class="text-container">-->
            <!--{{desc.detail}}-->
            <!--</div>-->
            <!--</div>-->

            <!--</div>-->
            <!--</div>-->
            <!--<div class="font-blue pdf-footer">-->
            <!--<p class="pull-left">测评网址：www.ymtest.com</p>-->
            <!--<p class="pull-right">测评方法、工具及报告设计已申请产权保护</p>-->
            <!--</div>-->

            <!--</div>-->
            <!--&lt;!&ndash;page 7&ndash;&gt;-->

            <!--&lt;!&ndash;page 8&ndash;&gt;-->
            <!--<div class="pdf-page">-->
            <!--<div class="pdf-header">-->
            <!--<img class="pull-left" src="../../assets/pdf/header-logo.png" height="39px">-->
            <!--<p class="pull-right pdf-page-seq"></p>-->
            <!--<p class="pull-right font-blue">高中生升学规划测评报告</p>-->
            <!--</div>-->
            <!--<div class=" pdf-content">-->
            <!--<div class="pdf-blue-title pdf-yellow-title" id="124">-->
            <!--<img src="../../assets/pdf/title-trn.png" alt="">1.2.4人格类型劣势-->
            <!--</div>-->
            <!--<div class="pdf-border-paragraph m-b20">-->
            <!--<div class="left-block" v-for="desc in personality.disadvantage">-->
            <!--<div class="pull-left"></div>-->
            <!--<div class="text-container">-->
            <!--{{desc.detail}}-->
            <!--</div>-->
            <!--</div>-->


            <!--</div>-->
            <!--<div class="pdf-blue-title pdf-yellow-title" id="125">-->
            <!--<img src="../../assets/pdf/title-trn.png" alt="">1.2.5人格类型的功能运用-->
            <!--</div>-->
            <!--<div class="pdf-border-paragraph m-b20">-->
            <!--<div class="left-block" v-for="desc in personality.funcs">-->
            <!--<div class="pull-left"></div>-->
            <!--<div class="text-container">-->
            <!--{{desc.detail}}-->
            <!--</div>-->
            <!--</div>-->


            <!--</div>-->
            <!--<div class="pdf-blue-title pdf-yellow-title" id="126">-->
            <!--<img src="../../assets/pdf/title-trn.png" alt="">1.2.6成功秘诀-->
            <!--</div>-->
            <!--</div>-->
            <!--<div class="font-blue pdf-footer">-->
            <!--<p class="pull-left">测评网址：www.ymtest.com</p>-->
            <!--<p class="pull-right">测评方法、工具及报告设计已申请产权保护</p>-->
            <!--</div>-->
            <!--</div>-->
            <!--&lt;!&ndash;page 8&ndash;&gt;-->

            <!--&lt;!&ndash;page 9&ndash;&gt;-->
            <!--<div class="pdf-page">-->
            <!--<div class="pdf-header">-->
            <!--<img class="pull-left" src="../../assets/pdf/header-logo.png" height="39px">-->
            <!--<p class="pull-right pdf-page-seq"></p>-->
            <!--<p class="pull-right font-blue">高中生升学规划测评报告</p>-->
            <!--</div>-->
            <!--<div class=" pdf-content">-->
            <!--<div class="pdf-border-paragraph m-b10">-->
            <!--<div class="left-block" v-for="desc in personality.success">-->
            <!--<div class="pull-left"></div>-->
            <!--<div class="text-container">-->
            <!--{{desc.detail}}-->
            <!--</div>-->
            <!--</div>-->

            <!--</div>-->
            <!--<div class="pdf-blue-title" id="131">-->
            <!--<img src="../../assets/pdf/title-trn.png" alt="">1.3 人格特性深度评估与分析-->
            <!--</div>-->
            <!--<div class="pdf-border-paragraph pbp-height-medium m-b10">-->
            <!--<p>-->
            <!--以下是对你的人格类型的各个维度进行更为深刻的解释，有助于你更好的认识自己。你的个性是复杂而动态的，下面通过显示四个维度的五个不同的子维度来分析你的偏好结果。-->
            <!--</p>-->
            <!--<p>-->
            <!--（1）每个子维度有两个相反的方面。你更倾向于喜欢运用与您的整体喜好相同的一方（合倾向）。-->

            <!--</p>-->
            <!--<p>-->
            <!--（2）每个子维度，您也可能会偏好与您的整体偏好相反的一方（背离倾向），或者不显示任何一方的明确偏好（中间结果）。-->
            <!--</p>-->
            <!--<p>-->
            <!--（3）了解你在这20个方面的偏好可以帮助你更好地理解、体验和表达你所属类型的独特方式。-->
            <!--</p>-->
            <!--</div>-->
            <!--<div class="pdf-border-paragraph pdf-paragraph pbp-height-medium m-b10">-->
            <!--下面对您的四个维度的评估结果进行分析，每部分都会给出评估的结果示意图。示意图中会呈现该维度下的各个子维度及程度结果。-->
            <!--</div>-->

            <!--<div class="pdf-blue-title pdf-yellow-title" id="">-->
            <!--<img src="../../assets/pdf/title-trn.png" alt="">1.3.1 子维度一（外向与内向）-->
            <!--</div>-->
            <!--<div class="page-5-biao page-9-biao xgtx-biao2">-->
            <!--<div class="title">-->
            <!--<div class="title-item left">-->
            <!--<h3 :class="personalityName[0]=='E' ? 'active' : ''">外向（E）</h3>-->
            <!--<p>精力集中于人和物，<br>关注外部世界</p>-->
            <!--</div>-->
            <!--<div class="title-item right">-->
            <!--<h3 :class="personalityName[0]=='I' ? 'active' : ''">（I）内向</h3>-->
            <!--<p>精力集中于概念和想法，<br>关注内心世界</p>-->
            <!--</div>-->
            <!--</div>-->
            <!--<div class="grade">-->
            <!--<p v-if="personalityName[0]=='E'">合倾向</p>-->
            <!--<p v-if="personalityName[0]=='I'">背离倾向</p>-->
            <!--<p>中间区域</p>-->
            <!--<p v-if="personalityName[0]=='E'">背离倾向</p>-->
            <!--<p v-if="personalityName[0]=='I'">合倾向</p>-->
            <!--</div>-->
            <!--<div class="biao-content">-->
            <!--<ul>-->
            <!--<li v-if="xgtxFtData1>0"-->
            <!--:style="{marginLeft:-xgtxFtData1-1.5+'px',width:xgtxFtData1+'px'}"></li>-->
            <!--<li v-if="xgtxFtData1<0" :style="{width:-xgtxFtData1+'px'}"></li>-->
            <!--<li v-if="xgtxFtData1==0" :style="{width:4+'px',marginLeft:-2.5+'px'}"></li>-->
            <!--<li v-if="xgtxFtData2>0"-->
            <!--:style="{marginLeft:-xgtxFtData2-1.5+'px',width:xgtxFtData2+'px'}"></li>-->
            <!--<li v-if="xgtxFtData2<0" :style="{width:-xgtxFtData2+'px'}"></li>-->
            <!--<li v-if="xgtxFtData2==0" :style="{width:4+'px',marginLeft:-2.5+'px'}"></li>-->
            <!--<li v-if="xgtxFtData3>0"-->
            <!--:style="{marginLeft:-xgtxFtData3-1.5+'px',width:xgtxFtData3+'px'}"></li>-->
            <!--<li v-if="xgtxFtData3<0" :style="{width:-xgtxFtData3+'px'}"></li>-->
            <!--<li v-if="xgtxFtData3==0" :style="{width:4+'px',marginLeft:-2.5+'px'}"></li>-->
            <!--<li v-if="xgtxFtData4>0"-->
            <!--:style="{marginLeft:-xgtxFtData4-1.5+'px',width:xgtxFtData4+'px'}"></li>-->
            <!--<li v-if="xgtxFtData4<0" :style="{width:-xgtxFtData4+'px'}"></li>-->
            <!--<li v-if="xgtxFtData4==0" :style="{width:4+'px',marginLeft:-2.5+'px'}"></li>-->
            <!--<li v-if="xgtxFtData5>0"-->
            <!--:style="{marginLeft:-xgtxFtData5-1.5+'px',width:xgtxFtData5+'px'}"></li>-->
            <!--<li v-if="xgtxFtData5<0" :style="{width:-xgtxFtData5+'px'}"></li>-->
            <!--<li v-if="xgtxFtData5==0" :style="{width:4+'px',marginLeft:-2.5+'px'}"></li>-->
            <!--</ul>-->
            <!--</div>-->
            <!--<div class="biao-font biao-left-font">-->
            <!--<ul>-->
            <!--<li :class="xgtxFtData1>0?'active':''">主动</li>-->
            <!--<li :class="xgtxFtData2>0?'active':''">健谈</li>-->
            <!--<li :class="xgtxFtData3>0?'active':''">合群</li>-->
            <!--<li :class="xgtxFtData4>0?'active':''">活跃</li>-->
            <!--<li :class="xgtxFtData5>0?'active':''">热情</li>-->
            <!--</ul>-->
            <!--</div>-->

            <!--<div class="biao-font biao-right-font">-->
            <!--<ul>-->
            <!--<li :class="xgtxFtData1<0?'active':''">被动</li>-->
            <!--<li :class="xgtxFtData2<0?'active':''">内敛</li>-->
            <!--<li :class="xgtxFtData3<0?'active':''">独处</li>-->
            <!--<li :class="xgtxFtData4<0?'active':''">自省</li>-->
            <!--<li :class="xgtxFtData5<0?'active':''">沉静</li>-->
            <!--</ul>-->
            <!--</div>-->
            <!--</div>-->
            <!--</div>-->
            <!--<div class="font-blue pdf-footer">-->
            <!--<p class="pull-left">测评网址：www.ymtest.com</p>-->
            <!--<p class="pull-right">测评方法、工具及报告设计已申请产权保护</p>-->
            <!--</div>-->
            <!--</div>-->
            <!--&lt;!&ndash;page 9&ndash;&gt;-->

            <!--&lt;!&ndash;page 10&ndash;&gt;-->
            <!--<div class="pdf-page">-->
            <!--<div class="pdf-header">-->
            <!--<img class="pull-left" src="../../assets/pdf/header-logo.png" height="39px">-->
            <!--<p class="pull-right pdf-page-seq"></p>-->
            <!--<p class="pull-right font-blue">高中生升学规划测评报告</p>-->
            <!--</div>-->
            <!--<div class=" pdf-content">-->
            <!--<div class="pdf-border-paragraph m-b15" v-for="(char,index) in wx.chars" v-if="index<4">-->
            <!--<div class="blue-title">-->
            <!--{{char.name}}-->
            <!--</div>-->
            <!--<div class="left-block" v-for="desc in char.comments">-->
            <!--<div class="pull-left"></div>-->
            <!--<div class="text-container">-->
            <!--{{desc.detail}}-->
            <!--</div>-->
            <!--</div>-->
            <!--</div>-->
            <!--</div>-->
            <!--<div class="font-blue pdf-footer">-->
            <!--<p class="pull-left">测评网址：www.ymtest.com</p>-->
            <!--<p class="pull-right">测评方法、工具及报告设计已申请产权保护</p>-->
            <!--</div>-->
            <!--</div>-->
            <!--&lt;!&ndash;page 10&ndash;&gt;-->

            <!--&lt;!&ndash;page 11&ndash;&gt;-->
            <!--<div class="pdf-page">-->
            <!--<div class="pdf-header">-->
            <!--<img class="pull-left" src="../../assets/pdf/header-logo.png" height="39px">-->
            <!--<p class="pull-right pdf-page-seq"></p>-->
            <!--<p class="pull-right font-blue">高中生升学规划测评报告</p>-->
            <!--</div>-->
            <!--<div class=" pdf-content" id="132">-->
            <!--<div class="pdf-border-paragraph m-b15" v-for="(char,index) in wx.chars" v-if="index==4">-->
            <!--<div class="blue-title">-->
            <!--{{char.name}}-->
            <!--</div>-->
            <!--<div class="left-block" v-for="desc in char.comments">-->
            <!--<div class="pull-left"></div>-->
            <!--<div class="text-container">-->
            <!--{{desc.detail}}-->
            <!--</div>-->
            <!--</div>-->
            <!--</div>-->
            <!--<div class="pdf-blue-title pdf-yellow-title">-->
            <!--<img src="../../assets/pdf/title-trn.png" alt="">1.3.2子维度二（直觉与实感 ）-->
            <!--</div>-->
            <!--<div class="page-5-biao page-9-biao xgtx-biao2" style="margin-bottom: 20px">-->
            <!--<div class="title">-->
            <!--<div class="title-item left">-->
            <!--<h3 :class="personalityName[1]=='S' ? 'active' : ''">实感（S）</h3>-->
            <!--<p>专注于五感可以感知，<br>的东西，相信事实</p>-->
            <!--</div>-->

            <!--<div class="title-item right">-->
            <!--<h3 :class="personalityName[1]=='N' ? 'active' : ''">（N）直觉</h3>-->
            <!--<p>关注并相信人际关系，理论<br>及未来的可能性</p>-->
            <!--</div>-->
            <!--</div>-->
            <!--<div class="grade">-->
            <!--<p v-if="personalityName[1]=='S'">合倾向</p>-->
            <!--<p v-if="personalityName[1]=='N'">背离倾向</p>-->
            <!--<p>中间区域</p>-->
            <!--<p v-if="personalityName[1]=='S'">背离倾向</p>-->
            <!--<p v-if="personalityName[1]=='N'">合倾向</p>-->
            <!--</div>-->
            <!--<div class="biao-content">-->
            <!--<ul>-->
            <!--<li v-if="xgtxFthData1>0"-->
            <!--:style="{marginLeft:-xgtxFthData1-1.5+'px',width:xgtxFthData1+'px'}"></li>-->
            <!--<li v-if="xgtxFthData1<0" :style="{width:-xgtxFthData1+'px'}"></li>-->
            <!--<li v-if="xgtxFthData1==0" :style="{width:4+'px',marginLeft:-2.5+'px'}"></li>-->
            <!--<li v-if="xgtxFthData2>0"-->
            <!--:style="{marginLeft:-xgtxFthData2-1.5+'px',width:xgtxFthData2+'px'}"></li>-->
            <!--<li v-if="xgtxFthData2<0" :style="{width:-xgtxFthData2+'px'}"></li>-->
            <!--<li v-if="xgtxFthData2==0" :style="{width:4+'px',marginLeft:-2.5+'px'}"></li>-->
            <!--<li v-if="xgtxFthData3>0"-->
            <!--:style="{marginLeft:-xgtxFthData3-1.5+'px',width:xgtxFthData3+'px'}"></li>-->
            <!--<li v-if="xgtxFthData3<0" :style="{width:-xgtxFthData3+'px'}"></li>-->
            <!--<li v-if="xgtxFthData3==0" :style="{width:4+'px',marginLeft:-2.5+'px'}"></li>-->
            <!--<li v-if="xgtxFthData4>0"-->
            <!--:style="{marginLeft:-xgtxFthData4-1.5+'px',width:xgtxFthData4+'px'}"></li>-->
            <!--<li v-if="xgtxFthData4<0" :style="{width:-xgtxFthData4+'px'}"></li>-->
            <!--<li v-if="xgtxFthData4==0" :style="{width:4+'px',marginLeft:-2.5+'px'}"></li>-->
            <!--<li v-if="xgtxFthData5>0"-->
            <!--:style="{marginLeft:-xgtxFthData5-1.5+'px',width:xgtxFthData5+'px'}"></li>-->
            <!--<li v-if="xgtxFthData5<0" :style="{width:-xgtxFthData5+'px'}"></li>-->
            <!--<li v-if="xgtxFthData5==0" :style="{width:4+'px',marginLeft:-2.5+'px'}"></li>-->
            <!--</ul>-->
            <!--</div>-->
            <!--<div class="biao-font biao-left-font">-->
            <!--<ul>-->
            <!--<li :class="xgtxFthData1>0?'active':''">具体</li>-->
            <!--<li :class="xgtxFthData2>0?'active':''">事实</li>-->
            <!--<li :class="xgtxFthData3>0?'active':''">实际</li>-->
            <!--<li :class="xgtxFthData4>0?'active':''">实践</li>-->
            <!--<li :class="xgtxFthData5>0?'active':''">传统</li>-->
            <!--</ul>-->
            <!--</div>-->

            <!--<div class="biao-font biao-right-font">-->
            <!--<ul>-->
            <!--<li :class="xgtxFthData1<0?'active':''">抽象</li>-->
            <!--<li :class="xgtxFthData2<0?'active':''">想象</li>-->
            <!--<li :class="xgtxFthData3<0?'active':''">理念</li>-->
            <!--<li :class="xgtxFthData4<0?'active':''">理论</li>-->
            <!--<li :class="xgtxFthData5<0?'active':''">创新</li>-->
            <!--</ul>-->
            <!--</div>-->
            <!--</div>-->
            <!--<div class="pdf-border-paragraph m-b15" v-for="(char,index) in sg.chars" v-if="index==0">-->
            <!--<div class="blue-title">-->
            <!--{{char.name}}-->
            <!--</div>-->
            <!--<div class="left-block" v-for="desc in char.comments">-->
            <!--<div class="pull-left"></div>-->
            <!--<div class="text-container">-->
            <!--{{desc.detail}}-->
            <!--</div>-->
            <!--</div>-->
            <!--</div>-->
            <!--</div>-->
            <!--<div class="font-blue pdf-footer">-->
            <!--<p class="pull-left">测评网址：www.ymtest.com</p>-->
            <!--<p class="pull-right">测评方法、工具及报告设计已申请产权保护</p>-->
            <!--</div>-->
            <!--</div>-->
            <!--&lt;!&ndash;page 11&ndash;&gt;-->

            <!--&lt;!&ndash;page 12&ndash;&gt;-->
            <!--<div class="pdf-page">-->
            <!--<div class="pdf-header">-->
            <!--<img class="pull-left" src="../../assets/pdf/header-logo.png" height="39px">-->
            <!--<p class="pull-right pdf-page-seq"></p>-->
            <!--<p class="pull-right font-blue">高中生升学规划测评报告</p>-->
            <!--</div>-->
            <!--<div class=" pdf-content">-->
            <!--<div class="pdf-border-paragraph m-b15" v-for="(char,index) in sg.chars" v-if="index>0">-->
            <!--<div class="blue-title">-->
            <!--{{char.name}}-->
            <!--</div>-->
            <!--<div class="left-block" v-for="desc in char.comments">-->
            <!--<div class="pull-left"></div>-->
            <!--<div class="text-container">-->
            <!--{{desc.detail}}-->
            <!--</div>-->
            <!--</div>-->
            <!--</div>-->
            <!--</div>-->
            <!--<div class="font-blue pdf-footer">-->
            <!--<p class="pull-left">测评网址：www.ymtest.com</p>-->
            <!--<p class="pull-right">测评方法、工具及报告设计已申请产权保护</p>-->
            <!--</div>-->
            <!--</div>-->
            <!--&lt;!&ndash;page 12&ndash;&gt;-->

            <!--&lt;!&ndash;page 13&ndash;&gt;-->
            <!--<div class="pdf-page">-->
            <!--<div class="pdf-header">-->
            <!--<img class="pull-left" src="../../assets/pdf/header-logo.png" height="39px">-->
            <!--<p class="pull-right pdf-page-seq"></p>-->
            <!--<p class="pull-right font-blue">高中生升学规划测评报告</p>-->
            <!--</div>-->
            <!--<div class=" pdf-content">-->
            <!--<div class="pdf-blue-title pdf-yellow-title" id="133">-->
            <!--<img src="../../assets/pdf/title-trn.png" alt="">1.3.3子维度三（思考与情感）-->
            <!--</div>-->
            <!--<div class="page-5-biao page-9-biao xgtx-biao2" style="margin-bottom: 30px">-->
            <!--<div class="title">-->
            <!--<div class="title-item left">-->
            <!--<h3 :class="personalityName[2]=='T' ? 'active' : ''">思考（T）</h3>-->
            <!--<p>喜欢用合乎逻辑的分<br>析做出选择和决定</p>-->
            <!--</div>-->

            <!--<div class="title-item right">-->
            <!--<h3 :class="personalityName[2]=='F' ? 'active' : ''">（F）情感</h3>-->
            <!--<p>喜欢以人为中心的价值观，<br>创建和谐</p>-->
            <!--</div>-->
            <!--</div>-->
            <!--<div class="grade">-->
            <!--<p v-if="personalityName[2]=='T'">合倾向</p>-->
            <!--<p v-if="personalityName[2]=='F'">背离倾向</p>-->
            <!--<p>中间区域</p>-->
            <!--<p v-if="personalityName[2]=='T'">背离倾向</p>-->
            <!--<p v-if="personalityName[2]=='F'">合倾向</p>-->
            <!--</div>-->
            <!--<div class="biao-content">-->
            <!--<ul>-->
            <!--<li v-if="xgtxFfData1>0"-->
            <!--:style="{marginLeft:-xgtxFfData1-1.5+'px',width:xgtxFfData1+'px'}"></li>-->
            <!--<li v-if="xgtxFfData1<0" :style="{width:-xgtxFfData1+'px'}"></li>-->
            <!--<li v-if="xgtxFfData1==0" :style="{width:4+'px',marginLeft:-2.5+'px'}"></li>-->
            <!--<li v-if="xgtxFfData2>0"-->
            <!--:style="{marginLeft:-xgtxFfData2-1.5+'px',width:xgtxFfData2+'px'}"></li>-->
            <!--<li v-if="xgtxFfData2<0" :style="{width:-xgtxFfData2+'px'}"></li>-->
            <!--<li v-if="xgtxFfData2==0" :style="{width:4+'px',marginLeft:-2.5+'px'}"></li>-->
            <!--<li v-if="xgtxFfData3>0"-->
            <!--:style="{marginLeft:-xgtxFfData3-1.5+'px',width:xgtxFfData3+'px'}"></li>-->
            <!--<li v-if="xgtxFfData3<0" :style="{width:-xgtxFfData3+'px'}"></li>-->
            <!--<li v-if="xgtxFfData3==0" :style="{width:4+'px',marginLeft:-2.5+'px'}"></li>-->
            <!--<li v-if="xgtxFfData4>0"-->
            <!--:style="{marginLeft:-xgtxFfData4-1.5+'px',width:xgtxFfData4+'px'}"></li>-->
            <!--<li v-if="xgtxFfData4<0" :style="{width:-xgtxFfData4+'px'}"></li>-->
            <!--<li v-if="xgtxFfData4==0" :style="{width:4+'px',marginLeft:-2.5+'px'}"></li>-->
            <!--<li v-if="xgtxFfData5>0"-->
            <!--:style="{marginLeft:-xgtxFfData5-1.5+'px',width:xgtxFfData5+'px'}"></li>-->
            <!--<li v-if="xgtxFfData5<0" :style="{width:-xgtxFfData5+'px'}"></li>-->
            <!--<li v-if="xgtxFfData5==0" :style="{width:4+'px',marginLeft:-2.5+'px'}"></li>-->
            <!--</ul>-->
            <!--</div>-->
            <!--<div class="biao-font biao-left-font">-->
            <!--<ul>-->
            <!--<li :class="xgtxFfData1>0?'active':''">理智</li>-->
            <!--<li :class="xgtxFfData2>0?'active':''">公正</li>-->
            <!--<li :class="xgtxFfData3>0?'active':''">质疑</li>-->
            <!--<li :class="xgtxFfData4>0?'active':''">批评</li>-->
            <!--<li :class="xgtxFfData5>0?'active':''">坚定</li>-->
            <!--</ul>-->
            <!--</div>-->

            <!--<div class="biao-font biao-right-font">-->
            <!--<ul>-->
            <!--<li :class="xgtxFfData1<0?'active':''">同情</li>-->
            <!--<li :class="xgtxFfData2<0?'active':''">宽容</li>-->
            <!--<li :class="xgtxFfData3<0?'active':''">和谐</li>-->
            <!--<li :class="xgtxFfData4<0?'active':''">包容</li>-->
            <!--<li :class="xgtxFfData5<0?'active':''">和蔼</li>-->
            <!--</ul>-->
            <!--</div>-->
            <!--</div>-->
            <!--<div class="pdf-border-paragraph m-b15" v-for="(char,index) in sk.chars" v-if="index<2">-->
            <!--<div class="blue-title">-->
            <!--{{char.name}}-->
            <!--</div>-->
            <!--<div class="left-block" v-for="desc in char.comments">-->
            <!--<div class="pull-left"></div>-->
            <!--<div class="text-container">-->
            <!--{{desc.detail}}-->
            <!--</div>-->
            <!--</div>-->
            <!--</div>-->
            <!--</div>-->
            <!--<div class="font-blue pdf-footer">-->
            <!--<p class="pull-left">测评网址：www.ymtest.com</p>-->
            <!--<p class="pull-right">测评方法、工具及报告设计已申请产权保护</p>-->
            <!--</div>-->
            <!--</div>-->
            <!--&lt;!&ndash;page 13&ndash;&gt;-->

            <!--&lt;!&ndash;page 14&ndash;&gt;-->
            <!--<div class="pdf-page">-->
            <!--<div class="pdf-header">-->
            <!--<img class="pull-left" src="../../assets/pdf/header-logo.png" height="39px">-->
            <!--<p class="pull-right pdf-page-seq"></p>-->
            <!--<p class="pull-right font-blue">高中生升学规划测评报告</p>-->
            <!--</div>-->
            <!--<div class=" pdf-content">-->
            <!--<div class="pdf-border-paragraph m-b15" v-for="(char,index) in sk.chars" v-if="index>1">-->
            <!--<div class="blue-title">-->
            <!--{{char.name}}-->
            <!--</div>-->
            <!--<div class="left-block" v-for="desc in char.comments">-->
            <!--<div class="pull-left"></div>-->
            <!--<div class="text-container">-->
            <!--{{desc.detail}}-->
            <!--</div>-->
            <!--</div>-->
            <!--</div>-->
            <!--</div>-->
            <!--<div class="font-blue pdf-footer">-->
            <!--<p class="pull-left">测评网址：www.ymtest.com</p>-->
            <!--<p class="pull-right">测评方法、工具及报告设计已申请产权保护</p>-->
            <!--</div>-->
            <!--</div>-->
            <!--&lt;!&ndash;page 14&ndash;&gt;-->

            <!--&lt;!&ndash;page 15&ndash;&gt;-->
            <!--<div class="pdf-page">-->
            <!--<div class="pdf-header">-->
            <!--<img class="pull-left" src="../../assets/pdf/header-logo.png" height="39px">-->
            <!--<p class="pull-right pdf-page-seq"></p>-->
            <!--<p class="pull-right font-blue">高中生升学规划测评报告</p>-->
            <!--</div>-->
            <!--<div class=" pdf-content">-->
            <!--<div class="pdf-blue-title pdf-yellow-title" id="134">-->
            <!--<img src="../../assets/pdf/title-trn.png" alt="">1.3.4子维度四（判断与知觉）-->
            <!--</div>-->
            <!--<div class="page-5-biao page-9-biao xgtx-biao2" style="margin-bottom: 30px">-->
            <!--<div class="title">-->
            <!--<div class="title-item left">-->
            <!--<h3 :class="personalityName[3]=='J' ? 'active' : ''">判断（J）</h3>-->
            <!--<p>有组织，有秩序的快速<br>做出选择与决定</p>-->
            <!--</div>-->

            <!--<div class="title-item right">-->
            <!--<h3 :class="personalityName[3]=='P' ? 'active' : ''">（P）知觉</h3>-->
            <!--<p>反应灵活，适应能力强，<br>思想开放</p>-->
            <!--</div>-->
            <!--</div>-->
            <!--<div class="grade">-->
            <!--<p v-if="personalityName[3]=='J'">合倾向</p>-->
            <!--<p v-if="personalityName[3]=='P'">背离倾向</p>-->
            <!--<p>中间区域</p>-->
            <!--<p v-if="personalityName[3]=='J'">背离倾向</p>-->
            <!--<p v-if="personalityName[3]=='P'">合倾向</p>-->
            <!--</div>-->
            <!--<div class="biao-content">-->
            <!--<ul>-->
            <!--<li v-if="xgtxFfiData1>0"-->
            <!--:style="{marginLeft:-xgtxFfiData1-1.5+'px',width:xgtxFfiData1+'px'}"></li>-->
            <!--<li v-if="xgtxFfiData1<0" :style="{width:-xgtxFfiData1+'px'}"></li>-->
            <!--<li v-if="xgtxFfiData1==0" :style="{width:4+'px',marginLeft:-2.5+'px'}"></li>-->
            <!--<li v-if="xgtxFfiData2>0"-->
            <!--:style="{marginLeft:-xgtxFfiData2-1.5+'px',width:xgtxFfiData2+'px'}"></li>-->
            <!--<li v-if="xgtxFfiData2<0" :style="{width:-xgtxFfiData2+'px'}"></li>-->
            <!--<li v-if="xgtxFfiData2==0" :style="{width:4+'px',marginLeft:-2.5+'px'}"></li>-->
            <!--<li v-if="xgtxFfiData3>0"-->
            <!--:style="{marginLeft:-xgtxFfiData3-1.5+'px',width:xgtxFfiData3+'px'}"></li>-->
            <!--<li v-if="xgtxFfiData3<0" :style="{width:-xgtxFfiData3+'px'}"></li>-->
            <!--<li v-if="xgtxFfiData3==0" :style="{width:4+'px',marginLeft:-2.5+'px'}"></li>-->
            <!--<li v-if="xgtxFfiData4>0"-->
            <!--:style="{marginLeft:-xgtxFfiData4-1.5+'px',width:xgtxFfiData4+'px'}"></li>-->
            <!--<li v-if="xgtxFfiData4<0" :style="{width:-xgtxFfiData4+'px'}"></li>-->
            <!--<li v-if="xgtxFfiData4==0" :style="{width:4+'px',marginLeft:-2.5+'px'}"></li>-->
            <!--<li v-if="xgtxFfiData5>0"-->
            <!--:style="{marginLeft:-xgtxFfiData5-1.5+'px',width:xgtxFfiData5+'px'}"></li>-->
            <!--<li v-if="xgtxFfiData5<0" :style="{width:-xgtxFfiData5+'px'}"></li>-->
            <!--<li v-if="xgtxFfiData5==0" :style="{width:4+'px',marginLeft:-2.5+'px'}"></li>-->
            <!--</ul>-->
            <!--</div>-->
            <!--<div class="biao-font biao-left-font">-->
            <!--<ul>-->
            <!--<li :class="xgtxFfiData1>0?'active':''">有条理</li>-->
            <!--<li :class="xgtxFfiData2>0?'active':''">有计划</li>-->
            <!--<li :class="xgtxFfiData3>0?'active':''">预先准备</li>-->
            <!--<li :class="xgtxFfiData4>0?'active':''">保守</li>-->
            <!--<li :class="xgtxFfiData5>0?'active':''">缜密</li>-->
            <!--</ul>-->
            <!--</div>-->

            <!--<div class="biao-font biao-right-font">-->
            <!--<ul>-->
            <!--<li :class="xgtxFfiData1<0?'active':''">随性</li>-->
            <!--<li :class="xgtxFfiData2<0?'active':''">变通</li>-->
            <!--<li :class="xgtxFfiData3<0?'active':''">被迫行动</li>-->
            <!--<li :class="xgtxFfiData4<0?'active':''">灵活</li>-->
            <!--<li :class="xgtxFfiData5<0?'active':''">突兀</li>-->
            <!--</ul>-->
            <!--</div>-->
            <!--</div>-->

            <!--<div class="pdf-border-paragraph m-b15" v-for="(char,index) in pd.chars" v-if="index<2">-->
            <!--<div class="blue-title">-->
            <!--{{char.name}}-->
            <!--</div>-->
            <!--<div class="left-block" v-for="desc in char.comments">-->
            <!--<div class="pull-left"></div>-->
            <!--<div class="text-container">-->
            <!--{{desc.detail}}-->
            <!--</div>-->
            <!--</div>-->
            <!--</div>-->

            <!--</div>-->
            <!--<div class="font-blue pdf-footer">-->
            <!--<p class="pull-left">测评网址：www.ymtest.com</p>-->
            <!--<p class="pull-right">测评方法、工具及报告设计已申请产权保护</p>-->
            <!--</div>-->
            <!--</div>-->
            <!--&lt;!&ndash;page 15&ndash;&gt;-->

            <!--&lt;!&ndash;page 16&ndash;&gt;-->
            <!--<div class="pdf-page">-->
            <!--<div class="pdf-header">-->
            <!--<img class="pull-left" src="../../assets/pdf/header-logo.png" height="39px">-->
            <!--<p class="pull-right pdf-page-seq"></p>-->
            <!--<p class="pull-right font-blue">高中生升学规划测评报告</p>-->
            <!--</div>-->
            <!--<div class="pdf-content">-->
            <!--<div class="pdf-border-paragraph m-b15" v-for="(char,index) in pd.chars" v-if="index>1">-->
            <!--<div class="blue-title">-->
            <!--{{char.name}}-->
            <!--</div>-->
            <!--<div class="left-block" v-for="desc in char.comments">-->
            <!--<div class="pull-left"></div>-->
            <!--<div class="text-container">-->
            <!--{{desc.detail}}-->
            <!--</div>-->
            <!--</div>-->
            <!--</div>-->
            <!--</div>-->
            <!--<div class="font-blue pdf-footer">-->
            <!--<p class="pull-left">测评网址：www.ymtest.com</p>-->
            <!--<p class="pull-right">测评方法、工具及报告设计已申请产权保护</p>-->
            <!--</div>-->
            <!--</div>-->
            <!--&lt;!&ndash;page 16&ndash;&gt;-->

            <!--&lt;!&ndash;page 17&ndash;&gt;-->
            <!--<div class="pdf-page">-->
            <!--<div class="pdf-header">-->
            <!--<img class="pull-left" src="../../assets/pdf/header-logo.png" height="39px">-->
            <!--<p class="pull-right pdf-page-seq"></p>-->
            <!--<p class="pull-right font-blue">高中生升学规划测评报告</p>-->
            <!--</div>-->
            <!--<div class=" pdf-content">-->
            <!--<div class="pdf-blue-title pdf-yellow-title" id="135">-->
            <!--<img src="../../assets/pdf/title-trn.png" alt="">1.3.5与{{personality.name}}人群子维度常模比较-->
            <!--</div>-->
            <!--<div class="pull-left font-medium pdf-paragraph m-b20">-->
            <!--下图显示了全国样本{{personality.name}}的平均分数范围，图中的蓝色条形图表示平均值-1到+1的标准偏差，每个子维度的垂直线显示{{personality.name}}人群的平均分数，加粗的数字表示你的得分。-->
            <!--</div>-->
            <!--<div class="page-5-biao page-17-biao" style="width:100%; margin-bottom: 30px">-->
            <!--<img src="../../assets/pdf/page-17-img.png" alt="">-->
            <!--<div class="line-list">-->

            <!--<div class="w100 d-relative line-wrapper">-->
            <!--<div class="line"-->
            <!--:style="{width:(xgtxSData1.rnorm-xgtxSData1.lnorm)*10+'%',marginLeft:(xgtxSData1.lnorm+5)*10+'%'}">-->
            <!--<span></span>-->
            <!--</div>-->
            <!--<strong :style="{marginLeft:(xgtxSData1.score+5)*10-1+'%'}">{{xgtxSData1.score |-->
            <!--abs}}</strong>-->
            <!--</div>-->

            <!--<div class="w100 d-relative line-wrapper">-->
            <!--<div class="line"-->
            <!--:style="{width:(xgtxSData2.rnorm-xgtxSData2.lnorm)*10+'%',marginLeft:(xgtxSData2.lnorm+5)*10+'%'}">-->
            <!--<span></span>-->
            <!--</div>-->
            <!--<strong :style="{marginLeft:(xgtxSData2.score+5)*10-1+'%'}">{{xgtxSData2.score |-->
            <!--abs}}</strong>-->
            <!--</div>-->

            <!--<div class="w100 d-relative line-wrapper">-->
            <!--<div class="line"-->
            <!--:style="{width:(xgtxSData3.rnorm-xgtxSData3.lnorm)*10+'%',marginLeft:(xgtxSData3.lnorm+5)*10+'%'}">-->
            <!--<span></span>-->
            <!--</div>-->
            <!--<strong :style="{marginLeft:(xgtxSData3.score+5)*10-1+'%'}">{{xgtxSData3.score |-->
            <!--abs}}</strong>-->
            <!--</div>-->

            <!--<div class="w100 d-relative line-wrapper">-->
            <!--<div class="line"-->
            <!--:style="{width:(xgtxSData4.rnorm-xgtxSData4.lnorm)*10+'%',marginLeft:(xgtxSData4.lnorm+5)*10+'%'}">-->
            <!--<span></span>-->
            <!--</div>-->
            <!--<strong :style="{marginLeft:(xgtxSData4.score+5)*10-1+'%'}">{{xgtxSData4.score |-->
            <!--abs}}</strong>-->
            <!--</div>-->

            <!--<div class="w100 d-relative line-wrapper">-->
            <!--<div class="line"-->
            <!--:style="{width:(xgtxSData5.rnorm-xgtxSData5.lnorm)*10+'%',marginLeft:(xgtxSData5.lnorm+5)*10+'%'}">-->
            <!--<span></span>-->
            <!--</div>-->
            <!--<strong :style="{marginLeft:(xgtxSData5.score+5)*10-1+'%'}">{{xgtxSData5.score | abs-->
            <!--}}</strong>-->
            <!--</div>-->

            <!--<div class="w100 d-relative line-wrapper">-->
            <!--<div class="line"-->
            <!--:style="{width:(xgtxSData6.rnorm-xgtxSData6.lnorm)*10+'%',marginLeft:(xgtxSData6.lnorm+5)*10+'%'}">-->
            <!--<span></span>-->
            <!--</div>-->
            <!--<strong :style="{marginLeft:(xgtxSData6.score+5)*10-1+'%'}">{{xgtxSData6.score |-->
            <!--abs}}</strong>-->
            <!--</div>-->

            <!--<div class="w100 d-relative line-wrapper">-->
            <!--<div class="line"-->
            <!--:style="{width:(xgtxSData7.rnorm-xgtxSData7.lnorm)*10+'%',marginLeft:(xgtxSData7.lnorm+5)*10+'%'}">-->
            <!--<span></span>-->
            <!--</div>-->
            <!--<strong :style="{marginLeft:(xgtxSData7.score+5)*10-1+'%'}">{{xgtxSData7.score |-->
            <!--abs}}</strong>-->
            <!--</div>-->

            <!--<div class="w100 d-relative line-wrapper">-->
            <!--<div class="line"-->
            <!--:style="{width:(xgtxSData8.rnorm-xgtxSData8.lnorm)*10+'%',marginLeft:(xgtxSData8.lnorm+5)*10+'%'}">-->
            <!--<span></span>-->
            <!--</div>-->
            <!--<strong :style="{marginLeft:(xgtxSData8.score+5)*10-1+'%'}">{{xgtxSData8.score |-->
            <!--abs}}</strong>-->
            <!--</div>-->

            <!--<div class="w100 d-relative line-wrapper">-->
            <!--<div class="line"-->
            <!--:style="{width:(xgtxSData9.rnorm-xgtxSData9.lnorm)*10+'%',marginLeft:(xgtxSData9.lnorm+5)*10+'%'}">-->
            <!--<span></span>-->
            <!--</div>-->
            <!--<strong :style="{marginLeft:(xgtxSData9.score+5)*10-1+'%'}">{{xgtxSData9.score |-->
            <!--abs}}</strong>-->
            <!--</div>-->

            <!--<div class="w100 d-relative line-wrapper">-->
            <!--<div class="line"-->
            <!--:style="{width:(xgtxSData10.rnorm-xgtxSData10.lnorm)*10+'%',marginLeft:(xgtxSData10.lnorm+5)*10+'%'}">-->
            <!--<span></span>-->
            <!--</div>-->
            <!--<strong :style="{marginLeft:(xgtxSData10.score+5)*10-1+'%'}">{{xgtxSData10.score |-->
            <!--abs}}</strong>-->
            <!--</div>-->

            <!--<div class="w100 d-relative line-wrapper">-->
            <!--<div class="line"-->
            <!--:style="{width:(xgtxSData11.rnorm-xgtxSData11.lnorm)*10+'%',marginLeft:(xgtxSData11.lnorm+5)*10+'%'}">-->
            <!--<span></span>-->
            <!--</div>-->
            <!--<strong :style="{marginLeft:(xgtxSData11.score+5)*10-1+'%'}">{{xgtxSData11.score |-->
            <!--abs}}</strong>-->
            <!--</div>-->

            <!--<div class="w100 d-relative line-wrapper">-->
            <!--<div class="line"-->
            <!--:style="{width:(xgtxSData12.rnorm-xgtxSData12.lnorm)*10+'%',marginLeft:(xgtxSData12.lnorm+5)*10+'%'}">-->
            <!--<span></span>-->
            <!--</div>-->
            <!--<strong :style="{marginLeft:(xgtxSData12.score+5)*10-1+'%'}">{{xgtxSData12.score |-->
            <!--abs}}</strong>-->
            <!--</div>-->

            <!--<div class="w100 d-relative line-wrapper">-->
            <!--<div class="line"-->
            <!--:style="{width:(xgtxSData13.rnorm-xgtxSData13.lnorm)*10+'%',marginLeft:(xgtxSData13.lnorm+5)*10+'%'}">-->
            <!--<span></span>-->
            <!--</div>-->
            <!--<strong :style="{marginLeft:(xgtxSData13.score+5)*10-1+'%'}">{{xgtxSData13.score |-->
            <!--abs}}</strong>-->
            <!--</div>-->

            <!--<div class="w100 d-relative line-wrapper">-->
            <!--<div class="line"-->
            <!--:style="{width:(xgtxSData14.rnorm-xgtxSData14.lnorm)*10+'%',marginLeft:(xgtxSData14.lnorm+5)*10+'%'}">-->
            <!--<span></span>-->
            <!--</div>-->
            <!--<strong :style="{marginLeft:(xgtxSData14.score+5)*10-1+'%'}">{{xgtxSData14.score |-->
            <!--abs}}</strong>-->
            <!--</div>-->

            <!--<div class="w100 d-relative line-wrapper">-->
            <!--<div class="line"-->
            <!--:style="{width:(xgtxSData15.rnorm-xgtxSData15.lnorm)*10+'%',marginLeft:(xgtxSData15.lnorm+5)*10+'%'}">-->
            <!--<span></span>-->
            <!--</div>-->
            <!--<strong :style="{marginLeft:(xgtxSData15.score+5)*10-1+'%'}">{{xgtxSData15.score |-->
            <!--abs}}</strong>-->
            <!--</div>-->

            <!--<div class="w100 d-relative line-wrapper">-->
            <!--<div class="line"-->
            <!--:style="{width:(xgtxSData16.rnorm-xgtxSData16.lnorm)*10+'%',marginLeft:(xgtxSData16.lnorm+5)*10+'%'}">-->
            <!--<span></span>-->
            <!--</div>-->
            <!--<strong :style="{marginLeft:(xgtxSData16.score+5)*10-1+'%'}">{{xgtxSData16.score |-->
            <!--abs}}</strong>-->
            <!--</div>-->

            <!--<div class="w100 d-relative line-wrapper">-->
            <!--<div class="line"-->
            <!--:style="{width:(xgtxSData17.rnorm-xgtxSData17.lnorm)*10+'%',marginLeft:(xgtxSData17.lnorm+5)*10+'%'}">-->
            <!--<span></span>-->
            <!--</div>-->
            <!--<strong :style="{marginLeft:(xgtxSData17.score+5)*10-1+'%'}">{{xgtxSData17.score |-->
            <!--abs}}</strong>-->
            <!--</div>-->

            <!--<div class="w100 d-relative line-wrapper">-->
            <!--<div class="line"-->
            <!--:style="{width:(xgtxSData18.rnorm-xgtxSData18.lnorm)*10+'%',marginLeft:(xgtxSData18.lnorm+5)*10+'%'}">-->
            <!--<span></span>-->
            <!--</div>-->
            <!--<strong :style="{marginLeft:(xgtxSData18.score+5)*10-1+'%'}">{{xgtxSData18.score |-->
            <!--abs}}</strong>-->
            <!--</div>-->

            <!--<div class="w100 d-relative line-wrapper">-->
            <!--<div class="line"-->
            <!--:style="{width:(xgtxSData19.rnorm-xgtxSData19.lnorm)*10+'%',marginLeft:(xgtxSData19.lnorm+5)*10+'%'}">-->
            <!--<span></span>-->
            <!--</div>-->
            <!--<strong :style="{marginLeft:(xgtxSData19.score+5)*10-1+'%'}">{{xgtxSData19.score |-->
            <!--abs}}</strong>-->
            <!--</div>-->

            <!--<div class="w100 d-relative line-wrapper">-->
            <!--<div class="line"-->
            <!--:style="{width:(xgtxSData20.rnorm-xgtxSData20.lnorm)*10+'%',marginLeft:(xgtxSData20.lnorm+5)*10+'%'}">-->
            <!--<span></span>-->
            <!--</div>-->
            <!--<strong :style="{marginLeft:(xgtxSData20.score+5)*10-1+'%'}">{{xgtxSData20.score |-->
            <!--abs}}</strong>-->
            <!--</div>-->


            <!--</div>-->
            <!--</div>-->
            <!--<div class="jixing" style="margin-bottom: 30px">-->
            <!--<div class="jx-content">-->
            <!--<p>极性指数: </p>-->
            <!--<p>{{reliability}}</p>-->
            <!--</div>-->
            <!--</div>-->
            <!--<div class="pdf-border-paragraph m-b20">-->
            <!--<p>-->
            <!--极性指数范围为从0到100，表示回答者的子维度得分在测验的内部一致性。得分低于40意味着测试者有很多评分在中间区域里，这可能是由于测试者随意回答问题，缺乏自我认识，或者在使用一个方面功能的矛盾心理造成。-->
            <!--</p>-->
            <!--</div>-->
            <!--</div>-->
            <!--<div class="font-blue pdf-footer">-->
            <!--<p class="pull-left">测评网址：www.ymtest.com</p>-->
            <!--<p class="pull-right">测评方法、工具及报告设计已申请产权保护</p>-->
            <!--</div>-->
            <!--</div>-->
            <!--&lt;!&ndash;page 17&ndash;&gt;-->

            <!--&lt;!&ndash;page 18&ndash;&gt;-->
            <!--<div class="pdf-page">-->
            <!--<div class="pdf-header">-->
            <!--<img class="pull-left" src="../../assets/pdf/header-logo.png" height="39px">-->
            <!--<p class="pull-right pdf-page-seq"></p>-->
            <!--<p class="pull-right font-blue">高中生升学规划测评报告</p>-->
            <!--</div>-->
            <!--<div class=" pdf-content">-->
            <!--<div class="font-blue pdf-page-title" id="2"><span>第二部分 认知潜能评估</span></div>-->
            <!--<div class="pdf-border-paragraph pbp-height-medium m-b20">-->
            <!--<p>-->
            <!--心理学者认为，能力是与活动联系起来的，是符合活动要求影响活动效果的个性心理特征的综合。潜能是一种尚未显现的能力，它一旦外化，与活动联系起来并影响活动效果，就变成显在能力，即通常所讲的能力，能力只是潜在能力外化的极小部分。通常认为是符合多种活动要求的某些一般能力的结合，如观察力、记忆力等。-->
            <!--</p>-->
            <!--<p>-->
            <!--一般认知潜能测评是通过一系列科学编排的测试内容，用心理测量的方法对与学习、职业相关的十二种基本能力（包括：信息加工能力、工作记忆能力、空间能力、表象能力、思维转换能力、逻辑推理能力、动手操作能力、语言能力、数学能力、组织管理能力、人际交往能力、美术能力）进行测试，通过与同类型群体平均能力水平对比来评估个体的认知潜能。-->
            <!--</p>-->
            <!--</div>-->
            <!--<div class="page-5-biao page-18-biao"-->
            <!--style="width:100%; float:left;margin-top:60px; margin-bottom: 30px">-->
            <!--<img src="../../assets/pdf/page-18-img.png" alt="">-->
            <!--<div class="biao-content">-->
            <!--</div>-->
            <!--</div>-->

            <!--</div>-->
            <!--<div class="font-blue pdf-footer">-->
            <!--<p class="pull-left">测评网址：www.ymtest.com</p>-->
            <!--<p class="pull-right">测评方法、工具及报告设计已申请产权保护</p>-->
            <!--</div>-->
            <!--</div>-->
            <!--&lt;!&ndash;page 18&ndash;&gt;-->

            <!--&lt;!&ndash;page 19&ndash;&gt;-->
            <!--<div class="pdf-page">-->
            <!--<div class="pdf-header">-->
            <!--<img class="pull-left" src="../../assets/pdf/header-logo.png" height="39px">-->
            <!--<p class="pull-right pdf-page-seq"></p>-->
            <!--<p class="pull-right font-blue">高中生升学规划测评报告</p>-->
            <!--</div>-->
            <!--<div class=" pdf-content">-->
            <!--<div class="pdf-blue-title" id="21">-->
            <!--<img src="../../assets/pdf/title-trn.png" alt="">2.1认知潜能评估结果-->
            <!--</div>-->
            <!--<div class="pdf-border-paragraph pbp-height-medium m-b20">-->
            <!--<p>-->
            <!--下图展示了各项认知潜能的评估结果，通过与常模范围的比较，可以清楚的知道自己在各个潜能方面的优势和不足。图中评估的能力水平值高于常模范围，则说明在该项能力上具有优势；若能力水平在常模范围之内，则说明该能力与大多数人无明显差别；若能力水平低于常模范围，则说明在该项能力上还有所欠缺，需要训练提高。-->
            <!--</p>-->
            <!--</div>-->
            <!--<div class="page-5-biao page-19-biao" style="width:100%; margin-bottom: 30px;margin-top:30px;">-->
            <!--<img src="../../assets/pdf/page-19-img.png" alt="">-->
            <!--<div class="biao-content">-->
            <!--<div class="score-item">-->
            <!--<div class="score-item-text">{{coreNormData1.score}}</div>-->
            <!--<div class="score-line-wrapper">-->
            <!--<div class="line-score b-orange"-->
            <!--:style="{height:coreNormData1.score/200*370+'px'}">-->
            <!--<div class="line-score-norm"-->
            <!--:style="{bottom:coreNormData1.lnorm/200*370+'px',height:(coreNormData1.rnorm-coreNormData1.lnorm)/200*370+'px'}"></div>-->
            <!--</div>-->
            <!--</div>-->
            <!--</div>-->

            <!--<div class="score-item">-->
            <!--<div class="score-item-text">{{coreNormData2.score}}</div>-->
            <!--<div class="score-line-wrapper">-->
            <!--<div class="line-score b-orange"-->
            <!--:style="{height:coreNormData2.score/200*370+'px'}">-->
            <!--<div class="line-score-norm"-->
            <!--:style="{bottom:coreNormData2.lnorm/200*370+'px',height:(coreNormData2.rnorm-coreNormData2.lnorm)/200*370+'px'}"></div>-->
            <!--</div>-->
            <!--</div>-->
            <!--</div>-->

            <!--<div class="score-item">-->
            <!--<div class="score-item-text">{{coreNormData3.score}}</div>-->
            <!--<div class="score-line-wrapper">-->
            <!--<div class="line-score b-orange"-->
            <!--:style="{height:coreNormData3.score/200*370+'px'}">-->
            <!--<div class="line-score-norm"-->
            <!--:style="{bottom:coreNormData3.lnorm/200*370+'px',height:(coreNormData3.rnorm-coreNormData3.lnorm)/200*370+'px'}"></div>-->
            <!--</div>-->
            <!--</div>-->
            <!--</div>-->

            <!--<div class="score-item">-->
            <!--<div class="score-item-text">{{coreNormData4.score}}</div>-->
            <!--<div class="score-line-wrapper">-->
            <!--<div class="line-score b-orange"-->
            <!--:style="{height:coreNormData4.score/200*370+'px'}">-->
            <!--<div class="line-score-norm"-->
            <!--:style="{bottom:coreNormData4.lnorm/200*370+'px',height:(coreNormData4.rnorm-coreNormData4.lnorm)/200*370+'px'}"></div>-->
            <!--</div>-->
            <!--</div>-->
            <!--</div>-->

            <!--<div class="score-item">-->
            <!--<div class="score-item-text">{{coreNormData5.score}}</div>-->
            <!--<div class="score-line-wrapper">-->
            <!--<div class="line-score b-orange"-->
            <!--:style="{height:coreNormData5.score/200*370+'px'}">-->
            <!--<div class="line-score-norm"-->
            <!--:style="{bottom:coreNormData5.lnorm/200*370+'px',height:(coreNormData5.rnorm-coreNormData5.lnorm)/200*370+'px'}"></div>-->
            <!--</div>-->
            <!--</div>-->
            <!--</div>-->

            <!--<div class="score-item">-->
            <!--<div class="score-item-text">{{coreNormData6.score}}</div>-->
            <!--<div class="score-line-wrapper">-->
            <!--<div class="line-score b-orange"-->
            <!--:style="{height:coreNormData6.score/200*370+'px'}">-->
            <!--<div class="line-score-norm"-->
            <!--:style="{bottom:coreNormData6.lnorm/200*370+'px',height:(coreNormData6.rnorm-coreNormData6.lnorm)/200*370+'px'}"></div>-->
            <!--</div>-->
            <!--</div>-->
            <!--</div>-->

            <!--<div class="score-item">-->
            <!--<div class="score-item-text">{{coreNormData7.score}}</div>-->
            <!--<div class="score-line-wrapper">-->
            <!--<div class="line-score b-orange"-->
            <!--:style="{height:coreNormData7.score/200*370+'px'}">-->
            <!--<div class="line-score-norm"-->
            <!--:style="{bottom:coreNormData7.lnorm/200*370+'px',height:(coreNormData7.rnorm-coreNormData7.lnorm)/200*370+'px'}"></div>-->
            <!--</div>-->
            <!--</div>-->
            <!--</div>-->

            <!--<div class="score-item">-->
            <!--<div class="score-item-text">{{coreNormData8.score}}</div>-->
            <!--<div class="score-line-wrapper">-->
            <!--<div class="line-score b-orange"-->
            <!--:style="{height:coreNormData8.score/200*370+'px'}">-->
            <!--<div class="line-score-norm"-->
            <!--:style="{bottom:coreNormData8.lnorm/200*370+'px',height:(coreNormData8.rnorm-coreNormData8.lnorm)/200*370+'px'}"></div>-->
            <!--</div>-->
            <!--</div>-->
            <!--</div>-->

            <!--<div class="score-item">-->
            <!--<div class="score-item-text">{{coreNormData9.score}}</div>-->
            <!--<div class="score-line-wrapper">-->
            <!--<div class="line-score b-orange"-->
            <!--:style="{height:coreNormData9.score/200*370+'px'}">-->
            <!--<div class="line-score-norm"-->
            <!--:style="{bottom:coreNormData9.lnorm/200*370+'px',height:(coreNormData9.rnorm-coreNormData9.lnorm)/200*370+'px'}"></div>-->
            <!--</div>-->
            <!--</div>-->
            <!--</div>-->

            <!--<div class="score-item">-->
            <!--<div class="score-item-text">{{coreNormData10.score}}</div>-->
            <!--<div class="score-line-wrapper">-->
            <!--<div class="line-score b-orange"-->
            <!--:style="{height:coreNormData10.score/200*370+'px'}">-->
            <!--<div class="line-score-norm"-->
            <!--:style="{bottom:coreNormData10.lnorm/200*370+'px',height:(coreNormData10.rnorm-coreNormData10.lnorm)/200*370+'px'}"></div>-->
            <!--</div>-->
            <!--</div>-->
            <!--</div>-->
            <!--<div class="score-item">-->
            <!--<div class="score-item-text">{{coreNormData11.score}}</div>-->
            <!--<div class="score-line-wrapper">-->
            <!--<div class="line-score b-orange"-->
            <!--:style="{height:coreNormData11.score/200*370+'px'}">-->
            <!--<div class="line-score-norm"-->
            <!--:style="{bottom:coreNormData11.lnorm/200*370+'px',height:(coreNormData11.rnorm-coreNormData11.lnorm)/200*370+'px'}"></div>-->
            <!--</div>-->
            <!--</div>-->
            <!--</div>-->

            <!--<div class="score-item">-->
            <!--<div class="score-item-text">{{coreNormData12.score}}</div>-->
            <!--<div class="score-line-wrapper">-->
            <!--<div class="line-score b-orange"-->
            <!--:style="{height:coreNormData12.score/200*370+'px'}">-->
            <!--<div class="line-score-norm"-->
            <!--:style="{bottom:coreNormData12.lnorm/200*370+'px',height:(coreNormData12.rnorm-coreNormData12.lnorm)/200*370+'px'}"></div>-->
            <!--</div>-->
            <!--</div>-->
            <!--</div>-->

            <!--</div>-->
            <!--</div>-->
            <!--&lt;!&ndash;<div class="pdf-border-paragraph m-b20">&ndash;&gt;-->
            <!--&lt;!&ndash;<p>&ndash;&gt;-->
            <!--&lt;!&ndash;在下表中潜能水平值是测试个体在各项潜能中的水平大小；常模范围是群体中大多数人在该项潜能上的水平范围；出众百分数是与同类型群体相比在该项潜能上的优势程度。&ndash;&gt;-->
            <!--&lt;!&ndash;</p>&ndash;&gt;-->
            <!--&lt;!&ndash;</div>&ndash;&gt;-->
            <!--</div>-->
            <!--<div class="font-blue pdf-footer">-->
            <!--<p class="pull-left">测评网址：www.ymtest.com</p>-->
            <!--<p class="pull-right">测评方法、工具及报告设计已申请产权保护</p>-->
            <!--</div>-->
            <!--</div>-->
            <!--&lt;!&ndash;page 19&ndash;&gt;-->

            <!--&lt;!&ndash;page 20&ndash;&gt;-->
            <!--<div class="pdf-page">-->
            <!--<div class="pdf-header">-->
            <!--<img class="pull-left" src="../../assets/pdf/header-logo.png" height="39px">-->
            <!--<p class="pull-right pdf-page-seq"></p>-->
            <!--<p class="pull-right font-blue">高中生升学规划测评报告</p>-->
            <!--</div>-->
            <!--<div class=" pdf-content">-->
            <!--<div class="pdf-border-paragraph m-b20" style="margin-bottom: 50px">-->
            <!--<p>-->
            <!--在下表中潜能水平值是测试个体在各项潜能中的水平大小；常模范围是群体中大多数人在该项潜能上的水平范围；出众百分数是与同类型群体相比在该项潜能上的优势程度。-->
            <!--</p>-->
            <!--</div>-->
            <!--<div class="table-container">-->
            <!--<div class="table-title">认知潜能指标评估详细结果</div>-->
            <!--<table>-->
            <!--<thead>-->
            <!--<tr>-->
            <!--<th width>认知潜能</th>-->
            <!--<th>潜能水平值</th>-->
            <!--<th>常模范围</th>-->
            <!--<th>出众百分比</th>-->
            <!--<th width="70">非常低</th>-->
            <!--<th width="70">比较低</th>-->
            <!--<th width="70">一般</th>-->
            <!--<th width="70">比较好</th>-->
            <!--<th width="70">非常好</th>-->
            <!--</tr>-->
            <!--</thead>-->
            <!--<tbody>-->
            <!--<tr v-for="data in coreNormData">-->
            <!--<td class="bg-blue">{{data.name }}</td>-->
            <!--<td>{{data.score | toFixed(2)}}</td>-->
            <!--<td>{{data.lnorm}}~{{data.rnorm}}</td>-->
            <!--<td>{{data.percent*100 | toFixed(2)}}%</td>-->
            <!--<td colspan="5">-->
            <!--<div class="score-line">-->
            <!--<div class="line b-red" v-if="data.grade==1" :style="{width:10+'%'}"></div>-->
            <!--<div class="line b-orange" v-if="data.grade==2"-->
            <!--:style="{width:30+'%'}"></div>-->
            <!--<div class="line b-yellow" v-if="data.grade==3"-->
            <!--:style="{width:50+'%'}"></div>-->
            <!--<div class="line b-green" v-if="data.grade==4"-->
            <!--:style="{width:70+'%'}"></div>-->
            <!--<div class="line b-blue" v-if="data.grade==5"-->
            <!--:style="{width:90+'%'}"></div>-->
            <!--</div>-->
            <!--</td>-->
            <!--</tr>-->
            <!--</tbody>-->
            <!--</table>-->
            <!--</div>-->
            <!--<div class="pdf-blue-title" id="22">-->
            <!--<img src="../../assets/pdf/title-trn.png" alt="">2.2认知潜能分析-->
            <!--</div>-->
            <!--<div class="pdf-border-paragraph m-b20">-->
            <!--<div class="pull-left blue-title m-b20">-->
            <!--{{infoData.name}}-->
            <!--</div>-->
            <!--<p>-->
            <!--{{infoData.comment}}-->
            <!--</p>-->
            <!--</div>-->

            <!--</div>-->
            <!--<div class="font-blue pdf-footer">-->
            <!--<p class="pull-left">测评网址：www.ymtest.com</p>-->
            <!--<p class="pull-right">测评方法、工具及报告设计已申请产权保护</p>-->
            <!--</div>-->
            <!--</div>-->
            <!--&lt;!&ndash;page 20&ndash;&gt;-->

            <!--&lt;!&ndash;page 21&ndash;&gt;-->
            <!--<div class="pdf-page">-->
            <!--<div class="pdf-header">-->
            <!--<img class="pull-left" src="../../assets/pdf/header-logo.png" height="39px">-->
            <!--<p class="pull-right pdf-page-seq"></p>-->
            <!--<p class="pull-right font-blue">高中生升学规划测评报告</p>-->
            <!--</div>-->
            <!--<div class=" pdf-content">-->

            <!--<div class="pdf-border-paragraph m-b20">-->
            <!--<div class="pull-left blue-title m-b20">-->
            <!--{{workData.name}}-->
            <!--</div>-->
            <!--<p>-->
            <!--{{workData.comment}}-->
            <!--</p>-->
            <!--</div>-->

            <!--<div class="pdf-border-paragraph m-b20">-->
            <!--<div class="pull-left blue-title m-b20">-->
            <!--{{spaceData.name}}-->
            <!--</div>-->
            <!--<p>-->
            <!--{{spaceData.comment}}-->
            <!--</p>-->
            <!--</div>-->

            <!--<div class="pdf-border-paragraph m-b20">-->
            <!--<div class="pull-left blue-title m-b20">-->
            <!--{{presentData.name}}-->
            <!--</div>-->
            <!--<p>-->
            <!--{{presentData.comment }}-->
            <!--</p>-->
            <!--</div>-->

            <!--<div class="pdf-border-paragraph m-b20">-->
            <!--<div class="pull-left blue-title m-b20">-->
            <!--{{thinkData.name}}-->
            <!--</div>-->
            <!--<p>-->
            <!--{{thinkData.comment}}-->
            <!--</p>-->
            <!--</div>-->

            <!--</div>-->
            <!--<div class="font-blue pdf-footer">-->
            <!--<p class="pull-left">测评网址：www.ymtest.com</p>-->
            <!--<p class="pull-right">测评方法、工具及报告设计已申请产权保护</p>-->
            <!--</div>-->
            <!--</div>-->
            <!--&lt;!&ndash;page 21&ndash;&gt;-->

            <!--&lt;!&ndash;page 22&ndash;&gt;-->
            <!--<div class="pdf-page">-->
            <!--<div class="pdf-header">-->
            <!--<img class="pull-left" src="../../assets/pdf/header-logo.png" height="39px">-->
            <!--<p class="pull-right pdf-page-seq"></p>-->
            <!--<p class="pull-right font-blue">高中生升学规划测评报告</p>-->
            <!--</div>-->
            <!--<div class=" pdf-content">-->

            <!--<div class="pdf-border-paragraph m-b20">-->
            <!--<div class="pull-left blue-title m-b20">-->
            <!--{{logicData.name}}-->
            <!--</div>-->
            <!--<p>-->
            <!--{{logicData.comment}}-->
            <!--</p>-->
            <!--</div>-->

            <!--<div class="pdf-border-paragraph m-b20">-->
            <!--<div class="pull-left blue-title m-b20">-->
            <!--{{diyData.name}}-->
            <!--</div>-->
            <!--<p>-->
            <!--{{diyData.comment}}-->
            <!--</p>-->
            <!--</div>-->

            <!--<div class="pdf-border-paragraph m-b20">-->
            <!--<div class="pull-left blue-title m-b20">-->
            <!--{{langData.name}}-->
            <!--</div>-->
            <!--<p>-->
            <!--{{langData.comment}}-->
            <!--</p>-->
            <!--</div>-->

            <!--<div class="pdf-border-paragraph m-b20">-->
            <!--<div class="pull-left blue-title m-b20">-->
            <!--{{mathData.name}}-->
            <!--</div>-->
            <!--<p>-->
            <!--{{mathData.comment}}-->
            <!--</p>-->
            <!--</div>-->

            <!--</div>-->
            <!--<div class="font-blue pdf-footer">-->
            <!--<p class="pull-left">测评网址：www.ymtest.com</p>-->
            <!--<p class="pull-right">测评方法、工具及报告设计已申请产权保护</p>-->
            <!--</div>-->
            <!--</div>-->
            <!--&lt;!&ndash;page 22&ndash;&gt;-->

            <!--&lt;!&ndash;page 23&ndash;&gt;-->
            <!--<div class="pdf-page">-->
            <!--<div class="pdf-header">-->
            <!--<img class="pull-left" src="../../assets/pdf/header-logo.png" height="39px">-->
            <!--<p class="pull-right pdf-page-seq"></p>-->
            <!--<p class="pull-right font-blue">高中生升学规划测评报告</p>-->
            <!--</div>-->
            <!--<div class=" pdf-content">-->

            <!--<div class="pdf-border-paragraph m-b20">-->
            <!--<div class="pull-left blue-title m-b20">-->
            <!--{{organizeData.name}}-->
            <!--</div>-->
            <!--<p>-->
            <!--{{organizeData.comment}}-->
            <!--</p>-->
            <!--</div>-->

            <!--<div class="pdf-border-paragraph m-b20">-->
            <!--<div class="pull-left blue-title m-b20">-->
            <!--{{personalData.name}}-->
            <!--</div>-->
            <!--<p>-->
            <!--{{personalData.comment}}-->
            <!--</p>-->
            <!--</div>-->

            <!--<div class="pdf-border-paragraph m-b20">-->
            <!--<div class="pull-left blue-title m-b20">-->
            <!--{{artData.name}}-->
            <!--</div>-->
            <!--<p>-->
            <!--{{artData.comment}}-->
            <!--</p>-->
            <!--</div>-->


            <!--</div>-->
            <!--<div class="font-blue pdf-footer">-->
            <!--<p class="pull-left">测评网址：www.ymtest.com</p>-->
            <!--<p class="pull-right">测评方法、工具及报告设计已申请产权保护</p>-->
            <!--</div>-->
            <!--</div>-->
            <!--&lt;!&ndash;page 23&ndash;&gt;-->

            <!--&lt;!&ndash;page 24&ndash;&gt;-->
            <!--<div class="pdf-page">-->
            <!--<div class="pdf-header">-->
            <!--<img class="pull-left" src="../../assets/pdf/header-logo.png" height="39px">-->
            <!--<p class="pull-right pdf-page-seq"></p>-->
            <!--<p class="pull-right font-blue">高中生升学规划测评报告</p>-->
            <!--</div>-->
            <!--<div class=" pdf-content" id="31">-->
            <!--<div class="font-blue pdf-page-title"><span>第三部分 兴趣倾向评估</span></div>-->
            <!--<div class="pdf-border-paragraph m-b20">-->
            <!--<p>-->
            <!--兴趣是指建立在需要基础上，带有积极情绪色彩的认知和活动倾向；当个人对某事物有兴趣时，会对它产生特别的注意力；是人们活动的重要动力之一，也是活动成功的重要条件。职业兴趣是指人们对某种职业活动具有的比较稳定而持久的心理倾向。它是一个人探究某种职业或从事某种职业活动所表现出来的特殊个性倾向，它使个人对某种职业优先注意，并具有向往的情感。由于兴趣爱好不同，人的职业兴趣也有很大的差异。-->
            <!--</p>-->

            <!--<p>-->
            <!--本报告基于霍兰德职业兴趣理论，从职业兴趣的角度对您的职业选择进行探索。兴趣是个体在职业匹配的过程中的重要因素，迄今为止，霍兰德职业兴趣理论是最具影响力的职业发展理论和职业分类体系。-->
            <!--</p>-->
            <!--</div>-->
            <!--<div class="pdf-blue-title">-->
            <!--<img src="../../assets/pdf/title-trn.png" alt="">3.1兴趣倾向评估结果-->
            <!--</div>-->
            <!--<div class="pdf-border-paragraph m-b20">-->
            <!--<p>-->
            <!--下表为兴趣倾向的评估结果，首先测试者可以根据得分高低清楚地判断自己的兴趣倾向；测试者还可以和别人比较，灰色区域的范围是常模范围，表示大部分的高中生兴趣倾向得分都在该区域内。如果得分超过该范围，则说明在该兴趣上比他人强；如果得分低于该范围，则说明在该兴趣上较他人弱；如果得分在范围内，则代表在该兴趣上与他人不分上下。表中还展示了各类兴趣倾向职业类型的常见职业供测试者参考。-->
            <!--</p>-->
            <!--</div>-->
            <!--</div>-->
            <!--<div class="font-blue pdf-footer">-->
            <!--<p class="pull-left">测评网址：www.ymtest.com</p>-->
            <!--<p class="pull-right">测评方法、工具及报告设计已申请产权保护</p>-->
            <!--</div>-->
            <!--</div>-->
            <!--&lt;!&ndash;page 24&ndash;&gt;-->

            <!--&lt;!&ndash;page 25&ndash;&gt;-->
            <!--<div class="pdf-page">-->
            <!--<div class="pdf-header">-->
            <!--<img class="pull-left" src="../../assets/pdf/header-logo.png" height="39px">-->
            <!--<p class="pull-right pdf-page-seq"></p>-->
            <!--<p class="pull-right font-blue">高中生升学规划测评报告</p>-->
            <!--</div>-->
            <!--<div class=" pdf-content">-->
            <!--<div class="table-container table-25-container">-->
            <!--<div class="table-title">兴趣倾向指标评估详细结果</div>-->
            <!--<table>-->
            <!--<thead>-->
            <!--<tr>-->
            <!--<th>职业类型</th>-->
            <!--<th width="40">10</th>-->
            <!--<th width="40">20</th>-->
            <!--<th width="40">30</th>-->
            <!--<th width="40">40</th>-->
            <!--<th width="40">50</th>-->
            <!--<th width="40">60</th>-->
            <!--<th width="40">70</th>-->
            <!--<th width="40">80</th>-->
            <!--<th width="40">90</th>-->
            <!--<th width="40">100</th>-->
            <!--<th>指数</th>-->
            <!--<th width="180">典型职业</th>-->
            <!--</tr>-->
            <!--</thead>-->
            <!--<tbody>-->
            <!--<tr>-->
            <!--<td class="bg-blue">-->
            <!--常规型<br>-->
            <!--（C）-->
            <!--</td>-->
            <!--<td colspan="10">-->
            <!--<div class="score-line">-->
            <!--<div class="line" :style="{width:(xqqxTableData1.score/100)*409+'px'}">-->
            <!--<span-->
            <!--:style="{left:(xqqxTableData1.lnorm/100)*409+'px',width:(xqqxTableData1.rnorm-xqqxTableData1.lnorm)/100*409+'px'}"></span>-->
            <!--</div>-->
            <!--</div>-->
            <!--</td>-->
            <!--<td>-->
            <!--{{xqqxTableData1.score}}-->
            <!--</td>-->
            <!--<td>-->
            <!--信息处理、行政办公、财务会计和经营分析等方面的职业领域；-->
            <!--</td>-->
            <!--</tr>-->

            <!--<tr>-->
            <!--<td class="bg-blue">-->
            <!--实际型<br>-->
            <!--（R）-->
            <!--</td>-->
            <!--<td colspan="10">-->
            <!--<div class="score-line">-->
            <!--<div class="line" :style="{width:(xqqxTableData2.score/100)*409+'px'}">-->
            <!--<span-->
            <!--:style="{left:(xqqxTableData2.lnorm/100)*409+'px',width:(xqqxTableData2.rnorm-xqqxTableData2.lnorm)/100*409+'px'}"></span>-->
            <!--</div>-->
            <!--</div>-->
            <!--</td>-->
            <!--<td>-->
            <!--{{xqqxTableData2.score}}-->
            <!--</td>-->
            <!--<td>-->
            <!--技术性职业岗位：计算机硬件、装备制造业领域；技能性职业领域：加工业、农业机械领域。-->
            <!--</td>-->
            <!--</tr>-->

            <!--<tr>-->
            <!--<td class="bg-blue">-->
            <!--调研型<br>-->
            <!--（I）-->
            <!--</td>-->
            <!--<td colspan="10">-->
            <!--<div class="score-line">-->
            <!--<div class="line" :style="{width:(xqqxTableData3.score/100)*409+'px'}">-->
            <!--<span-->
            <!--:style="{left:(xqqxTableData3.lnorm/100)*409+'px',width:(xqqxTableData3.rnorm-xqqxTableData3.lnorm)/100*409+'px'}"></span>-->
            <!--</div>-->
            <!--</div>-->
            <!--</td>-->
            <!--<td>-->
            <!--{{xqqxTableData3.score}}-->
            <!--</td>-->
            <!--<td>-->
            <!--科学研究领域、工程设计、教育、软件业、医疗、工程规划设计等职业类型。-->
            <!--</td>-->
            <!--</tr>-->

            <!--<tr>-->
            <!--<td class="bg-blue">-->
            <!--艺术型<br>-->
            <!--（A）-->
            <!--</td>-->
            <!--<td colspan="10">-->
            <!--<div class="score-line">-->
            <!--<div class="line" :style="{width:(xqqxTableData4.score/100)*409+'px'}">-->
            <!--<span-->
            <!--:style="{left:(xqqxTableData4.lnorm/100)*409+'px',width:(xqqxTableData4.rnorm-xqqxTableData4.lnorm)/100*409+'px'}"></span>-->
            <!--</div>-->
            <!--</div>-->
            <!--</td>-->
            <!--<td>-->
            <!--{{xqqxTableData4.score}}-->
            <!--</td>-->
            <!--<td>-->
            <!--艺术领域方面：艺术设计、演艺业、摄影；音乐领域方面：歌唱家、作曲家；文学方面：小说家、诗人、剧作家等。-->
            <!--</td>-->
            <!--</tr>-->

            <!--<tr>-->
            <!--<td class="bg-blue">-->
            <!--社会型<br>-->
            <!--（S）-->
            <!--</td>-->
            <!--<td colspan="10">-->
            <!--<div class="score-line">-->
            <!--<div class="line" :style="{width:(xqqxTableData5.score/100)*409+'px'}">-->
            <!--<span-->
            <!--:style="{left:(xqqxTableData5.lnorm/100)*409+'px',width:(xqqxTableData5.rnorm-xqqxTableData5.lnorm)/100*409+'px'}"></span>-->
            <!--</div>-->
            <!--</div>-->
            <!--</td>-->
            <!--<td>-->
            <!--{{xqqxTableData5.score}}-->
            <!--</td>-->
            <!--<td>-->
            <!--教育领域：教育培训；社会工作者：社会工作事业、社会公益人员、咨询。-->
            <!--</td>-->
            <!--</tr>-->

            <!--<tr>-->
            <!--<td class="bg-blue">-->
            <!--企业型<br>-->
            <!--（E）-->

            <!--</td>-->
            <!--<td colspan="10">-->
            <!--<div class="score-line">-->
            <!--<div class="line" :style="{width:(xqqxTableData6.score/100)*409+'px'}">-->
            <!--<span-->
            <!--:style="{left:(xqqxTableData6.lnorm/100)*409+'px',width:(xqqxTableData6.rnorm-xqqxTableData6.lnorm)/100*409+'px'}"></span>-->
            <!--</div>-->
            <!--</div>-->
            <!--</td>-->
            <!--<td>-->
            <!--{{xqqxTableData6.score}}-->
            <!--</td>-->
            <!--<td>-->
            <!--社会机构组织管理者、企业经营、建设项目、市场营销与司法服务。-->
            <!--</td>-->
            <!--</tr>-->

            <!--</tbody>-->
            <!--</table>-->
            <!--</div>-->

            <!--<div class="pdf-border-paragraph m-b20">-->
            <!--<p>-->
            <!--下图为兴趣倾向测试结果雷达图，在六种兴趣倾向中，得分越高代表兴趣越强，得分越低则兴趣越弱。若雷达图非常不规则，在六个维度上的得分相差很大，则兴趣倾向非常明显；若雷达图呈正六边形或接近正六边形，说明兴趣比较广泛和均衡，能够从事多种类型的工作，或者是作答太过一致造成的结果。-->
            <!--</p>-->
            <!--</div>-->
            <!--</div>-->
            <!--<div class="font-blue pdf-footer">-->
            <!--<p class="pull-left">测评网址：www.ymtest.com</p>-->
            <!--<p class="pull-right">测评方法、工具及报告设计已申请产权保护</p>-->
            <!--</div>-->
            <!--</div>-->
            <!--&lt;!&ndash;page 25&ndash;&gt;-->

            <!--&lt;!&ndash;page 26&ndash;&gt;-->
            <!--<div class="pdf-page">-->
            <!--<div class="pdf-header">-->
            <!--<img class="pull-left" src="../../assets/pdf/header-logo.png" height="39px">-->
            <!--<p class="pull-right pdf-page-seq"></p>-->
            <!--<p class="pull-right font-blue">高中生升学规划测评报告</p>-->
            <!--</div>-->
            <!--<div class=" pdf-content">-->
            <!--<div class="radarChartContainer">-->
            <!--<div id="radarChart" style="width:100%; height:390px;"></div>-->
            <!--<div class="title">兴趣倾向评估结果示意图</div>-->
            <!--</div>-->
            <!--<div class="pdf-border-paragraph m-b20">-->
            <!--<div class="pull-left blue-title m-b20">-->
            <!--测评小结-->
            <!--</div>-->
            <!--<p style="text-indent:0;margin-left:17px;">-->
            <!--根据您的测试结果，您的兴趣倾向推荐为：-->
            <!--</p>-->
            <!--<div class="left-block" v-for="(data,index) in xqqxData.recommends">-->
            <!--<div class="pull-left"></div>-->
            <!--<div class="text-container" v-if="index==0">-->
            <!--推荐一：{{data}}-->
            <!--</div>-->
            <!--<div class="text-container" v-if="index==1">-->
            <!--推荐二：{{data}}-->
            <!--</div>-->
            <!--<div class="text-container" v-if="index==2">-->
            <!--推荐三：{{data}}-->
            <!--</div>-->
            <!--</div>-->
            <!--</div>-->
            <!--<div class="pdf-blue-title" id="32">-->
            <!--<img src="../../assets/pdf/title-trn.png" alt="">3.2兴趣倾向分析-->
            <!--</div>-->
            <!--<div class="pdf-border-paragraph m-b20" v-for="(data,index) in xqqxData.comment" v-if="index==0">-->
            <!--<div class="pull-left blue-title m-b20">-->
            <!--{{data.name}}-->
            <!--</div>-->
            <!--<div class="left-block" v-for="comment in data.comments">-->
            <!--<div class="pull-left"></div>-->
            <!--<div class="text-container">-->
            <!--{{comment.detail}}-->
            <!--</div>-->
            <!--</div>-->

            <!--</div>-->
            <!--</div>-->
            <!--<div class="font-blue pdf-footer">-->
            <!--<p class="pull-left">测评网址：www.ymtest.com</p>-->
            <!--<p class="pull-right">测评方法、工具及报告设计已申请产权保护</p>-->
            <!--</div>-->
            <!--</div>-->
            <!--&lt;!&ndash;page 26&ndash;&gt;-->

            <!--&lt;!&ndash;page 27&ndash;&gt;-->
            <!--<div class="pdf-page">-->
            <!--<div class="pdf-header">-->
            <!--<img class="pull-left" src="../../assets/pdf/header-logo.png" height="39px">-->
            <!--<p class="pull-right pdf-page-seq"></p>-->
            <!--<p class="pull-right font-blue">高中生升学规划测评报告</p>-->
            <!--</div>-->
            <!--<div class=" pdf-content">-->
            <!--<div class="pdf-border-paragraph m-b20" v-for="(data,index) in xqqxData.comment" v-if="index>0">-->
            <!--<div class="pull-left blue-title m-b20">-->
            <!--{{data.name}}-->
            <!--</div>-->
            <!--<div class="left-block" v-for="comment in data.comments">-->
            <!--<div class="pull-left"></div>-->
            <!--<div class="text-container">-->
            <!--{{comment.detail}}-->
            <!--</div>-->
            <!--</div>-->

            <!--</div>-->

            <!--</div>-->
            <!--<div class="font-blue pdf-footer">-->
            <!--<p class="pull-left">测评网址：www.ymtest.com</p>-->
            <!--<p class="pull-right">测评方法、工具及报告设计已申请产权保护</p>-->
            <!--</div>-->
            <!--</div>-->
            <!--&lt;!&ndash;page 27&ndash;&gt;-->

            <!--&lt;!&ndash;page 28&ndash;&gt;-->
            <!--<div class="pdf-page">-->
            <!--<div class="pdf-header">-->
            <!--<img class="pull-left" src="../../assets/pdf/header-logo.png" height="39px">-->
            <!--<p class="pull-right pdf-page-seq"></p>-->
            <!--<p class="pull-right font-blue">高中生升学规划测评报告</p>-->
            <!--</div>-->
            <!--<div class=" pdf-content" id="41">-->
            <!--<div class="font-blue pdf-page-title"><span>第四部分 职业生涯规划</span></div>-->
            <!--<div class="pdf-border-paragraph m-b20">-->
            <!--<p>-->
            <!--职业生涯规划就是对职业生涯乃至人生进行持续的系统的计划的过程；是指针对个人职业选择的主观和客观因素进行分析和测定，确定个人的奋斗目标并努力实现这一目标的过程。对年轻人而言，职业选择是否适当，将影响其将来事业的成败以及一生的幸福；对社会而言，个人择业是否适当，能决定社会人力供需是否平衡。如果每个人都适才适所，那么，不仅每个人都有发展前途，而且社会亦会欣欣向荣；相反，则个人贫困，社会问题丛生。-->
            <!--</p>-->

            <!--<p>-->
            <!--职业生涯规划有两大主要目标，第一个目标是找到适合自己的职业，这一目标的实现需要将个人与群体相结合，在对一个人职业生涯的主客观条件进行测定、分析、总结的基础上，对自己的人格、潜能、兴趣进行综合分析，与特定群体常模参照比较，结合时代特点，确定自己最佳的职业奋斗目标；第二个目标是通过规划求得职业发展，为实现第一目标做出行之有效的安排。所以职业定位是决定职业生涯成败的最关键的一步，同时也是职业生涯规划的起点。-->
            <!--</p>-->
            <!--<p>-->
            <!--本报告是根据您的人格特性、职业兴趣、一般认知潜能三方面的测评结果，进行综合分析，实现人格特性适合，有职业兴趣倾向，有潜力发展的精准职业定位。下面是测评系统为您推荐的最佳匹配职业领域、第二匹配职业领域、第三匹配职业领域。根据您的个人特点，对适合的职业、专业领域进行深度剖析；根据测评结果的分析，对您适合该职业、专业领域的原因进行科学的解释。-->
            <!--</p>-->
            <!--</div>-->
            <!--<div class="pdf-blue-title">-->
            <!--<img src="../../assets/pdf/title-trn.png" alt="">4.1职业匹配结果评估-->
            <!--</div>-->
            <!--<div class="pdf-border-paragraph m-b20">-->
            <!--<p>-->
            <!--在下表中人格特性职业类型是适合测试个体人格的职业类型；兴趣倾向指标得分是测试个体该类职业的兴趣倾向测试得分；认知潜能指标得分是测试个体该类职业的认知潜能测试得分。-->
            <!--</p>-->
            <!--</div>-->
            <!--</div>-->
            <!--<div class="font-blue pdf-footer">-->
            <!--<p class="pull-left">测评网址：www.ymtest.com</p>-->
            <!--<p class="pull-right">测评方法、工具及报告设计已申请产权保护</p>-->
            <!--</div>-->
            <!--</div>-->
            <!--&lt;!&ndash;page 28&ndash;&gt;-->

            <!--&lt;!&ndash;page 29&ndash;&gt;-->
            <!--<div class="pdf-page">-->
            <!--<div class="pdf-header">-->
            <!--<img class="pull-left" src="../../assets/pdf/header-logo.png" height="39px">-->
            <!--<p class="pull-right pdf-page-seq"></p>-->
            <!--<p class="pull-right font-blue">高中生升学规划测评报告</p>-->
            <!--</div>-->
            <!--<div class=" pdf-content">-->

            <!--<div class="table-container table-29-container">-->
            <!--<div class="table-title">职业类型与评估指标分析结果</div>-->
            <!--<table>-->
            <!--<thead>-->
            <!--<tr>-->
            <!--<th width="">职业类型</th>-->
            <!--<th width="">指标类型</th>-->
            <!--<th width="">指标得分</th>-->
            <!--<th width="355">得分/匹配度</th>-->
            <!--</tr>-->
            <!--</thead>-->
            <!--<tbody v-for="data in careerTableData">-->
            <!--<tr>-->
            <!--<td class="bg-blue" rowspan="2">{{data.name}}</td>-->
            <!--<td>兴趣倾向</td>-->
            <!--<td>{{data.hscore}}</td>-->
            <!--<td>-->
            <!--<div class="score-line">-->
            <!--<div class="line b-red" v-if="data.hscore<=20"-->
            <!--:style="{width:(data.hscore/100)*355+'px'}"></div>-->
            <!--<div class="line b-orange" v-if="data.hscore>20 && data.hscore<=40"-->
            <!--:style="{width:(data.hscore/100)*355+'px'}"></div>-->
            <!--<div class="line b-yellow" v-if="data.hscore>40 && data.hscore<=60"-->
            <!--:style="{width:(data.hscore/100)*355+'px'}"></div>-->
            <!--<div class="line b-green" v-if="data.hscore>60 && data.hscore<=80"-->
            <!--:style="{width:(data.hscore/100)*355+'px'}"></div>-->
            <!--<div class="line b-blue" v-if="data.hscore>80 && data.hscore<=100"-->
            <!--:style="{width:(data.hscore/100)*355+'px'}"></div>-->
            <!--</div>-->
            <!--</td>-->
            <!--</tr>-->
            <!--<tr>-->
            <!--&lt;!&ndash;<td class="bg-blue" rowspan="2">xxx</td>&ndash;&gt;-->
            <!--<td>认知潜能</td>-->
            <!--<td>{{data.cscore}}</td>-->
            <!--<td>-->
            <!--<div class="score-line">-->
            <!--<div class="line b-red" v-if="data.cscore<=20"-->
            <!--:style="{width:(data.cscore/100)*355+'px'}"></div>-->
            <!--<div class="line b-orange" v-if="data.cscore>20 && data.cscore<=40"-->
            <!--:style="{width:(data.cscore/100)*355+'px'}"></div>-->
            <!--<div class="line b-yellow" v-if="data.cscore>40 && data.cscore<=60"-->
            <!--:style="{width:(data.cscore/100)*355+'px'}"></div>-->
            <!--<div class="line b-green" v-if="data.cscore>60 && data.cscore<=80"-->
            <!--:style="{width:(data.cscore/100)*355+'px'}"></div>-->
            <!--<div class="line b-blue" v-if="data.cscore>80 && data.cscore<=100"-->
            <!--:style="{width:(data.cscore/100)*355+'px'}"></div>-->
            <!--</div>-->
            <!--</td>-->
            <!--</tr>-->

            <!--</tbody>-->
            <!--</table>-->
            <!--</div>-->

            <!--</div>-->
            <!--<div class="font-blue pdf-footer">-->
            <!--<p class="pull-left">测评网址：www.ymtest.com</p>-->
            <!--<p class="pull-right">测评方法、工具及报告设计已申请产权保护</p>-->
            <!--</div>-->
            <!--</div>-->
            <!--&lt;!&ndash;page 29&ndash;&gt;-->

            <!--&lt;!&ndash;page 30&ndash;&gt;-->
            <!--<div class="pdf-page">-->
            <!--<div class="pdf-header">-->
            <!--<img class="pull-left" src="../../assets/pdf/header-logo.png" height="39px">-->
            <!--<p class="pull-right pdf-page-seq"></p>-->
            <!--<p class="pull-right font-blue">高中生升学规划测评报告</p>-->
            <!--</div>-->
            <!--<div class=" pdf-content">-->

            <!--<div class="pdf-blue-title" id="42">-->
            <!--<img src="../../assets/pdf/title-trn.png" alt="">4.2最佳匹配职业与专业-->
            <!--</div>-->
            <!--<div class="pdf-border-paragraph m-b20">-->
            <!--<div class="pull-left blue-title m-b20">-->
            <!--最佳职业领域-->
            <!--</div>-->
            <!--<p>-->
            <!--通过对您的人格特性、兴趣倾向、一般认知潜能的三方面综合分析，您最适合从事{{bestCData.name}}领域的工作。-->
            <!--</p>-->
            <!--</div>-->
            <!--<div class="pdf-border-paragraph m-b20">-->
            <!--<div class="pull-left blue-title m-b20">-->
            <!--典型职业-->
            <!--</div>-->
            <!--<div class="left-block" v-for="(data,index) in bestCData.careers">-->
            <!--<div class="pull-left"></div>-->
            <!--<div class="text-container">-->
            <!--{{data.name }}-->
            <!--</div>-->
            <!--</div>-->

            <!--</div>-->
            <!--<div class="pdf-border-paragraph m-b20">-->
            <!--<div class="pull-left blue-title m-b20">-->
            <!--推荐专业及专业代码-->
            <!--</div>-->
            <!--<div class="left-block" v-for="(data,index) in bestCData.majors">-->
            <!--<div class="pull-left"></div>-->
            <!--<div class="text-container">{{data.name}}（{{data.code }}）-->
            <!--</div>-->
            <!--</div>-->
            <!--</div>-->


            <!--</div>-->
            <!--<div class="font-blue pdf-footer">-->
            <!--<p class="pull-left">测评网址：www.ymtest.com</p>-->
            <!--<p class="pull-right">测评方法、工具及报告设计已申请产权保护</p>-->
            <!--</div>-->
            <!--</div>-->
            <!--&lt;!&ndash;page 30&ndash;&gt;-->

            <!--&lt;!&ndash;page 31&ndash;&gt;-->
            <!--<div class="pdf-page">-->
            <!--<div class="pdf-header">-->
            <!--<img class="pull-left" src="../../assets/pdf/header-logo.png" height="39px">-->
            <!--<p class="pull-right pdf-page-seq"></p>-->
            <!--<p class="pull-right font-blue">高中生升学规划测评报告</p>-->
            <!--</div>-->
            <!--<div class=" pdf-content">-->

            <!--<div class="pdf-blue-title pdf-yellow-title">-->
            <!--<img src="../../assets/pdf/title-trn.png" alt="">4.2.1最佳职业深度剖析-->
            <!--</div>-->

            <!--<div class="pdf-blue-title pdf-purple-title">-->
            <!--<img src="../../assets/pdf/title-trn.png" alt="">（1）核心人格结果评估-->
            <!--</div>-->

            <!--<div class="pdf-border-paragraph">-->
            <!--<p>-->
            <!--在下表中人格水平值是测试个体在各项人格维度中的水平大小；常模范围是群体中大多数人在该项人格维度上的水平范围。-->
            <!--</p>-->
            <!--</div>-->

            <!--<div class="table-container">-->
            <!--<div class="table-title">{{bestCData.name}}职业核心人格评估详细结果</div>-->
            <!--<table>-->
            <!--<thead>-->
            <!--<tr>-->
            <!--<th width>核心人格</th>-->
            <!--<th>人格水平值</th>-->
            <!--<th>常模范围</th>-->
            <!--<th width="70">非常低</th>-->
            <!--<th width="70">比较低</th>-->
            <!--<th width="70">一般</th>-->
            <!--<th width="70">比较好</th>-->
            <!--<th width="70">非常好</th>-->
            <!--</tr>-->
            <!--</thead>-->
            <!--<tbody>-->
            <!--<tr v-for="data in coreCharacterData">-->
            <!--<td class="bg-blue">{{data.name }}</td>-->
            <!--<td>{{data.score}}</td>-->
            <!--<td>{{data.lnorm}}~{{data.rnorm}}</td>-->
            <!--<td colspan="5">-->
            <!--<div class="score-line">-->
            <!--<div class="line b-red" v-if="data.grade==1" :style="{width:10+'%'}"></div>-->
            <!--<div class="line b-orange" v-if="data.grade==2"-->
            <!--:style="{width:30+'%'}"></div>-->
            <!--<div class="line b-yellow" v-if="data.grade==3"-->
            <!--:style="{width:50+'%'}"></div>-->
            <!--<div class="line b-green" v-if="data.grade==4"-->
            <!--:style="{width:70+'%'}"></div>-->
            <!--<div class="line b-blue" v-if="data.grade==5"-->
            <!--:style="{width:90+'%'}"></div>-->
            <!--</div>-->
            <!--</td>-->
            <!--</tr>-->
            <!--</tbody>-->
            <!--</table>-->
            <!--</div>-->
            <!--<div class="pdf-blue-title pdf-purple-title">-->
            <!--<img src="../../assets/pdf/title-trn.png" alt="">（2）核心人格分析-->
            <!--</div>-->
            <!--<div class="pdf-border-paragraph m-b15" v-for="(data,index) in coreCharacter.comments"-->
            <!--v-if="index<2">-->
            <!--<div class="pull-left blue-title m-b20">-->
            <!--{{data.name}}-->
            <!--</div>-->
            <!--<p>-->
            <!--{{data.comment}}-->
            <!--</p>-->
            <!--</div>-->
            <!--</div>-->
            <!--<div class="font-blue pdf-footer">-->
            <!--<p class="pull-left">测评网址：www.ymtest.com</p>-->
            <!--<p class="pull-right">测评方法、工具及报告设计已申请产权保护</p>-->
            <!--</div>-->
            <!--</div>-->
            <!--&lt;!&ndash;page 31&ndash;&gt;-->

            <!--&lt;!&ndash;page 32&ndash;&gt;-->
            <!--<div class="pdf-page">-->
            <!--<div class="pdf-header">-->
            <!--<img class="pull-left" src="../../assets/pdf/header-logo.png" height="39px">-->
            <!--<p class="pull-right pdf-page-seq"></p>-->
            <!--<p class="pull-right font-blue">高中生升学规划测评报告</p>-->
            <!--</div>-->
            <!--<div class=" pdf-content">-->
            <!--<div class="pdf-border-paragraph m-b15" v-for="(data,index) in coreCharacter.comments"-->
            <!--v-if="index>1">-->
            <!--<div class="pull-left blue-title m-b20">-->
            <!--{{data.name}}-->
            <!--</div>-->
            <!--<p>-->
            <!--{{data.comment}}-->
            <!--</p>-->
            <!--</div>-->
            <!--</div>-->
            <!--<div class="font-blue pdf-footer">-->
            <!--<p class="pull-left">测评网址：www.ymtest.com</p>-->
            <!--<p class="pull-right">测评方法、工具及报告设计已申请产权保护</p>-->
            <!--</div>-->
            <!--</div>-->
            <!--&lt;!&ndash;page 32&ndash;&gt;-->

            <!--&lt;!&ndash;page 33&ndash;&gt;-->
            <!--<div class="pdf-page">-->
            <!--<div class="pdf-header">-->
            <!--<img class="pull-left" src="../../assets/pdf/header-logo.png" height="39px">-->
            <!--<p class="pull-right pdf-page-seq"></p>-->
            <!--<p class="pull-right font-blue">高中生升学规划测评报告</p>-->
            <!--</div>-->
            <!--<div class=" pdf-content">-->
            <!--<div class="pdf-blue-title pdf-purple-title">-->
            <!--<img src="../../assets/pdf/title-trn.png" alt="">（3）核心潜能结果评估-->
            <!--</div>-->
            <!--<div class="pdf-border-paragraph m-b15">-->
            <!--<p>-->
            <!--在下表中潜能水平值是测试个体在各项潜能中的水平大小；常模范围是群体中大多数人在该项潜能上的水平范围；出众百分数是与同类型群体相比在该项潜能上的优势程度。-->
            <!--</p>-->
            <!--</div>-->
            <!--<div class="table-container">-->
            <!--<div class="table-title">{{bestCData.name}}职业核心潜能评估详细结果</div>-->
            <!--<table>-->
            <!--<thead>-->
            <!--<tr>-->
            <!--<th width>认知潜能</th>-->
            <!--<th>潜能水平值</th>-->
            <!--<th>常模范围</th>-->
            <!--<th>出众百分比</th>-->
            <!--<th width="70">非常低</th>-->
            <!--<th width="70">比较低</th>-->
            <!--<th width="70">一般</th>-->
            <!--<th width="70">比较好</th>-->
            <!--<th width="70">非常好</th>-->
            <!--</tr>-->
            <!--</thead>-->
            <!--<tbody>-->
            <!--<tr v-for="data in coreCognitionData">-->
            <!--<td class="bg-blue">{{data.name }}</td>-->
            <!--<td>{{data.score}}</td>-->
            <!--<td>{{data.lnorm}}~{{data.rnorm}}</td>-->
            <!--<td>{{data.percent*100 | toFixed(2)}}%</td>-->

            <!--<td colspan="5">-->
            <!--<div class="score-line">-->
            <!--<div class="line b-red" v-if="data.grade==1" :style="{width:10+'%'}"></div>-->
            <!--<div class="line b-orange" v-if="data.grade==2"-->
            <!--:style="{width:30+'%'}"></div>-->
            <!--<div class="line b-yellow" v-if="data.grade==3"-->
            <!--:style="{width:50+'%'}"></div>-->
            <!--<div class="line b-green" v-if="data.grade==4"-->
            <!--:style="{width:70+'%'}"></div>-->
            <!--<div class="line b-blue" v-if="data.grade==5"-->
            <!--:style="{width:90+'%'}"></div>-->
            <!--</div>-->
            <!--</td>-->
            <!--</tr>-->
            <!--</tbody>-->
            <!--</table>-->
            <!--</div>-->
            <!--<div class="pdf-blue-title pdf-purple-title">-->
            <!--<img src="../../assets/pdf/title-trn.png" alt="">（4）核心潜能分析-->
            <!--</div>-->
            <!--<div class="pdf-border-paragraph m-b15" v-for="(data,index) in coreCognition.comments"-->
            <!--v-if="index==0">-->
            <!--<div class="pull-left blue-title m-b20">-->
            <!--{{data.name}}-->
            <!--</div>-->
            <!--<p>-->
            <!--{{data.comment}}-->
            <!--</p>-->
            <!--</div>-->
            <!--</div>-->
            <!--<div class="font-blue pdf-footer">-->
            <!--<p class="pull-left">测评网址：www.ymtest.com</p>-->
            <!--<p class="pull-right">测评方法、工具及报告设计已申请产权保护</p>-->
            <!--</div>-->
            <!--</div>-->
            <!--&lt;!&ndash;page 33&ndash;&gt;-->

            <!--&lt;!&ndash;page 34&ndash;&gt;-->
            <!--<div class="pdf-page">-->
            <!--<div class="pdf-header">-->
            <!--<img class="pull-left" src="../../assets/pdf/header-logo.png" height="39px">-->
            <!--<p class="pull-right pdf-page-seq"></p>-->
            <!--<p class="pull-right font-blue">高中生升学规划测评报告</p>-->
            <!--</div>-->
            <!--<div class=" pdf-content">-->
            <!--<div class="pdf-border-paragraph m-b15" v-for="(data,index) in coreCognition.comments"-->
            <!--v-if="index>0 && index<4">-->
            <!--<div class="pull-left blue-title m-b20">-->
            <!--{{data.name}}-->
            <!--</div>-->
            <!--<p>-->
            <!--{{data.comment}}-->
            <!--</p>-->
            <!--</div>-->
            <!--</div>-->
            <!--<div class="font-blue pdf-footer">-->
            <!--<p class="pull-left">测评网址：www.ymtest.com</p>-->
            <!--<p class="pull-right">测评方法、工具及报告设计已申请产权保护</p>-->
            <!--</div>-->
            <!--</div>-->
            <!--&lt;!&ndash;page 34&ndash;&gt;-->

            <!--&lt;!&ndash;page 34 补充&ndash;&gt;-->
            <!--<div class="pdf-page" v-if="coreCommentsLen>4">-->
            <!--<div class="pdf-header">-->
            <!--<img class="pull-left" src="../../assets/pdf/header-logo.png" height="39px">-->
            <!--<p class="pull-right pdf-page-seq"></p>-->
            <!--<p class="pull-right font-blue">高中生升学规划测评报告</p>-->
            <!--</div>-->
            <!--<div class=" pdf-content">-->
            <!--<div class="pdf-border-paragraph m-b15" v-for="(data,index) in coreCognition.comments"-->
            <!--v-if="index>3">-->
            <!--<div class="pull-left blue-title m-b20">-->
            <!--{{data.name}}-->
            <!--</div>-->
            <!--<p>-->
            <!--{{data.comment}}-->
            <!--</p>-->
            <!--</div>-->
            <!--</div>-->
            <!--<div class="font-blue pdf-footer">-->
            <!--<p class="pull-left">测评网址：www.ymtest.com</p>-->
            <!--<p class="pull-right">测评方法、工具及报告设计已申请产权保护</p>-->
            <!--</div>-->
            <!--</div>-->
            <!--&lt;!&ndash;page 34 补充&ndash;&gt;-->

            <!--&lt;!&ndash;page 35&ndash;&gt;-->
            <!--<div class="pdf-page">-->
            <!--<div class="pdf-header">-->
            <!--<img class="pull-left" src="../../assets/pdf/header-logo.png" height="39px">-->
            <!--<p class="pull-right pdf-page-seq"></p>-->
            <!--<p class="pull-right font-blue">高中生升学规划测评报告</p>-->
            <!--</div>-->
            <!--<div class=" pdf-content">-->
            <!--<div class="pdf-blue-title pdf-purple-title">-->
            <!--<img src="../../assets/pdf/title-trn.png" alt="">（5）兴趣倾向分析-->
            <!--</div>-->
            <!--<div class="pdf-border-paragraph m-b20">-->
            <!--<p>-->
            <!--{{bestCData.comment}}-->
            <!--</p>-->
            <!--</div>-->
            <!--<div class="pdf-blue-title" id="43">-->
            <!--<img src="../../assets/pdf/title-trn.png" alt="">4.3第二匹配职业与专业-->
            <!--</div>-->
            <!--<div class="pdf-border-paragraph m-b20">-->
            <!--<div class="pull-left blue-title m-b20">-->
            <!--第二匹配职业领域-->
            <!--</div>-->
            <!--<p>-->
            <!--由于您个人内在或外在的因素限制，您可能会难以选择推荐的最佳职业领域。根据您的人格特性、兴趣倾向、一般认知潜能的三方面综合分析，为您提供第二匹配职业领域，根据分析，您比较适合从事{{secondCData.name}}领域的工作。-->
            <!--</p>-->
            <!--</div>-->
            <!--<div class="pdf-border-paragraph m-b20">-->

            <!--<div class="pull-left blue-title m-b20">-->
            <!--典型职业-->
            <!--</div>-->
            <!--<div class="left-block" v-for="(data,index) in secondCData.careers">-->
            <!--<div class="pull-left"></div>-->
            <!--<div class="text-container">{{data.name}}-->
            <!--</div>-->
            <!--</div>-->
            <!--</div>-->
            <!--</div>-->
            <!--<div class="font-blue pdf-footer">-->
            <!--<p class="pull-left">测评网址：www.ymtest.com</p>-->
            <!--<p class="pull-right">测评方法、工具及报告设计已申请产权保护</p>-->
            <!--</div>-->
            <!--</div>-->
            <!--&lt;!&ndash;page 35&ndash;&gt;-->

            <!--&lt;!&ndash;page 36&ndash;&gt;-->
            <!--<div class="pdf-page">-->
            <!--<div class="pdf-header">-->
            <!--<img class="pull-left" src="../../assets/pdf/header-logo.png" height="39px">-->
            <!--<p class="pull-right pdf-page-seq"></p>-->
            <!--<p class="pull-right font-blue">高中生升学规划测评报告</p>-->
            <!--</div>-->
            <!--<div class=" pdf-content">-->

            <!--<div class="pdf-border-paragraph m-b20">-->
            <!--<div class="pull-left blue-title m-b20">-->
            <!--推荐专业及专业代码-->
            <!--</div>-->
            <!--<div class="left-block" v-for="(data,index) in secondCData.majors">-->
            <!--<div class="pull-left"></div>-->
            <!--<div class="text-container">-->
            <!--{{data.name}}（{{data.code}}）-->
            <!--</div>-->
            <!--</div>-->
            <!--</div>-->
            <!--<div class="pdf-border-paragraph m-b20">-->
            <!--<p>-->
            <!--{{secondCData.comment}}-->
            <!--</p>-->
            <!--</div>-->
            <!--</div>-->
            <!--<div class="font-blue pdf-footer">-->
            <!--<p class="pull-left">测评网址：www.ymtest.com</p>-->
            <!--<p class="pull-right">测评方法、工具及报告设计已申请产权保护</p>-->
            <!--</div>-->
            <!--</div>-->
            <!--&lt;!&ndash;page 36&ndash;&gt;-->

            <!--&lt;!&ndash;page 37&ndash;&gt;-->
            <!--<div class="pdf-page">-->
            <!--<div class="pdf-header">-->
            <!--<img class="pull-left" src="../../assets/pdf/header-logo.png" height="39px">-->
            <!--<p class="pull-right pdf-page-seq"></p>-->
            <!--<p class="pull-right font-blue">高中生升学规划测评报告</p>-->
            <!--</div>-->
            <!--<div class=" pdf-content">-->
            <!--<div class="pdf-blue-title" id="44">-->
            <!--<img src="../../assets/pdf/title-trn.png" alt="">4.4第三匹配职业与专业-->
            <!--</div>-->
            <!--<div class="pdf-border-paragraph m-b20">-->

            <!--<div class="pull-left blue-title m-b20">-->
            <!--第三匹配职业领域-->
            <!--</div>-->
            <!--<p>-->
            <!--由于您个人内在或外在的因素限制，您可能会难以选择推荐的前两类职业领域。根据您的人格特性、兴趣倾向、一般认知潜能的三方面综合分析，为您提供第三匹配职业领域，根据分析，您比较适合从事{{thirdCData.name}}领域的工作。-->
            <!--</p>-->
            <!--</div>-->
            <!--<div class="pdf-border-paragraph m-b20">-->

            <!--<div class="pull-left blue-title m-b20">-->
            <!--典型职业-->
            <!--</div>-->
            <!--<div class="left-block" v-for="(data,index) in thirdCData.careers">-->
            <!--<div class="pull-left"></div>-->
            <!--<div class="text-container">{{data.name}}-->
            <!--</div>-->
            <!--</div>-->

            <!--</div>-->

            <!--&lt;!&ndash;<div class="pdf-border-paragraph m-b20">&ndash;&gt;-->
            <!--&lt;!&ndash;<p>&ndash;&gt;-->
            <!--&lt;!&ndash;{{thirdCData.comment}}&ndash;&gt;-->
            <!--&lt;!&ndash;</p>&ndash;&gt;-->
            <!--&lt;!&ndash;</div>&ndash;&gt;-->

            <!--</div>-->
            <!--<div class="font-blue pdf-footer">-->
            <!--<p class="pull-left">测评网址：www.ymtest.com</p>-->
            <!--<p class="pull-right">测评方法、工具及报告设计已申请产权保护</p>-->
            <!--</div>-->
            <!--</div>-->
            <!--&lt;!&ndash;page 37&ndash;&gt;-->

            <!--&lt;!&ndash;page 37 补充&ndash;&gt;-->
            <!--<div class="pdf-page">-->
            <!--<div class="pdf-header">-->
            <!--<img class="pull-left" src="../../assets/pdf/header-logo.png" height="39px">-->
            <!--<p class="pull-right pdf-page-seq"></p>-->
            <!--<p class="pull-right font-blue">高中生升学规划测评报告</p>-->
            <!--</div>-->
            <!--<div class=" pdf-content">-->

            <!--<div class="pdf-border-paragraph m-b20">-->
            <!--<div class="pull-left blue-title m-b20">-->
            <!--推荐专业及专业代码-->
            <!--</div>-->
            <!--<div class="left-block" v-for="(data,index) in thirdCData.majors">-->
            <!--<div class="pull-left"></div>-->
            <!--<div class="text-container">-->
            <!--{{data.name}}（{{data.code}}）-->
            <!--</div>-->
            <!--</div>-->

            <!--</div>-->
            <!--<div class="pdf-border-paragraph m-b20">-->
            <!--<p>-->
            <!--{{thirdCData.comment}}-->
            <!--</p>-->
            <!--</div>-->

            <!--</div>-->
            <!--<div class="font-blue pdf-footer">-->
            <!--<p class="pull-left">测评网址：www.ymtest.com</p>-->
            <!--<p class="pull-right">测评方法、工具及报告设计已申请产权保护</p>-->
            <!--</div>-->
            <!--</div>-->
            <!--&lt;!&ndash;page 37 补充&ndash;&gt;-->

            <!--&lt;!&ndash;page 38&ndash;&gt;-->
            <!--<div class="pdf-page">-->
            <!--<div class="pdf-header">-->
            <!--<img class="pull-left" src="../../assets/pdf/header-logo.png" height="39px">-->
            <!--<p class="pull-right pdf-page-seq"></p>-->
            <!--<p class="pull-right font-blue">高中生升学规划测评报告</p>-->
            <!--</div>-->
            <!--<div class=" pdf-content">-->
            <!--<div class="font-blue pdf-page-title"><span>第五部分 学习特征评估</span></div>-->
            <!--<div class="pdf-border-paragraph m-b20">-->
            <!--<p>-->
            <!--学习，是指通过阅读、听讲、思考、研究、实践等途径获得知识或技能的过程。狭义的学习指学生的学习，是有目的、有计划、有组织、有系统地进行，在较短时间内接受前人所累积的科学文化知识、技能，并以此来充实自己的过程。检验一个人的学习是否成功，通常看两个指标，一是学习效率，二是学习效果。但很多学习者在学习过程中，准备是仓促的，行为是盲目的，自然就很难达到理想的效果。造成这种现象的主要原因在于，他们没有根据自身潜在的特质形成独特高效的学习谋略，也就是说，他们还未真正地学会学习。-->
            <!--</p>-->
            <!--<p>-->
            <!--本报告是对您的学习特征进行分析与评价。包括基本学习能力、学习态度、学习过程、学习风格四个方面的内容。学习基本能力分析的是你的学习能力在群体中所表现出的优势与缺陷，指导你学习能力的培养；学习态度将评价的是你对学习的肯定或否定的思想倾向、情感倾向、行为方式，认清自己学习态度的好坏；学习过程分析评价你在学习过程中的执行方式，完善自己在学习过程中的不足；学习风格是你持续一贯的带有个性特征的学习方式和学习倾向，指导你良好学习习惯的养成。-->
            <!--</p>-->
            <!--</div>-->
            <!--<div class="pdf-blue-title" id="51">-->
            <!--<img src="../../assets/pdf/title-trn.png" alt="">5.1基本学习能力-->
            <!--</div>-->
            <!--<div class="pdf-border-paragraph m-b20">-->
            <!--<p>-->
            <!--高中是学生的学习潜能能够得到有效提高的最佳时期，能力中有一般能力和特殊能力之分，一般能力是指观察、记忆、思维、想象等能力，它是人们完成任何活动所不可或缺的，是能力中最主要的基本能力；特殊能力是指人们从事特殊职业或专业需要的能力。虽然不同的学科对人有不同的能力要求，但总的来说，每个人的信息加工能力、工作记忆能力、表象能力、思维转换能力、逻辑推理能力是一个人进行学习活动，完成整个学习任务所应具备的基本学习能力。一个人学习能力的强弱会决定其掌握各种知识的成效，影响其学习效率的高低。因而越早发现自身潜能的优势与不足才能更好的扬长补短，学会学习。-->
            <!--</p>-->
            <!--</div>-->
            <!--</div>-->
            <!--<div class="font-blue pdf-footer">-->
            <!--<p class="pull-left">测评网址：www.ymtest.com</p>-->
            <!--<p class="pull-right">测评方法、工具及报告设计已申请产权保护</p>-->
            <!--</div>-->
            <!--</div>-->
            <!--&lt;!&ndash;page 38&ndash;&gt;-->

            <!--&lt;!&ndash;page 39&ndash;&gt;-->
            <!--<div class="pdf-page">-->
            <!--<div class="pdf-header">-->
            <!--<img class="pull-left" src="../../assets/pdf/header-logo.png" height="39px">-->
            <!--<p class="pull-right pdf-page-seq"></p>-->
            <!--<p class="pull-right font-blue">高中生升学规划测评报告</p>-->
            <!--</div>-->
            <!--<div class=" pdf-content">-->
            <!--<div class="pdf-blue-title pdf-yellow-title" id="511">-->
            <!--<img src="../../assets/pdf/title-trn.png" alt="">5.1.1基本学习能力评估结果-->
            <!--</div>-->

            <!--<div class="pdf-border-paragraph m-b15">-->
            <!--<p>-->
            <!--在下表中学习能力水平值是测试个体在各项学习能力中的水平大小；常模范围是群体中大多数人在该项学习能力上的水平范围；出众百分数是与同类型群体相比在该项学习能力上的优势程度。-->
            <!--</p>-->
            <!--</div>-->

            <!--<div class="table-container">-->
            <!--<div class="table-title">基本学习能力指标评估详细结果</div>-->
            <!--<table>-->
            <!--<thead>-->
            <!--<tr>-->
            <!--<th width>基本学习能力</th>-->
            <!--<th>学习能力水平值</th>-->
            <!--<th>常模范围</th>-->
            <!--<th>出众百分比</th>-->
            <!--<th width="70">非常低</th>-->
            <!--<th width="70">比较低</th>-->
            <!--<th width="70">一般</th>-->
            <!--<th width="70">比较好</th>-->
            <!--<th width="70">非常好</th>-->
            <!--</tr>-->
            <!--</thead>-->
            <!--<tbody>-->
            <!--<tr v-for="data in abilityNorm">-->
            <!--<td class="bg-blue">{{data.name }}</td>-->
            <!--<td>{{data.score}}</td>-->
            <!--<td>{{data.lnorm}}~{{data.rnorm}}</td>-->
            <!--<td>{{data.percent*100 | toFixed(2)}}%</td>-->
            <!--<td colspan="5">-->
            <!--<div class="score-line">-->
            <!--<div class="line b-red" v-if="data.grade==1" :style="{width:10+'%'}"></div>-->
            <!--<div class="line b-orange" v-if="data.grade==2"-->
            <!--:style="{width:30+'%'}"></div>-->
            <!--<div class="line b-yellow" v-if="data.grade==3"-->
            <!--:style="{width:50+'%'}"></div>-->
            <!--<div class="line b-green" v-if="data.grade==4"-->
            <!--:style="{width:70+'%'}"></div>-->
            <!--<div class="line b-blue" v-if="data.grade==5"-->
            <!--:style="{width:90+'%'}"></div>-->
            <!--</div>-->
            <!--</td>-->
            <!--</tr>-->
            <!--</tbody>-->
            <!--</table>-->
            <!--</div>-->

            <!--<div class="pdf-blue-title pdf-yellow-title" id="512">-->
            <!--<img src="../../assets/pdf/title-trn.png" alt="">5.1.2基本学习能力分析-->
            <!--</div>-->

            <!--<div class="pdf-border-paragraph m-b20" v-for="(data,index) in abilityTexts" v-if="index<1">-->
            <!--<div class="pull-left blue-title m-b20">-->
            <!--{{data.name}}-->
            <!--</div>-->
            <!--<p>-->
            <!--{{data.comment}}-->
            <!--</p>-->
            <!--</div>-->

            <!--</div>-->
            <!--<div class="font-blue pdf-footer">-->
            <!--<p class="pull-left">测评网址：www.ymtest.com</p>-->
            <!--<p class="pull-right">测评方法、工具及报告设计已申请产权保护</p>-->
            <!--</div>-->
            <!--</div>-->
            <!--&lt;!&ndash;page 39&ndash;&gt;-->

            <!--&lt;!&ndash;page 40&ndash;&gt;-->
            <!--<div class="pdf-page">-->
            <!--<div class="pdf-header">-->
            <!--<img class="pull-left" src="../../assets/pdf/header-logo.png" height="39px">-->
            <!--<p class="pull-right pdf-page-seq"></p>-->
            <!--<p class="pull-right font-blue">高中生升学规划测评报告</p>-->
            <!--</div>-->
            <!--<div class=" pdf-content">-->
            <!--<div class="pdf-border-paragraph m-b20" style="line-height:38px"-->
            <!--v-for="(data,index) in abilityTexts"-->
            <!--v-if="index>0 && index<4">-->
            <!--<div class="pull-left blue-title m-b20">-->
            <!--{{data.name}}-->
            <!--</div>-->
            <!--<p>-->
            <!--{{data.comment}}-->
            <!--</p>-->
            <!--</div>-->
            <!--</div>-->
            <!--<div class="font-blue pdf-footer">-->
            <!--<p class="pull-left">测评网址：www.ymtest.com</p>-->
            <!--<p class="pull-right">测评方法、工具及报告设计已申请产权保护</p>-->
            <!--</div>-->
            <!--</div>-->
            <!--&lt;!&ndash;page 40&ndash;&gt;-->

            <!--&lt;!&ndash;page 40 补充&ndash;&gt;-->
            <!--<div class="pdf-page">-->
            <!--<div class="pdf-header">-->
            <!--<img class="pull-left" src="../../assets/pdf/header-logo.png" height="39px">-->
            <!--<p class="pull-right pdf-page-seq"></p>-->
            <!--<p class="pull-right font-blue">高中生升学规划测评报告</p>-->
            <!--</div>-->
            <!--<div class=" pdf-content">-->
            <!--<div class="pdf-border-paragraph m-b20" v-for="(data,index) in abilityTexts" v-if="index>3">-->
            <!--<div class="pull-left blue-title m-b20">-->
            <!--{{data.name}}-->
            <!--</div>-->
            <!--<p>-->
            <!--{{data.comment}}-->
            <!--</p>-->
            <!--</div>-->
            <!--</div>-->
            <!--<div class="font-blue pdf-footer">-->
            <!--<p class="pull-left">测评网址：www.ymtest.com</p>-->
            <!--<p class="pull-right">测评方法、工具及报告设计已申请产权保护</p>-->
            <!--</div>-->
            <!--</div>-->
            <!--&lt;!&ndash;page 40 补充&ndash;&gt;-->

            <!--&lt;!&ndash;page 41&ndash;&gt;-->
            <!--<div class="pdf-page">-->
            <!--<div class="pdf-header">-->
            <!--<img class="pull-left" src="../../assets/pdf/header-logo.png" height="39px">-->
            <!--<p class="pull-right pdf-page-seq"></p>-->
            <!--<p class="pull-right font-blue">高中生升学规划测评报告</p>-->
            <!--</div>-->
            <!--<div class=" pdf-content">-->
            <!--<div class="pdf-blue-title" id="52">-->
            <!--<img src="../../assets/pdf/title-trn.png" alt="">5.2学习态度-->
            <!--</div>-->
            <!--<div class="pdf-border-paragraph m-b20">-->
            <!--<p>-->
            <!--态度是个体对特定对象（人、观念或者事件等）所持有的稳定的心理倾向。这种心理倾向蕴含着个体的主观评价以及由此产生的行为倾向性。学习态度是指学习者对学习较为持久的肯定或否定的行为倾向或内部反应的准备状态。它通常可以从学生对待学习的认知、情感和行为意向来解释说明。认知成分是指学生对学习活动或所学课程的一种带有评价意义的认识和理解，它反映着学生对学习的价值的认识，它是学习态度的基础。情感成分是指学生伴随认知而产生的情绪或情感体验，如对学习的喜欢或厌恶等，由于情感本身就反映出学生的学习态度，因此情感成分是态度的核心。行为意向则是指学生对学习的反应倾向，即行为的准备状态，准备对学习做出某种反应。一般来说，学习态度的上述三种成分是相互协调一致的。-->
            <!--</p>-->
            <!--<p>-->
            <!--学习态度对于学习行为具有调节作用，其表现在对学习对象的选择上，心理学家琼斯的某项实验证明，态度具有某种过滤作用；当然其还表现在学生对学习环境的反应上，当学生在学习态度于教学环境上保持一致时，就积极努力地学习，但反之就会出现回避学习环境并产生不利于学习的行为。-->
            <!--</p>-->
            <!--<p>-->
            <!--学习态度对学习效果也是具有影响的，根据心理学家麦独孤和史密斯的一项实验中发现，积极的学习态度对学习速度有促进作用。如在学校情境中，如果其他条件基本相等，学习态度好的学生，其学习效果总是远胜于学习态度差的。-->
            <!--</p>-->
            <!--<p>-->
            <!--学生在学习中对所受挫折的耐受力，与学生的学习态度是密切相关的。如，一个认为学习很有意义、喜爱学习的学生，当他（她）在学习中遇到困难与阻力的时候，耐受力就高，表现出吃苦耐劳、百折不屈和勇往直前的精神。反之，耐受力较低的，往往表现出灰心丧气，甚至一蹶不振。-->
            <!--</p>-->
            <!--</div>-->
            <!--</div>-->
            <!--<div class="font-blue pdf-footer">-->
            <!--<p class="pull-left">测评网址：www.ymtest.com</p>-->
            <!--<p class="pull-right">测评方法、工具及报告设计已申请产权保护</p>-->
            <!--</div>-->
            <!--</div>-->
            <!--&lt;!&ndash;page 41&ndash;&gt;-->

            <!--&lt;!&ndash;page 42&ndash;&gt;-->
            <!--<div class="pdf-page">-->
            <!--<div class="pdf-header">-->
            <!--<img class="pull-left" src="../../assets/pdf/header-logo.png" height="39px">-->
            <!--<p class="pull-right pdf-page-seq"></p>-->
            <!--<p class="pull-right font-blue">高中生升学规划测评报告</p>-->
            <!--</div>-->
            <!--<div class=" pdf-content">-->
            <!--<div class="pdf-blue-title pdf-yellow-title" id="521">-->
            <!--<img src="../../assets/pdf/title-trn.png" alt="">5.2.1学习态度评估结果-->
            <!--</div>-->
            <!--<div class="pdf-border-paragraph m-b20">-->
            <!--<p>-->
            <!--在下表中学习态度水平值是测试个体在各项学习态度指标中的水平大小，值越高则在该指标上学习态度越好。常模范围是群体中大多数人在该项上的水平范围，图中评估的学习态度水平值高于常模范围，则说明在该学习态度指标上较大多数人好；若学习态度水平值在常模范围内，则说明该学习态度指标与大多数人无明显差异；若学习态度水平值低于常模范围，则说明在该学习态度指标上较大多数人差；最终学习态度的好坏由测试者认知、情感、行为意向三个指标共同决定。-->

            <!--</p>-->
            <!--</div>-->
            <!--<div class="table-container table-55-container">-->
            <!--<div class="table-title">学习态度指标评估详细结果</div>-->
            <!--<table>-->
            <!--<thead>-->
            <!--<tr>-->
            <!--<th rowspan="2">学习态度指标</th>-->
            <!--<th rowspan="2">学习态度水平值</th>-->
            <!--<th rowspan="2">常模范围</th>-->
            <!--<th width="70">非常差</th>-->
            <!--<th width="70">较差</th>-->
            <!--<th width="70">一般</th>-->
            <!--<th width="70">较好</th>-->
            <!--<th width="70">非常好</th>-->
            <!--</tr>-->
            <!--<tr>-->
            <!--<th width="70">1</th>-->
            <!--<th width="70">2</th>-->
            <!--<th width="70">3</th>-->
            <!--<th width="70">4</th>-->
            <!--<th width="70">5</th>-->
            <!--</tr>-->
            <!--</thead>-->
            <!--<tbody>-->
            <!--<tr v-for="data in attitudeNorm">-->
            <!--<td class="bg-blue">{{data.name }}</td>-->
            <!--<td>{{data.score | toFixed(2)}}</td>-->
            <!--<td>{{data.lnorm}}~{{data.rnorm}}</td>-->
            <!--<td colspan="5">-->
            <!--<div class="score-line">-->

            <!--<div class="line b-red" v-if="data.score<=1" :style="{width:data.score/5*355+'%'}"></div>-->
            <!--<div class="line b-orange" v-if="data.score>1 && data.score<=2"-->
            <!--:style="{width:data.score/5*355+'px'}"></div>-->
            <!--<div class="line b-yellow" v-if="data.score>2 && data.score<=3"-->
            <!--:style="{width:data.score/5*355+'px'}"></div>-->
            <!--<div class="line b-green" v-if="data.score>3 && data.score<=4"-->
            <!--:style="{width:data.score/5*355+'px'}"></div>-->
            <!--<div class="line b-blue" v-if="data.score>4 && data.score<=5"-->
            <!--:style="{width:data.score/5*355+'px'}"></div>-->
            <!--<div class="norm-line"-->
            <!--:style="{marginLeft:(data.lnorm/5)*355+'px',width:(data.rnorm-data.lnorm)/5*355+'px'}"></div>-->
            <!--</div>-->
            <!--</td>-->
            <!--</tr>-->
            <!--</tbody>-->
            <!--</table>-->
            <!--</div>-->
            <!--<div class="pdf-blue-title pdf-yellow-title" id="522">-->
            <!--<img src="../../assets/pdf/title-trn.png" alt="">5.2.2学习态度分析-->
            <!--</div>-->
            <!--<div class="pdf-border-paragraph m-b20" v-for="(data,index) in attitudeTexts" v-if="index<1">-->
            <!--<div class="pull-left blue-title m-b20">-->
            <!--{{data.name}}-->
            <!--</div>-->
            <!--<p>-->
            <!--{{data.comment}}-->
            <!--</p>-->
            <!--</div>-->
            <!--</div>-->
            <!--<div class="font-blue pdf-footer">-->
            <!--<p class="pull-left">测评网址：www.ymtest.com</p>-->
            <!--<p class="pull-right">测评方法、工具及报告设计已申请产权保护</p>-->
            <!--</div>-->
            <!--</div>-->
            <!--&lt;!&ndash;page 42&ndash;&gt;-->

            <!--&lt;!&ndash;page 43&ndash;&gt;-->
            <!--<div class="pdf-page">-->
            <!--<div class="pdf-header">-->
            <!--<img class="pull-left" src="../../assets/pdf/header-logo.png" height="39px">-->
            <!--<p class="pull-right pdf-page-seq"></p>-->
            <!--<p class="pull-right font-blue">高中生升学规划测评报告</p>-->
            <!--</div>-->
            <!--<div class=" pdf-content">-->
            <!--<div class="pdf-border-paragraph m-b20" v-for="(data,index) in attitudeTexts" v-if="index>0">-->
            <!--<div class="pull-left blue-title m-b20">-->
            <!--{{data.name}}-->
            <!--</div>-->
            <!--<p>-->
            <!--{{data.comment}}-->
            <!--</p>-->
            <!--</div>-->
            <!--<div class="pdf-blue-title" id="53">-->
            <!--<img src="../../assets/pdf/title-trn.png" alt="">5.3学习过程-->
            <!--</div>-->
            <!--<div class="pdf-border-paragraph m-b20">-->
            <!--<p>-->
            <!--学习是一个很复杂的过程，需要从多方面进行分析。学习是如何发生的，如何进行的，它的结构是什么，历来人们从不同的观点和角度对它进行分析。-->
            <!--</p>-->
            <!--<p>本报告是对您的学习过程进行分析与描述。主要从学习计划、学习监控、学习调节与学习效率四个方面进行评估。</p>-->
            <!--</div>-->
            <!--</div>-->
            <!--<div class="font-blue pdf-footer">-->
            <!--<p class="pull-left">测评网址：www.ymtest.com</p>-->
            <!--<p class="pull-right">测评方法、工具及报告设计已申请产权保护</p>-->
            <!--</div>-->
            <!--</div>-->
            <!--&lt;!&ndash;page 43&ndash;&gt;-->

            <!--&lt;!&ndash;page 44&ndash;&gt;-->
            <!--<div class="pdf-page">-->
            <!--<div class="pdf-header">-->
            <!--<img class="pull-left" src="../../assets/pdf/header-logo.png" height="39px">-->
            <!--<p class="pull-right pdf-page-seq"></p>-->
            <!--<p class="pull-right font-blue">高中生升学规划测评报告</p>-->
            <!--</div>-->
            <!--<div class=" pdf-content">-->
            <!--<div class="pdf-blue-title pdf-yellow-title" id="531">-->
            <!--<img src="../../assets/pdf/title-trn.png" alt="">5.3.1学习过程评估结果-->
            <!--</div>-->
            <!--<div class="pdf-border-paragraph m-b20">-->
            <!--<p>-->
            <!--在下表中学习过程水平值是测试个体在各项学习过程指标中的水平大小，值越高则在该指标上学习过程越好。常模范围是群体中大多数人在该项上的水平范围，图中评估的学习过程水平值高于常模范围，则说明在该学习过程指标上较大多数人好；若学习过程水平值在常模范围内，则说明该学习过程指标与大多数人无明显差异；若学习过程水平值低于常模范围，则说明在该学习过程指标上较大多数人差。-->
            <!--</p>-->
            <!--</div>-->
            <!--<div class="table-container">-->
            <!--<div class="table-title">学习过程指标评估详细结果</div>-->
            <!--<table>-->
            <!--<thead>-->
            <!--<tr>-->
            <!--<th colspan="2">学习过程</th>-->
            <!--<th>学习过程水平值</th>-->
            <!--<th>常模范围</th>-->
            <!--<th width="110">较差</th>-->
            <!--<th width="110">一般</th>-->
            <!--<th width="110">较好</th>-->
            <!--</tr>-->
            <!--</thead>-->
            <!--<tbody>-->

            <!--<tr>-->
            <!--<td class="bg-blue" rowspan="3">学习计划</td>-->
            <!--<td class="bg-blue">{{processNorm1.name}}</td>-->
            <!--<td>{{processNorm1.score}}</td>-->
            <!--<td>{{processNorm1.lnorm}}~{{processNorm1.rnorm}}</td>-->
            <!--<td colspan="3">-->
            <!--<div class="score-line">-->
            <!--<div class="line b-red" v-if="processNorm1.grade==1" :style="{width:16.5+'%'}"></div>-->
            <!--<div class="line b-yellow" v-if="processNorm1.grade==2" :style="{width:50+'%'}"></div>-->
            <!--<div class="line b-blue" v-if="processNorm1.grade==3" :style="{width:83.5+'%'}"></div>-->
            <!--&lt;!&ndash;<div class="norm-line"&ndash;&gt;-->
            <!--&lt;!&ndash;:style="{marginLeft:(processNorm1.lnorm/5)*333+'px',width:(processNorm1.rnorm-processNorm1.lnorm)/5*355+'px'}"></div>&ndash;&gt;-->
            <!--</div>-->
            <!--</td>-->
            <!--</tr>-->

            <!--<tr>-->
            <!--<td class="bg-blue">{{processNorm2.name}}</td>-->
            <!--<td>{{processNorm2.score}}</td>-->
            <!--<td>{{processNorm2.lnorm}}~{{processNorm2.rnorm}}</td>-->
            <!--<td colspan="3">-->
            <!--<div class="score-line">-->
            <!--<div class="line b-red" v-if="processNorm2.grade==1" :style="{width:16.5+'%'}"></div>-->
            <!--<div class="line b-yellow" v-if="processNorm2.grade==2" :style="{width:50+'%'}"></div>-->
            <!--<div class="line b-blue" v-if="processNorm2.grade==3" :style="{width:83.5+'%'}"></div>-->
            <!--&lt;!&ndash;<div class="norm-line"&ndash;&gt;-->
            <!--&lt;!&ndash;:style="{marginLeft:(processNorm2.lnorm/5)*333+'px',width:(processNorm2.rnorm-processNorm2.lnorm)/5*355+'px'}"></div>&ndash;&gt;-->
            <!--</div>-->
            <!--</td>-->
            <!--</tr>-->

            <!--<tr>-->
            <!--<td class="bg-blue">{{processNorm3.name}}</td>-->
            <!--<td>{{processNorm3.score}}</td>-->
            <!--<td>{{processNorm3.lnorm}}~{{processNorm3.rnorm}}</td>-->
            <!--<td colspan="3">-->
            <!--<div class="score-line">-->
            <!--<div class="line b-red" v-if="processNorm3.grade==1" :style="{width:16.5+'%'}"></div>-->
            <!--<div class="line b-yellow" v-if="processNorm3.grade==2" :style="{width:50+'%'}"></div>-->
            <!--<div class="line b-blue" v-if="processNorm3.grade==3" :style="{width:83.5+'%'}"></div>-->
            <!--&lt;!&ndash;<div class="norm-line"&ndash;&gt;-->
            <!--&lt;!&ndash;:style="{marginLeft:(processNorm3.lnorm/5)*333+'px',width:(processNorm3.rnorm-processNorm3.lnorm)/5*355+'px'}"></div>&ndash;&gt;-->
            <!--</div>-->
            <!--</td>-->
            <!--</tr>-->

            <!--<tr>-->
            <!--<td class="bg-blue" rowspan="3">学习监控</td>-->
            <!--<td class="bg-blue">{{processNorm4.name}}</td>-->
            <!--<td>{{processNorm4.score}}</td>-->
            <!--<td>{{processNorm4.lnorm}}~{{processNorm4.rnorm}}</td>-->
            <!--<td colspan="3">-->
            <!--<div class="score-line">-->
            <!--<div class="line b-red" v-if="processNorm4.grade==1" :style="{width:16.5+'%'}"></div>-->
            <!--<div class="line b-yellow" v-if="processNorm4.grade==2" :style="{width:50+'%'}"></div>-->
            <!--<div class="line b-blue" v-if="processNorm4.grade==3" :style="{width:83.5+'%'}"></div>-->
            <!--&lt;!&ndash;<div class="norm-line"&ndash;&gt;-->
            <!--&lt;!&ndash;:style="{marginLeft:(processNorm4.lnorm/5)*333+'px',width:(processNorm4.rnorm-processNorm4.lnorm)/5*355+'px'}"></div>&ndash;&gt;-->
            <!--</div>-->
            <!--</td>-->
            <!--</tr>-->

            <!--<tr>-->
            <!--<td class="bg-blue">{{processNorm5.name}}</td>-->
            <!--<td>{{processNorm5.score}}</td>-->
            <!--<td>{{processNorm5.lnorm}}~{{processNorm5.rnorm}}</td>-->
            <!--<td colspan="3">-->
            <!--<div class="score-line">-->
            <!--<div class="line b-red" v-if="processNorm5.grade==1" :style="{width:16.5+'%'}"></div>-->
            <!--<div class="line b-yellow" v-if="processNorm5.grade==2" :style="{width:50+'%'}"></div>-->
            <!--<div class="line b-blue" v-if="processNorm5.grade==3" :style="{width:83.5+'%'}"></div>-->
            <!--&lt;!&ndash;<div class="norm-line"&ndash;&gt;-->
            <!--&lt;!&ndash;:style="{marginLeft:(processNorm5.lnorm/5)*333+'px',width:(processNorm5.rnorm-processNorm5.lnorm)/5*355+'px'}"></div>&ndash;&gt;-->
            <!--</div>-->
            <!--</td>-->
            <!--</tr>-->

            <!--<tr>-->
            <!--<td class="bg-blue">{{processNorm6.name}}</td>-->
            <!--<td>{{processNorm6.score}}</td>-->
            <!--<td>{{processNorm6.lnorm}}~{{processNorm6.rnorm}}</td>-->
            <!--<td colspan="3">-->
            <!--<div class="score-line">-->
            <!--<div class="line b-red" v-if="processNorm6.grade==1" :style="{width:16.5+'%'}"></div>-->
            <!--<div class="line b-yellow" v-if="processNorm6.grade==2" :style="{width:50+'%'}"></div>-->
            <!--<div class="line b-blue" v-if="processNorm6.grade==3" :style="{width:83.5+'%'}"></div>-->
            <!--&lt;!&ndash;<div class="norm-line"&ndash;&gt;-->
            <!--&lt;!&ndash;:style="{marginLeft:(processNorm6.lnorm/5)*333+'px',width:(processNorm6.rnorm-processNorm6.lnorm)/5*355+'px'}"></div>&ndash;&gt;-->
            <!--</div>-->
            <!--</td>-->
            <!--</tr>-->

            <!--<tr>-->
            <!--<td class="bg-blue" rowspan="3">学习调节</td>-->
            <!--<td class="bg-blue">{{processNorm7.name}}</td>-->
            <!--<td>{{processNorm7.score}}</td>-->
            <!--<td>{{processNorm7.lnorm}}~{{processNorm7.rnorm}}</td>-->
            <!--<td colspan="3">-->
            <!--<div class="score-line">-->
            <!--<div class="line b-red" v-if="processNorm7.grade==1" :style="{width:16.5+'%'}"></div>-->
            <!--<div class="line b-yellow" v-if="processNorm7.grade==2" :style="{width:50+'%'}"></div>-->
            <!--<div class="line b-blue" v-if="processNorm7.grade==3" :style="{width:83.5+'%'}"></div>-->
            <!--&lt;!&ndash;<div class="norm-line"&ndash;&gt;-->
            <!--&lt;!&ndash;:style="{marginLeft:(processNorm7.lnorm/5)*333+'px',width:(processNorm7.rnorm-processNorm7.lnorm)/5*355+'px'}"></div>&ndash;&gt;-->
            <!--</div>-->
            <!--</td>-->
            <!--</tr>-->

            <!--<tr>-->
            <!--<td class="bg-blue">{{processNorm8.name}}</td>-->
            <!--<td>{{processNorm8.score}}</td>-->
            <!--<td>{{processNorm8.lnorm}}~{{processNorm8.rnorm}}</td>-->
            <!--<td colspan="3">-->
            <!--<div class="score-line">-->
            <!--<div class="line b-red" v-if="processNorm8.grade==1" :style="{width:16.5+'%'}"></div>-->
            <!--<div class="line b-yellow" v-if="processNorm8.grade==2" :style="{width:50+'%'}"></div>-->
            <!--<div class="line b-blue" v-if="processNorm8.grade==3" :style="{width:83.5+'%'}"></div>-->
            <!--&lt;!&ndash;<div class="norm-line"&ndash;&gt;-->
            <!--&lt;!&ndash;:style="{marginLeft:(processNorm8.lnorm/5)*333+'px',width:(processNorm8.rnorm-processNorm8.lnorm)/5*355+'px'}"></div>&ndash;&gt;-->
            <!--</div>-->
            <!--</td>-->
            <!--</tr>-->

            <!--<tr>-->
            <!--<td class="bg-blue">{{processNorm9.name}}</td>-->
            <!--<td>{{processNorm9.score}}</td>-->
            <!--<td>{{processNorm9.lnorm}}~{{processNorm9.rnorm}}</td>-->
            <!--<td colspan="3">-->
            <!--<div class="score-line">-->
            <!--<div class="line b-red" v-if="processNorm9.grade==1" :style="{width:16.5+'%'}"></div>-->
            <!--<div class="line b-yellow" v-if="processNorm9.grade==2" :style="{width:50+'%'}"></div>-->
            <!--<div class="line b-blue" v-if="processNorm9.grade==3" :style="{width:83.5+'%'}"></div>-->
            <!--&lt;!&ndash;<div class="norm-line"&ndash;&gt;-->
            <!--&lt;!&ndash;:style="{marginLeft:(processNorm9.lnorm/5)*333+'px',width:(processNorm9.rnorm-processNorm9.lnorm)/5*355+'px'}"></div>&ndash;&gt;-->
            <!--</div>-->
            <!--</td>-->
            <!--</tr>-->

            <!--&lt;!&ndash;<tr>&ndash;&gt;-->
            <!--&lt;!&ndash;<td class="bg-blue" rowspan="3">学习效率</td>&ndash;&gt;-->
            <!--&lt;!&ndash;<td class="bg-blue">{{processNorm10.name}}</td>&ndash;&gt;-->
            <!--&lt;!&ndash;<td>{{processNorm10.score}}</td>&ndash;&gt;-->
            <!--&lt;!&ndash;<td>{{processNorm10.lnorm}}~{{processNorm10.rnorm}}</td>&ndash;&gt;-->
            <!--&lt;!&ndash;<td colspan="3">&ndash;&gt;-->
            <!--&lt;!&ndash;<div class="score-line">&ndash;&gt;-->
            <!--&lt;!&ndash;<div class="line b-red" v-if="processNorm10.grade==1" :style="{width:16.5+'%'}"></div>&ndash;&gt;-->
            <!--&lt;!&ndash;<div class="line b-yellow" v-if="processNorm10.grade==2" :style="{width:50+'%'}"></div>&ndash;&gt;-->
            <!--&lt;!&ndash;<div class="line b-blue" v-if="processNorm10.grade==3" :style="{width:83.5+'%'}"></div>&ndash;&gt;-->
            <!--&lt;!&ndash;&lt;!&ndash;<div class="norm-line"&ndash;&gt;&ndash;&gt;-->
            <!--&lt;!&ndash;&lt;!&ndash;:style="{marginLeft:(processNorm10.lnorm/5)*333+'px',width:(processNorm10.rnorm-processNorm10.lnorm)/5*355+'px'}"></div>&ndash;&gt;&ndash;&gt;-->
            <!--&lt;!&ndash;</div>&ndash;&gt;-->
            <!--&lt;!&ndash;</td>&ndash;&gt;-->
            <!--&lt;!&ndash;</tr>&ndash;&gt;-->

            <!--<tr>-->
            <!--<td class="bg-blue" rowspan="2">学习效率</td>-->
            <!--<td class="bg-blue">{{processNorm11.name}}</td>-->
            <!--<td>{{processNorm11.score}}</td>-->
            <!--<td>{{processNorm11.lnorm}}~{{processNorm11.rnorm}}</td>-->
            <!--<td colspan="3">-->
            <!--<div class="score-line">-->
            <!--<div class="line b-red" v-if="processNorm11.grade==1" :style="{width:16.5+'%'}"></div>-->
            <!--<div class="line b-yellow" v-if="processNorm11.grade==2" :style="{width:50+'%'}"></div>-->
            <!--<div class="line b-blue" v-if="processNorm11.grade==3" :style="{width:83.5+'%'}"></div>-->
            <!--&lt;!&ndash;<div class="norm-line"&ndash;&gt;-->
            <!--&lt;!&ndash;:style="{marginLeft:(processNorm11.lnorm/5)*333+'px',width:(processNorm11.rnorm-processNorm11.lnorm)/5*355+'px'}"></div>&ndash;&gt;-->
            <!--</div>-->
            <!--</td>-->
            <!--</tr>-->

            <!--<tr>-->
            <!--<td class="bg-blue">{{processNorm12.name}}</td>-->
            <!--<td>{{processNorm12.score}}</td>-->
            <!--<td>{{processNorm12.lnorm}}~{{processNorm12.rnorm}}</td>-->
            <!--<td colspan="3">-->
            <!--<div class="score-line">-->
            <!--<div class="line b-red" v-if="processNorm12.grade==1" :style="{width:16.5+'%'}"></div>-->
            <!--<div class="line b-yellow" v-if="processNorm12.grade==2" :style="{width:50+'%'}"></div>-->
            <!--<div class="line b-blue" v-if="processNorm12.grade==3" :style="{width:83.5+'%'}"></div>-->
            <!--&lt;!&ndash;<div class="norm-line"&ndash;&gt;-->
            <!--&lt;!&ndash;:style="{marginLeft:(processNorm12.lnorm/5)*333+'px',width:(processNorm12.rnorm-processNorm12.lnorm)/5*355+'px'}"></div>&ndash;&gt;-->
            <!--</div>-->
            <!--</td>-->
            <!--</tr>-->


            <!--</tbody>-->
            <!--</table>-->
            <!--</div>-->

            <!--</div>-->
            <!--<div class="font-blue pdf-footer">-->
            <!--<p class="pull-left">测评网址：www.ymtest.com</p>-->
            <!--<p class="pull-right">测评方法、工具及报告设计已申请产权保护</p>-->
            <!--</div>-->
            <!--</div>-->
            <!--&lt;!&ndash;page 44&ndash;&gt;-->

            <!--&lt;!&ndash;page 45&ndash;&gt;-->
            <!--<div class="pdf-page">-->
            <!--<div class="pdf-header">-->
            <!--<img class="pull-left" src="../../assets/pdf/header-logo.png" height="39px">-->
            <!--<p class="pull-right pdf-page-seq"></p>-->
            <!--<p class="pull-right font-blue">高中生升学规划测评报告</p>-->
            <!--</div>-->
            <!--<div class=" pdf-content">-->
            <!--<div class="pdf-blue-title pdf-yellow-title" id="532">-->
            <!--<img src="../../assets/pdf/title-trn.png" alt="">5.3.2学习过程分析-->
            <!--</div>-->
            <!--<div class="pdf-border-paragraph m-b20">-->
            <!--<div class="pull-left blue-title m-b20">-->
            <!--学习计划-->
            <!--</div>-->
            <!--<div class="left-block">-->
            <!--<div class="pull-left"></div>-->
            <!--<div class="text-container">-->
            <!--{{processTexts1.name}}-->
            <!--</div>-->
            <!--</div>-->
            <!--<p>-->
            <!--{{processTexts1.comment}}-->
            <!--</p>-->
            <!--<div class="left-block">-->
            <!--<div class="pull-left"></div>-->
            <!--<div class="text-container">-->
            <!--{{processTexts2.name}}-->
            <!--</div>-->
            <!--</div>-->
            <!--<p>-->
            <!--{{processTexts2.comment}}-->
            <!--</p>-->
            <!--<div class="left-block">-->
            <!--<div class="pull-left"></div>-->
            <!--<div class="text-container">-->
            <!--{{processTexts3.name}}-->
            <!--</div>-->
            <!--</div>-->
            <!--<p>-->
            <!--{{processTexts3.comment}}-->
            <!--</p>-->
            <!--</div>-->

            <!--</div>-->
            <!--<div class="font-blue pdf-footer">-->
            <!--<p class="pull-left">测评网址：www.ymtest.com</p>-->
            <!--<p class="pull-right">测评方法、工具及报告设计已申请产权保护</p>-->
            <!--</div>-->
            <!--</div>-->
            <!--&lt;!&ndash;page 45&ndash;&gt;-->

            <!--&lt;!&ndash;page 46&ndash;&gt;-->
            <!--<div class="pdf-page">-->
            <!--<div class="pdf-header">-->
            <!--<img class="pull-left" src="../../assets/pdf/header-logo.png" height="39px">-->
            <!--<p class="pull-right pdf-page-seq"></p>-->
            <!--<p class="pull-right font-blue">高中生升学规划测评报告</p>-->
            <!--</div>-->
            <!--<div class=" pdf-content">-->

            <!--<div class="pdf-border-paragraph m-b20">-->
            <!--<div class="pull-left blue-title m-b20">-->
            <!--学习监控-->
            <!--</div>-->
            <!--<div class="left-block">-->
            <!--<div class="pull-left"></div>-->
            <!--<div class="text-container">-->
            <!--{{processTexts4.name}}-->
            <!--</div>-->
            <!--</div>-->
            <!--<p>-->
            <!--{{processTexts4.comment}}-->
            <!--</p>-->
            <!--<div class="left-block">-->
            <!--<div class="pull-left"></div>-->
            <!--<div class="text-container">-->
            <!--{{processTexts5.name}}-->
            <!--</div>-->
            <!--</div>-->
            <!--<p>-->
            <!--{{processTexts5.comment}}-->
            <!--</p>-->
            <!--<div class="left-block">-->
            <!--<div class="pull-left"></div>-->
            <!--<div class="text-container">-->
            <!--{{processTexts6.name}}-->
            <!--</div>-->
            <!--</div>-->
            <!--<p>-->
            <!--{{processTexts6.comment}}-->
            <!--</p>-->
            <!--</div>-->

            <!--</div>-->
            <!--<div class="font-blue pdf-footer">-->
            <!--<p class="pull-left">测评网址：www.ymtest.com</p>-->
            <!--<p class="pull-right">测评方法、工具及报告设计已申请产权保护</p>-->
            <!--</div>-->
            <!--</div>-->
            <!--&lt;!&ndash;page 46&ndash;&gt;-->

            <!--&lt;!&ndash;page 47&ndash;&gt;-->
            <!--<div class="pdf-page">-->
            <!--<div class="pdf-header">-->
            <!--<img class="pull-left" src="../../assets/pdf/header-logo.png" height="39px">-->
            <!--<p class="pull-right pdf-page-seq"></p>-->
            <!--<p class="pull-right font-blue">高中生升学规划测评报告</p>-->
            <!--</div>-->
            <!--<div class=" pdf-content">-->

            <!--<div class="pdf-border-paragraph m-b20">-->
            <!--<div class="pull-left blue-title m-b20">-->
            <!--学习调节-->
            <!--</div>-->
            <!--<div class="left-block">-->
            <!--<div class="pull-left"></div>-->
            <!--<div class="text-container">-->
            <!--{{processTexts7.name}}-->
            <!--</div>-->
            <!--</div>-->
            <!--<p>-->
            <!--{{processTexts7.comment}}-->
            <!--</p>-->
            <!--<div class="left-block">-->
            <!--<div class="pull-left"></div>-->
            <!--<div class="text-container">-->
            <!--{{processTexts8.name}}-->
            <!--</div>-->
            <!--</div>-->
            <!--<p>-->
            <!--{{processTexts8.comment}}-->
            <!--</p>-->
            <!--<div class="left-block">-->
            <!--<div class="pull-left"></div>-->
            <!--<div class="text-container">-->
            <!--{{processTexts9.name}}-->
            <!--</div>-->
            <!--</div>-->
            <!--<p>-->
            <!--{{processTexts9.comment}}-->
            <!--</p>-->
            <!--</div>-->

            <!--</div>-->
            <!--<div class="font-blue pdf-footer">-->
            <!--<p class="pull-left">测评网址：www.ymtest.com</p>-->
            <!--<p class="pull-right">测评方法、工具及报告设计已申请产权保护</p>-->
            <!--</div>-->
            <!--</div>-->
            <!--&lt;!&ndash;page 47&ndash;&gt;-->

            <!--&lt;!&ndash;page 47 补充&ndash;&gt;-->
            <!--<div class="pdf-page">-->
            <!--<div class="pdf-header">-->
            <!--<img class="pull-left" src="../../assets/pdf/header-logo.png" height="39px">-->
            <!--<p class="pull-right pdf-page-seq"></p>-->
            <!--<p class="pull-right font-blue">高中生升学规划测评报告</p>-->
            <!--</div>-->
            <!--<div class=" pdf-content">-->

            <!--<div class="pdf-border-paragraph m-b20">-->
            <!--<div class="pull-left blue-title m-b20">-->
            <!--学习效率-->
            <!--</div>-->
            <!--&lt;!&ndash;<div class="left-block">&ndash;&gt;-->
            <!--&lt;!&ndash;<div class="pull-left"></div>&ndash;&gt;-->
            <!--&lt;!&ndash;<div class="text-container">&ndash;&gt;-->
            <!--&lt;!&ndash;{{processTexts10.name}}&ndash;&gt;-->
            <!--&lt;!&ndash;</div>&ndash;&gt;-->
            <!--&lt;!&ndash;</div>&ndash;&gt;-->
            <!--&lt;!&ndash;<p>&ndash;&gt;-->
            <!--&lt;!&ndash;{{processTexts10.comment}}&ndash;&gt;-->
            <!--&lt;!&ndash;</p>&ndash;&gt;-->
            <!--<div class="left-block">-->
            <!--<div class="pull-left"></div>-->
            <!--<div class="text-container">-->
            <!--{{processTexts11.name}}-->
            <!--</div>-->
            <!--</div>-->
            <!--<p>-->
            <!--{{processTexts11.comment}}-->
            <!--</p>-->
            <!--<div class="left-block">-->
            <!--<div class="pull-left"></div>-->
            <!--<div class="text-container">-->
            <!--{{processTexts12.name}}-->
            <!--</div>-->
            <!--</div>-->
            <!--<p>-->
            <!--{{processTexts12.comment}}-->
            <!--</p>-->
            <!--</div>-->

            <!--</div>-->
            <!--<div class="font-blue pdf-footer">-->
            <!--<p class="pull-left">测评网址：www.ymtest.com</p>-->
            <!--<p class="pull-right">测评方法、工具及报告设计已申请产权保护</p>-->
            <!--</div>-->
            <!--</div>-->
            <!--&lt;!&ndash;page 47 补充&ndash;&gt;-->

            <!--&lt;!&ndash;page 48&ndash;&gt;-->
            <!--<div class="pdf-page">-->
            <!--<div class="pdf-header">-->
            <!--<img class="pull-left" src="../../assets/pdf/header-logo.png" height="39px">-->
            <!--<p class="pull-right pdf-page-seq"></p>-->
            <!--<p class="pull-right font-blue">高中生升学规划测评报告</p>-->
            <!--</div>-->
            <!--<div class=" pdf-content">-->
            <!--<div class="pdf-blue-title">-->
            <!--<img src="../../assets/pdf/title-trn.png" alt="">5.4学习风格-->
            <!--</div>-->
            <!--<div class="pdf-border-paragraph m-b20">-->
            <!--<p>-->
            <!--学习风格是指人们在学习时所具有的或偏爱的方式，是学习者在研究和解决其学习任务时，所表现出来的具有个人特色的方式。它是由学习者特有的认知、情感和生理行为构成，它是反映学习者如何感知信息、如何与学习环境相互作用并对之作出反应的相对稳定的学习方式。-->
            <!--</p>-->
            <!--<p>-->
            <!--学习风格对于学习质量、学习效率有很大的影响。不同的国家，由于地域文化、教育制度的不同，学习风格是大相径庭；当然，即使是相同的地域及教育制度，不同的人，都会有不同学习风格。本报告是对您的学习风格进行深度分析，主要包括你对待信息的互动性程度、对信息的加工速度、加工信息时的依靠方式三个方面。并对于你可能存在的问题，提出建议和意见。-->
            <!--</p>-->
            <!--</div>-->
            <!--<div class="pdf-blue-title pdf-yellow-title" id="541">-->
            <!--<img src="../../assets/pdf/title-trn.png" alt="">5.4.1学习风格评估结果-->
            <!--</div>-->
            <!--<div class="pdf-border-paragraph m-b20">-->
            <!--<p>-->
            <!--在下表中学习风格水平值是测试个体在各项学习风格指标中的水平大小；常模范围是群体中大多数人在该项上的得分分布；灰色条形图是常模分布，黑色竖条是你的得分，得分分布在哪边表明你的学习风格偏向于哪个方向。 </p>-->
            <!--</div>-->
            <!--<div class="table-container table-55-container table-49-container">-->
            <!--<div class="table-title">学习风格指标评估详细结果</div>-->
            <!--<table>-->
            <!--<thead>-->
            <!--<tr>-->
            <!--<th>学习风格</th>-->
            <!--<th>学习风格水平值</th>-->
            <!--<th>常模范围</th>-->
            <!--<th width="420">学习风格偏向</th>-->
            <!--</tr>-->
            <!--</thead>-->
            <!--<tbody>-->
            <!--<tr>-->
            <!--<td class="bg-blue">对待信息</td>-->
            <!--<td>{{styleNorm1.score | toFixed(2)}}</td>-->
            <!--<td>{{styleNorm1.lnorm}}~{{styleNorm1.rnorm}}</td>-->
            <!--<td>-->
            <!--<div class="score-text">-->
            <!--<p>执行型</p>-->
            <!--<p>执行·创造型</p>-->
            <!--<p>创造型</p>-->
            <!--</div>-->
            <!--<div class="d-relative score-line">-->
            <!--<div class="line b-red"></div>-->
            <!--<div class="norm-line"-->
            <!--:style="{marginLeft:(styleNorm1.lnorm/200)*350+'px',width:(styleNorm1.rnorm-styleNorm1.lnorm)/200*350+'px'}"></div>-->
            <!--<div class="black-line" :style="{left:(styleNorm1.score/200)*350+'px'}"></div>-->
            <!--</div>-->
            <!--</td>-->
            <!--</tr>-->

            <!--<tr>-->
            <!--<td class="bg-blue">信息加工方式</td>-->
            <!--<td>{{styleNorm2.score | toFixed(2)}}</td>-->
            <!--<td>{{styleNorm2.lnorm}}~{{styleNorm2.rnorm}}</td>-->
            <!--<td>-->
            <!--<div class="score-text">-->
            <!--<p>依存型</p>-->
            <!--<p>依存·独立型</p>-->
            <!--<p>独立型</p>-->
            <!--</div>-->
            <!--<div class="d-relative score-line">-->
            <!--<div class="line b-green"></div>-->
            <!--<div class="norm-line"-->
            <!--:style="{marginLeft:(styleNorm2.lnorm/200)*350+'px',width:(styleNorm2.rnorm-styleNorm2.lnorm)/200*350+'px'}"></div>-->
            <!--<div class="black-line" :style="{left:(styleNorm2.score/200)*350+'px'}"></div>-->
            <!--</div>-->
            <!--</td>-->
            <!--</tr>-->

            <!--<tr>-->
            <!--<td class="bg-blue">信息加工速度</td>-->
            <!--<td>{{styleNorm3.score | toFixed(2)}}</td>-->
            <!--<td>{{styleNorm3.lnorm }}~{{styleNorm3.rnorm}}</td>-->
            <!--<td>-->
            <!--<div class="score-text">-->
            <!--<p>冲动型</p>-->
            <!--<p>冲动·沉思型</p>-->
            <!--<p>沉思型</p>-->
            <!--</div>-->
            <!--<div class="d-relative score-line">-->
            <!--<div class="line b-yellow"></div>-->
            <!--<div class="norm-line"-->
            <!--:style="{marginLeft:(styleNorm3.lnorm/200)*350+'px',width:(styleNorm3.rnorm-styleNorm3.lnorm)/200*350+'px'}"></div>-->
            <!--<div class="black-line" :style="{left:(styleNorm3.score/200)*350+'px'}"></div>-->
            <!--</div>-->
            <!--</td>-->
            <!--</tr>-->

            <!--</tbody>-->
            <!--</table>-->
            <!--</div>-->
            <!--</div>-->
            <!--<div class="font-blue pdf-footer">-->
            <!--<p class="pull-left">测评网址：www.ymtest.com</p>-->
            <!--<p class="pull-right">测评方法、工具及报告设计已申请产权保护</p>-->
            <!--</div>-->
            <!--</div>-->
            <!--&lt;!&ndash;page 48&ndash;&gt;-->

            <!--&lt;!&ndash;page 49&ndash;&gt;-->
            <!--<div class="pdf-page">-->
            <!--<div class="pdf-header">-->
            <!--<img class="pull-left" src="../../assets/pdf/header-logo.png" height="39px">-->
            <!--<p class="pull-right pdf-page-seq"></p>-->
            <!--<p class="pull-right font-blue">高中生升学规划测评报告</p>-->
            <!--</div>-->
            <!--<div class=" pdf-content">-->

            <!--<div class="pdf-blue-title pdf-yellow-title" id="542">-->
            <!--<img src="../../assets/pdf/title-trn.png" alt="">5.4.2学习风格分析-->
            <!--</div>-->
            <!--<div class="text-center jixing" style="margin-bottom: 20px">-->
            <!--<div class="jx-content">-->
            <!--你对待信息的主动性程度属于：{{styleTexts1.name}}-->
            <!--</div>-->
            <!--</div>-->
            <!--<div class="pdf-border-paragraph m-b20">-->
            <!--<div class="pull-left blue-title m-b20">-->
            <!--典型特征-->
            <!--</div>-->
            <!--<p>-->
            <!--{{styleTexts1.feature}}-->
            <!--</p>-->
            <!--</div>-->
            <!--<div class="pdf-border-paragraph m-b20">-->
            <!--<div class="pull-left blue-title m-b20">-->
            <!--你的表现-->
            <!--</div>-->
            <!--<p>-->
            <!--{{styleTexts1.behaviour}}-->
            <!--</p>-->
            <!--</div>-->
            <!--<div class="pdf-border-paragraph m-b20">-->
            <!--<div class="pull-left blue-title m-b20">-->
            <!--优势-->
            <!--</div>-->
            <!--<div class="left-block" v-for="(data,index) in styleTexts1.advantage">-->
            <!--<div class="pull-left"></div>-->
            <!--<div class="text-container">{{data.detail}}-->
            <!--</div>-->
            <!--</div>-->

            <!--</div>-->
            <!--</div>-->
            <!--<div class="font-blue pdf-footer">-->
            <!--<p class="pull-left">测评网址：www.ymtest.com</p>-->
            <!--<p class="pull-right">测评方法、工具及报告设计已申请产权保护</p>-->
            <!--</div>-->
            <!--</div>-->
            <!--&lt;!&ndash;page 49&ndash;&gt;-->

            <!--&lt;!&ndash;page 50&ndash;&gt;-->
            <!--<div class="pdf-page">-->
            <!--<div class="pdf-header">-->
            <!--<img class="pull-left" src="../../assets/pdf/header-logo.png" height="39px">-->
            <!--<p class="pull-right pdf-page-seq"></p>-->
            <!--<p class="pull-right font-blue">高中生升学规划测评报告</p>-->
            <!--</div>-->
            <!--<div class=" pdf-content">-->
            <!--<div class="pdf-border-paragraph m-b20">-->
            <!--<div class="pull-left blue-title m-b20">-->
            <!--盲点-->
            <!--</div>-->
            <!--<div class="left-block" v-for="(data,index) in styleTexts1.disadvantage">-->
            <!--<div class="pull-left"></div>-->
            <!--<div class="text-container">{{data.detail}}-->
            <!--</div>-->
            <!--</div>-->

            <!--</div>-->
            <!--<div class="pdf-border-paragraph m-b20">-->
            <!--<div class="pull-left blue-title m-b20">-->
            <!--专家建议-->
            <!--</div>-->
            <!--<div class="left-block" v-for="(data,index) in styleTexts1.advise">-->
            <!--<div class="pull-left"></div>-->
            <!--<div class="text-container">{{data.detail}}-->
            <!--</div>-->
            <!--</div>-->
            <!--</div>-->

            <!--<div class="text-center jixing" style="margin-bottom: 20px;">-->
            <!--<div class="jx-content">-->
            <!--你在加工信息时的依靠方式属于：{{styleTexts2.name}}-->
            <!--</div>-->
            <!--</div>-->
            <!--<div class="pdf-border-paragraph m-b20">-->
            <!--<div class="pull-left blue-title m-b20">-->
            <!--典型特征-->
            <!--</div>-->
            <!--<p>-->
            <!--{{styleTexts2.feature}}-->
            <!--</p>-->
            <!--</div>-->
            <!--<div class="pdf-border-paragraph m-b20">-->
            <!--<div class="pull-left blue-title m-b20">-->
            <!--你的表现-->
            <!--</div>-->
            <!--<p>-->
            <!--{{styleTexts2.behaviour}}-->
            <!--</p>-->
            <!--</div>-->
            <!--</div>-->
            <!--<div class="font-blue pdf-footer">-->
            <!--<p class="pull-left">测评网址：www.ymtest.com</p>-->
            <!--<p class="pull-right">测评方法、工具及报告设计已申请产权保护</p>-->
            <!--</div>-->
            <!--</div>-->
            <!--&lt;!&ndash;page 50&ndash;&gt;-->

            <!--&lt;!&ndash;page 51&ndash;&gt;-->
            <!--<div class="pdf-page">-->
            <!--<div class="pdf-header">-->
            <!--<img class="pull-left" src="../../assets/pdf/header-logo.png" height="39px">-->
            <!--<p class="pull-right pdf-page-seq"></p>-->
            <!--<p class="pull-right font-blue">高中生升学规划测评报告</p>-->
            <!--</div>-->
            <!--<div class=" pdf-content">-->
            <!--<div class="pdf-border-paragraph m-b20">-->
            <!--<div class="pull-left blue-title m-b20">-->
            <!--优势-->
            <!--</div>-->
            <!--<div class="left-block" v-for="(data,index) in styleTexts2.advantage">-->
            <!--<div class="pull-left"></div>-->
            <!--<div class="text-container">{{data.detail}}-->
            <!--</div>-->
            <!--</div>-->
            <!--</div>-->
            <!--<div class="pdf-border-paragraph m-b20">-->
            <!--<div class="pull-left blue-title m-b20">-->
            <!--盲点-->
            <!--</div>-->
            <!--<div class="left-block" v-for="(data,index) in styleTexts2.disadvantage">-->
            <!--<div class="pull-left"></div>-->
            <!--<div class="text-container">{{data.detail}}-->
            <!--</div>-->
            <!--</div>-->

            <!--</div>-->
            <!--<div class="pdf-border-paragraph m-b20">-->
            <!--<div class="pull-left blue-title m-b20">-->
            <!--专家建议-->
            <!--</div>-->
            <!--<div class="left-block" v-for="(data,index) in styleTexts2.advise">-->
            <!--<div class="pull-left"></div>-->
            <!--<div class="text-container">{{data.detail}}-->
            <!--</div>-->
            <!--</div>-->
            <!--</div>-->
            <!--</div>-->
            <!--<div class="font-blue pdf-footer">-->
            <!--<p class="pull-left">测评网址：www.ymtest.com</p>-->
            <!--<p class="pull-right">测评方法、工具及报告设计已申请产权保护</p>-->
            <!--</div>-->
            <!--</div>-->
            <!--&lt;!&ndash;page 51&ndash;&gt;-->

            <!--&lt;!&ndash;page 52&ndash;&gt;-->
            <!--<div class="pdf-page">-->
            <!--<div class="pdf-header">-->
            <!--<img class="pull-left" src="../../assets/pdf/header-logo.png" height="39px">-->
            <!--<p class="pull-right pdf-page-seq"></p>-->
            <!--<p class="pull-right font-blue">高中生升学规划测评报告</p>-->
            <!--</div>-->
            <!--<div class=" pdf-content">-->
            <!--<div class="text-center jixing" style="margin-bottom: 20px;">-->
            <!--<div class="jx-content">-->
            <!--你对信息的加工速度属于：{{styleTexts3.name}}-->
            <!--</div>-->
            <!--</div>-->
            <!--<div class="pdf-border-paragraph m-b20">-->
            <!--<div class="pull-left blue-title m-b20">-->
            <!--典型特征-->
            <!--</div>-->
            <!--<p>-->
            <!--{{styleTexts3.feature}}-->
            <!--</p>-->
            <!--</div>-->
            <!--<div class="pdf-border-paragraph m-b20">-->
            <!--<div class="pull-left blue-title m-b20">-->
            <!--你的表现-->
            <!--</div>-->
            <!--<p>-->
            <!--{{styleTexts3.behaviour}}-->
            <!--</p>-->
            <!--</div>-->
            <!--<div class="pdf-border-paragraph m-b20">-->
            <!--<div class="pull-left blue-title m-b20">-->
            <!--优势-->
            <!--</div>-->
            <!--<div class="left-block" v-for="(data,index) in styleTexts3.advantage">-->
            <!--<div class="pull-left"></div>-->
            <!--<div class="text-container">{{data.detail}}-->
            <!--</div>-->
            <!--</div>-->
            <!--</div>-->
            <!--</div>-->
            <!--<div class="font-blue pdf-footer">-->
            <!--<p class="pull-left">测评网址：www.ymtest.com</p>-->
            <!--<p class="pull-right">测评方法、工具及报告设计已申请产权保护</p>-->
            <!--</div>-->
            <!--</div>-->
            <!--&lt;!&ndash;page 52&ndash;&gt;-->

            <!--&lt;!&ndash;page 53&ndash;&gt;-->
            <!--<div class="pdf-page">-->
            <!--<div class="pdf-header">-->
            <!--<img class="pull-left" src="../../assets/pdf/header-logo.png" height="39px">-->
            <!--<p class="pull-right pdf-page-seq"></p>-->
            <!--<p class="pull-right font-blue">高中生升学规划测评报告</p>-->
            <!--</div>-->
            <!--<div class=" pdf-content">-->
            <!--<div class="pdf-border-paragraph m-b20">-->
            <!--<div class="pull-left blue-title m-b20">-->
            <!--盲点-->
            <!--</div>-->
            <!--<div class="left-block" v-for="(data,index) in styleTexts3.disadvantage">-->
            <!--<div class="pull-left"></div>-->
            <!--<div class="text-container">{{data.detail}}-->
            <!--</div>-->
            <!--</div>-->
            <!--</div>-->
            <!--<div class="pdf-border-paragraph m-b20">-->
            <!--<div class="pull-left blue-title m-b20">-->
            <!--专家建议-->
            <!--</div>-->
            <!--<div class="left-block" v-for="(data,index) in styleTexts3.advise">-->
            <!--<div class="pull-left"></div>-->
            <!--<div class="text-container">{{data.detail}}-->
            <!--</div>-->
            <!--</div>-->
            <!--</div>-->
            <!--</div>-->
            <!--<div class="font-blue pdf-footer">-->
            <!--<p class="pull-left">测评网址：www.ymtest.com</p>-->
            <!--<p class="pull-right">测评方法、工具及报告设计已申请产权保护</p>-->
            <!--</div>-->
            <!--</div>-->
            <!--&lt;!&ndash;page 53&ndash;&gt;-->

            <!--&lt;!&ndash;page 54&ndash;&gt;-->
            <!--<div class="pdf-page">-->
            <!--<div class="pdf-header">-->
            <!--<img class="pull-left" src="../../assets/pdf/header-logo.png" height="39px">-->
            <!--<p class="pull-right pdf-page-seq"></p>-->
            <!--<p class="pull-right font-blue">高中生升学规划测评报告</p>-->
            <!--</div>-->
            <!--<div class=" pdf-content">-->
            <!--<div class="font-blue pdf-page-title"><span>第六部分 心理健康评估</span></div>-->
            <!--<div class="pdf-border-paragraph m-b20">-->
            <!--<p>-->
            <!--心理健康是指心理的各个方面及活动过程处于一种良好或正常的状态。心理健康的理想状态是保持性格完美、智力正常、认知正确、情感适当、意志合理、态度积极、行为恰当、适应良好的状态。个体能够适应发展的环境，具有完善的个性特征；且其认知，情绪反应，意志行为处于积极状态，并能保持正常的调控能力。在生活实践中，能够正确认识自我，自觉控制自己，正确对待外界变化，从而使心理保持平衡协调，就已具备了心理健康的基本特征。-->
            <!--</p>-->
            <!--<p>本报告将从从强迫症状、人际关系敏感、抑郁、焦虑、敌对、偏执、精神病性七个方面详细的分析您的心理健康水平，给您提出合理的建议与意见。-->
            <!--</p>-->
            <!--<p>-->
            <!--</p>-->
            <!--</div>-->
            <!--<div class="pdf-blue-title" id="61">-->
            <!--<img src="../../assets/pdf/title-trn.png" alt="">6.1心理健康评估结果-->
            <!--</div>-->
            <!--<div class="pdf-border-paragraph m-b20">-->
            <!--<p>-->
            <!--在下表中心理健康水平值是测试个体在各项心理健康指标中的水平大小，值越高则在该因子上测试者的症状越明显。常模范围是群体中大多数人在该项上的水平范围，图中评估的心理健康水平值高于常模范围，则说明在该指标上异常；若心理健康水平在常模范围之内或低于常模范围，则说明该心理健康指标与大多数人无明显差别且正常。-->
            <!--</p>-->
            <!--</div>-->
            <!--</div>-->
            <!--<div class="font-blue pdf-footer">-->
            <!--<p class="pull-left">测评网址：www.ymtest.com</p>-->
            <!--<p class="pull-right">测评方法、工具及报告设计已申请产权保护</p>-->
            <!--</div>-->
            <!--</div>-->
            <!--&lt;!&ndash;page 54&ndash;&gt;-->

            <!--&lt;!&ndash;page 55&ndash;&gt;-->
            <!--<div class="pdf-page">-->
            <!--<div class="pdf-header">-->
            <!--<img class="pull-left" src="../../assets/pdf/header-logo.png" height="39px">-->
            <!--<p class="pull-right pdf-page-seq"></p>-->
            <!--<p class="pull-right font-blue">高中生升学规划测评报告</p>-->
            <!--</div>-->
            <!--<div class=" pdf-content">-->
            <!--<div class="table-container table-55-container">-->
            <!--<div class="table-title">心理健康评估结果与常模对比结果</div>-->
            <!--<table>-->
            <!--<thead>-->
            <!--<tr>-->
            <!--<th rowspan="2">心理健康</th>-->
            <!--<th rowspan="2">心理健康水平值</th>-->
            <!--<th rowspan="2">常模范围</th>-->
            <!--<th width="350" colspan="5">得分</th>-->
            <!--</tr>-->
            <!--<tr>-->
            <!--<th width="70">1</th>-->
            <!--<th width="70">2</th>-->
            <!--<th width="70">3</th>-->
            <!--<th width="70">4</th>-->
            <!--<th width="70">5</th>-->
            <!--</tr>-->
            <!--</thead>-->
            <!--<tbody>-->
            <!--<tr v-for="data in xljkNorm">-->
            <!--<td class="bg-blue">{{data.name }}</td>-->
            <!--<td>{{data.score | toFixed(2)}}</td>-->
            <!--<td>{{data.lnorm}}~{{data.rnorm}}</td>-->
            <!--<td colspan="5">-->
            <!--<div class="score-line">-->
            <!--<div class="line b-red" v-if="data.score<=1"-->
            <!--:style="{width:(data.score/5)*355+'px'}"></div>-->
            <!--<div class="line b-orange" v-if="data.score>1 && data.score<=2"-->
            <!--:style="{width:(data.score/5)*355+'px'}"></div>-->
            <!--<div class="line b-yellow" v-if="data.score>2 && data.score<=3"-->
            <!--:style="{width:(data.score/5)*355+'px'}"></div>-->
            <!--<div class="line b-green" v-if="data.score>3 && data.score<=4"-->
            <!--:style="{width:(data.score/5)*355+'px'}"></div>-->
            <!--<div class="line b-blue" v-if="data.score>4 && data.score<=5"-->
            <!--:style="{width:(data.score/5)*355+'px'}"></div>-->
            <!--<div class="norm-line"-->
            <!--:style="{marginLeft:(data.lnorm/5)*355+'px',width:(data.rnorm-data.lnorm)/5*355+'px'}"></div>-->
            <!--</div>-->
            <!--</td>-->
            <!--</tr>-->
            <!--</tbody>-->
            <!--</table>-->
            <!--</div>-->
            <!--<div class="pdf-blue-title" id="62">-->
            <!--<img src="../../assets/pdf/title-trn.png" alt="">6.2心理健康分析-->
            <!--</div>-->
            <!--<div class="pdf-border-paragraph m-b20">-->
            <!--<div class="pull-left blue-title m-b20">-->
            <!--{{xljkTexts2.name}}-->
            <!--</div>-->
            <!--<p>-->
            <!--{{xljkTexts2.comment}}-->
            <!--</p>-->
            <!--</div>-->
            <!--</div>-->
            <!--<div class="font-blue pdf-footer">-->
            <!--<p class="pull-left">测评网址：www.ymtest.com</p>-->
            <!--<p class="pull-right">测评方法、工具及报告设计已申请产权保护</p>-->
            <!--</div>-->
            <!--</div>-->
            <!--&lt;!&ndash;page 55&ndash;&gt;-->

            <!--&lt;!&ndash;page 56&ndash;&gt;-->
            <!--<div class="pdf-page">-->
            <!--<div class="pdf-header">-->
            <!--<img class="pull-left" src="../../assets/pdf/header-logo.png" height="39px">-->
            <!--<p class="pull-right pdf-page-seq"></p>-->
            <!--<p class="pull-right font-blue">高中生升学规划测评报告</p>-->
            <!--</div>-->
            <!--<div class=" pdf-content">-->
            <!--<div class="pdf-border-paragraph m-b20">-->
            <!--<div class="pull-left blue-title m-b20">-->
            <!--{{xljkTexts6.name}}-->
            <!--</div>-->
            <!--<p>-->
            <!--{{xljkTexts6.comment}}-->
            <!--</p>-->
            <!--</div>-->
            <!--<div class="pdf-border-paragraph m-b20">-->
            <!--<div class="pull-left blue-title m-b20">-->
            <!--{{xljkTexts4.name}}-->
            <!--</div>-->
            <!--<p>-->
            <!--{{xljkTexts4.comment}}-->
            <!--</p>-->
            <!--</div>-->
            <!--<div class="pdf-border-paragraph m-b20">-->
            <!--<div class="pull-left blue-title m-b20">-->
            <!--{{xljkTexts1.name}}-->
            <!--</div>-->
            <!--<p>-->
            <!--{{xljkTexts1.comment}}-->
            <!--</p>-->
            <!--</div>-->
            <!--<div class="pdf-border-paragraph m-b20">-->
            <!--<div class="pull-left blue-title m-b20">-->
            <!--{{xljkTexts5.name}}-->
            <!--</div>-->
            <!--<p>-->
            <!--{{xljkTexts5.comment}}-->
            <!--</p>-->
            <!--</div>-->
            <!--</div>-->
            <!--<div class="font-blue pdf-footer">-->
            <!--<p class="pull-left">测评网址：www.ymtest.com</p>-->
            <!--<p class="pull-right">测评方法、工具及报告设计已申请产权保护</p>-->
            <!--</div>-->
            <!--</div>-->
            <!--&lt;!&ndash;page 56&ndash;&gt;-->

            <!--&lt;!&ndash;page 57&ndash;&gt;-->
            <!--<div class="pdf-page">-->
            <!--<div class="pdf-header">-->
            <!--<img class="pull-left" src="../../assets/pdf/header-logo.png" height="39px">-->
            <!--<p class="pull-right pdf-page-seq"></p>-->
            <!--<p class="pull-right font-blue">高中生升学规划测评报告</p>-->
            <!--</div>-->
            <!--<div class=" pdf-content">-->
            <!--<div class="pdf-border-paragraph m-b20">-->
            <!--<div class="pull-left blue-title m-b20">-->
            <!--{{xljkTexts3.name}}-->
            <!--</div>-->
            <!--<p>-->
            <!--{{xljkTexts3.comment}}-->
            <!--</p>-->
            <!--</div>-->
            <!--<div class="pdf-border-paragraph m-b20">-->
            <!--<div class="pull-left blue-title m-b20">-->
            <!--{{xljkTexts7.name}}-->
            <!--</div>-->
            <!--<p>-->
            <!--{{xljkTexts7.comment}}-->
            <!--</p>-->
            <!--</div>-->
            <!--</div>-->
            <!--<div class="font-blue pdf-footer">-->
            <!--<p class="pull-left">测评网址：www.ymtest.com</p>-->
            <!--<p class="pull-right">测评方法、工具及报告设计已申请产权保护</p>-->
            <!--</div>-->
            <!--</div>-->
            <!--&lt;!&ndash;page 57&ndash;&gt;-->

            <!--<div class="w100" v-for="(major,index) in majors" v-if="index<10">-->

            <!--&lt;!&ndash;page 58&ndash;&gt;-->
            <!--<div class="pdf-page">-->
            <!--<div class="pdf-header">-->
            <!--<img class="pull-left" src="../../assets/pdf/header-logo.png" height="39px">-->
            <!--<p class="pull-right pdf-page-seq"></p>-->
            <!--<p class="pull-right font-blue">高中生升学规划测评报告</p>-->
            <!--</div>-->
            <!--<div class=" pdf-content">-->
            <!--<div class="font-blue pdf-page-title" v-if="index==0"><span>附件：推荐专业详细介绍</span></div>-->
            <!--<div class="text-center jixing" style="margin-bottom: 0px;">-->
            <!--<div class="jx-content">-->
            <!--推荐专业{{index+1}}：{{major.name}}-->
            <!--</div>-->
            <!--</div>-->
            <!--<div class="recommend-major">-->
            <!--<p>专业代码 </p>-->
            <!--<p>{{major.code}}</p>-->
            <!--</div>-->
            <!--<div-->
            <!--:class="index==0 ? 'pdf-border-paragraph pbp-height-medium m-b15' : 'pdf-border-paragraph m-b15'">-->
            <!--<div class="pull-left blue-title m-b20">-->
            <!--专业介绍-->
            <!--</div>-->
            <!--<p>-->
            <!--{{major.desc}}-->
            <!--</p>-->
            <!--</div>-->
            <!--<div-->
            <!--:class="index==0 ? 'pdf-border-paragraph pbp-height-medium m-b15' : 'pdf-border-paragraph m-b15'">-->
            <!--<div class="pull-left blue-title m-b20">-->
            <!--知识能力-->
            <!--</div>-->
            <!--<p v-for="data in major.knowledge">{{data.detail}}</p>-->
            <!--</div>-->
            <!--<div class="pdf-border-paragraph m-b20">-->
            <!--<div class="pull-left blue-title m-b20">-->
            <!--主干课程-->
            <!--</div>-->
            <!--<p>-->
            <!--{{major.course}}-->
            <!--</p>-->
            <!--</div>-->
            <!--<div class="pdf-border-paragraph" v-if="major.name!='应用统计学'">-->
            <!--<div class="pull-left blue-title m-b20">-->
            <!--就业方向-->
            <!--</div>-->
            <!--<p>-->
            <!--{{major.employ}}-->
            <!--</p>-->
            <!--</div>-->
            <!--</div>-->
            <!--<div class="font-blue pdf-footer">-->
            <!--<p class="pull-left">测评网址：www.ymtest.com</p>-->
            <!--<p class="pull-right">测评方法、工具及报告设计已申请产权保护</p>-->
            <!--</div>-->
            <!--</div>-->
            <!--&lt;!&ndash;page 58&ndash;&gt;-->

            <!--&lt;!&ndash;page 59&ndash;&gt;-->
            <!--<div class="pdf-page">-->
            <!--<div class="pdf-header">-->
            <!--<img class="pull-left" src="../../assets/pdf/header-logo.png" height="39px">-->
            <!--<p class="pull-right pdf-page-seq"></p>-->
            <!--<p class="pull-right font-blue">高中生升学规划测评报告</p>-->
            <!--</div>-->
            <!--<div class=" pdf-content">-->
            <!--<div class="pdf-border-paragraph m-b20" v-if="major.name=='应用统计学'">-->
            <!--<div class="pull-left blue-title m-b20">-->
            <!--就业方向-->
            <!--</div>-->
            <!--<p>-->
            <!--{{major.employ}}-->
            <!--</p>-->
            <!--</div>-->
            <!--<div class="pdf-border-paragraph m-b20">-->
            <!--<div class="pull-left blue-title m-b20">-->
            <!--数据统计-->
            <!--</div>-->
            <!--<p v-for="data in major.statistics">-->
            <!--{{data.detail}}-->
            <!--</p>-->
            <!--</div>-->
            <!--</div>-->
            <!--<div class="font-blue pdf-footer">-->
            <!--<p class="pull-left">测评网址：www.ymtest.com</p>-->
            <!--<p class="pull-right">测评方法、工具及报告设计已申请产权保护</p>-->
            <!--</div>-->
            <!--</div>-->
            <!--&lt;!&ndash;page 59&ndash;&gt;-->

            <!--</div>-->


            <!--</div>-->
            <!--</div>-->


            <div class="pdfContent">

              <!--page 1-->
              <div class="pdf-page">
                <div class="pdf-header border-no"></div>
                <div class=" pdf-content">
                  <div class="pdf-title">
                    EVALUATION REPORT OF HIGH SCHOOL STUDENTS` ENTRANCE PLANNING
                  </div>
                  <img class="page-one-title" src="../../assets/pdf/title.png" alt="">
                  <img class="page-one-logo" src="../../assets/pdf/logo.png" alt="">
                  <div class="page-one-name">
                    <ul>
                      <li>
                        <p>姓&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;名：</p>
                        <p>{{user.realname}}</p>
                      </li>
                      <li>
                        <p>报告编号：</p>
                        <p>{{userInfo.report_no}}</p>
                      </li>
                      <li>
                        <p>报告日期：</p>
                        <p>{{reportTime}}</p>
                      </li>
                    </ul>
                  </div>
                  <div class="page-one-bottom">
                    <img src="../../assets/pdf/page-one-line.png" alt="">
                    <p>学马教育集团旗下品牌</p>
                    <p>测评网址：www.ymtest.com</p>
                    <p>地址：北京海淀区清华科技园科技大厦D座</p>
                    <p>系统开发技术、测评方法及报告设计已申请知识产权保护</p>
                    <p>本报告仅供相关个人阅读参考，未经许可不得传阅 严禁用做他途</p>
                  </div>
                </div>
                <div class="pdf-footer border-no">
                </div>
              </div>
              <!--page 1-->

              <!--page 2-->
              <div class="pdf-page">
                <div class="pdf-header">
                  <img class="pull-left" src="../../assets/pdf/header-logo.png" height="39px">
                  <p class="pull-right pdf-page-seq"></p>
                  <p class="pull-right font-blue">高中生升学规划测评报告</p>
                </div>
                <div class=" pdf-content">
                  <div class="font-blue pdf-page-title"><span>测评背景</span></div>
                  <div class="font-medium pdf-paragraph">
                    随着高考制度的改革，职业生涯规划已被纳入到高中的必修课，一方面源于学生临到高考时，对于如何填报志愿，一片茫然；另一方面源于我国当前的就业形势非常严峻，许多大学生毕业即意味着失业。作为一名青年学子，如何才能使自己在中学阶段做到“未雨绸缪”，使得职业生涯规划在高中教育中变得尤为重要。
                  </div>
                  <div class="font-medium pdf-paragraph">
                    高中阶段是职业生涯规划的源头，它对以后的就业和职业发展意义十分重大。对高中生进行科学的职业生涯测评将有效地帮助学生认识自己，尽早确定目标，有的放矢的进行规划和学习。提高学生的学习动机，帮助学生直达成功的彼岸。
                  </div>
                  <div class="font-medium pdf-paragraph">
                    目前，各类职业测评屡见不鲜，但大多是单一维度的测量，或是问卷形式的自我汇报，无法做到多个方面的综合评估。高中生升学规划测评系统，旨在为高中生职业生涯规划提供科学参考，从人格特性、职业兴趣和一般认知潜能三个方面来反映适合个体的职业类型，并根据国家职业大典建立具有以上三个方面特征的职业数据库，在现有成熟的测评技术基础之上，实现职业的精准定位。
                  </div>
                  <div class="font-medium pdf-paragraph">
                    本报告的主要内容包括：人格特性评估、认知潜能评估、兴趣倾向评估、职业生涯规划、学习特征评估、心理健康评估六大方面的内容。通过专业人员的解读，学生可全方位的剖析自己、认识职业、了解专业，对自己的升学过程作出科学合理的规划。
                  </div>
                  <div class="page-2-user">
                    <div class="text-center">测试者基本信息</div>
                    <ul>
                      <li>
                        <p><span>年级：</span></p>
                        <p>{{user.grade}}</p>
                      </li>
                      <li>
                        <p><span>性别：</span></p>
                        <p v-if="user.sex==''">男</p>
                        <p v-if="user.sex!=''">{{user.sex}}</p>
                      </li>
                      <li>
                        <p><span>学校：</span></p>
                        <p>{{user.school}}</p>
                      </li>
                      <li>
                        <p><span>所在省市：</span></p>
                        <p>{{user.province}}{{user.city}}</p>
                      </li>
                      <li>
                        <p><span>评测日期：</span></p>
                        <p>{{testTime}}</p>
                      </li>
                      <li>
                        <p><span>评测使用编号：</span></p>
                        <p>{{userInfo.serial_no}}</p>
                      </li>
                      <li>
                        <p><span>信度指数：</span></p>
                        <p>{{cehuang}}分</p>
                      </li>

                    </ul>
                  </div>
                </div>
                <div class="font-blue pdf-footer">
                  <p class="pull-left">测评网址：www.ymtest.com</p>
                  <p class="pull-right">测评方法、工具及报告设计已申请产权保护</p>
                </div>
              </div>
              <!--page 2-->

              <!--page 3-->
              <div class="pdf-page">
                <div class="pdf-header">
                  <img class="pull-left" src="../../assets/pdf/header-logo.png" height="39px">
                  <p class="pull-right pdf-page-seq"></p>
                  <p class="pull-right font-blue">高中生升学规划测评报告</p>
                </div>
                <div class=" pdf-content">
                  <img class="page-3-title" src="../../assets/pdf/3-title.png" alt="">
                  <div class="d-relative page-menu">

                    <ul>
                      <li class="title1">
                        <p>第一部分 人格特性评估</p>
                        <span>.......................................................................................................<small>04</small></span>
                      </li>
                      <li class="title2">
                        <p>1.1人格特性类别评估结果</p>
                        <span>......................................................................................................<small>04</small></span>
                      </li>
                      <li class="title2">
                        <p>1.2人格特性类型分析</p>
                        <span>.............................................................................................................<small
                          class="page-menu-seq" cid="12">04</small></span>
                      </li>
                      <li class="title3">
                        <p>1.2.1人格类型基本描述</p>
                        <span>....................................................................................................<small
                          class="page-menu-seq" cid="121">04</small></span>
                      </li>
                      <li class="title3">
                        <p>1.2.2气质类型</p>
                        <span>...................................................................................................................<small
                          class="page-menu-seq" cid="122">04</small></span>
                      </li>
                      <li class="title3">
                        <p>1.2.3人格类型优势</p>
                        <span>............................................................................................................<small
                          class="page-menu-seq" cid="123">04</small></span>
                      </li>
                      <li class="title3">
                        <p>1.2.4人格类型劣势</p>
                        <span>............................................................................................................<small
                          class="page-menu-seq" cid="124">04</small></span>
                      </li>
                      <li class="title3">
                        <p>1.2.5人格类型的功能运用</p>
                        <span>.................................................................................................<small
                          class="page-menu-seq" cid="125">04</small></span>
                      </li>
                      <li class="title3">
                        <p>1.2.6成功秘诀</p>
                        <span>..................................................................................................................<small
                          class="page-menu-seq" cid="126">04</small></span>
                      </li>

                      <li class="title2">
                        <p>1.3人格特性深度评估与分析</p>
                        <span>..................................................................................................<small
                          class="page-menu-seq" cid="131">04</small></span>
                      </li>
                      <li class="title3">
                        <p>1.3.1子维度一（外向与内向）</p>
                        <span>.........................................................................................<small
                          class="page-menu-seq" cid="131">04</small></span>
                      </li>
                      <li class="title3">
                        <p>1.3.2子维度二（直觉与实感）</p>
                        <span>.........................................................................................<small
                          class="page-menu-seq" cid="132">04</small></span>
                      </li>
                      <li class="title3">
                        <p>1.3.3子维度三（思考与情感）</p>
                        <span>.........................................................................................<small
                          class="page-menu-seq" cid="133">04</small></span>
                      </li>
                      <li class="title3">
                        <p>1.3.4子维度四（判断与知觉）</p>
                        <span>.............................................................................................<small
                          class="page-menu-seq" cid="134">04</small></span>
                      </li>
                      <li class="title3">
                        <p>1.3.5与{{personality.name}}人群子维度常模比较</p>
                        <span>.......................................................................................<small
                          class="page-menu-seq" cid="135">04</small></span>
                      </li>
                      <li class="title1">
                        <p>第二部分 认知潜能评估</p>
                        <span>.........................................................................................................<small
                          class="page-menu-seq" cid="2">04</small></span>
                      </li>
                      <li class="title2">
                        <p>2.1认知潜能评估结果</p>
                        <span>................................................................................................................<small
                          class="page-menu-seq" cid="21">02</small></span>
                      </li>
                      <li class="title2">
                        <p>2.2认知潜能分析</p>
                        <span>................................................................................................................<small
                          class="page-menu-seq" cid="22">02</small></span>
                      </li>
                      <li class="title1">
                        <p>第三部分 兴趣倾向评估</p>
                        <span>.........................................................................................................<small
                          class="page-menu-seq" cid="31">04</small></span>
                      </li>
                      <li class="title2">
                        <p>3.1兴趣倾向评估结果</p>
                        <span>................................................................................................................<small
                          class="page-menu-seq" cid="31">02</small></span>
                      </li>
                      <li class="title2">
                        <p>3.2兴趣倾向分析</p>
                        <span>................................................................................................................<small
                          class="page-menu-seq" cid="32">02</small></span>
                      </li>

                      <li class="title1">
                        <p>第四部分 职业生涯规划</p>
                        <span>.........................................................................................................<small
                          class="page-menu-seq" cid="41">04</small></span>
                      </li>
                      <li class="title2">
                        <p>4.1职业匹配结果评估</p>
                        <span>...........................................................................................................<small
                          class="page-menu-seq" cid="41">02</small></span>
                      </li>
                      <li class="title2">
                        <p>4.2最佳匹配职业与专业</p>
                        <span>...........................................................................................................<small
                          class="page-menu-seq" cid="41">02</small></span>
                      </li>
                      <li class="title2">
                        <p>4.3第二匹配职业与专业</p>
                        <span>...........................................................................................................<small
                          class="page-menu-seq" cid="42">02</small></span>
                      </li>
                      <li class="title2">
                        <p>4.4第三匹配职业与专业</p>
                        <span>...........................................................................................................<small
                          class="page-menu-seq" cid="43">02</small></span>
                      </li>
                      <li class="title1">
                        <p>第五部分 学习特征评估</p>
                        <span>.........................................................................................................<small
                          class="page-menu-seq" cid="51">04</small></span>
                      </li>
                      <li class="title2">
                        <p>5.1基本学习能力</p>
                        <span>...................................................................................................................<small
                          class="page-menu-seq" cid="51">02</small></span>
                      </li>


                    </ul>

                  </div>
                </div>
                <div class="font-blue pdf-footer">
                  <p class="pull-left">测评网址：www.ymtest.com</p>
                  <p class="pull-right">测评方法、工具及报告设计已申请产权保护</p>
                </div>
              </div>
              <!--page 3-->

              <!--page 4-->
              <div class="pdf-page">
                <div class="pdf-header">
                  <img class="pull-left" src="../../assets/pdf/header-logo.png" height="39px">
                  <p class="pull-right pdf-page-seq"></p>
                  <p class="pull-right font-blue">高中生升学规划测评报告</p>
                </div>
                <div class=" pdf-content">
                  <div class="d-relative page-menu">

                    <ul>
                      <li class="title3">
                        <p>5.1.1基本学习能力评估结果</p>
                        <span>...............................................................................................<small
                          class="page-menu-seq" cid="511">04</small></span>
                      </li>
                      <li class="title3">
                        <p>5.1.2基本学习能力分析</p>
                        <span>....................................................................................................<small
                          class="page-menu-seq" cid="512">04</small></span>
                      </li>
                      <li class="title2">
                        <p>5.2学习态度</p>
                        <span>.........................................................................................................................<small
                          class="page-menu-seq" cid="52">04</small></span>
                      </li>

                      <li class="title3">
                        <p>5.2.1学习态度评估结果</p>
                        <span>...............................................................................................<small
                          class="page-menu-seq" cid="521">04</small></span>
                      </li>
                      <li class="title3">
                        <p>5.2.2学习态度分析</p>
                        <span>....................................................................................................<small
                          class="page-menu-seq" cid="522">04</small></span>
                      </li>

                      <li class="title2">
                        <p>5.3学习过程</p>
                        <span>..........................................................................................................................<small
                          class="page-menu-seq" cid="53">04</small></span>
                      </li>

                      <li class="title3">
                        <p>5.3.1学习过程评估结果</p>
                        <span>....................................................................................................<small
                          class="page-menu-seq" cid="531">04</small></span>
                      </li>
                      <li class="title3">
                        <p>5.3.2学习过程分析</p>
                        <span>.............................................................................................................<small
                          class="page-menu-seq" cid="532">04</small></span>
                      </li>

                      <li class="title2">
                        <p>5.4学习风格</p>
                        <span>........................................................................................................................<small
                          class="page-menu-seq" cid="541">04</small></span>
                      </li>

                      <li class="title3">
                        <p>5.4.1学习风格评估结果</p>
                        <span>.....................................................................................................<small
                          class="page-menu-seq" cid="541">04</small></span>
                      </li>
                      <li class="title3">
                        <p>5.4.2学习风格分析</p>
                        <span>............................................................................................................<small
                          class="page-menu-seq" cid="542">04</small></span>
                      </li>
                      <li class="title1">
                        <p>第六部分 心理健康评估</p>
                        <span>.........................................................................................................<small
                          class="page-menu-seq" cid="61">04</small></span>
                      </li>
                      <li class="title2">
                        <p>6.1心理健康评估结果</p>
                        <span>.............................................................................................................<small
                          class="page-menu-seq" cid="61">04</small></span>
                      </li>

                      <li class="title2">
                        <p>6.2心理健康分析</p>
                        <span>....................................................................................................................<small
                          class="page-menu-seq" cid="62">04</small></span>
                      </li>

                    </ul>
                  </div>
                </div>
                <div class="font-blue pdf-footer">
                  <p class="pull-left">测评网址：www.ymtest.com</p>
                  <p class="pull-right">测评方法、工具及报告设计已申请产权保护</p>
                </div>
              </div>
              <!--page 4-->

              <!--page 5-->
              <div class="pdf-page">
                <div class="pdf-header">
                  <img class="pull-left" src="../../assets/pdf/header-logo.png" height="39px">
                  <p class="pull-right pdf-page-seq"></p>
                  <p class="pull-right font-blue">高中生升学规划测评报告</p>
                </div>
                <div class=" pdf-content">
                  <div class="font-blue pdf-page-title"><span>第一部分 人格特性评估</span></div>
                  <div class="pdf-border-paragraph m-b20">
                    <p>
                      该部分是对您人格特性的个性化描述。基于MBTI性格评估理论模型，用以衡量和描述人们在能量来源（外向或内向）、获取信息（实感或直觉）、作出决策（思考或情感）、行动方式（判断或知觉）四个维度的心理活动规律和人格类型，并且该理论模型清楚的解释了人格与职业之间的关系。
                    </p>
                    <p>
                      四个维度如同四把标尺，每个人的性格都会落在标尺的某个点上，这个点靠近哪个端点，就意味着个体就有哪方面的偏好。如在第一维度上，个体的性格靠近外向这一端，性格就偏外向，而且越接近端点，偏好越强。作为个体，一方面可以根据内心的感受识别自我偏好，发挥优势，另一方面，又要约束自我性格的弱点。性格没有好与坏，测试的目的是反映最真实的自己，而不是别人所期待的你。
                    </p>
                  </div>

                  <div class="pdf-blue-title">
                    <img src="../../assets/pdf/title-trn.png" alt="">1.1人格特性类别评估结果
                  </div>

                  <div class="pdf-border-paragraph m-b20" style="margin-bottom:40px">
                    <p>
                      下图为人格特性的评估结果，展示了测试者在四个人格维度上的倾向以及程度描述。根据该结果能够清楚知道自己的人格类型，并结合后面的详细解释准确了解自己。
                    </p>
                  </div>

                  <div class="page-5-biao rgtx-biao-1">
                    <h3><span>偏好程度</span></h3>
                    <div class="grade">
                      <p>强</p>
                      <p>明显</p>
                      <p>中等</p>
                      <p>轻微</p>
                      <p>中等</p>
                      <p>明显</p>
                      <p>强</p>
                    </div>
                    <div class="biao-content">
                      <ul>
                        <li v-if="xgtxFoData1>0"
                            :style="{marginLeft:-xgtxFoData1-1.5+'px',width:xgtxFoData1+'px'}"></li>
                        <li v-if="xgtxFoData1<0" :style="{width:-xgtxFoData1+'px'}"></li>
                        <li v-if="xgtxFoData1==0" :style="{width:4+'px',marginLeft:-3.5+'px'}"></li>
                        <li v-if="xgtxFoData2>0"
                            :style="{marginLeft:-xgtxFoData2-1.5+'px',width:xgtxFoData2+'px'}"></li>
                        <li v-if="xgtxFoData2<0" :style="{width:-xgtxFoData2+'px'}"></li>
                        <li v-if="xgtxFoData2==0" :style="{width:4+'px',marginLeft:-3.5+'px'}"></li>
                        <li v-if="xgtxFoData3>0"
                            :style="{marginLeft:-xgtxFoData3-1.5+'px',width:xgtxFoData3+'px'}"></li>
                        <li v-if="xgtxFoData3<0" :style="{width:-xgtxFoData3+'px'}"></li>
                        <li v-if="xgtxFoData3==0" :style="{width:4+'px',marginLeft:-3.5+'px'}"></li>
                        <li v-if="xgtxFoData4>0"
                            :style="{marginLeft:-xgtxFoData4-1.5+'px',width:xgtxFoData4+'px'}"></li>
                        <li v-if="xgtxFoData4<0" :style="{width:-xgtxFoData4+'px'}"></li>
                        <li v-if="xgtxFoData4==0" :style="{width:4+'px',marginLeft:-3.5+'px'}"></li>
                      </ul>
                    </div>
                    <div class="biao-font biao-left-font">
                      <ul>
                        <li :class="xgtxFoData1>0?'active':''">外向（E）</li>
                        <li :class="xgtxFoData2>0?'active':''">实感（S）</li>
                        <li :class="xgtxFoData3>0?'active':''">思考（T）</li>
                        <li :class="xgtxFoData4>0?'active':''">判断（J）</li>
                      </ul>
                    </div>

                    <div class="biao-font biao-right-font">
                      <ul>
                        <li :class="xgtxFoData1<=0?'active':''">（I）内向</li>
                        <li :class="xgtxFoData2<=0?'active':''">（N）直觉</li>
                        <li :class="xgtxFoData3<=0?'active':''">（F）情感</li>
                        <li :class="xgtxFoData4<=0?'active':''">（P）知觉</li>
                      </ul>
                    </div>

                    <div class="conclusion">
                      <p>你的人格类型为</p>
                      <p class="name name1">{{personality.name}}</p>
                      <p class="name name2">{{personalityDesc}}</p>
                      <p>人格特性评估结果示意图</p>
                    </div>

                  </div>

                </div>
                <div class="font-blue pdf-footer">
                  <p class="pull-left">测评网址：www.ymtest.com</p>
                  <p class="pull-right">测评方法、工具及报告设计已申请产权保护</p>
                </div>
              </div>
              <!--page 5-->

              <!--page 6-->
              <div class="pdf-page">
                <div class="pdf-header">
                  <img class="pull-left" src="../../assets/pdf/header-logo.png" height="39px">
                  <p class="pull-right pdf-page-seq"></p>
                  <p class="pull-right font-blue">高中生升学规划测评报告</p>
                </div>
                <div class=" pdf-content">
                  <div class="pdf-blue-title" id="12">
                    <img src="../../assets/pdf/title-trn.png" alt="">1.2人格特性类型分析
                  </div>

                  <div class="pdf-border-paragraph m-b20">
                    <p>
                      根据测试结果，您的类型为{{personality.desc}}，下面我们将从人格类型基本描述、气质类型、人格类型的优劣势、人格类型的功能运用以及成功秘诀方面，进行具体的解释。
                    </p>
                  </div>
                  <div class="pdf-blue-title pdf-yellow-title" id="121">
                    <img src="../../assets/pdf/title-trn.png" alt="">1.2.1人格类型基本描述
                  </div>

                  <div class="pdf-border-paragraph m-b20">
                    <div class="left-block" v-for="desc in personality.basic_desc">
                      <div class="pull-left"></div>
                      <div class="text-container">
                        {{desc.detail}}
                      </div>
                    </div>

                  </div>

                  <div class="pdf-blue-title pdf-yellow-title" id="122">
                    <img src="../../assets/pdf/title-trn.png" alt="">1.2.2气质类型
                  </div>

                  <div class="pdf-border-paragraph">
                    <div class="left-block" v-for="(desc,index) in personality.temper" v-if="index<ootLen">
                      <div class="pull-left"></div>
                      <div class="text-container">
                        {{desc.detail}}
                      </div>
                    </div>
                  </div>

                </div>
                <div class="font-blue pdf-footer">
                  <p class="pull-left">测评网址：www.ymtest.com</p>
                  <p class="pull-right">测评方法、工具及报告设计已申请产权保护</p>
                </div>
              </div>
              <!--page 6-->

              <!--page 6补充-->
              <div class="pdf-page">
                <div class="pdf-header">
                  <img class="pull-left" src="../../assets/pdf/header-logo.png" height="39px">
                  <p class="pull-right pdf-page-seq"></p>
                  <p class="pull-right font-blue">高中生升学规划测评报告</p>
                </div>
                <div class=" pdf-content">

                  <div class="pdf-border-paragraph m-b20" id="ootContent">
                    <div class="left-block" v-for="(desc,index) in personality.temper" v-if="index>ootLen-1">
                      <div class="pull-left"></div>
                      <div class="text-container">
                        {{desc.detail}}
                      </div>
                    </div>
                  </div>

                  <div class="pdf-blue-title pdf-yellow-title" id="123">
                    <img src="../../assets/pdf/title-trn.png" alt="">1.2.3人格类型优势
                  </div>
                  <div class="pdf-border-paragraph m-b20">
                    <div class="left-block" v-for="(desc,index) in personality.advantage" v-if="index<othLen">
                      <div class="pull-left"></div>
                      <div class="text-container">
                        {{desc.detail}}
                      </div>
                    </div>

                  </div>

                </div>
                <div class="font-blue pdf-footer">
                  <p class="pull-left">测评网址：www.ymtest.com</p>
                  <p class="pull-right">测评方法、工具及报告设计已申请产权保护</p>
                </div>
              </div>
              <!--page 6补充-->

              <!--page 7-->
              <div class="pdf-page">
                <div class="pdf-header">
                  <img class="pull-left" src="../../assets/pdf/header-logo.png" height="39px">
                  <p class="pull-right pdf-page-seq"></p>
                  <p class="pull-right font-blue">高中生升学规划测评报告</p>
                </div>
                <div class=" pdf-content">
                  <div class="pdf-border-paragraph pdf-min-height m-b10" v-if="oadLen>othLen-1" id="othContent">
                    <div class="left-block" v-for="(desc,index) in personality.advantage" v-if="index>othLen-1">
                      <div class="pull-left"></div>
                      <div class="text-container">
                        {{desc.detail}}
                      </div>
                    </div>

                  </div>

                  <div class="pdf-blue-title pdf-yellow-title m-b10" id="124">
                    <img src="../../assets/pdf/title-trn.png" alt="">1.2.4人格类型劣势
                  </div>
                  <div class="pdf-border-paragraph pdf-min-height m-b10" id="otfContent">
                    <div class="left-block" v-for="desc in personality.disadvantage">
                      <div class="pull-left"></div>
                      <div class="text-container">
                        {{desc.detail}}
                      </div>
                    </div>


                  </div>
                  <div class="pdf-blue-title pdf-yellow-title m-b10" id="125">
                    <img src="../../assets/pdf/title-trn.png" alt="">1.2.5人格类型的功能运用
                  </div>
                  <div class="pdf-border-paragraph pdf-min-height m-b10" style="padding:7px 10px;" id="otfiContent">
                    <div class="left-block" v-for="desc in personality.funcs">
                      <div class="pull-left"></div>
                      <div class="text-container">
                        {{desc.detail}}
                      </div>
                    </div>


                  </div>

                  <div class="pdf-blue-title pdf-yellow-title m-b10" id="126" v-if="otsShow">
                    <img src="../../assets/pdf/title-trn.png" alt="">1.2.6成功秘诀
                  </div>
                  <div class="pdf-border-paragraph pbp-height-medium m-b10" v-if="otsShow">
                    <div class="left-block" v-for="desc in personality.success">
                      <div class="pull-left"></div>
                      <div class="text-container">
                        {{desc.detail}}
                      </div>
                    </div>
                  </div>
                </div>
                <div class="font-blue pdf-footer">
                  <p class="pull-left">测评网址：www.ymtest.com</p>
                  <p class="pull-right">测评方法、工具及报告设计已申请产权保护</p>
                </div>

              </div>
              <!--page 7-->

              <!--page 8-->
              <!--<div class="pdf-page">-->
              <!--<div class="pdf-header">-->
              <!--<img class="pull-left" src="../../assets/pdf/header-logo.png" height="39px">-->
              <!--<p class="pull-right pdf-page-seq"></p>-->
              <!--<p class="pull-right font-blue">高中生升学规划测评报告</p>-->
              <!--</div>-->
              <!--<div class=" pdf-content">-->


              <!--</div>-->
              <!--<div class="font-blue pdf-footer">-->
              <!--<p class="pull-left">测评网址：www.ymtest.com</p>-->
              <!--<p class="pull-right">测评方法、工具及报告设计已申请产权保护</p>-->
              <!--</div>-->
              <!--</div>-->
              <!--page 8-->

              <!--page 9-->
              <div class="pdf-page">
                <div class="pdf-header">
                  <img class="pull-left" src="../../assets/pdf/header-logo.png" height="39px">
                  <p class="pull-right pdf-page-seq"></p>
                  <p class="pull-right font-blue">高中生升学规划测评报告</p>
                </div>
                <div class=" pdf-content">

                  <div class="pdf-blue-title pdf-yellow-title m-b10" id="126" v-if="!otsShow">
                    <img src="../../assets/pdf/title-trn.png" alt="">1.2.6成功秘诀
                  </div>
                  <div class="pdf-border-paragraph pbp-height-medium m-b10" v-if="!otsShow">
                    <div class="left-block" v-for="desc in personality.success">
                      <div class="pull-left"></div>
                      <div class="text-container">
                        {{desc.detail}}
                      </div>
                    </div>
                  </div>
                  <div class="pdf-blue-title m-b10" id="131">
                    <img src="../../assets/pdf/title-trn.png" alt="">1.3 人格特性深度评估与分析
                  </div>
                  <div class="pdf-border-paragraph pbp-height-medium m-b10">
                    <p>
                      以下是对你的人格类型的各个维度进行更为深刻的解释，有助于你更好的认识自己。你的个性是复杂而动态的，下面通过显示四个维度的五个不同的子维度来分析你的偏好结果。
                    </p>
                    <p>
                      （1）每个子维度有两个相反的方面。你更倾向于喜欢运用与您的整体喜好相同的一方（合倾向）。

                    </p>
                    <p>
                      （2）每个子维度，您也可能会偏好与您的整体偏好相反的一方（背离倾向），或者不显示任何一方的明确偏好（中间结果）。
                    </p>
                    <p>
                      （3）了解你在这20个方面的偏好可以帮助你更好地理解、体验和表达你所属类型的独特方式。
                    </p>
                  </div>
                  <div class="pdf-border-paragraph pdf-paragraph pbp-height-medium m-b10">
                    下面对您的四个维度的评估结果进行分析，每部分都会给出评估的结果示意图。示意图中会呈现该维度下的各个子维度及程度结果。
                  </div>

                  <div class="pdf-blue-title pdf-yellow-title m-b10" id="">
                    <img src="../../assets/pdf/title-trn.png" alt="">1.3.1 子维度一（外向与内向）
                  </div>
                  <div class="page-5-biao page-9-biao xgtx-biao2">
                    <div class="title">
                      <div class="title-item left">
                        <h3 :class="personalityName[0]=='E' ? 'active' : ''">外向（E）</h3>
                        <p>精力集中于人和物，<br>关注外部世界</p>
                      </div>
                      <div class="title-item right">
                        <h3 :class="personalityName[0]=='I' ? 'active' : ''">（I）内向</h3>
                        <p>精力集中于概念和想法，<br>关注内心世界</p>
                      </div>
                    </div>
                    <div class="grade">
                      <p v-if="personalityName[0]=='E'">合倾向</p>
                      <p v-if="personalityName[0]=='I'">背离倾向</p>
                      <p>中间区域</p>
                      <p v-if="personalityName[0]=='E'">背离倾向</p>
                      <p v-if="personalityName[0]=='I'">合倾向</p>
                    </div>
                    <div class="biao-content">
                      <ul>
                        <li v-if="xgtxFtData1>0"
                            :style="{marginLeft:-xgtxFtData1-1.5+'px',width:xgtxFtData1+'px'}"></li>
                        <li v-if="xgtxFtData1<0" :style="{width:-xgtxFtData1+'px'}"></li>
                        <li v-if="xgtxFtData1==0" :style="{width:4+'px',marginLeft:-3.5+'px'}"></li>
                        <li v-if="xgtxFtData2>0"
                            :style="{marginLeft:-xgtxFtData2-1.5+'px',width:xgtxFtData2+'px'}"></li>
                        <li v-if="xgtxFtData2<0" :style="{width:-xgtxFtData2+'px'}"></li>
                        <li v-if="xgtxFtData2==0" :style="{width:4+'px',marginLeft:-3.5+'px'}"></li>
                        <li v-if="xgtxFtData3>0"
                            :style="{marginLeft:-xgtxFtData3-1.5+'px',width:xgtxFtData3+'px'}"></li>
                        <li v-if="xgtxFtData3<0" :style="{width:-xgtxFtData3+'px'}"></li>
                        <li v-if="xgtxFtData3==0" :style="{width:4+'px',marginLeft:-3.5+'px'}"></li>
                        <li v-if="xgtxFtData4>0"
                            :style="{marginLeft:-xgtxFtData4-1.5+'px',width:xgtxFtData4+'px'}"></li>
                        <li v-if="xgtxFtData4<0" :style="{width:-xgtxFtData4+'px'}"></li>
                        <li v-if="xgtxFtData4==0" :style="{width:4+'px',marginLeft:-3.5+'px'}"></li>
                        <li v-if="xgtxFtData5>0"
                            :style="{marginLeft:-xgtxFtData5-1.5+'px',width:xgtxFtData5+'px'}"></li>
                        <li v-if="xgtxFtData5<0" :style="{width:-xgtxFtData5+'px'}"></li>
                        <li v-if="xgtxFtData5==0" :style="{width:4+'px',marginLeft:-3.5+'px'}"></li>
                      </ul>
                    </div>
                    <div class="biao-font biao-left-font">
                      <ul>
                        <li :class="xgtxFtData1>0?'active':''">主动</li>
                        <li :class="xgtxFtData2>0?'active':''">健谈</li>
                        <li :class="xgtxFtData3>0?'active':''">合群</li>
                        <li :class="xgtxFtData4>0?'active':''">活跃</li>
                        <li :class="xgtxFtData5>0?'active':''">热情</li>
                      </ul>
                    </div>

                    <div class="biao-font biao-right-font">
                      <ul>
                        <li :class="xgtxFtData1<=0?'active':''">被动</li>
                        <li :class="xgtxFtData2<=0?'active':''">内敛</li>
                        <li :class="xgtxFtData3<=0?'active':''">独处</li>
                        <li :class="xgtxFtData4<=0?'active':''">自省</li>
                        <li :class="xgtxFtData5<=0?'active':''">沉静</li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div class="font-blue pdf-footer">
                  <p class="pull-left">测评网址：www.ymtest.com</p>
                  <p class="pull-right">测评方法、工具及报告设计已申请产权保护</p>
                </div>
              </div>
              <!--page 9-->

              <!--page 10-->
              <div class="pdf-page">
                <div class="pdf-header">
                  <img class="pull-left" src="../../assets/pdf/header-logo.png" height="39px">
                  <p class="pull-right pdf-page-seq"></p>
                  <p class="pull-right font-blue">高中生升学规划测评报告</p>
                </div>
                <div class=" pdf-content">
                  <div class="pdf-border-paragraph m-b15" v-for="(char,index) in wx.chars" v-if="index<4">
                    <div class="blue-title">
                      {{char.name}}
                    </div>
                    <div class="left-block" v-for="desc in char.comments">
                      <div class="pull-left"></div>
                      <div class="text-container">
                        {{desc.detail}}
                      </div>
                    </div>
                  </div>
                </div>
                <div class="font-blue pdf-footer">
                  <p class="pull-left">测评网址：www.ymtest.com</p>
                  <p class="pull-right">测评方法、工具及报告设计已申请产权保护</p>
                </div>
              </div>
              <!--page 10-->

              <!--page 11-->
              <div class="pdf-page">
                <div class="pdf-header">
                  <img class="pull-left" src="../../assets/pdf/header-logo.png" height="39px">
                  <p class="pull-right pdf-page-seq"></p>
                  <p class="pull-right font-blue">高中生升学规划测评报告</p>
                </div>
                <div class=" pdf-content" id="132">
                  <div class="pdf-border-paragraph m-b15" v-for="(char,index) in wx.chars" v-if="index==4">
                    <div class="blue-title">
                      {{char.name}}
                    </div>
                    <div class="left-block" v-for="desc in char.comments">
                      <div class="pull-left"></div>
                      <div class="text-container">
                        {{desc.detail}}
                      </div>
                    </div>
                  </div>
                  <div class="pdf-blue-title pdf-yellow-title">
                    <img src="../../assets/pdf/title-trn.png" alt="">1.3.2子维度二（直觉与实感 ）
                  </div>
                  <div class="page-5-biao page-9-biao xgtx-biao2" style="margin-bottom: 20px">
                    <div class="title">
                      <div class="title-item left">
                        <h3 :class="personalityName[1]=='S' ? 'active' : ''">实感（S）</h3>
                        <p>专注于五感可以感知，<br>的东西，相信事实</p>
                      </div>

                      <div class="title-item right">
                        <h3 :class="personalityName[1]=='N' ? 'active' : ''">（N）直觉</h3>
                        <p>关注并相信人际关系，理论<br>及未来的可能性</p>
                      </div>
                    </div>
                    <div class="grade">
                      <p v-if="personalityName[1]=='S'">合倾向</p>
                      <p v-if="personalityName[1]=='N'">背离倾向</p>
                      <p>中间区域</p>
                      <p v-if="personalityName[1]=='S'">背离倾向</p>
                      <p v-if="personalityName[1]=='N'">合倾向</p>
                    </div>
                    <div class="biao-content">
                      <ul>
                        <li v-if="xgtxFthData1>0"
                            :style="{marginLeft:-xgtxFthData1-1.5+'px',width:xgtxFthData1+'px'}"></li>
                        <li v-if="xgtxFthData1<0" :style="{width:-xgtxFthData1+'px'}"></li>
                        <li v-if="xgtxFthData1==0" :style="{width:4+'px',marginLeft:-3.5+'px'}"></li>
                        <li v-if="xgtxFthData2>0"
                            :style="{marginLeft:-xgtxFthData2-1.5+'px',width:xgtxFthData2+'px'}"></li>
                        <li v-if="xgtxFthData2<0" :style="{width:-xgtxFthData2+'px'}"></li>
                        <li v-if="xgtxFthData2==0" :style="{width:4+'px',marginLeft:-3.5+'px'}"></li>
                        <li v-if="xgtxFthData3>0"
                            :style="{marginLeft:-xgtxFthData3-1.5+'px',width:xgtxFthData3+'px'}"></li>
                        <li v-if="xgtxFthData3<0" :style="{width:-xgtxFthData3+'px'}"></li>
                        <li v-if="xgtxFthData3==0" :style="{width:4+'px',marginLeft:-3.5+'px'}"></li>
                        <li v-if="xgtxFthData4>0"
                            :style="{marginLeft:-xgtxFthData4-1.5+'px',width:xgtxFthData4+'px'}"></li>
                        <li v-if="xgtxFthData4<0" :style="{width:-xgtxFthData4+'px'}"></li>
                        <li v-if="xgtxFthData4==0" :style="{width:4+'px',marginLeft:-3.5+'px'}"></li>
                        <li v-if="xgtxFthData5>0"
                            :style="{marginLeft:-xgtxFthData5-1.5+'px',width:xgtxFthData5+'px'}"></li>
                        <li v-if="xgtxFthData5<0" :style="{width:-xgtxFthData5+'px'}"></li>
                        <li v-if="xgtxFthData5==0" :style="{width:4+'px',marginLeft:-3.5+'px'}"></li>
                      </ul>
                    </div>
                    <div class="biao-font biao-left-font">
                      <ul>
                        <li :class="xgtxFthData1>0?'active':''">具体</li>
                        <li :class="xgtxFthData2>0?'active':''">事实</li>
                        <li :class="xgtxFthData3>0?'active':''">实际</li>
                        <li :class="xgtxFthData4>0?'active':''">实践</li>
                        <li :class="xgtxFthData5>0?'active':''">传统</li>
                      </ul>
                    </div>

                    <div class="biao-font biao-right-font">
                      <ul>
                        <li :class="xgtxFthData1<=0?'active':''">抽象</li>
                        <li :class="xgtxFthData2<=0?'active':''">想象</li>
                        <li :class="xgtxFthData3<=0?'active':''">理念</li>
                        <li :class="xgtxFthData4<=0?'active':''">理论</li>
                        <li :class="xgtxFthData5<=0?'active':''">创新</li>
                      </ul>
                    </div>
                  </div>
                  <div class="pdf-border-paragraph m-b15" v-for="(char,index) in sg.chars" v-if="index==0">
                    <div class="blue-title">
                      {{char.name}}
                    </div>
                    <div class="left-block" v-for="desc in char.comments">
                      <div class="pull-left"></div>
                      <div class="text-container">
                        {{desc.detail}}
                      </div>
                    </div>
                  </div>
                </div>
                <div class="font-blue pdf-footer">
                  <p class="pull-left">测评网址：www.ymtest.com</p>
                  <p class="pull-right">测评方法、工具及报告设计已申请产权保护</p>
                </div>
              </div>
              <!--page 11-->

              <!--page 12-->
              <div class="pdf-page">
                <div class="pdf-header">
                  <img class="pull-left" src="../../assets/pdf/header-logo.png" height="39px">
                  <p class="pull-right pdf-page-seq"></p>
                  <p class="pull-right font-blue">高中生升学规划测评报告</p>
                </div>
                <div class=" pdf-content">
                  <div class="pdf-border-paragraph m-b15" v-for="(char,index) in sg.chars" v-if="index>0">
                    <div class="blue-title">
                      {{char.name}}
                    </div>
                    <div class="left-block" v-for="desc in char.comments">
                      <div class="pull-left"></div>
                      <div class="text-container">
                        {{desc.detail}}
                      </div>
                    </div>
                  </div>
                </div>
                <div class="font-blue pdf-footer">
                  <p class="pull-left">测评网址：www.ymtest.com</p>
                  <p class="pull-right">测评方法、工具及报告设计已申请产权保护</p>
                </div>
              </div>
              <!--page 12-->

              <!--page 13-->
              <div class="pdf-page">
                <div class="pdf-header">
                  <img class="pull-left" src="../../assets/pdf/header-logo.png" height="39px">
                  <p class="pull-right pdf-page-seq"></p>
                  <p class="pull-right font-blue">高中生升学规划测评报告</p>
                </div>
                <div class=" pdf-content">
                  <div class="pdf-blue-title pdf-yellow-title" id="133">
                    <img src="../../assets/pdf/title-trn.png" alt="">1.3.3子维度三（思考与情感）
                  </div>
                  <div class="page-5-biao page-9-biao xgtx-biao2" style="margin-bottom: 30px">
                    <div class="title">
                      <div class="title-item left">
                        <h3 :class="personalityName[2]=='T' ? 'active' : ''">思考（T）</h3>
                        <p>喜欢用合乎逻辑的分<br>析做出选择和决定</p>
                      </div>

                      <div class="title-item right">
                        <h3 :class="personalityName[2]=='F' ? 'active' : ''">（F）情感</h3>
                        <p>喜欢以人为中心的价值观，<br>创建和谐</p>
                      </div>
                    </div>
                    <div class="grade">
                      <p v-if="personalityName[2]=='T'">合倾向</p>
                      <p v-if="personalityName[2]=='F'">背离倾向</p>
                      <p>中间区域</p>
                      <p v-if="personalityName[2]=='T'">背离倾向</p>
                      <p v-if="personalityName[2]=='F'">合倾向</p>
                    </div>
                    <div class="biao-content">
                      <ul>
                        <li v-if="xgtxFfData1>0"
                            :style="{marginLeft:-xgtxFfData1-1.5+'px',width:xgtxFfData1+'px'}"></li>
                        <li v-if="xgtxFfData1<0" :style="{width:-xgtxFfData1+'px'}"></li>
                        <li v-if="xgtxFfData1==0" :style="{width:4+'px',marginLeft:-3.5+'px'}"></li>
                        <li v-if="xgtxFfData2>0"
                            :style="{marginLeft:-xgtxFfData2-1.5+'px',width:xgtxFfData2+'px'}"></li>
                        <li v-if="xgtxFfData2<0" :style="{width:-xgtxFfData2+'px'}"></li>
                        <li v-if="xgtxFfData2==0" :style="{width:4+'px',marginLeft:-3.5+'px'}"></li>
                        <li v-if="xgtxFfData3>0"
                            :style="{marginLeft:-xgtxFfData3-1.5+'px',width:xgtxFfData3+'px'}"></li>
                        <li v-if="xgtxFfData3<0" :style="{width:-xgtxFfData3+'px'}"></li>
                        <li v-if="xgtxFfData3==0" :style="{width:4+'px',marginLeft:-3.5+'px'}"></li>
                        <li v-if="xgtxFfData4>0"
                            :style="{marginLeft:-xgtxFfData4-1.5+'px',width:xgtxFfData4+'px'}"></li>
                        <li v-if="xgtxFfData4<0" :style="{width:-xgtxFfData4+'px'}"></li>
                        <li v-if="xgtxFfData4==0" :style="{width:4+'px',marginLeft:-3.5+'px'}"></li>
                        <li v-if="xgtxFfData5>0"
                            :style="{marginLeft:-xgtxFfData5-1.5+'px',width:xgtxFfData5+'px'}"></li>
                        <li v-if="xgtxFfData5<0" :style="{width:-xgtxFfData5+'px'}"></li>
                        <li v-if="xgtxFfData5==0" :style="{width:4+'px',marginLeft:-3.5+'px'}"></li>
                      </ul>
                    </div>
                    <div class="biao-font biao-left-font">
                      <ul>
                        <li :class="xgtxFfData1>0?'active':''">理智</li>
                        <li :class="xgtxFfData2>0?'active':''">公正</li>
                        <li :class="xgtxFfData3>0?'active':''">质疑</li>
                        <li :class="xgtxFfData4>0?'active':''">批评</li>
                        <li :class="xgtxFfData5>0?'active':''">坚定</li>
                      </ul>
                    </div>

                    <div class="biao-font biao-right-font">
                      <ul>
                        <li :class="xgtxFfData1<=0?'active':''">同情</li>
                        <li :class="xgtxFfData2<=0?'active':''">宽容</li>
                        <li :class="xgtxFfData3<=0?'active':''">和谐</li>
                        <li :class="xgtxFfData4<=0?'active':''">包容</li>
                        <li :class="xgtxFfData5<=0?'active':''">和蔼</li>
                      </ul>
                    </div>
                  </div>
                  <div class="pdf-border-paragraph m-b15" v-for="(char,index) in sk.chars" v-if="index<2">
                    <div class="blue-title">
                      {{char.name}}
                    </div>
                    <div class="left-block" v-for="desc in char.comments">
                      <div class="pull-left"></div>
                      <div class="text-container">
                        {{desc.detail}}
                      </div>
                    </div>
                  </div>
                </div>
                <div class="font-blue pdf-footer">
                  <p class="pull-left">测评网址：www.ymtest.com</p>
                  <p class="pull-right">测评方法、工具及报告设计已申请产权保护</p>
                </div>
              </div>
              <!--page 13-->

              <!--page 14-->
              <div class="pdf-page">
                <div class="pdf-header">
                  <img class="pull-left" src="../../assets/pdf/header-logo.png" height="39px">
                  <p class="pull-right pdf-page-seq"></p>
                  <p class="pull-right font-blue">高中生升学规划测评报告</p>
                </div>
                <div class=" pdf-content">
                  <div class="pdf-border-paragraph m-b15" v-for="(char,index) in sk.chars" v-if="index>1">
                    <div class="blue-title">
                      {{char.name}}
                    </div>
                    <div class="left-block" v-for="desc in char.comments">
                      <div class="pull-left"></div>
                      <div class="text-container">
                        {{desc.detail}}
                      </div>
                    </div>
                  </div>
                </div>
                <div class="font-blue pdf-footer">
                  <p class="pull-left">测评网址：www.ymtest.com</p>
                  <p class="pull-right">测评方法、工具及报告设计已申请产权保护</p>
                </div>
              </div>
              <!--page 14-->

              <!--page 15-->
              <div class="pdf-page">
                <div class="pdf-header">
                  <img class="pull-left" src="../../assets/pdf/header-logo.png" height="39px">
                  <p class="pull-right pdf-page-seq"></p>
                  <p class="pull-right font-blue">高中生升学规划测评报告</p>
                </div>
                <div class=" pdf-content">
                  <div class="pdf-blue-title pdf-yellow-title" id="134">
                    <img src="../../assets/pdf/title-trn.png" alt="">1.3.4子维度四（判断与知觉）
                  </div>
                  <div class="page-5-biao page-9-biao xgtx-biao2" style="margin-bottom: 30px">
                    <div class="title">
                      <div class="title-item left">
                        <h3 :class="personalityName[3]=='J' ? 'active' : ''">判断（J）</h3>
                        <p>有组织，有秩序的快速<br>做出选择与决定</p>
                      </div>

                      <div class="title-item right">
                        <h3 :class="personalityName[3]=='P' ? 'active' : ''">（P）知觉</h3>
                        <p>反应灵活，适应能力强，<br>思想开放</p>
                      </div>
                    </div>
                    <div class="grade">
                      <p v-if="personalityName[3]=='J'">合倾向</p>
                      <p v-if="personalityName[3]=='P'">背离倾向</p>
                      <p>中间区域</p>
                      <p v-if="personalityName[3]=='J'">背离倾向</p>
                      <p v-if="personalityName[3]=='P'">合倾向</p>
                    </div>
                    <div class="biao-content">
                      <ul>
                        <li v-if="xgtxFfiData1>0"
                            :style="{marginLeft:-xgtxFfiData1-1.5+'px',width:xgtxFfiData1+'px'}"></li>
                        <li v-if="xgtxFfiData1<0" :style="{width:-xgtxFfiData1+'px'}"></li>
                        <li v-if="xgtxFfiData1==0" :style="{width:4+'px',marginLeft:-3.5+'px'}"></li>
                        <li v-if="xgtxFfiData2>0"
                            :style="{marginLeft:-xgtxFfiData2-1.5+'px',width:xgtxFfiData2+'px'}"></li>
                        <li v-if="xgtxFfiData2<0" :style="{width:-xgtxFfiData2+'px'}"></li>
                        <li v-if="xgtxFfiData2==0" :style="{width:4+'px',marginLeft:-3.5+'px'}"></li>
                        <li v-if="xgtxFfiData3>0"
                            :style="{marginLeft:-xgtxFfiData3-1.5+'px',width:xgtxFfiData3+'px'}"></li>
                        <li v-if="xgtxFfiData3<0" :style="{width:-xgtxFfiData3+'px'}"></li>
                        <li v-if="xgtxFfiData3==0" :style="{width:4+'px',marginLeft:-3.5+'px'}"></li>
                        <li v-if="xgtxFfiData4>0"
                            :style="{marginLeft:-xgtxFfiData4-1.5+'px',width:xgtxFfiData4+'px'}"></li>
                        <li v-if="xgtxFfiData4<0" :style="{width:-xgtxFfiData4+'px'}"></li>
                        <li v-if="xgtxFfiData4==0" :style="{width:4+'px',marginLeft:-3.5+'px'}"></li>
                        <li v-if="xgtxFfiData5>0"
                            :style="{marginLeft:-xgtxFfiData5-1.5+'px',width:xgtxFfiData5+'px'}"></li>
                        <li v-if="xgtxFfiData5<0" :style="{width:-xgtxFfiData5+'px'}"></li>
                        <li v-if="xgtxFfiData5==0" :style="{width:4+'px',marginLeft:-3.5+'px'}"></li>
                      </ul>
                    </div>
                    <div class="biao-font biao-left-font">
                      <ul>
                        <li :class="xgtxFfiData1>0?'active':''">有条理</li>
                        <li :class="xgtxFfiData2>0?'active':''">有计划</li>
                        <li :class="xgtxFfiData3>0?'active':''">预先准备</li>
                        <li :class="xgtxFfiData4>0?'active':''">保守</li>
                        <li :class="xgtxFfiData5>0?'active':''">缜密</li>
                      </ul>
                    </div>

                    <div class="biao-font biao-right-font">
                      <ul>
                        <li :class="xgtxFfiData1<=0?'active':''">随性</li>
                        <li :class="xgtxFfiData2<=0?'active':''">变通</li>
                        <li :class="xgtxFfiData3<=0?'active':''">被迫行动</li>
                        <li :class="xgtxFfiData4<=0?'active':''">灵活</li>
                        <li :class="xgtxFfiData5<=0?'active':''">突兀</li>
                      </ul>
                    </div>
                  </div>

                  <div class="pdf-border-paragraph m-b15" v-for="(char,index) in pd.chars" v-if="index<2">
                    <div class="blue-title">
                      {{char.name}}
                    </div>
                    <div class="left-block" v-for="desc in char.comments">
                      <div class="pull-left"></div>
                      <div class="text-container">
                        {{desc.detail}}
                      </div>
                    </div>
                  </div>

                </div>
                <div class="font-blue pdf-footer">
                  <p class="pull-left">测评网址：www.ymtest.com</p>
                  <p class="pull-right">测评方法、工具及报告设计已申请产权保护</p>
                </div>
              </div>
              <!--page 15-->

              <!--page 16-->
              <div class="pdf-page">
                <div class="pdf-header">
                  <img class="pull-left" src="../../assets/pdf/header-logo.png" height="39px">
                  <p class="pull-right pdf-page-seq"></p>
                  <p class="pull-right font-blue">高中生升学规划测评报告</p>
                </div>
                <div class="pdf-content">
                  <div class="pdf-border-paragraph m-b15" v-for="(char,index) in pd.chars" v-if="index>1">
                    <div class="blue-title">
                      {{char.name}}
                    </div>
                    <div class="left-block" v-for="desc in char.comments">
                      <div class="pull-left"></div>
                      <div class="text-container">
                        {{desc.detail}}
                      </div>
                    </div>
                  </div>
                </div>
                <div class="font-blue pdf-footer">
                  <p class="pull-left">测评网址：www.ymtest.com</p>
                  <p class="pull-right">测评方法、工具及报告设计已申请产权保护</p>
                </div>
              </div>
              <!--page 16-->

              <!--page 17-->
              <div class="pdf-page">
                <div class="pdf-header">
                  <img class="pull-left" src="../../assets/pdf/header-logo.png" height="39px">
                  <p class="pull-right pdf-page-seq"></p>
                  <p class="pull-right font-blue">高中生升学规划测评报告</p>
                </div>
                <div class=" pdf-content">
                  <div class="pdf-blue-title pdf-yellow-title" id="135">
                    <img src="../../assets/pdf/title-trn.png" alt="">1.3.5与{{personality.name}}人群子维度常模比较
                  </div>
                  <div class="pull-left font-medium pdf-paragraph m-b20">
                    下图显示了全国样本{{personality.name}}的平均分数范围，图中的蓝色条形图表示平均值±1个标准偏差，每个子维度的垂直线显示{{personality.name}}人群的平均分数，加粗的数字表示你的得分。
                  </div>
                  <div class="page-5-biao page-17-biao" style="width:100%; margin-bottom: 30px">
                    <img src="../../assets/pdf/page-17-img.png" alt="">
                    <div class="line-list">

                      <div class="w100 d-relative line-wrapper">
                        <div class="line"
                             :style="{width:(xgtxSData1.rnorm-xgtxSData1.lnorm)*10+'%',marginLeft:(xgtxSData1.lnorm+5)*10+'%'}">
                          <span></span>
                        </div>
                        <strong :style="{marginLeft:(xgtxSData1.score+5)*10-1+'%'}">{{xgtxSData1.score | abs}}</strong>
                      </div>

                      <div class="w100 d-relative line-wrapper">
                        <div class="line"
                             :style="{width:(xgtxSData2.rnorm-xgtxSData2.lnorm)*10+'%',marginLeft:(xgtxSData2.lnorm+5)*10+'%'}">
                          <span></span>
                        </div>
                        <strong :style="{marginLeft:(xgtxSData2.score+5)*10-1+'%'}">{{xgtxSData2.score | abs}}</strong>
                      </div>

                      <div class="w100 d-relative line-wrapper">
                        <div class="line"
                             :style="{width:(xgtxSData3.rnorm-xgtxSData3.lnorm)*10+'%',marginLeft:(xgtxSData3.lnorm+5)*10+'%'}">
                          <span></span>
                        </div>
                        <strong :style="{marginLeft:(xgtxSData3.score+5)*10-1+'%'}">{{xgtxSData3.score | abs}}</strong>
                      </div>

                      <div class="w100 d-relative line-wrapper">
                        <div class="line"
                             :style="{width:(xgtxSData4.rnorm-xgtxSData4.lnorm)*10+'%',marginLeft:(xgtxSData4.lnorm+5)*10+'%'}">
                          <span></span>
                        </div>
                        <strong :style="{marginLeft:(xgtxSData4.score+5)*10-1+'%'}">{{xgtxSData4.score | abs}}</strong>
                      </div>

                      <div class="w100 d-relative line-wrapper">
                        <div class="line"
                             :style="{width:(xgtxSData5.rnorm-xgtxSData5.lnorm)*10+'%',marginLeft:(xgtxSData5.lnorm+5)*10+'%'}">
                          <span></span>
                        </div>
                        <strong :style="{marginLeft:(xgtxSData5.score+5)*10-1+'%'}">{{xgtxSData5.score | abs }}</strong>
                      </div>

                      <div class="w100 d-relative line-wrapper">
                        <div class="line"
                             :style="{width:(xgtxSData6.rnorm-xgtxSData6.lnorm)*10+'%',marginLeft:(xgtxSData6.lnorm+5)*10+'%'}">
                          <span></span>
                        </div>
                        <strong :style="{marginLeft:(xgtxSData6.score+5)*10-1+'%'}">{{xgtxSData6.score | abs}}</strong>
                      </div>

                      <div class="w100 d-relative line-wrapper">
                        <div class="line"
                             :style="{width:(xgtxSData7.rnorm-xgtxSData7.lnorm)*10+'%',marginLeft:(xgtxSData7.lnorm+5)*10+'%'}">
                          <span></span>
                        </div>
                        <strong :style="{marginLeft:(xgtxSData7.score+5)*10-1+'%'}">{{xgtxSData7.score | abs}}</strong>
                      </div>

                      <div class="w100 d-relative line-wrapper">
                        <div class="line"
                             :style="{width:(xgtxSData8.rnorm-xgtxSData8.lnorm)*10+'%',marginLeft:(xgtxSData8.lnorm+5)*10+'%'}">
                          <span></span>
                        </div>
                        <strong :style="{marginLeft:(xgtxSData8.score+5)*10-1+'%'}">{{xgtxSData8.score | abs}}</strong>
                      </div>

                      <div class="w100 d-relative line-wrapper">
                        <div class="line"
                             :style="{width:(xgtxSData9.rnorm-xgtxSData9.lnorm)*10+'%',marginLeft:(xgtxSData9.lnorm+5)*10+'%'}">
                          <span></span>
                        </div>
                        <strong :style="{marginLeft:(xgtxSData9.score+5)*10-1+'%'}">{{xgtxSData9.score | abs}}</strong>
                      </div>

                      <div class="w100 d-relative line-wrapper">
                        <div class="line"
                             :style="{width:(xgtxSData10.rnorm-xgtxSData10.lnorm)*10+'%',marginLeft:(xgtxSData10.lnorm+5)*10+'%'}">
                          <span></span>
                        </div>
                        <strong :style="{marginLeft:(xgtxSData10.score+5)*10-1+'%'}">{{xgtxSData10.score |
                          abs}}</strong>
                      </div>

                      <div class="w100 d-relative line-wrapper">
                        <div class="line"
                             :style="{width:(xgtxSData11.rnorm-xgtxSData11.lnorm)*10+'%',marginLeft:(xgtxSData11.lnorm+5)*10+'%'}">
                          <span></span>
                        </div>
                        <strong :style="{marginLeft:(xgtxSData11.score+5)*10-1+'%'}">{{xgtxSData11.score |
                          abs}}</strong>
                      </div>

                      <div class="w100 d-relative line-wrapper">
                        <div class="line"
                             :style="{width:(xgtxSData12.rnorm-xgtxSData12.lnorm)*10+'%',marginLeft:(xgtxSData12.lnorm+5)*10+'%'}">
                          <span></span>
                        </div>
                        <strong :style="{marginLeft:(xgtxSData12.score+5)*10-1+'%'}">{{xgtxSData12.score |
                          abs}}</strong>
                      </div>

                      <div class="w100 d-relative line-wrapper">
                        <div class="line"
                             :style="{width:(xgtxSData13.rnorm-xgtxSData13.lnorm)*10+'%',marginLeft:(xgtxSData13.lnorm+5)*10+'%'}">
                          <span></span>
                        </div>
                        <strong :style="{marginLeft:(xgtxSData13.score+5)*10-1+'%'}">{{xgtxSData13.score |
                          abs}}</strong>
                      </div>

                      <div class="w100 d-relative line-wrapper">
                        <div class="line"
                             :style="{width:(xgtxSData14.rnorm-xgtxSData14.lnorm)*10+'%',marginLeft:(xgtxSData14.lnorm+5)*10+'%'}">
                          <span></span>
                        </div>
                        <strong :style="{marginLeft:(xgtxSData14.score+5)*10-1+'%'}">{{xgtxSData14.score |
                          abs}}</strong>
                      </div>

                      <div class="w100 d-relative line-wrapper">
                        <div class="line"
                             :style="{width:(xgtxSData15.rnorm-xgtxSData15.lnorm)*10+'%',marginLeft:(xgtxSData15.lnorm+5)*10+'%'}">
                          <span></span>
                        </div>
                        <strong :style="{marginLeft:(xgtxSData15.score+5)*10-1+'%'}">{{xgtxSData15.score |
                          abs}}</strong>
                      </div>

                      <div class="w100 d-relative line-wrapper">
                        <div class="line"
                             :style="{width:(xgtxSData16.rnorm-xgtxSData16.lnorm)*10+'%',marginLeft:(xgtxSData16.lnorm+5)*10+'%'}">
                          <span></span>
                        </div>
                        <strong :style="{marginLeft:(xgtxSData16.score+5)*10-1+'%'}">{{xgtxSData16.score |
                          abs}}</strong>
                      </div>

                      <div class="w100 d-relative line-wrapper">
                        <div class="line"
                             :style="{width:(xgtxSData17.rnorm-xgtxSData17.lnorm)*10+'%',marginLeft:(xgtxSData17.lnorm+5)*10+'%'}">
                          <span></span>
                        </div>
                        <strong :style="{marginLeft:(xgtxSData17.score+5)*10-1+'%'}">{{xgtxSData17.score |
                          abs}}</strong>
                      </div>

                      <div class="w100 d-relative line-wrapper">
                        <div class="line"
                             :style="{width:(xgtxSData18.rnorm-xgtxSData18.lnorm)*10+'%',marginLeft:(xgtxSData18.lnorm+5)*10+'%'}">
                          <span></span>
                        </div>
                        <strong :style="{marginLeft:(xgtxSData18.score+5)*10-1+'%'}">{{xgtxSData18.score |
                          abs}}</strong>
                      </div>

                      <div class="w100 d-relative line-wrapper">
                        <div class="line"
                             :style="{width:(xgtxSData19.rnorm-xgtxSData19.lnorm)*10+'%',marginLeft:(xgtxSData19.lnorm+5)*10+'%'}">
                          <span></span>
                        </div>
                        <strong :style="{marginLeft:(xgtxSData19.score+5)*10-1+'%'}">{{xgtxSData19.score |
                          abs}}</strong>
                      </div>

                      <div class="w100 d-relative line-wrapper">
                        <div class="line"
                             :style="{width:(xgtxSData20.rnorm-xgtxSData20.lnorm)*10+'%',marginLeft:(xgtxSData20.lnorm+5)*10+'%'}">
                          <span></span>
                        </div>
                        <strong :style="{marginLeft:(xgtxSData20.score+5)*10-1+'%'}">{{xgtxSData20.score |
                          abs}}</strong>
                      </div>


                    </div>
                  </div>
                  <div class="jixing" style="margin-bottom: 30px">
                    <div class="jx-content">
                      <p>极性指数: </p>
                      <p>{{reliability}}</p>
                    </div>
                  </div>
                  <div class="pdf-border-paragraph m-b20">
                    <p>
                      极性指数范围为从0到100，表示回答者的子维度得分在测验的内部一致性。得分低于40意味着测试者有很多评分在中间区域里，这可能是由于测试者随意回答问题，缺乏自我认识，或者在使用一个方面功能的矛盾心理造成。
                    </p>
                  </div>
                </div>
                <div class="font-blue pdf-footer">
                  <p class="pull-left">测评网址：www.ymtest.com</p>
                  <p class="pull-right">测评方法、工具及报告设计已申请产权保护</p>
                </div>
              </div>
              <!--page 17-->

              <!--page 18-->
              <div class="pdf-page">
                <div class="pdf-header">
                  <img class="pull-left" src="../../assets/pdf/header-logo.png" height="39px">
                  <p class="pull-right pdf-page-seq"></p>
                  <p class="pull-right font-blue">高中生升学规划测评报告</p>
                </div>
                <div class=" pdf-content">
                  <div class="font-blue pdf-page-title" id="2"><span>第二部分 认知潜能评估</span></div>
                  <div class="pdf-border-paragraph pbp-height-medium m-b20">
                    <p>
                      心理学者认为，能力是与活动联系起来的，是符合活动要求影响活动效果的个性心理特征的综合。潜能是一种尚未显现的能力，它一旦外化，与活动联系起来并影响活动效果，就变成显在能力，即通常所讲的能力，能力只是潜在能力外化的极小部分。通常认为是符合多种活动要求的某些一般能力的结合，如观察力、记忆力等。
                    </p>
                    <p>
                      一般认知潜能测评是通过一系列科学编排的测试内容，用心理测量的方法对与学习、职业相关的十二种基本能力（包括：信息加工能力、工作记忆能力、空间能力、表象能力、思维转换能力、逻辑推理能力、动手操作能力、语言能力、数学能力、组织管理能力、人际交往能力、美术能力）进行测试，通过与同类型群体平均能力水平对比来评估个体的认知潜能。
                    </p>
                  </div>
                  <div class="page-5-biao page-18-biao"
                       style="width:100%; float:left;margin-top:140px; margin-bottom: 30px">
                    <img src="../../assets/pdf/page-18-img.png" alt="">
                    <div class="biao-content">
                    </div>
                  </div>

                </div>
                <div class="font-blue pdf-footer">
                  <p class="pull-left">测评网址：www.ymtest.com</p>
                  <p class="pull-right">测评方法、工具及报告设计已申请产权保护</p>
                </div>
              </div>
              <!--page 18-->

              <!--page 19-->
              <div class="pdf-page">
                <div class="pdf-header">
                  <img class="pull-left" src="../../assets/pdf/header-logo.png" height="39px">
                  <p class="pull-right pdf-page-seq"></p>
                  <p class="pull-right font-blue">高中生升学规划测评报告</p>
                </div>
                <div class=" pdf-content">
                  <div class="pdf-blue-title" id="21">
                    <img src="../../assets/pdf/title-trn.png" alt="">2.1认知潜能评估结果
                  </div>
                  <div class="pdf-border-paragraph pbp-height-medium m-b20">
                    <p>
                      下图展示了各项认知潜能的评估结果，通过与常模范围的比较，可以清楚的知道自己在各个潜能方面的优势和不足。图中评估的能力水平值高于常模范围，则说明在该项能力上具有优势；若能力水平在常模范围之内，则说明该能力与大多数人无明显差别；若能力水平低于常模范围，则说明在该项能力上还有所欠缺，需要训练提高。
                    </p>
                  </div>
                  <div class="page-5-biao page-19-biao"
                       style="width:100%; margin-bottom: 30px;margin-top:120px;float:left;">
                    <img src="../../assets/pdf/page-19-img.png" alt="">
                    <div class="biao-content">
                      <div class="score-item">
                        <div class="score-item-text">{{coreNormData1.score}}</div>
                        <div class="score-line-wrapper">
                          <div class="line-score b-orange"
                               :style="{height:coreNormData1.score/200*370+'px'}">
                            <div class="line-score-norm"
                                 :style="{bottom:coreNormData1.lnorm/200*370+'px',height:(coreNormData1.rnorm-coreNormData1.lnorm)/200*370+'px'}"></div>
                          </div>
                        </div>
                      </div>

                      <div class="score-item">
                        <div class="score-item-text">{{coreNormData2.score}}</div>
                        <div class="score-line-wrapper">
                          <div class="line-score b-orange"
                               :style="{height:coreNormData2.score/200*370+'px'}">
                            <div class="line-score-norm"
                                 :style="{bottom:coreNormData2.lnorm/200*370+'px',height:(coreNormData2.rnorm-coreNormData2.lnorm)/200*370+'px'}"></div>
                          </div>
                        </div>
                      </div>

                      <div class="score-item">
                        <div class="score-item-text">{{coreNormData3.score}}</div>
                        <div class="score-line-wrapper">
                          <div class="line-score b-orange"
                               :style="{height:coreNormData3.score/200*370+'px'}">
                            <div class="line-score-norm"
                                 :style="{bottom:coreNormData3.lnorm/200*370+'px',height:(coreNormData3.rnorm-coreNormData3.lnorm)/200*370+'px'}"></div>
                          </div>
                        </div>
                      </div>

                      <div class="score-item">
                        <div class="score-item-text">{{coreNormData4.score}}</div>
                        <div class="score-line-wrapper">
                          <div class="line-score b-orange"
                               :style="{height:coreNormData4.score/200*370+'px'}">
                            <div class="line-score-norm"
                                 :style="{bottom:coreNormData4.lnorm/200*370+'px',height:(coreNormData4.rnorm-coreNormData4.lnorm)/200*370+'px'}"></div>
                          </div>
                        </div>
                      </div>

                      <div class="score-item">
                        <div class="score-item-text">{{coreNormData5.score}}</div>
                        <div class="score-line-wrapper">
                          <div class="line-score b-orange"
                               :style="{height:coreNormData5.score/200*370+'px'}">
                            <div class="line-score-norm"
                                 :style="{bottom:coreNormData5.lnorm/200*370+'px',height:(coreNormData5.rnorm-coreNormData5.lnorm)/200*370+'px'}"></div>
                          </div>
                        </div>
                      </div>

                      <div class="score-item">
                        <div class="score-item-text">{{coreNormData6.score}}</div>
                        <div class="score-line-wrapper">
                          <div class="line-score b-orange"
                               :style="{height:coreNormData6.score/200*370+'px'}">
                            <div class="line-score-norm"
                                 :style="{bottom:coreNormData6.lnorm/200*370+'px',height:(coreNormData6.rnorm-coreNormData6.lnorm)/200*370+'px'}"></div>
                          </div>
                        </div>
                      </div>

                      <div class="score-item">
                        <div class="score-item-text">{{coreNormData7.score}}</div>
                        <div class="score-line-wrapper">
                          <div class="line-score b-orange"
                               :style="{height:coreNormData7.score/200*370+'px'}">
                            <div class="line-score-norm"
                                 :style="{bottom:coreNormData7.lnorm/200*370+'px',height:(coreNormData7.rnorm-coreNormData7.lnorm)/200*370+'px'}"></div>
                          </div>
                        </div>
                      </div>

                      <div class="score-item">
                        <div class="score-item-text">{{coreNormData8.score}}</div>
                        <div class="score-line-wrapper">
                          <div class="line-score b-orange"
                               :style="{height:coreNormData8.score/200*370+'px'}">
                            <div class="line-score-norm"
                                 :style="{bottom:coreNormData8.lnorm/200*370+'px',height:(coreNormData8.rnorm-coreNormData8.lnorm)/200*370+'px'}"></div>
                          </div>
                        </div>
                      </div>

                      <div class="score-item">
                        <div class="score-item-text">{{coreNormData9.score}}</div>
                        <div class="score-line-wrapper">
                          <div class="line-score b-orange"
                               :style="{height:coreNormData9.score/200*370+'px'}">
                            <div class="line-score-norm"
                                 :style="{bottom:coreNormData9.lnorm/200*370+'px',height:(coreNormData9.rnorm-coreNormData9.lnorm)/200*370+'px'}"></div>
                          </div>
                        </div>
                      </div>

                      <div class="score-item">
                        <div class="score-item-text">{{coreNormData10.score}}</div>
                        <div class="score-line-wrapper">
                          <div class="line-score b-orange"
                               :style="{height:coreNormData10.score/200*370+'px'}">
                            <div class="line-score-norm"
                                 :style="{bottom:coreNormData10.lnorm/200*370+'px',height:(coreNormData10.rnorm-coreNormData10.lnorm)/200*370+'px'}"></div>
                          </div>
                        </div>
                      </div>
                      <div class="score-item">
                        <div class="score-item-text">{{coreNormData11.score}}</div>
                        <div class="score-line-wrapper">
                          <div class="line-score b-orange"
                               :style="{height:coreNormData11.score/200*370+'px'}">
                            <div class="line-score-norm"
                                 :style="{bottom:coreNormData11.lnorm/200*370+'px',height:(coreNormData11.rnorm-coreNormData11.lnorm)/200*370+'px'}"></div>
                          </div>
                        </div>
                      </div>

                      <div class="score-item">
                        <div class="score-item-text">{{coreNormData12.score}}</div>
                        <div class="score-line-wrapper">
                          <div class="line-score b-orange"
                               :style="{height:coreNormData12.score/200*370+'px'}">
                            <div class="line-score-norm"
                                 :style="{bottom:coreNormData12.lnorm/200*370+'px',height:(coreNormData12.rnorm-coreNormData12.lnorm)/200*370+'px'}"></div>
                          </div>
                        </div>
                      </div>

                    </div>
                  </div>
                  <!--<div class="pdf-border-paragraph m-b20">-->
                  <!--<p>-->
                  <!--在下表中潜能水平值是测试个体在各项潜能中的水平大小；常模范围是群体中大多数人在该项潜能上的水平范围；出众百分数是与同类型群体相比在该项潜能上的优势程度。-->
                  <!--</p>-->
                  <!--</div>-->
                </div>
                <div class="font-blue pdf-footer">
                  <p class="pull-left">测评网址：www.ymtest.com</p>
                  <p class="pull-right">测评方法、工具及报告设计已申请产权保护</p>
                </div>
              </div>
              <!--page 19-->

              <!--page 20-->
              <div class="pdf-page">
                <div class="pdf-header">
                  <img class="pull-left" src="../../assets/pdf/header-logo.png" height="39px">
                  <p class="pull-right pdf-page-seq"></p>
                  <p class="pull-right font-blue">高中生升学规划测评报告</p>
                </div>
                <div class=" pdf-content">
                  <div class="pdf-border-paragraph m-b20" style="margin-bottom: 50px">
                    <p>
                      在下表中潜能水平值是测试个体在各项潜能中的水平大小；常模范围是群体中大多数人在该项潜能上的水平范围；出众百分数是与同类型群体相比在该项潜能上的优势程度。
                    </p>
                  </div>
                  <div class="table-container">
                    <div class="table-title">认知潜能指标评估详细结果</div>
                    <table>
                      <thead>
                      <tr>
                        <th width>认知潜能</th>
                        <th>潜能水平值</th>
                        <th>常模范围</th>
                        <th>出众百分比</th>
                        <th width="70">非常低</th>
                        <th width="70">比较低</th>
                        <th width="70">一般</th>
                        <th width="70">比较好</th>
                        <th width="70">非常好</th>
                      </tr>
                      </thead>
                      <tbody>
                      <tr v-for="data in coreNormData">
                        <td class="bg-blue">{{data.name }}</td>
                        <td>{{data.score | toFixed(2)}}</td>
                        <td>{{data.lnorm}}~{{data.rnorm}}</td>
                        <td>{{data.percent*100 | toFixed(2)}}%</td>
                        <td colspan="5">
                          <div class="score-line">
                            <div class="line b-red" v-if="data.grade==1" :style="{width:10+'%'}"></div>
                            <div class="line b-orange" v-if="data.grade==2"
                                 :style="{width:30+'%'}"></div>
                            <div class="line b-yellow" v-if="data.grade==3"
                                 :style="{width:50+'%'}"></div>
                            <div class="line b-green" v-if="data.grade==4"
                                 :style="{width:70+'%'}"></div>
                            <div class="line b-blue" v-if="data.grade==5"
                                 :style="{width:90+'%'}"></div>
                          </div>
                        </td>
                      </tr>
                      </tbody>
                    </table>
                  </div>
                  <div class="pdf-blue-title" id="22">
                    <img src="../../assets/pdf/title-trn.png" alt="">2.2认知潜能分析
                  </div>
                  <div class="pdf-border-paragraph m-b20">
                    <div class="pull-left blue-title m-b20">
                      {{infoData.name}}
                    </div>
                    <p>
                      {{infoData.comment}}
                    </p>
                  </div>

                </div>
                <div class="font-blue pdf-footer">
                  <p class="pull-left">测评网址：www.ymtest.com</p>
                  <p class="pull-right">测评方法、工具及报告设计已申请产权保护</p>
                </div>
              </div>
              <!--page 20-->

              <!--page 21-->
              <div class="pdf-page">
                <div class="pdf-header">
                  <img class="pull-left" src="../../assets/pdf/header-logo.png" height="39px">
                  <p class="pull-right pdf-page-seq"></p>
                  <p class="pull-right font-blue">高中生升学规划测评报告</p>
                </div>
                <div class=" pdf-content">

                  <div class="pdf-border-paragraph m-b20">
                    <div class="pull-left blue-title m-b20">
                      {{workData.name}}
                    </div>
                    <p>
                      {{workData.comment}}
                    </p>
                  </div>

                  <div class="pdf-border-paragraph m-b20">
                    <div class="pull-left blue-title m-b20">
                      {{spaceData.name}}
                    </div>
                    <p>
                      {{spaceData.comment}}
                    </p>
                  </div>

                  <div class="pdf-border-paragraph m-b20">
                    <div class="pull-left blue-title m-b20">
                      {{presentData.name}}
                    </div>
                    <p>
                      {{presentData.comment }}
                    </p>
                  </div>

                  <div class="pdf-border-paragraph m-b20">
                    <div class="pull-left blue-title m-b20">
                      {{thinkData.name}}
                    </div>
                    <p>
                      {{thinkData.comment}}
                    </p>
                  </div>

                </div>
                <div class="font-blue pdf-footer">
                  <p class="pull-left">测评网址：www.ymtest.com</p>
                  <p class="pull-right">测评方法、工具及报告设计已申请产权保护</p>
                </div>
              </div>
              <!--page 21-->

              <!--page 22-->
              <div class="pdf-page">
                <div class="pdf-header">
                  <img class="pull-left" src="../../assets/pdf/header-logo.png" height="39px">
                  <p class="pull-right pdf-page-seq"></p>
                  <p class="pull-right font-blue">高中生升学规划测评报告</p>
                </div>
                <div class=" pdf-content">

                  <div class="pdf-border-paragraph m-b20">
                    <div class="pull-left blue-title m-b20">
                      {{logicData.name}}
                    </div>
                    <p>
                      {{logicData.comment}}
                    </p>
                  </div>

                  <div class="pdf-border-paragraph m-b20">
                    <div class="pull-left blue-title m-b20">
                      {{diyData.name}}
                    </div>
                    <p>
                      {{diyData.comment}}
                    </p>
                  </div>

                  <div class="pdf-border-paragraph m-b20">
                    <div class="pull-left blue-title m-b20">
                      {{langData.name}}
                    </div>
                    <p>
                      {{langData.comment}}
                    </p>
                  </div>

                  <div class="pdf-border-paragraph m-b20">
                    <div class="pull-left blue-title m-b20">
                      {{mathData.name}}
                    </div>
                    <p>
                      {{mathData.comment}}
                    </p>
                  </div>

                </div>
                <div class="font-blue pdf-footer">
                  <p class="pull-left">测评网址：www.ymtest.com</p>
                  <p class="pull-right">测评方法、工具及报告设计已申请产权保护</p>
                </div>
              </div>
              <!--page 22-->

              <!--page 23-->
              <div class="pdf-page">
                <div class="pdf-header">
                  <img class="pull-left" src="../../assets/pdf/header-logo.png" height="39px">
                  <p class="pull-right pdf-page-seq"></p>
                  <p class="pull-right font-blue">高中生升学规划测评报告</p>
                </div>
                <div class=" pdf-content">

                  <div class="pdf-border-paragraph m-b20">
                    <div class="pull-left blue-title m-b20">
                      {{organizeData.name}}
                    </div>
                    <p>
                      {{organizeData.comment}}
                    </p>
                  </div>

                  <div class="pdf-border-paragraph m-b20">
                    <div class="pull-left blue-title m-b20">
                      {{personalData.name}}
                    </div>
                    <p>
                      {{personalData.comment}}
                    </p>
                  </div>

                  <div class="pdf-border-paragraph m-b20">
                    <div class="pull-left blue-title m-b20">
                      {{artData.name}}
                    </div>
                    <p>
                      {{artData.comment}}
                    </p>
                  </div>


                </div>
                <div class="font-blue pdf-footer">
                  <p class="pull-left">测评网址：www.ymtest.com</p>
                  <p class="pull-right">测评方法、工具及报告设计已申请产权保护</p>
                </div>
              </div>
              <!--page 23-->

              <!--page 24-->
              <div class="pdf-page">
                <div class="pdf-header">
                  <img class="pull-left" src="../../assets/pdf/header-logo.png" height="39px">
                  <p class="pull-right pdf-page-seq"></p>
                  <p class="pull-right font-blue">高中生升学规划测评报告</p>
                </div>
                <div class=" pdf-content" id="31">
                  <div class="font-blue pdf-page-title"><span>第三部分 兴趣倾向评估</span></div>
                  <div class="pdf-border-paragraph m-b20">
                    <p>
                      兴趣是指建立在需要基础上，带有积极情绪色彩的认知和活动倾向；当个人对某事物有兴趣时，会对它产生特别的注意力；是人们活动的重要动力之一，也是活动成功的重要条件。职业兴趣是指人们对某种职业活动具有的比较稳定而持久的心理倾向。它是一个人探究某种职业或从事某种职业活动所表现出来的特殊个性倾向，它使个人对某种职业优先注意，并具有向往的情感。由于兴趣爱好不同，人的职业兴趣也有很大的差异。
                    </p>

                    <p>
                      本报告基于霍兰德职业兴趣理论，从职业兴趣的角度对您的职业选择进行探索。兴趣是个体在职业匹配的过程中的重要因素，迄今为止，霍兰德职业兴趣理论是最具影响力的职业发展理论和职业分类体系。
                    </p>
                  </div>
                  <div class="pdf-blue-title">
                    <img src="../../assets/pdf/title-trn.png" alt="">3.1兴趣倾向评估结果
                  </div>
                  <div class="pdf-border-paragraph m-b20">
                    <p>
                      下表为兴趣倾向的评估结果，首先测试者可以根据得分高低清楚地判断自己的兴趣倾向；测试者还可以和别人比较，灰色区域的范围是常模范围，表示大部分的高中生兴趣倾向得分都在该区域内。如果得分超过该范围，则说明在该兴趣上比他人强；如果得分低于该范围，则说明在该兴趣上较他人弱；如果得分在范围内，则代表在该兴趣上与他人不分上下。表中还展示了各类兴趣倾向职业类型的常见职业供测试者参考。
                    </p>
                  </div>
                </div>
                <div class="font-blue pdf-footer">
                  <p class="pull-left">测评网址：www.ymtest.com</p>
                  <p class="pull-right">测评方法、工具及报告设计已申请产权保护</p>
                </div>
              </div>
              <!--page 24-->

              <!--page 25-->
              <div class="pdf-page">
                <div class="pdf-header">
                  <img class="pull-left" src="../../assets/pdf/header-logo.png" height="39px">
                  <p class="pull-right pdf-page-seq"></p>
                  <p class="pull-right font-blue">高中生升学规划测评报告</p>
                </div>
                <div class=" pdf-content">
                  <div class="table-container table-25-container">
                    <div class="table-title">兴趣倾向指标评估详细结果</div>
                    <table>
                      <thead>
                      <tr>
                        <th>职业类型</th>
                        <th width="40">10</th>
                        <th width="40">20</th>
                        <th width="40">30</th>
                        <th width="40">40</th>
                        <th width="40">50</th>
                        <th width="40">60</th>
                        <th width="40">70</th>
                        <th width="40">80</th>
                        <th width="40">90</th>
                        <th width="40">100</th>
                        <th>指数</th>
                        <th width="180">典型职业</th>
                      </tr>
                      </thead>
                      <tbody>
                      <tr>
                        <td class="bg-blue">
                          常规型<br>
                          （C）
                        </td>
                        <td colspan="10">
                          <div class="score-line">
                            <div class="line" :style="{width:(xqqxTableData1.score/100)*409+'px'}">
                        <span
                          :style="{left:(xqqxTableData1.lnorm/100)*409+'px',width:(xqqxTableData1.rnorm-xqqxTableData1.lnorm)/100*409+'px'}"></span>
                            </div>
                          </div>
                        </td>
                        <td>
                          {{xqqxTableData1.score}}
                        </td>
                        <td>
                          信息处理、行政办公、财务会计和经营分析等方面的职业领域；
                        </td>
                      </tr>

                      <tr>
                        <td class="bg-blue">
                          实际型<br>
                          （R）
                        </td>
                        <td colspan="10">
                          <div class="score-line">
                            <div class="line" :style="{width:(xqqxTableData2.score/100)*409+'px'}">
                        <span
                          :style="{left:(xqqxTableData2.lnorm/100)*409+'px',width:(xqqxTableData2.rnorm-xqqxTableData2.lnorm)/100*409+'px'}"></span>
                            </div>
                          </div>
                        </td>
                        <td>
                          {{xqqxTableData2.score}}
                        </td>
                        <td>
                          技术性职业岗位：计算机硬件、装备制造业领域；技能性职业领域：加工业、农业机械领域。
                        </td>
                      </tr>

                      <tr>
                        <td class="bg-blue">
                          调研型<br>
                          （I）
                        </td>
                        <td colspan="10">
                          <div class="score-line">
                            <div class="line" :style="{width:(xqqxTableData3.score/100)*409+'px'}">
                        <span
                          :style="{left:(xqqxTableData3.lnorm/100)*409+'px',width:(xqqxTableData3.rnorm-xqqxTableData3.lnorm)/100*409+'px'}"></span>
                            </div>
                          </div>
                        </td>
                        <td>
                          {{xqqxTableData3.score}}
                        </td>
                        <td>
                          科学研究领域、工程设计、教育、软件业、医疗、工程规划设计等职业类型。
                        </td>
                      </tr>

                      <tr>
                        <td class="bg-blue">
                          艺术型<br>
                          （A）
                        </td>
                        <td colspan="10">
                          <div class="score-line">
                            <div class="line" :style="{width:(xqqxTableData4.score/100)*409+'px'}">
                        <span
                          :style="{left:(xqqxTableData4.lnorm/100)*409+'px',width:(xqqxTableData4.rnorm-xqqxTableData4.lnorm)/100*409+'px'}"></span>
                            </div>
                          </div>
                        </td>
                        <td>
                          {{xqqxTableData4.score}}
                        </td>
                        <td>
                          艺术领域方面：艺术设计、演艺业、摄影；音乐领域方面：歌唱家、作曲家；文学方面：小说家、诗人、剧作家等。
                        </td>
                      </tr>

                      <tr>
                        <td class="bg-blue">
                          社会型<br>
                          （S）
                        </td>
                        <td colspan="10">
                          <div class="score-line">
                            <div class="line" :style="{width:(xqqxTableData5.score/100)*409+'px'}">
                        <span
                          :style="{left:(xqqxTableData5.lnorm/100)*409+'px',width:(xqqxTableData5.rnorm-xqqxTableData5.lnorm)/100*409+'px'}"></span>
                            </div>
                          </div>
                        </td>
                        <td>
                          {{xqqxTableData5.score}}
                        </td>
                        <td>
                          教育领域：教育培训；社会工作者：社会工作事业、社会公益人员、咨询。
                        </td>
                      </tr>

                      <tr>
                        <td class="bg-blue">
                          企业型<br>
                          （E）

                        </td>
                        <td colspan="10">
                          <div class="score-line">
                            <div class="line" :style="{width:(xqqxTableData6.score/100)*409+'px'}">
                        <span
                          :style="{left:(xqqxTableData6.lnorm/100)*409+'px',width:(xqqxTableData6.rnorm-xqqxTableData6.lnorm)/100*409+'px'}"></span>
                            </div>
                          </div>
                        </td>
                        <td>
                          {{xqqxTableData6.score}}
                        </td>
                        <td>
                          社会机构组织管理者、企业经营、建设项目、市场营销与司法服务。
                        </td>
                      </tr>

                      </tbody>
                    </table>
                  </div>

                  <div class="pdf-border-paragraph m-b20">
                    <p>
                      下图为兴趣倾向测试结果雷达图，在六种兴趣倾向中，得分越高代表兴趣越强，得分越低则兴趣越弱。若雷达图非常不规则，在六个维度上的得分相差很大，则兴趣倾向非常明显；若雷达图呈正六边形或接近正六边形，说明兴趣比较广泛和均衡，能够从事多种类型的工作，或者是作答太过一致造成的结果。
                    </p>
                  </div>
                </div>
                <div class="font-blue pdf-footer">
                  <p class="pull-left">测评网址：www.ymtest.com</p>
                  <p class="pull-right">测评方法、工具及报告设计已申请产权保护</p>
                </div>
              </div>
              <!--page 25-->

              <!--page 26-->
              <div class="pdf-page">
                <div class="pdf-header">
                  <img class="pull-left" src="../../assets/pdf/header-logo.png" height="39px">
                  <p class="pull-right pdf-page-seq"></p>
                  <p class="pull-right font-blue">高中生升学规划测评报告</p>
                </div>
                <div class=" pdf-content">
                  <div class="radarChartContainer">
                    <div id="radarChart" style="width:100%; height:390px;"></div>
                    <div class="title">兴趣倾向评估结果示意图</div>
                  </div>
                  <div class="pdf-border-paragraph m-b20">
                    <div class="pull-left blue-title m-b20">
                      测评小结
                    </div>
                    <p style="text-indent:0;margin-left:17px;">
                      根据您的测试结果，您的兴趣倾向推荐为：
                    </p>
                    <div class="left-block" v-for="(data,index) in xqqxData.recommends">
                      <div class="pull-left"></div>
                      <div class="text-container" v-if="index==0">
                        推荐一：{{data}}
                      </div>
                      <div class="text-container" v-if="index==1">
                        推荐二：{{data}}
                      </div>
                      <div class="text-container" v-if="index==2">
                        推荐三：{{data}}
                      </div>
                    </div>
                  </div>
                  <div class="pdf-blue-title" id="32">
                    <img src="../../assets/pdf/title-trn.png" alt="">3.2兴趣倾向分析
                  </div>
                  <div class="pdf-border-paragraph m-b20" v-for="(data,index) in xqqxData.comment" v-if="index==0">
                    <div class="pull-left blue-title m-b20">
                      {{data.name}}
                    </div>
                    <div class="left-block" v-for="comment in data.comments">
                      <div class="pull-left"></div>
                      <div class="text-container">
                        {{comment.detail}}
                      </div>
                    </div>

                  </div>
                </div>
                <div class="font-blue pdf-footer">
                  <p class="pull-left">测评网址：www.ymtest.com</p>
                  <p class="pull-right">测评方法、工具及报告设计已申请产权保护</p>
                </div>
              </div>
              <!--page 26-->

              <!--page 27-->
              <div class="pdf-page">
                <div class="pdf-header">
                  <img class="pull-left" src="../../assets/pdf/header-logo.png" height="39px">
                  <p class="pull-right pdf-page-seq"></p>
                  <p class="pull-right font-blue">高中生升学规划测评报告</p>
                </div>
                <div class=" pdf-content">
                  <div class="pdf-border-paragraph m-b20" v-for="(data,index) in xqqxData.comment" v-if="index>0">
                    <div class="pull-left blue-title m-b20">
                      {{data.name}}
                    </div>
                    <div class="left-block" v-for="comment in data.comments">
                      <div class="pull-left"></div>
                      <div class="text-container">
                        {{comment.detail}}
                      </div>
                    </div>

                  </div>

                </div>
                <div class="font-blue pdf-footer">
                  <p class="pull-left">测评网址：www.ymtest.com</p>
                  <p class="pull-right">测评方法、工具及报告设计已申请产权保护</p>
                </div>
              </div>
              <!--page 27-->

              <!--page 28-->
              <div class="pdf-page">
                <div class="pdf-header">
                  <img class="pull-left" src="../../assets/pdf/header-logo.png" height="39px">
                  <p class="pull-right pdf-page-seq"></p>
                  <p class="pull-right font-blue">高中生升学规划测评报告</p>
                </div>
                <div class=" pdf-content" id="41">
                  <div class="font-blue pdf-page-title"><span>第四部分 职业生涯规划</span></div>
                  <div class="pdf-border-paragraph m-b20">
                    <p>
                      职业生涯规划就是对职业生涯乃至人生进行持续的系统的计划的过程；是指针对个人职业选择的主观和客观因素进行分析和测定，确定个人的奋斗目标并努力实现这一目标的过程。对年轻人而言，职业选择是否适当，将影响其将来事业的成败以及一生的幸福；对社会而言，个人择业是否适当，能决定社会人力供需是否平衡。如果每个人都适才适所，那么，不仅每个人都有发展前途，而且社会亦会欣欣向荣；相反，则个人贫困，社会问题丛生。
                    </p>

                    <p>
                      职业生涯规划有两大主要目标，第一个目标是找到适合自己的职业，这一目标的实现需要将个人与群体相结合，在对一个人职业生涯的主客观条件进行测定、分析、总结的基础上，对自己的人格、潜能、兴趣进行综合分析，与特定群体常模参照比较，结合时代特点，确定自己最佳的职业奋斗目标；第二个目标是通过规划求得职业发展，为实现第一目标做出行之有效的安排。所以职业定位是决定职业生涯成败的最关键的一步，同时也是职业生涯规划的起点。
                    </p>
                    <p>
                      本报告是根据您的人格特性、职业兴趣、一般认知潜能三方面的测评结果，进行综合分析，实现人格特性适合，有职业兴趣倾向，有潜力发展的精准职业定位。下面是测评系统为您推荐的最佳匹配职业领域、第二匹配职业领域、第三匹配职业领域。根据您的个人特点，对适合的职业、专业领域进行深度剖析；根据测评结果的分析，对您适合该职业、专业领域的原因进行科学的解释。
                    </p>
                  </div>
                  <div class="pdf-blue-title">
                    <img src="../../assets/pdf/title-trn.png" alt="">4.1职业匹配结果评估
                  </div>
                  <div class="pdf-border-paragraph m-b20">
                    <p>
                      在下表中人格特性职业类型是适合测试个体人格的职业类型；兴趣倾向指标得分是测试个体该类职业的兴趣倾向测试得分；认知潜能指标得分是测试个体该类职业的认知潜能测试得分。
                    </p>
                  </div>
                </div>
                <div class="font-blue pdf-footer">
                  <p class="pull-left">测评网址：www.ymtest.com</p>
                  <p class="pull-right">测评方法、工具及报告设计已申请产权保护</p>
                </div>
              </div>
              <!--page 28-->

              <!--page 29-->
              <div class="pdf-page">
                <div class="pdf-header">
                  <img class="pull-left" src="../../assets/pdf/header-logo.png" height="39px">
                  <p class="pull-right pdf-page-seq"></p>
                  <p class="pull-right font-blue">高中生升学规划测评报告</p>
                </div>
                <div class=" pdf-content" style="padding:0 2%">

                  <div class="table-container table-29-container">
                    <div class="table-title">职业类型与评估指标分析结果</div>
                    <table>
                      <thead>
                      <tr>
                        <th width="">职业类型</th>
                        <th width="">指标类型</th>
                        <th width="">指标得分</th>
                        <th width="355">得分/匹配度</th>
                      </tr>
                      </thead>
                      <tbody v-for="data in careerTableData">
                      <tr>
                        <td class="bg-blue" rowspan="2">{{data.name}}</td>
                        <td class="bb-no">兴趣倾向</td>
                        <td class="bb-no">{{data.hscore}}</td>
                        <td class="bb-no">
                          <div class="score-line">
                            <div class="line b-red" v-if="data.hscore<=20"
                                 :style="{width:(data.hscore/100)*355+'px'}"></div>
                            <div class="line b-orange" v-if="data.hscore>20 && data.hscore<=40"
                                 :style="{width:(data.hscore/100)*355+'px'}"></div>
                            <div class="line b-yellow" v-if="data.hscore>40 && data.hscore<=60"
                                 :style="{width:(data.hscore/100)*355+'px'}"></div>
                            <div class="line b-green" v-if="data.hscore>60 && data.hscore<=80"
                                 :style="{width:(data.hscore/100)*355+'px'}"></div>
                            <div class="line b-blue" v-if="data.hscore>80 && data.hscore<=100"
                                 :style="{width:(data.hscore/100)*355+'px'}"></div>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <!--<td class="bg-blue" rowspan="2">xxx</td>-->
                        <td class="bt-no">认知潜能</td>
                        <td class="bt-no">{{data.cscore}}</td>
                        <td class="bt-no">
                          <div class="score-line">
                            <div class="line b-red" v-if="data.cscore<=20"
                                 :style="{width:(data.cscore/100)*355+'px'}"></div>
                            <div class="line b-orange" v-if="data.cscore>20 && data.cscore<=40"
                                 :style="{width:(data.cscore/100)*355+'px'}"></div>
                            <div class="line b-yellow" v-if="data.cscore>40 && data.cscore<=60"
                                 :style="{width:(data.cscore/100)*355+'px'}"></div>
                            <div class="line b-green" v-if="data.cscore>60 && data.cscore<=80"
                                 :style="{width:(data.cscore/100)*355+'px'}"></div>
                            <div class="line b-blue" v-if="data.cscore>80 && data.cscore<=100"
                                 :style="{width:(data.cscore/100)*355+'px'}"></div>
                          </div>
                        </td>
                      </tr>

                      </tbody>
                    </table>
                  </div>


                </div>
                <div class="font-blue pdf-footer">
                  <p class="pull-left">测评网址：www.ymtest.com</p>
                  <p class="pull-right">测评方法、工具及报告设计已申请产权保护</p>
                </div>
              </div>
              <!--page 29-->

              <!--page 30-->
              <div class="pdf-page">
                <div class="pdf-header">
                  <img class="pull-left" src="../../assets/pdf/header-logo.png" height="39px">
                  <p class="pull-right pdf-page-seq"></p>
                  <p class="pull-right font-blue">高中生升学规划测评报告</p>
                </div>
                <div class=" pdf-content">

                  <div class="pdf-blue-title m-b10" id="42">
                    <img src="../../assets/pdf/title-trn.png" alt="">4.2最佳匹配职业与专业
                  </div>
                  <div class="pdf-border-paragraph pdf-mins-height m-b20">
                    <div class="pull-left blue-title m-b20">
                      最佳职业领域
                    </div>
                    <p>
                      通过对您的人格特性、兴趣倾向、一般认知潜能的三方面综合分析，您最适合从事{{bestCData.name}}领域的工作。
                    </p>
                  </div>

                  <div class="pdf-border-paragraph pdf-min-height m-b20">
                    <div class="pull-left blue-title m-b20">
                      典型职业
                    </div>
                    <div class="left-block" v-for="(data,index) in bestCData.careers" v-if="index<10">
                      <div class="pull-left"></div>
                      <div class="text-container">
                        {{data.name }}
                      </div>
                    </div>

                  </div>
                  <div class="pdf-border-paragraph pdf-min-height m-b20">
                    <div class="pull-left blue-title m-b20">
                      推荐专业及专业代码
                    </div>
                    <div class="left-block" v-for="(data,index) in bestCData.majors" v-if="index<10">
                      <div class="pull-left"></div>
                      <div class="text-container">{{data.name}}（{{data.code }}）
                      </div>
                    </div>
                  </div>


                </div>
                <div class="font-blue pdf-footer">
                  <p class="pull-left">测评网址：www.ymtest.com</p>
                  <p class="pull-right">测评方法、工具及报告设计已申请产权保护</p>
                </div>
              </div>
              <!--page 30-->

              <!--page 31-->
              <div class="pdf-page">
                <div class="pdf-header">
                  <img class="pull-left" src="../../assets/pdf/header-logo.png" height="39px">
                  <p class="pull-right pdf-page-seq"></p>
                  <p class="pull-right font-blue">高中生升学规划测评报告</p>
                </div>
                <div class=" pdf-content">

                  <div class="pdf-blue-title pdf-yellow-title">
                    <img src="../../assets/pdf/title-trn.png" alt="">4.2.1最佳职业深度剖析
                  </div>

                  <div class="pdf-blue-title pdf-purple-title">
                    <img src="../../assets/pdf/title-trn.png" alt="">（1）核心人格结果评估
                  </div>

                  <div class="pdf-border-paragraph">
                    <p>
                      在下表中人格水平值是测试个体在各项人格维度中的水平大小；常模范围是群体中大多数人在该项人格维度上的水平范围。
                    </p>
                  </div>

                  <div class="table-container">
                    <div class="table-title">{{bestCData.name}}职业核心人格评估详细结果</div>
                    <table>
                      <thead>
                      <tr>
                        <th width>核心人格</th>
                        <th>人格水平值</th>
                        <th>常模范围</th>
                        <th width="70">非常低</th>
                        <th width="70">比较低</th>
                        <th width="70">一般</th>
                        <th width="70">比较好</th>
                        <th width="70">非常好</th>
                      </tr>
                      </thead>
                      <tbody>
                      <tr v-for="data in coreCharacterData">
                        <td class="bg-blue">{{data.name }}</td>
                        <td>{{data.score}}</td>
                        <td>{{data.lnorm}}~{{data.rnorm}}</td>
                        <td colspan="5">
                          <div class="score-line">
                            <div class="line b-red" v-if="data.grade==1" :style="{width:10+'%'}"></div>
                            <div class="line b-orange" v-if="data.grade==2"
                                 :style="{width:30+'%'}"></div>
                            <div class="line b-yellow" v-if="data.grade==3"
                                 :style="{width:50+'%'}"></div>
                            <div class="line b-green" v-if="data.grade==4"
                                 :style="{width:70+'%'}"></div>
                            <div class="line b-blue" v-if="data.grade==5"
                                 :style="{width:90+'%'}"></div>
                          </div>
                        </td>
                      </tr>
                      </tbody>
                    </table>
                  </div>
                  <div class="pdf-blue-title pdf-purple-title">
                    <img src="../../assets/pdf/title-trn.png" alt="">（2）核心人格分析
                  </div>
                  <div class="pdf-border-paragraph m-b15" v-for="(data,index) in coreCharacter.comments" v-if="index<2">
                    <div class="pull-left blue-title m-b20">
                      {{data.name}}
                    </div>
                    <p>
                      {{data.comment}}
                    </p>
                  </div>
                </div>
                <div class="font-blue pdf-footer">
                  <p class="pull-left">测评网址：www.ymtest.com</p>
                  <p class="pull-right">测评方法、工具及报告设计已申请产权保护</p>
                </div>
              </div>
              <!--page 31-->

              <!--page 32-->
              <div class="pdf-page">
                <div class="pdf-header">
                  <img class="pull-left" src="../../assets/pdf/header-logo.png" height="39px">
                  <p class="pull-right pdf-page-seq"></p>
                  <p class="pull-right font-blue">高中生升学规划测评报告</p>
                </div>
                <div class=" pdf-content">
                  <div class="pdf-border-paragraph m-b15" v-for="(data,index) in coreCharacter.comments" v-if="index>1">
                    <div class="pull-left blue-title m-b20">
                      {{data.name}}
                    </div>
                    <p>
                      {{data.comment}}
                    </p>
                  </div>
                </div>
                <div class="font-blue pdf-footer">
                  <p class="pull-left">测评网址：www.ymtest.com</p>
                  <p class="pull-right">测评方法、工具及报告设计已申请产权保护</p>
                </div>
              </div>
              <!--page 32-->

              <!--page 33-->
              <div class="pdf-page">
                <div class="pdf-header">
                  <img class="pull-left" src="../../assets/pdf/header-logo.png" height="39px">
                  <p class="pull-right pdf-page-seq"></p>
                  <p class="pull-right font-blue">高中生升学规划测评报告</p>
                </div>
                <div class=" pdf-content">
                  <div class="pdf-blue-title pdf-purple-title">
                    <img src="../../assets/pdf/title-trn.png" alt="">（3）核心潜能结果评估
                  </div>
                  <div class="pdf-border-paragraph m-b15">
                    <p>
                      在下表中潜能水平值是测试个体在各项潜能中的水平大小；常模范围是群体中大多数人在该项潜能上的水平范围；出众百分数是与同类型群体相比在该项潜能上的优势程度。
                    </p>
                  </div>
                  <div class="table-container">
                    <div class="table-title">{{bestCData.name}}职业核心潜能评估详细结果</div>
                    <table>
                      <thead>
                      <tr>
                        <th width>认知潜能</th>
                        <th>潜能水平值</th>
                        <th>常模范围</th>
                        <th>出众百分比</th>
                        <th width="70">非常低</th>
                        <th width="70">比较低</th>
                        <th width="70">一般</th>
                        <th width="70">比较好</th>
                        <th width="70">非常好</th>
                      </tr>
                      </thead>
                      <tbody>
                      <tr v-for="data in coreCognitionData">
                        <td class="bg-blue">{{data.name }}</td>
                        <td>{{data.score}}</td>
                        <td>{{data.lnorm}}~{{data.rnorm}}</td>
                        <td>{{data.percent*100 | toFixed(2)}}%</td>

                        <td colspan="5">
                          <div class="score-line">
                            <div class="line b-red" v-if="data.grade==1" :style="{width:10+'%'}"></div>
                            <div class="line b-orange" v-if="data.grade==2"
                                 :style="{width:30+'%'}"></div>
                            <div class="line b-yellow" v-if="data.grade==3"
                                 :style="{width:50+'%'}"></div>
                            <div class="line b-green" v-if="data.grade==4"
                                 :style="{width:70+'%'}"></div>
                            <div class="line b-blue" v-if="data.grade==5"
                                 :style="{width:90+'%'}"></div>
                          </div>
                        </td>
                      </tr>
                      </tbody>
                    </table>
                  </div>
                  <div class="pdf-blue-title pdf-purple-title">
                    <img src="../../assets/pdf/title-trn.png" alt="">（4）核心潜能分析
                  </div>
                  <div class="pdf-border-paragraph pdf-mins-height m-b15" v-for="(data,index) in coreCognition.comments"
                       v-if="index<2">
                    <div class="pull-left blue-title m-b20">
                      {{data.name}}
                    </div>
                    <p>
                      {{data.comment}}
                    </p>
                  </div>
                </div>
                <div class="font-blue pdf-footer">
                  <p class="pull-left">测评网址：www.ymtest.com</p>
                  <p class="pull-right">测评方法、工具及报告设计已申请产权保护</p>
                </div>
              </div>
              <!--page 33-->

              <!--page 34-->
              <div class="pdf-page">
                <div class="pdf-header">
                  <img class="pull-left" src="../../assets/pdf/header-logo.png" height="39px">
                  <p class="pull-right pdf-page-seq"></p>
                  <p class="pull-right font-blue">高中生升学规划测评报告</p>
                </div>
                <div class=" pdf-content">
                  <div class="pdf-border-paragraph pdf-min-height m-b15" v-for="(data,index) in coreCognition.comments"
                       v-if="index>1 && index<6">
                    <div class="pull-left blue-title m-b20">
                      {{data.name}}
                    </div>
                    <p>
                      {{data.comment}}
                    </p>
                  </div>

                  <div class="pdf-blue-title pdf-purple-title" v-if="coreCommentsLen<6">
                    <img src="../../assets/pdf/title-trn.png" alt="">（5）兴趣倾向分析
                  </div>
                  <div class="pdf-border-paragraph pdf-min-height m-b20" v-if="coreCommentsLen<6">
                    <p>
                      {{bestCData.comment}}
                    </p>
                  </div>
                </div>
                <div class="font-blue pdf-footer">
                  <p class="pull-left">测评网址：www.ymtest.com</p>
                  <p class="pull-right">测评方法、工具及报告设计已申请产权保护</p>
                </div>
              </div>
              <!--page 34-->

              <!--page 34 补充-->
              <div class="pdf-page" v-if="coreCommentsLen>5">
                <div class="pdf-header">
                  <img class="pull-left" src="../../assets/pdf/header-logo.png" height="39px">
                  <p class="pull-right pdf-page-seq"></p>
                  <p class="pull-right font-blue">高中生升学规划测评报告</p>
                </div>
                <div class=" pdf-content">
                  <div class="pdf-border-paragraph m-b15" v-for="(data,index) in coreCognition.comments" v-if="index>5">
                    <div class="pull-left blue-title m-b20">
                      {{data.name}}
                    </div>
                    <p>
                      {{data.comment}}
                    </p>
                  </div>

                  <div class="pdf-blue-title pdf-purple-title">
                    <img src="../../assets/pdf/title-trn.png" alt="">（5）兴趣倾向分析
                  </div>
                  <div class="pdf-border-paragraph m-b20">
                    <p>
                      {{bestCData.comment}}
                    </p>
                  </div>

                </div>
                <div class="font-blue pdf-footer">
                  <p class="pull-left">测评网址：www.ymtest.com</p>
                  <p class="pull-right">测评方法、工具及报告设计已申请产权保护</p>
                </div>
              </div>
              <!--page 34 补充-->

              <!--page 35-->
              <div class="pdf-page">
                <div class="pdf-header">
                  <img class="pull-left" src="../../assets/pdf/header-logo.png" height="39px">
                  <p class="pull-right pdf-page-seq"></p>
                  <p class="pull-right font-blue">高中生升学规划测评报告</p>
                </div>
                <div class=" pdf-content">

                  <div class="pdf-blue-title" id="43">
                    <img src="../../assets/pdf/title-trn.png" alt="">4.3第二匹配职业与专业
                  </div>
                  <div class="pdf-border-paragraph m-b20">
                    <div class="pull-left blue-title m-b10">
                      第二匹配职业领域
                    </div>
                    <p>
                      由于您个人内在或外在的因素限制，您可能会难以选择推荐的最佳职业领域。根据您的人格特性、兴趣倾向、一般认知潜能的三方面综合分析，为您提供第二匹配职业领域，根据分析，您比较适合从事{{secondCData.name}}领域的工作。
                    </p>
                  </div>
                  <div class="pdf-border-paragraph pdf-min-height m-b10">

                    <div class="pull-left blue-title m-b20">
                      典型职业
                    </div>
                    <div class="left-block" v-for="(data,index) in secondCData.careers" v-if="index<7">
                      <div class="pull-left"></div>
                      <div class="text-container">{{data.name}}
                      </div>
                    </div>
                  </div>


                  <div class="pdf-border-paragraph pdf-min-height m-b20">
                    <div class="pull-left blue-title m-b20">
                      推荐专业及专业代码
                    </div>
                    <div class="left-block" v-for="(data,index) in secondCData.majors" v-if="index<7">
                      <div class="pull-left"></div>
                      <div class="text-container">
                        {{data.name}}（{{data.code}}）
                      </div>
                    </div>
                  </div>
                  <div class="pdf-border-paragraph pdf-min-height m-b20">
                    <p>
                      {{secondCData.comment}}
                    </p>
                  </div>
                </div>
                <div class="font-blue pdf-footer">
                  <p class="pull-left">测评网址：www.ymtest.com</p>
                  <p class="pull-right">测评方法、工具及报告设计已申请产权保护</p>
                </div>
              </div>
              <!--page 35-->

              <!--page 36-->
              <!--<div class="pdf-page">-->
              <!--<div class="pdf-header">-->
              <!--<img class="pull-left" src="../../assets/pdf/header-logo.png" height="39px">-->
              <!--<p class="pull-right pdf-page-seq"></p>-->
              <!--<p class="pull-right font-blue">高中生升学规划测评报告</p>-->
              <!--</div>-->
              <!--<div class=" pdf-content">-->


              <!--</div>-->
              <!--<div class="font-blue pdf-footer">-->
              <!--<p class="pull-left">测评网址：www.ymtest.com</p>-->
              <!--<p class="pull-right">测评方法、工具及报告设计已申请产权保护</p>-->
              <!--</div>-->
              <!--</div>-->
              <!--page 36-->

              <!--page 37-->
              <div class="pdf-page">
                <div class="pdf-header">
                  <img class="pull-left" src="../../assets/pdf/header-logo.png" height="39px">
                  <p class="pull-right pdf-page-seq"></p>
                  <p class="pull-right font-blue">高中生升学规划测评报告</p>
                </div>
                <div class=" pdf-content">
                  <div class="pdf-blue-title" id="44">
                    <img src="../../assets/pdf/title-trn.png" alt="">4.4第三匹配职业与专业
                  </div>
                  <div class="pdf-border-paragraph pdf-min-height m-b20">

                    <div class="pull-left blue-title m-b20">
                      第三匹配职业领域
                    </div>
                    <p>
                      由于您个人内在或外在的因素限制，您可能会难以选择推荐的前两类职业领域。根据您的人格特性、兴趣倾向、一般认知潜能的三方面综合分析，为您提供第三匹配职业领域，根据分析，您比较适合从事{{thirdCData.name}}领域的工作。
                    </p>
                  </div>
                  <div class="pdf-border-paragraph pdf-min-height m-b20">

                    <div class="pull-left blue-title m-b20">
                      典型职业
                    </div>
                    <div class="left-block" v-for="(data,index) in thirdCData.careers" v-if="index<7">
                      <div class="pull-left"></div>
                      <div class="text-container">{{data.name}}
                      </div>
                    </div>

                  </div>

                  <div class="pdf-border-paragraph pdf-min-height m-b10">
                    <div class="pull-left blue-title m-b20">
                      推荐专业及专业代码
                    </div>
                    <div class="left-block" v-for="(data,index) in thirdCData.majors" v-if="index<7">
                      <div class="pull-left"></div>
                      <div class="text-container">
                        {{data.name}}（{{data.code}}）
                      </div>
                    </div>

                  </div>
                  <div class="pdf-border-paragraph pdf-min-height m-b20">
                    <p>
                      {{thirdCData.comment}}
                    </p>
                  </div>

                  <!--<div class="pdf-border-paragraph m-b20">-->
                  <!--<p>-->
                  <!--{{thirdCData.comment}}-->
                  <!--</p>-->
                  <!--</div>-->

                </div>
                <div class="font-blue pdf-footer">
                  <p class="pull-left">测评网址：www.ymtest.com</p>
                  <p class="pull-right">测评方法、工具及报告设计已申请产权保护</p>
                </div>
              </div>
              <!--page 37-->

              <!--page 37 补充-->
              <!--<div class="pdf-page">-->
              <!--<div class="pdf-header">-->
              <!--<img class="pull-left" src="../../assets/pdf/header-logo.png" height="39px">-->
              <!--<p class="pull-right pdf-page-seq"></p>-->
              <!--<p class="pull-right font-blue">高中生升学规划测评报告</p>-->
              <!--</div>-->
              <!--<div class=" pdf-content">-->


              <!--</div>-->
              <!--<div class="font-blue pdf-footer">-->
              <!--<p class="pull-left">测评网址：www.ymtest.com</p>-->
              <!--<p class="pull-right">测评方法、工具及报告设计已申请产权保护</p>-->
              <!--</div>-->
              <!--</div>-->
              <!--page 37 补充-->

              <!--page 38-->
              <div class="pdf-page">
                <div class="pdf-header">
                  <img class="pull-left" src="../../assets/pdf/header-logo.png" height="39px">
                  <p class="pull-right pdf-page-seq"></p>
                  <p class="pull-right font-blue">高中生升学规划测评报告</p>
                </div>
                <div class=" pdf-content">
                  <div class="font-blue pdf-page-title"><span>第五部分 学习特征评估</span></div>
                  <div class="pdf-border-paragraph m-b20">
                    <p>
                      学习，是指通过阅读、听讲、思考、研究、实践等途径获得知识或技能的过程。狭义的学习指学生的学习，是有目的、有计划、有组织、有系统地进行，在较短时间内接受前人所累积的科学文化知识、技能，并以此来充实自己的过程。检验一个人的学习是否成功，通常看两个指标，一是学习效率，二是学习效果。但很多学习者在学习过程中，准备是仓促的，行为是盲目的，自然就很难达到理想的效果。造成这种现象的主要原因在于，他们没有根据自身潜在的特质形成独特高效的学习谋略，也就是说，他们还未真正地学会学习。
                    </p>
                    <p>
                      本报告是对您的学习特征进行分析与评价。包括基本学习能力、学习态度、学习过程、学习风格四个方面的内容。学习基本能力分析的是你的学习能力在群体中所表现出的优势与缺陷，指导你学习能力的培养；学习态度将评价的是你对学习的肯定或否定的思想倾向、情感倾向、行为方式，认清自己学习态度的好坏；学习过程分析评价你在学习过程中的执行方式，完善自己在学习过程中的不足；学习风格是你持续一贯的带有个性特征的学习方式和学习倾向，指导你良好学习习惯的养成。
                    </p>
                  </div>
                  <div class="pdf-blue-title" id="51">
                    <img src="../../assets/pdf/title-trn.png" alt="">5.1基本学习能力
                  </div>
                  <div class="pdf-border-paragraph m-b20">
                    <p>
                      高中是学生的学习潜能能够得到有效提高的最佳时期，能力中有一般能力和特殊能力之分，一般能力是指观察、记忆、思维、想象等能力，它是人们完成任何活动所不可或缺的，是能力中最主要的基本能力；特殊能力是指人们从事特殊职业或专业需要的能力。虽然不同的学科对人有不同的能力要求，但总的来说，每个人的信息加工能力、工作记忆能力、表象能力、思维转换能力、逻辑推理能力是一个人进行学习活动，完成整个学习任务所应具备的基本学习能力。一个人学习能力的强弱会决定其掌握各种知识的成效，影响其学习效率的高低。因而越早发现自身潜能的优势与不足才能更好的扬长补短，学会学习。
                    </p>
                  </div>
                </div>
                <div class="font-blue pdf-footer">
                  <p class="pull-left">测评网址：www.ymtest.com</p>
                  <p class="pull-right">测评方法、工具及报告设计已申请产权保护</p>
                </div>
              </div>
              <!--page 38-->

              <!--page 39-->
              <div class="pdf-page">
                <div class="pdf-header">
                  <img class="pull-left" src="../../assets/pdf/header-logo.png" height="39px">
                  <p class="pull-right pdf-page-seq"></p>
                  <p class="pull-right font-blue">高中生升学规划测评报告</p>
                </div>
                <div class=" pdf-content">
                  <div class="pdf-blue-title pdf-yellow-title" id="511">
                    <img src="../../assets/pdf/title-trn.png" alt="">5.1.1基本学习能力评估结果
                  </div>

                  <div class="pdf-border-paragraph m-b15">
                    <p>
                      在下表中学习能力水平值是测试个体在各项学习能力中的水平大小；常模范围是群体中大多数人在该项学习能力上的水平范围；出众百分数是与同类型群体相比在该项学习能力上的优势程度。
                    </p>
                  </div>

                  <div class="table-container">
                    <div class="table-title">基本学习能力指标评估详细结果</div>
                    <table>
                      <thead>
                      <tr>
                        <th width>基本学习能力</th>
                        <th>学习能力水平值</th>
                        <th>常模范围</th>
                        <th>出众百分比</th>
                        <th width="70">非常低</th>
                        <th width="70">比较低</th>
                        <th width="70">一般</th>
                        <th width="70">比较好</th>
                        <th width="70">非常好</th>
                      </tr>
                      </thead>
                      <tbody>
                      <tr v-for="data in abilityNorm">
                        <td class="bg-blue">{{data.name }}</td>
                        <td>{{data.score}}</td>
                        <td>{{data.lnorm}}~{{data.rnorm}}</td>
                        <td>{{data.percent*100 | toFixed(2)}}%</td>
                        <td colspan="5">
                          <div class="score-line">
                            <div class="line b-red" v-if="data.grade==1" :style="{width:10+'%'}"></div>
                            <div class="line b-orange" v-if="data.grade==2"
                                 :style="{width:30+'%'}"></div>
                            <div class="line b-yellow" v-if="data.grade==3"
                                 :style="{width:50+'%'}"></div>
                            <div class="line b-green" v-if="data.grade==4"
                                 :style="{width:70+'%'}"></div>
                            <div class="line b-blue" v-if="data.grade==5"
                                 :style="{width:90+'%'}"></div>
                          </div>
                        </td>
                      </tr>
                      </tbody>
                    </table>
                  </div>

                  <div class="pdf-blue-title pdf-yellow-title" id="512">
                    <img src="../../assets/pdf/title-trn.png" alt="">5.1.2基本学习能力分析
                  </div>

                  <div class="pdf-border-paragraph m-b20" v-for="(data,index) in abilityTexts" v-if="index<1">
                    <div class="pull-left blue-title m-b20">
                      {{data.name}}
                    </div>
                    <p>
                      {{data.comment}}
                    </p>
                  </div>

                </div>
                <div class="font-blue pdf-footer">
                  <p class="pull-left">测评网址：www.ymtest.com</p>
                  <p class="pull-right">测评方法、工具及报告设计已申请产权保护</p>
                </div>
              </div>
              <!--page 39-->

              <!--page 40-->
              <div class="pdf-page">
                <div class="pdf-header">
                  <img class="pull-left" src="../../assets/pdf/header-logo.png" height="39px">
                  <p class="pull-right pdf-page-seq"></p>
                  <p class="pull-right font-blue">高中生升学规划测评报告</p>
                </div>
                <div class=" pdf-content">
                  <div class="pdf-border-paragraph m-b20" style="line-height: 38px;"
                       v-for="(data,index) in abilityTexts" v-if="index>0 && index<4">
                    <div class="pull-left blue-title m-b20">
                      {{data.name}}
                    </div>
                    <p>
                      {{data.comment}}
                    </p>
                  </div>
                </div>
                <div class="font-blue pdf-footer">
                  <p class="pull-left">测评网址：www.ymtest.com</p>
                  <p class="pull-right">测评方法、工具及报告设计已申请产权保护</p>
                </div>
              </div>
              <!--page 40-->

              <!--page 40 补充-->
              <div class="pdf-page">
                <div class="pdf-header">
                  <img class="pull-left" src="../../assets/pdf/header-logo.png" height="39px">
                  <p class="pull-right pdf-page-seq"></p>
                  <p class="pull-right font-blue">高中生升学规划测评报告</p>
                </div>
                <div class=" pdf-content">
                  <div class="pdf-border-paragraph pdf-min-height m-b20" v-for="(data,index) in abilityTexts"
                       v-if="index>3">
                    <div class="pull-left blue-title m-b20">
                      {{data.name}}
                    </div>
                    <p>
                      {{data.comment}}
                    </p>
                  </div>
                  <div class="pdf-blue-title" id="52">
                    <img src="../../assets/pdf/title-trn.png" alt="">5.2学习态度
                  </div>
                  <div class="pdf-border-paragraph pdf-min-height m-b20">
                    <p>
                      态度是个体对特定对象（人、观念或者事件等）所持有的稳定的心理倾向。这种心理倾向蕴含着个体的主观评价以及由此产生的行为倾向性。学习态度是指学习者对学习较为持久的肯定或否定的行为倾向或内部反应的准备状态。它通常可以从学生对待学习的认知、情感和行为意向来解释说明。认知成分是指学生对学习活动或所学课程的一种带有评价意义的认识和理解，它反映着学生对学习的价值的认识，它是学习态度的基础。情感成分是指学生伴随认知而产生的情绪或情感体验，如对学习的喜欢或厌恶等，由于情感本身就反映出学生的学习态度，因此情感成分是态度的核心。行为意向则是指学生对学习的反应倾向，即行为的准备状态，准备对学习做出某种反应。一般来说，学习态度的上述三种成分是相互协调一致的。
                    </p>
                    <p>
                      学习态度对于学习行为具有调节作用，其表现在对学习对象的选择上，心理学家琼斯的某项实验证明，态度具有某种过滤作用；当然其还表现在学生对学习环境的反应上，当学生在学习态度于教学环境上保持一致时，就积极努力地学习，但反之就会出现回避学习环境并产生不利于学习的行为。
                    </p>
                    <p>
                      学习态度对学习效果也是具有影响的，根据心理学家麦独孤和史密斯的一项实验中发现，积极的学习态度对学习速度有促进作用。如在学校情境中，如果其他条件基本相等，学习态度好的学生，其学习效果总是远胜于学习态度差的。
                    </p>
                    <p>
                      学生在学习中对所受挫折的耐受力，与学生的学习态度是密切相关的。如，一个认为学习很有意义、喜爱学习的学生，当他（她）在学习中遇到困难与阻力的时候，耐受力就高，表现出吃苦耐劳、百折不屈和勇往直前的精神。反之，耐受力较低的，往往表现出灰心丧气，甚至一蹶不振。
                    </p>
                  </div>
                </div>
                <div class="font-blue pdf-footer">
                  <p class="pull-left">测评网址：www.ymtest.com</p>
                  <p class="pull-right">测评方法、工具及报告设计已申请产权保护</p>
                </div>
              </div>
              <!--page 40 补充-->

              <!--page 41-->
              <!--<div class="pdf-page">-->
              <!--<div class="pdf-header">-->
              <!--<img class="pull-left" src="../../assets/pdf/header-logo.png" height="39px">-->
              <!--<p class="pull-right pdf-page-seq"></p>-->
              <!--<p class="pull-right font-blue">高中生升学规划测评报告</p>-->
              <!--</div>-->
              <!--<div class=" pdf-content">-->

              <!--</div>-->
              <!--<div class="font-blue pdf-footer">-->
              <!--<p class="pull-left">测评网址：www.ymtest.com</p>-->
              <!--<p class="pull-right">测评方法、工具及报告设计已申请产权保护</p>-->
              <!--</div>-->
              <!--</div>-->
              <!--page 41-->

              <!--page 42-->
              <div class="pdf-page">
                <div class="pdf-header">
                  <img class="pull-left" src="../../assets/pdf/header-logo.png" height="39px">
                  <p class="pull-right pdf-page-seq"></p>
                  <p class="pull-right font-blue">高中生升学规划测评报告</p>
                </div>
                <div class=" pdf-content">
                  <div class="pdf-blue-title pdf-yellow-title" id="521">
                    <img src="../../assets/pdf/title-trn.png" alt="">5.2.1学习态度评估结果
                  </div>
                  <div class="pdf-border-paragraph m-b20">
                    <p>
                      在下表中学习态度水平值是测试个体在各项学习态度指标中的水平大小，值越高则在该指标上学习态度越好。常模范围是群体中大多数人在该项上的水平范围，图中评估的学习态度水平值高于常模范围，则说明在该学习态度指标上较大多数人好；若学习态度水平值在常模范围内，则说明该学习态度指标与大多数人无明显差异；若学习态度水平值低于常模范围，则说明在该学习态度指标上较大多数人差；最终学习态度的好坏由测试者认知、情感、行为意向三个指标共同决定。

                    </p>
                  </div>
                  <div class="table-container table-55-container">
                    <div class="table-title">学习态度指标评估详细结果</div>
                    <table>
                      <thead>
                      <tr>
                        <th rowspan="2">学习态度指标</th>
                        <th rowspan="2">学习态度水平值</th>
                        <th rowspan="2">常模范围</th>
                        <th width="70">非常差</th>
                        <th width="70">较差</th>
                        <th width="70">一般</th>
                        <th width="70">较好</th>
                        <th width="70">非常好</th>
                      </tr>
                      <tr>
                        <th width="70">1</th>
                        <th width="70">2</th>
                        <th width="70">3</th>
                        <th width="70">4</th>
                        <th width="70">5</th>
                      </tr>
                      </thead>
                      <tbody>
                      <tr v-for="data in attitudeNorm">
                        <td class="bg-blue">{{data.name }}</td>
                        <td>{{data.score | toFixed(2)}}</td>
                        <td>{{data.lnorm}}~{{data.rnorm}}</td>
                        <td colspan="5">
                          <div class="score-line">

                            <div class="line b-red" v-if="data.score<=1" :style="{width:data.score/5*355+'%'}"></div>
                            <div class="line b-orange" v-if="data.score>1 && data.score<=2"
                                 :style="{width:data.score/5*355+'px'}"></div>
                            <div class="line b-yellow" v-if="data.score>2 && data.score<=3"
                                 :style="{width:data.score/5*355+'px'}"></div>
                            <div class="line b-green" v-if="data.score>3 && data.score<=4"
                                 :style="{width:data.score/5*355+'px'}"></div>
                            <div class="line b-blue" v-if="data.score>4 && data.score<=5"
                                 :style="{width:data.score/5*355+'px'}"></div>
                            <div class="norm-line"
                                 :style="{marginLeft:(data.lnorm/5)*355+'px',width:(data.rnorm-data.lnorm)/5*355+'px'}"></div>
                          </div>
                        </td>
                      </tr>
                      </tbody>
                    </table>
                  </div>
                  <div class="pdf-blue-title pdf-yellow-title" id="522">
                    <img src="../../assets/pdf/title-trn.png" alt="">5.2.2学习态度分析
                  </div>
                  <div class="pdf-border-paragraph m-b20" v-for="(data,index) in attitudeTexts" v-if="index<1">
                    <div class="pull-left blue-title m-b20">
                      {{data.name}}
                    </div>
                    <p>
                      {{data.comment}}
                    </p>
                  </div>
                </div>
                <div class="font-blue pdf-footer">
                  <p class="pull-left">测评网址：www.ymtest.com</p>
                  <p class="pull-right">测评方法、工具及报告设计已申请产权保护</p>
                </div>
              </div>
              <!--page 42-->

              <!--page 43-->
              <div class="pdf-page">
                <div class="pdf-header">
                  <img class="pull-left" src="../../assets/pdf/header-logo.png" height="39px">
                  <p class="pull-right pdf-page-seq"></p>
                  <p class="pull-right font-blue">高中生升学规划测评报告</p>
                </div>
                <div class=" pdf-content">
                  <div class="pdf-border-paragraph m-b20" v-for="(data,index) in attitudeTexts" v-if="index>0">
                    <div class="pull-left blue-title m-b20">
                      {{data.name}}
                    </div>
                    <p>
                      {{data.comment}}
                    </p>
                  </div>
                  <div class="pdf-blue-title" id="53">
                    <img src="../../assets/pdf/title-trn.png" alt="">5.3学习过程
                  </div>
                  <div class="pdf-border-paragraph m-b20">
                    <p>
                      学习是一个很复杂的过程，需要从多方面进行分析。学习是如何发生的，如何进行的，它的结构是什么，历来人们从不同的观点和角度对它进行分析。
                    </p>
                    <p>本报告是对您的学习过程进行分析与描述。主要从学习计划、学习监控、学习调节与学习效率四个方面进行评估。</p>
                  </div>
                </div>
                <div class="font-blue pdf-footer">
                  <p class="pull-left">测评网址：www.ymtest.com</p>
                  <p class="pull-right">测评方法、工具及报告设计已申请产权保护</p>
                </div>
              </div>
              <!--page 43-->

              <!--page 44-->
              <div class="pdf-page">
                <div class="pdf-header">
                  <img class="pull-left" src="../../assets/pdf/header-logo.png" height="39px">
                  <p class="pull-right pdf-page-seq"></p>
                  <p class="pull-right font-blue">高中生升学规划测评报告</p>
                </div>
                <div class=" pdf-content">
                  <div class="pdf-blue-title pdf-yellow-title" id="531">
                    <img src="../../assets/pdf/title-trn.png" alt="">5.3.1学习过程评估结果
                  </div>
                  <div class="pdf-border-paragraph m-b20">
                    <p>
                      在下表中学习过程水平值是测试个体在各项学习过程指标中的水平大小，值越高则在该指标上学习过程越好。常模范围是群体中大多数人在该项上的水平范围，图中评估的学习过程水平值高于常模范围，则说明在该学习过程指标上较大多数人好；若学习过程水平值在常模范围内，则说明该学习过程指标与大多数人无明显差异；若学习过程水平值低于常模范围，则说明在该学习过程指标上较大多数人差。
                    </p>
                  </div>
                  <div class="table-container">
                    <div class="table-title">学习过程指标评估详细结果</div>
                    <table>
                      <thead>
                      <tr>
                        <th colspan="2">学习过程</th>
                        <th>学习过程水平值</th>
                        <th>常模范围</th>
                        <th width="110">较差</th>
                        <th width="110">一般</th>
                        <th width="110">较好</th>
                      </tr>
                      </thead>
                      <tbody>

                      <tr>
                        <td class="bg-blue" rowspan="3">学习计划</td>
                        <td class="bg-blue">{{processNorm1.name}}</td>
                        <td>{{processNorm1.score}}</td>
                        <td>{{processNorm1.lnorm}}~{{processNorm1.rnorm}}</td>
                        <td colspan="3">
                          <div class="score-line">
                            <div class="line b-red" v-if="processNorm1.grade==1" :style="{width:16.5+'%'}"></div>
                            <div class="line b-yellow" v-if="processNorm1.grade==2" :style="{width:50+'%'}"></div>
                            <div class="line b-blue" v-if="processNorm1.grade==3" :style="{width:83.5+'%'}"></div>
                            <!--<div class="norm-line"-->
                            <!--:style="{marginLeft:(processNorm1.lnorm/5)*333+'px',width:(processNorm1.rnorm-processNorm1.lnorm)/5*355+'px'}"></div>-->
                          </div>
                        </td>
                      </tr>

                      <tr>
                        <td class="bg-blue">{{processNorm2.name}}</td>
                        <td>{{processNorm2.score}}</td>
                        <td>{{processNorm2.lnorm}}~{{processNorm2.rnorm}}</td>
                        <td colspan="3">
                          <div class="score-line">
                            <div class="line b-red" v-if="processNorm2.grade==1" :style="{width:16.5+'%'}"></div>
                            <div class="line b-yellow" v-if="processNorm2.grade==2" :style="{width:50+'%'}"></div>
                            <div class="line b-blue" v-if="processNorm2.grade==3" :style="{width:83.5+'%'}"></div>
                            <!--<div class="norm-line"-->
                            <!--:style="{marginLeft:(processNorm2.lnorm/5)*333+'px',width:(processNorm2.rnorm-processNorm2.lnorm)/5*355+'px'}"></div>-->
                          </div>
                        </td>
                      </tr>

                      <tr>
                        <td class="bg-blue">{{processNorm3.name}}</td>
                        <td>{{processNorm3.score}}</td>
                        <td>{{processNorm3.lnorm}}~{{processNorm3.rnorm}}</td>
                        <td colspan="3">
                          <div class="score-line">
                            <div class="line b-red" v-if="processNorm3.grade==1" :style="{width:16.5+'%'}"></div>
                            <div class="line b-yellow" v-if="processNorm3.grade==2" :style="{width:50+'%'}"></div>
                            <div class="line b-blue" v-if="processNorm3.grade==3" :style="{width:83.5+'%'}"></div>
                            <!--<div class="norm-line"-->
                            <!--:style="{marginLeft:(processNorm3.lnorm/5)*333+'px',width:(processNorm3.rnorm-processNorm3.lnorm)/5*355+'px'}"></div>-->
                          </div>
                        </td>
                      </tr>

                      <tr>
                        <td class="bg-blue" rowspan="3">学习监控</td>
                        <td class="bg-blue">{{processNorm4.name}}</td>
                        <td>{{processNorm4.score}}</td>
                        <td>{{processNorm4.lnorm}}~{{processNorm4.rnorm}}</td>
                        <td colspan="3">
                          <div class="score-line">
                            <div class="line b-red" v-if="processNorm4.grade==1" :style="{width:16.5+'%'}"></div>
                            <div class="line b-yellow" v-if="processNorm4.grade==2" :style="{width:50+'%'}"></div>
                            <div class="line b-blue" v-if="processNorm4.grade==3" :style="{width:83.5+'%'}"></div>
                            <!--<div class="norm-line"-->
                            <!--:style="{marginLeft:(processNorm4.lnorm/5)*333+'px',width:(processNorm4.rnorm-processNorm4.lnorm)/5*355+'px'}"></div>-->
                          </div>
                        </td>
                      </tr>

                      <tr>
                        <td class="bg-blue">{{processNorm5.name}}</td>
                        <td>{{processNorm5.score}}</td>
                        <td>{{processNorm5.lnorm}}~{{processNorm5.rnorm}}</td>
                        <td colspan="3">
                          <div class="score-line">
                            <div class="line b-red" v-if="processNorm5.grade==1" :style="{width:16.5+'%'}"></div>
                            <div class="line b-yellow" v-if="processNorm5.grade==2" :style="{width:50+'%'}"></div>
                            <div class="line b-blue" v-if="processNorm5.grade==3" :style="{width:83.5+'%'}"></div>
                            <!--<div class="norm-line"-->
                            <!--:style="{marginLeft:(processNorm5.lnorm/5)*333+'px',width:(processNorm5.rnorm-processNorm5.lnorm)/5*355+'px'}"></div>-->
                          </div>
                        </td>
                      </tr>

                      <tr>
                        <td class="bg-blue">{{processNorm6.name}}</td>
                        <td>{{processNorm6.score}}</td>
                        <td>{{processNorm6.lnorm}}~{{processNorm6.rnorm}}</td>
                        <td colspan="3">
                          <div class="score-line">
                            <div class="line b-red" v-if="processNorm6.grade==1" :style="{width:16.5+'%'}"></div>
                            <div class="line b-yellow" v-if="processNorm6.grade==2" :style="{width:50+'%'}"></div>
                            <div class="line b-blue" v-if="processNorm6.grade==3" :style="{width:83.5+'%'}"></div>
                            <!--<div class="norm-line"-->
                            <!--:style="{marginLeft:(processNorm6.lnorm/5)*333+'px',width:(processNorm6.rnorm-processNorm6.lnorm)/5*355+'px'}"></div>-->
                          </div>
                        </td>
                      </tr>

                      <tr>
                        <td class="bg-blue" rowspan="3">学习调节</td>
                        <td class="bg-blue">{{processNorm7.name}}</td>
                        <td>{{processNorm7.score}}</td>
                        <td>{{processNorm7.lnorm}}~{{processNorm7.rnorm}}</td>
                        <td colspan="3">
                          <div class="score-line">
                            <div class="line b-red" v-if="processNorm7.grade==1" :style="{width:16.5+'%'}"></div>
                            <div class="line b-yellow" v-if="processNorm7.grade==2" :style="{width:50+'%'}"></div>
                            <div class="line b-blue" v-if="processNorm7.grade==3" :style="{width:83.5+'%'}"></div>
                            <!--<div class="norm-line"-->
                            <!--:style="{marginLeft:(processNorm7.lnorm/5)*333+'px',width:(processNorm7.rnorm-processNorm7.lnorm)/5*355+'px'}"></div>-->
                          </div>
                        </td>
                      </tr>

                      <tr>
                        <td class="bg-blue">{{processNorm8.name}}</td>
                        <td>{{processNorm8.score}}</td>
                        <td>{{processNorm8.lnorm}}~{{processNorm8.rnorm}}</td>
                        <td colspan="3">
                          <div class="score-line">
                            <div class="line b-red" v-if="processNorm8.grade==1" :style="{width:16.5+'%'}"></div>
                            <div class="line b-yellow" v-if="processNorm8.grade==2" :style="{width:50+'%'}"></div>
                            <div class="line b-blue" v-if="processNorm8.grade==3" :style="{width:83.5+'%'}"></div>
                            <!--<div class="norm-line"-->
                            <!--:style="{marginLeft:(processNorm8.lnorm/5)*333+'px',width:(processNorm8.rnorm-processNorm8.lnorm)/5*355+'px'}"></div>-->
                          </div>
                        </td>
                      </tr>

                      <tr>
                        <td class="bg-blue">{{processNorm9.name}}</td>
                        <td>{{processNorm9.score}}</td>
                        <td>{{processNorm9.lnorm}}~{{processNorm9.rnorm}}</td>
                        <td colspan="3">
                          <div class="score-line">
                            <div class="line b-red" v-if="processNorm9.grade==1" :style="{width:16.5+'%'}"></div>
                            <div class="line b-yellow" v-if="processNorm9.grade==2" :style="{width:50+'%'}"></div>
                            <div class="line b-blue" v-if="processNorm9.grade==3" :style="{width:83.5+'%'}"></div>
                            <!--<div class="norm-line"-->
                            <!--:style="{marginLeft:(processNorm9.lnorm/5)*333+'px',width:(processNorm9.rnorm-processNorm9.lnorm)/5*355+'px'}"></div>-->
                          </div>
                        </td>
                      </tr>

                      <!--<tr>-->
                      <!--<td class="bg-blue" rowspan="2">学习效率</td>-->
                      <!--&lt;!&ndash;<td class="bg-blue">{{processNorm10.name}}</td>&ndash;&gt;-->
                      <!--&lt;!&ndash;<td>{{processNorm10.score}}</td>&ndash;&gt;-->
                      <!--&lt;!&ndash;<td>{{processNorm10.lnorm}}~{{processNorm10.rnorm}}</td>&ndash;&gt;-->
                      <!--&lt;!&ndash;<td colspan="3">&ndash;&gt;-->
                      <!--&lt;!&ndash;<div class="score-line">&ndash;&gt;-->
                      <!--&lt;!&ndash;<div class="line b-red" v-if="processNorm10.grade==1" :style="{width:16.5+'%'}"></div>&ndash;&gt;-->
                      <!--&lt;!&ndash;<div class="line b-yellow" v-if="processNorm10.grade==2" :style="{width:50+'%'}"></div>&ndash;&gt;-->
                      <!--&lt;!&ndash;<div class="line b-blue" v-if="processNorm10.grade==3" :style="{width:83.5+'%'}"></div>&ndash;&gt;-->
                      <!--&lt;!&ndash;&lt;!&ndash;<div class="norm-line"&ndash;&gt;&ndash;&gt;-->
                      <!--&lt;!&ndash;&lt;!&ndash;:style="{marginLeft:(processNorm10.lnorm/5)*333+'px',width:(processNorm10.rnorm-processNorm10.lnorm)/5*355+'px'}"></div>&ndash;&gt;&ndash;&gt;-->
                      <!--&lt;!&ndash;</div>&ndash;&gt;-->
                      <!--&lt;!&ndash;</td>&ndash;&gt;-->
                      <!--</tr>-->

                      <tr>
                        <td class="bg-blue" rowspan="2">学习效率</td>
                        <td class="bg-blue">{{processNorm11.name}}</td>
                        <td>{{processNorm11.score}}</td>
                        <td>{{processNorm11.lnorm}}~{{processNorm11.rnorm}}</td>
                        <td colspan="3">
                          <div class="score-line">
                            <div class="line b-red" v-if="processNorm11.grade==1" :style="{width:16.5+'%'}"></div>
                            <div class="line b-yellow" v-if="processNorm11.grade==2" :style="{width:50+'%'}"></div>
                            <div class="line b-blue" v-if="processNorm11.grade==3" :style="{width:83.5+'%'}"></div>
                            <!--<div class="norm-line"-->
                            <!--:style="{marginLeft:(processNorm11.lnorm/5)*333+'px',width:(processNorm11.rnorm-processNorm11.lnorm)/5*355+'px'}"></div>-->
                          </div>
                        </td>
                      </tr>

                      <tr>
                        <td class="bg-blue">{{processNorm12.name}}</td>
                        <td>{{processNorm12.score}}</td>
                        <td>{{processNorm12.lnorm}}~{{processNorm12.rnorm}}</td>
                        <td colspan="3">
                          <div class="score-line">
                            <div class="line b-red" v-if="processNorm12.grade==1" :style="{width:16.5+'%'}"></div>
                            <div class="line b-yellow" v-if="processNorm12.grade==2" :style="{width:50+'%'}"></div>
                            <div class="line b-blue" v-if="processNorm12.grade==3" :style="{width:83.5+'%'}"></div>
                            <!--<div class="norm-line"-->
                            <!--:style="{marginLeft:(processNorm12.lnorm/5)*333+'px',width:(processNorm12.rnorm-processNorm12.lnorm)/5*355+'px'}"></div>-->
                          </div>
                        </td>
                      </tr>


                      </tbody>
                    </table>
                  </div>

                </div>
                <div class="font-blue pdf-footer">
                  <p class="pull-left">测评网址：www.ymtest.com</p>
                  <p class="pull-right">测评方法、工具及报告设计已申请产权保护</p>
                </div>
              </div>
              <!--page 44-->

              <!--page 45-->
              <div class="pdf-page">
                <div class="pdf-header">
                  <img class="pull-left" src="../../assets/pdf/header-logo.png" height="39px">
                  <p class="pull-right pdf-page-seq"></p>
                  <p class="pull-right font-blue">高中生升学规划测评报告</p>
                </div>
                <div class=" pdf-content">
                  <div class="pdf-blue-title pdf-yellow-title" id="532">
                    <img src="../../assets/pdf/title-trn.png" alt="">5.3.2学习过程分析
                  </div>
                  <div class="pdf-border-paragraph m-b20">
                    <div class="pull-left blue-title m-b20">
                      学习计划
                    </div>
                    <div class="left-block">
                      <div class="pull-left"></div>
                      <div class="text-container">
                        {{processTexts1.name}}
                      </div>
                    </div>
                    <p>
                      {{processTexts1.comment}}
                    </p>
                    <div class="left-block">
                      <div class="pull-left"></div>
                      <div class="text-container">
                        {{processTexts2.name}}
                      </div>
                    </div>
                    <p>
                      {{processTexts2.comment}}
                    </p>
                    <div class="left-block">
                      <div class="pull-left"></div>
                      <div class="text-container">
                        {{processTexts3.name}}
                      </div>
                    </div>
                    <p>
                      {{processTexts3.comment}}
                    </p>
                  </div>

                </div>
                <div class="font-blue pdf-footer">
                  <p class="pull-left">测评网址：www.ymtest.com</p>
                  <p class="pull-right">测评方法、工具及报告设计已申请产权保护</p>
                </div>
              </div>
              <!--page 45-->

              <!--page 46-->
              <div class="pdf-page">
                <div class="pdf-header">
                  <img class="pull-left" src="../../assets/pdf/header-logo.png" height="39px">
                  <p class="pull-right pdf-page-seq"></p>
                  <p class="pull-right font-blue">高中生升学规划测评报告</p>
                </div>
                <div class=" pdf-content">

                  <div class="pdf-border-paragraph m-b20">
                    <div class="pull-left blue-title m-b20">
                      学习监控
                    </div>
                    <div class="left-block">
                      <div class="pull-left"></div>
                      <div class="text-container">
                        {{processTexts4.name}}
                      </div>
                    </div>
                    <p>
                      {{processTexts4.comment}}
                    </p>
                    <div class="left-block">
                      <div class="pull-left"></div>
                      <div class="text-container">
                        {{processTexts5.name}}
                      </div>
                    </div>
                    <p>
                      {{processTexts5.comment}}
                    </p>
                    <div class="left-block">
                      <div class="pull-left"></div>
                      <div class="text-container">
                        {{processTexts6.name}}
                      </div>
                    </div>
                    <p>
                      {{processTexts6.comment}}
                    </p>
                  </div>

                </div>
                <div class="font-blue pdf-footer">
                  <p class="pull-left">测评网址：www.ymtest.com</p>
                  <p class="pull-right">测评方法、工具及报告设计已申请产权保护</p>
                </div>
              </div>
              <!--page 46-->

              <!--page 47-->
              <div class="pdf-page">
                <div class="pdf-header">
                  <img class="pull-left" src="../../assets/pdf/header-logo.png" height="39px">
                  <p class="pull-right pdf-page-seq"></p>
                  <p class="pull-right font-blue">高中生升学规划测评报告</p>
                </div>
                <div class=" pdf-content">

                  <div class="pdf-border-paragraph m-b20">
                    <div class="pull-left blue-title m-b20">
                      学习调节
                    </div>
                    <div class="left-block">
                      <div class="pull-left"></div>
                      <div class="text-container">
                        {{processTexts7.name}}
                      </div>
                    </div>
                    <p>
                      {{processTexts7.comment}}
                    </p>
                    <div class="left-block">
                      <div class="pull-left"></div>
                      <div class="text-container">
                        {{processTexts8.name}}
                      </div>
                    </div>
                    <p>
                      {{processTexts8.comment}}
                    </p>
                    <div class="left-block">
                      <div class="pull-left"></div>
                      <div class="text-container">
                        {{processTexts9.name}}
                      </div>
                    </div>
                    <p>
                      {{processTexts9.comment}}
                    </p>
                  </div>

                </div>
                <div class="font-blue pdf-footer">
                  <p class="pull-left">测评网址：www.ymtest.com</p>
                  <p class="pull-right">测评方法、工具及报告设计已申请产权保护</p>
                </div>
              </div>
              <!--page 47-->

              <!--page 47 补充-->
              <div class="pdf-page">
                <div class="pdf-header">
                  <img class="pull-left" src="../../assets/pdf/header-logo.png" height="39px">
                  <p class="pull-right pdf-page-seq"></p>
                  <p class="pull-right font-blue">高中生升学规划测评报告</p>
                </div>
                <div class=" pdf-content">

                  <div class="pdf-border-paragraph m-b20">
                    <div class="pull-left blue-title m-b20">
                      学习效率
                    </div>
                    <!--<div class="left-block">-->
                    <!--<div class="pull-left"></div>-->
                    <!--<div class="text-container">-->
                    <!--{{processTexts10.name}}-->
                    <!--</div>-->
                    <!--</div>-->
                    <!--<p>-->
                    <!--{{processTexts10.comment}}-->
                    <!--</p>-->
                    <div class="left-block">
                      <div class="pull-left"></div>
                      <div class="text-container">
                        {{processTexts11.name}}
                      </div>
                    </div>
                    <p>
                      {{processTexts11.comment}}
                    </p>
                    <div class="left-block">
                      <div class="pull-left"></div>
                      <div class="text-container">
                        {{processTexts12.name}}
                      </div>
                    </div>
                    <p>
                      {{processTexts12.comment}}
                    </p>
                  </div>

                </div>
                <div class="font-blue pdf-footer">
                  <p class="pull-left">测评网址：www.ymtest.com</p>
                  <p class="pull-right">测评方法、工具及报告设计已申请产权保护</p>
                </div>
              </div>
              <!--page 47 补充-->

              <!--page 48-->
              <div class="pdf-page">
                <div class="pdf-header">
                  <img class="pull-left" src="../../assets/pdf/header-logo.png" height="39px">
                  <p class="pull-right pdf-page-seq"></p>
                  <p class="pull-right font-blue">高中生升学规划测评报告</p>
                </div>
                <div class=" pdf-content">
                  <div class="pdf-blue-title">
                    <img src="../../assets/pdf/title-trn.png" alt="">5.4学习风格
                  </div>
                  <div class="pdf-border-paragraph m-b20">
                    <p>
                      学习风格是指人们在学习时所具有的或偏爱的方式，是学习者在研究和解决其学习任务时，所表现出来的具有个人特色的方式。它是由学习者特有的认知、情感和生理行为构成，它是反映学习者如何感知信息、如何与学习环境相互作用并对之作出反应的相对稳定的学习方式。
                    </p>
                    <p>
                      学习风格对于学习质量、学习效率有很大的影响。不同的国家，由于地域文化、教育制度的不同，学习风格是大相径庭；当然，即使是相同的地域及教育制度，不同的人，都会有不同学习风格。本报告是对您的学习风格进行深度分析，主要包括你对待信息的互动性程度、对信息的加工速度、加工信息时的依靠方式三个方面。并对于你可能存在的问题，提出建议和意见。
                    </p>
                  </div>
                  <div class="pdf-blue-title pdf-yellow-title" id="541">
                    <img src="../../assets/pdf/title-trn.png" alt="">5.4.1学习风格评估结果
                  </div>
                  <div class="pdf-border-paragraph m-b20">
                    <p>
                      在下表中学习风格水平值是测试个体在各项学习风格指标中的水平大小；常模范围是群体中大多数人在该项上的得分分布；灰色条形图是常模分布，黑色竖条是你的得分，得分分布在哪边表明你的学习风格偏向于哪个方向。 </p>
                  </div>
                  <div class="table-container table-55-container table-49-container">
                    <div class="table-title">学习风格指标评估详细结果</div>
                    <table>
                      <thead>
                      <tr>
                        <th>学习风格</th>
                        <th>学习风格水平值</th>
                        <th>常模范围</th>
                        <th width="420">学习风格偏向</th>
                      </tr>
                      </thead>
                      <tbody>
                      <tr>
                        <td class="bg-blue">对待信息</td>
                        <td>{{styleNorm1.score | toFixed(2)}}</td>
                        <td>{{styleNorm1.lnorm}}~{{styleNorm1.rnorm}}</td>
                        <td>
                          <div class="score-text">
                            <p>执行型</p>
                            <p>执行·创造型</p>
                            <p>创造型</p>
                          </div>
                          <div class="d-relative score-line">
                            <div class="line b-red"></div>
                            <div class="norm-line"
                                 :style="{marginLeft:(styleNorm1.lnorm/200)*350+'px',width:(styleNorm1.rnorm-styleNorm1.lnorm)/200*350+'px'}"></div>
                            <div class="black-line" :style="{left:(styleNorm1.score/200)*350+'px'}"></div>
                          </div>
                        </td>
                      </tr>

                      <tr>
                        <td class="bg-blue">信息加工方式</td>
                        <td>{{styleNorm2.score | toFixed(2)}}</td>
                        <td>{{styleNorm2.lnorm}}~{{styleNorm2.rnorm}}</td>
                        <td>
                          <div class="score-text">
                            <p>依存型</p>
                            <p>依存·独立型</p>
                            <p>独立型</p>
                          </div>
                          <div class="d-relative score-line">
                            <div class="line b-green"></div>
                            <div class="norm-line"
                                 :style="{marginLeft:(styleNorm2.lnorm/200)*350+'px',width:(styleNorm2.rnorm-styleNorm2.lnorm)/200*350+'px'}"></div>
                            <div class="black-line" :style="{left:(styleNorm2.score/200)*350+'px'}"></div>
                          </div>
                        </td>
                      </tr>

                      <tr>
                        <td class="bg-blue">信息加工速度</td>
                        <td>{{styleNorm3.score | toFixed(2)}}</td>
                        <td>{{styleNorm3.lnorm }}~{{styleNorm3.rnorm}}</td>
                        <td>
                          <div class="score-text">
                            <p>冲动型</p>
                            <p>冲动·沉思型</p>
                            <p>沉思型</p>
                          </div>
                          <div class="d-relative score-line">
                            <div class="line b-yellow"></div>
                            <div class="norm-line"
                                 :style="{marginLeft:(styleNorm3.lnorm/200)*350+'px',width:(styleNorm3.rnorm-styleNorm3.lnorm)/200*350+'px'}"></div>
                            <div class="black-line" :style="{left:(styleNorm3.score/200)*350+'px'}"></div>
                          </div>
                        </td>
                      </tr>

                      </tbody>
                    </table>
                  </div>
                </div>
                <div class="font-blue pdf-footer">
                  <p class="pull-left">测评网址：www.ymtest.com</p>
                  <p class="pull-right">测评方法、工具及报告设计已申请产权保护</p>
                </div>
              </div>
              <!--page 48-->

              <!--page 49-->
              <div class="pdf-page">
                <div class="pdf-header">
                  <img class="pull-left" src="../../assets/pdf/header-logo.png" height="39px">
                  <p class="pull-right pdf-page-seq"></p>
                  <p class="pull-right font-blue">高中生升学规划测评报告</p>
                </div>
                <div class=" pdf-content">

                  <div class="pdf-blue-title pdf-yellow-title" id="542">
                    <img src="../../assets/pdf/title-trn.png" alt="">5.4.2学习风格分析
                  </div>
                  <div class="text-center jixing" style="margin-bottom: 20px">
                    <div class="jx-content">
                      你对待信息的主动性程度属于：{{styleTexts1.name}}
                    </div>
                  </div>
                  <div class="pdf-border-paragraph m-b20">
                    <div class="pull-left blue-title m-b20">
                      典型特征
                    </div>
                    <p>
                      {{styleTexts1.feature}}
                    </p>
                  </div>
                  <div class="pdf-border-paragraph m-b20">
                    <div class="pull-left blue-title m-b20">
                      你的表现
                    </div>
                    <p>
                      {{styleTexts1.behaviour}}
                    </p>
                  </div>
                  <div class="pdf-border-paragraph m-b20">
                    <div class="pull-left blue-title m-b20">
                      优势
                    </div>
                    <div class="left-block" v-for="(data,index) in styleTexts1.advantage">
                      <div class="pull-left"></div>
                      <div class="text-container">{{data.detail}}
                      </div>
                    </div>

                  </div>
                </div>
                <div class="font-blue pdf-footer">
                  <p class="pull-left">测评网址：www.ymtest.com</p>
                  <p class="pull-right">测评方法、工具及报告设计已申请产权保护</p>
                </div>
              </div>
              <!--page 49-->

              <!--page 50-->
              <div class="pdf-page">
                <div class="pdf-header">
                  <img class="pull-left" src="../../assets/pdf/header-logo.png" height="39px">
                  <p class="pull-right pdf-page-seq"></p>
                  <p class="pull-right font-blue">高中生升学规划测评报告</p>
                </div>
                <div class=" pdf-content">
                  <div class="pdf-border-paragraph m-b20">
                    <div class="pull-left blue-title m-b20">
                      盲点
                    </div>
                    <div class="left-block" v-for="(data,index) in styleTexts1.disadvantage">
                      <div class="pull-left"></div>
                      <div class="text-container">{{data.detail}}
                      </div>
                    </div>

                  </div>
                  <div class="pdf-border-paragraph m-b20">
                    <div class="pull-left blue-title m-b20">
                      专家建议
                    </div>
                    <div class="left-block" v-for="(data,index) in styleTexts1.advise">
                      <div class="pull-left"></div>
                      <div class="text-container">{{data.detail}}
                      </div>
                    </div>
                  </div>

                  <div class="text-center jixing" style="margin-bottom: 20px;">
                    <div class="jx-content">
                      你在加工信息时的依靠方式属于：{{styleTexts2.name}}
                    </div>
                  </div>
                  <div class="pdf-border-paragraph m-b20">
                    <div class="pull-left blue-title m-b20">
                      典型特征
                    </div>
                    <p>
                      {{styleTexts2.feature}}
                    </p>
                  </div>
                  <div class="pdf-border-paragraph m-b20">
                    <div class="pull-left blue-title m-b20">
                      你的表现
                    </div>
                    <p>
                      {{styleTexts2.behaviour}}
                    </p>
                  </div>
                </div>
                <div class="font-blue pdf-footer">
                  <p class="pull-left">测评网址：www.ymtest.com</p>
                  <p class="pull-right">测评方法、工具及报告设计已申请产权保护</p>
                </div>
              </div>
              <!--page 50-->

              <!--page 51-->
              <div class="pdf-page">
                <div class="pdf-header">
                  <img class="pull-left" src="../../assets/pdf/header-logo.png" height="39px">
                  <p class="pull-right pdf-page-seq"></p>
                  <p class="pull-right font-blue">高中生升学规划测评报告</p>
                </div>
                <div class=" pdf-content">
                  <div class="pdf-border-paragraph m-b20">
                    <div class="pull-left blue-title m-b20">
                      优势
                    </div>
                    <div class="left-block" v-for="(data,index) in styleTexts2.advantage">
                      <div class="pull-left"></div>
                      <div class="text-container">{{data.detail}}
                      </div>
                    </div>
                  </div>
                  <div class="pdf-border-paragraph m-b20">
                    <div class="pull-left blue-title m-b20">
                      盲点
                    </div>
                    <div class="left-block" v-for="(data,index) in styleTexts2.disadvantage">
                      <div class="pull-left"></div>
                      <div class="text-container">{{data.detail}}
                      </div>
                    </div>

                  </div>
                  <div class="pdf-border-paragraph m-b20">
                    <div class="pull-left blue-title m-b20">
                      专家建议
                    </div>
                    <div class="left-block" v-for="(data,index) in styleTexts2.advise">
                      <div class="pull-left"></div>
                      <div class="text-container">{{data.detail}}
                      </div>
                    </div>
                  </div>
                </div>
                <div class="font-blue pdf-footer">
                  <p class="pull-left">测评网址：www.ymtest.com</p>
                  <p class="pull-right">测评方法、工具及报告设计已申请产权保护</p>
                </div>
              </div>
              <!--page 51-->

              <!--page 52-->
              <div class="pdf-page">
                <div class="pdf-header">
                  <img class="pull-left" src="../../assets/pdf/header-logo.png" height="39px">
                  <p class="pull-right pdf-page-seq"></p>
                  <p class="pull-right font-blue">高中生升学规划测评报告</p>
                </div>
                <div class=" pdf-content">
                  <div class="text-center jixing" style="margin-bottom: 20px;">
                    <div class="jx-content">
                      你对信息的加工速度属于：{{styleTexts3.name}}
                    </div>
                  </div>
                  <div class="pdf-border-paragraph m-b20">
                    <div class="pull-left blue-title m-b20">
                      典型特征
                    </div>
                    <p>
                      {{styleTexts3.feature}}
                    </p>
                  </div>
                  <div class="pdf-border-paragraph m-b20">
                    <div class="pull-left blue-title m-b20">
                      你的表现
                    </div>
                    <p>
                      {{styleTexts3.behaviour}}
                    </p>
                  </div>
                  <div class="pdf-border-paragraph m-b20">
                    <div class="pull-left blue-title m-b20">
                      优势
                    </div>
                    <div class="left-block" v-for="(data,index) in styleTexts3.advantage">
                      <div class="pull-left"></div>
                      <div class="text-container">{{data.detail}}
                      </div>
                    </div>
                  </div>
                </div>
                <div class="font-blue pdf-footer">
                  <p class="pull-left">测评网址：www.ymtest.com</p>
                  <p class="pull-right">测评方法、工具及报告设计已申请产权保护</p>
                </div>
              </div>
              <!--page 52-->

              <!--page 53-->
              <div class="pdf-page">
                <div class="pdf-header">
                  <img class="pull-left" src="../../assets/pdf/header-logo.png" height="39px">
                  <p class="pull-right pdf-page-seq"></p>
                  <p class="pull-right font-blue">高中生升学规划测评报告</p>
                </div>
                <div class=" pdf-content">
                  <div class="pdf-border-paragraph m-b20">
                    <div class="pull-left blue-title m-b20">
                      盲点
                    </div>
                    <div class="left-block" v-for="(data,index) in styleTexts3.disadvantage">
                      <div class="pull-left"></div>
                      <div class="text-container">{{data.detail}}
                      </div>
                    </div>
                  </div>
                  <div class="pdf-border-paragraph m-b20">
                    <div class="pull-left blue-title m-b20">
                      专家建议
                    </div>
                    <div class="left-block" v-for="(data,index) in styleTexts3.advise">
                      <div class="pull-left"></div>
                      <div class="text-container">{{data.detail}}
                      </div>
                    </div>
                  </div>
                </div>
                <div class="font-blue pdf-footer">
                  <p class="pull-left">测评网址：www.ymtest.com</p>
                  <p class="pull-right">测评方法、工具及报告设计已申请产权保护</p>
                </div>
              </div>
              <!--page 53-->

              <!--page 54-->
              <div class="pdf-page">
                <div class="pdf-header">
                  <img class="pull-left" src="../../assets/pdf/header-logo.png" height="39px">
                  <p class="pull-right pdf-page-seq"></p>
                  <p class="pull-right font-blue">高中生升学规划测评报告</p>
                </div>
                <div class=" pdf-content">
                  <div class="font-blue pdf-page-title m-b10"><span>第六部分 心理健康评估</span></div>
                  <div class="pdf-border-paragraph pdf-mins-height m-b10">
                    <p>
                      心理健康是指心理的各个方面及活动过程处于一种良好或正常的状态。心理健康的理想状态是保持性格完美、智力正常、认知正确、情感适当、意志合理、态度积极、行为恰当、适应良好的状态。个体能够适应发展的环境，具有完善的个性特征；且其认知，情绪反应，意志行为处于积极状态，并能保持正常的调控能力。在生活实践中，能够正确认识自我，自觉控制自己，正确对待外界变化，从而使心理保持平衡协调，就已具备了心理健康的基本特征。
                    </p>
                    <p>本报告将从从强迫症状、人际关系敏感、抑郁、焦虑、敌对、偏执、精神病性七个方面详细的分析您的心理健康水平，给您提出合理的建议与意见。
                    </p>
                    <p>
                    </p>
                  </div>
                  <div class="pdf-blue-title m-b10" id="61">
                    <img src="../../assets/pdf/title-trn.png" alt="">6.1心理健康评估结果
                  </div>
                  <div class="pdf-border-paragraph pdf-mins-height m-b10">
                    <p>
                      在下表中心理健康水平值是测试个体在各项心理健康指标中的水平大小，值越高则在该因子上测试者的症状越明显。常模范围是群体中大多数人在该项上的水平范围，图中评估的心理健康水平值高于常模范围，则说明在该指标上异常；若心理健康水平在常模范围之内或低于常模范围，则说明该心理健康指标与大多数人无明显差别且正常。
                    </p>
                  </div>

                  <div class="table-container table-55-container">
                    <div class="table-title">心理健康评估结果与常模对比结果</div>
                    <table>
                      <thead>
                      <tr>
                        <th rowspan="2">心理健康</th>
                        <th rowspan="2">心理健康水平值</th>
                        <th rowspan="2">常模范围</th>
                        <th width="350" colspan="5">得分</th>
                      </tr>
                      <tr>
                        <th width="70">1</th>
                        <th width="70">2</th>
                        <th width="70">3</th>
                        <th width="70">4</th>
                        <th width="70">5</th>
                      </tr>
                      </thead>
                      <tbody>
                      <tr v-for="data in xljkNorm">
                        <td class="bg-blue">{{data.name }}</td>
                        <td>{{data.score | toFixed(2)}}</td>
                        <td>{{data.lnorm}}~{{data.rnorm}}</td>
                        <td colspan="5">
                          <div class="score-line">
                            <div class="line b-red" v-if="data.score<=1" :style="{width:(data.score/5)*355+'px'}"></div>
                            <div class="line b-orange" v-if="data.score>1 && data.score<=2"
                                 :style="{width:(data.score/5)*355+'px'}"></div>
                            <div class="line b-yellow" v-if="data.score>2 && data.score<=3"
                                 :style="{width:(data.score/5)*355+'px'}"></div>
                            <div class="line b-green" v-if="data.score>3 && data.score<=4"
                                 :style="{width:(data.score/5)*355+'px'}"></div>
                            <div class="line b-blue" v-if="data.score>4 && data.score<=5"
                                 :style="{width:(data.score/5)*355+'px'}"></div>
                            <div class="norm-line"
                                 :style="{marginLeft:(data.lnorm/5)*355+'px',width:(data.rnorm-data.lnorm)/5*355+'px'}"></div>
                          </div>
                        </td>
                      </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
                <div class="font-blue pdf-footer">
                  <p class="pull-left">测评网址：www.ymtest.com</p>
                  <p class="pull-right">测评方法、工具及报告设计已申请产权保护</p>
                </div>
              </div>
              <!--page 54-->

              <!--page 55-->
              <div class="pdf-page">
                <div class="pdf-header">
                  <img class="pull-left" src="../../assets/pdf/header-logo.png" height="39px">
                  <p class="pull-right pdf-page-seq"></p>
                  <p class="pull-right font-blue">高中生升学规划测评报告</p>
                </div>
                <div class=" pdf-content">

                  <div class="pdf-blue-title" id="62">
                    <img src="../../assets/pdf/title-trn.png" alt="">6.2心理健康分析
                  </div>
                  <div class="pdf-border-paragraph m-b20">
                    <div class="pull-left blue-title m-b20">
                      {{xljkTexts2.name}}
                    </div>
                    <p>
                      {{xljkTexts2.comment}}
                    </p>
                  </div>

                  <div class="pdf-border-paragraph m-b20">
                    <div class="pull-left blue-title m-b20">
                      {{xljkTexts6.name}}
                    </div>
                    <p>
                      {{xljkTexts6.comment}}
                    </p>
                  </div>
                  <div class="pdf-border-paragraph m-b20">
                    <div class="pull-left blue-title m-b20">
                      {{xljkTexts4.name}}
                    </div>
                    <p>
                      {{xljkTexts4.comment}}
                    </p>
                  </div>
                  <div class="pdf-border-paragraph m-b20">
                    <div class="pull-left blue-title m-b20">
                      {{xljkTexts1.name}}
                    </div>
                    <p>
                      {{xljkTexts1.comment}}
                    </p>
                  </div>
                </div>
                <div class="font-blue pdf-footer">
                  <p class="pull-left">测评网址：www.ymtest.com</p>
                  <p class="pull-right">测评方法、工具及报告设计已申请产权保护</p>
                </div>
              </div>
              <!--page 55-->

              <!--page 56-->
              <div class="pdf-page">
                <div class="pdf-header">
                  <img class="pull-left" src="../../assets/pdf/header-logo.png" height="39px">
                  <p class="pull-right pdf-page-seq"></p>
                  <p class="pull-right font-blue">高中生升学规划测评报告</p>
                </div>
                <div class=" pdf-content">

                  <div class="pdf-border-paragraph m-b20">
                    <div class="pull-left blue-title m-b20">
                      {{xljkTexts5.name}}
                    </div>
                    <p>
                      {{xljkTexts5.comment}}
                    </p>
                  </div>

                  <div class="pdf-border-paragraph m-b20">
                    <div class="pull-left blue-title m-b20">
                      {{xljkTexts3.name}}
                    </div>
                    <p>
                      {{xljkTexts3.comment}}
                    </p>
                  </div>
                  <div class="pdf-border-paragraph m-b20">
                    <div class="pull-left blue-title m-b20">
                      {{xljkTexts7.name}}
                    </div>
                    <p>
                      {{xljkTexts7.comment}}
                    </p>
                  </div>
                </div>
                <div class="font-blue pdf-footer">
                  <p class="pull-left">测评网址：www.ymtest.com</p>
                  <p class="pull-right">测评方法、工具及报告设计已申请产权保护</p>
                </div>
              </div>
              <!--page 56-->

              <!--page 57-->
              <!--<div class="pdf-page">-->
              <!--<div class="pdf-header">-->
              <!--<img class="pull-left" src="../../assets/pdf/header-logo.png" height="39px">-->
              <!--<p class="pull-right pdf-page-seq"></p>-->
              <!--<p class="pull-right font-blue">高中生升学规划测评报告</p>-->
              <!--</div>-->
              <!--<div class=" pdf-content">-->

              <!--</div>-->
              <!--<div class="font-blue pdf-footer">-->
              <!--<p class="pull-left">测评网址：www.ymtest.com</p>-->
              <!--<p class="pull-right">测评方法、工具及报告设计已申请产权保护</p>-->
              <!--</div>-->
              <!--</div>-->
              <!--page 57-->

              <div class="w100" v-for="(major,index) in majors">

                <!--page 58-->
                <div class="pdf-page">
                  <div class="pdf-header">
                    <img class="pull-left" src="../../assets/pdf/header-logo.png" height="39px">
                    <p class="pull-right pdf-page-seq"></p>
                    <p class="pull-right font-blue">高中生升学规划测评报告</p>
                  </div>
                  <div class=" pdf-content">
                    <div class="font-blue pdf-page-title" v-if="index==0"><span>附件：推荐专业详细介绍</span></div>
                    <div class="text-center jixing" style="margin-bottom: 0px;">
                      <div class="jx-content">
                        推荐专业{{index+1}}：{{major.name}}
                      </div>
                    </div>
                    <div class="recommend-major">
                      <p>专业代码 </p>
                      <p>{{major.code}}</p>
                    </div>
                    <div
                      :class="index==0 ? 'pdf-border-paragraph pdf-mins-height m-b10' : 'pdf-border-paragraph m-b10'">
                      <div class="pull-left blue-title m-b20">
                        专业介绍
                      </div>
                      <p>
                        {{major.desc}}
                      </p>
                    </div>
                    <div class="pdf-border-paragraph pbp-height-medium m-b15">
                      <div class="pull-left blue-title m-b20">
                        知识能力
                      </div>
                      <p v-for="data in major.knowledge">{{data.detail}}</p>
                    </div>
                    <div class="pdf-border-paragraph pdf-min-height m-b15">
                      <div class="pull-left blue-title m-b20">
                        主干课程
                      </div>
                      <p>
                        {{major.course}}
                      </p>
                    </div>
                    <div class="pdf-border-paragraph pdf-mins-height" v-if="major.name!='应用统计学'">
                      <div class="pull-left blue-title m-b20">
                        就业方向
                      </div>
                      <p>
                        {{major.employ}}
                      </p>
                    </div>
                  </div>
                  <div class="font-blue pdf-footer">
                    <p class="pull-left">测评网址：www.ymtest.com</p>
                    <p class="pull-right">测评方法、工具及报告设计已申请产权保护</p>
                  </div>
                </div>
                <!--page 58-->

                <!--page 59-->
                <div class="pdf-page">
                  <div class="pdf-header">
                    <img class="pull-left" src="../../assets/pdf/header-logo.png" height="39px">
                    <p class="pull-right pdf-page-seq"></p>
                    <p class="pull-right font-blue">高中生升学规划测评报告</p>
                  </div>
                  <div class=" pdf-content">
                    <div class="pdf-border-paragraph m-b20" v-if="major.name=='应用统计学'">
                      <div class="pull-left blue-title m-b20">
                        就业方向
                      </div>
                      <p>
                        {{major.employ}}
                      </p>
                    </div>
                    <div class="pdf-border-paragraph m-b20">
                      <div class="pull-left blue-title m-b20">
                        数据统计
                      </div>
                      <p v-for="data in major.statistics">
                        {{data.detail}}
                      </p>
                    </div>
                  </div>
                  <div class="font-blue pdf-footer">
                    <p class="pull-left">测评网址：www.ymtest.com</p>
                    <p class="pull-right">测评方法、工具及报告设计已申请产权保护</p>
                  </div>
                </div>
                <!--page 59-->

              </div>


            </div>

          </div>
        </div>
        <footerEl></footerEl>
      </div>
    </div>

    <div class="layer-mask" v-if="downloadTip==1"></div>
    <div class="pdf-download-tip" v-if="downloadTip==1">
      <!--<img src="../../assets/pdf/loading-spinner-default.gif">-->
      <!--PDF努力下载中,请稍候！-->
      <div class="progress">
        <div class="progress-bar" :style="{width:process+'%'}">
          <div class="progress-shadow"></div>
        </div>
        <span>{{process}}%</span>
      </div>

    </div>
  </div>

</template>

<script>
  import headerEl from '../../components/headerEl.vue';
  import usercenter from '../../components/usercenter.vue';
  import FooterEl from '../../components/FooterEl';

  var echarts = require('echarts');
  export default {
    data() {
      return {
        canvasImgArr: [],
        pdfTimer: '',
        cehuang: '', //测谎题得分
        pageLen: '',
        canvasImgSeq: 0,
        canvasImg: '',
        downloadTip: 0,
        reportId: '', // 报告ID
        userInfo: '', // 用户基本信息
        user: '', // 用户基本信息2
        reportTime: '', // 报告日期
        testTime: '', //  评测日期
        personality: '', // 1.1 & 1.2
        personalityDesc: '', // 人格特性描述
        personalityName: '', // 人格特性名称数组
        xgtxFoData1: '', // 性格特性 表格1
        xgtxFoData2: '', // 性格特性 表格1
        xgtxFoData3: '', // 性格特性 表格1
        xgtxFoData4: '', // 性格特性 表格1
        xgtxFtData1: '', // 性格特性 表格2
        xgtxFtData2: '', // 性格特性 表格2
        xgtxFtData3: '', // 性格特性 表格2
        xgtxFtData4: '', // 性格特性 表格2
        xgtxFtData5: '', // 性格特性 表格2
        xgtxFthData1: '', // 性格特性 表格3
        xgtxFthData2: '', // 性格特性 表格3
        xgtxFthData3: '', // 性格特性 表格3
        xgtxFthData4: '', // 性格特性 表格3
        xgtxFthData5: '', // 性格特性 表格3
        xgtxFfData1: '', // 性格特性 表格4
        xgtxFfData2: '', // 性格特性 表格4
        xgtxFfData3: '', // 性格特性 表格4
        xgtxFfData4: '', // 性格特性 表格4
        xgtxFfData5: '', // 性格特性 表格4
        xgtxFfiData1: '', // 性格特性 表格5
        xgtxFfiData2: '', // 性格特性 表格5
        xgtxFfiData3: '', // 性格特性 表格5
        xgtxFfiData4: '', // 性格特性 表格5
        xgtxFfiData5: '', // 性格特性 表格5
        xgtxSData1: '', // 性格特性 表格6
        xgtxSData2: '', // 性格特性 表格6
        xgtxSData3: '', // 性格特性 表格6
        xgtxSData4: '', // 性格特性 表格6
        xgtxSData5: '', // 性格特性 表格6
        xgtxSData6: '', // 性格特性 表格6
        xgtxSData7: '', // 性格特性 表格6
        xgtxSData8: '', // 性格特性 表格6
        xgtxSData9: '', // 性格特性 表格6
        xgtxSData10: '', // 性格特性 表格6
        xgtxSData11: '', // 性格特性 表格6
        xgtxSData12: '', // 性格特性 表格6
        xgtxSData13: '', // 性格特性 表格6
        xgtxSData14: '', // 性格特性 表格6
        xgtxSData15: '', // 性格特性 表格6
        xgtxSData16: '', // 性格特性 表格6
        xgtxSData17: '', // 性格特性 表格6
        xgtxSData18: '', // 性格特性 表格6
        xgtxSData19: '', // 性格特性 表格6
        xgtxSData20: '', // 性格特性 表格6
        wx: '', // 1.3.1
        sg: '', // 1.3.2
        sk: '', // 1.3.3
        pd: '', // 1.3.4
        norm: '', // 1.3.5
        reliability: '', // 信度指数
        xqqxData: '', // 兴趣倾向数据
        xqqxTableData1: '', // 兴趣倾向表格数据 p25
        xqqxTableData2: '', // 兴趣倾向表格数据 p25
        xqqxTableData3: '', // 兴趣倾向表格数据 p25
        xqqxTableData4: '', // 兴趣倾向表格数据 p25
        xqqxTableData5: '', // 兴趣倾向表格数据 p25
        xqqxTableData6: '', // 兴趣倾向表格数据 p25
        bestCData: '', // 最佳职业数据
        careerTableData: '', // p29
        secondCData: '', // 第二职业
        thirdCData: '',  // 第三职业
        coreCharacter: '', // 核心人格
        coreCharacterData: '', // 核心人格 p31 表格
        coreCognition: '', //核心潜能
        coreCognitionData: '', //核心潜能 p 33 表格
        coreCommentsLen: '',// 核心人格评论条数
        cognitionCData: '', //认知潜能
        coreNormData: '', //认知潜能 表格 P20
        coreNormData1: '', //认知潜能 表格 P20
        coreNormData2: '', //认知潜能 表格 P20
        coreNormData3: '', //认知潜能 表格 P20
        coreNormData4: '', //认知潜能 表格 P20
        coreNormData5: '', //认知潜能 表格 P20
        coreNormData6: '', //认知潜能 表格 P20
        coreNormData7: '', //认知潜能 表格 P20
        coreNormData8: '', //认知潜能 表格 P20
        coreNormData9: '', //认知潜能 表格 P20
        coreNormData10: '', //认知潜能 表格 P20
        coreNormData11: '', //认知潜能 表格 P20
        coreNormData12: '', //认知潜能 表格 P20
        diyData: '', // 认知潜能-动手操作
        spaceData: '', // 认知潜能-空间
        infoData: '', // 认知潜能-信息加工
        personalData: '', // 认知潜能-人际交往
        artData: '', // 认知潜能-美术
        langData: '', // 认知潜能-语言
        organizeData: '', // 认知潜能-组织管理
        presentData: '', // 认知潜能-表象
        mathData: '', // 认知潜能-数学
        logicData: '', // 认知潜能-逻辑推理
        workData: '', // 认知潜能-工作记忆
        thinkData: '', // 认知潜能-思维转换
        abilityTexts: '', // 学习过程 文案
        abilityNorm: '', // 学习过程 数据
        attitudeTexts: '', // 学习态度 文案
        attitudeNorm: '', // 学习态度 数据
        processTexts1: '', // 学习过程 文案
        processTexts2: '', // 学习过程 文案
        processTexts3: '', // 学习过程 文案
        processTexts4: '', // 学习过程 文案
        processTexts5: '', // 学习过程 文案
        processTexts6: '', // 学习过程 文案
        processTexts7: '', // 学习过程 文案
        processTexts8: '', // 学习过程 文案
        processTexts9: '', // 学习过程 文案
        processTexts10: '', // 学习过程 文案
        processTexts11: '', // 学习过程 文案
        processTexts12: '', // 学习过程 文案
        processNorm1: '', // 学习过程 数据1
        processNorm2: '', // 学习过程 数据1
        processNorm3: '', // 学习过程 数据1
        processNorm4: '', // 学习过程 数据1
        processNorm5: '', // 学习过程 数据1
        processNorm6: '', // 学习过程 数据1
        processNorm7: '', // 学习过程 数据1
        processNorm8: '', // 学习过程 数据1
        processNorm9: '', // 学习过程 数据1
        processNorm10: '', // 学习过程 数据1
        processNorm11: '', // 学习过程 数据1
        processNorm12: '', // 学习过程 数据1
        styleNorm1: '', // 学习风格数据
        styleNorm2: '', // 学习风格数据
        styleNorm3: '', // 学习风格数据
        styleTexts1: '', // 学习风格文案 1
        styleTexts2: '', // 学习风格文案 2
        styleTexts3: '', // 学习风格文案 3
        xljkTexts1: '', // 心理健康 文案
        xljkTexts2: '', // 心理健康 文案
        xljkTexts3: '', // 心理健康 文案
        xljkTexts4: '', // 心理健康 文案
        xljkTexts5: '', // 心理健康 文案
        xljkTexts6: '', // 心理健康 文案
        xljkTexts7: '', // 心理健康 文案
        xljkNorm: '', // 心理健康 数据
        majors: '', // 推荐附录专业
        process: 0, // 下载进度
        totalPage: 0, // 总页数
        ootLen: '', // #1.2.2 length
        othLen: '', // #1.2.3 length
        oadLen: '', // 人格优势 length
        otsShow: true, // #1.2.6 是否显示
      }
    },
    mounted() {

      var _this = this;
      // 获取PDF ID
      this.reportId = this.$route.query.id;

      // 设置导航状态
      $('.u-nav a:nth-child(3)').addClass('router-link-exact-active router-link-active');

      // 设置PDF位置
      var pdfContent = $(".pdfContent");

      var iframeHeight = $(window).height() - 180;
      $('.preview-pane').css('height', iframeHeight);
      $('.report-download').css({'width': ($(window).width() - 260) + 'px'});

      this.getUserInfo(); // 获取用户基本信息
      this.getRzqnInfo(); // 获取认知潜能基本信息
      this.getRgtxInfo(); // 人格特性基本信息
      this.getXqqxInfo(); // 兴趣倾向数据
      this.getCareerInfo(); // 职业数据
      this.getStudyInfo(); // 学习过程数据
      this.getXljkInfo(); // 心理健康数据
    },
    components: {
      usercenter,
      headerEl,
      FooterEl
    },
    methods: {

      /**
       * 获取用户基本信息
       */
      getUserInfo: function () {
        this.$ajax.post("/api/common/report/detail", {report_id: this.reportId}, {emulateJSON: true}).then(
          function (res) {
            // 请求成功的结果
            // console.log(res.data);
            var data = res.data;
            if (data.code == 0) {
              this.userInfo = data.result;
              this.user = data.result.user;
              this.reportTime = this.time(this.userInfo.created_at);
              this.testTime = this.time(this.userInfo.test_time);
              this.cehuang = (data.result.cehuang != -1) ? data.result.cehuang : "--";
            } else {
              this.layerMsg(data.msg);
            }
          },
          function (res) {
            this.layerMsg('网络错误，请重新提交');
          }
        );
      },

      /**
       * 获取认知潜能基本信息
       */
      getRzqnInfo: function () {
        var _this = this;
        this.$ajax.post("/api/common/report/cognition/content", {report_id: this.reportId}, {emulateJSON: true}).then(
          function (res) {
            // 请求成功的结果
            // console.log(res.data);
            var data = res.data;
            if (data.code == 0) {
              this.cognitionCData = data.result.comment; // 1.1 & 1.2
              this.coreNormData = data.result.norm;
              console.log(this.coreNormData);
              $.each(this.coreNormData, function (index, val) {
                if (val.name == '信息加工能力') {
                  _this.coreNormData1 = val;
                }
                if (val.name == '工作记忆能力') {
                  _this.coreNormData2 = val;
                }
                if (val.name == '空间能力') {
                  _this.coreNormData3 = val;
                }
                if (val.name == '表象能力') {
                  _this.coreNormData4 = val;
                }
                if (val.name == '思维转换能力') {
                  _this.coreNormData5 = val;
                }
                if (val.name == '逻辑推理能力') {
                  _this.coreNormData6 = val;
                }
                if (val.name == '动手操作能力') {
                  _this.coreNormData7 = val;
                }
                if (val.name == '语言能力') {
                  _this.coreNormData8 = val;
                }
                if (val.name == '数学能力') {
                  _this.coreNormData9 = val;
                }
                if (val.name == '组织管理能力') {
                  _this.coreNormData10 = val;
                }
                if (val.name == '人际交往能力') {
                  _this.coreNormData11 = val;
                }
                if (val.name == '美术能力') {
                  _this.coreNormData12 = val;
                }
              });
              // console.log(_this.coreNormData);
//              console.log(_this.coreNormData10);
//              console.log(_this.coreNormData11);
//              console.log(_this.coreNormData12);
              // console.log(this.coreNormData);
              this.diyData = data.result.comment.diy;
              this.spaceData = data.result.comment.space;
              this.infoData = data.result.comment.info;
              this.personalData = data.result.comment.personal;
              this.artData = data.result.comment.art;
              this.langData = data.result.comment.lang;
              this.organizeData = data.result.comment.organize;
              this.presentData = data.result.comment.present;
              this.mathData = data.result.comment.math;
              this.logicData = data.result.comment.logic;
              this.workData = data.result.comment.work;
              this.thinkData = data.result.comment.think;
            } else {
              this.layerMsg(data.msg);
            }
          },
          function (res) {
            this.layerMsg('网络错误，请重新提交');
          }
        );
      },

      /**
       * 获取人格特性基本信息
       */
      getRgtxInfo: function () {
        this.$ajax.post("/api/common/report/personality/content", {report_id: this.reportId}, {emulateJSON: true}).then(
          function (res) {
            // 请求成功的结果
            // console.log(res.data);
            var _this = this;
            var data = res.data;
            if (data.code == 0) {
              this.personality = data.result.personality; // 1.1 & 1.2
              this.xgtxFoData1 = (data.result.personality.data.waixiang - data.result.personality.data.neixiang) * 158 / 70;
              this.xgtxFoData2 = (data.result.personality.data.shigan - data.result.personality.data.zhijue) * 158 / 70;
              this.xgtxFoData3 = (data.result.personality.data.sikao - data.result.personality.data.qinggan) * 158 / 70;
              this.xgtxFoData4 = (data.result.personality.data.panduan - data.result.personality.data.zhijueb) * 158 / 70;
              this.xgtxFtData1 = (data.result.character.wx.data.zhudong - data.result.character.wx.data.zhudong_r) * 114 / 5;
              this.xgtxFtData2 = (data.result.character.wx.data.jiantan - data.result.character.wx.data.jiantan_r) * 114 / 5;
              this.xgtxFtData3 = (data.result.character.wx.data.hequn - data.result.character.wx.data.hequn_r) * 114 / 5;
              this.xgtxFtData4 = (data.result.character.wx.data.huoyue - data.result.character.wx.data.huoyue_r) * 114 / 5;
              this.xgtxFtData5 = (data.result.character.wx.data.reqing - data.result.character.wx.data.reqing_r) * 114 / 5;

              this.xgtxFthData1 = (data.result.character.sg.data.juti - data.result.character.sg.data.juti_r) * 114 / 5;
              this.xgtxFthData2 = (data.result.character.sg.data.shishi - data.result.character.sg.data.shishi_r) * 114 / 5;
              this.xgtxFthData3 = (data.result.character.sg.data.shiji - data.result.character.sg.data.shiji_r) * 114 / 5;
              this.xgtxFthData4 = (data.result.character.sg.data.shijian - data.result.character.sg.data.shijian_r) * 114 / 5;
              this.xgtxFthData5 = (data.result.character.sg.data.chuantong - data.result.character.sg.data.chuantong_r) * 114 / 5;

              this.xgtxFfData1 = (data.result.character.sk.data.lizhi - data.result.character.sk.data.lizhi_r) * 114 / 5;
              this.xgtxFfData2 = (data.result.character.sk.data.gongzheng - data.result.character.sk.data.gongzheng_r) * 114 / 5;
              this.xgtxFfData3 = (data.result.character.sk.data.zhiyi - data.result.character.sk.data.zhiyi_r) * 114 / 5;
              this.xgtxFfData4 = (data.result.character.sk.data.piping - data.result.character.sk.data.piping_r) * 114 / 5;
              this.xgtxFfData5 = (data.result.character.sk.data.jianding - data.result.character.sk.data.jianding_r) * 114 / 5;

              this.xgtxFfiData1 = (data.result.character.pd.data.tiaoli - data.result.character.pd.data.tiaoli_r) * 114 / 5;
              this.xgtxFfiData2 = (data.result.character.pd.data.jihua - data.result.character.pd.data.jihua_r) * 114 / 5;
              this.xgtxFfiData3 = (data.result.character.pd.data.zhunbei - data.result.character.pd.data.zhunbei_r) * 114 / 5;
              this.xgtxFfiData4 = (data.result.character.pd.data.baoshou - data.result.character.pd.data.baoshou_r) * 114 / 5;
              this.xgtxFfiData5 = (data.result.character.pd.data.zhenmi - data.result.character.pd.data.zhenmi_r) * 114 / 5;

              this.xgtxSData1 = data.result.norm.zhudong;
              this.xgtxSData2 = data.result.norm.jiantan;
              this.xgtxSData3 = data.result.norm.hequn;
              this.xgtxSData4 = data.result.norm.huoyue;
              this.xgtxSData5 = data.result.norm.reqing;
              this.xgtxSData6 = data.result.norm.juti;
              this.xgtxSData7 = data.result.norm.shishi;
              this.xgtxSData8 = data.result.norm.shiji;
              this.xgtxSData9 = data.result.norm.shijian;
              this.xgtxSData10 = data.result.norm.chuantong;
              this.xgtxSData11 = data.result.norm.lizhi;
              this.xgtxSData12 = data.result.norm.gongzheng;
              this.xgtxSData13 = data.result.norm.zhiyi;
              this.xgtxSData14 = data.result.norm.piping;
              this.xgtxSData15 = data.result.norm.jianding;
              this.xgtxSData16 = data.result.norm.tiaoli;
              this.xgtxSData17 = data.result.norm.jihua;
              this.xgtxSData18 = data.result.norm.zhunbei;
              this.xgtxSData19 = data.result.norm.baoshou;
              this.xgtxSData20 = data.result.norm.zhenmi;

//              console.log(this.xgtxFoData1);
//              console.log(this.xgtxFoData2);
//              console.log(this.xgtxFoData3);
//              console.log(this.xgtxFoData4);

              this.wx = data.result.character.wx; // 1.3.1
              this.sg = data.result.character.sg; // 1.3.2
              this.sk = data.result.character.sk; // 1.3.3
              this.pd = data.result.character.pd; // 1.3.4
              this.norm = data.result.norm; // 1.3.5
              this.reliability = data.result.reliability; // 信度指数
              this.personalityDesc = this.personality.desc.substring(5);
              this.personalityName = this.personality.name.split('');

              var len1 = data.result.personality.basic_desc.length;
              var len2 = data.result.personality.temper[2].detail.length;

              if (len1 > 3 || len2 > 80) {
                this.ootLen = 2;
              } else {
                this.ootLen = 3;
              }
              this.oadLen = data.result.personality.advantage.length;
              setTimeout(function () {
                var ootHeight = $('#ootContent').height();
                _this.othLen = (1100 - ootHeight - 150) / 40;
                _this.othLen = Math.floor(_this.othLen);

                // console.log('----------')
                // console.log(_this.othLen);

                var otFHeight = $('#otfContent').height();
                var otFiHeight = $('#otfiContent').height();
                var othHeight = $('#othContent').height();

                if (1100 - otFHeight - otFiHeight - 180 - othHeight > 210) {
                  _this.otsShow = true;
                } else {
                  _this.otsShow = false;
                }

                console.log(1100 - otFiHeight - otFHeight - othHeight - 180);

                console.log(_this.otsShow);

              }, 2000)
              // console.log(this.personalityName);
            } else {
              this.layerMsg(data.msg);
            }
          },
          function (res) {
            this.layerMsg('网络错误，请重新提交');
          }
        );
      },

      /**
       * 获取兴趣倾向基本信息
       */
      getXqqxInfo: function () {
        var tagNames = [], scores = [];
        this.$ajax.post("/api/common/report/interest/content", {report_id: this.reportId}, {emulateJSON: true}).then(
          function (res) {
            // 请求成功的结果
            // console.log(res.data);
            var data = res.data;
            if (data.code == 0) {
              this.xqqxData = data.result; // 兴趣倾向数据
              this.xqqxTableData1 = data.result.norm.changgui; // p25 表格
              this.xqqxTableData2 = data.result.norm.shiji; // p25 表格
              this.xqqxTableData3 = data.result.norm.diaoyan; // p25 表格
              this.xqqxTableData4 = data.result.norm.yishu; // p25 表格
              this.xqqxTableData5 = data.result.norm.shehui; // p25 表格
              this.xqqxTableData6 = data.result.norm.qiye; // p25 表格
              scores.push(data.result.data.shehui);
              scores.push(data.result.data.qiye);
              scores.push(data.result.data.changgui);
              scores.push(data.result.data.shiji);
              scores.push(data.result.data.diaoyan);
              scores.push(data.result.data.yishu);
              tagNames = [
                {
                  name: 'S社会',
                  max: 100
                },
                {
                  name: 'E企业',
                  max: 100
                },
                {
                  name: 'C常规',
                  max: 100
                },
                {
                  name: 'R实际',
                  max: 100
                },
                {
                  name: 'I调研',
                  max: 100
                },
                {
                  name: 'A艺术',
                  max: 100
                },
              ];
              // console.log(scores);
              // console.log(tagNames);
              this.radarChartInit(scores, tagNames);

            } else {
              this.layerMsg(data.msg);
            }
          },
          function (res) {
            this.layerMsg('网络错误，请重新提交');
          }
        );
      },

      /**
       * 雷达图 init
       * @param scores (各类型打分/总评分)*100 取整数
       * @param tagNames 标签类型
       */
      radarChartInit: function (scores, tagNames) {
        // 基于准备好的dom，初始化echarts实例
        var lineChart = echarts.init(document.getElementById('radarChart'));
        // 绘制图表
        lineChart.setOption({
          tooltip: {},
          legend: {
            data: ['兴趣倾向评估']
          },
          toolbox: {
            feature: {}
          },
          radar: {
            name: {
              color: '#000',
              fontSize: 15,
              textStyle: {
                color: '#000',
                backgroundColor: '#999',
                borderRadius: 3,
                padding: [3, 5]
              }
            },
            indicator: tagNames
          },
          calculable: true,
          series: [{
            name: '',
            type: 'radar',
            data: [
              {
                value: scores,
                name: '兴趣倾向评估结果'
              },
            ]
          }]
        });
        lineChart.resize();
      },

      /**
       * 获取职业基本信息
       */
      getCareerInfo: function () {
        var _this = this;
        this.$ajax.post("/api/common/report/career/content", {report_id: this.reportId}, {emulateJSON: true}).then(
          function (res) {
            // 请求成功的结果
            // console.log(res.data);
            var data = res.data;
            if (data.code == 0) {
              this.bestCData = data.result.ctype.best; // 最佳职业数据
              this.secondCData = data.result.ctype.second; // 第二职业数据
              this.thirdCData = data.result.ctype.third; // 第三职业数据
              this.coreCharacter = data.result.ctype.best.core_character; // 核心人格
              this.coreCharacterData = data.result.ctype.best.core_character.norm; // 核心人格 p31 表格
              this.coreCognition = data.result.ctype.best.core_cognition; // 核心潜能
              this.coreCognitionData = data.result.ctype.best.core_cognition.norm; // 核心潜能 p 33 表格
              this.coreCommentsLen = data.result.ctype.best.core_cognition.comments.length; //核心潜能评论条数
              this.careerTableData = data.result.scores;// p29 表格
              this.majors = data.result.majors; // 推荐附录专业
              // console.log(this.coreCognitionData);
              // 设置头部页码
              setTimeout(function () {
                // console.log($('.pdf-page-seq').length);
                $('.pdf-page-seq').each(function (i, val) {
                  // console.log(i);
                  var seq = i + 1;
                  if (seq < 10) {
                    seq = '0' + seq;
                  }
                  $(this).text(seq);
                });

                $('.page-menu-seq').each(function (i, val) {
                  var cid = $(this).attr('cid');
                  var seq = $('#' + cid).closest('.pdf-page').index();
                  if (seq < 10) {
                    seq = '0' + seq;
                  }
                  $(this).text(seq);
                })

                _this.totalPage = $('.pdf-page-seq').length;

                // 获取pdf页数
                _this.pageLen = $('.pdf-page').length;


              }, 2000)

            } else {
              this.layerMsg(data.msg);
            }
          },
          function (res) {
            this.layerMsg('网络错误，请重新提交');
          }
        );
      },

      /**
       * 获取学习过程基本信息
       */
      getStudyInfo: function () {
        this.$ajax.post("/api/common/report/learning/content", {report_id: this.reportId}, {emulateJSON: true}).then(
          function (res) {
            // 请求成功的结果
            // console.log(res.data);
            var data = res.data;
            if (data.code == 0) {
              this.abilityTexts = data.result.ability.comment; // 学习过程 文案
              this.abilityNorm = data.result.ability.norm; // 学习过程 数据
              this.attitudeTexts = data.result.attitude.comment; // 学习态度 文案
              this.attitudeNorm = data.result.attitude.norm; // 学习态度 数据
              this.processTexts1 = data.result.process.comment.jianding; // 学习态度 文案
              this.processTexts2 = data.result.process.comment.jihua; // 学习态度 文案
              this.processTexts3 = data.result.process.comment.zhunbei; // 学习态度 文案
              this.processTexts4 = data.result.process.comment.huoyue_r; // 学习态度 文案
              this.processTexts5 = data.result.process.comment.tiaoli; // 学习态度 文案
              this.processTexts6 = data.result.process.comment.zhenmi; // 学习态度 文案
              this.processTexts7 = data.result.process.comment.reqing_r; // 学习态度 文案
              this.processTexts8 = data.result.process.comment.piping; // 学习态度 文案
              this.processTexts9 = data.result.process.comment.jihua_r; // 学习态度 文案
              this.processTexts10 = data.result.process.comment.zhudong; // 学习态度 文案
              this.processTexts11 = data.result.process.comment.chuantong_r; // 学习态度 文案
              this.processTexts12 = data.result.process.comment.baoshou_r; // 学习态度 文案
              this.processNorm1 = data.result.process.norm.jianding; // 学习态度 数据
              this.processNorm2 = data.result.process.norm.jihua; // 学习态度 数据
              this.processNorm3 = data.result.process.norm.zhunbei; // 学习态度 数据
              this.processNorm4 = data.result.process.norm.huoyue_r; // 学习态度 数据
              this.processNorm5 = data.result.process.norm.tiaoli; // 学习态度 数据
              this.processNorm6 = data.result.process.norm.zhenmi; // 学习态度 数据
              this.processNorm7 = data.result.process.norm.reqing_r; // 学习态度 数据
              this.processNorm8 = data.result.process.norm.piping; // 学习态度 数据
              this.processNorm9 = data.result.process.norm.jihua_r; // 学习态度 数据
              this.processNorm10 = data.result.process.norm.zhudong; // 学习态度 数据
              this.processNorm11 = data.result.process.norm.chuantong_r; // 学习态度 数据
              this.processNorm12 = data.result.process.norm.baoshou_r; // 学习态度 数据
              this.styleTexts1 = data.result.style.comment.chuangxin; // 学习态度 文本 1
              this.styleTexts2 = data.result.style.comment.duli; // 学习态度 文本 2
              this.styleTexts3 = data.result.style.comment.chensi; // 学习态度 文本 3
              this.styleNorm1 = data.result.style.norm.chuangxin; // 学习态度 数据 3
              this.styleNorm2 = data.result.style.norm.duli; // 学习态度 数据 3
              this.styleNorm3 = data.result.style.norm.chensi; // 学习态度 数据 3
              console.log(this.processNorm1);
              console.log(this.processNorm2);
              console.log(this.processNorm3);
              console.log(this.processNorm4);
              console.log(this.processNorm5);
              console.log(this.processNorm6);
              console.log(this.processNorm7);
              console.log(this.processNorm8);
              console.log(this.processNorm9);
              console.log(this.processNorm10);
              console.log(this.processNorm11);
              console.log(this.processNorm12);
            } else {
              this.layerMsg(data.msg);
            }
          },
          function (res) {
            this.layerMsg('网络错误，请重新提交');
          }
        );
      },

      /**
       * 获取心理健康基本信息
       */
      getXljkInfo: function () {
        this.$ajax.post("/api/common/report/mind/content", {report_id: this.reportId}, {emulateJSON: true}).then(
          function (res) {
            // 请求成功的结果
            // console.log(res.data);
            var data = res.data;
            if (data.code == 0) {
              this.xljkTexts1 = data.result.comment.qiangpo; // 学习过程 文案
              this.xljkTexts2 = data.result.comment.mingan; // 学习过程 文案
              this.xljkTexts3 = data.result.comment.yiyu; // 学习过程 文案
              this.xljkTexts4 = data.result.comment.jiaolv; // 学习过程 文案
              this.xljkTexts5 = data.result.comment.didui; // 学习过程 文案
              this.xljkTexts6 = data.result.comment.pizhi; // 学习过程 文案
              this.xljkTexts7 = data.result.comment.jingshen; // 学习过程 文案
              this.xljkNorm = data.result.norm; // 学习过程 数据

              console.log(this.xljkNorm);
            } else {
              this.layerMsg(data.msg);
            }
          },
          function (res) {
            this.layerMsg('网络错误，请重新提交');
          }
        );
      },

      /**
       * 生成pdf
       */
      pdfInit: function () {
        var doc = new jsPDF();

        doc.setFontSize(13);
        doc.text(20, 20, 'EVALUATION REPORT OF HIGH SCHOOL STUDENTS` ENTRANCE PLANNING');

        // Output as Data URI

        var string = doc.output('datauristring');
        $('.preview-pane').attr('src', string);
      },

      /**
       * 获取canvas图片
       */
      getCanvasImg: function (seq) {
        var _this = this;
        _this.downloadTip = 1;
        console.log(seq);
        var pdfContent = $(".pdf-page").eq(seq);
        var scrollTop = $(window).scrollTop();
        var topWidth = pdfContent.offset().top - scrollTop;
        var leftWidth = 298 + ($(window).width() - 1200) / 2;
        var width = pdfContent.width();
        var height = pdfContent.height();
        var scaleBy = 2;  //缩放比例
        // safari 浏览器
//        if (navigator.userAgent.indexOf('Safari') > -1 && navigator.userAgent.indexOf('Chrome') < 0) {
//          scaleBy = 2;
//        } else {
//          scaleBy = 2;
//        }
        var canvas = document.createElement('canvas');
        canvas.width = width * scaleBy;
        canvas.height = height * scaleBy;
        canvas.style.width = width * scaleBy + 'px';
        canvas.style.height = height * scaleBy + 'px';
        var context = canvas.getContext('2d');
        context.scale(scaleBy, scaleBy);
        context.translate(-leftWidth, -topWidth);

        html2canvas(pdfContent, {
          canvas: canvas,
          onrendered: function (canvas) {
            var contentWidth = canvas.width;
            var contentHeight = canvas.height;

            var imgWidth = 595.28;
            var imgHeight = 595.28 / contentWidth * contentHeight;
            // console.log(canvas.toDataURL('image/jpeg',1.0));
            _this.canvasImg = canvas.toDataURL('image/jpeg', 1.0);
            //_this.canvasImg = canvas.toDataURL();
            //console.log(canvas.toDataURL());
            /// console.log(_this.canvasImg);
            // var img = Canvas2Image.convertToImage(canvas, imgWidth, imgHeight);
            // console.log(_this.canvasImg);

            setInterval(function () {

              //console.log('step111')
              if (_this.canvasImg !== '') {

                // 强制清除定时器
                for (var m = 0; m < 1000; m++) {
                  clearInterval(m);
                }

                // 继续获取canvas图片
                if (_this.canvasImgSeq < _this.pageLen - 1) {
                  _this.canvasImgArr.push(_this.canvasImg);
                  _this.canvasImg = '';
                  _this.process = ((_this.canvasImgSeq / _this.totalPage) * 100).toFixed(0);
                  _this.canvasImgSeq++;
                  //console.log('step2');
                  _this.getCanvasImg(_this.canvasImgSeq);
                  // console.log(_this.canvasImgArr)
                } else if (_this.canvasImgSeq == _this.pageLen - 1) {
                  // 下载pdf
                  _this.canvasImgArr.push(_this.canvasImg);
                  _this.canvasImg = '';
                  _this.pdfDownload();
                }

              }
            }, 10);
          },
          useCORS: true
        })

      },

      /**
       * 下载pdf
       */
      pdfDownload: function () {
        console.log('download');
        var pdf = new jsPDF('', 'pt', 'a4'), _this = this;
        // console.log(_this.canvasImgArr);
        $.each(_this.canvasImgArr, function (i, val) {
          if (i == 0) {
            pdf.addImage(val, 'JPEG', 0, 0, 595.28, 595.28 * 1285 / 900);
          } else {
            pdf.addPage();
            pdf.addImage(val, 'JPEG', 0, 0, 595.28, 595.28 * 1285 / 900);
          }
        })
        _this.downloadTip = 0;
        var content = _this.user.realname + '-职业生涯报告-' + _this.getNowFormatDate();
        pdf.save(content + ".pdf");
      },

      //获取当前时间，格式YYYY-MM-DD
      getNowFormatDate: function () {
        var date = new Date();
        var seperator1 = "-";
        var year = date.getFullYear();
        var month = date.getMonth() + 1;
        var strDate = date.getDate();
        if (month >= 1 && month <= 9) {
          month = "0" + month;
        }
        if (strDate >= 0 && strDate <= 9) {
          strDate = "0" + strDate;
        }
        var currentdate = year + month + strDate;
        return currentdate;
      },

      pdfDownload2: function () {
        var _this = this, pdf;
        pdf = new jsPDF('', 'pt', 'a4');
        for (var i = 0; i < pageLen; i++) {
          var pdfContent = $(".pdf-page").eq(i);
          var scrollTop = $(window).scrollTop();
          var topWidth = pdfContent.offset().top - scrollTop;
          var leftWidth = $('.u-nav').width() + ($(window).width() - $('.u-nav').width() - pdfContent.width()) / 2;
          var width = pdfContent.width();
          var height = pdfContent.height();
          var scaleBy = 4;  //缩放比例
          var canvas = document.createElement('canvas');
          canvas.width = width * scaleBy;
          canvas.height = height * scaleBy;
          canvas.style.width = width * scaleBy + 'px';
          canvas.style.height = height * scaleBy + 'px';
          var context = canvas.getContext('2d');
          context.scale(scaleBy, scaleBy);
          context.translate(-leftWidth, -topWidth);

          html2canvas(pdfContent, {
            canvas: canvas,
            onrendered: function (canvas) {
              var contentWidth = canvas.width;
              var contentHeight = canvas.height;

              //一页pdf显示html页面生成的canvas高度;
              var pageHeight = contentWidth / 595.28 * 841.89;
              //未生成pdf的html页面高度
              var leftHeight = contentHeight;
              //页面偏移
              var position = 0;
              //a4纸的尺寸[595.28,841.89]，html页面生成的canvas在pdf中图片的宽高
              var imgWidth = 595.28;
              var imgHeight = 595.28 / contentWidth * contentHeight;

              var pageData = canvas.toDataURL('image/jpeg', 1.0);
              var img = Canvas2Image.convertToImage(canvas, imgWidth, imgHeight);
              // console.log(img);
              _this.canvasImgArr.push(pageData);

            }
          })
        }

        _this.pdfTimer = setInterval(function () {
          if (_this.imgArr.length == pageLen) {
            clearInterval(_this.pdfTimer);
            $.each(_this.canvasImgArr, function (i, val) {
              if (i == 0) {
                pdf.addImage(val, 'JPEG', 0, 0, 595.28, 595.28 * 1285 / 900);
              } else {
                pdf.addPage();
                pdf.addImage(val, 'JPEG', 0, 0, 595.28, 595.28 * 1285 / 900);
              }
            })


            pdf.save("content.pdf");
          }
        }, 1000)


//        html2canvas(pdfContent[0], {
//          canvas: canvas,
//          onrendered: function (canvas) {
//            var contentWidth = canvas.width;
//            var contentHeight = canvas.height;
//
//            //一页pdf显示html页面生成的canvas高度;
//            var pageHeight = contentWidth / 592.28 * 841.89;
//            //未生成pdf的html页面高度
//            var leftHeight = contentHeight;
//            //页面偏移
//            var position = 0;
//            //a4纸的尺寸[595.28,841.89]，html页面生成的canvas在pdf中图片的宽高
//            var imgWidth = 595.28;
//            var imgHeight = 592.28 / contentWidth * contentHeight;
//
//            var pageData = canvas.toDataURL('image/jpeg', 1.0);
//            console.log(pageData);
//            var pdf = new jsPDF('', 'pt', 'a4');
//
//            //有两个高度需要区分，一个是html页面的实际高度，和生成pdf的页面高度(841.89)
//            //当内容未超过pdf一页显示的范围，无需分页
//            if (leftHeight < pageHeight) {
//              pdf.addImage(pageData, 'JPEG', 0, 0, imgWidth, imgHeight);
//            } else {
//              while (leftHeight > 0) {
//                pdf.addImage(pageData, 'JPEG', 0, position, imgWidth, imgHeight)
//                leftHeight -= pageHeight;
//                position -= 841.89;
//                //避免添加空白页
//                if (leftHeight > 0) {
//                  pdf.addPage();
//                }
//              }
//            }
//
//            pdf.save("content.pdf");
//          }
//        })
      },

    },
  }

</script>

<style>
  body {
    background: #fff !important;
  }

  .report-download {
    position: fixed;
    top: 90px;
    left: 260px;
    z-index: 999
  }

  .pdf-download-tip {
    position: fixed;
    z-index: 10000;
    font-size: 20px;
    color: #fff;
    width: 100%;
    top: 200px;
    text-align: center;
  }
</style>

