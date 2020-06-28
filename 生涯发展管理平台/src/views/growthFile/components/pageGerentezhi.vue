<template>
	<div>
		<div class="page_content pageGerentezhi" style="height: 1200px;">
			<h5 class="header">
				<span>Part2</span>个人特质
			</h5>
			<h6 class="small_title">人格特征</h6>	
			<div class="echarts_box">
			    <div class="page-5-biao  rgtx-biao-1" v-if="personality">
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
	                            :style="{marginLeft:-xgtxFoData1-1.5+'px',width:xgtxFoData1+'px'}" class="active_left"></li>
	                        <li v-if="xgtxFoData1<0" :style="{width:-xgtxFoData1+'px'}" class="active_right"></li>
	                        <li v-if="xgtxFoData1==0" :style="{width:4+'px',marginLeft:-3.5+'px'}"></li>
	                        <li v-if="xgtxFoData2>0"
	                            :style="{marginLeft:-xgtxFoData2-1.5+'px',width:xgtxFoData2+'px'}" class="active_left"></li>
	                        <li v-if="xgtxFoData2<0" :style="{width:-xgtxFoData2+'px'}" class="active_right"></li>
	                        <li v-if="xgtxFoData2==0" :style="{width:4+'px',marginLeft:-3.5+'px'}"></li>
	                        <li v-if="xgtxFoData3>0"
	                            :style="{marginLeft:-xgtxFoData3-1.5+'px',width:xgtxFoData3+'px'}" class="active_left"></li>
	                        <li v-if="xgtxFoData3<0" :style="{width:-xgtxFoData3+'px'}" class="active_right"></li>
	                        <li v-if="xgtxFoData3==0" :style="{width:4+'px',marginLeft:-3.5+'px'}"></li>
	                        <li v-if="xgtxFoData4>0"
	                            :style="{marginLeft:-xgtxFoData4-1.5+'px',width:xgtxFoData4+'px'}" class="active_left"></li>
	                        <li v-if="xgtxFoData4<0" :style="{width:-xgtxFoData4+'px'}" class="active_right"></li>
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
			<h6 class="small_title">认知潜能</h6>
	        <div class="page-5-biao page-19-biao"
	             style="width:100%; margin-bottom: 30px;margin-top:30px;float:left;">
	            <img src="/imgs/growthFile/page-19-img.png" alt="">
	            <div class="biao-content">
	                <div class="score-item">
	                    <div class="score-item-text">{{coreNormData1.score}}</div>
	                    <div class="score-line-wrapper">
	                        <div class="line-score b-greened"
	                             :style="{height:coreNormData1.score/200*370+'px'}">
	                            <div class="line-score-norm"
	                                 :style="{bottom:coreNormData1.lnorm/200*370+'px',height:(coreNormData1.rnorm-coreNormData1.lnorm)/200*370+'px'}"></div>
	                        </div>
	                    </div>
	                </div>

	                <div class="score-item">
	                    <div class="score-item-text">{{coreNormData2.score}}</div>
	                    <div class="score-line-wrapper">
	                        <div class="line-score b-greened"
	                             :style="{height:coreNormData2.score/200*370+'px'}">
	                            <div class="line-score-norm"
	                                 :style="{bottom:coreNormData2.lnorm/200*370+'px',height:(coreNormData2.rnorm-coreNormData2.lnorm)/200*370+'px'}"></div>
	                        </div>
	                    </div>
	                </div>

	                <div class="score-item">
	                    <div class="score-item-text">{{coreNormData3.score}}</div>
	                    <div class="score-line-wrapper">
	                        <div class="line-score b-greened"
	                             :style="{height:coreNormData3.score/200*370+'px'}">
	                            <div class="line-score-norm"
	                                 :style="{bottom:coreNormData3.lnorm/200*370+'px',height:(coreNormData3.rnorm-coreNormData3.lnorm)/200*370+'px'}"></div>
	                        </div>
	                    </div>
	                </div>

	                <div class="score-item">
	                    <div class="score-item-text">{{coreNormData4.score}}</div>
	                    <div class="score-line-wrapper">
	                        <div class="line-score b-greened"
	                             :style="{height:coreNormData4.score/200*370+'px'}">
	                            <div class="line-score-norm"
	                                 :style="{bottom:coreNormData4.lnorm/200*370+'px',height:(coreNormData4.rnorm-coreNormData4.lnorm)/200*370+'px'}"></div>
	                        </div>
	                    </div>
	                </div>

	                <div class="score-item">
	                    <div class="score-item-text">{{coreNormData5.score}}</div>
	                    <div class="score-line-wrapper">
	                        <div class="line-score b-greened"
	                             :style="{height:coreNormData5.score/200*370+'px'}">
	                            <div class="line-score-norm"
	                                 :style="{bottom:coreNormData5.lnorm/200*370+'px',height:(coreNormData5.rnorm-coreNormData5.lnorm)/200*370+'px'}"></div>
	                        </div>
	                    </div>
	                </div>

	                <div class="score-item">
	                    <div class="score-item-text">{{coreNormData6.score}}</div>
	                    <div class="score-line-wrapper">
	                        <div class="line-score b-greened"
	                             :style="{height:coreNormData6.score/200*370+'px'}">
	                            <div class="line-score-norm"
	                                 :style="{bottom:coreNormData6.lnorm/200*370+'px',height:(coreNormData6.rnorm-coreNormData6.lnorm)/200*370+'px'}"></div>
	                        </div>
	                    </div>
	                </div>

	                <div class="score-item">
	                    <div class="score-item-text">{{coreNormData7.score}}</div>
	                    <div class="score-line-wrapper">
	                        <div class="line-score b-greened"
	                             :style="{height:coreNormData7.score/200*370+'px'}">
	                            <div class="line-score-norm"
	                                 :style="{bottom:coreNormData7.lnorm/200*370+'px',height:(coreNormData7.rnorm-coreNormData7.lnorm)/200*370+'px'}"></div>
	                        </div>
	                    </div>
	                </div>

	                <div class="score-item">
	                    <div class="score-item-text">{{coreNormData8.score}}</div>
	                    <div class="score-line-wrapper">
	                        <div class="line-score b-greened"
	                             :style="{height:coreNormData8.score/200*370+'px'}">
	                            <div class="line-score-norm"
	                                 :style="{bottom:coreNormData8.lnorm/200*370+'px',height:(coreNormData8.rnorm-coreNormData8.lnorm)/200*370+'px'}"></div>
	                        </div>
	                    </div>
	                </div>

	                <div class="score-item">
	                    <div class="score-item-text">{{coreNormData9.score}}</div>
	                    <div class="score-line-wrapper">
	                        <div class="line-score b-greened"
	                             :style="{height:coreNormData9.score/200*370+'px'}">
	                            <div class="line-score-norm"
	                                 :style="{bottom:coreNormData9.lnorm/200*370+'px',height:(coreNormData9.rnorm-coreNormData9.lnorm)/200*370+'px'}"></div>
	                        </div>
	                    </div>
	                </div>

	                <div class="score-item">
	                    <div class="score-item-text">{{coreNormData10.score}}</div>
	                    <div class="score-line-wrapper">
	                        <div class="line-score b-greened"
	                             :style="{height:coreNormData10.score/200*370+'px'}">
	                            <div class="line-score-norm"
	                                 :style="{bottom:coreNormData10.lnorm/200*370+'px',height:(coreNormData10.rnorm-coreNormData10.lnorm)/200*370+'px'}"></div>
	                        </div>
	                    </div>
	                </div>
	                <div class="score-item">
	                    <div class="score-item-text">{{coreNormData11.score}}</div>
	                    <div class="score-line-wrapper">
	                        <div class="line-score b-greened"
	                             :style="{height:coreNormData11.score/200*370+'px'}">
	                            <div class="line-score-norm"
	                                 :style="{bottom:coreNormData11.lnorm/200*370+'px',height:(coreNormData11.rnorm-coreNormData11.lnorm)/200*370+'px'}"></div>
	                        </div>
	                    </div>
	                </div>

	                <div class="score-item">
	                    <div class="score-item-text">{{coreNormData12.score}}</div>
	                    <div class="score-line-wrapper">
	                        <div class="line-score b-greened"
	                             :style="{height:coreNormData12.score/200*370+'px'}">
	                            <div class="line-score-norm"
	                                 :style="{bottom:coreNormData12.lnorm/200*370+'px',height:(coreNormData12.rnorm-coreNormData12.lnorm)/200*370+'px'}"></div>
	                        </div>
	                    </div>
	                </div>
	            </div>
	        </div>
		</div>
		<div class="page_content pageGerentezhi" style="height: 1200px;">
			<h6 class="small_title" style="margin-bottom: 0px">兴趣倾向</h6>
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
                        <td>
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
                        <td>
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
                        <td>
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
                        <td>
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
                        <td>
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
                        <td>
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
            <div class="radarChartContainer">
                <div id="radarChart" style="width:100%; height:390px;"></div>
                <div class="title">兴趣倾向评估结果示意图</div>
            </div>
		</div>	
		<div class="page_content pageGerentezhi" style="height: 1200px;">
			<h6 class="small_title">学习特征</h6>
			<div class="main_box">
				<div class="title_box">
					<p class="block"></p>
					<p>基本学习能力</p>
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
                            <td class="bg-s_blue">{{data.name }}</td>
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
			</div>
			<div class="main_box">
				<div class="title_box">
					<p class="block"></p>
					<p>学习态度</p>
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
                            <td class="bg-s_blue">{{data.name }}</td>
                            <td>{{data.score | toFixed(2)}}</td>
                            <td>{{data.lnorm}}~{{data.rnorm}}</td>
                            <td colspan="5">
                                <div class="score-line">

                                    <div class="line b-red" v-if="data.score<=1"
                                         :style="{width:data.score/5*355+'%'}"></div>
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
			</div>
		</div>
		<div class="page_content pageGerentezhi" style="height: 1200px;">
			<div class="main_box">
				<div class="title_box">
					<p class="block"></p>
					<p>学习过程</p>
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
                            <td class="bg-s_blue" rowspan="3">学习计划</td>
                            <td class="bg-s_blue">{{processNorm1.name}}</td>
                            <td>{{processNorm1.score}}</td>
                            <td>{{processNorm1.lnorm}}~{{processNorm1.rnorm}}</td>
                            <td colspan="3">
                                <div class="score-line">
                                    <div class="line b-red" v-if="processNorm1.grade==1"
                                         :style="{width:16.5+'%'}"></div>
                                    <div class="line b-yellow" v-if="processNorm1.grade==2"
                                         :style="{width:50+'%'}"></div>
                                    <div class="line b-blue" v-if="processNorm1.grade==3"
                                         :style="{width:83.5+'%'}"></div>
                                    <!--<div class="norm-line"-->
                                    <!--:style="{marginLeft:(processNorm1.lnorm/5)*333+'px',width:(processNorm1.rnorm-processNorm1.lnorm)/5*355+'px'}"></div>-->
                                </div>
                            </td>
                        </tr>

                        <tr>
                            <td class="bg-s_blue">{{processNorm2.name}}</td>
                            <td>{{processNorm2.score}}</td>
                            <td>{{processNorm2.lnorm}}~{{processNorm2.rnorm}}</td>
                            <td colspan="3">
                                <div class="score-line">
                                    <div class="line b-red" v-if="processNorm2.grade==1"
                                         :style="{width:16.5+'%'}"></div>
                                    <div class="line b-yellow" v-if="processNorm2.grade==2"
                                         :style="{width:50+'%'}"></div>
                                    <div class="line b-blue" v-if="processNorm2.grade==3"
                                         :style="{width:83.5+'%'}"></div>
                                    <!--<div class="norm-line"-->
                                    <!--:style="{marginLeft:(processNorm2.lnorm/5)*333+'px',width:(processNorm2.rnorm-processNorm2.lnorm)/5*355+'px'}"></div>-->
                                </div>
                            </td>
                        </tr>

                        <tr>
                            <td class="bg-s_blue">{{processNorm3.name}}</td>
                            <td>{{processNorm3.score}}</td>
                            <td>{{processNorm3.lnorm}}~{{processNorm3.rnorm}}</td>
                            <td colspan="3">
                                <div class="score-line">
                                    <div class="line b-red" v-if="processNorm3.grade==1"
                                         :style="{width:16.5+'%'}"></div>
                                    <div class="line b-yellow" v-if="processNorm3.grade==2"
                                         :style="{width:50+'%'}"></div>
                                    <div class="line b-blue" v-if="processNorm3.grade==3"
                                         :style="{width:83.5+'%'}"></div>
                                    <!--<div class="norm-line"-->
                                    <!--:style="{marginLeft:(processNorm3.lnorm/5)*333+'px',width:(processNorm3.rnorm-processNorm3.lnorm)/5*355+'px'}"></div>-->
                                </div>
                            </td>
                        </tr>

                        <tr>
                            <td class="bg-s_blue" rowspan="3">学习监控</td>
                            <td class="bg-s_blue">{{processNorm4.name}}</td>
                            <td>{{processNorm4.score}}</td>
                            <td>{{processNorm4.lnorm}}~{{processNorm4.rnorm}}</td>
                            <td colspan="3">
                                <div class="score-line">
                                    <div class="line b-red" v-if="processNorm4.grade==1"
                                         :style="{width:16.5+'%'}"></div>
                                    <div class="line b-yellow" v-if="processNorm4.grade==2"
                                         :style="{width:50+'%'}"></div>
                                    <div class="line b-blue" v-if="processNorm4.grade==3"
                                         :style="{width:83.5+'%'}"></div>
                                    <!--<div class="norm-line"-->
                                    <!--:style="{marginLeft:(processNorm4.lnorm/5)*333+'px',width:(processNorm4.rnorm-processNorm4.lnorm)/5*355+'px'}"></div>-->
                                </div>
                            </td>
                        </tr>

                        <tr>
                            <td class="bg-s_blue">{{processNorm5.name}}</td>
                            <td>{{processNorm5.score}}</td>
                            <td>{{processNorm5.lnorm}}~{{processNorm5.rnorm}}</td>
                            <td colspan="3">
                                <div class="score-line">
                                    <div class="line b-red" v-if="processNorm5.grade==1"
                                         :style="{width:16.5+'%'}"></div>
                                    <div class="line b-yellow" v-if="processNorm5.grade==2"
                                         :style="{width:50+'%'}"></div>
                                    <div class="line b-blue" v-if="processNorm5.grade==3"
                                         :style="{width:83.5+'%'}"></div>
                                    <!--<div class="norm-line"-->
                                    <!--:style="{marginLeft:(processNorm5.lnorm/5)*333+'px',width:(processNorm5.rnorm-processNorm5.lnorm)/5*355+'px'}"></div>-->
                                </div>
                            </td>
                        </tr>

                        <tr>
                            <td class="bg-s_blue">{{processNorm6.name}}</td>
                            <td>{{processNorm6.score}}</td>
                            <td>{{processNorm6.lnorm}}~{{processNorm6.rnorm}}</td>
                            <td colspan="3">
                                <div class="score-line">
                                    <div class="line b-red" v-if="processNorm6.grade==1"
                                         :style="{width:16.5+'%'}"></div>
                                    <div class="line b-yellow" v-if="processNorm6.grade==2"
                                         :style="{width:50+'%'}"></div>
                                    <div class="line b-blue" v-if="processNorm6.grade==3"
                                         :style="{width:83.5+'%'}"></div>
                                    <!--<div class="norm-line"-->
                                    <!--:style="{marginLeft:(processNorm6.lnorm/5)*333+'px',width:(processNorm6.rnorm-processNorm6.lnorm)/5*355+'px'}"></div>-->
                                </div>
                            </td>
                        </tr>

                        <tr>
                            <td class="bg-s_blue" rowspan="3">学习调节</td>
                            <td class="bg-s_blue">{{processNorm7.name}}</td>
                            <td>{{processNorm7.score}}</td>
                            <td>{{processNorm7.lnorm}}~{{processNorm7.rnorm}}</td>
                            <td colspan="3">
                                <div class="score-line">
                                    <div class="line b-red" v-if="processNorm7.grade==1"
                                         :style="{width:16.5+'%'}"></div>
                                    <div class="line b-yellow" v-if="processNorm7.grade==2"
                                         :style="{width:50+'%'}"></div>
                                    <div class="line b-blue" v-if="processNorm7.grade==3"
                                         :style="{width:83.5+'%'}"></div>
                                    <!--<div class="norm-line"-->
                                    <!--:style="{marginLeft:(processNorm7.lnorm/5)*333+'px',width:(processNorm7.rnorm-processNorm7.lnorm)/5*355+'px'}"></div>-->
                                </div>
                            </td>
                        </tr>

                        <tr>
                            <td class="bg-s_blue">{{processNorm8.name}}</td>
                            <td>{{processNorm8.score}}</td>
                            <td>{{processNorm8.lnorm}}~{{processNorm8.rnorm}}</td>
                            <td colspan="3">
                                <div class="score-line">
                                    <div class="line b-red" v-if="processNorm8.grade==1"
                                         :style="{width:16.5+'%'}"></div>
                                    <div class="line b-yellow" v-if="processNorm8.grade==2"
                                         :style="{width:50+'%'}"></div>
                                    <div class="line b-blue" v-if="processNorm8.grade==3"
                                         :style="{width:83.5+'%'}"></div>
                                    <!--<div class="norm-line"-->
                                    <!--:style="{marginLeft:(processNorm8.lnorm/5)*333+'px',width:(processNorm8.rnorm-processNorm8.lnorm)/5*355+'px'}"></div>-->
                                </div>
                            </td>
                        </tr>

                        <tr>
                            <td class="bg-s_blue">{{processNorm9.name}}</td>
                            <td>{{processNorm9.score}}</td>
                            <td>{{processNorm9.lnorm}}~{{processNorm9.rnorm}}</td>
                            <td colspan="3">
                                <div class="score-line">
                                    <div class="line b-red" v-if="processNorm9.grade==1"
                                         :style="{width:16.5+'%'}"></div>
                                    <div class="line b-yellow" v-if="processNorm9.grade==2"
                                         :style="{width:50+'%'}"></div>
                                    <div class="line b-blue" v-if="processNorm9.grade==3"
                                         :style="{width:83.5+'%'}"></div>
                                    <!--<div class="norm-line"-->
                                    <!--:style="{marginLeft:(processNorm9.lnorm/5)*333+'px',width:(processNorm9.rnorm-processNorm9.lnorm)/5*355+'px'}"></div>-->
                                </div>
                            </td>
                        </tr>

                        <tr>
                            <td class="bg-s_blue" rowspan="2">学习效率</td>
                            <td class="bg-s_blue">{{processNorm11.name}}</td>
                            <td>{{processNorm11.score}}</td>
                            <td>{{processNorm11.lnorm}}~{{processNorm11.rnorm}}</td>
                            <td colspan="3">
                                <div class="score-line">
                                    <div class="line b-red" v-if="processNorm11.grade==1"
                                         :style="{width:16.5+'%'}"></div>
                                    <div class="line b-yellow" v-if="processNorm11.grade==2"
                                         :style="{width:50+'%'}"></div>
                                    <div class="line b-blue" v-if="processNorm11.grade==3"
                                         :style="{width:83.5+'%'}"></div>
                                    <!--<div class="norm-line"-->
                                    <!--:style="{marginLeft:(processNorm11.lnorm/5)*333+'px',width:(processNorm11.rnorm-processNorm11.lnorm)/5*355+'px'}"></div>-->
                                </div>
                            </td>
                        </tr>

                        <tr>
                            <td class="bg-s_blue">{{processNorm12.name}}</td>
                            <td>{{processNorm12.score}}</td>
                            <td>{{processNorm12.lnorm}}~{{processNorm12.rnorm}}</td>
                            <td colspan="3">
                                <div class="score-line">
                                    <div class="line b-red" v-if="processNorm12.grade==1"
                                         :style="{width:16.5+'%'}"></div>
                                    <div class="line b-yellow" v-if="processNorm12.grade==2"
                                         :style="{width:50+'%'}"></div>
                                    <div class="line b-blue" v-if="processNorm12.grade==3"
                                         :style="{width:83.5+'%'}"></div>
                                    <!--<div class="norm-line"-->
                                    <!--:style="{marginLeft:(processNorm12.lnorm/5)*333+'px',width:(processNorm12.rnorm-processNorm12.lnorm)/5*355+'px'}"></div>-->
                                </div>
                            </td>
                        </tr>
                        </tbody>
                    </table>
                </div>
			</div>
			<div class="main_box">
				<div class="title_box">
					<p class="block"></p>
					<p>学习风格</p>
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
                            <td class="bg-s_blue">对待信息</td>
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
                            <td class="bg-s_blue">信息加工方式</td>
                            <td>{{styleNorm2.score | toFixed(2)}}</td>
                            <td>{{styleNorm2.lnorm}}~{{styleNorm2.rnorm}}</td>
                            <td>
                                <div class="score-text">
                                    <p>依存型</p>
                                    <p>依存·独立型</p>
                                    <p>独立型</p>
                                </div>
                                <div class="d-relative score-line">
                                    <div class="line b-greened"></div>
                                    <div class="norm-line"
                                         :style="{marginLeft:(styleNorm2.lnorm/200)*350+'px',width:(styleNorm2.rnorm-styleNorm2.lnorm)/200*350+'px'}"></div>
                                    <div class="black-line" :style="{left:(styleNorm2.score/200)*350+'px'}"></div>
                                </div>
                            </td>
                        </tr>

                        <tr>
                            <td class="bg-s_blue">信息加工速度</td>
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
		</div>	
		<div class="page_content pageGerentezhi" style="height: 1200px;">
			<h6 class="small_title"> 心理健康评估结果</h6>
			<div class="main_box">
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
                        <tr v-for="(data,index) in xljkNorm" v-if="data.name!='精神病性'">
                            <td class="bg-s_blue">{{data.name }}</td>
                            <td>{{data.score | toFixed(2)}}</td>
                            <td>{{data.lnorm}}~{{data.rnorm}}</td>
                            <td colspan="5">
                                <div class="score-line">
                                    <div class="line b-red" v-if="data.score<=1"
                                         :style="{width:(data.score/5)*355+'px'}"></div>
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
		</div>
	</div>
</template>
<script>
export default {
	name: 'pageGerentezhi',
	components: { },
    props: ['careerId'],
    data() {
        return {
        	careerTestId: '',
        	oemObj: {}, //oem信息
	        canvasImgArr: [],
	        pdfTimer: '',
	        pageLen: '',
	        canvasImgSeq: 0,
	        downloadPercentage:0,
	        canvasImg: '',
	        downloadTip: 0,
	        reportId: '', // 报告ID
	        userInfo: '', // 用户基本信息
	        user: '', // 用户基本信息2
	        reportTime: '', // 报告日期
	        testTime: '', //  评测日期
        	personality: {}, // 1.1 & 1.2
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
	        cehuang: '', //测谎题得分
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
	        thirdCData: '', // 第三职业
	        coreCharacter: '', // 核心人格
	        coreCharacterData: '', // 核心人格 p31 表格
	        coreCognition: '', //核心潜能
	        coreCognitionData: '', //核心潜能 p 33 表格
	        coreCommentsLen: '', // 核心人格评论条数
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
	        xljkNormLen: '', // 心理健康 数据
	        majors: '', // 推荐附录专业
	        ootLen: '', // #1.2.2 length
	        othLen: '', // #1.2.3 length
	        oadLen: '', // 人格优势 length
	        otsShow: true, // #1.2.6 是否显示,

	        scores: [],
	        tagNames: [],

        }
    },
    computed: {
    },
    watch: {
    	careerId: {
    		handler(val,oldval) {  
                this.careerTestId = val;
                // console.log(this.careerTestId);
                // this.getRgtxInfo(this.careerTestId);
                // this.getRzqnInfo(this.careerTestId);
                // this.getXqqxInfo(this.careerTestId);
                this.promiseAll();
            }
  
    	}
    


    },
    methods: {
    	// // 获取人格特性基本信息



        // 获取人格特性基本信息
        getRgtxInfo(career) {
        	return new Promise((resolve, reject) => {
	            var token = window.sessionStorage.getItem('ymtxToken');
	            var _self = this;
	            this.$ajax.post(this.G_uris + '/common/report/personality/content', {
	            		report_id: career
	                },{
	                    headers:{
	                        token: token
	                    }
	                })
	                // 监听数据返回
	                .then((res)=> {
	                	 // console.log(res);
	                	 let data = res.data;
	                	 // let _self = this;
	                    if (data.code == 0) {
	                    	// console.log(666666)
	                        _self.personality = data.result.personality; // 1.1 & 1.2
	                        _self.xgtxFoData1 = (data.result.personality.data.waixiang - data.result.personality.data.neixiang) * 158 / 70;
	                        // console.log(_self.xgtxFoData1,_self.xgtxFoData2)
	                        _self.xgtxFoData2 = (data.result.personality.data.shigan - data.result.personality.data.zhijue) * 158 / 70;
	                        _self.xgtxFoData3 = (data.result.personality.data.sikao - data.result.personality.data.qinggan) * 158 / 70;
	                        _self.xgtxFoData4 = (data.result.personality.data.panduan - data.result.personality.data.zhijueb) * 158 / 70;
	                        _self.xgtxFtData1 = (data.result.character.wx.data.zhudong - data.result.character.wx.data.zhudong_r) * 114 / 5;
	                        _self.xgtxFtData2 = (data.result.character.wx.data.jiantan - data.result.character.wx.data.jiantan_r) * 114 / 5;
	                        _self.xgtxFtData3 = (data.result.character.wx.data.hequn - data.result.character.wx.data.hequn_r) * 114 / 5;
	                        _self.xgtxFtData4 = (data.result.character.wx.data.huoyue - data.result.character.wx.data.huoyue_r) * 114 / 5;
	                        _self.xgtxFtData5 = (data.result.character.wx.data.reqing - data.result.character.wx.data.reqing_r) * 114 / 5;

	                        _self.xgtxFthData1 = (data.result.character.sg.data.juti - data.result.character.sg.data.juti_r) * 114 / 5;
	                        _self.xgtxFthData2 = (data.result.character.sg.data.shishi - data.result.character.sg.data.shishi_r) * 114 / 5;
	                        _self.xgtxFthData3 = (data.result.character.sg.data.shiji - data.result.character.sg.data.shiji_r) * 114 / 5;
	                        _self.xgtxFthData4 = (data.result.character.sg.data.shijian - data.result.character.sg.data.shijian_r) * 114 / 5;
	                        _self.xgtxFthData5 = (data.result.character.sg.data.chuantong - data.result.character.sg.data.chuantong_r) * 114 / 5;



	                        _self.xgtxFfData1 = (data.result.character.sk.data.lizhi - data.result.character.sk.data.lizhi_r) * 114 / 5;
	                        _self.xgtxFfData2 = (data.result.character.sk.data.gongzheng - data.result.character.sk.data.gongzheng_r) * 114 / 5;
	                        _self.xgtxFfData3 = (data.result.character.sk.data.zhiyi - data.result.character.sk.data.zhiyi_r) * 114 / 5;
	                        _self.xgtxFfData4 = (data.result.character.sk.data.piping - data.result.character.sk.data.piping_r) * 114 / 5;
	                        _self.xgtxFfData5 = (data.result.character.sk.data.jianding - data.result.character.sk.data.jianding_r) * 114 / 5;

	                        _self.xgtxFfiData1 = (data.result.character.pd.data.tiaoli - data.result.character.pd.data.tiaoli_r) * 114 / 5;
	                        _self.xgtxFfiData2 = (data.result.character.pd.data.jihua - data.result.character.pd.data.jihua_r) * 114 / 5;
	                        _self.xgtxFfiData3 = (data.result.character.pd.data.zhunbei - data.result.character.pd.data.zhunbei_r) * 114 / 5;
	                        _self.xgtxFfiData4 = (data.result.character.pd.data.baoshou - data.result.character.pd.data.baoshou_r) * 114 / 5;
	                        _self.xgtxFfiData5 = (data.result.character.pd.data.zhenmi - data.result.character.pd.data.zhenmi_r) * 114 / 5;

	                        _self.xgtxSData1 = data.result.norm.zhudong;
	                        _self.xgtxSData2 = data.result.norm.jiantan;
	                        _self.xgtxSData3 = data.result.norm.hequn;
	                        _self.xgtxSData4 = data.result.norm.huoyue;
	                        _self.xgtxSData5 = data.result.norm.reqing;
	                        _self.xgtxSData6 = data.result.norm.juti;
	                        _self.xgtxSData7 = data.result.norm.shishi;
	                        _self.xgtxSData8 = data.result.norm.shiji;
	                        _self.xgtxSData9 = data.result.norm.shijian;
	                        _self.xgtxSData10 = data.result.norm.chuantong;
	                        _self.xgtxSData11 = data.result.norm.lizhi;
	                        _self.xgtxSData12 = data.result.norm.gongzheng;
	                        _self.xgtxSData13 = data.result.norm.zhiyi;
	                        _self.xgtxSData14 = data.result.norm.piping;
	                        _self.xgtxSData15 = data.result.norm.jianding;
	                        _self.xgtxSData16 = data.result.norm.tiaoli;
	                        _self.xgtxSData17 = data.result.norm.jihua;
	                        _self.xgtxSData18 = data.result.norm.zhunbei;
	                        _self.xgtxSData19 = data.result.norm.baoshou;
	                        _self.xgtxSData20 = data.result.norm.zhenmi;


	                        _self.wx = data.result.character.wx; // 1.3.1
	                        _self.sg = data.result.character.sg; // 1.3.2
	                        _self.sk = data.result.character.sk; // 1.3.3
	                        _self.pd = data.result.character.pd; // 1.3.4
	                        _self.norm = data.result.norm; // 1.3.5
	                        _self.reliability = data.result.reliability; // 信度指数



	                        _self.personalityDesc = _self.personality.desc.substring(5);
	                        _self.personalityName = _self.personality.name.split('');
							
	                        // var len1 = data.result.personality.basic_desc.length;
	                        // var len2 = data.result.personality.temper[2].detail.length;

	                        // if (len1 > 3 || len2 > 80) {
	                        //     _self.ootLen = 2;
	                        // } else {
	                        //     _self.ootLen = 3;
	                        // }
	                        // _self.oadLen = data.result.personality.advantage.length;
	                        // setTimeout(function () {
	                        //     var ootHeight = $('#ootContent').height();
	                        //     _self.othLen = (1100 - ootHeight - 150) / 40;
	                        //     _self.othLen = Math.floor(_self.othLen);

	                        //     var otFHeight = $('#otfContent').height();
	                        //     var otFiHeight = $('#otfiContent').height();
	                        //     var othHeight = $('#othContent').height();

	                        //     if (1100 - otFHeight - otFiHeight - 180 - othHeight > 210) {
	                        //         _self.otsShow = true;
	                        //     } else {
	                        //         _self.otsShow = false;
	                        //     }

	                        //     console.log(1100 - otFiHeight - otFHeight - othHeight - 180);

	                        //     console.log(_self.otsShow);

	                        // }, 2000)
	                    } 
	                    resolve(true);
	                })
	                .catch(function(error) {
	                    console.log(error)
	                })
	        });
        },


        // 获取认知潜能基本信息
        getRzqnInfo(career) {
        	return new Promise((resolve, reject) => {
	            var token = window.sessionStorage.getItem('ymtxToken');
	            var _self = this;
	            this.$ajax.post(this.G_uris + '/common/report/cognition/content', {
	            		report_id: career
	                },{
	                    headers:{
	                        token: token
	                    }
	                })
	                // 监听数据返回
	                .then((res)=> {
	                	// console.log(res);

	                	let data = res.data;	
	                    if (data.code == 0) {
	                        _self.cognitionCData = data.result.comment; // 1.1 & 1.2
	                        _self.coreNormData = data.result.norm;
	                        $.each(_self.coreNormData, function (index, val) {
	                            if (val.name == '信息加工能力') {
	                                _self.coreNormData1 = val;
	                            }
	                            if (val.name == '工作记忆能力') {
	                                _self.coreNormData2 = val;
	                            }
	                            if (val.name == '空间能力') {
	                                _self.coreNormData3 = val;
	                            }
	                            if (val.name == '表象能力') {
	                                _self.coreNormData4 = val;
	                            }
	                            if (val.name == '思维转换能力') {
	                                _self.coreNormData5 = val;
	                            }
	                            if (val.name == '逻辑推理能力') {
	                                _self.coreNormData6 = val;
	                            }
	                            if (val.name == '动手操作能力') {
	                                _self.coreNormData7 = val;
	                            }
	                            if (val.name == '语言能力') {
	                                _self.coreNormData8 = val;
	                            }
	                            if (val.name == '数学能力') {
	                                _self.coreNormData9 = val;
	                            }
	                            if (val.name == '组织管理能力') {
	                                _self.coreNormData10 = val;
	                            }
	                            if (val.name == '人际交往能力') {
	                                _self.coreNormData11 = val;
	                            }
	                            if (val.name == '美术能力') {
	                                _self.coreNormData12 = val;
	                            }
	                        });
	                        _self.diyData = data.result.comment.diy;
	                        _self.spaceData = data.result.comment.space;
	                        _self.infoData = data.result.comment.info;
	                        _self.personalData = data.result.comment.personal;
	                        _self.artData = data.result.comment.art;
	                        _self.langData = data.result.comment.lang;
	                        _self.organizeData = data.result.comment.organize;
	                        _self.presentData = data.result.comment.present;
	                        _self.mathData = data.result.comment.math;
	                        _self.logicData = data.result.comment.logic;
	                        _self.workData = data.result.comment.work;
	                        _self.thinkData = data.result.comment.think;
	                    }
	                    resolve(true);
	                })
	                .catch(function(error) {
	                    console.log(error)
	                })
	        });
        },




        // 获取兴趣倾向基本信息
        getXqqxInfo(career) {
        	return new Promise((resolve, reject) => {
	            var token = window.sessionStorage.getItem('ymtxToken');
	           	var tagNames = [],
	                scores = [];
	            var _self = this;
	            this.$ajax.post(this.G_uris + '/common/report/interest/content', {
	            		report_id: career
	                },{
	                    headers:{
	                        token: token
	                    }
	                })
	                // 监听数据返回
	                .then((res)=> {
	                	let data = res.data;	
	                    if (data.code == 0) {
	                        _self.xqqxData = data.result; // 兴趣倾向数据
	                        _self.xqqxTableData1 = data.result.norm.changgui; // p25 表格
	                        _self.xqqxTableData2 = data.result.norm.shiji; // p25 表格
	                        _self.xqqxTableData3 = data.result.norm.diaoyan; // p25 表格
	                        _self.xqqxTableData4 = data.result.norm.yishu; // p25 表格
	                        _self.xqqxTableData5 = data.result.norm.shehui; // p25 表格
	                        _self.xqqxTableData6 = data.result.norm.qiye; // p25 表格
	                        scores.push(data.result.data.shehui);
	                        scores.push(data.result.data.qiye);
	                        scores.push(data.result.data.changgui);
	                        scores.push(data.result.data.shiji);
	                        scores.push(data.result.data.diaoyan);
	                        scores.push(data.result.data.yishu);
	                        tagNames = [{
	                            name: 'S社会',
	                            max: 100
	                        }, {
	                            name: 'E企业',
	                            max: 100
	                        }, {
	                            name: 'C常规',
	                            max: 100
	                        }, {
	                            name: 'R实际',
	                            max: 100
	                        }, {
	                            name: 'I调研',
	                            max: 100
	                        }, {
	                            name: 'A艺术',
	                            max: 100
	                        },];
	                        _self.scores = scores;
	                        _self.tagNames = tagNames;
	                    }
	                    resolve(true);
	                })
	                .catch(function(error) {
	                    console.log(error)
	                })
			});
        },

        // 获取学习过程基本信息
        getStudyInfo(career) {
        	return new Promise((resolve, reject) => {
	            var token = window.sessionStorage.getItem('ymtxToken');
	            var _self = this;
	            this.$ajax.post(this.G_uris + '/common/report/learning/content', {
	            		report_id: career
	                },{
	                    headers:{
	                        token: token
	                    }
	                })
	                // 监听数据返回
	                .then((res)=> {
	                	let data = res.data;	
	                    if (data.code == 0) {
	                        _self.abilityTexts = data.result.ability.comment; // 学习过程 文案
	                        _self.abilityNorm = data.result.ability.norm; // 学习过程 数据
	                        _self.attitudeTexts = data.result.attitude.comment; // 学习态度 文案
	                        _self.attitudeNorm = data.result.attitude.norm; // 学习态度 数据
	                        _self.processTexts1 = data.result.process.comment.jianding; // 学习态度 文案
	                        _self.processTexts2 = data.result.process.comment.jihua; // 学习态度 文案
	                        _self.processTexts3 = data.result.process.comment.zhunbei; // 学习态度 文案
	                        _self.processTexts4 = data.result.process.comment.huoyue_r; // 学习态度 文案
	                        _self.processTexts5 = data.result.process.comment.tiaoli; // 学习态度 文案
	                        _self.processTexts6 = data.result.process.comment.zhenmi; // 学习态度 文案
	                        _self.processTexts7 = data.result.process.comment.reqing_r; // 学习态度 文案
	                        _self.processTexts8 = data.result.process.comment.piping; // 学习态度 文案
	                        _self.processTexts9 = data.result.process.comment.jihua_r; // 学习态度 文案
	                        _self.processTexts10 = data.result.process.comment.zhudong; // 学习态度 文案
	                        _self.processTexts11 = data.result.process.comment.chuantong_r; // 学习态度 文案
	                        _self.processTexts12 = data.result.process.comment.baoshou_r; // 学习态度 文案
	                        _self.processNorm1 = data.result.process.norm.jianding; // 学习态度 数据
	                        _self.processNorm2 = data.result.process.norm.jihua; // 学习态度 数据
	                        _self.processNorm3 = data.result.process.norm.zhunbei; // 学习态度 数据
	                        _self.processNorm4 = data.result.process.norm.huoyue_r; // 学习态度 数据
	                        _self.processNorm5 = data.result.process.norm.tiaoli; // 学习态度 数据
	                        _self.processNorm6 = data.result.process.norm.zhenmi; // 学习态度 数据
	                        _self.processNorm7 = data.result.process.norm.reqing_r; // 学习态度 数据
	                        _self.processNorm8 = data.result.process.norm.piping; // 学习态度 数据
	                        _self.processNorm9 = data.result.process.norm.jihua_r; // 学习态度 数据
	                        _self.processNorm10 = data.result.process.norm.zhudong; // 学习态度 数据
	                        _self.processNorm11 = data.result.process.norm.chuantong_r; // 学习态度 数据
	                        _self.processNorm12 = data.result.process.norm.baoshou_r; // 学习态度 数据
	                        _self.styleTexts1 = data.result.style.comment.chuangxin; // 学习态度 文本 1
	                        _self.styleTexts2 = data.result.style.comment.duli; // 学习态度 文本 2
	                        _self.styleTexts3 = data.result.style.comment.chensi; // 学习态度 文本 3
	                        _self.styleNorm1 = data.result.style.norm.chuangxin; // 学习态度 数据 3
	                        _self.styleNorm2 = data.result.style.norm.duli; // 学习态度 数据 3
	                        _self.styleNorm3 = data.result.style.norm.chensi; // 学习态度 数据 3
	                    }
	                    resolve(true);
	                })
	                .catch(function(error) {
	                    console.log(error)
	                })
			});
        },











        // 获取心理健康基本信息
        getXljkInfo(career) {
        	return new Promise((resolve, reject) => {
	            var token = window.sessionStorage.getItem('ymtxToken');
	            var _self = this;
	            this.$ajax.post(this.G_uris + '/common/report/mind/content', {
	            		report_id: career
	                },{
	                    headers:{
	                        token: token
	                    }
	                })
	                // 监听数据返回
	                .then((res)=> {
	                	let data = res.data;	
	                    if (data.code == 0) {
	                        _self.xljkTexts1 = data.result.comment.qiangpo; // 学习过程 文案
	                        _self.xljkTexts2 = data.result.comment.mingan; // 学习过程 文案
	                        _self.xljkTexts3 = data.result.comment.yiyu; // 学习过程 文案
	                        _self.xljkTexts4 = data.result.comment.jiaolv; // 学习过程 文案
	                        _self.xljkTexts5 = data.result.comment.didui; // 学习过程 文案
	                        _self.xljkTexts6 = data.result.comment.pizhi; // 学习过程 文案
	                        _self.xljkTexts7 = data.result.comment.jingshen; // 学习过程 文案
	                        _self.xljkNorm = data.result.norm; // 学习过程 数据
	                        // _self.xljkNorm=_self.xljkNorm.pop();
	                    } 
	                    resolve(true);
	                })
	                .catch(function(error) {
	                    console.log(error)
	                })
			});
        },






























        // radarChartInit(resolve,scores, tagNames) {
        //     // 基于准备好的dom，初始化echarts实例
        //     var lineChart = this.$echarts.init(document.getElementById('radarChart'));
        //     console.log(scores,tagNames)
        //     // var myChart = echarts.init(document.getElementById('main'));
        //     // 绘制图表
        //     lineChart.setOption({
        //         tooltip: {},
        //         legend: {
        //             data: ['兴趣倾向评估']
        //         },
        //         toolbox: {
        //             feature: {}
        //         },
        //         radar: {
        //             name: {
        //                 color: '#000',
        //                 fontSize: 15,
        //                 textStyle: {
        //                     color: '#000',
        //                     backgroundColor: '#999',
        //                     borderRadius: 3,
        //                     padding: [3, 5]
        //                 }
        //             },
        //             indicator: tagNames
        //         },
        //         calculable: true,
        //         series: [{
        //             name: '',
        //             type: 'radar',
        //             data: [{
        //                 value: scores,
        //                 name: '兴趣倾向评估结果'
        //             },]
        //         }]
        //     });
        //     lineChart.resize();
        //     resolve(true);            
        // },



        promiseAll(){
		    Promise.all([
    		   	this.getRgtxInfo(this.careerTestId),
    			this.getRzqnInfo(this.careerTestId),
    			this.getXqqxInfo(this.careerTestId),
    			this.getStudyInfo(this.careerTestId),
    			this.getXljkInfo(this.careerTestId)
		    ]).then((res) => {
		        /* 你的逻辑代码 */
		        console.log(res);
		        console.log("run");
		        // this.$nextTick(()=>{
		        	console.log(5555555555)
		        	this.$emit('fatherMethod',this.scores,this.tagNames)
		        // })成长
		    }).catch((error)=> {
	            console.log(error)
	        })
		}
    }
}
</script>
<style type="text/css" lang='less' scoped>
	@import './report.less';
	.pageGerentezhi {
		.title_box {
			display: flex;
			align-items: center;
			margin-bottom: 20px;
			font-size: 20px;
			color: #7AC34F;
			font-weight: 600;
			// .block {
			// 	width: 16px;
			// 	height: 10px;
			// 	margin-right: 10px;
			// }
		}
		.main_box {
			margin-bottom: 30px;
			overflow: hidden;
		}
		.page-5-biao {
		    width: 600px;
		    margin: 0 auto;
		    position: relative;
		    overflow: hidden;
		}
		.rgtx-biao-1 {
		    height: 400px;
		    text-align: center;
		    background: url(/imgs/growthFile/xgtx-bg1.png) no-repeat 0px 55px; 
		    background-size: 100% auto;
		}
		.rgtx-biao-1 .grade {
		    margin: 0 auto 7px;
		    width: 300px;
		    display: flex;
		    justify-content: space-around;
		    font-size: 12px;
		}

		.page-5-biao img {
		    display: block;
		    width: 100%; 
		}
		.page-5-biao .biao-content {
		    width: 300px;
		    position: absolute;
		    top: 65.5px;
		    left: 301px;
		    z-index: 10; }
	    .page-5-biao .biao-content ul li {
		    width: 100px;
		    height: 30px;
		    background: #99148d;
		    // background-image: linear-gradient(to right, #FEDEA8, #FAA141);
		    margin-bottom: 20.5px;

		    // &:nth-child(odd) {
		    // 	background-image: linear-gradient(to left, #FAA141, #FEDEA8);
		    // }
		}
		.page-5-biao .biao-content ul li.active_left {
            background-image: -webkit-linear-gradient(right, #FEDEA8, #FAA141);
            background-image: -o-linear-gradient(right, #FEDEA8, #FAA141);
            background-image: linear-gradient(to left, #FEDEA8, #FAA141);
		}
		.page-5-biao .biao-content ul li.active_right {
			background-image: -webkit-linear-gradient(left, #FEDEA8, #FAA141);
			background-image: -o-linear-gradient(left, #FEDEA8, #FAA141);
			background-image: linear-gradient(to right, #FEDEA8, #FAA141);
		}
		.page-5-biao .biao-font {
		    width: 90px;
		    position: absolute;
		    line-height: 50px;
		    top: 56px;
		    font-size: 14px; }
		.page-5-biao .biao-font li {
		    height: 30px;
		    line-height: 30px;
		    width: 90px;
		    text-align: center;
		    margin: 10px 0;
		    float: left; }
		.page-5-biao .biao-font li.active {
		    // background: #99148d;
		    background-image: linear-gradient(to top right, #FEDEA8, #FAA141);
		    color: #fff; 
		}
		.page-5-biao .biao-left-font {
		    left: 20px; }
		.page-5-biao .biao-right-font {
		    right: 20px; }
		.page-5-biao .conclusion {
		    width: 100%;
		    text-align: center;
		    position: absolute;
		    top: 285px; }
		.page-5-biao .conclusion p {
		    margin-bottom: 5px; }
		.page-5-biao .conclusion P.name {
		    color: #ED7D31; }
		.page-5-biao .conclusion .name1 {
		    font-weight: bold; }



		.page-19-biao {
			width: 771.5px !important;
			min-height: 486.5px;
			margin: 0 auto;

		}

		.page-19-biao .biao-content {
		    height: 410px;
		    top: 35px;
		    left: 67px;
		    width: 640px; }
        .page-19-biao .biao-content .score-item {
		    width: 52px;
		    float: left;
		    height: 100%;
		    position: relative;
		    margin-right: 1.3px; }
		.page-19-biao .biao-content .score-item .score-item-text {
		    width: 100%;
		    float: left;
		    text-align: center;
		    height: 22px;
		    line-height: 23px;
		    font-size: 12px;
		    color: #444; }
		.page-19-biao .biao-content .score-item .score-line-wrapper {
		    width: 100%;
		    float: left;
		    height: 370px;
		    position: relative;
		    margin-top: 16px; }
		.page-19-biao .biao-content .score-item .score-line-wrapper .line-score {
		    width: 16px;
		    position: absolute;
		    bottom: 0px;
		    left: 50%;
		    height: 120px;
		    margin-left: -8px;
		    background: #00A2FF; }
		.page-19-biao .biao-content .score-item .score-line-wrapper .line-score .line-score-norm {
		    width: 26px;
		    position: absolute;
		    bottom: 10px;
		    height: 60px;
		    left: -5px;
		    background: rgba(154, 202, 109, 0.9); }
		.page-19-biao .biao-content .score-item .score-line-wrapper .line-score.b-blue {
    		background: #0869bb; }
		.page-19-biao .biao-content .score-item .score-line-wrapper .line-score.b-green {
   			background: #0aa70a; }
		.page-19-biao .biao-content .score-item .score-line-wrapper .line-score.b-yellow {
    		background: #ffe21c; }
		.page-19-biao .biao-content .score-item .score-line-wrapper .line-score.b-orange {
    		background: #f49a0b; }
		.page-19-biao .biao-content .score-item .score-line-wrapper .line-score.b-red {
    		background: #ff001e; }

    	.page-19-biao .biao-content .score-item .score-line-wrapper .line-score.b-greened {
    		background: #C9DB8A; }


    	.table-container {
		    width: 100%;
		    float: left;
		    margin-bottom: 20px; }
		.table-container .table-title {
		    width: 100%;
		    float: left;
		    height: 40px;
		    line-height: 40px;
		    text-align: center;
		    font-size: 20px;
		    font-weight: bold; 
		    margin-bottom: 20px;
		}
		.table-container table {
		    width: 100%;
		    border: 2px solid #fff;
		    box-sizing: border-box;
		    text-align: center;
		    font-size: 14px;
		    border-collapse: collapse; }
		.table-container table .score-line {
		    height: 20px;
		    width: 355px; }
		.table-container table .score-line .line {
		    height: 16px;
		    background: #0869bb; }
		.table-container table .score-line .line.b-blue {
		    background: #0869bb; }

		// .table-container table .score-line .line.b-greened {
		//     background: #80BF61; }

		.table-container table .score-line .line.b-green {
		    background: #0aa70a; }

		.table-container table .score-line .line.b-yellow {
		    background: #ffe21c; }
		.table-container table .score-line .line.b-orange {
		    background: #f49a0b; }
		.table-container table .score-line .line.b-red {
		    background: #ff001e; }
		.table-container table .score-line .norm-line {
		    width: 60px;
		    height: 26px;
		    background: #000;
		    opacity: 0.2;
		    margin-top: -21px; }
		.table-container table .score-line .black-line {
		    width: 14px;
		    height: 26px;
		    background: #000;
		    position: absolute;
		    top: -5px;
		    left: 50%;
		    margin-left: -7px; }
		.table-container table .score-text {
		    display: flex;
		    width: 100%;
		    margin: 5px auto;
		    justify-content: space-between; }
		.table-container table th {
		    font-weight: normal;
		    border: 1px solid #fff;
		    text-align: center;
		    height: 40px;
		    line-height: 40px; 
		    color: #fff;
		}
		.table-container table th, .table-container table td.bg-blue {
		    background: #c3deff; }
		.table-container table th, .table-container table td.bg-s_blue {
		    // background: #c9dc86; 
		    background: rgba(154, 202, 109, 0.7);
		    color: #fff;
		}
		.table-container table th, .table-container table td.bg-greened {
		    background: #80BF61; }
		.table-container table td {
		    height: 40px;
		    line-height: 40px;
		    background-color: #F3F4F8;
		    border: 1px solid #fff; 
		}

		.table-25-container table .score-line {
		    height: 30px;
		    width: 409px; }
		.table-25-container table .score-line .line {
		    height: 30px;
		    // background: #4a9bff;
		    background: #C9DB8A;
		    position: relative; }
		.table-25-container table .score-line .line span {
		    display: block;
		    position: absolute;
		    top: 0;
		    left: 0;
		    height: 30px;
		    background: rgba(154, 202, 109, 0.9);
		    width: 100px;
		    opacity: 0.7; 
		}

		.table-25-container table td {
		    line-height: 25px;
		    padding: 5px 0; 

		}
	}
</style>