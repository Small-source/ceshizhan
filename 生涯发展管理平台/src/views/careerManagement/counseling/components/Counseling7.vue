<!-- 生涯管理 - 学业规划 -辅导 - 学习习惯 发现黄金时间  -->
<template>
    <div class="Counseling7">
    	<div class="main_box">
    		<!-- <h6 class="title"><span>咨询师评估</span></h6> -->
			<div class="detail_btn_box">
				<p>发现黄金时间</p>
				<div class="btn_box">
					<!-- <div class="btn" @click="addContent()">新增</div> -->
					<div class="btn" @click="addEdit()" v-if="tableDetailList">编辑</div>
				</div>
			</div>
			<div class="list_box" v-if="tableDetailList">
				<ul>
					<li>
						<img src="/imgs/careerManagement/counseling/icon_huangjin.png" alt="">
						<div class="detail_box">
							<p v-for="(item,index) in tableDetailList['黄金时间段']" :key="index">{{item}}</p>
						</div>
					</li>
					<li>
						<img src="/imgs/careerManagement/counseling/icon_jingliyiban.png" alt="">
						<div class="detail_box">
							<p v-for="(item,index) in tableDetailList['精力一般']" :key="index">{{item}}</p>
						</div>
					</li>
					<li>
						<img src="/imgs/careerManagement/counseling/icon_bijiaokun.png" alt="">
						<div class="detail_box">
							<p v-for="(item,index) in tableDetailList['比较困']" :key="index">{{item}}</p>
						</div>
					</li>
					<li>
						<img src="/imgs/careerManagement/counseling/icon_feichangkun.png" alt="">
						<div class="detail_box">
							<p v-for="(item,index) in tableDetailList['非常困']" :key="index">{{item}}</p>
						</div>
					</li>
				</ul>
			</div>
			<div class="recording" v-else>
                <div class="top" @click="isShowTargetCard = true">
                    <img src="/imgs/careerManagement/diagnosis/icon-zanwuneirong.png" alt="">
                </div>
                <div class="foot">
                    <p>暂无内容！ 请<span @click="addContent()">添加</span>发现黄金时间</p>
                    <!-- <p>备注：请让咨询师填写此项内容</p> -->
                </div>
            </div>
    	</div>
    	<!-- 查看评估详情 -->
        <div class="mark" v-show="isShowCard">
        	<div class="card">
	            <p class="card_title">添加评估与诊断</p>
	            <div class="card_content">
	                <!-- <div class="time">
	                    访谈时间：
	                    <el-date-picker
	                        v-model="time_diagnosis"
	                        type="date"
	                        placeholder="请选择访谈日期"
	                        value-format="yyyy-MM-dd"
	                        readonly
	                        >
	                    </el-date-picker>
	                </div> -->
	               <!--  <p>训练前评估</p>
	                <textarea v-model="cardObj.before_training" class="read_dia"></textarea>
	                <p>训练后评估</p>
	                <textarea v-model="cardObj.after_training" class="read_dia"></textarea>
	                <div class="close" @click="closeCard()"></div>
	                <div class="save" @click="storeCardDetail(cardObj)">保存</div> -->
	                <p class="remind">尝试不同时间段学习，坚持6天，根据自己的学习状态和学习成果判断。你能够清楚地感受到自己的学习状态（无法集中注意或者注意力非常集中、懒散或者昂扬等），也能清楚地知道自己的学习效果（如背诵的效率，做题的正确率等等）。然后根据这些感受和效果来找到自己的黄金时间，调整学习内容。</p>
	                <ul class="radio_boxs">
	                	<li v-for="(item, index) in cardObj" :key="index">
	                		<p class="title">{{item.title}}</p>
	                		<div class="group">
								<el-radio-group v-model="item.value">
								    <el-radio :label="option" v-for="(option, idx) in radioOpection" :key="idx">{{option}}</el-radio>
								</el-radio-group>
							</div>	
	                	</li>
	                </ul>
	                <div class="close" @click="closeCard()"></div>
	                <div class="save" @click="storeCardDetail(cardObj)">保存</div>
	            </div>
	        </div>
        </div>
    </div>
</template>
<script>
    export default {
        name: "Counseling7",
        data(){
            return {
            	radioOpection: ['非常困', '比较困', '不困但精力一般', '精力充沛'],
            	// 添加和编辑使用
            	cardObj: [
			        {
			            "title": "上午6-8点",
			            "value": ""
			        },
			        {
			            "title": "上午8-10点",
			            "value": ""
			        },
			        {
			            "title": "上午10-12点",
			            "value": ""
			        },
			        {
			            "title": "下午12-14点",
			            "value": ""
			        },
			        {
			            "title": "下午14-16点",
			            "value": ""
			        },
			        {
			            "title": "下午16-18点",
			            "value": ""
			        },
			        {
			            "title": "晚上18-20点",
			            "value": ""
			        },
			        {
			            "title": "晚上20-22点",
			            "value": ""
			        },
			        {
			            "title": "晚上22-24点",
			            "value": ""
			        }
            	],

            	tableDetailList: null,
            	tableAlldata: null,
            	// 是否显示咨询师评估弹窗
            	isShowCard: false,
            	
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
            addContent() {
            	this.cardObj = [
                	{
			            "title": "上午6-8点",
			            "value": ""
			        },
			        {
			            "title": "上午8-10点",
			            "value": ""
			        },
			        {
			            "title": "上午10-12点",
			            "value": ""
			        },
			        {
			            "title": "下午12-14点",
			            "value": ""
			        },
			        {
			            "title": "下午14-16点",
			            "value": ""
			        },
			        {
			            "title": "下午16-18点",
			            "value": ""
			        },
			        {
			            "title": "晚上18-20点",
			            "value": ""
			        },
			        {
			            "title": "晚上20-22点",
			            "value": ""
			        },
			        {
			            "title": "晚上22-24点",
			            "value": ""
			        }
            	];
            	this.isShowCard = true;
            },
            addEdit(id) {
            	this.isShowCard = true;
            	this.getCardDetail(id);
            },
            // 当页数发生变化时触发
            currentChange(num) {
                this.currentPage = num;
                this.getTableList();
            },
            // 生涯管理 -辅导 - 学习习惯 发现黄金时间详情
            getCardDetail(id){
                this.$ajax.post(this.G_uri + '/coach/getCoachPrimeTime',{
                	id: id
                },{
                    headers:{
                        token: window.sessionStorage.getItem('ymtxToken')
                    }
                })
                .then((res)=>{
                	let data = res.data.data;
                	if(res.data.code == 2000) {
                		this.tableAlldata = data;
                		this.cardObj = data.detail;
                		this.tableDetailList = data.prime_time;

                	}
                })
                .catch((error) => {
                	console.log(error);
                }) 
            },

            //生涯管理 - 辅导 - 学习习惯 发现黄金时间保存
            storeCardDetail(obj){
                this.$ajax.post(this.G_uri + '/coach/storeCoachPrimeTime',{
                	// id: 
                	detail: obj
                },{
                    headers:{
                        token: window.sessionStorage.getItem('ymtxToken')
                    }
                })
                .then((res)=>{
                	if(res.data.code == 2000) {
                		this.isShowCard = false;
                		this.getCardDetail();
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
        	isShowCard() {
        		if(this.isShowCard) {
        			this.$nextTick(() => {
	        			this.getHeight();
	        		})
        		}
        	}
        },
        created() {
        	this.getCardDetail();
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
	.Counseling7 {
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
            .list_box {
            	ul{
		        	display: flex;
		        	justify-content: space-between;
		        	li {
						background-color: #f8f8fb;
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
							&:nth-child(3) {
								text-align: center;
								width: 15%;
								font-size: 12px;
							}
							&:nth-child(4) {
								width: 10%;
							}
							&:nth-child(5) {
								width: 10%;
							}
	                    }
	                    td {
	                    	padding: 10px;
	                        border: 1px solid #ebebeb;
	                        line-height: 24px;
	                        &:nth-child(3) {
								text-align: center;
								width: 15%;
								font-size: 12px;
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
	                // p {
	                //     line-height: 30px;
	                //     padding-top: 5px;
	                //     font-size: 14px;
	                //     font-weight: 600;
	                //     color: #333;
	                // }
	                // textarea {
	                //     box-sizing: border-box;
	                //     padding: 10px;
	                //     width: 100%;
	                //     height: 75px;
	                //     border-radius: 5px;
	                //     font-size: 14px;
	                //     color: #333;
	                //     border: 1px solid #DCDFE6 !important;

	                // }
	                // textarea::-webkit-input-placeholder { 
	                //     color: #666;
	                //     font-size: 12px;
	                // }
	                // .text_targe {
	                // 	height: 200px;
	                // }
	                .remind {
	                	line-height: 24px;
	                	font-weight: 600;
	                	color: #333;
	                	font-size: 14px;
	                	margin-bottom: 20px;
	                }
	                .radio_boxs {
	                	li {
	                		display: flex;
	                		font-weight: 600;
	                		font-size: 14px;
	                		line-height: 40px;
	                		border-bottom: 1px solid #DCDFE6; 
	                		.title {
	                			padding-right: 20px;
								width: 120px;
								text-align: right;
	                		}
	                		.group {

	                		}
	                	}
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