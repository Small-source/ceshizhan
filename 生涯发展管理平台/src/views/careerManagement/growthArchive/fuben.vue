<template>
    <div class="evaluation_report">
        <div class="pdf" id="pdfDom" style="background-color:#E8E8E8;">
            <div class="page_shadow">
                <div class="page_cover pdf-page">
                    <div class="header">
                        <h3>成长档案</h3>
                        <!-- <p class="detail">[ 个人报告 ]</p> -->
                    </div>
                    <div class="main" v-if="reportData">
                        <p>姓&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;名：{{reportData.studentInfo.s.n}}</p>
                        <p>报告编号：{{reportData.updatedAt.replace(/-|\s|:/g, '')}}</p>                
                        <p>报告时间：{{reportData.updatedAt}}</p>
                    </div>
                </div>
            </div>
            <div class="page_shadow">
                <div class="page pdf-page">
                    <h5 class="header">
                        <span>目录</span>
                    </h5>
                    <div class="content" id="catalog_1">
                        <div class="big_title_box" @click="scrollToView('page1')">
                            <div class="big_title"><span>Part1</span>前言</div>
                            <div class="line"></div>
                            <div class="page_number">1</div>
                        </div>
                        <div class="big_title_box" @click="scrollToView('page2')">
                            <p class="big_title"><span>Part2</span>初步访谈</p>
                            <div class="line"></div>
                            <div class="page_number">2</div>
                        </div>
                        <div class="big_title_box" @click="scrollToView('page3')">
                            <p class="big_title"><span>Part3</span>测评结果</p>
                            <div class="line"></div>
                            <div class="page_number">3</div>
                        </div>
                        <div class="small_title_box">
                            <div class="small_title">成就目标定向测评</div>
                            <div class="line"></div>
                            <div class="page_number"></div>
                        </div>
                        <div class="small_title_box">
                            <div class="small_title">时间管理测评</div>
                            <div class="line"></div>
                            <div class="page_number"></div>
                        </div>
                        <div class="big_title_box" @click="scrollToView('page4')">
                            <p class="big_title"><span>Part4</span>评估与诊断</p>
                            <div class="line"></div>
                            <div class="page_number">3</div>
                        </div>
                        <div class="big_title_box" @click="scrollToView('page4')">
                            <p class="big_title"><span>Part5</span>咨询目标</p>
                            <div class="line"></div>
                            <div class="page_number">3</div>
                        </div>
                        <div class="big_title_box" @click="scrollToView('page4')">
                            <p class="big_title"><span>Part6</span>咨询方案</p>
                            <div class="line"></div>
                            <div class="page_number">3</div>
                        </div>
                        <div class="big_title_box" @click="scrollToView('page5')">
                            <p class="big_title"><span>Part7</span>咨询方案</p>
                            <div class="line"></div>
                            <div class="page_number">3</div>
                        </div>
                        <div class="big_title_box" @click="scrollToView('page6')">
                            <p class="big_title"><span>Part8</span>咨询方案</p>
                            <div class="line"></div>
                            <div class="page_number">3</div>
                        </div>
                        <div class="big_title_box" @click="scrollToView('page7')">
                            <p class="big_title"><span>Part9</span>辅导</p>
                            <div class="line"></div>
                            <div class="page_number">3</div>
                        </div>
                        <div class="small_title_box">
                            <div class="small_title">学习动机</div>
                            <div class="line"></div>
                            <div class="page_number"></div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="page_shadow">
                <div class="page pdf-page">
                    <h5 class="header">
                        <span>Part1</span>简介    
                    </h5>
                    <div class="content" id="catalog_2">
                        <div class="foreword_detail">
                            <p>学生个人成长档案包括初步访谈、测评结果、评估与诊断、咨询目标、咨询方案、咨询记录和辅导7个部分。</p>
                            <p>初步访谈，包括学生一般资料、个人陈述、咨询师观察和家长反映四个部分的内容。</p>
                            <p>测评结果是对成就目标定向测评、时间管理测评、学习动机测评、学习习惯测评、情绪管理测评、人际关系测评或注意力测评结果的呈现。访谈初步评估学生可能存在什么样的问题，再做量表测评进一步评估问题的程度，因此呈现的每个学生的测评类型有所不同。</p>
                            <p>评估与诊断记录学生的具体问题和程度以及原因分析，比如说学生动机过强导致的情绪不稳定，原因可能是个人、学校或家庭因素。</p>
                            <p>咨询目标是咨询师和学生共同商量好的咨询想要达成的目标，比如说让学生情绪回归稳定等。</p>
                            <p>咨询方案是咨询师对怎样解决学生问题所做的解决方案，比如说运用合理情绪疗法解决学生情绪波动的问题以及具体的时间安排等。</p>
                            <p>咨询记录包括每次的规划主题、目的、方法、过程、结果、下次规划计划和家庭作业。</p>
                            <p>辅导包括给学生具体辅导的学习动机、学习习惯、学习能力、情绪管理和人际关系五个方面的内容，每个学生的问题类型不同，呈现的辅导模块会有差异。</p>
                        </div>
                        <div class="foreword_footer">
                            <div class="title">说明：</div>
                            <p>初步访谈、测评结果、评估与诊断、咨询目标、咨询方案在咨询的第一次和第二次基本能定下来，以后变动的可能性比较小。咨询记录和辅导每一次咨询都需要记录，是一个不断更新的过程，因此成长档案是动态变化的</p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="page_shadow" v-if="firstInterview && firstInterview.constructor == Object">
                <div class="page pdf-page">
                    <h5 class="header">
                        <span>Part2</span>初步访谈
                    </h5>
                    <div class="content result" id="catalog_3">
                        <p class="report_time">访谈时间：{{firstInterview.date}}</p>
                        <div class="report_mained">
                            <div class="mained_block"></div>
                            <div class="box">
                                <p class="title">一般资料</p>
                                <p class="detail">{{firstInterview.generalInformation}}</p>
                            </div>
                            <div class="box">
                                <p class="title">个人陈述</p>
                                <p class="detail">{{firstInterview.personalStatement}}</p>
                            </div>
                            <div class="box">
                                <p class="title">咨询师观察</p>
                                <p class="detail">{{firstInterview.consultantObservation}}</p>
                            </div>
                            <div class="box">
                                <p class="title">家长反映</p>
                                <p class="detail">{{firstInterview.parentsReflect}}</p>
                            </div>
                            <div class="box">
                                <p class="title">咨询师总结</p>
                                <p class="detail">{{firstInterview.consultantSummary}}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="page_shadow">
                <div class="page pdf-page">
                    <h5 class="header">
                        <span>Part3</span>测评结果
                    </h5>
                    <div class="content" v-if="assessReport1 && assessReport1.constructor == Object">
                        <h6 class="report_header">成就目标定向测评</h6>
                        <div class="echarts_box">
                            <div class="title">通过对您的作答结果进行分析，您四个维度的得分如下图所示：</div>
                            <div id="echarts1" style="width: 700px;height:400px;" class="echarts"></div>
                            <p class="fenxi">经过分析，您的成就目标定向类型为：<span>{{assessReport1.studentData.category}}。</span></p>
                            <p class="fenxi_detail">
                                <span>{{assessReport1.studentData.content}}</span>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="page_shadow" v-if="assessReport2 && assessReport2.constructor == Object">
                <div class="page pdf-page">
                    <div class="content result" id="catalog_3">
                        <h6 class="report_header">时间管理测评</h6>
                        <p class="circle_title">通过对您的作答结果进行分析，您当前的得分如下图所示(每项满分为5分)：</p>
                        <div class="circle_box">
                            <!-- jquery绘制圆环插件 -->
                            <!-- 文档地址 http://bolli.tech/docs.php?p=circleChart#settings-startangle -->
                            <div class="circle circle1" id="circle1">
                                <div class="box">
                                    <p class="box_title">时间价值感</p>
                                    <p class="num">{{assessReport2.studentData.list['时间价值感'].avgScore}}分</p>
                                </div>  
                            </div>
                            <div class="circle circle2" id="circle2">
                                <div class="box">
                                    <p class="box_title">时间监控观</p>
                                    <p class="num">{{assessReport2.studentData.list['时间监控观'].avgScore}}分</p>
                                </div>
                            </div>
                            <div class="circle circle3" id="circle3">
                                <div class="box">
                                    <p class="box_title">时间效能感</p>
                                    <p class="num">{{assessReport2.studentData.list['时间效能感'].avgScore}}分</p>
                                </div>
                            </div>
                        </div>
                        <p class="completion" v-if="false">
                            您的<strong>总平均</strong>分为{{assessReport2.studentData.avgScore}}分，这说明<span>{{assessReport2.studentData.content}}</span>
                        </p>
                        <p class="resule_header">三个维度的解释如下：</p>
                        <div class="echarts_box">
                            <p class="title"><span>01</span>时间价值感</p>
                            <p class="detail">时间价值感指的是认知层面，是个体对时间功能和价值的稳定态度和观念，包括对个体人生和社会发展意义的稳定态度和信念，通常充满情感。对个体运用时间的方式具有导向作用，是个体时间管理的基础，又可以分为个人取向和社会取向两个小维度。</p>
                            <div id="echarts2_1" style="width: 700px;height:400px;"></div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="page_shadow">
                <div class="page pdf-page">
                    <div class="content">
                        <h6 class="report_header">时间管理测评</h6>
                        <div class="echarts_box">
                            <p class="title"><span>02</span>时间监控观</p>
                            <p class="detail">时间监控观是行为层面，指的是个体利用和运筹时间的观念和能力，通过一系列的外显活动体现，可以分为设置目标、计划性、优先级、反馈性、时间分配五个小维度。</p>
                            <div id="echarts2_2" style="width: 700px;height:400px;"></div>
                        </div>
                        <div class="echarts_box">
                            <p class="title"><span>03</span>时间效能感</p>
                            <p class="detail">时间效能感是个体对自己利用和运筹时间的信念和预期，反映个体对时间管理的信心和对自己时间管理行为能力的估计，是制约时间监控的一个重要因素。可以分为管理行为效能和管理效能两个分维度。</p>
                            <div id="echarts2_3" style="width: 700px;height:400px;"></div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="page_shadow" v-if="assessReport3 && assessReport3.constructor == Object">
                <div class="page pdf-page">
                    <div class="content">
                        <h6 class="report_header">学习动机测评</h6>
                        <div class="echarts_box">
                            <div class="title">通过对您的作答结果进行分析，您当前的得分如下图所示：</div>
                            <div id="echarts3" style="width: 820px;height:400px;margin-left: -50px;"></div>
                        </div>
                        <p class="resule_header" style="font-weight: 600;">您在各个维度上的得分和解释如下：</p>
                        <div class="resule_table">
                            <ul>
                                <li v-for="(value, keey, index) in assessReport3.studentData.list" :key="index">
                                    <p class="lis_title"><span class="color_box"></span><span class="weidu">维度：{{value.category}}</span><span>得分：<span class="defen">{{value.score}}</span></span></p>
                                    <p class="lis_detail">解释</p>
                                    <p class="detail">{{value.content}}</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div class="page_shadow" v-if="assessReport4 && assessReport4.constructor == Object">
                <div class="page pdf-page">
                    <div class="content">
                        <h6 class="report_header">学习习惯测评</h6>
                        <p class="circle_title">通过对您的作答结果进行分析，您当前的得分如下图所示(每项满分为5分)：</p>
                        <div class="circle_box">
                            <div class="circle circle1" id="circle4_1">
                                <div class="box">
                                    <p class="box_title">课前准备</p>
                                    <p class="num">{{assessReport4.studentData['课前准备'].avgScore}}分</p>
                                </div>  
                            </div>
                            <div class="circle circle2" id="circle4_2">
                                <div class="box">
                                    <p class="box_title">课上听课</p>
                                    <p class="num">{{assessReport4.studentData['课上听课'].avgScore}}分</p>
                                </div>
                            </div>
                            <div class="circle circle3" id="circle4_3">
                                <div class="box">
                                    <p class="box_title">课后学习</p>
                                    <p class="num">{{assessReport4.studentData['课后学习'].avgScore}}分</p>
                                </div>
                            </div>
                        </div>
                        <p class="resule_header">三个维度的得分及解释如下：</p>
                        <div class="resule_table">
                            <ul>
                                <li v-for="(value, key, index) in assessReport4.studentData" :key="index">
                                    <p class="lis_title"><span class="color_box"></span><span class="weidu">维度：{{value.name}}</span><span>得分：<span class="defen">{{value.avgScore}}</span></span></p>
                                    <p class="lis_detail">解释：</p>
                                    <p class="detail">{{value.content}}</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div class="page_shadow" v-if="assessReport5 && assessReport5.constructor == Object">
                <div class="page pdf-page">
                    <div class="content">
                        <h6 class="report_header">情绪管理测评</h6>
                        <p class="circle_title">通过对您的作答结果进行分析，您当前的得分如下图所示：</p>
                        <div class="circle_box" v-if="reportData">
                            <!-- jquery绘制圆环插件 -->
                            <!-- 文档地址 http://bolli.tech/docs.php?p=circleChart#settings-startangle -->
                            <div class="circle" :class="'circle' + (index + 1)" :id="'circle5_' + (index + 1)" v-for="(item, key, index) in assessReport5.studentData.list">
                                <div class="box">
                                    <p class="box_title">{{item.name}}</p>
                                    <p class="num">{{item.score}}分</p>
                                </div>  
                            </div>
                        </div>
                        <p class="completion">
                            您的<strong>总得分</strong>为<span>{{assessReport5.studentData.totalScore}}</span>分，这说明<span>{{assessReport5.studentData.content}}</span>
                        </p>
                        <p class="resule_header">情绪管理各维度解释如下：</p>
                        <div class="resule_table">
                            <ul>
                                <li>
                                    <p class="lis_title"><span class="color_box"></span><span class="weidu">维度：情绪的感知能力</span></p>
                                    <p class="lis_detail">解释：</p>
                                    <p class="detail">根据个人经验觉察自己和他人情绪状态及情绪变化的能力。</p>
                                </li>
                                <li>
                                    <p class="lis_title"><span class="color_box"></span><span class="weidu">维度：情绪的表达能力</span></p>
                                    <p class="lis_detail">解释：</p>
                                    <p class="detail">能准确表达自身情绪，并能根据别人的情绪反应进行适当的表达和反馈。</p>
                                </li>
                                <li>
                                    <p class="lis_title"><span class="color_box"></span><span class="weidu">维度：理解和推理自身情绪的能力</span></p>
                                    <p class="lis_detail">解释：</p>
                                    <p class="detail">能明白自身情绪发生的原因和导致的结果，能理解自身不同情绪之间的关系。</p>
                                </li>
                                <li>
                                    <p class="lis_title"><span class="color_box"></span><span class="weidu">维度：情绪的感知能力</span></p>
                                    <p class="lis_detail">解释：</p>
                                    <p class="detail">根据个人经验觉察自己和他人情绪状态及情绪变化的能力。</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div class="page_shadow" v-if="assessReport6 && assessReport6.constructor == Object">
                <div class="page pdf-page">
                    <div class="content">
                        <h6 class="report_header">人际关系综合诊断测评</h6>
                        <div class="resule_table">
                            <p class="completion">通过对您的作答结果进行分析，您的<span>总得分为{{assessReport6.studentData.totalScore}}分</span>，这说明：<span>{{assessReport6.studentData.content}}</span></p>
                            <ul>
                                <li v-for="(value, keey, index) in assessReport6.studentData.list" :key="index">
                                    <p class="lis_title"><span class="color_box"></span><span class="weidu">维度：{{value.category}}</span><span>得分：<span class="defen">{{value.score}}</span></span></p>
                                    <p class="lis_detail">解释：</p>
                                    <p class="detail">{{value.content}}</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div class="page_shadow" v-if="assessmentInfo && assessmentInfo.constructor == Object">
                <div class="page pdf-page">
                    <h5 class="header">
                        <span>Part</span>评估与诊断
                    </h5>
                    <div class="content">
                        <p class="report_time">评估与诊断时间：<span>{{assessmentInfo.date}}</span></p>
                        <div class="report_mained">
                            <div class="box">
                                <p class="title">具体问题和程度：</p>
                                <p class="detail">{{assessmentInfo.problems}}</p>
                            </div>
                            <div class="box">
                                <p class="title">原因分析：</p>
                                <p class="detail">{{assessmentInfo.reason}}</p>
                            </div>
                        </div>
                        <div class="history_box">
                            <p class="title">历史咨询记录</p>
                            <ul class="history_lis">
                                <li v-for="(item, index) in assessmentInfoList" :key="index">{{item.date}}</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div class="page_shadow" v-if="planConsultTarget && planConsultTarget.constructor == Object">
                <div class="page pdf-page">
                    <h5 class="header">
                        <span>Part</span>咨询目标
                    </h5>
                    <div class="content">
                        <p class="report_time">咨询时间：<span>{{planConsultTarget.updatedAt}}</span></p>
                        <p class="datail">{{planConsultTarget.target}}</p>
                    </div>
                </div>
            </div>
            <div class="page_shadow" v-if="planConsultScheme && planConsultScheme.constructor == Object">
                <div class="page pdf-page">
                    <h5 class="header">
                        <span>Part</span>咨询方案
                    </h5>
                    <div class="content">
                        <p class="report_time">咨询时间：<span>{{planConsultScheme.updatedAt}}</span></p>
                        <p class="datail">{{planConsultTarget.scheme}}</p>
                    </div>
                </div>
            </div>
            <div class="page_shadow" v-if="planConsultInfo && planConsultInfo.constructor == Object">
                <div class="page pdf-page">
                    <h5 class="header">
                        <span>Part</span>咨询记录
                    </h5>
                    <div class="content">
                        <h6 class="report_header">
                            当前咨询记录
                        </h6>   
                        <div class="report_mained">
                            <div class="mained_block"></div>
                            <div class="box">
                                <p class="title">规划主题：</p>
                                <p class="detail">{{planConsultInfo.theme}}</p>
                            </div>
                            <div class="box">
                                <p class="title">目的：</p>
                                <p class="detail">{{planConsultInfo.purpose}}</p>
                            </div>
                            <div class="box">
                                <p class="title">方法：</p>
                                <p class="detail">{{planConsultInfo.method}}</p>
                            </div>
                            <div class="box">
                                <p class="title">过程：</p>
                                <p class="detail">{{planConsultInfo.process}}</p>
                            </div>
                            <div class="box">
                                <p class="title">结果：</p>
                                <p class="detail">{{planConsultInfo.result}}</p>
                            </div>
                            <div class="box">
                                <p class="title">下次规划计划：</p>
                                <p class="detail">{{planConsultInfo.nextPlan}}</p>
                            </div>
                            <div class="box">
                                <p class="title">家庭作业：</p>
                                <p class="detail">{{planConsultInfo.homework}}</p>
                            </div>
                            <p class="report_time">最近咨询时间{{planConsultInfo.date}}</p>
                        </div>
                        <div class="history_box">
                            <p class="title">历史咨询记录</p>
                            <table>
                                <tr>
                                    <th>规划主题</th>
                                    <th>日期</th>
                                </tr>
                                <tr>
                                    <td>fdg </td>
                                    <td>gdtgrt </td>
                                </tr>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
            <div class="page_shadow" v-if="intensiveTraining.length">
                <div class="page pdf-page">
                    <h5 class="header">
                        <span>Part</span>辅导
                    </h5>
                    <div class="content">
                        <h6 class="report_header">
                            学习动机
                        </h6>
                        <!-- <p class="report_time">最近咨询时间</p> -->
                        <p class="mained_title"><span>1</span>强化训练</p>
                        <div class="report_mained" v-for="(item, index) in intensiveTraining" :key="index">
                            <div class="mained_block"></div>
                            <div class="box">
                                <p class="title">想要改变的行为：</p>
                                <p class="detail">{{item.wantToChange}}</p>
                            </div>
                            <div class="box">
                                <p class="title">刺激：</p>
                                <p class="detail">{{item.stimulate}}</p>
                            </div>
                            <div class="box">
                                <p class="title">备注：</p>
                                <p class="detail">{{item.remark}}</p>
                            </div>
                            <p class="report_time">{{item.updatedAt}}</p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="page_shadow">
                <div class="page pdf-page"> 
                    <div class="content">
                        <h6 class="report_header">
                            学习动机
                        </h6>
                        <!-- <p class="report_time">最近咨询时间</p> -->
                        <p class="mained_title"><span>1</span>自我激励训练</p>
                        <div class="report_mained"  v-if="planConsultScheme && planConsultScheme.constructor == Object">
                            <div class="box_jili">
                                <p class="title">1.写下一个你想自我激励的领域？</p>
                                <p class="detail">{{selfMotivationNewest.territory}}</p>
                            </div>
                            <div class="box_jili">
                                <p class="title">2.这个目标能够满足你的哪些需要和兴趣，为你带来哪些积极的情感？</p>
                                <p class="detail">{{selfMotivationNewest.emotion}}</p>
                            </div>
                            <div class="box_jili">
                                <p class="title">3.如果为自己设置一个可实现的学习/掌握型目标，是什么？</p>
                                <p class="detail">{{selfMotivationNewest.target}}</p>
                            </div>
                            <div class="box_jili">
                                <p class="title">4.为了达成这个目标，你可以给自己布置哪些任务？</p>
                                <p class="detail">{{selfMotivationNewest.mission}}</p>
                            </div>
                            <div class="box_jili">
                                <p class="title">5.哪些事情可以为你带来做这件事的信心？</p>
                                <p class="detail">{{selfMotivationNewest.confidence}}</p>
                            </div>
                            <div class="box_jili">
                                <p class="title">6、谁可以为你提供支持？他们可以为你提供那些支持？  </p>
                                <p class="detail">{{selfMotivationNewest.support}}</p>
                            </div>
                        </div>
                        
                        <div class="history_box"  v-if="selfMotivation.length">
                            <!-- <p class="title">历史咨询记录</p> -->
                            <table>
                                <tr>
                                    <th>激励领域</th>
                                    <th>日期</th>
                                </tr>
                                <tr  v-for="(item, index) in selfMotivation" :key="index">
                                    <td>{{item.territory}}</td>
                                    <td>{{item.updatedAt}}</td>
                                </tr>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
            <div class="page_shadow" v-if="attribution && attribution.constructor == Object">
                <div class="page pdf-page"> 
                    <div class="content">
                        <!-- <h6 class="report_header">
                            学习动机
                        </h6> -->
                        <!-- <p class="report_time">最近咨询时间</p> -->
                        <p class="mained_title"><span>03</span>归因训练</p>
                        <div class="report_guiyin">
                            <table class="guiyin1"> 
                                <tr>
                                    <th class="title" rowspan="2">能力</th>
                                    <th>内在</th>
                                    <th>外在</th>
                                    <th>稳定</th>
                                    <th>不稳定</th>
                                    <th>可控</th>
                                    <th>不可控</th>
                                </tr>
                                <tr>
                                    <td :class="attribution.ability[0] == '内在' ? 'checked' : 'unchecked'"></td>
                                    <td :class="attribution.ability[0] == '外在' ? 'checked' : 'unchecked'"></td>
                                    <td :class="attribution.ability[1] == '稳定' ? 'checked' : 'unchecked'"></td>
                                    <td :class="attribution.ability[1] == '不稳定' ? 'checked' : 'unchecked'"></td>
                                    <td :class="attribution.ability[2] == '可控' ? 'checked' : 'unchecked'"></td>
                                    <td :class="attribution.ability[2] == '不可控' ? 'checked' : 'unchecked'"></td>
                                </tr>
                            </table>
                            <table class="guiyin2"> 
                                <tr>
                                    <th class="title" rowspan="2">努力</th>
                                    <th>内在</th>
                                    <th>外在</th>
                                    <th>稳定</th>
                                    <th>不稳定</th>
                                    <th>可控</th>
                                    <th>不可控</th>
                                </tr>
                                <tr>
                                    <td :class="attribution.strive[0] == '内在' ? 'checked' : 'unchecked'"></td>
                                    <td :class="attribution.strive[0] == '外在' ? 'checked' : 'unchecked'"></td>
                                    <td :class="attribution.strive[1] == '稳定' ? 'checked' : 'unchecked'"></td>
                                    <td :class="attribution.strive[1] == '不稳定' ? 'checked' : 'unchecked'"></td>
                                    <td :class="attribution.strive[2] == '可控' ? 'checked' : 'unchecked'"></td>
                                    <td :class="attribution.strive[2] == '不可控' ? 'checked' : 'unchecked'"></td>
                                </tr>
                            </table>
                            <table class="guiyin2"> 
                                <tr>
                                    <th class="title" rowspan="2">任务难度</th>
                                    <th>内在</th>
                                    <th>外在</th>
                                    <th>稳定</th>
                                    <th>不稳定</th>
                                    <th>可控</th>
                                    <th>不可控</th>
                                </tr>
                                <tr>
                                    <td :class="attribution.difficulty[0] == '内在' ? 'checked' : 'unchecked'"></td>
                                    <td :class="attribution.difficulty[0] == '外在' ? 'checked' : 'unchecked'"></td>
                                    <td :class="attribution.difficulty[1] == '稳定' ? 'checked' : 'unchecked'"></td>
                                    <td :class="attribution.difficulty[1] == '不稳定' ? 'checked' : 'unchecked'"></td>
                                    <td :class="attribution.difficulty[2] == '可控' ? 'checked' : 'unchecked'"></td>
                                    <td :class="attribution.difficulty[2] == '不可控' ? 'checked' : 'unchecked'"></td>
                                </tr>
                            </table>
                            <table class="guiyin2"> 
                                <tr>
                                    <th class="title" rowspan="2">运气</th>
                                    <th>内在</th>
                                    <th>外在</th>
                                    <th>稳定</th>
                                    <th>不稳定</th>
                                    <th>可控</th>
                                    <th>不可控</th>
                                </tr>
                                <tr>
                                    <td :class="attribution.luck[0] == '内在' ? 'checked' : 'unchecked'"></td>
                                    <td :class="attribution.luck[0] == '外在' ? 'checked' : 'unchecked'"></td>
                                    <td :class="attribution.luck[1] == '稳定' ? 'checked' : 'unchecked'"></td>
                                    <td :class="attribution.luck[1] == '不稳定' ? 'checked' : 'unchecked'"></td>
                                    <td :class="attribution.luck[2] == '可控' ? 'checked' : 'unchecked'"></td>
                                    <td :class="attribution.luck[2] == '不可控' ? 'checked' : 'unchecked'"></td>
                                </tr>
                            </table>
                            <table class="guiyin2"> 
                                <tr>
                                    <th class="title" rowspan="2">身心状态</th>
                                    <th>内在</th>
                                    <th>外在</th>
                                    <th>稳定</th>
                                    <th>不稳定</th>
                                    <th>可控</th>
                                    <th>不可控</th>
                                </tr>
                                <tr>
                                    <td :class="attribution.mindAndBody[0] == '内在' ? 'checked' : 'unchecked'"></td>
                                    <td :class="attribution.mindAndBody[0] == '外在' ? 'checked' : 'unchecked'"></td>
                                    <td :class="attribution.mindAndBody[1] == '稳定' ? 'checked' : 'unchecked'"></td>
                                    <td :class="attribution.mindAndBody[1] == '不稳定' ? 'checked' : 'unchecked'"></td>
                                    <td :class="attribution.mindAndBody[2] == '可控' ? 'checked' : 'unchecked'"></td>
                                    <td :class="attribution.mindAndBody[2] == '不可控' ? 'checked' : 'unchecked'"></td>
                                </tr>
                            </table>
                            <table class="guiyin2"> 
                                <tr>
                                    <th class="title" rowspan="2">外界环境</th>
                                    <th>内在</th>
                                    <th>外在</th>
                                    <th>稳定</th>
                                    <th>不稳定</th>
                                    <th>可控</th>
                                    <th>不可控</th>
                                </tr>
                                <tr>
                                    <td :class="attribution.externalEnvironment[0] == '内在' ? 'checked' : 'unchecked'"></td>
                                    <td :class="attribution.externalEnvironment[0] == '外在' ? 'checked' : 'unchecked'"></td>
                                    <td :class="attribution.externalEnvironment[1] == '稳定' ? 'checked' : 'unchecked'"></td>
                                    <td :class="attribution.externalEnvironment[1] == '不稳定' ? 'checked' : 'unchecked'"></td>
                                    <td :class="attribution.externalEnvironment[2] == '可控' ? 'checked' : 'unchecked'"></td>
                                    <td :class="attribution.externalEnvironment[2] == '不可控' ? 'checked' : 'unchecked'"></td>
                                </tr>
                            </table>
                            <p class="completion">学生总结：内部、可控、不稳定因素是<span>{{attribution.inherentControllableUnstable}}</span></p>
                        </div>
                        <p class="mained_title"><span>04</span>咨询师评估</p>
                        <div class="evaluation_table" v-if="attributionAssess.length">
                            <table>
                                <tr>
                                    <th>训练前评估</th>
                                    <th>训练后评估</th>
                                    <th>日期</th>
                                </tr>
                                <tr v-for="(item, index) in attributionAssess" :key="index">
                                    <td>{{item.beforeTraining}}</td>
                                    <td>{{item.afterTraining}}</td>
                                    <td>{{item.updatedAt}}</td>
                                </tr>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
            <div class="page_shadow">
                <div class="page pdf-page"> 
                    <div class="content">
                        <h6 class="report_header">
                            学习习惯
                        </h6>
                        <!-- <p class="report_time">最近咨询时间</p> -->
                        <p class="mained_title"><span>01</span>课前预习--小作业</p>
                        <div class="report_mained" v-if="previewBeforeClass.length" v-for="(item, index) in previewBeforeClass" :key="index">
                            <div class="mained_block"></div>
                            <div class="box">
                                <p class="task">
                                    <span>科目：{{item.subject}}</span>
                                    <span>计划预习时间：{{item.planDate}}</span>
                                    <span>实际预习时间：{{item.actualDate}}</span>
                                </p>
                                <div class="finish" v-for="(project, idx) in previewBeforeClass" :key="idx">
                                    <p>项目：<span>{{project.title}}</span></p>
                                    <p>完成：<span>{{project.status}}</span></p>
                                </div>
                                <p class="task_ganwu">我的感悟</p>
                                <p class="detail">{{item.feeling}}</p>
                                <p class="task_youhua">如何优化</p>
                                <p class="detail">{{item.optimize}}</p>
                            </div>
                        </div>
                        <p class="mained_title"><span>02</span>课后复习--小作业</p>
                        <div class="report_mained" v-if="reviewAfterClass.length" v-for="(item, index) in reviewAfterClass" :key="index">
                            <div class="mained_block"></div>
                            <div class="box">
                                <p class="task">
                                    <span>科目：{{item.subject}}</span>
                                    <span>初次学习时间：{{item.firstDate}}</span>
                                </p>
                                <div class="finish_box" v-for="(review, idx) in item.reviewSituation" :key="idx">
                                    <div class="finish">
                                        <p>复习日期：<span>{{review.date}}</span></p>
                                        <p>达成情况：<span>{{review.status}}</span></p>
                                    </div>
                                    <p class="remark">备注：{{item.remark}}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="page_shadow">
                <div class="page pdf-page"> 
                    <div class="content">
                        <h6 class="report_header">
                            学习习惯
                        </h6>
                        <!-- <p class="report_time">最近咨询时间</p> -->
                        <p class="mained_title"><span>03</span>发现黄金时间</p>
                        <div class="lis_time" v-if="primeTime && primeTime.constructor == Object">
                            <ul>
                                <li>
                                    <img src="/imgs/careerManagement/counseling/icon_huangjin.png" alt="">
                                    <div class="detail_box">
                                        <p v-for="(item, index) in primeTime['黄金时间段']" :key="index">{{item}}</p>
                                    </div>
                                </li>
                                <li>
                                    <img src="/imgs/careerManagement/counseling/icon_jingliyiban.png" alt="">
                                    <div class="detail_box">
                                        <p v-for="(item, index) in primeTime['精力一般']" :key="index">{{item}}</p>
                                    </div>
                                </li>
                                <li>
                                    <img src="/imgs/careerManagement/counseling/icon_bijiaokun.png" alt="">
                                    <div class="detail_box">
                                        <p v-for="(item, index) in primeTime['比较困']" :key="index">{{item}}</p>
                                    </div>
                                </li>
                                <li>
                                    <img src="/imgs/careerManagement/counseling/icon_feichangkun.png" alt="">
                                    <div class="detail_box">
                                        <p v-for="(item, index) in primeTime['非常困']" :key="index">{{item}}</p>
                                    </div>
                                </li>
                            </ul>
                        </div>
                        <!-- <p class="mained_title"><span>04</span>周日评估表</p>
                        <div class="evaluation_form">
                            <ul>
                                <li>
                                    <div class="left">（黄金时间段）</div>
                                    <div class="right">
                                        <div>
                                            <p>我安排的任务</p>
                                            <p></p>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div class="left">（精力一般）</div>
                                    <div class="right">
                                        <div>
                                            <p>我安排的任务</p>
                                            <p>这是我安排的任务</p>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div class="left">（比较困）</div>
                                    <div class="right">
                                        <div>
                                            <p>我安排的任务</p>
                                            <p>这是我安排的任务</p>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div class="left">（非常困）</div>
                                    <div class="right">
                                        <div>
                                            <p>我安排的任务</p>
                                            <p>这是我安排的任务</p>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                        <p class="mained_title"><span>05</span>历史记录</p>
                        <div class="history_box">
                            <ul>
                                <li></li>
                            </ul>
                        </div> -->
                    </div>
                </div>
            </div>
            <div class="page_shadow" v-if="learnMemory.lenth">
                <div class="page pdf-page"> 
                    <div class="content">
                        <h6 class="report_header">
                            学习能力
                        </h6>
                        <!-- <p class="report_time">最近咨询时间</p> -->
                        <p class="mained_title"><span>01</span>记忆力训练</p>
                        <div class="report_mained" v-for="(item, index) in learnMemory" :key="index">
                            <div class="box">
                                <p class="title">记忆内容：</p>
                                <p class="detail">{{item.content}}</p>
                            </div>
                            <div class="box">
                                <p class="title">记忆方法：</p>
                                <p class="detail">{{item.method}}</p>
                            </div>
                            <div class="box">
                                <p class="title">记忆效果：</p>
                                <p class="detail">{{item.effect}}</p>
                            </div>
                            <p class="report_time">{{item.date}}</p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="page_shadow">
                <div class="page pdf-page"> 
                    <div class="content">
                        <h6 class="report_header">
                            学习习惯
                        </h6>
                        <!-- <p class="report_time">最近咨询时间</p> -->
                        <p class="mained_title"><span></span>养成好习惯</p>
                        <div class="report_mained" v-if="developGoodHabits.length" v-for="(item, index) in developGoodHabits" :key="index">
                            <div class="mained_block"></div>
                            <div class="box">
                                <p class="task">
                                    <span>习惯：{{item.habit}}</span>
                                    <span>时间：{{item.date}}</span>
                                    <span>小目标： {{}}</span>
                                </p>
                                <div v-for="(detail, idx) in item.detail" :key="idx">
                                    <p class="task_ganwu">我的感悟{{idx + 1}}</p>
                                    <p class="detail">{{detail.experience}}</p>
                                    <p class="task_youhua">奖励{{idx + 1}}</p>
                                    <p class="detail">{{detail.reward}}</p>
                                </div>
                                <div class="all_reward">
                                    <p class="reward_title">总奖励</p>
                                    <p>{{item.reward}}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>






            <div class="page_shadow">
                <div class="page pdf-page"> 
                    <div class="content">
                        <h6 class="report_header">
                            情绪管理
                        </h6>
                        <!-- <p class="report_time">最近咨询时间</p> -->
                        <p class="mained_title"><span>01</span>自我觉察应用表</p>
                        <div class="report_mained" v-for="(item, index) in moodSelfAwareness" :key="index">
                            <div class="box">
                                <p class="title">事件：</p>
                                <p class="detail">{{item.event}}</p>
                            </div>
                            <div class="box">
                                <p class="title">情绪觉察：</p>
                                <p class="detail">{{item.emotionalAwareness}}</p>
                            </div>
                            <div class="box">
                                <p class="title">你的对策：</p>
                                <p class="detail">{{item.countermeasures}}</p>
                            </div>
                            <p class="report_time">{{item.date}}</p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="page_shadow">
                <div class="page pdf-page"> 
                    <div class="content">
                        <h6 class="report_header">
                            情绪管理
                        </h6>
                        <!-- <p class="report_time">最近咨询时间</p> -->
                        <p class="mained_title"><span>02</span>练习和情绪对话</p>
                        <div class="report_mained" v-for="(item, index) in moodDialogue" :key="index">
                            <div class="box">
                                <p class="title">内容：</p>
                                <p class="detail">{{item.content}}</p>
                            </div>
                            <p class="report_time">{{item.date}}</p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="page_shadow">
                <div class="page pdf-page"> 
                    <div class="content">
                        <h6 class="report_header">
                            情绪管理
                        </h6>
                        <!-- <p class="report_time">最近咨询时间</p> -->
                        <p class="mained_title"><span>03</span>用ABC理论管理情绪的计划</p>
                        <div class="report_mained" v-for="(item, index) in moodWithAbc" :key="index">
                            <div class="box">
                                <p class="title">负面情绪事件：</p>
                                <p class="detail">{{item.event}}</p>
                            </div>
                            <div class="box">
                                <p class="title">负面情绪事件：</p>
                                <p class="detail">{{item.experience}}</p>
                            </div>
                            <div class="box">
                                <p class="title">管理调节(学生)：</p>
                                <p class="detail">{{item.regulate}}</p>
                            </div>
                            <div class="box">
                                <p class="title">评估优化(咨询师)：</p>
                                <p class="detail">{{item.evaluate}}</p>
                            </div>
                            <p class="report_time">{{item.date}}</p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="page_shadow">
                <div class="page pdf-page"> 
                    <div class="content">
                        <h6 class="report_header">
                            人际关系
                        </h6>
                        <!-- <p class="report_time">最近咨询时间</p> -->
                        <p class="mained_title"><span>01</span>咨询师记录</p>

                        <div class="report_mained"  v-for="(item, index) in interpersonal" :key="index">
                            <div class="box">
                                <p class="title">团辅前评估</p>
                                <p class="detail">{{item.groupBefore}}</p>
                            </div>
                            <div class="box">
                                <p class="title">团辅后评估</p>
                                <p class="detail">{{item.groupAfter}}</p>
                            </div>
                            <p class="report_time">{{item.date}}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="get_pdf">
            <div class="inner">
                <!-- <div class="btn_pdf" v-on:click="getPdf()">下载报告</div> -->
            </div>
        </div>
    </div>
</template>
<style type="text/css" lang='less' scoped>
.evaluation_report {
    width: 100%;
    padding-top: 20px;
    padding-bottom: 20px;
    background-color: #E8E8E8;
    * {
        font-size: 16px;
        color: #333;
    }
    .get_pdf {
        height: 0px;
        width: 100%;
        position: fixed;
        top: 30%;
        .inner {
            width: 900px;
            margin: 0 auto;
            position: relative;
            .btn_pdf {
                position: absolute;
                padding: 5px 10px;
                right: -40px;
                width: 20px;
                text-align: center;
                background-color: #2c8ffc;
                color: #fff;
                cursor: pointer;
                border-radius: 5px;
            }
        }
    }
    .pdf {
        width: 900px;
        margin: 0 auto;
        background-color: #fff;
        .page_shadow{
            -webkit-box-shadow: 0px 0px 10px #666;
            -ms-box-shadow: 0px 0px 10px #666;
            -moz-box-shadow: 0px 0px 10px #666;
            height: 1300px;
            width: 900px;
            margin-bottom: 20px;
        }
        .page_cover {
            height: 1230px;
            padding-top: 70px;
            background: url(/imgs/careerManagement/diagnosis/reportCover.png);
            background-size: 900px 1300px;
            .header {
                padding-top: 320px;
                margin-bottom: 50px;
                h3 {
                    line-height: 70px;
                    font-size: 56px;
                    padding-left: 220px;
                    color: #fff;
                    margin-bottom: 30px;
                }
                .detail {
                    line-height: 30px;
                    text-align: center;
                    font-size: 24px;
                    color: #fff;
                }
            }
            .main {
                height: 246px;
                width: 440px;
                margin: 0 auto;
                p {
                    line-height: 60px;
                    font-size: 20px;
                    font-weight: 600;
                    color: #000;
                    color: #fff;
                }
            }
            .bottom {
                padding-top: 50px;
                color: #fff;
                p {
                    line-height: 30px;
                    text-align: center;
                    font-size: 16px;
                    color: #fff;
                }
            }
        }
        .page {
            height: 1150px;
            padding: 120px 100px 30px 100px;
            background: url(/imgs/selfAssessment/report_bg.png) no-repeat;
            background-size: 900px 1300px;
            background-color: #fff;
            position: relative;
            // 大标题
            .header {
                line-height: 50px;
                color: #2E75B6;
                font-size: 30px;
                text-align: center;
                span {
                    color: #2E75B6;
                    font-size: 30px;
                }
            }
            .header_detail {
                text-align: center;
                line-height: 60px;
                color: #2E75B6;
            }
            .report_header {
                margin-bottom: 20px;
                line-height: 50px;
                color: #2E75B6;
                font-size: 24px;
                padding-left: 100px;
                background: url('/imgs/careerManagement/growthArchive/icon_zhuyiliceping.png') no-repeat 0px center;
                background-size: 80px 30px;
            }
            .echarts {
                border: 1px solid #2E75B6;
                border-radius: 10px;
                margin-bottom: 20px;
            }
            .content {
                // padding: 30px 100px;
                .big_title_box {
                    display: flex;
                    line-height: 50px;
                    .big_title {
                        position: relative;
                        padding-left: 70px;
                        padding-right: 20px;
                        span {
                            height: 50px;
                            font-size: 24px;
                            line-height: 50px;
                            // font-weight: 600;
                            text-align: center;
                            width: 30px;
                            position: absolute;
                            left: 0px;
                            top:  0px;
                            color: #2E75B6;
                        }   
                        font-size: 20px;
                        color: #000;
                    }
                    .line {
                        flex: 1;
                        border-top: 1px dashed #000;
                        margin: auto 0;
                    }
                    .page_number {
                        padding-left: 10px;
                        font-size: 18px;
                    }
                }
                .foreword_detail {
                    p {
                        line-height: 24px;
                        text-indent: 2em;
                        font-size: 16px;
                        color: #333;
                        margin-bottom: 10px;
                    }
                }
                .foreword_footer {
                    background-color: #DEEBF7;
                    padding: 20px;
                    border-radius: 10px;
                    .title {
                        font-size: 18px;
                        font-weight: 600;
                        line-height: 40px;
                    }
                    p {
                        line-height: 24px;
                        font-size: 16px;
                        margin-bottom: 5px;
                    }
                }
                .warmtips_header {
                    font-size: 16px;
                    line-height: 24px;
                    margin-bottom: 20px;
                }
                .tips_box {
                    margin-bottom: 30px;
                    .tips_title {
                        font-size: 18px;
                        color: #2E75B6;
                        line-height: 30px;
                        margin-bottom: 5px;
                    }
                    p {
                        line-height: 30px;
                        font-size: 16px;
                        color: #333;

                    }
                }
                .resule_header {
                    font-size: 16px;
                    line-height: 44px;
                }
                .resule_table {
                    margin-bottom: 40px;
                    .completion {
                        letter-spacing: 1px;
                        line-height: 30px;
                        font-weight: 600;
                        margin-bottom: 20px;
                        span {
                            color: #4F7CBD;
                        }
                    }
                    ul {
                        li {
                            margin-bottom: 20px;
                            .lis_title {
                                line-height: 26px;
                                margin-bottom: 5px;
                                font-weight: 600;
                                display: flex;
                                align-items: center;
                                .color_box {
                                    display: inline-block;
                                    width: 25px;
                                    height: 16px;
                                    margin-right: 5px;
                                    line-height: 26px;
                                    background-color: #71B15B;
                                }
                                .weidu {
                                    margin-right: 30px;
                                }
                                .defen {
                                    color: #C55A11;
                                }
                            }
                            .lis_detail {
                                padding-left: 32px;
                                font-weight: 600;
                                margin-bottom: 5px;
                            }
                            .detail {
                                padding-left: 32px;
                            }   
                            &:nth-child(1) {
                                .color_box {
                                    background-color: #71B15B;
                                }
                            }
                            &:nth-child(2) {
                                .color_box {
                                    background-color: #2E75B6;
                                }
                            }
                            &:nth-child(3) {
                                .color_box {
                                    background-color: #3E9B7C;
                                }
                            }
                            &:nth-child(4) {
                                .color_box {
                                    background-color: #ECAC5C;
                                }
                            }
                        }
                    }
                }
                .circle_title {
                    line-height: 30px;
                    font-weight: 600;
                    margin-bottom: 20px;
                }
                .circle_box {
                    margin-bottom: 20px;
                    display: flex;
                    justify-content: space-between;
                    .circle {
                        position: relative;
                        .box {
                            position: absolute;
                            width: 150px;
                            top: 50%;
                            left: 50%;
                            margin-left: -75px;
                            margin-top: -30px;
                            .box_title {
                                letter-spacing: 1px;
                                line-height: 24px;
                                font-weight: 600;
                                text-align: center;
                            }
                            .num {
                                line-height: 30px;
                                font-size: 18px;
                                font-weight: 600;
                                text-align: center;
                            }
                        
                        }
                    }
                    .circle1 {
                        .box_title {
                            
                        }
                        .num {
                            color: #1A8779;
                        }
                    }
                    .circle2 {
                        .box_title {
                            
                        }
                        .num {
                            color: #F19149;
                        }
                    }
                    .circle3 {
                        .box_title {
                            
                        }
                        .num {
                            color: #056C9E;
                        }
                    }
                    .circle4 {
                        .box_title {
                            
                        }
                        .num {
                            color: #056C9E;
                        }
                    }
                    .title {
                        font-weight: 600;
                    }

                    .fenxi {
                        margin-bottom: 10px;
                        span {
                            color: #199517;
                            font-weight: 600;
                        }
                    }
                }
                .echarts_box {
                    .title {
                        margin-bottom: 20px;
                        font-weight: 600;
                    }
                    .fenxi {
                        margin-bottom: 10px;
                        span {
                            color: #2E75B6;
                            font-weight: 600;
                        }
                    }
                    .detail {
                        padding-left: 30px;
                        margin-bottom: 30px;
                    }
                }
                .report_time {
                    line-height: 40px;
                    padding-left: 30px;
                    font-size: 16px;
                    font-weight: 600;
                    margin-bottom: 10px;
                    background: url('/imgs/careerManagement/growthArchive/icon_rili.png') no-repeat 0px center;
                }
                .lis_time {
                    padding-bottom: 20px;
                    ul{
                        display: flex;
                        justify-content: space-between;
                        li {
                            width: 160px;
                            background-color: #f8f8fb;
                            img {
                                width: 100%;
                            }
                            .detail_box {
                                text-align: center;
                                padding: 10px 0px;
                                p {
                                    line-height: 24px;
                                }
                            }
                        }
                    }
                }
                .mained_title {
                    display: flex;
                    align-items: center;
                    color: #2E75B6;
                    span {
                        display: inline-block;
                        width: 24px;
                        height: 24px;
                        line-height: 24px;
                        text-align: center;
                        background-color: #2E75B6;
                        color: #fff;
                        border-radius: 50%;
                        margin-right: 10px;
                    }
                    line-height: 40px;
                    font-size: 16px;
                    font-weight: 600;
                    margin-bottom: 10px;
                }   
                .report_guiyin {
                    table {
                        margin-bottom: 20px;
                        tr {
                            line-height: 40px;
                            height: 40px;
                            .title {
                                width: 20%;
                                color: #fff;
                                text-align: left;
                                padding-left: 20px;
                            }
                            th {
                                border: 1px solid #dedede;
                                text-align: center;
                            }
                            td {
                                border: 1px solid #dedede;
                                text-align: center;

                            }
                            .checked {
                                background: url(/imgs/careerManagement/growthArchive/icon_duigoulan.png) no-repeat center center;
                            }
                            .unchecked {

                            }
                        }
                    }
                    .guiyin1 {
                        .title {
                            background-color: #2E75B6;
                        }
                    }
                    .guiyin2 {
                        .title {
                            background-color: #4C92C0;
                        }
                    }
                    .guiyin3 {
                        .title {
                            background-color: #66AACF;
                        }
                    }
                    .guiyin4 {
                        .title {
                            background-color: #83C3DF;
                        }
                    }
                    .guiyin5 {
                        .title {
                            background-color: #BFCA8E;
                        }
                    }
                    .guiyin6 {
                        .title {
                            background-color: #A3C066;
                        }
                    }
                }
                .evaluation_table {
                    table {
                        margin-bottom: 20px;
                        tr {
                            line-height: 40px;
                            th {
                                border: 1px solid #dedede;
                                padding-left: 20px;
                                background-color: #2E75B6;
                                color: #fff;
                            }
                            td {
                                border: 1px solid #dedede;
                                padding-left: 20px;
                            }
                        }
                    }
                }
                .report_mained {
                    padding-left: 34px;
                    position: relative;
                    border-bottom: 1px dashed #eaeaea;
                    .mained_block {
                        position: absolute;
                        top: 6px;
                        left: 0px;
                        width: 24px;
                        height: 14px;
                        background-color: #2E75B6;

                    }
                    .box_jili {
                        padding-bottom: 20px;
                        .title {
                            padding-left: 32px;
                            margin-left: -34px;
                            line-height: 30px;
                            font-weight: 600;
                            background: url('/imgs/careerManagement/growthArchive/icon_jiantou.png') no-repeat 5px center;
                        }
                        .detail {
                            line-height: 24px;
                            color: #666;
                            font-size: 14px;
                        }
                    }
                    .box {
                        padding-bottom: 10px;
                        .title {
                            line-height: 30px;
                            font-weight: 600;
                        }
                        .detail {
                            line-height: 24px;
                            color: #666;
                            font-size: 14px;
                            margin-bottom: 5px;
                        }
                        .task {
                            line-height: 24px;
                            display: flex;
                            justify-content: space-between;
                            font-weight: 600;
                            margin-bottom: 5px;
                        }
                        .finish_box {
                            margin-bottom: 20px;
                        }
                        .finish {
                            overflow: hidden;
                            margin-bottom: 5px;
                            p {
                                float: left;
                                min-width: 150px;
                                margin-right: 30px;
                                font-weight: 600;
                                font-size: 14px;
                                span {
                                    font-size: 14px;
                                    font-weight: 600;
                                    color: #2973B8;
                                }
                            }
                        }
                        .task_ganwu {
                            font-weight: 600;
                            padding-left: 20px;
                            font-size: 14px;
                            line-height: 24px;
                            background:url('/imgs/careerManagement/growthArchive/icon_xin.png') no-repeat 0px center;
                        }
                        .task_youhua {
                            font-weight: 600;
                            padding-left: 20px;
                            font-size: 14px;
                            line-height: 24px;
                            background:url('/imgs/careerManagement/growthArchive/icon_xingxing.png') no-repeat 0px center;
                        }
                        .remark {
                            font-weight: 600;
                            font-size: 14px;
                        }
                        .all_reward {
                            padding: 20px;
                            border-radius: 5px;
                            background-color: #F2F2F2;
                            .reward_title {
                                line-height: 30px;
                                padding-left: 30px;
                                height: 30px;
                                background:url('/imgs/careerManagement/growthArchive/reward.png') no-repeat 0px center;
                            }
                        }
                    }
                }
                .history_box {
                    padding-top: 20px;
                    .title {
                        line-height: 40px;
                        margin-bottom: 10px;
                        color: #2E75B6;
                        font-weight: 600;
                    }
                    table {
                        max-height: 205px;
                        overflow: hidden;
                        tr {
                            th {
                                background-color: #2E75B6;
                                line-height: 40px;
                                border: 1px solid #fff;
                                padding-left:20px;
                                color: #fff;
                                &:first-child {
                                    width: 70%;
                                }
                            }
                            td {
                                background-color: #F9F9FA;
                                line-height: 40px;
                                color: #333;
                                padding-left:20px;
                            }
                        }
                    }
                    .history_lis {
                        display: flex;
                        justify-content: flex-start;
                        flex-wrap: wrap;
                        li {
                            box-sizing: border-box;
                            border: 1px solid #fff;
                            width: 33%;
                            line-height: 40px;
                            background-color: #F9F9FA;
                            padding-left: 20px;
                        }
                    }
                }
                .evaluation_form {
                    padding-bottom: 20px;
                    ul {
                        li {
                            display: flex;
                            .left {
                                width: 40%;
                                padding-left: 20px;
                                color: #fff;
                            }
                            .right {
                                width: 60%;
                                padding: 10px 20px;
                                display: flex;
                                align-items: center;
                            }
                            &:nth-child(1) {
                                .left {
                                    background-color: #2E75B6;
                                }
                            }
                            &:nth-child(2) {
                                .left {
                                    background-color: #4C92C0;
                                }
                            }
                            &:nth-child(3) {
                                .left {
                                    background-color: #A3C066;
                                }
                            }
                            &:nth-child(4) {
                                .left {
                                    background-color: #BFCA8E;
                                }
                            }
                        }
                    }
                }

            }
            .big_page_number {
                position: absolute;
                bottom: 0px;
                left: 0px;
                width: 100%;
                line-height: 40px;
                font-size: 20px;
                font-weight: 600;
                color: #666;
                text-align: center;
            }
        }
    }
}
</style>
<script>
// 引用jquery写的圆环插件
import circleChart from '../../../../public/statics/js/circleChart.min.js'
export default {
    props: [],
    data() {
        return {
            htmlTitle: '',
            reportData: null,
            firstInterview: null,// 初步访谈
            // 测评结果/
            assessReport1: null,//成就目标定向测评
            assessReport2: null,//时间管理测评
            assessReport3: null,//学习动机测评
            assessReport4: null,//学习习惯测评
            assessReport5: null,//情绪管理测评
            assessReport6: null,//人际关系综合诊断测评
            assessReport7: null,//注意力测评
            assessmentInfo: null,// 评估与诊断
            assessmentInfoList: [],//评估与诊断记录
            planConsultTarget: null,//咨询目标
            planConsultScheme: null,//咨询方案
            planConsultInfo: null,//咨询记录


            coach: null,//辅导
            intensiveTraining: [],//强化训练 列表
            selfMotivationNewest: null,//辅导 最新 自我激励训练
            selfMotivation: [],//辅导 自我激励训练 列表
            attribution: null,//获取归因训练详情
            attributionAssess: [],//生涯管理 - 学业规划 - 学习动机 归因训练 - 评估 列表
            previewBeforeClass: [],//生涯管理 - 学业规划 - 辅导 - 学习习惯  课前预习--小作业 列表
            reviewAfterClass: [],//生涯管理 - 学业规划 - 辅导 - 学习习惯  课后复习--小作业 列表
            primeTime: null,//发现黄金时间详情
            sundayAssessmentInfo: null,//发现黄金时间详情
            sundayAssessment: null,//生涯管理 - 学业规划 - 辅导 - 学习习惯  周日评估表 详情
            developGoodHabits: null,//生涯管理 - 学业规划 - 辅导 - 学习习惯 养成好习惯 列表
            attentionTrain: null,//注意力结果列表
            learnThought: null,//学习能力 - 思维能力训练 - 列表
            learnMemory: [],//学习能力 - 记忆力训练 - 列表
            moodSelfAwareness: [],//情绪管理 - 自我觉察应用表 - 列表
            moodDialogue: [],//情绪管理 - 和情绪对话 - 列表
            moodWithAbc: [],//情绪管理 - 用ABC理论管理情绪的计划 - 列表
            interpersonal: [],//列表 - 人际关系
        }
    },
    methods: {
        // 获取测试结果
        goDetail(url) {
            let {href} = this.$router.resolve({
                path: url
            })
            window.open(href, '_blank');
        },
        scrollToView(id) {
            document.getElementById(id).scrollIntoView({
                block: 'start',
                inline: 'nearest',
                behavior: 'smooth'
            })
        },
        createEcharts(el, xAxisData, seriesData) {
            var el = el;
            var xAxisData = xAxisData;
            var seriesData = seriesData;
            // 基于准备好的dom，初始化echarts实例
            var myChart = this.$echarts.init(document.getElementById(el));
            // 指定图表的配置项和数据
            var option = {
                title: {
                    // text: '维度得分'
                    text: ''
                },
                tooltip: {},
                legend: {
                    data:[]
                },
                xAxis: {
                    type: 'category',
                    data: xAxisData
                },
                yAxis: {
                    max: 5,
                    splitNumber: 5,
                    Interval: 1,
                    type: 'value',

                },
                series: [{
                    name: '维度分析',
                    type: 'bar',
                    data: seriesData,
                    itemStyle: {
                        normal: {
            　　　　　　　　//这里是重点
                            color: function(params) {
                                //注意，如果颜色太少的话，后面颜色不会自动循环，最好多定义几个颜色
                                var colorList = ['#71B15B','#2E75B6', '#3E9B7C', '#ECAC5C'];
                                return colorList[params.dataIndex]
                            }
                        }
                    },
                    label: {
                        show: true,
                        color: '#fff',
                    }
                }],

                barCategoryGap: '60%',
                // color: '#2c8ffc'
            };

            // 使用刚指定的配置项和数据显示图表。
            myChart.setOption(option);
        },
        // 查看成长档案
        viewReport() {
            var token = window.sessionStorage.getItem('ymtxToken');
            var _this = this;
            this.$ajax.post(this.G_uri + '/careerGrowthReport/viewReport', {
                id: this.$route.query.id
                },{
                    headers:{
                        token: token
                    }
                })
                // 监听数据返回
                .then(function(res) {
                    _this.reportData = res.data.data;
                })
                .catch(function(error) {
                    console.log(error)
                })
        },
        
        addEcharts(el,reportScoreData,aver) {   
            let xAxisData = [];
            let seriesData = [];
            let textStyle = {
                fontSize: 16,
                color: '#000'
            }
            for (var item in reportScoreData){ 
                let obj = {};
                obj.value = item;
                obj.textStyle = textStyle;
                xAxisData.push(obj);
                seriesData.push(reportScoreData[item][aver]);
            }
            console.log(xAxisData);
            console.log(seriesData);
            this.$nextTick(() => {
                this.createEcharts(el,xAxisData, seriesData);
            })  
        },
        setCircle() {
            let studentData = this.assessReport2.studentData.list;
            let avgScore1 = studentData['时间价值感'].avgScore;
            let avgScore2 = studentData['时间监控观'].avgScore;
            let avgScore3 = studentData['时间效能感'].avgScore;
            $("#circle1").circleChart({
                size: 200,
                // widthRatio: 0.3,
                value: avgScore1/5 * 100,
                counterclockwise: true,
                startAngle: -75,
                color: "#1A8779",
                backgroundColor: "#EEEEEE",
                text: false,
                onDraw: function(el, circle) {
                    circle.text(Math.round(circle.value) + "%");
                }
            });
            $("#circle2").circleChart({
                size: 200,
                value: avgScore2/5 * 100,
                counterclockwise: true,
                startAngle: -75,
                color: "#F19149",
                backgroundColor: "#EEEEEE",
                text: false,
                onDraw: function(el, circle) {
                    circle.text(Math.round(circle.value/100*25) + "/25");
                }
            });
            $("#circle3").circleChart({
                size: 200,
                value: avgScore3/5 * 100,
                counterclockwise: true,
                startAngle: -75,
                color: "#056C9E",
                backgroundColor: "#EEEEEE",
                text: false,
                onDraw: function(el, circle) {
                    circle.text(Math.round(circle.value/100*25) + "/25");
                }
            });
        },
        setCircle4() {
            let studentData = this.assessReport4.studentData;
            let avgScore1 = studentData['课前准备'].avgScore;
            let avgScore2 = studentData['课上听课'].avgScore;
            let avgScore3 = studentData['课后学习'].avgScore;
            $("#circle4_1").circleChart({
                size: 200,
                value: avgScore1/5 * 100,
                counterclockwise: true,
                startAngle: -75,
                color: "#1A8779",
                backgroundColor: "#EEEEEE",
                text: false,
                onDraw: function(el, circle) {
                    circle.text(Math.round(circle.value) + "%");
                }
            });
            $("#circle4_2").circleChart({
                size: 200,
                value: avgScore2/5 * 100,
                counterclockwise: true,
                startAngle: -75,
                color: "#F19149",
                backgroundColor: "#EEEEEE",
                text: false,
                onDraw: function(el, circle) {
                    circle.text(Math.round(circle.value/100*25) + "/25");
                }
            });
            $("#circle4_3").circleChart({
                size: 200,
                value: avgScore3/5 * 100,
                counterclockwise: true,
                startAngle: -75,
                color: "#056C9E",
                backgroundColor: "#EEEEEE",
                text: false,
                onDraw: function(el, circle) {
                    circle.text(Math.round(circle.value/100*25) + "/25");
                }
            });
        },
        setCircle5() {
            let studentData = this.assessReport5.studentData.list;
            let obj = {};
            let idx = 0;
            for(let i in studentData) {
                idx ++;
                obj['avgScore' + idx] = studentData[i].score;
                obj['scoreNum' + idx] = studentData[i].scoreNum;
            }
            $("#circle5_1").circleChart({
                size: 180,
                value: obj.avgScore1/(obj.scoreNum1 * 5 )* 100,
                counterclockwise: true,
                startAngle: -75,
                color: "#1A8779",
                backgroundColor: "#EEEEEE",
                text: false,
                onDraw: function(el, circle) {
                    circle.text(Math.round(circle.value) + "%");
                }
            });
            $("#circle5_2").circleChart({
                size: 180,
                value: obj.avgScore2/(obj.scoreNum2 * 5) * 100,
                counterclockwise: true,
                startAngle: -75,
                color: "#F19149",
                backgroundColor: "#EEEEEE",
                text: false,
                onDraw: function(el, circle) {
                    circle.text(Math.round(circle.value/100*25) + "/25");
                }
            });
            $("#circle5_3").circleChart({
                size: 180,
                value: obj.avgScore3/(obj.scoreNum3 * 5) * 100,
                counterclockwise: true,
                startAngle: -75,
                color: "#056C9E",
                backgroundColor: "#EEEEEE",
                text: false,
                onDraw: function(el, circle) {
                    circle.text(Math.round(circle.value/100*25) + "/25");
                }
            });
            $("#circle5_4").circleChart({
                size: 180,
                value: obj.avgScore4/(obj.scoreNum4 * 5) * 100,
                counterclockwise: true,
                startAngle: -75,
                color: "#056C9E",
                backgroundColor: "#EEEEEE",
                text: false,
                onDraw: function(el, circle) {
                    circle.text(Math.round(circle.value/100*25) + "/25");
                }
            });
        }
    },
    watch: {
        reportData() {
            this.firstInterview = this.reportData.firstInterview;
            this.assessReport1 = this.reportData.assessReport[1].report;
            this.assessReport2 = this.reportData.assessReport[2].report;
            this.assessReport3 = this.reportData.assessReport[3].report;
            this.assessReport4 = this.reportData.assessReport[4].report;
            this.assessReport5 = this.reportData.assessReport[5].report;
            this.assessReport6 = this.reportData.assessReport[6].report;
            this.assessReport7 = this.reportData.assessReport[7].report;
            this.assessmentInfo = this.reportData.assessmentInfo;
            this.assessmentInfoList = this.reportData.assessmentInfoList;
            this.planConsultTarget = this.reportData.planConsultTarget;
            this.planConsultScheme = this.reportData.planConsultScheme;
            // this.planConsultLog = this.reportData.planConsultLog;
            this.planConsultInfo = this.reportData.planConsultInfo;
            this.coach = this.reportData.coach;

            this.intensiveTraining = this.reportData.coach.intensiveTraining;
            this.selfMotivationNewest = this.reportData.coach.selfMotivationNewest;
            this.selfMotivation = this.reportData.coach.selfMotivation;
            this.attribution = this.reportData.coach.attribution;
            this.attributionAssess = this.reportData.coach.attributionAssess;
            this.previewBeforeClass = this.reportData.coach.previewBeforeClass;
            this.reviewAfterClass = this.reportData.coach.reviewAfterClass;
            this.primeTime = this.reportData.coach.primeTime;
            this.sundayAssessmentInfo = this.reportData.coach.sundayAssessmentInfo;
            this.sundayAssessment = this.reportData.coach.sundayAssessment;
            this.developGoodHabits = this.reportData.coach.developGoodHabits;
            this.attentionTrain = this.reportData.coach.attentionTrain;
            this.learnThought = this.reportData.coach.learnThought;
            this.learnMemory = this.reportData.coach.learnMemory;
            this.moodSelfAwareness = this.reportData.coach.moodSelfAwareness;
            this.moodDialogue = this.reportData.coach.moodDialogue;
            this.moodWithAbc = this.reportData.coach.moodWithAbc;
            this.moodDialogue = this.reportData.coach.moodDialogue;
            this.interpersonal = this.reportData.coach.interpersonal;
   //       let reportScoreData = this.reportData.report.reportScoreData;
   //       let xAxisData = [];
   //       let seriesData = [];
   //       let textStyle = {
         //        fontSize: 16,
         //        color: '#000'
         //    }
   //       // let _this = this;
   //       for (var key in reportScoreData){
   //           let obj = {};
   //           obj.textStyle = textStyle;
   //           obj.value = key;
   //           xAxisData.push(obj);
   //           seriesData.push(reportScoreData[key].average);
            // }
            // this.xAxisData = xAxisData;
            // this.seriesData = seriesData;
            // this.$nextTick(() => {
            //  this.createEcharts();
            // })
            this.$nextTick(() => {
                this.setCircle();
            })
        },
        assessReport1() {
            let el = 'echarts1';
            let aver = 'average';
            let data = this.assessReport1.reportScoreData;
            this.addEcharts(el,data,aver);
        },
        assessReport2() {
            let el1 = 'echarts2_1';
            let el2 = 'echarts2_2';
            let el3 = 'echarts2_3';
            let aver = 'avgScore';
            let data1 = this.assessReport2.studentData.list['时间价值感'].list;
            let data2 = this.assessReport2.studentData.list['时间监控观'].list;
            let data3 = this.assessReport2.studentData.list['时间效能感'].list;
            this.addEcharts(el1,data1,aver);
            this.addEcharts(el2,data2,aver);
            this.addEcharts(el3,data3,aver);
        },
        assessReport3() {
            let el = 'echarts3';
            let aver = 'score';
            let data = this.assessReport3.reportScoreData;
            this.addEcharts(el,data,aver);
        },
        assessReport4() {
            this.$nextTick(() => {
                this.setCircle4();
            })
        },
        assessReport5() {
            this.$nextTick(() => {
                this.setCircle5();
            })
        },
    },
    created() {
        this.viewReport();
        // this.getLastReport();
    },
    mounted() {

    }
}
</script>
