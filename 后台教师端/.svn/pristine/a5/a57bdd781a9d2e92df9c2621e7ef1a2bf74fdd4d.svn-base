<template>
	<!-- 生涯管理 - 学业规划 - 辅导 -->
    <div class="Counseling1">
    	<div class="main_box">
    		<h6 class="title"><span>学习动机</span></h6>
			<div class="detail_btn_box">
				<p>强化训练</p>
				<div class="btn_box">
					<div class="btn" @click="addContent()">新增</div>
					<!-- <div class="btn" @click="addEdit()">编辑</div> -->
				</div>
			</div>
    		<div class="table_box" v-if="CoachIntensiveTrainingList.length">
                <table>
                    <tr>
                        <th>想要改变的行为</th>
                        <th>刺激</th>
                        <th>备注</th>
                        <th>日期</th>
                        <th>编辑</th>
                        <th>删除</th>
                    </tr>
                    <tr v-for="(item,index) in CoachIntensiveTrainingList" :key="index">
                        <td>{{item.want_to_change}}</td>
                        <td>{{item.stimulate}}</td>
                        <td>{{item.remark}}</td>
                        <td>{{item.updated_at}}</td>
                        <td class="icon icon_edit">
                           <span  @click="addEdit(item.id)"></span>
                        </td>
                        <td class="icon icon_del">
                        	<span  @click="delCoachIntensiveTraining(item.id)"></span>
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
                    <p>暂无内容！ 请<span @click="addContent()">添加</span>强化训练</p>
                    <p>备注：请让咨询师填写此项内容</p>
                </div>
            </div>
    	</div>
    	<!-- 查看评估与诊断详情 -->
        <div class="mark" v-show="isShowCoachIntensiveTraining">
        	<div class="card">
	            <p class="card_title">添加评估与诊断</p>
	            <div class="card_content">
	                <p>想要改变的行为</p>
	                <textarea v-model="cardObj.want_to_change" class="read_dia"></textarea>
	                <p>刺激</p>
	                <textarea v-model="cardObj.stimulate" class="read_dia"></textarea>
	                <p>备注</p>
	                <textarea v-model="cardObj.remark"  class="read_dia"></textarea>
	                <div class="close" @click="closeCard()"></div>
	                <div class="save" @click="storeCoachIntensiveTraining(cardObj)">保存</div>
	            </div>
	        </div>
        </div>
    </div>
</template>
<script>
    module.exports =  {
        // name: "Counseling1",
        data(){
            return {
                studentId: window.sessionStorage.getItem('studentId'),
            	// 添加和编辑使用
            	cardObj: {
            		id: '',
            		// 想要改变的行为
                	want_to_change: '',
                	// 刺激
                	stimulate: '',
                	// 备注
                	remark: ''
            	},

            	CoachIntensiveTrainingList: [],
            	// 是否显示强化训练弹窗
            	isShowCoachIntensiveTraining: false,
            	
            	//分页器
              pageNumber:1,//当前页码
              pageSize:7,//每页大小
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
                	this.isShowCoachIntensiveTraining = false;
                    this.$message({
                        type: 'info',
                        message: '已退出'
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
                	want_to_change: '',
                	stimulate: '',
                	remark: ''
            	};
            	this.isShowCoachIntensiveTraining = true;
            },
            addEdit(id) {
            	this.isShowCoachIntensiveTraining = true;
            	this.getCoachIntensiveTraining(id);
            },
            // 生涯管理 - 学业规划 - 辅导强化训练列表
            getCoachIntensiveTrainingList(){
                this.$ajax.post(this.G_uri + '/careerArchives/getCoachIntensiveTrainingList',{
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
               	    	this.isShowCoachIntensiveTraining = false;
               	   		this.CoachIntensiveTrainingList = data.list;
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
                this.getCoachIntensiveTrainingList();
            },
            //生涯管理 - 学业规划 - 辅导强化训练详情
            getCoachIntensiveTraining(id){
                this.$ajax.post(this.G_uri + '/careerArchives/getCoachIntensiveTraining',{
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

            //生涯管理 - 学业规划 - 辅导强化训练保存
            storeCoachIntensiveTraining(obj){
                this.$ajax.post(this.G_uri + '/careerArchives/storeCoachIntensiveTraining',{
                    studentId: this.studentId,
                	id: obj.id,
                	want_to_change: obj.want_to_change,
                	stimulate: obj.stimulate,
                	remark: obj.remark
                },{
                    headers:{
                        token: window.sessionStorage.getItem('ymtxToken')
                    }
                })
                .then((res)=>{
                	if(res.data.code == 2000) {
                		this.getCoachIntensiveTrainingList();
                	}
                })
                .catch((error) => {
                	console.log(error);
                }) 
            },
            // 生涯管理 - 学业规划 - 辅导强化训练删除
            delCoachIntensiveTraining(id){
                this.$ajax.post(this.G_uri + '/careerArchives/delCoachIntensiveTraining',{
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
                		if(data.id) {
                			this.getCoachIntensiveTrainingList();
                		}
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
        		if(this.isShowConsultLog) {
        			this.$nextTick(() => {
	        			this.getHeight();
	        		})
        		}
        	}
        },
        created() {
        	this.getCoachIntensiveTrainingList();
        	// this.getConsultScheme();
        	// this.getConsultLogList();
        },
        mounted(){
        }
    }
</script>
<style>
.Counseling1 *{
    letter-spacing: 1.5px;
    box-sizing: border-box;
}
.Counseling1 .btn {
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
.Counseling1 .main_box {
  padding: 0px 20px 40px 20px;
  background-color: #fff;
  border-radius: 5px;
}
.Counseling1 .main_box h6.title {
  line-height: 64px;
  font-size: 17px;
  color: #348DF1;
  font-weight: bolder;
  letter-spacing: 2px;
  padding-left: 30px;
  background: url(/career/imgs/careerArchives/icon_biaoti.png) no-repeat 0px center;
}
.Counseling1 .main_box h6.title p {
  float: right;
  cursor: pointer;
  margin-top: 20px;
}
.Counseling1 .main_box .recording {
  border: 1px solid #ebebeb;
  border-radius: 5px;
  height: 132px;
}
.Counseling1 .main_box .recording .top {
  height: 90px;
  line-height: 90px;
  text-align: center;
  cursor: pointer;
  width: 66px;
  margin: 0 auto;
}
.Counseling1 .main_box .recording .foot {
  width: 490px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
}
.Counseling1 .main_box .recording .foot p {
  font-size: 14px;
  color: #666;
  padding-left: 40px;
}
.Counseling1 .main_box .recording .foot p span {
  color: #358ced;
  cursor: pointer;
}
.Counseling1 .main_box .table_box table tr th {
  background-color: #f3f4f8;
  border: 1px solid #ebebeb;
  color: #000;
  font-size: 14px;
  font-weight: 600;
  text-align: center;
  padding: 10px;
  line-height: 24px;
}
.Counseling1 .main_box .table_box table tr td {
  padding: 10px;
  border: 1px solid #ebebeb;
  line-height: 24px;
}
.Counseling1 .main_box .table_box table tr .icon {
  text-align: center;
  cursor: pointer;
}
.Counseling1 .main_box .table_box table tr .icon span {
  cursor: pointer;
  display: inline-block;
  width: 34px;
  height: 20px;
  border: 1px solid #EDEDED;
  border-radius: 5px;
}
.Counseling1 .main_box .table_box table tr .icon_edit span {
  background: url(/career/imgs/careerManagement/icon_bianjihui.png) no-repeat center center;
}
.Counseling1 .main_box .table_box table tr .icon_edit span:hover {
  background-color: #3A90F3;
}
.Counseling1 .main_box .table_box table tr .icon_del span {
  background: url(/career/imgs/careerManagement/icon_lajitonghui.png) no-repeat center center;
}
.Counseling1 .main_box .table_box table tr .icon_del span:hover {
  background-color: #FB4945;
}
.Counseling1 .main_box .detail_btn_box {
  margin-bottom: 20px;
  height: 26px;
  line-height: 26px;
}
.Counseling1 .main_box .detail_btn_box p {
  background: url(/career/imgs/careerManagement/counseling/icon.png) no-repeat 0px center;
  font-weight: 600;
  float: left;
  padding-left: 30px;
}
.Counseling1 .main_box .detail_btn_box .btn_box {
  float: right;
}
.Counseling1 .main_box .detail_btn_box .btn_box .btn {
  float: left;
  margin-left: 16px;
}
.Counseling1 .main_box .page_box {
  padding: 30px;
  display: flex;
  justify-content: center;
}
.Counseling1 .main_box .page_box span {
  line-height: 32px;
  margin-right: 10px;
}
.Counseling1 .mark {
  position: fixed;
  left: 0;
  top: 0;
  bottom: 0;
  right: 0;
  z-index: 10;
  background: rgba(0, 0, 0, 0.5);
}
.Counseling1 .mark .card {
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
.Counseling1 .mark .card .card_title {
  line-height: 60px;
  text-align: center;
  font-size: 17px;
  color: #fff;
  background: url('/career/imgs/careerManagement/diagnosis/icon_toubu.png');
}
.Counseling1 .mark .card .card_content {
  padding: 10px 40px;
  background-color: #fff;
  overflow-y: auto;
}
.Counseling1 .mark .card .card_content p {
  line-height: 30px;
  padding-top: 5px;
  font-size: 14px;
  font-weight: 600;
  color: #333;
}
.Counseling1 .mark .card .card_content textarea {
  box-sizing: border-box;
  padding: 10px;
  width: 100%;
  height: 75px;
  border-radius: 5px;
  font-size: 14px;
  color: #333;
  border: 1px solid #DCDFE6 !important;
}
.Counseling1 .mark .card .card_content textarea::-webkit-input-placeholder {
  color: #666;
  font-size: 12px;
}
.Counseling1 .mark .card .card_content .text_targe {
  height: 200px;
}
.Counseling1 .mark .card .card_content .save {
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
.Counseling1 .mark .card .close {
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