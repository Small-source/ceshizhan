<!-- 生涯管理 - 学业规划 -辅导 - 人际关系  咨询师记录  -->
<template>
	<!-- 咨询师评估 -->
    <div class="Counseling19">
    	<div class="main_box">
    		<h6 class="title"><span>人际关系</span></h6>
			<div class="detail_btn_box">
				<p>咨询师记录</p>
				<div class="btn_box">
					<div class="btn" @click="addContent()">新增</div>
					<!-- <div class="btn" @click="addEdit()">编辑</div> -->
				</div>
			</div>
    		<div class="table_box" v-if="tableDetailList.length">
                <table>
                    <tr>
                        <th>团辅前评估</th>
                        <th>团辅后评估</th>
                        <!-- th>备注</th> -->
                        <th>日期</th>
                        <th>编辑</th>
                        <th>删除</th>
                    </tr>
                    <tr v-for="(item,index) in tableDetailList" :key="index">
                        <td>{{item.groupBefore}}</td>
                        <td>{{item.groupAfter}}</td>
                        <!-- <td>{{item.remark}}</td> -->
                        <td>{{item.date}}</td>
                        <td class="icon icon_edit">
                           <span  @click="addEdit(item.id)"></span>
                        </td>
                        <td class="icon icon_del">
                        	<span  @click="isDelete(item.id)"></span>
                        </td>
                    </tr>
                </table>
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
                    <p>暂无内容！ 请<span @click="addContent()">添加</span>咨询记录</p>
                    <p>备注：请让咨询师填写此项内容</p>
                </div>
            </div>
    	</div>
    	<!-- 查看评估详情 -->
        <div class="mark" v-show="isShowCard">
        	<div class="card">
	            <p class="card_title">添加团辅评估记录</p>
	            <div class="card_content">
	            	<!-- readonly -->
	                <div class="time">
	                    访谈时间：
	                    <el-date-picker
	                        v-model="cardObj.date"
	                        type="date"
	                        placeholder="请选择访谈日期"
	                        value-format="yyyy-MM-dd"
	                        >
	                    </el-date-picker>
	                </div>
	                <p>团辅前评估</p>
	                <textarea v-model="cardObj.groupBefore" class="read_dia"></textarea>
	                <p>团辅后评估</p>
	                <textarea v-model="cardObj.groupAfter" class="read_dia"></textarea>
	                <div class="close" @click="closeCard()"></div>
	                <!-- cardObj.id如果存在则是编辑，如果为空则是新增 -->
	                <div class="save" @click="storeCardDetail(cardObj)" v-if="cardObj.id">保存</div>
	                <div class="save" @click="addCardDetail(cardObj)" v-else>保存</div>
	            </div>
	        </div>
        </div>
    </div>
</template>
<script>
    export default {
        name: "Counseling19",
        data(){
            return {
            	// 添加和编辑使用
            	cardObj: {
                	id: '',
                	// 团辅前
                	groupBefore: '',
                	// 团辅后
                	groupAfter: '',
                	// 日期
                	date: ''

            	},

            	tableDetailList: [],
            	// 是否显示咨询师评估弹窗
            	isShowCard: false,
            	
            	//分页器
                pageNumber:1,//当前页码
                pageSize:5,//每页大小
                total:1,//总条数













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
            	this.cardObj = {
                	id: '',
                	// 团辅前
                	groupBefore: '',
                	// 团辅后
                	groupAfter: '',
                	// 日期
                	date: ''
            	};
            	this.isShowCard = true;
            },
            addEdit(id) {
            	this.isShowCard = true;
            	this.getCardDetail(id);
            },
            // 生涯管理 - 学业规划 - 辅导 -  人际关系 - 列表
            getTableList(){
                this.$ajax.post(this.G_uri + '/coach/getInterpersonalList',{
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
               	   		this.total = data.page.count;
                	}
                })
                .catch((error) => {
                	console.log(error);
                }) 
            },
            // 当页数发生变化时触发
            currentChange(num) {
                this.pageNumber = num;
                this.getTableList();
            },
            //生涯管理 - 学业规划 - 辅导 -  人际关系 - 详情
            getCardDetail(id){
                this.$ajax.post(this.G_uri + '/coach/detailInterpersonal',{
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

            //生涯管理 - 学业规划 - 辅导 -  人际关系 - 编辑
            storeCardDetail(obj){
                this.$ajax.post(this.G_uri + '/coach/editInterpersonal',{
                	id: obj.id,
                	date: obj.date,
                	groupBefore: obj.groupBefore,
                	groupAfter: obj.groupAfter
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
            //生涯管理 - 学业规划 - 辅导 -  人际关系 - 添加
            addCardDetail(obj){
                this.$ajax.post(this.G_uri + '/coach/storeInterpersonal',{
                	id: obj.id,
                	date: obj.date,
                	groupBefore: obj.groupBefore,
                	groupAfter: obj.groupAfter
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
            // 生涯管理 - 学业规划 - 辅导 -  人际关系 - 删除
            deleteTableLis(id){
                this.$ajax.post(this.G_uri + '/coach/delInterpersonal',{
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
	.Counseling19 {
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
            width: 100%;
            height: 100%;
        	// bottom: 0;
        	// right: 0;
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
	                    height: 100px;
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