<template>
	<!-- 生涯管理-学业规划-规划 -->
    <div class="planning">
    <!-- 	<div class="banner">
    		<img src="imgs/careerManagement/careerAnchor/banner.png" alt="">
    	</div> -->
		<div class="main_box">
			<h6 class="title"><span>咨询目标</span><p @click="isShowTargetCard = true;target = targetObj.target" v-if="targetObj.updatedAt" class="btn">编辑</p></h6>
			<div class="table_box" v-if="targetObj.updatedAt">
				<table>
					<tr>
						<th>内容</th>
						<th>日期</th>
					</tr>
					<tr>
						<td>
							{{targetObj.target}}
						</td>
						<td>
							{{targetObj.updatedAt}}
						</td>
					</tr>
				</table>
			</div>
			<div class="recording" v-else>
                <div class="top" @click="isShowTargetCard = true">
                    <img src="/imgs/careerManagement/diagnosis/icon-zanwuneirong.png" alt="">
                </div>
                <div class="foot">
                    <p>暂无内容！ <span @click="isShowTargetCard = true">添加</span>咨询目标</p>
                    <p>备注：请让咨询师填写此项内容</p>
                </div>
            </div>
		</div>
		<div class="main_box">
			<h6 class="title"><span>咨询方案</span><p v-if="schemeObj.updatedAt" @click="isShowSchemeCard = true;scheme = schemeObj.scheme" class="btn">编辑</p></h6>
			<div class="table_box" v-if="schemeObj.updatedAt">
				<table>
					<tr>
						<th>内容</th>
						<th>日期</th>
					</tr>
					<tr>
						<td>{{schemeObj.scheme}}</td>
						<td>{{schemeObj.updatedAt}}</td>
					</tr>
				</table>
			</div>	
			<div class="recording" v-else>
                <div class="top" @click="isShowSchemeCard = true">
                    <img src="/imgs/careerManagement/diagnosis/icon-zanwuneirong.png" alt="">
                </div>
                <div class="foot">
                    <p>暂无内容！ <span @click="isShowSchemeCard = true">添加</span>咨询方案</p>
                    <p>备注：请让咨询师填写此项内容</p>
                </div>
            </div>
		</div>
		<div class="main_box">
			<h6 class="title"><span>咨询记录</span></h6>
			<div class="now_history_btn">
				<p>当前咨询记录</p>
				<div class="btn_box">
					<div class="btn" @click="addConsultLog()">新增</div>
					<div class="btn" @click="isShowConsultLog = true;">编辑</div>
				</div>
			</div>
			<div class="now_history_table">
				<table>
				    <tr class="table_title">
				      <td  colspan="2">规划主题:<span>{{consultLogObj.theme}}</span></td>
				      <td width="35%">时间:<span>{{consultLogObj.updatedAt}}</span></td>
				    </tr>
				    <tr>
				      <td width="20%">目的</td>
				      <td colspan="2">{{consultLogObj.purpose}}</td>
				    </tr>
					<tr>
				      <td>方法</td>
				      <td colspan="2">{{consultLogObj.method}}</td>
				    </tr>
				    <tr>
				      <td>过程</td>
				      <td colspan="2">{{consultLogObj.process}}</td>
				    </tr>
				    <tr>
				      <td>结果</td>
				      <td colspan="2">{{consultLogObj.result}}</td>
				    </tr>
				    <tr>
				      <td>下次规划计划</td>
				      <td colspan="2">{{consultLogObj.next_plan}}</td>
				    </tr>
				    <tr>
				      <td>家庭作业</td>
				      <td colspan="2">{{consultLogObj.homework}}</td>
				    </tr>
				</table>
			</div>
			<h6 class="title history_title"><span>历史记录</span></h6>
			<div class="history_table">
				<table>
					<tr>
						<th>规划主题</th>
						<th>日期</th>
						<th>查看</th>
					</tr>
					<tr v-for="(item,index) in ConsultLogList.list" :key="index">
						<td>{{item.theme}}</td>
						<td>{{item.updatedAt}}</td>
						<td><span @click="getConsultLog(item.id)">查看</span></td>
					</tr>
				</table>
				<!-- <div class="page_box">
	                <span>共{{count}}条</span>
	                <el-pagination
	                  background
	                  layout="prev, pager, next"
	                  :page-size="pageSize"
	                  :total="count"
	                  @current-change="currentChange"
	                >
	                </el-pagination>
	            </div> -->
			</div>	
		</div>
		<!-- 弹窗 -->
		<div class="mark" v-show="isShowTargetCard">
			<div class="card">
				<p class="card_title">咨询目标</p>
	            <div class="card_content">
	                <textarea placeholder="（请填写咨询目标）" v-model="target" onfocus="this.placeholder=''" onblur="this.placeholder='（请填写咨询目标）'" class="text_targe"></textarea>
	                <div class="save" @click="storeConsultTarget">保存</div>
	                <div class="close" @click="exitConfirm"></div>
	            </div>
			</div>
		</div>
		<!-- 弹窗 -->
		<div class="mark" v-show="isShowSchemeCard">
			<div class="card">
				<p class="card_title">咨询方案</p>
	            <div class="card_content">
	                <textarea placeholder="（请填写咨询方案）" v-model="scheme" onfocus="this.placeholder=''" onblur="this.placeholder='（请填写咨询方案）'" class="text_targe"></textarea>
	                <div class="save" @click="storeConsultScheme">保存</div>
	                <div class="close" @click="exitConfirm"></div>
	            </div>
			</div>
		</div>
		<!-- 新增和编辑咨询记录弹窗 -->
		<div class="mark" v-show="isShowConsultLog">
			<div class="card">
				<p class="card_title">咨询记录</p>
				<div class="card_content">
					<div class="time">
	                    访谈时间：
	                    <el-date-picker
	                        v-model="consultLogObj.date"
	                        type="date"
	                        placeholder="请选择访谈日期"
	                        value-format="yyyy-MM-dd"
	                        >
	                    </el-date-picker>
                	</div>
					<div class="card_main">
						<p>规划主题</p>
					   	<textarea v-model="consultLogObj.theme"  class="read_dia"></textarea>
					   	<p>目的</p>
					   	<textarea v-model="consultLogObj.purpose"  class="read_dia"></textarea>
					   	<p>方法</p>
					   	<textarea v-model="consultLogObj.method"  class="read_dia"></textarea>
					   	<p>过程</p>
					   	<textarea v-model="consultLogObj.process"  class="read_dia"></textarea>
					   	<p>结果</p>
					   	<textarea v-model="consultLogObj.result"  class="read_dia"></textarea>
					   	<p>下次规划计划</p>
					   	<textarea v-model="consultLogObj.next_plan"  class="read_dia"></textarea>
					   	<p>家庭作业</p>
					   	<textarea v-model="consultLogObj.homework"  class="read_dia"></textarea>
					</div>
					<div class="save" @click="storeConsultLog">保存</div>
	                <div class="close" @click="exitConfirm();getConsultLogList()"></div>
				</div>	
			</div>	
		</div>
		<div class="mark" v-show="isShowConsultLogDetail">
			<div class="card">
				<p class="card_title">咨询记录</p>
				<div class="card_content">
					<div class="time">
	                    访谈时间：
	                    <el-date-picker
	                        v-model="consultLogObjDetail.date"
	                        type="date"
	                        placeholder="请选择访谈日期"
	                        value-format="yyyy-MM-dd"
	                        readonly
	                        >
	                    </el-date-picker>
                	</div>
					<div class="card_main">
						<p>规划主题</p>
					   	<textarea v-model="consultLogObjDetail.theme"  class="read_dia" readonly></textarea>
					   	<p>目的</p> 
					   	<textarea v-model="consultLogObjDetail.purpose"  class="read_dia" readonly></textarea>
					   	<p>方法</p>
					   	<textarea v-model="consultLogObjDetail.method"  class="read_dia" readonly></textarea>
					   	<p>过程</p>
					   	<textarea v-model="consultLogObjDetail.process"  class="read_dia" readonly></textarea>
					   	<p>结果</p>
					   	<textarea v-model="consultLogObjDetail.result"  class="read_dia" readonly></textarea>
					   	<p>下次规划计划</p>
					   	<textarea v-model="consultLogObjDetail.next_plan"  class="read_dia" readonly></textarea>
					   	<p>家庭作业</p>
					   	<textarea v-model="consultLogObjDetail.homework"  class="read_dia" readonly></textarea>
					</div>
					<!-- <div class="save" @click="storeConsultLog">保存</div> -->
	                <div class="close" @click="isShowConsultLogDetail = false"></div>
				</div>	
			</div>	
		</div>
    </div>
</template>
<script>
    export default {
        name: "careerAnchor",
        data(){
            return {
            	// 是否显示咨询目标填写弹窗
            	isShowTargetCard: false,
            	// 咨询目标
            	target: '',
            	targetObj: {},
            	isShowSchemeCard: false,
            	// 咨询方案
            	scheme: '',
            	schemeObj: {},
            	// 是否显示咨询记录弹窗
            	isShowConsultLog: false,
            	// 咨询记录
            	consultLogObj: {
            		id: '',
            		date: '',
            		theme: '',
            		purpose: '',
            		method: '',
            		process: '',
            		result: '',
            		next_plan: '',
            		homework: ''
            	},
            	// 获取咨询记录列表
            	ConsultLogList: [],
            	// 查看咨询记录详情，不可修改
            	// 是否显示咨询记录弹窗，不可保存，修改
            	isShowConsultLogDetail: false,
            	consultLogObjDetail: {},















            	// 分页器
            	// 报告数组
                reportList: [],
                // 报告共有多少条
                count: 1,
                // 报告一共有多少页
                totalPage: '',
                // 每页显示多少条
                pageSize: 7,
                // 当前页
                currentPage: 1
            }
        },
        components:{},
        computed:{
        },
        methods:{
        	// 保存成功提示
        	successMessage() {
    		    this.$message({
                    type: 'success',
                    message: '保存成功'
                });
        	},
            //退出确认
            exitConfirm(id){
                this.$confirm('退出后不会保存编辑内容，确认退出?', '提示', {
                    confirmButtonText: '确定',
                    cancelButtonText: '取消',
                    type: 'warning'
                }).then(() => {
                    this.isShowTargetCard = false;
                    this.isShowSchemeCard = false;
                    this.isShowConsultLog = false;

                    this.$message({
                        type: 'info',
                        message: '已退出'
                    });
                }).catch((error) => {
                	console.log(error)
                })
            },
            //生涯管理 - 学业规划 - 规划 - 获取咨询目标详情
            getConsultTarget(id){
                this.$ajax.post(this.G_uri + '/plan/getConsultTarget',{
                },{
                    headers:{
                        token: window.sessionStorage.getItem('ymtxToken')
                    }
                })
                .then((res)=>{
                	let data = res.data.data;
                	if(res.data.code == 2000) {
                		if(data.updatedAt) {
                			this.targetObj = data;	
                		}
                	}
                })
                .catch((error) => {
                	console.log(error);
                }) 
            },
            // //生涯管理 - 学业规划 - 规划 - 保存咨询目标
            storeConsultTarget(id){
                this.$ajax.post(this.G_uri + '/plan/storeConsultTarget',{
                	target: this.target,
                },{
                    headers:{
                        token: window.sessionStorage.getItem('ymtxToken')
                    }
                })
                .then((res)=>{
               	    if(res.data.data.id == true) {
               	    	this.getConsultTarget();
            			this.isShowTargetCard = false;
                		this.successMessage();

            		}
                })
                .catch((error) => {
                	console.log(error);
                }) 
            },
            //生涯管理 - 学业规划 - 规划 - 获取咨询方案详情
            getConsultScheme(id){
                this.$ajax.post(this.G_uri + '/plan/getConsultScheme',{
                },{
                    headers:{
                        token: window.sessionStorage.getItem('ymtxToken')
                    }
                })
                .then((res)=>{
                   	let data = res.data.data;
                	if(res.data.code == 2000) {
                		if(data.updatedAt) {
                			this.schemeObj = data;	
                		}
                	}
                })
                .catch((error) => {
                	console.log(error);
                }) 
            },
            //生涯管理 - 学业规划 - 规划 - 保存咨询方案
            storeConsultScheme(id){
                this.$ajax.post(this.G_uri + '/plan/storeConsultScheme',{
                	scheme: this.scheme,
                },{
                    headers:{
                        token: window.sessionStorage.getItem('ymtxToken')
                    }
                })
                .then((res)=>{
                   	if(res.data.data.id == true) {
               	    	this.getConsultScheme();
                        this.isShowSchemeCard = false;
            			this.isShowSchemeschemeCard = false;
                		this.successMessage();
            		}
                })
                .catch((error) => {
                	console.log(error);
                }) 
            },
            // 增加咨询记录
            addConsultLog() {
            	this.isShowConsultLog = true;
            	this.consultLogObj = {
            		id: '',
            		date: '',
            		theme: '',
            		purpose: '',
            		method: '',
            		process: '',
            		result: '',
            		next_plan: '',
            		homework: ''
            	}
            },
            //生涯管理 - 学业规划 - 规划 - 咨询记录列表
            getConsultLogList(id){
                this.$ajax.post(this.G_uri + '/plan/getConsultLogList',{
                	pageSize: this.pageSize,
                	pageNumber: this.currentPage
                },{
                    headers:{
                        token: window.sessionStorage.getItem('ymtxToken')
                    }
                })
                .then((res)=>{
                	let data = res.data.data;
                	if(res.data.code == 2000) {
                		this.ConsultLogList = data;
                		if(data.list) {
                			let id = data.list[0].id;
                			this.getNowConsultLog(id)
                		}
                	}
                })
                .catch((error) => {
                	console.log(error);
                }) 
            },
           //生涯管理 - 学业规划 - 规划 - 获取咨询当前记录详情
            getNowConsultLog(id){
                this.$ajax.post(this.G_uri + '/plan/getConsultLog',{
                	// 咨询记录ID
                	id:id
                },{
                    headers:{
                        token: window.sessionStorage.getItem('ymtxToken')
                    }
                })
                .then((res)=>{
                   	if(res.data.code == 2000) {
                		this.consultLogObj = res.data.data;
                	}
                })
                .catch((error) => {
                	console.log(error);
                }) 
            },
            //生涯管理 - 学业规划 - 规划 - 获取咨询记录详情
            getConsultLog(id){
            	this.isShowConsultLogDetail = true;
                this.$ajax.post(this.G_uri + '/plan/getConsultLog',{
                	// 咨询记录ID
                	id:id
                },{
                    headers:{
                        token: window.sessionStorage.getItem('ymtxToken')
                    }
                })
                .then((res)=>{
                   	if(res.data.code == 2000) {
                		this.consultLogObjDetail = res.data.data;
                	}
                })
                .catch((error) => {
                	console.log(error);
                }) 
            },
            //生涯管理 - 学业规划 - 规划 - 保存咨询记录
            storeConsultLog(id){
                this.$ajax.post(this.G_uri + '/plan/storeConsultLog',{
                	id: this.consultLogObj.id,
                	date: this.consultLogObj.date,
                	theme: this.consultLogObj.theme,
                	purpose: this.consultLogObj.purpose,
                	method: this.consultLogObj.method,
                	process: this.consultLogObj.process,
                	result: this.consultLogObj.result,
                	next_plan: this.consultLogObj.next_plan,
                	homework: this.consultLogObj.homework,
                },{
                    headers:{
                        token: window.sessionStorage.getItem('ymtxToken')
                    }
                })
                .then((res)=>{
                  	if(res.data.data.id == true) {
               	    	this.getConsultLogList();
            			this.isShowConsultLog = false;
                		this.successMessage();
            		}
                })
                .catch((error) => {
                	console.log(error);
                }) 
            },
            getHeight() {
            	let Height = $(window).height() - 50;
            	console.log( $('.card'));
            	$('.card').each(function() {
            		let cardHeight = $(this).height();
            		if( cardHeight > Height) {
	            		$(this).height(Height-20);
	            		$(this).find('.card_content').height(Height - 62-20);
	            	}
            	})

            }
        },
        watch:{
        	isShowConsultLog() {
        		console.log(66666)
        		if(this.isShowConsultLog) {
        			this.$nextTick(() => {
	        			this.getHeight();
	        		})
        		}
        	},
        	isShowConsultLogDetail() {
        		if(this.isShowConsultLogDetail) {
        			this.$nextTick(() => {
	        			this.getHeight();
	        		})
        		}
        	}
        },
        created() {
        	this.getConsultTarget();
        	this.getConsultScheme();
        	this.getConsultLogList();
        },
        mounted(){
        }
    }
</script>
<style scoped lang="less">
    *{
        letter-spacing: 1.5px;
        box-sizing: border-box;
    }
	.planning {
		padding-left: 20px;
		.banner {
			margin-bottom: 20px;
		}
		.btn {
			width: 62px;
			height: 24px;
			line-height: 24px;
			background-color: #3d91f4;
			text-align: center;
			color: #fff;
			cursor: pointer;
			font-size: 13px;
			border-radius: 3px;
		}
		.main_box {
            padding:0px 20px 24px 20px;
            background-color: #fff;
            margin-bottom: 20px;
            border-radius: 5px;
            h6.title {
                line-height: 64px;
                font-size: 17px;
                color: #348DF1;
                font-weight: bolder;
                letter-spacing: 2px;
                padding-left: 30px;
                background: url(/imgs/careerArchives/icon_biaoti.png) no-repeat 0px center;
                p {
                	float: right;
                	cursor: pointer;
                	margin-top: 20px;
                }
            }
            // 初步访谈记录 评估与诊断记录
	        .recording {
	            border: 1px solid #ebebeb;
	            border-radius: 5px;
	            height: 132px;
	            .top {
	                height: 90px;
	                line-height: 90px;
	                text-align: center;
	                cursor: pointer;
	                width: 66px;
	                margin: 0 auto;
	            }
	            .foot {
	                width: 490px;
	                margin: 0 auto;
	                display: flex;
	                justify-content: space-between;
	                p {
	                    font-size: 14px;
	                    color: #666;
	                    padding-left: 40px;
	                    span {
	                        color: #358ced;
	                        cursor: pointer;
	                    }
	                }
	            }
	        }
            .table_box {
	            table {
	                tr {
	                    th {
	                        background-color: #f3f4f8;
	                        border: 1px solid #ebebeb;
	                        color: #000;
	                        font-size: 14px;
	                        font-weight: 600;
							text-align: center;
							padding: 10px;
							line-height: 24px;
	                        &:nth-child(1) {
	                        	width: 80%;
	                        }	                        
	                        &:nth-child(2) {
	                            width: 20%;
	                        }
	                    }
	                    td {
	                    	padding: 10px;
	                        border: 1px solid #ebebeb;
	                        line-height: 24px;
	                        &:nth-child(1) {
	                            
	                        }
	                        &:nth-child(2) {
	                            text-align: center;

	                        }
	                    }
	                }
	            }
            }
            .history_title {
            	line-height: 74px;
            	height: 74px;
            }
            .now_history_btn {
            	margin-bottom: 20px;
            	height: 26px;
            	line-height: 26px;
            	p {
            		float: left;
            		padding-left: 30px;
            	}
            	.btn_box {
            		float: right;
					.btn {
						float: left;
						margin-left: 16px;   
					}
            	}

            } 
            .now_history_table {
            	table {

        			tr {
        				td {
	                        border: 1px solid #ebebeb;
	                        color: #000;
	                        font-size: 14px;
	                        
	                        text-align: center;
	                        padding: 10px 20px;
	                        &:first-child {
								background-color: #f3f4f8;
								line-height: 60px;
								font-weight: 600;
	                        }
	                        &:last-child {
	                        	text-align: left;
	                        	line-height: 24px;
	                        }
        				}
        			}
        			.table_title {
						td {
							background-color: #f3f4f8;
							border: 1px solid #ebebeb;
							text-align: left;
							padding: 10px 20px;
							font-weight: 600;
							line-height: 24px !important;
						}
					}	
	            }
            }
            .history_table {
            	table {
	                tr {
	                    line-height: 40px;
	                    th {
	                        background-color: #f3f4f8;
	                        border: 1px solid #ebebeb;
	                        color: #000;
	                        font-size: 14px;
	                        font-weight: 600;
	                        &:nth-child(1) {
	                            padding-left: 140px;
	                        }
	                        &:nth-child(2) {
	                            width: 20%;
	                            text-align: center;

	                        }
	                        &:nth-child(3) {
	                            width: 20%;
	                            text-align: center;    
	                        }
	                    }
	                    td {
	                        border: 1px solid #ebebeb;
	                        &:nth-child(1) {
	                            padding-left: 30px;
	                        }
	                        &:nth-child(2) {
	                            text-align: center;

	                        }
	                        &:nth-child(3) {
	                            text-align: center;
	                            span {
	                                color: #358ced;
	                                cursor: pointer;
	                            }    
	                        }
	                    }
	                }
	            }
		        .page_box {
	                padding: 30px;
	                display: flex;
	                justify-content: center;
	                span {
	                    line-height: 32px;
	                    margin-right: 10px;
	                }
	            }
            }
        }
        .mark {
        	position: fixed;
        	left: 0;
        	top: 0;
        	bottom: 0;
        	right: 0;
        	z-index: 10;
        	background: rgba(0,0,0,.5);
	        .card {
	            width: 652px;
	            position: fixed;
	            left: 50%;
	            top:50%;
	            z-index: 20;
	            margin-left: -326px;
	            top: 50px;
	            border-radius: 5px;
	            // overflow: hidden;
	            background-color: #fff;
	            .card_title {
	                line-height: 60px;
	                text-align: center;
	                font-size: 17px;
	                color: #fff;
	                background: url('/imgs/careerManagement/diagnosis/icon_toubu.png');
	            }
	            .card_content {
	                padding: 0px 40px;
	                padding-top: 10px;
	                background-color: #fff;
	                overflow-y: auto;
	                p {
	                    line-height: 30px;
	                    padding-top: 5px;
	                    font-size: 14px;
	                    font-weight: 600;
	                    color: #333;
	                }
	                textarea {
	                    box-sizing: border-box;
	                    padding: 10px;
	                    width: 100%;
	                    height: 75px;
	                    border-radius: 5px;
	                    font-size: 14px;
	                    color: #333;
	                    border: 1px solid #DCDFE6 !important;

	                }
	                textarea::-webkit-input-placeholder { 
	                    color: #666;
	                    font-size: 12px;
	                }
	                .text_targe {
	                	height: 200px;
	                }
	                .save {
	                    width: 76px;
	                    height: 30px;
	                    line-height: 30px;
	                    text-align: center;
	                    border-radius: 3px;
	                    background-color: #358ced;
	                    color: #fff;
	                    font-size: 13px;
	                    cursor: pointer;
	                    margin: 20px auto;

	                }
	            }
	            .close{
	                width: 17px;
	                height: 17px;
	                position: absolute;
	                top:21px;
	                right: 22px;
	                cursor: pointer;
	            }
	        }
        }
	}
</style>
<style>
	.el-input__inner  {
        border: 1px solid #DCDFE6 !important;
        border-radius: 4px;
    }
</style>
