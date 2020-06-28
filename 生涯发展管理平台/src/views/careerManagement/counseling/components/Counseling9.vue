<!-- 生涯管理 - 学业规划 -辅导 - 学习习惯 养成好习惯  -->
<template>
	<!-- 养成好习惯-->
    <div class="Counseling9">
    	<div class="main_box">
    		<!-- <h6 class="title"><span>养成好习惯</span></h6> -->
			<div class="detail_btn_box">
				<p>养成好习惯</p>
				<div class="btn_box">
					<div class="btn" @click="addContent();step=1">新增</div>
					<!-- <div class="btn" @click="addEdit()">编辑</div> -->
				</div>
			</div>
    		<div class="table_box" v-if="tableDetailList.length">
                <ul>
                	<li class="table_title">
                		<p>习惯</p>
                		<p>时间</p>
                		<p>小目标</p>
                		<p>完成情况</p>
                		<p>体会</p>
                        <p>奖励</p>
                		<p>奖励</p>
                		<p>编辑</p>
                		<p>删除</p>
                	</li>
                	<li v-for="(item, index) in tableDetailList" :key="index">
                		<div class="lis_box">{{item.habit}}</div>
                		<div class="lis_box">{{item.date}}</div>
                		<div class="lis_box project_box">
                			<div class="child_box" v-for="(child,$index) in item.detail" :key="$index">
                				<div class="child">
                                    <div class="grandSon"  v-for="(grandSon,idx) in child.list" :key="idx">
                                        <div class="box">{{grandSon.title}}</div>
                                        <div class="box">
                                             <span class="duihao" v-if="grandSon.status == '未完成'" @click="grandSon.status='已完成';goFinish(item);"></span>
                                            <span class="finish" v-else @click="grandSon.status='未完成';goFinish(item);"></span>
                                        </div>
                                    </div>
                                </div>
                				<div class="child icon icon_edit">
                                    <template  v-if="child.experience">{{child.experience}}</template><template v-else><span  @click="addEdit(item.id);if($index == 0) {step = 2}else {step = 4}"></span></template>
                				</div>
                                <div class="child icon icon_edit">
                                    <template  v-if="child.reward">{{child.reward}}</template><template v-else><span  @click="addEdit(item.id);if($index == 0) {step = 2}else {step = 4}"></span></template>
                                </div>
                			</div>
                		</div>
                        <div class="lis_box icon icon_edit" >
                            <span  @click="addEdit(item.id); step = 6">{{item.reward}}</span>
                        </div>
                		<div class="lis_box icon icon_edit" >
                			<span  @click="addEdit(item.id); step = 7"></span>
                		</div>
                		<div class="lis_box icon icon_del">
                			<span  @click="isDelete(item.id)"></span>
                		</div>
                	</li>
                </ul>
                <div class="page_box">
	                <el-pagination
	                           background
	                           @current-change="currentChange"
	                           :page-size="pageSize"
	                           layout="prev, pager, next"
	                           :total="total"
	                           class="pages">
	                </el-pagination>	
	             </div>
			</div>
			<div class="recording" v-else>
                <div class="top" @click="isShowTargetCard = true">
                    <img src="/imgs/careerManagement/diagnosis/icon-zanwuneirong.png" alt="">
                </div>
                <div class="foot">
                    <p>暂无内容！ 请<span @click="addContent()">添加</span>习惯</p>
                    <!-- <p>备注：请让咨询师填写此项内容</p> -->
                </div>
            </div>
    	</div>
    	<!-- 查看评估详情 -->
        <div class="mark" v-show="isShowCard">
        	<div class="card">
	            <p class="card_title">养成好习惯</p>
	            <div class="card_content">
	            	<div v-show="step == 1 |step == 7">
	            		<p>习惯</p>
	                	<input v-model="cardObj.habit"></input>
	            	</div>
	             	<div v-show="step == 1  || step == 7">
	             		 <p>时间</p>
	                	<input v-model="cardObj.date"></input>
	             	</div>
	               	<div v-show="step == 2 || step == 7">
	               		<p>体会1</p>
	                	<textarea v-model="cardObj.detail[0].experience"></textarea>
	               	</div>
	              	<div v-show="step == 3  || step == 7">
	              		<p>奖励1</p>
                		<textarea v-model="cardObj.detail[0].reward"></textarea>
	              	</div>
                    <div v-show="step == 4 || step == 7">
                        <p>体会2</p>
                        <textarea v-model="cardObj.detail[1].experience"></textarea>
                    </div>
                    <div v-show="step == 5  || step == 7">
                        <p>奖励2</p>
                        <textarea v-model="cardObj.detail[1].reward"></textarea>
                    </div>
	              	<div v-show="step == 6  || step == 7">
	              		<p>奖励</p>
                		<textarea v-model="cardObj.reward"></textarea>
	              	</div>
	                <!-- 实际预习时间 -->
	                <div class="close" @click="closeCard()"></div>
	                <!-- <div class="add_project btn" @click="addProject()" v-show="step == 1  || step == 5">添加项目</div> -->
	                <div class="save" @click="storeCardDetail(cardObj)">保存</div>
	            </div>
	        </div>
        </div>
    </div>
</template>
<script>
    export default {
        name: "Counseling9",
        data(){
            return {
            	// 添加和编辑使用
            	cardObj: {
                	id: '',   // 添加时不用传  id  reward   detail
                    date:"2019-11-26",
                    // 习惯
                    habit: "",
                    // 奖励
                    reward:"",
                    detail: [
                      {
                        "experience":"",  //体会
                        "reward":"奖励",
                        "list":[
                          {
                            "title": "坚持1天",
                            "status": "未完成"
                          },
                          {
                            "title": "坚持3天",
                            "status": "未完成"
                          },
                          {
                            "title": "坚持7天",
                            "status": "未完成"
                          }
                        ]
                      },{
                        "experience":"",
                        "reward":"奖励",
                        "list":[
                          {
                            "title": "坚持2周",
                            "status": "未完成"
                          },
                          {
                            "title": "坚持1个月",
                            "status": "未完成"
                          }
                        ]
                      }
                    ]
            	},
            	tableDetailList: [],
            	// 是否显示咨询师评估弹窗
            	isShowCard: false,
            	// 编辑的分类 5是全部显示
            	step: 1,
            	//分页器
                pageNumber:1,//当前页码
                pageSize:5,//每页大小
                total:0,//总条数

            }
        },
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
            exitConfirm(){
                this.$confirm('退出后不会保存编辑内容，确认退出?', '提示', {
                    confirmButtonText: '确定',
                    cancelButtonText: '取消',
                    type: 'warning'
                }).then(() => {
            		this.isShowCard = false;
                    this.$message({
                        type: 'info',
                        message: '已退出'
                    });
                }).catch((error) => {
                	console.log(error)
                })
            },
            //删除确认
            isDelete(id){
                this.$confirm('删除后不可恢复, 确认删除?', '提示', {
                    confirmButtonText: '确定',
                    cancelButtonText: '取消',
                    type: 'warning'
                }).then(() => {
                    this.deleteTableLis(id);
                    this.$message({
                        type: 'info',
                        message: '删除成功'
                    });
                }).catch((error) => {
                    console.log(error)
                })
            },
            closeCard() {
            	this.exitConfirm();

            },
            goFinish(item) {
        
            	this.storeCardDetail(item);
            },
            addContent() {
            	this.cardObj = {
                    id: '',   // 添加时不用传  id  reward   detail
                    date:"2019-11-26",
                    // 习惯
                    habit: "",
                    // 奖励
                    reward:"",
                    detail: [
                      {
                        "experience":"",  //体会
                        "reward":"奖励",
                        "list":[
                          {
                            "title": "坚持1天",
                            "status": "未完成"
                          },
                          {
                            "title": "坚持3天",
                            "status": "未完成"
                          },
                          {
                            "title": "坚持7天",
                            "status": "未完成"
                          }
                        ]
                      },{
                        "experience":"",
                        "reward":"奖励",
                        "list":[
                          {
                            "title": "坚持2周",
                            "status": "未完成"
                          },
                          {
                            "title": "坚持1个月",
                            "status": "未完成"
                          }
                        ]
                      }
                    ]
                };
            	this.isShowCard = true;
            },
            addEdit(id) {
            	this.isShowCard = true;
            	this.getCardDetail(id);
            },
            // 添加项目
            addProject() {
            	let obj = {
		            title: "",
		            status: "未完成"
		        };
            	this.cardObj.project.push(obj);
            },
            // 辅导 - 学习习惯 养成好习惯列表
            getTableList(){
                this.$ajax.post(this.G_uri + '/coach/getCoachDevelopGoodHabitsList',{
                	pageNumber: this.pageNumber,
                    pageSize: this.pageSize,
                },{
                    headers:{
                        token: window.sessionStorage.getItem('ymtxToken')
                    }
                })
                .then((res)=>{
                	let data = res.data.data;
               	    if(res.data.code == 2000) {
               	    	this.isShowCard = false;
               	   		this.tableDetailList = data.list;
               	   		this.total = data.page.total_page;
                	}
                })
                .catch((error) => {
                	console.log(error);
                }) 
            },
            // 当页数发生变化时触发
            currentChange(num) {
                this.currentPage = num;
                this.getTableList();
            },
            //生涯管理 -辅导 - 学习习惯 养成好习惯详情
            getCardDetail(id){
                this.$ajax.post(this.G_uri + '/coach/getCoachDevelopGoodHabits',{
                	id: id
                },{
                    headers:{
                        token: window.sessionStorage.getItem('ymtxToken')
                    }
                })
                .then((res)=>{
                	let data = res.data.data;
                	if(res.data.code == 2000) {
                		this.cardObj = data;
                	}
                })
                .catch((error) => {
                	console.log(error);
                }) 
            },

            //生涯管理 -辅导 - 学习习惯 养成好习惯保存
            storeCardDetail(obj){
                this.$ajax.post(this.G_uri + '/coach/storeCoachDevelopGoodHabits',{
                	id: obj.id,
                	date: obj.date,
                	habit: obj.habit,
                	reward: obj.reward,
                	detail: obj.detail
                },{
                    headers:{
                        token: window.sessionStorage.getItem('ymtxToken')
                    }
                })
                .then((res)=>{
                	if(res.data.code == 2000) {
                		this.getTableList();
                		this.successMessage();
                	}
                })
                .catch((error) => {
                	console.log(error);
                }) 
            },
            //辅导 - 学习习惯 养成好习惯删除
            deleteTableLis(id){
                this.$ajax.post(this.G_uri + '/coach/delCoachDevelopGoodHabits',{
                	id: id,
                },{
                    headers:{
                        token: window.sessionStorage.getItem('ymtxToken')
                    }
                })
                .then((res)=>{
                	let data = res.data.data;
                	if(res.data.code == 2000) {
                		this.getTableList();
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
        	isShowCard() {
        		if(this.isShowCard) {
        			this.$nextTick(() => {
	        			this.getHeight();
	        		})
        		}
        	}
        },
        created() {
        	this.getTableList();
        	// this.getConsultScheme();
        	// this.getConsultLogList();
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
	.Counseling9 {
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
  			padding:0px 20px 20px 20px;
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
	                justify-content: space-around;
	                p {
	                    font-size: 14px;
	                    color: #666;
	                    // padding-left: 40px;
	                    span {
	                        color: #358ced;
	                        cursor: pointer;
	                    }
	                }
	            }
	        }
            .table_box {
            	ul {
            		li {
            			display: flex;
            			.lis_box {
            				display: flex;
            				justify-content: center;
            				align-items: center;
            				line-height: 20px;
            				min-height: 40px;
            				border-right: 1px solid #ebebeb;
            				border-bottom: 1px solid #ebebeb;
            				width: 10%;
                            font-size: 12px;
	            			&:nth-child(1) {
								width: 139px;
								border-left: 1px solid #ebebeb;
	            			}
	            			&:nth-child(3) {
								width: 15%;	
	            			}
	            		}
	            		.project_box {
	            			width: 45% !important;
	            			display: block;
	            			.child_box {
	                    		display: flex;
	                    		border-bottom: 1px solid #ebebeb;
	                    		&:last-child {
	                    			border: none;
	                    		}
								.child {
									line-height: 24px;
									min-height: 30px;
                                    &:nth-child(2) {
                                        display: flex;
                                        justify-content: center;
                                        align-items: center;
                                    }
                                    &:nth-child(3) {
                                        display: flex;
                                        justify-content: center;
                                        align-items: center;
                                    }
                                    .grandSon {
                                        width: 100%;
                                        display: flex;
                                        min-height: 40px;
                                        border-bottom: 1px solid #ebebeb;
                                        &:last-child {
                                            border: none;
                                        }
                                        .box {
                                            display: flex;
                                            justify-content: center;
                                            align-items: center;
                                            flex: 1;
                                            border-right: 1px solid #ebebeb;
                                            &:last-child {
                                                border: none;
                                            }
                                        }
                                    }
									&:first-child{
                                        width: 186px;
										border-right: 1px solid #ebebeb;
									}
                                    &:nth-child(2) {
                                        width: 139px;
                                        border-right: 1px solid #ebebeb;
                                    }
                                    &:nth-child(3) {
                                        width: 93px;
                                    }

									.duihao {
                                        display: block;
                                        width: 46px;
                                        height: 30px;
                                        cursor: pointer;
										background: url(/imgs/careerManagement/counseling/icon_duigouhui.png) no-repeat center;
										&:hover {
											background: url(/imgs/careerManagement/counseling/icon_duigoulan.png) no-repeat center;
										}
									}
									.finish {
                                        display: block;
                                        width: 46px;
                                        height: 30px;
                                        cursor: pointer;
										background: url(/imgs/careerManagement/counseling/icon_finish.png) no-repeat center;
									}
								}
	                    	}
	            		}
	            		.icon {
	                    	text-align: center;
	                    	cursor: pointer;
	                    	span {
                    		    cursor: pointer;
							    display: inline-block;
							    width: 34px;
							    height: 20px;
							    border: 1px solid #EDEDED;
							    border-radius: 5px;
							    
	                    	}
	                    }
	                    .icon_edit {
							span {
								background: url(/imgs/careerManagement/icon_bianjihui.png) no-repeat center center;
								&:hover {
									background-color: #3A90F3;
								}
							}
	                    }
	                    .icon_del {
							span {
								background: url(/imgs/careerManagement/icon_lajitonghui.png) no-repeat center center;
								&:hover {
									background-color: #FB4945;
								}
							}
	                    }
	                   
            		}
            	}
            	.table_title {
            		display: flex;
            		line-height: 40px;
           			background-color: #f3f4f8;
	               	border: 1px solid #ebebeb;
	               	p{
						text-align: center;
						border-right: 1px solid #ebebeb;
                        width: 10%;
                        &:nth-child(1) {
                            width: 15%;
                            border-left: 1px solid #ebebeb;
                        }
                        &:nth-child(5) {
                            width: 15%;
                            
                        }
						&:last-child {
							border-right: 0px;
						}
	               	}
            	}
            }
            .detail_btn_box {
            	margin-bottom: 20px;
            	height: 26px;
            	line-height: 26px;
            	p {
            		background: url(/imgs/careerManagement/counseling/icon.png) no-repeat 0px center;
            		font-weight: 600;
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
	            background-color: #fff;
	            .card_title {
	                line-height: 60px;
	                text-align: center;
	                font-size: 17px;
	                color: #fff;
	                background: url('/imgs/careerManagement/diagnosis/icon_toubu.png');
	            }
	            .card_content {
	                padding: 10px 40px;
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
	                input {
	                	box-sizing: border-box;
	                    padding:0px 10px;
	                    width: 100%;
	                    line-height: 40px;
	                    border-radius: 5px;
	                    font-size: 14px;
	                    color: #333;
	                    border: 1px solid #DCDFE6 !important;
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
	                .add_project {
	                	cursor: pointer;
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