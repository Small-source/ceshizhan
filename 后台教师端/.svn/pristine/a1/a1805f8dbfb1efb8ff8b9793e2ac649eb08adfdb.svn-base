<!-- 生涯管理 - 学业规划 -辅导 - 学习习惯 课后复习--小作业  -->
<template>
	<!-- 课后复习--小作业 -->
    <div class="Counseling6">
    	<div class="main_box">
    		<!-- <h6 class="title"><span>学习习惯</span></h6> -->
			<div class="detail_btn_box">
				<p>课后复习--小作业</p>
				<div class="btn_box">
					<div class="btn" @click="addContent()">新增</div>
					<!-- <div class="btn" @click="addEdit()">编辑</div> -->
				</div>
			</div>
    		<div class="table_box" v-if="tableDetailList.length">
                <ul>
                	<li class="table_title">
                		<p>科目</p>
                		<p>初次学习时间</p>
                		<p>复习日期</p>
                		<p>达成情况</p>
                		<p>备注</p>
                		<p>编辑</p>
                		<p>删除</p>
                	</li>
                	<li v-for="(item, index) in tableDetailList" :key="index">
                		<div class="lis_box">{{item.subject}}</div>
                		<div class="lis_box">{{item.first_date}}</div>
                		<div class="lis_box project_box">
                			<div class="child_box" v-for="(child,$index) in item.review_situation" :key="$index">
                				<div class="child">{{child.date}}</div>
                				<!-- <div class="child">{{child.status}}</div> -->
                				<div class="child">
                					<span class="duihao" v-if="child.status == '未完成'" @click="child.status='已完成';goFinish(index);"></span>
                					<span class="finish" v-else @click="child.status='未完成';goFinish(index);"></span>
                				</div>
                				<div class="child">{{child.remark}}</div>
                			</div>
                		</div>
                		<div class="lis_box icon icon_edit" >
                			<span  @click="addEdit(item.id)"></span>
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
                    <img src="/career/imgs/careerManagement/diagnosis/icon-zanwuneirong.png" alt="">
                </div>
                <div class="foot">
                    <p>暂无内容！ 请<span @click="addContent()">添加</span>课前预习--小作业</p>
                    <!-- <p>备注：请让咨询师填写此项内容</p> -->
                </div>
            </div>
    	</div>
    	<!-- 查看评估详情 -->
        <div class="mark" v-if="isShowCard">
        	<div class="card">
	            <p class="card_title">添加评估与诊断</p>
	            <div class="card_content">
	                <p>科目</p>
	                <input v-model="cardObj.subject"></input>
	                <!-- <p>初次学习时间</p> -->
                    <p>初次学习时间<el-date-picker
                        v-model="cardObj.first_date"
                        type="date"
                        placeholder="请选择访谈日期"
                        value-format="yyyy-MM-dd"
                        >
                        </el-date-picker>
                    </p>
	                <div v-for="(item, idx) in cardObj.review_situation" :key="idx" v-if="isEdit">
	                	<p>复习日期：<el-date-picker
	                        v-model="item.date"
	                        type="date"
	                        placeholder="请选择访谈日期"
	                        value-format="yyyy-MM-dd"
	                        >
	                    </el-date-picker></p>
	                	<p>备注</p>
	                	<textarea v-model="item.remark" class="read_dia"></textarea>
	                </div>
	                <div class="save" @click="storeCardDetail(cardObj)">保存</div>
	                <div class="close" @click="closeCard()"></div>
	            </div>
	        </div>
        </div>
    </div>
</template>
<script>
    module.exports = {
        // name: "Counseling6",
        data(){
            return {
              studentId: window.sessionStorage.getItem('studentId'),
            	// 添加和编辑使用
            	cardObj: {
                	id: '',
                	// 科目
                	subject: '',
                	// 初次学习时间
                	first_date: '',
                	// 复习日期/完成情况/备注
                    review_situation: [
				        {
				            date: "",
				            status: "未完成",
				            remark: ''
				        },
				        {
				            date: "",
				            status: "未完成",
				            remark: ''
				        }
				    ],
          
                
            	},

            	tableDetailList: [],
            	// 是否显示咨询师评估弹窗
            	isShowCard: false,
                // 是否是添加
                isEdit: false,
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
                	this.isEdit = false;
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
            goFinish(index) {
            	let obj = this.tableDetailList[index];
            	this.storeCardDetail(obj);
            },
            addContent() {
            	this.cardObj = {
                	id: '',
                	// 科目
                	subject: '',
                	// 初次学习时间
                	first_date: '',
                	// 复习日期/完成情况/备注
                    review_situation: [
				        {
				            date: "",
				            status: "未完成",
				            remark: ''
				        },
				        {
				            date: "",
				            status: "未完成",
				            remark: ''
				        }
				    ],
                
            	};
                this.isShowCard = true;
            	this.isEdit = false;
            },
            addEdit(id) {
            	this.isShowCard = true;
                this.isEdit = true;
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
            // 辅导 - 学习习惯  课后复习 - 小作业列表
            getTableList(){
                this.$ajax.post(this.G_uri + '/careerArchives/getCoachReviewAfterClassList',{
                  studentId: this.studentId,
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
            //生涯管理 -辅导 - 学习习惯  课后复习 - 小作业详情
            getCardDetail(id){
                this.$ajax.post(this.G_uri + '/careerArchives/getCoachReviewAfterClass',{
                  studentId: this.studentId,
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

            //生涯管理 -辅导 - 学习习惯  课后复习 - 小作业保存
            storeCardDetail(obj){
                this.$ajax.post(this.G_uri + '/careerArchives/storeCoachReviewAfterClass',{
                  studentId: this.studentId,
                	id: obj.id,
                	subject: obj.subject,
                	first_date: obj.first_date,
                	review_situation: obj.review_situation
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
            // 生涯管理 - 辅导-学习习惯  课后复习 - 小作业删除
            deleteTableLis(id){
                this.$ajax.post(this.G_uri + '/careerArchives/delCoachReviewAfterClass',{
                  studentId: this.studentId,
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
            	$('.card').each(function() {
            		let cardHeight = $(this).height();
                    console.log(cardHeight)
            		if( cardHeight > Height) {
	            		$(this).height(Height-20);
	            		$(this).find('.card_content').outerHeight(Height - 62-20);
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
        	},
            isEdit() {
                if(this.isEdit) {
                    this.$nextTick(() => {
                        this.getHeight();
                    })
                }
            }
        },
        created() {
        	this.getTableList();
        },
        mounted(){
        }
    }
</script>
<style scoped>
.Counseling6 .btn {
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
.Counseling6 .main_box {
  padding: 0px 20px 20px 20px;
  background-color: #fff;
  margin-bottom: 20px;
  border-radius: 5px;
}
.Counseling6 .main_box h6.title {
  line-height: 64px;
  font-size: 17px;
  color: #348DF1;
  font-weight: bolder;
  letter-spacing: 2px;
  padding-left: 30px;
  background: url(/career/imgs/careerArchives/icon_biaoti.png) no-repeat 0px center;
}
.Counseling6 .main_box h6.title p {
  float: right;
  cursor: pointer;
  margin-top: 20px;
}
.Counseling6 .main_box .recording {
  border: 1px solid #ebebeb;
  border-radius: 5px;
  height: 132px;
}
.Counseling6 .main_box .recording .top {
  height: 90px;
  line-height: 90px;
  text-align: center;
  cursor: pointer;
  width: 66px;
  margin: 0 auto;
}
.Counseling6 .main_box .recording .foot {
  width: 490px;
  margin: 0 auto;
  display: flex;
  justify-content: space-around;
}
.Counseling6 .main_box .recording .foot p {
  font-size: 14px;
  color: #666;
  padding-left: 40px;
}
.Counseling6 .main_box .recording .foot p span {
  color: #358ced;
  cursor: pointer;
}
.Counseling6 .main_box .table_box ul li {
  display: flex;
}
.Counseling6 .main_box .table_box ul li .lis_box {
  display: flex;
  justify-content: center;
  align-items: center;
  line-height: 20px;
  min-height: 40px;
  border-right: 1px solid #ebebeb;
  border-bottom: 1px solid #ebebeb;
  width: 10%;
}
.Counseling6 .main_box .table_box ul li .lis_box:nth-child(1) {
  width: 15%;
  border-left: 1px solid #ebebeb;
}
.Counseling6 .main_box .table_box ul li .lis_box:nth-child(2) {
  width: 15%;
}
.Counseling6 .main_box .table_box ul li .lis_box:nth-child(3) {
  width: 50%;
}
.Counseling6 .main_box .table_box ul li .lis_box:last-child {
  border-right: 0px;
}
.Counseling6 .main_box .table_box ul li .project_box {
  display: block;
}
.Counseling6 .main_box .table_box ul li .project_box .child_box {
  display: flex;
  border-bottom: 1px solid #ebebeb;
}
.Counseling6 .main_box .table_box ul li .project_box .child_box .child {
  line-height: 24px;
  min-height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.Counseling6 .main_box .table_box ul li .project_box .child_box .child:nth-child(1) {
  font-size: 12px;
  width: 20%;
  border-right: 1px solid #ebebeb;
}
.Counseling6 .main_box .table_box ul li .project_box .child_box .child:nth-child(2) {
  width: 20%;
  border-right: 1px solid #ebebeb;
}
.Counseling6 .main_box .table_box ul li .project_box .child_box .child:last-child {
  width: 60%;
  border: none;
}
.Counseling6 .main_box .table_box ul li .project_box .child_box .child span {
  display: block;
  width: 100%;
  height: 100%;
  cursor: pointer;
}
.Counseling6 .main_box .table_box ul li .project_box .child_box .child .duihao {
  background: url(/career/imgs/careerManagement/counseling/icon_duigouhui.png) no-repeat center;
}
.Counseling6 .main_box .table_box ul li .project_box .child_box .child .duihao:hover {
  background: url(/career/imgs/careerManagement/counseling/icon_duigoulan.png) no-repeat center;
}
.Counseling6 .main_box .table_box ul li .project_box .child_box .child .finish {
  background: url(/career/imgs/careerManagement/counseling/icon_finish.png) no-repeat center;
}
.Counseling6 .main_box .table_box ul li .icon {
  text-align: center;
  cursor: pointer;
}
.Counseling6 .main_box .table_box ul li .icon span {
  cursor: pointer;
  display: inline-block;
  width: 34px;
  height: 20px;
  border: 1px solid #EDEDED;
  border-radius: 5px;
}
.Counseling6 .main_box .table_box ul li .icon_edit span {
  background: url(/career/imgs/careerManagement/icon_bianjihui.png) no-repeat center center;
}
.Counseling6 .main_box .table_box ul li .icon_edit span:hover {
  background-color: #3A90F3;
}
.Counseling6 .main_box .table_box ul li .icon_del span {
  background: url(/career/imgs/careerManagement/icon_lajitonghui.png) no-repeat center center;
}
.Counseling6 .main_box .table_box ul li .icon_del span:hover {
  background-color: #FB4945;
}
.Counseling6 .main_box .table_box .table_title {
  display: flex;
  line-height: 40px;
  background-color: #f3f4f8;
  border: 1px solid #ebebeb;
}
.Counseling6 .main_box .table_box .table_title p {
  text-align: center;
  border-right: 1px solid #ebebeb;
  width: 10%;
}
.Counseling6 .main_box .table_box .table_title p:nth-child(5) {
  width: 30%;
}
.Counseling6 .main_box .table_box .table_title p:nth-child(2) {
  width: 15%;
}
.Counseling6 .main_box .table_box .table_title p:nth-child(1) {
  width: 15%;
}
.Counseling6 .main_box .table_box .table_title p:last-child {
  border-right: 0px;
}
.Counseling6 .main_box .detail_btn_box {
  margin-bottom: 20px;
  height: 26px;
  line-height: 26px;
}
.Counseling6 .main_box .detail_btn_box p {
  background: url(/career/imgs/careerManagement/counseling/icon.png) no-repeat 0px center;
  font-weight: 600;
  float: left;
  padding-left: 30px;
}
.Counseling6 .main_box .detail_btn_box .btn_box {
  float: right;
}
.Counseling6 .main_box .detail_btn_box .btn_box .btn {
  float: left;
  margin-left: 16px;
}
.Counseling6 .main_box .page_box {
  padding: 30px;
  display: flex;
  justify-content: center;
}
.Counseling6 .main_box .page_box span {
  line-height: 32px;
  margin-right: 10px;
}
.Counseling6 .mark {
  position: fixed;
  left: 0;
  top: 0;
  bottom: 0;
  right: 0;
  z-index: 10;
  background: rgba(0, 0, 0, 0.5);
}
.Counseling6 .mark .card {
  width: 652px;
  position: fixed;
  left: 50%;
  top: 50%;
  z-index: 20;
  margin-left: -326px;
  top: 50px;
  border-radius: 5px;
  background-color: #fff;
}
.Counseling6 .mark .card .card_title {
  line-height: 60px;
  text-align: center;
  font-size: 17px;
  color: #fff;
  background: url('/career/imgs/careerManagement/diagnosis/icon_toubu.png');
}
.Counseling6 .mark .card .card_content {
  padding: 10px 40px;
  background-color: #fff;
  overflow-y: auto;
}
.Counseling6 .mark .card .card_content p {
  line-height: 30px;
  padding-top: 5px;
  font-size: 14px;
  font-weight: 600;
  color: #333;
}
.Counseling6 .mark .card .card_content textarea {
  box-sizing: border-box;
  padding: 10px;
  width: 100%;
  height: 75px;
  border-radius: 5px;
  font-size: 14px;
  color: #333;
  border: 1px solid #DCDFE6 !important;
}
.Counseling6 .mark .card .card_content textarea::-webkit-input-placeholder {
  color: #666;
  font-size: 12px;
}
.Counseling6 .mark .card .card_content .text_targe {
  height: 200px;
}
.Counseling6 .mark .card .card_content input {
  box-sizing: border-box;
  padding: 0px 10px;
  width: 100%;
  line-height: 40px;
  border-radius: 5px;
  font-size: 14px;
  color: #333;
  border: 1px solid #DCDFE6 !important;
}
.Counseling6 .mark .card .card_content .save {
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
.Counseling6 .mark .card .card_content .add_project {
  cursor: pointer;
}
.Counseling6 .mark .card .close {
  width: 17px;
  height: 17px;
  position: absolute;
  top: 21px;
  right: 22px;
  cursor: pointer;
}

</style>
<style>
	.el-input__inner  {
        border: 1px solid #DCDFE6 !important;
        border-radius: 4px;
    }
</style>