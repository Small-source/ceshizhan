<template>
    <div class="recordList">
		<h6 class="title"><span>咨询记录</span><p class="btn" @click="$router.push('/consultation/recordDetail?isEdit=1')"  v-if="recordList.length">新增</p></h6>
		<div class="history_table" v-if="recordList.length">
			<table>
				<tr>
                    <th class="heading">标题</th>
					<th>咨询主题</th>
					<th>日期</th>
					<th>操作</th>
				</tr>
				<tr v-for="(item,index) in recordList" :key="index">
                    <td  class="heading">第{{item.num}}次 学业规划</td>
					<td><!-- <template v-for="(child) in item.themeTraining">{{child}}</template> -->{{item.themeTraining}}</td>
					<td class="time">{{item.date}}</td>
					<td>
                        <span @click="$router.push('/consultation/recordDetail?isEdit=2&id=' + item.id)">查看</span>
                        <span   class="icon" @click="$router.push('/consultation/recordDetail?isEdit=3&id=' + item.id)"></span>
                        <span  class="icon icon2" @click="goDelete(item.id)"></span>
                    </td>
				</tr>
			</table>
			<div class="page_box">
                <span>共{{count}}条</span>
                <el-pagination
                  background
                  layout="prev, pager, next"
                  :page-size="pageSize"
                  :total="count"
                  @current-change="currentChange"
                >
                </el-pagination>
            </div>
		</div>
        <div class="recording" v-else>
            <div class="top" @click="$router.push('/consultation/recordDetail')">
                <img src="/imgs/careerManagement/diagnosis/icon-zanwuneirong.png" alt="">
            </div>
            <div class="foot">
                <p>暂无内容！ <span @click="$router.push('/consultation/recordDetail?isEdit=1')">添加</span>咨询记录</p>
            </div>
        </div>
    </div>
</template>
<script>
    // 最顶部提示卡片
    // import  masks from '../../../components/mask.vue'
    export default {
        // components:{masks},
        name: 'recordList',
        data() {
            return {
            	// 获取咨询记录列表
            	recordList: [],
            	// 报告共有多少条
                count: 1,
                // 报告一共有多少页
                totalPage: '',
                // 每页显示多少条
                pageSize: 5,
                // 当前页
                currentPage: 1
            }
        },
        methods: {
        	// 当页数发生变化时触发
            currentChange(currentPage) {
                this.currentPage = currentPage;
                this.getConsultLogList();
            },
        	 //状态咨询表
            getConsultLogList(){
                this.$ajax.post(this.G_uri + '/plan/getConsultRecordsList',{
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
                		this.recordList = data.list;
                	}
                })
                .catch((error) => {
                	console.log(error);
                })
            },
            goDelete(id) {
                this.$confirm('内容删除后将无法恢复，是否删除?', '提示', {
                  confirmButtonText: '确定',
                  cancelButtonText: '取消',
                  type: 'warning'
                }).then(() => {
                    this.deleteConsultRecords(id);
                }).catch(() => {
                  this.$message({
                    type: 'info',
                    message: '已取消删除'
                  });
                });
            },
            //状态咨询 - 咨询记录 - 删除
            deleteConsultRecords(id){
                this.$ajax.post(this.G_uri + '/plan/deleteConsultRecords',{
                    id: id
                },{
                    headers:{
                        token: window.sessionStorage.getItem('ymtxToken')
                    }
                })
                .then((res)=>{
                    this.getConsultLogList();
                    this.$message({
                        type: 'success',
                        message: '删除成功!'
                    });
                })
                .catch((error) => {
                    console.log(error);
                })
            },
        },
        watch: {
        },
        created() {
        	this.getConsultLogList();
        }
    }
</script>
<style type="text/css" lang='less' scoped>
	.recordList {
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
                justify-content: center;
                p {
                    font-size: 14px;
                    color: #666;
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
                        text-align: center;
                    }
                    .heading {
                        width: 160px;
                        text-align: center;
                    }
                    td {
                        border: 1px solid #ebebeb;
                        padding: 0px 10px;
                        text-align: center;
                        &:last-child {
                            text-align: center;
                            // display: flex;
                            // justify-content: space-between;
                            span {
                                color: #358ced;
                                cursor: pointer;
                                margin-right: 8px;
                            }
                        }
                    }
                    .time {
                        width: 156px;
                        font-size: 12px;
                        text-align: center;
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
        .icon{
            display: inline-block !important;
            float: none !important;
            width: 34px;
            height: 20px;
            border-radius: 3px;
            cursor: pointer;
            position: relative;
            top:5px;
            background-position: center;
            background-repeat: no-repeat;
            background-image:url("/imgs/schoolWork/icon_bianjihui.png") ;
            &:hover{
                background-image:url("/imgs/schoolWork/icon_bianjibai.png");
                background-color: #3087E6;
            }
        }
        .icon2{
            background-image:url("/imgs/schoolWork/icon_lajitonghui.png");
            &:hover{
                background-image:url("/imgs/schoolWork/icon_lajitongbai.png");
                background-color: #FB4945;
            }
        }
    }
</style>
