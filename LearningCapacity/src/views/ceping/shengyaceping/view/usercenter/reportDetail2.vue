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
            <div class="pdfContent">

              <!--page 1-->
              <div class="pdf-page">
                <div class="pdf-header border-no"></div>
                <div class=" pdf-content">
                  <div class="pdf-title pdf-title-2">
                    EVALUATION REPORT OF HIGH SCHOOL STUDENTS` ENTRANCE PLANNING
                  </div>
                  <img class="page-one-title" src="../../assets/pdf/title2.png" alt="">
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
                    随着国家新高考改革方案的发布，取消文理分科考生将采取3+3模式，所有考生除语文、数学、外语三门必考学科外，从物理、化学、生物、历史、地理、政治6门学科中选取3门参加高考，每个学生将有20种不同的选科方式。面对新的选科模式，高中生如何做出科学的选择，是本系统要解决的问题。
                  </div>

                  <div class="font-medium pdf-paragraph">
                    高中生升学规划测评系统学科选择测评，是综合评估高中生学科选择的有效工具。测试的要素主要包含学习能力、学科兴趣，结合学科成绩，通过专业的题目设计、严谨的解释分析，为学生在高中阶段的学科选择提供参考信息。高中阶段正确的学科选择，将为学生今后高考后的专业选择和未来的职业发展奠定良好的基础。
                  </div>

                  <div class="page-2-user page-2-user-2">
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
                        <p>第一部分 学习能力评估</p>
                        <span>..........................................................................................................<small>03</small></span>
                      </li>
                      <li class="title2">
                        <p>1.1学习能力评估结果</p>
                        <span>..............................................................................................................<small>04</small></span>
                      </li>
                      <li class="title2">
                        <p>1.2学科对应核心学习能力分析</p>
                        <span>.................................................................................................
                    <small class="page-menu-seq" cid="12">04</small></span>
                      </li>

                      <li class="title2">
                        <p>1.3学习能力与学科匹配度评估结果</p>
                        <span>........................................................................................
                    <small class="page-menu-seq" cid="13">04</small></span>
                      </li>

                      <li class="title1">
                        <p>第二部分 学科兴趣评估</p>
                        <span>.........................................................................................................<small
                          class="page-menu-seq" cid="21">04</small></span>
                      </li>
                      <li class="title2">
                        <p>2.1学科兴趣评估结果</p>
                        <span>................................................................................................................<small
                          class="page-menu-seq" cid="21">02</small></span>
                      </li>
                      <li class="title1">
                        <p>第三部分 学科成绩评估</p>
                        <span>.........................................................................................................<small
                          class="page-menu-seq" cid="31">04</small></span>
                      </li>
                      <li class="title2">
                        <p>3.1学科成绩评估结果</p>
                        <span>................................................................................................................<small
                          class="page-menu-seq" cid="31">02</small></span>
                      </li>

                      <li class="title1">
                        <p>第四部分 学科选择综合评估</p>
                        <span>.................................................................................................<small
                          class="page-menu-seq" cid="41">04</small></span>
                      </li>
                      <li class="title2">
                        <p>4.1学科选择评估结果</p>
                        <span>...............................................................................................................<small
                          class="page-menu-seq" cid="41">02</small></span>
                      </li>
                      <li class="title2">
                        <p>4.2最佳学科选择推荐</p>
                        <span>...............................................................................................................<small
                          class="page-menu-seq" cid="42">02</small></span>
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
                  <div class="font-blue pdf-page-title"><span>第一部分 学习能力评估</span></div>
                  <div class="pdf-border-paragraph m-b20">
                    <p>
                      心理学者认为，能力是与活动联系起来的，是符合活动要求影响活动效果的个性心理特征的综合。学习能力测评是通过一系列科学编排的测试内容，用心理测量的方法对与学习相关的八种学习能力（包括：信息加工能力、工作记忆能力、空间能力、表象能力、思维转换能力、逻辑推理能力、语言能力、数学能力）进行测试，通过与同类型群体平均能力水平对比来评估个体的学习能力。
                    </p>
                    <p>
                      对于个体而言，每个人在八项学习能力中都有高有低；对与学科而言，每个学科所需的学习能力都各有差别；通过学习能力测评，可以分析出测评者学习各个科目的适合程度。
                    </p>
                    <p>
                      下面内容将对个体学习能力进行分析，各个学科所需核心学习能力进行解释，并根据测试者的学习能力测评结果，给出学习能力与学习科目的匹配度。
                    </p>
                  </div>

                  <div class="table-container page-5-biao page-18-biao"
                       style="width:100%; float:left;margin-top:140px; margin-bottom: 30px">
                    <img src="../../assets/pdf/page-18-img-x.png" alt="">
                    <div class="table-title">学习能力测试内容示意图</div>
                    <div class="biao-content">
                    </div>
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

                  <div class="pdf-blue-title">
                    <img src="../../assets/pdf/title-trn.png" alt="">1.1学习能力评估结果
                  </div>

                  <div class="pdf-border-paragraph m-b20" style="margin-bottom:40px">
                    <p>
                      在下表中学习能力水平值是测试个体在各项学习能力中的水平大小；常模范围是群体中大多数人在该项学习能力上的水平范围；出众百分数是与同类型群体相比在该项学习能力上的优势程度。
                    </p>
                  </div>

                  <div class="table-container">
                    <div class="table-title">学习能力指标评估详细结果</div>
                    <table>
                      <thead>
                      <tr>
                        <th width>学习能力</th>
                        <th>学习能力水平值</th>
                        <th>常模范围</th>
                        <th>出众百分比</th>
                        <th width="70">非常低</th>
                        <th width="70">比较低</th>
                        <th width="70">一般</th>
                        <th width="70">比较高</th>
                        <th width="70">非常高</th>
                      </tr>
                      </thead>
                      <tbody>
                      <tr v-for="data in abilityNorm">
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


                </div>
                <div class="font-blue pdf-footer">
                  <p class="pull-left">测评网址：www.ymtest.com</p>
                  <p class="pull-right">测评方法、工具及报告设计已申请产权保护</p>
                </div>
              </div>
              <!--page 5-->

              <!--page 6 语文-->
              <div class="pdf-page">
                <div class="pdf-header">
                  <img class="pull-left" src="../../assets/pdf/header-logo.png" height="39px">
                  <p class="pull-right pdf-page-seq"></p>
                  <p class="pull-right font-blue">高中生升学规划测评报告</p>
                </div>
                <div class=" pdf-content">

                  <div class="pdf-blue-title" id="12">
                    <img src="../../assets/pdf/title-trn.png" alt="">1.2学科对应核心学习能力分析
                  </div>

                  <div class="pdf-blue-title pdf-yellow-title">
                    <img src="../../assets/pdf/title-trn.png" alt="">{{abilityText1.name}}
                  </div>

                  <div class="pdf-border-paragraph pbp-height-medium m-b15"
                       v-for="(data,index) in abilityText1.cognitions"
                       v-if="index<4">
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
              <!--page 6 语文-->

              <!--page 6 语文 补充-->
              <div class="pdf-page" v-if="abilityText1Len>4">
                <div class="pdf-header">
                  <img class="pull-left" src="../../assets/pdf/header-logo.png" height="39px">
                  <p class="pull-right pdf-page-seq"></p>
                  <p class="pull-right font-blue">高中生升学规划测评报告</p>
                </div>
                <div class=" pdf-content">

                  <div class="pdf-border-paragraph pbp-height-medium m-b15"
                       v-for="(data,index) in abilityText1.cognitions"
                       v-if="index>3">
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
              <!--page 6 语文 补充-->

              <!--page 7 数学-->
              <div class="pdf-page">
                <div class="pdf-header">
                  <img class="pull-left" src="../../assets/pdf/header-logo.png" height="39px">
                  <p class="pull-right pdf-page-seq"></p>
                  <p class="pull-right font-blue">高中生升学规划测评报告</p>
                </div>
                <div class="pdf-content">

                  <div class="pdf-blue-title pdf-yellow-title">
                    <img src="../../assets/pdf/title-trn.png" alt="">{{abilityText2.name}}
                  </div>

                  <div class="pdf-border-paragraph pbp-height-medium m-b15"
                       v-for="(data,index) in abilityText2.cognitions"
                       v-if="index<4">
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
              <!--page 7 数学-->

              <!--page 7 数学 补充-->
              <div class="pdf-page" v-if="abilityText2Len>4">
                <div class="pdf-header">
                  <img class="pull-left" src="../../assets/pdf/header-logo.png" height="39px">
                  <p class="pull-right pdf-page-seq"></p>
                  <p class="pull-right font-blue">高中生升学规划测评报告</p>
                </div>
                <div class=" pdf-content">

                  <div class="pdf-border-paragraph pbp-height-medium m-b15"
                       v-for="(data,index) in abilityText2.cognitions"
                       v-if="index>3">
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
              <!--page 7 数学 补充-->

              <!--page 8 英语-->
              <div class="pdf-page">
                <div class="pdf-header">
                  <img class="pull-left" src="../../assets/pdf/header-logo.png" height="39px">
                  <p class="pull-right pdf-page-seq"></p>
                  <p class="pull-right font-blue">高中生升学规划测评报告</p>
                </div>
                <div class="pdf-content">

                  <div class="pdf-blue-title pdf-yellow-title">
                    <img src="../../assets/pdf/title-trn.png" alt="">{{abilityText3.name}}
                  </div>

                  <div class="pdf-border-paragraph pbp-height-medium m-b15"
                       v-for="(data,index) in abilityText3.cognitions"
                       v-if="index<4">
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
              <!--page 8 英语-->

              <!--page 8 英语 补充-->
              <div class="pdf-page" v-if="abilityText3Len>4">
                <div class="pdf-header">
                  <img class="pull-left" src="../../assets/pdf/header-logo.png" height="39px">
                  <p class="pull-right pdf-page-seq"></p>
                  <p class="pull-right font-blue">高中生升学规划测评报告</p>
                </div>
                <div class=" pdf-content">

                  <div class="pdf-border-paragraph pbp-height-medium m-b15"
                       v-for="(data,index) in abilityText3.cognitions"
                       v-if="index>3">
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
              <!--page 8 英语 补充-->

              <!--page 9 物理-->
              <div class="pdf-page">
                <div class="pdf-header">
                  <img class="pull-left" src="../../assets/pdf/header-logo.png" height="39px">
                  <p class="pull-right pdf-page-seq"></p>
                  <p class="pull-right font-blue">高中生升学规划测评报告</p>
                </div>
                <div class="pdf-content">

                  <div class="pdf-blue-title pdf-yellow-title">
                    <img src="../../assets/pdf/title-trn.png" alt="">{{abilityText4.name}}
                  </div>

                  <div class="pdf-border-paragraph pbp-height-medium m-b15"
                       v-for="(data,index) in abilityText4.cognitions"
                       v-if="index<4">
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
              <!--page 9 物理-->

              <!--page 9 物理 补充-->
              <div class="pdf-page" v-if="abilityText4Len>4">
                <div class="pdf-header">
                  <img class="pull-left" src="../../assets/pdf/header-logo.png" height="39px">
                  <p class="pull-right pdf-page-seq"></p>
                  <p class="pull-right font-blue">高中生升学规划测评报告</p>
                </div>
                <div class=" pdf-content">

                  <div class="pdf-border-paragraph pbp-height-medium m-b15"
                       v-for="(data,index) in abilityText4.cognitions"
                       v-if="index>3">
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
              <!--page 9 物理 补充-->

              <!--page 10 化学-->
              <div class="pdf-page">
                <div class="pdf-header">
                  <img class="pull-left" src="../../assets/pdf/header-logo.png" height="39px">
                  <p class="pull-right pdf-page-seq"></p>
                  <p class="pull-right font-blue">高中生升学规划测评报告</p>
                </div>
                <div class="pdf-content">

                  <div class="pdf-blue-title pdf-yellow-title">
                    <img src="../../assets/pdf/title-trn.png" alt="">{{abilityText5.name}}
                  </div>

                  <div class="pdf-border-paragraph pbp-height-medium m-b15"
                       v-for="(data,index) in abilityText5.cognitions"
                       v-if="index<4">
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
              <!--page 10 化学-->

              <!--page 10 化学 补充-->
              <div class="pdf-page" v-if="abilityText5Len>4">
                <div class="pdf-header">
                  <img class="pull-left" src="../../assets/pdf/header-logo.png" height="39px">
                  <p class="pull-right pdf-page-seq"></p>
                  <p class="pull-right font-blue">高中生升学规划测评报告</p>
                </div>
                <div class=" pdf-content">

                  <div class="pdf-border-paragraph pbp-height-medium m-b15"
                       v-for="(data,index) in abilityText5.cognitions"
                       v-if="index>3">
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
              <!--page 10 化学 补充-->

              <!--page 11 生物-->
              <div class="pdf-page">
                <div class="pdf-header">
                  <img class="pull-left" src="../../assets/pdf/header-logo.png" height="39px">
                  <p class="pull-right pdf-page-seq"></p>
                  <p class="pull-right font-blue">高中生升学规划测评报告</p>
                </div>
                <div class="pdf-content">

                  <div class="pdf-blue-title pdf-yellow-title">
                    <img src="../../assets/pdf/title-trn.png" alt="">{{abilityText6.name}}
                  </div>

                  <div class="pdf-border-paragraph pbp-height-medium m-b15"
                       v-for="(data,index) in abilityText6.cognitions"
                       v-if="index<4">
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
              <!--page 11 生物-->

              <!--page 11 生物 补充-->
              <div class="pdf-page" v-if="abilityText6Len>4">
                <div class="pdf-header">
                  <img class="pull-left" src="../../assets/pdf/header-logo.png" height="39px">
                  <p class="pull-right pdf-page-seq"></p>
                  <p class="pull-right font-blue">高中生升学规划测评报告</p>
                </div>
                <div class=" pdf-content">

                  <div class="pdf-border-paragraph pbp-height-medium m-b15"
                       v-for="(data,index) in abilityText6.cognitions"
                       v-if="index>3">
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
              <!--page 11 生物 补充-->

              <!--page 12 政治-->
              <div class="pdf-page">
                <div class="pdf-header">
                  <img class="pull-left" src="../../assets/pdf/header-logo.png" height="39px">
                  <p class="pull-right pdf-page-seq"></p>
                  <p class="pull-right font-blue">高中生升学规划测评报告</p>
                </div>
                <div class="pdf-content">

                  <div class="pdf-blue-title pdf-yellow-title">
                    <img src="../../assets/pdf/title-trn.png" alt="">{{abilityText8.name}}
                  </div>

                  <div class="pdf-border-paragraph pbp-height-medium m-b15"
                       v-for="(data,index) in abilityText8.cognitions"
                       v-if="index<4">
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
              <!--page 12 政治-->

              <!--page 12 政治 补充-->
              <div class="pdf-page" v-if="abilityText8Len>4">
                <div class="pdf-header">
                  <img class="pull-left" src="../../assets/pdf/header-logo.png" height="39px">
                  <p class="pull-right pdf-page-seq"></p>
                  <p class="pull-right font-blue">高中生升学规划测评报告</p>
                </div>
                <div class=" pdf-content">

                  <div class="pdf-border-paragraph pbp-height-medium m-b15"
                       v-for="(data,index) in abilityText8.cognitions"
                       v-if="index>3">
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
              <!--page 12 政治 补充-->

              <!--page 13 历史-->
              <div class="pdf-page">
                <div class="pdf-header">
                  <img class="pull-left" src="../../assets/pdf/header-logo.png" height="39px">
                  <p class="pull-right pdf-page-seq"></p>
                  <p class="pull-right font-blue">高中生升学规划测评报告</p>
                </div>
                <div class="pdf-content">

                  <div class="pdf-blue-title pdf-yellow-title">
                    <img src="../../assets/pdf/title-trn.png" alt="">{{abilityText7.name}}
                  </div>

                  <div class="pdf-border-paragraph pbp-height-medium m-b15"
                       v-for="(data,index) in abilityText7.cognitions"
                       v-if="index<4">
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
              <!--page 13 历史-->

              <!--page 13 历史 补充-->
              <div class="pdf-page" v-if="abilityText7Len>4">
                <div class="pdf-header">
                  <img class="pull-left" src="../../assets/pdf/header-logo.png" height="39px">
                  <p class="pull-right pdf-page-seq"></p>
                  <p class="pull-right font-blue">高中生升学规划测评报告</p>
                </div>
                <div class=" pdf-content">

                  <div class="pdf-border-paragraph pbp-height-medium m-b15"
                       v-for="(data,index) in abilityText7.cognitions"
                       v-if="index>3">
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
              <!--page 13 历史 补充-->

              <!--page 14 地理-->
              <div class="pdf-page">
                <div class="pdf-header">
                  <img class="pull-left" src="../../assets/pdf/header-logo.png" height="39px">
                  <p class="pull-right pdf-page-seq"></p>
                  <p class="pull-right font-blue">高中生升学规划测评报告</p>
                </div>
                <div class="pdf-content">

                  <div class="pdf-blue-title pdf-yellow-title">
                    <img src="../../assets/pdf/title-trn.png" alt="">{{abilityText9.name}}
                  </div>

                  <div class="pdf-border-paragraph pbp-height-medium m-b15"
                       v-for="(data,index) in abilityText9.cognitions"
                       v-if="index<4">
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
              <!--page 14 地理-->

              <!--page 14 地理 补充-->
              <div class="pdf-page" v-if="abilityText9Len>4">
                <div class="pdf-header">
                  <img class="pull-left" src="../../assets/pdf/header-logo.png" height="39px">
                  <p class="pull-right pdf-page-seq"></p>
                  <p class="pull-right font-blue">高中生升学规划测评报告</p>
                </div>
                <div class=" pdf-content">

                  <div class="pdf-border-paragraph pbp-height-medium m-b15"
                       v-for="(data,index) in abilityText9.cognitions"
                       v-if="index>3">
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
              <!--page 14 地理 补充-->

              <!--page 15-->
              <div class="pdf-page">
                <div class="pdf-header">
                  <img class="pull-left" src="../../assets/pdf/header-logo.png" height="39px">
                  <p class="pull-right pdf-page-seq"></p>
                  <p class="pull-right font-blue">高中生升学规划测评报告</p>
                </div>
                <div class=" pdf-content">

                  <div class="pdf-blue-title" id="13">
                    <img src="../../assets/pdf/title-trn.png" alt="">1.3学习能力与学科匹配度评估结果
                  </div>

                  <div class="pdf-border-paragraph m-b20" style="margin-bottom:40px">
                    <p>
                      根据你的学习能力测评结果，结合各个学科的核心能力水平，下表将呈现你的学习能力与学科的匹配程度。
                    </p>
                  </div>

                  <div class="table-container">
                    <div class="table-title">学习能力与学科匹配度分析结果</div>
                    <table>
                      <thead>
                      <tr>
                        <th width>选课科目</th>
                        <th>学习能力匹配指数</th>
                        <th width="500">学习能力与学科指数/匹配度</th>
                      </tr>
                      </thead>
                      <tbody>
                      <tr v-for="data in abilityScores">
                        <td class="bg-blue">{{data.name }}</td>
                        <td>{{data.score | toFixed(2)}}</td>
                        <td colspan="5">
                          <div class="score-line">
                            <div class="line b-red" v-if="data.score<=20"
                                 :style="{width:(data.score/100)*500+'px'}"></div>
                            <div class="line b-orange" v-if="data.score>20 && data.score<=40"
                                 :style="{width:(data.score/100)*500+'px'}"></div>
                            <div class="line b-yellow" v-if="data.score>40 && data.score<=60"
                                 :style="{width:(data.score/100)*500+'px'}"></div>
                            <div class="line b-green" v-if="data.score>60 && data.score<=80"
                                 :style="{width:(data.score/100)*500+'px'}"></div>
                            <div class="line b-blue" v-if="data.score>80 && data.score<=100"
                                 :style="{width:(data.score/100)*500+'px'}"></div>
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
              <!--page 15-->

              <!--page 16-->
              <div class="pdf-page">
                <div class="pdf-header">
                  <img class="pull-left" src="../../assets/pdf/header-logo.png" height="39px">
                  <p class="pull-right pdf-page-seq"></p>
                  <p class="pull-right font-blue">高中生升学规划测评报告</p>
                </div>
                <div class=" pdf-content" id="2">
                  <div class="font-blue pdf-page-title"><span>第二部分 学科兴趣评估</span></div>
                  <div class="pdf-border-paragraph m-b20">
                    <p>
                      兴趣是指对事物喜好或关切的情绪，是人们力求认识某种事物和从事某项活动的意识倾向。它表现为人们对某件事物、某项活动的选择性态度和积极的情绪反应。兴趣在人的实践活动中具有重要意义，可以使人集中注意，产生愉快紧张的心理状态。心理学的研究表明，如果从事某种活动时，保持中等偏上的兴趣，更容易获得成功。
                    </p>

                    <p>
                      学习兴趣是指一个人对学习的一种积极的认识倾向与情绪状态。从教育心理学的角度来说，学习兴趣是一个人倾向于认识、研究获得某种知识的心理特征，是可以推动人们求知的一种内在力量。学生对某一学科有兴趣，就会持续地专心致志地钻研它，从而提高学习效果。由于学习兴趣不同，人的学科选择就有很大差异，下面将从学习兴趣的角度对测评者的学科选择进行探索。
                    </p>
                  </div>

                  <div class="pdf-blue-title" id="21">
                    <img src="../../assets/pdf/title-trn.png" alt="">2.1学科兴趣评估结果
                  </div>

                  <div class="pdf-border-paragraph m-b20">
                    <p>
                      下表为学科兴趣的评估结果，首先测试者可以根据得分的高低可以清楚的判断自己的学科兴趣；测试者还可以和别人比较，灰色区域的范围是常模范围，表示大部分的高中生学科兴趣得分都在该区域内。如果得分超过该范围，则说明在该科目兴趣比他人强；如果得分低于该范围，则说明在该科目兴趣较他人弱；如果得分在范围内，则代表在该科目兴趣上与他人不分上下。
                    </p>
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

                  <div class="table-container table-55-container">
                    <div class="table-title">学科兴趣指标评估详细结果</div>
                    <table>
                      <thead>
                      <tr>
                        <th width="">选课科目</th>
                        <th width="50">10</th>
                        <th width="50">20</th>
                        <th width="50">30</th>
                        <th width="50">40</th>
                        <th width="50">50</th>
                        <th width="50">60</th>
                        <th width="50">70</th>
                        <th width="50">80</th>
                        <th width="50">90</th>
                        <th width="50">100</th>
                        <th width="">指数</th>
                      </tr>
                      </thead>
                      <tbody>
                      <tr v-for="data in interestNorm">
                        <td class="bg-blue">{{data.name }}</td>
                        <td colspan="10">
                          <div class="score-line">
                            <div class="line b-red" v-if="data.score<=20"
                                 :style="{width:(data.score/100)*510+'px'}"></div>
                            <div class="line b-orange" v-if="data.score>20 && data.score<=40"
                                 :style="{width:(data.score/100)*510+'px'}"></div>
                            <div class="line b-yellow" v-if="data.score>40 && data.score<=60"
                                 :style="{width:(data.score/100)*510+'px'}"></div>
                            <div class="line b-green" v-if="data.score>60 && data.score<=80"
                                 :style="{width:(data.score/100)*510+'px'}"></div>
                            <div class="line b-blue" v-if="data.score>80 && data.score<=100"
                                 :style="{width:(data.score/100)*510+'px'}"></div>
                            <div class="norm-line"
                                 :style="{marginLeft:(data.lnorm/100)*510+'px',width:(data.rnorm-data.lnorm)/100*510+'px'}"></div>
                          </div>
                        </td>
                        <td>{{data.score | toFixed(2)}}</td>
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
              <!--page 17-->

              <!--page 18-->
              <div class="pdf-page">
                <div class="pdf-header">
                  <img class="pull-left" src="../../assets/pdf/header-logo.png" height="39px">
                  <p class="pull-right pdf-page-seq"></p>
                  <p class="pull-right font-blue">高中生升学规划测评报告</p>
                </div>
                <div class=" pdf-content" id="3">
                  <div class="font-blue pdf-page-title"><span>第三部分 学科成绩评估</span></div>
                  <div class="pdf-border-paragraph m-b20">
                    <p>
                      高考分数是决定考生选择大学的基准，是学生毕业和升学的重要依据。所以学科成绩的好坏与学生的升学规划直接相关。下面内容将对个体学科成绩进行分析，综合分析测评者的学科成绩，根据学科成绩匹配所选学科。
                    </p>
                  </div>

                  <div class="pdf-blue-title" id="31">
                    <img src="../../assets/pdf/title-trn.png" alt="">3.1学科成绩评估结果
                  </div>

                  <div class="pdf-border-paragraph m-b20">
                    <p>
                      下表为学科成绩的评估结果，测试者可以根据得分的高低清楚的判断自己的学科成绩排名。
                    </p>
                  </div>

                  <div class="table-container table-55-container">
                    <div class="table-title">学科成绩评估详细结果</div>
                    <table>
                      <thead>
                      <tr>
                        <th width="">选课科目</th>
                        <th width="50">10</th>
                        <th width="50">20</th>
                        <th width="50">30</th>
                        <th width="50">40</th>
                        <th width="50">50</th>
                        <th width="50">60</th>
                        <th width="50">70</th>
                        <th width="50">80</th>
                        <th width="50">90</th>
                        <th width="50">100</th>
                        <th width="">标准分</th>
                      </tr>
                      </thead>
                      <tbody>
                      <tr v-for="data in academicScores">
                        <td class="bg-blue">{{data.name }}</td>
                        <td colspan="10">
                          <div class="score-line">
                            <div class="line b-red" v-if="data.score<=20"
                                 :style="{width:(data.score/100)*510+'px'}"></div>
                            <div class="line b-orange" v-if="data.score>20 && data.score<=40"
                                 :style="{width:(data.score/100)*510+'px'}"></div>
                            <div class="line b-yellow" v-if="data.score>40 && data.score<=60"
                                 :style="{width:(data.score/100)*510+'px'}"></div>
                            <div class="line b-green" v-if="data.score>60 && data.score<=80"
                                 :style="{width:(data.score/100)*510+'px'}"></div>
                            <div class="line b-blue" v-if="data.score>80 && data.score<=100"
                                 :style="{width:(data.score/100)*510+'px'}"></div>
                            <!--<div class="norm-line"-->
                            <!--:style="{marginLeft:(data.lnorm/100)*510+'px',width:(data.rnorm-data.lnorm)/100*510+'px'}"></div>-->
                          </div>
                        </td>
                        <td>{{data.score | toFixed(2)}}</td>
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
              <!--page 18-->

              <!--page 19-->
              <div class="pdf-page">
                <div class="pdf-header">
                  <img class="pull-left" src="../../assets/pdf/header-logo.png" height="39px">
                  <p class="pull-right pdf-page-seq"></p>
                  <p class="pull-right font-blue">高中生升学规划测评报告</p>
                </div>
                <div class=" pdf-content" id="4">
                  <div class="font-blue pdf-page-title"><span>第四部分 学科选择综合评估</span></div>
                  <div class="pdf-border-paragraph m-b20">
                    <p>
                      学科选择是高中生进行高中学习，为将来参加高考取得高分的重要环节。很多学校为学生的学科选择提供了相应的指导意见，以某高中为例，要求学生参考以下项目进行学科选择：
                    </p>
                    <p>
                      （1）你本人对某一学科的兴趣；
                    </p>
                    <p>（2）你在某一领域或方向的潜能、潜质；</p>
                    <p>（3）你对未来的发展要求；</p>
                    <p>（4）你与家长的共识；</p>
                    <p>（5）指导教师的意见。</p>
                    <p>
                      高中生升学规划测评系统学科选择测评，能有效评估测试者的学科兴趣、学习潜能、学科成绩，为测试者选择学科提供参考依据。
                    </p>
                    <p>
                      本报告是根据测试者的学习能力、学习兴趣、学科成绩三方面的测评结果，进行综合分析，匹配最佳选科方案。
                    </p>
                  </div>

                  <div class="pdf-blue-title" id="41">
                    <img src="../../assets/pdf/title-trn.png" alt="">4.1学科选择评估结果
                  </div>

                  <div class="pdf-border-paragraph m-b20">
                    <p>
                      在下表中直观呈现了测试个体各科目在学习能力，学习兴趣，学习成绩三个方面的匹配程度，选科综合匹配度则是综合三项测试结果得到的学科匹配度。
                    </p>
                  </div>
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
                <div class="pdf-content">

                  <div class="table-container table-container-20" id="">
                    <div class="table-title">学科选择评估结果</div>
                    <table>
                      <thead>
                      <tr>
                        <th width="110">选课科目</th>
                        <th width="110">指标类型</th>
                        <th>指标得分</th>
                        <th width="450">得分/匹配度</th>
                      </tr>
                      </thead>
                      <tbody v-for="(data,index) in subjectScores" v-if="index<6">
                      <tr>
                        <td rowspan="4" class="bg-blue">{{data.name}}</td>
                        <td>学习能力</td>
                        <td>{{data.ab_score}}</td>
                        <td>
                          <div class="score-line">
                            <div class="line b-red" v-if="data.ab_score<=20"
                                 :style="{width:(data.ab_score/100)*450+'px'}"></div>
                            <div class="line b-orange" v-if="data.ab_score>20 && data.ab_score<=40"
                                 :style="{width:(data.ab_score/100)*450+'px'}"></div>
                            <div class="line b-yellow" v-if="data.ab_score>40 && data.ab_score<=60"
                                 :style="{width:(data.ab_score/100)*450+'px'}"></div>
                            <div class="line b-green" v-if="data.ab_score>60 && data.ab_score<=80"
                                 :style="{width:(data.ab_score/100)*450+'px'}"></div>
                            <div class="line b-blue" v-if="data.ab_score>80 && data.ab_score<=100"
                                 :style="{width:(data.ab_score/100)*450+'px'}"></div>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td>学科兴趣</td>
                        <td>{{data.in_score}}</td>
                        <td>
                          <div class="score-line">
                            <div class="line b-red" v-if="data.in_score<=20"
                                 :style="{width:(data.in_score/100)*450+'px'}"></div>
                            <div class="line b-orange" v-if="data.in_score>20 && data.in_score<=40"
                                 :style="{width:(data.in_score/100)*450+'px'}"></div>
                            <div class="line b-yellow" v-if="data.in_score>40 && data.in_score<=60"
                                 :style="{width:(data.in_score/100)*450+'px'}"></div>
                            <div class="line b-green" v-if="data.in_score>60 && data.in_score<=80"
                                 :style="{width:(data.in_score/100)*450+'px'}"></div>
                            <div class="line b-blue" v-if="data.in_score>80 && data.in_score<=100"
                                 :style="{width:(data.in_score/100)*450+'px'}"></div>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td>学科成绩</td>
                        <td>{{data.ac_score}}</td>
                        <td>
                          <div class="score-line">
                            <div class="line b-red" v-if="data.ac_score<=20"
                                 :style="{width:(data.ac_score/100)*450+'px'}"></div>
                            <div class="line b-orange" v-if="data.ac_score>20 && data.ac_score<=40"
                                 :style="{width:(data.ac_score/100)*450+'px'}"></div>
                            <div class="line b-yellow" v-if="data.ac_score>40 && data.ac_score<=60"
                                 :style="{width:(data.ac_score/100)*450+'px'}"></div>
                            <div class="line b-green" v-if="data.ac_score>60 && data.ac_score<=80"
                                 :style="{width:(data.ac_score/100)*450+'px'}"></div>
                            <div class="line b-blue" v-if="data.ac_score>80 && data.ac_score<=100"
                                 :style="{width:(data.ac_score/100)*450+'px'}"></div>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td>选科综合</td>
                        <td>{{data.average}}</td>
                        <td>
                          <div class="score-line">
                            <div class="line b-red" v-if="data.average<=20"
                                 :style="{width:(data.average/100)*450+'px'}"></div>
                            <div class="line b-orange" v-if="data.average>20 && data.average<=40"
                                 :style="{width:(data.average/100)*450+'px'}"></div>
                            <div class="line b-yellow" v-if="data.average>40 && data.average<=60"
                                 :style="{width:(data.average/100)*450+'px'}"></div>
                            <div class="line b-green" v-if="data.average>60 && data.average<=80"
                                 :style="{width:(data.average/100)*450+'px'}"></div>
                            <div class="line b-blue" v-if="data.average>80 && data.average<=100"
                                 :style="{width:(data.average/100)*450+'px'}"></div>
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
              <!--page 20-->

              <!--page 21-->
              <div class="pdf-page">
                <div class="pdf-header">
                  <img class="pull-left" src="../../assets/pdf/header-logo.png" height="39px">
                  <p class="pull-right pdf-page-seq"></p>
                  <p class="pull-right font-blue">高中生升学规划测评报告</p>
                </div>
                <div class="pdf-content">

                  <div class="table-container table-container-20">
                    <!--<div class="table-title">职业类型与评估指标分析结果</div>-->
                    <table>
                      <!--<thead>-->
                      <!--<tr>-->
                      <!--<th width="110">选课科目</th>-->
                      <!--<th width="110">指标类型</th>-->
                      <!--<th>指标得分</th>-->
                      <!--<th width="450">得分/匹配度</th>-->
                      <!--</tr>-->
                      <!--</thead>-->
                      <tbody v-for="(data,index) in subjectScores" v-if="index>5">
                      <tr>
                        <td width="110" rowspan="4" class="bg-blue">{{data.name}}</td>
                        <td width="110">学习能力</td>
                        <td>{{data.ab_score}}</td>
                        <td width="450">
                          <div class="score-line">
                            <div class="line b-red" v-if="data.ab_score<=20"
                                 :style="{width:(data.ab_score/100)*450+'px'}"></div>
                            <div class="line b-orange" v-if="data.ab_score>20 && data.ab_score<=40"
                                 :style="{width:(data.ab_score/100)*450+'px'}"></div>
                            <div class="line b-yellow" v-if="data.ab_score>40 && data.ab_score<=60"
                                 :style="{width:(data.ab_score/100)*450+'px'}"></div>
                            <div class="line b-green" v-if="data.ab_score>60 && data.ab_score<=80"
                                 :style="{width:(data.ab_score/100)*450+'px'}"></div>
                            <div class="line b-blue" v-if="data.ab_score>80 && data.ab_score<=100"
                                 :style="{width:(data.ab_score/100)*450+'px'}"></div>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td>学科兴趣</td>
                        <td>{{data.in_score}}</td>
                        <td>
                          <div class="score-line">
                            <div class="line b-red" v-if="data.in_score<=20"
                                 :style="{width:(data.in_score/100)*450+'px'}"></div>
                            <div class="line b-orange" v-if="data.in_score>20 && data.in_score<=40"
                                 :style="{width:(data.in_score/100)*450+'px'}"></div>
                            <div class="line b-yellow" v-if="data.in_score>40 && data.in_score<=60"
                                 :style="{width:(data.in_score/100)*450+'px'}"></div>
                            <div class="line b-green" v-if="data.in_score>60 && data.in_score<=80"
                                 :style="{width:(data.in_score/100)*450+'px'}"></div>
                            <div class="line b-blue" v-if="data.in_score>80 && data.in_score<=100"
                                 :style="{width:(data.in_score/100)*450+'px'}"></div>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td>学科成绩</td>
                        <td>{{data.ac_score}}</td>
                        <td>
                          <div class="score-line">
                            <div class="line b-red" v-if="data.ac_score<=20"
                                 :style="{width:(data.ac_score/100)*450+'px'}"></div>
                            <div class="line b-orange" v-if="data.ac_score>20 && data.ac_score<=40"
                                 :style="{width:(data.ac_score/100)*450+'px'}"></div>
                            <div class="line b-yellow" v-if="data.ac_score>40 && data.ac_score<=60"
                                 :style="{width:(data.ac_score/100)*450+'px'}"></div>
                            <div class="line b-green" v-if="data.ac_score>60 && data.ac_score<=80"
                                 :style="{width:(data.ac_score/100)*450+'px'}"></div>
                            <div class="line b-blue" v-if="data.ac_score>80 && data.ac_score<=100"
                                 :style="{width:(data.ac_score/100)*450+'px'}"></div>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td>选科综合</td>
                        <td>{{data.average}}</td>
                        <td>
                          <div class="score-line">
                            <div class="line b-red" v-if="data.average<=20"
                                 :style="{width:(data.average/100)*450+'px'}"></div>
                            <div class="line b-orange" v-if="data.average>20 && data.average<=40"
                                 :style="{width:(data.average/100)*450+'px'}"></div>
                            <div class="line b-yellow" v-if="data.average>40 && data.average<=60"
                                 :style="{width:(data.average/100)*450+'px'}"></div>
                            <div class="line b-green" v-if="data.average>60 && data.average<=80"
                                 :style="{width:(data.average/100)*450+'px'}"></div>
                            <div class="line b-blue" v-if="data.average>80 && data.average<=100"
                                 :style="{width:(data.average/100)*450+'px'}"></div>
                          </div>
                        </td>
                      </tr>
                      </tbody>
                    </table>
                  </div>

                  <div class="pdf-blue-title" id="42">
                    <img src="../../assets/pdf/title-trn.png" alt="">4.2最佳学科选择推荐
                  </div>

                  <div class="pdf-border-paragraph m-b20">
                    <div class="text-center jixing" style="margin-bottom: 20px;">
                      <div class="jx-content">
                        最佳学科选择推荐
                      </div>
                    </div>
                    <p>
                      在六门选修科目中，根据你的学习能力、学科兴趣、学科成绩进行综合匹配，你的最佳选课科目为<span v-for="(data,index) in sucjectRecommends"
                                                                       v-if="index<sucjectRecommendsLen-1">{{data}}、</span>
                      <span v-for="(data,index) in sucjectRecommends"
                            v-if="index==sucjectRecommendsLen-1">{{data}}</span>。
                    </p>
                  </div>

                </div>
                <div class="font-blue pdf-footer">
                  <p class="pull-left">测评网址：www.ymtest.com</p>
                  <p class="pull-right">测评方法、工具及报告设计已申请产权保护</p>
                </div>
              </div>
              <!--page 21-->

            </div>
            <!--</div>-->
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
  import usercenter from '../../components/usercenter.vue';
  import headerEl from '../../components/headerEl.vue';
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
        abilityNorm: '', // 1.1 表格
        abilityScores: '', // 1.3 表格
        abilityText1: '', // 学习能力text
        abilityText2: '', // 学习能力text
        abilityText3: '', // 学习能力text
        abilityText4: '', // 学习能力text
        abilityText5: '', // 学习能力text
        abilityText6: '', // 学习能力text
        abilityText7: '', // 学习能力text
        abilityText8: '', // 学习能力text
        abilityText9: '', // 学习能力text
        abilityText1Len: '', // 学习能力text
        abilityText2Len: '', // 学习能力text
        abilityText3Len: '', // 学习能力text
        abilityText4Len: '', // 学习能力text
        abilityText5Len: '', // 学习能力text
        abilityText6Len: '', // 学习能力text
        abilityText7Len: '', // 学习能力text
        abilityText8Len: '', // 学习能力text
        abilityText9Len: '', // 学习能力text
        interestNorm: '', // 学习兴趣 norm
        academicScores: '', // 学科成绩 3.1
        subjectScores: '', // 学科成绩 4.1
        sucjectRecommends: '',
        sucjectRecommendsLen: '',
        process: 0, // 下载进度
        totalPage: 0, // 总页数
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
//      var leftWidth = ($(window).width() - 1200) / 2 + 280;
//      pdfContent.css({'background': '#fff', 'left': leftWidth + 'px'});

      var iframeHeight = $(window).height() - 180;
      $('.preview-pane').css('height', iframeHeight);
      $('.report-download').css({'width': ($(window).width() - 260) + 'px'});

      this.getUserInfo(); // 获取用户基本信息
      this.getReportInfo(); // 获取报告数据
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
       * 获取职业基本信息
       */
      getReportInfo: function () {
        var _this = this;
        this.$ajax.post("/api/common/report/subject/content", {report_id: this.reportId}, {emulateJSON: true}).then(
          function (res) {
            // 请求成功的结果
            console.log(res.data);
            var data = res.data;
            if (data.code == 0) {

              this.abilityNorm = data.result.ability.norm;
              this.abilityScores = data.result.ability.scores;
              var abilityTexts = data.result.ability.comment;
              $.each(abilityTexts, function (index, val) {
                if (val.name == '语文') {
                  _this.abilityText1 = val;
                  _this.abilityText1Len = val.cognitions.length;
                }
                if (val.name == '数学') {
                  _this.abilityText2 = val;
                  _this.abilityText2Len = val.cognitions.length;
                }
                if (val.name == '英语') {
                  _this.abilityText3 = val;
                  _this.abilityText3Len = val.cognitions.length;
                }
                if (val.name == '物理') {
                  _this.abilityText4 = val;
                  _this.abilityText4Len = val.cognitions.length;
                }
                if (val.name == '化学') {
                  _this.abilityText5 = val;
                  _this.abilityText5Len = val.cognitions.length;
                }
                if (val.name == '生物') {
                  _this.abilityText6 = val;
                  _this.abilityText6Len = val.cognitions.length;
                }
                if (val.name == '历史') {
                  _this.abilityText7 = val;
                  _this.abilityText7Len = val.cognitions.length;
                }
                if (val.name == '政治') {
                  _this.abilityText8 = val;
                  _this.abilityText8Len = val.cognitions.length;
                }
                if (val.name == '地理') {
                  _this.abilityText9 = val;
                  _this.abilityText9Len = val.cognitions.length;
                }
              });

              this.interestNorm = data.result.interest.norm;
              this.academicScores = data.result.academic.scores;
              this.subjectScores = data.result.subject.scores;
              this.sucjectRecommends = data.result.subject.recommends;
              this.sucjectRecommendsLen = data.result.subject.recommends.length;

              // console.log(_this.abilityText1);
              // console.log(_this.subjectScores);
              // console.log(_this.sucjectRecommends);

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
        var pdfContent = $(".pdf-page").eq(seq);
        var scrollTop = $(window).scrollTop();
        var topWidth = pdfContent.offset().top - scrollTop;
        var leftWidth = 298 + ($(window).width() - 1200) / 2;
        var width = pdfContent.width();
        var height = pdfContent.height();
        var scaleBy = 2;  //缩放比例
//        if (seq == 2 || seq == 3) {
//          scaleBy = 4;
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
        var content = _this.user.realname + '-选科报告-' + _this.getNowFormatDate();
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

            pdf.save("职业生涯测评报告.pdf");
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

