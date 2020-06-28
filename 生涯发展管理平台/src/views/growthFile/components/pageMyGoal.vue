<template>
	<div>
		<div class="page_content page_my_goal" v-if="target">
			<h5 class="header">
				<span>Part3</span>我的目标
			</h5>
			<div class="goal_box">
				<p>您一共制定了{{target.volCount}}个“大学+专业”志愿填报目标。</p>
				<p>通过决策工具层层筛选，确定了{{target.occupationCount}}个职业目标，{{target.universityCount}}个大学目标，{{target.subjectCount}}个专业目标。</p>
				<p>为了激励自己更好的学习，在《目标大学梯度表中》共添加了{{target.shavingCount}}个大学。</p>
				<p>共探索了{{target.questSubjectCount}}个专业，{{target.questUniversityCount}}个大学，收藏了{{target.collectSubject}}个专业、{{target.collectUniversity}}个大学。</p>
				<!-- {{target.collectOccupation}}个职业。 -->
			</div>
			<h6 class="small_title">我的目标</h6>
			<ul class="voluntary_lis">
				<li v-for="(item,index) in voluntary" :key="index">
					<span>{{item.u}}</span>
					<span>{{item.sub}}(专业)</span>
					<span v-if="item.s">{{item.s}}(分数)</span>
				</li>
			</ul>
		</div>
		<div class="page_content page_my_goal">
			<h6 class="small_title">定位结果</h6>
			<div class="title_box">
				<p class="block"></p>
				目标职业
			</div>
			<ul class="main_lis">
				<li v-for="(item, index) in occupation" :key="index">
					<p>{{item.n}}</p>
					<p>{{item.d}}</p>
				</li>
			</ul>
		</div>
		<div class="page_content page_my_goal">
			<div class="title_box">
				<p class="block"></p>
				目标大学
			</div>
			<ul class="main_lis">
				<li v-for="(item, index) in university" :key="index">
					<p>{{item.n}}</p>
					<p>{{item.d}}</p>
				</li>
			</ul>
		</div>
		<div class="page_content page_my_goal">
			<div class="title_box">
				<p class="block"></p>
				目标专业
			</div>
			<ul class="main_lis">
				<li v-for="(item, index) in subject" :key="index">
					<p>{{item.n}}</p>
					<p>{{item.d}}</p>
				</li>
			</ul>
		</div>

		<div class="page_content page_my_goal">
			 <!-- // 类型   1，目标大学 2,提高5分 3,提高10分 4,提高20分 5,提高30分 6,,提高40分  -->
			<h6 class="small_title">目标大学梯度表</h6>
			<div class="title_box">
				<p class="block"></p>
				目标大学
			</div>
			<ul class="main_lis" v-if="shaving[1]">
				<li v-for="(item, index) in shaving[1]" :key="index">
					<p>{{item.u}}</p>
				</li>
			</ul>
			<div class="tips" v-else>
				暂无内容
			</div>
		</div>
		<div class="page_content page_my_goal">
			<div class="title_box">
				<p class="block"></p>
				提高5分
			</div>
			<ul class="main_lis" v-if="shaving[2]">
				<li v-for="(item, index) in shaving[2]" :key="index">
					<p>{{item.u}}</p>
				</li>
			</ul>
			<div class="tips" v-else>
				~~暂无内容~~
			</div>
		</div>
		<div class="page_content page_my_goal">
			<div class="title_box">
				<p class="block"></p>
				提高10分
			</div>
			<ul class="main_lis" v-if="shaving[3]">
				<li v-for="(item, index) in shaving[3]" :key="index">
					<p>{{item.u}}</p>
				</li>
			</ul>
			<div class="tips" v-else>
				~~暂无内容~~
			</div>
		</div>
		<div class="page_content page_my_goal">
			<div class="title_box">
				<p class="block"></p>
				提高20分
			</div>
			<ul class="main_lis" v-if="shaving[4]">
				<li v-for="(item, index) in shaving[4]" :key="index">
					<p>{{item.u}}</p>
				</li>
			</ul>
			<div class="tips" v-else>
				~~暂无内容~~
			</div>
		</div>
		<div class="page_content page_my_goal">
			<div class="title_box">
				<p class="block"></p>
				提高30分
			</div>
			<ul class="main_lis" v-if="shaving[5]">
				<li v-for="(item, index) in shaving[5]" :key="index">
					<p>{{item.u}}</p>
				</li>
			</ul>
			<div class="tips" v-else>
				~~暂无内容~~
			</div>
		</div>
		<div class="page_content page_my_goal">
			<div class="title_box">
				<p class="block"></p>
				提高40分
			</div>
			<ul class="main_lis" v-if="shaving[6]">
				<li v-for="(item, index) in shaving[6]" :key="index">
					<p>{{item.u}}</p>
				</li>
			</ul>
			<div class="tips" v-else>
				~~暂无内容~~
			</div>
		</div>
		<div class="page_content page_my_goal">
			<h6 class="small_title">大学与专业探索表</h6>
			<div class="title_box">
				<p class="block"></p>
				大学探索表
			</div>
			<ul class="main_lis" v-if="questUniversity.length">
				<li v-for="(item, index) in questUniversity" :key="index">
					<p>{{item.u}}</p>
					<p>{{item.d}}</p>
				</li>
			</ul>
			<div class="tips" v-else>
				~~暂无内容~~
			</div>
		</div>
		<div class="page_content page_my_goal">
			<div class="title_box">
				<p class="block"></p>
				专业探索表
			</div>
			<ul class="main_lis" v-if="questSubject.length">
				<li v-for="(item, index) in questSubject" :key="index">
					<p>{{item.sub}}</p>
					<p>{{item.d}}</p>
				</li>
			</ul>
			<div class="tips" v-else>
				~~暂无内容~~
			</div>
		</div>
		<div class="page_content page_my_goal">
			<h6 class="small_title">生涯测评推荐职业与专业</h6>
			<div class="title_box">
				<p class="block"></p>
				职业与推荐专业一
			</div>
			<p class="main_title">职业：</p>
			<ul class="main_lis" v-if="bestCData">
				<li v-for="(item, index) in bestCData.careers" v-if="index<10">
					<p>{{item.name}}</p>
				</li>
			</ul>
			<p class="main_title">专业：</p>
			<ul class="main_lis" v-if="bestCData">
				<li v-for="(item, index) in bestCData.majors"  v-if="index<10">
					<p>{{item.name}} （{{item.code }}）</p>
				</li>
			</ul>
		</div>
		<div class="page_content page_my_goal">
			<div class="title_box">
				<p class="block"></p>
				职业与推荐专业二
			</div>
			<p class="main_title">职业：</p>
			<ul class="main_lis" v-if="secondCData">
				<li v-for="(item, index) in secondCData.careers" v-if="index<10">
					<p>{{item.name}}</p>
				</li>
			</ul>
			<p class="main_title">专业：</p>
			<ul class="main_lis" v-if="secondCData">
				<li v-for="(item, index) in secondCData.majors"  v-if="index<10">
					<p>{{item.name}} （{{item.code }}）</p>
				</li>
			</ul>
		</div>
		<div class="page_content page_my_goal">
			<div class="title_box">
				<p class="block"></p>
				职业与推荐专业三
			</div>
			<p class="main_title">职业：</p>
			<ul class="main_lis" v-if="thirdCData">
				<li v-for="(item, index) in thirdCData.careers" v-if="index<10">
					<p>{{item.name}}</p>
				</li>
			</ul>
			<p class="main_title">专业：</p>
			<ul class="main_lis" v-if="thirdCData">
				<li v-for="(item, index) in thirdCData.majors"  v-if="index<10">
					<p>{{item.name}} （{{item.code }}）</p>
				</li>
			</ul>
		</div>
		<div class="page_content page_my_goal" style="height: 1200px">
			<h6 class="small_title">职业类型与评估指标分析</h6>
			<div class="main_box">
				<div class="table-container table-29-container">
                    <div class="table-title">职业类型与评估指标分析结果</div>
                    <table>
                        <thead>
                        <tr>
                            <th width="" class="bg-greened">职业类型</th>
                            <th width="" class="bg-greened">指标类型</th>
                            <th width="" class="bg-greened">指标得分</th>
                            <th width="355" class="bg-greened">得分/匹配度</th>
                        </tr>
                        </thead>
                        <tbody v-for="data in careerTableData">
                        <tr>
                            <td class="bg-s_blue" rowspan="2">{{data.name}}</td>
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
		</div>
	</div>
</template>
<script>
export default {
	name: 'pageMyGoal',
	components: { },
    props: ['target','careerId'],
    data() {
        return {
        	careerTestId: '',
			bestCData: '',
            secondCData: '',
            thirdCData: '',
            coreCharacter: '',
            coreCharacterData: '',
            coreCognition: '',
            coreCognitionData: '',
            coreCommentsLen: '',
            careerTableData: '',
            majors: ''
        }
    },
    computed: {
    	// 我的目标
    	voluntary() {
    		if(this.target) {
    			return this.target.voluntary;
    		}else {
    			return []
    		}
    	},
    	// 目标职业
    	occupation() {
    		if(this.target) {
    			return this.target.occupation;
    		}else {
    			return []
    		}
    	},
    	// 目标大学
    	university() {
    		if(this.target) {
    			return this.target.university;
    		}else {
    			return []
    		}
    	},
    	// 目标专业
    	subject() {
    		if(this.target) {
    			return this.target.subject;
    		}else {
    			return []
    		}
    	},
    	// 目标大学梯度表
    	shaving() {
    		if(this.target) {
    			return this.target.shaving;
    		}else {
    			return []
    		}
    	},
    	// 大学探索表
    	questUniversity() {
    		if(this.target) {
    			return this.target.questUniversity;
    		}else {
    			return []
    		}
    	},
    	// 专业探索表
    	questSubject() {
    		if(this.target) {
    			return this.target.questSubject;
    		}else {
    			return []
    		}
    	},
    },
    watch: {
	    careerId: {
			handler(val,oldval) {  
	            this.careerTestId = val;
				this.getCareerInfo(this.careerId)
	            // this.promiseAll();
	        }
		}
    },
    methods: {

    	// 获取职业基本信息
        getCareerInfo(career) {  	
            var token = window.sessionStorage.getItem('ymtxToken');
            var _self = this;
            this.$ajax.post(this.G_uris + '/common/report/career/content', {
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
                        _self.bestCData = data.result.ctype.best; // 最佳职业数据
                        _self.secondCData = data.result.ctype.second; // 第二职业数据
                        _self.thirdCData = data.result.ctype.third; // 第三职业数据
                        _self.coreCharacter = data.result.ctype.best.core_character; // 核心人格
                        _self.coreCharacterData = data.result.ctype.best.core_character.norm; // 核心人格 p31 表格
                        _self.coreCognition = data.result.ctype.best.core_cognition; // 核心潜能
                        _self.coreCognitionData = data.result.ctype.best.core_cognition.norm; // 核心潜能 p 33 表格
                        _self.coreCommentsLen = data.result.ctype.best.core_cognition.comments.length; //核心潜能评论条数
                        _self.careerTableData = data.result.scores; // p29 表格
                        _self.majors = data.result.majors; // 推荐附录专业
                        this.$nextTick(()=>{
				        	this.$emit('change')
				        })
                    }
                   
                })
                .catch(function(error) {
                    console.log(error)
                })
        },
    }
}
</script>
<style type="text/css" lang='less' scoped>
	@import './report.less';
	.page_my_goal {
		max-height: 1200px;
		overflow: hidden;
		font-size: 16px;
		padding-bottom: 40px;
		.goal_box {
			padding: 25px;
			background-color: #F2F2F2;
			border-radius: 10px;
			margin-bottom: 30px;
			p {
				line-height: 28px;
			}
		}
		.voluntary_lis {
			display: flex;
			flex-wrap: wrap;
			li {
				padding: 0 10px;
				line-height: 36px;
				border-radius: 10px;
				background-color: #F2F2F2;
				margin-right: 15px;
				margin-bottom: 15px;
				span {
					margin-right: 10px;
					&:last-child {
						margin-right: 0;
					}
				}
			}
		}
		.title_box {
			display: flex;
			align-items: center;
			margin-bottom: 20px;
			font-size: 20px;
			font-weight: 600;
			color: #7AC34F;
		}
		.main_lis {
			display: flex;
			flex-wrap: wrap;
			padding-bottom: 20px;
			li {
				box-sizing: border-box;
				width: 50%;
				min-height: 40px;
				display: flex;
				justify-content: space-between;
				align-items: center;
				padding: 0px 20px;
				font-size: 14px;
				background: rgba(154, 202, 109, 0.4);
				p {
					line-height: 1.5em;
				}
				&:nth-child(4n+1) {
					background-color: #F2F2F2;
				}
				&:nth-child(4n+2) {
					background-color: #F2F2F2;
				}
				&:nth-child(even) {
					border-left: 2px solid #fff;
				}
			}
			
		}
		.tips {
			line-height: 40px;
			font-size: 20px;
			font-weight: bold;	
		}
		.main_title {
			line-height: 30px;
			font-size: 18px;
			margin-bottom: 10px;
		}
		.table-29-container table td {
		    height: 30px;
		    line-height: 30px; 
		}
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
		    border-collapse: collapse; 
		}
		.table-container table .score-line {
		    height: 20px;
		    width: 355px; 
		}
		.table-container table .score-line .line {
		    height: 16px;
		    background: #0869bb; 
		}

		.table-container table .score-line .line.b-blue {
		    background: #0869bb; 
		}
		.table-container table .score-line .line.b-green {
		    background: #0aa70a; 
		}
		.table-container table .score-line .line.b-yellow {
		    background: #ffe21c; 
		}
		.table-container table .score-line .line.b-orange {
		    background: #f49a0b; 
		}
		.table-container table .score-line .line.b-red {
		    background: #ff001e; 
		}
		.table-container table .score-line .norm-line {
		    width: 60px;
		    height: 26px;
		    background: #000;
		    opacity: 0.2;
		    margin-top: -21px; 
		}
		.table-container table .score-line .black-line {
		    width: 14px;
		    height: 26px;
		    background: #000;
		    position: absolute;
		    top: -5px;
		    left: 50%;
		    margin-left: -7px; 
		}
		.table-container table .score-text {
		    display: flex;
		    width: 100%;
		    margin: 5px auto;
		    justify-content: space-between; 
		}
		.table-container table th {
		    font-weight: normal;
		    border: 1px solid #fff;
		    text-align: center;
		    height: 40px;
		    line-height: 40px;

		}
		.table-container table th, .table-container table td.bg-blue {
		    background: #c3deff; 
		}
		.table-container table td {
		    height: 40px;
		    line-height: 40px;
		    background-color: #F3F4F8;
		    border: 1px solid #fff; 
		}

		.table-container table th, .table-container table td.bg-s_blue {
		    // background: #c9dc86; 
		    background: rgba(154, 202, 109, 0.7);
		    color: #fff;
		}
		.table-container table th, .table-container table td.bg-greened {
		    background: #80BF61; 
		}
	}
</style>