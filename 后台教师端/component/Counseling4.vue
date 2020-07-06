<template>
	<!-- 生涯管理 - 学业规划 -辅导 - 咨询师评估  -->
	<!-- 咨询师评估 -->
    <div class="Counseling4">
    	<div class="main_box">
    		<!-- <h6 class="title"><span>咨询师评估</span></h6> -->
			<div class="detail_btn_box">
				<p>咨询师评估</p>
				<div class="btn_box">
					<div class="btn" @click="addContent()">新增</div>
					<!-- <div class="btn" @click="addEdit()">编辑</div> -->
				</div>
			</div>
    		<div class="table_box" v-if="tableDetailList.length">
                <table>
                    <tr>
                        <th>训练前评估</th>
                        <th>训练后评估</th>
                        <th>日期</th>
                        <th>编辑</th>
                        <th>删除</th>
                    </tr>
                    <tr v-for="(item,index) in tableDetailList" :key="index">
                        <td>{{item.before_training}}</td>
                        <td>{{item.after_training}}</td>
                        <td>{{item.updated_at}}</td>
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
                    <img src="/career/imgs/careerManagement/diagnosis/icon-zanwuneirong.png" alt="">
                </div>
                <div class="foot">
                    <p>暂无内容！ 请<span @click="addContent()">添加</span>评估</p>
                    <p>备注：请让咨询师填写此项内容</p>
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
	                <p>训练前评估</p>
	                <textarea v-model="cardObj.before_training" class="read_dia"></textarea>
	                <p>训练后评估</p>
	                <textarea v-model="cardObj.after_training" class="read_dia"></textarea>
	                <div class="close" @click="closeCard()"></div>
	                <div class="save" @click="storeCardDetail(cardObj)">保存</div>
	            </div>
	        </div>
        </div>
    </div>
</template>
<script>
    module.exports = {
        // name: "Counseling4",
        data(){
            return {
              studentId: window.sessionStorage.getItem('studentId'),
            	// 添加和编辑使用
            	cardObj: {
                	id: '',
                	// 训练前评估内容
                	before_training: '',
                	// 训练后评估内容
                	after_training: ''
            	},

            	tableDetailList: [],
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
            	this.cardObj = {
                	id: '',
                	// 训练前评估内容
                	before_training: '',
                	// 训练后评估内容
                	after_training: ''
            	};
            	this.isShowCard = true;
            },
            addEdit(id) {
            	this.isShowCard = true;
            	this.getCardDetail(id);
            },
            // 辅导 - 学习动机 归因训练 - 评估列表
            getTableList(){
                this.$ajax.post(this.G_uri + '/careerArchives/getCoachAttributionAssessList',{
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
            //生涯管理 -辅导 - 学习动机归因训练 - 评估详情
            getCardDetail(id){
                this.$ajax.post(this.G_uri + '/careerArchives/getCoachAttributionAssess',{
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

            //生涯管理 - 辅导 - 学习动机 归因训练 - 评估保存
            storeCardDetail(obj){
                this.$ajax.post(this.G_uri + '/careerArchives/storeCoachAttributionAssess',{
                  studentId: this.studentId,
                	id: obj.id,
                	before_training: obj.before_training,
                	after_training: obj.after_training
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
            // 生涯管理 - 辅导 - 学习动机 归因训练 - 评估删除
            deleteTableLis(id){
                this.$ajax.post(this.G_uri + '/careerArchives/delCoachAttributionAssess',{
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
        },
        mounted(){
        }
    }
</script>
<style scoped lang="less">
.Counseling4 .btn {
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
.Counseling4 .main_box {
  padding: 0px 20px 20px 20px;
  background-color: #fff;
  margin-bottom: 20px;
  border-radius: 5px;
}
.Counseling4 .main_box h6.title {
  line-height: 64px;
  font-size: 17px;
  color: #348DF1;
  font-weight: bolder;
  letter-spacing: 2px;
  padding-left: 30px;
  background: url(/career/imgs/careerArchives/icon_biaoti.png) no-repeat 0px center;
}
.Counseling4 .main_box h6.title p {
  float: right;
  cursor: pointer;
  margin-top: 20px;
}
.Counseling4 .main_box .recording {
  border: 1px solid #ebebeb;
  border-radius: 5px;
  height: 132px;
}
.Counseling4 .main_box .recording .top {
  height: 90px;
  line-height: 90px;
  text-align: center;
  cursor: pointer;
  width: 66px;
  margin: 0 auto;
}
.Counseling4 .main_box .recording .foot {
  width: 490px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
}
.Counseling4 .main_box .recording .foot p {
  font-size: 14px;
  color: #666;
  padding-left: 40px;
}
.Counseling4 .main_box .recording .foot p span {
  color: #358ced;
  cursor: pointer;
}
.Counseling4 .main_box .table_box table tr th {
  background-color: #f3f4f8;
  border: 1px solid #ebebeb;
  color: #000;
  font-size: 14px;
  font-weight: 600;
  text-align: center;
  padding: 10px;
  line-height: 24px;
}
.Counseling4 .main_box .table_box table tr th:nth-child(3) {
  text-align: center;
  width: 15%;
  font-size: 12px;
}
.Counseling4 .main_box .table_box table tr th:nth-child(4) {
  width: 10%;
}
.Counseling4 .main_box .table_box table tr th:nth-child(5) {
  width: 10%;
}
.Counseling4 .main_box .table_box table tr td {
  padding: 10px;
  border: 1px solid #ebebeb;
  line-height: 24px;
}
.Counseling4 .main_box .table_box table tr td:nth-child(3) {
  text-align: center;
  width: 15%;
  font-size: 12px;
}
.Counseling4 .main_box .table_box table tr .icon {
  text-align: center;
  cursor: pointer;
}
.Counseling4 .main_box .table_box table tr .icon span {
  cursor: pointer;
  display: inline-block;
  width: 34px;
  height: 20px;
  border: 1px solid #EDEDED;
  border-radius: 5px;
}
.Counseling4 .main_box .table_box table tr .icon_edit span {
  background: url(/career/imgs/careerManagement/icon_bianjihui.png) no-repeat center center;
}
.Counseling4 .main_box .table_box table tr .icon_edit span:hover {
  background-color: #3A90F3;
}
.Counseling4 .main_box .table_box table tr .icon_del span {
  background: url(/career/imgs/careerManagement/icon_lajitonghui.png) no-repeat center center;
}
.Counseling4 .main_box .table_box table tr .icon_del span:hover {
  background-color: #FB4945;
}
.Counseling4 .main_box .detail_btn_box {
  margin-bottom: 20px;
  height: 26px;
  line-height: 26px;
}
.Counseling4 .main_box .detail_btn_box p {
  background: url(/career/imgs/careerManagement/counseling/icon.png) no-repeat 0px center;
  font-weight: 600;
  float: left;
  padding-left: 30px;
}
.Counseling4 .main_box .detail_btn_box .btn_box {
  float: right;
}
.Counseling4 .main_box .detail_btn_box .btn_box .btn {
  float: left;
  margin-left: 16px;
}
.Counseling4 .main_box .page_box {
  padding: 30px;
  display: flex;
  justify-content: center;
}
.Counseling4 .main_box .page_box span {
  line-height: 32px;
  margin-right: 10px;
}
.Counseling4 .mark {
  position: fixed;
  left: 0;
  top: 0;
  bottom: 0;
  right: 0;
  z-index: 10;
  background: rgba(0, 0, 0, 0.5);
}
.Counseling4 .mark .card {
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
.Counseling4 .mark .card .card_title {
  line-height: 60px;
  text-align: center;
  font-size: 17px;
  color: #fff;
  background: url('/career/imgs/careerManagement/diagnosis/icon_toubu.png');
}
.Counseling4 .mark .card .card_content {
  padding: 10px 40px;
  background-color: #fff;
  overflow-y: auto;
}
.Counseling4 .mark .card .card_content p {
  line-height: 30px;
  padding-top: 5px;
  font-size: 14px;
  font-weight: 600;
  color: #333;
}
.Counseling4 .mark .card .card_content textarea {
  box-sizing: border-box;
  padding: 10px;
  width: 100%;
  height: 75px;
  border-radius: 5px;
  font-size: 14px;
  color: #333;
  border: 1px solid #DCDFE6 !important;
}
.Counseling4 .mark .card .card_content textarea::-webkit-input-placeholder {
  color: #666;
  font-size: 12px;
}
.Counseling4 .mark .card .card_content .text_targe {
  height: 200px;
}
.Counseling4 .mark .card .card_content .save {
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
.Counseling4 .mark .card .close {
  width: 17px;
  height: 17px;
  position: absolute;
  top: 21px;
  right: 22px;
  cursor: pointer;
}
</style>