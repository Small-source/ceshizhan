<template>
<!-- 生涯管理 - 学业规划 -辅导 - 归因训练  -->
	<!-- 归因训练 -->
    <div class="Counseling3">
    	<div class="main_box">
    		<!-- <h6 class="title"><span>咨询师评估</span></h6> -->
			<div class="detail_btn_box">
				<p>归因训练</p>
				<div class="btn_box">
					<!-- <div class="btn" @click="addContent()">新增</div> -->
					<div class="btn" @click="addEdit()">编辑</div>
				</div>
			</div>
    		<div class="table_box">
                <table>
                    <tr>
                        <th rowspan="2">归因类别</th>
                        <th colspan="2">因素来源</th>
                        <th colspan="2">稳定性</th>
                        <th colspan="2">可控性</th>
                    </tr>
                    <tr>
                        <th>内在</th>
                        <th>外在</th>
                        <th>稳定</th>
                        <th>不稳定</th>
                        <th>可控</th>
                        <th>不可控</th>
                    </tr>
                    <tr v-for="(value, key, index) in tableObj" :key="index">
                        <td>{{cardObjKey[key]}}</td>
                        <td :class="value[0] == '内在' ? 'checked': 'unchecked'"><span></span></td>
                        <td :class="value[0] == '外在' ? 'checked': 'unchecked'"><span></span></td>
                        <td :class="value[1] == '稳定' ? 'checked': 'unchecked'"><span></span></td>
                        <td :class="value[1] == '不稳定' ? 'checked': 'unchecked'"><span></span></td>
                        <td :class="value[2] == '可控' ? 'checked': 'unchecked'"><span></span></td>
                        <td :class="value[2] == '不可控' ? 'checked': 'unchecked'"><span></span></td>
                    </tr>
                </table>
                <p class="table_foot">学生总结：内在、可控、不稳定因素是<span>{{inherent_controllable_unstable}}</span>。</p>
			</div>
			<!-- <div class="recording" v-else>
                <div class="top" @click="isShowTargetCard = true">
                    <img src="/imgs/careerManagement/diagnosis/icon-zanwuneirong.png" alt="">
                </div>
                <div class="foot">
                    <p>暂无内容！ 请<span @click="addContent()">添加</span>归因训练</p>
                </div>
            </div> -->
    	</div>
    	<!-- 查看评估详情 -->
        <div class="mark" v-show="isShowCard">
        	<div class="card">
	            <p class="card_title">添加归因训练</p>
	            <div class="card_content table_box">
                    <table>
                        <tr>
                            <th rowspan="2">归因类别</th>
                            <th colspan="2">因素来源</th>
                            <th colspan="2">稳定性</th>
                            <th colspan="2">可控性</th>
                        </tr>
                        <tr>
                            <th>内在</th>
                            <th>外在</th>
                            <th>稳定</th>
                            <th>不稳定</th>
                            <th>可控</th>
                            <th>不可控</th>
                        </tr>
                        <tr v-for="(value, key, index) in cardObj" :key="index">
                            <td>{{cardObjKey[key]}}</td>
                            <td :class="value[0] == '内在' ? 'checked': 'unchecked'" @click="$set(value, 0, '内在')"><span></span></td>
                            <td :class="value[0] == '外在' ? 'checked': 'unchecked'" @click="$set(value, 0, '外在')"><span></span></td>
                            <td :class="value[1] == '稳定' ? 'checked': 'unchecked'" @click="$set(value, 1, '稳定')"><span></span></td>
                            <td :class="value[1] == '不稳定' ? 'checked': 'unchecked'" @click="$set(value, 1, '不稳定')"><span></span></td>
                            <td :class="value[2] == '可控' ? 'checked': 'unchecked'" @click="$set(value, 2, '可控')"><span></span></td>
                            <td :class="value[2] == '不可控' ? 'checked': 'unchecked'" @click="$set(value, 2, '不可控')"><span></span></td>
                        </tr>
                    </table>
	                <div class="close" @click="closeCard()"></div>
	                <div class="save" @click="storeCardDetail(cardObj)">保存</div>
	            </div>
	        </div>
        </div>
    </div>
</template>
<script>
    export default {
        name: "Counseling3",
        data(){
            return {
            	// 添加和编辑使用
                cardObjKey: {
                    ability: '能力',
                    strive: '努力',
                    difficulty: '任务难度',
                    luck: '运气',
                    mind_and_body: '身心状态',
                    external_environment: '外界环境'
                },
                arr: [
                    { title: 1 },
                    { title: 1 },
                    { title: 1 },
                    { title: 1 },
                ],
            	cardObj: {
                    "ability": [
                        "",
                        "",
                        ""
                    ],
                    "strive": [
                        "",
                        "",
                        ""
                    ],
                    "difficulty": [
                        "",
                        "",
                        ""
                    ],
                    "luck": [
                        "",
                        "",
                        ""
                    ],
                    "mind_and_body": [
                        "",
                        "",
                        ""
                    ],
                    "external_environment": [
                        "",
                        "",
                        ""
                    ]
                },
            	tableObj: {
                    "ability": [
                        "",
                        "",
                        ""
                    ],
                    "strive": [
                        "",
                        "",
                        ""
                    ],
                    "difficulty": [
                        "",
                        "",
                        ""
                    ],
                    "luck": [
                        "",
                        "",
                        ""
                    ],
                    "mind_and_body": [
                        "",
                        "",
                        ""
                    ],
                    "external_environment": [
                        "",
                        "",
                        ""
                    ]
                },
                inherent_controllable_unstable: '',
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
            // addContent() {
            // 	this.cardObj = {
            //     	id: '',
            //     	// 训练前评估内容
            //     	before_training: '',
            //     	// 训练后评估内容
            //     	after_training: ''
            // 	};
            // 	this.isShowCard = true;
            // },
            addEdit(id) {
            	this.isShowCard = true;
            	this.getCardDetail();
            },
            // // 辅导 - 学习动机 归因训练 - 评估列表
            // getTableList(){
            //     this.$ajax.post(this.G_uri + '/coach/getCoachAttributionAssessList',{
            //     	pageNumber: this.pageNumber,
            //         pageSize: this.pageSize,
            //     },{
            //         headers:{
            //             token: window.sessionStorage.getItem('ymtxToken')
            //         }
            //     })
            //     .then((res)=>{
            //     	let data = res.data.data;
            //    	    if(res.data.code == 2000) {
            //    	    	this.isShowCard = false;
            //    	   		this.tableDetailList = data.list;
            //    	   		this.total = data.page.total_page;
            //     	}
            //     })
            //     .catch((error) => {
            //     	console.log(error);
            //     }) 
            // },
            // 当页数发生变化时触发
            currentChange(num) {
                this.currentPage = num;
                this.getTableList();
            },
            //生涯管理 -辅导 - 学习动机 归因训练详情
            getCardDetail(){
                this.$ajax.post(this.G_uri + '/coach/getCoachAttribution',{
                },{
                    headers:{
                        token: window.sessionStorage.getItem('ymtxToken')
                    }
                })
                .then((res)=>{
                	let data = res.data.data;
                	if(res.data.code == 2000) {
                        if(data.ability) {
                            this.tableObj.ability = data.ability;
                            this.tableObj.strive = data.strive;
                            this.tableObj.difficulty = data.difficulty;
                            this.tableObj.luck = data.luck;
                            this.tableObj.mind_and_body = data.mind_and_body;
                            this.tableObj.external_environment = data.external_environment;
            
                            this.cardObj.ability = data.ability;
                            this.cardObj.strive = data.strive;
                            this.cardObj.difficulty = data.difficulty;
                            this.cardObj.luck = data.luck;
                            this.cardObj.mind_and_body = data.mind_and_body;
                            this.cardObj.external_environment = data.external_environment; 

                            this.inherent_controllable_unstable = data.inherent_controllable_unstable;               
                        }	
                	}
                })
                .catch((error) => {
                	console.log(error);
                }) 
            },

            //生涯管理 - 辅导 - 学习动机 归因训练 保存
            storeCardDetail(obj){
                this.$ajax.post(this.G_uri + '/coach/storeCoachAttribution',{
                    ability: obj.ability,
                    strive: obj.strive,
                    difficulty: obj.difficulty,
                    luck: obj.luck,
                    mind_and_body: obj.mind_and_body,
                    external_environment: obj.external_environment,
                },{
                    headers:{
                        token: window.sessionStorage.getItem('ymtxToken')
                    }
                })
                .then((res)=>{
                	if(res.data.code == 2000) {
                        if(res.data.data.id) {
                            this.isShowCard = false;
                            this.getCardDetail();

                        }
                		// this.getTableList();
                		// this.successMessage();
                	}
                })
                .catch((error) => {
                	console.log(error);
                }) 
            },
            // 生涯管理 - 辅导 - 学习动机 归因训练 - 评估删除
            // deleteTableLis(id){
            //     this.$ajax.post(this.G_uri + '/coach/delCoachAttributionAssess',{
            //     	id: id,
            //     },{
            //         headers:{
            //             token: window.sessionStorage.getItem('ymtxToken')
            //         }
            //     })
            //     .then((res)=>{
            //     	let data = res.data.data;
            //     	if(res.data.code == 2000) {
            //     		this.getTableList();
            //     	}
            //     })
            //     .catch((error) => {
            //     	console.log(error);
            //     }) 
            // },
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
        	// this.storeCardDetail();
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
	.Counseling3 {
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
        .table_box {
            .table_foot {
                padding-top: 10px;
                line-height: 40px;
                color: #2c8ffc;
                span {
                    padding-left: 5px;
                    padding-right: 5px;
                    font-size: 16px;
                    border-bottom: 1px solid #2c8ffc;
                }

            }
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
                    }
                    td {
                        border: 1px solid #ebebeb;
                        line-height: 44px;
                        width: 13%;
                        text-align: center;
                        span {
                            cursor: pointer;
                            display: inline-block;
                            width: 46px;
                            height: 30px;
                            margin-top: 7px;
                        }
                        &:nth-child(1) {
                             width: 22%;
                        }
                    }
                    .checked {
                        span {
                            background: url(/imgs/careerManagement/counseling/icon_duigoulan.png) no-repeat center;
                        }
                        
                    }
                    .unchecked {
                        span {
                           background: url(/imgs/careerManagement/counseling/icon_duigouhui.png) no-repeat center; 
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
	                    }
	                    td {
	                    	padding: 10px;
	                        border: 1px solid #ebebeb;
	                        line-height: 24px;
                            width: 13%;
                            text-align: center;
	                        &:nth-child(1) {
							     width: 22%;
							}
	                    }
                        // .checked {
                        //     background: url(/imgs/careerManagement/counseling/icon_duigoulan.png) no-repeat center;
                        // }
                        // .unchecked {
                        //     background: url(/imgs/careerManagement/counseling/icon_duigouhui.png) no-repeat center;
                        // }
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
	            width: 800px;
	            position: fixed;
	            left: 50%;
	            top:50%;
	            z-index: 20;
	            margin-left: -400px;
	            top: 50px;
	            border-radius: 5px;
	            background-color: #fff;
	            .card_title {
	                line-height: 70px;
	                text-align: center;
	                font-size: 17px;
	                color: #fff;
	                background: url('/imgs/careerManagement/diagnosis/icon_toubu.png') no-repeat;
                    background-size: 100% 100%;
	            }
	            .card_content {
	                padding: 10px;
	                background-color: #fff;
	                overflow-y: auto;
	                p {
	                    line-height: 30px;
	                    padding-top: 5px;
	                    font-size: 14px;
	                    font-weight: 600;
	                    color: #333;
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
	                width: 30px;
	                height: 30px;
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