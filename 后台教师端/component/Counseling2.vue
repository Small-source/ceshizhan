<template>
	<!-- 生涯管理 - 学业规划 - 辅导 -->
    <div class="Counseling2">
    	<div class="main_box">
			<div class="detail_btn_box">
				<p>自我激励训练</p>
				<div class="btn_box">
					<div class="btn" @click="addContent()">新增</div>
					<div class="btn" @click="addEdit()">编辑</div>
				</div>
			</div>
    		<div class="now_table_box">
                <table>
                    <tr>
                        <th>1.写下一个你想自我激励的领域？</th>
                		<td>{{tableObj.territory}}</td>
                    </tr>
                    <tr>
                    	<th>2.这个目标能够满足你的哪些需要和兴趣，为你带来哪些积极的情感？</th>
                        <td>{{tableObj.emotion}}</td>
                    </tr>
                    <tr>
                    	<th>3.如果为自己设置一个可实现的学习/掌握型目标，是什么？</th>
                        <td>{{tableObj.target}}</td>
                    </tr>
                    <tr>
                    	<th>4.为了达成这个目标，你可以给自己布置哪些任务？</th>
                        <td>{{tableObj.mission}}</td>
                    </tr>
                    <tr>
                    	<th>5.哪些事情可以为你带来做这件事的信心？</th>
                        <td>{{tableObj.confidence}}</td>
                    </tr>
                    <tr>
                    	<th>6、谁可以为你提供支持？他们可以为你提供那些支持？</th>
                        <td>{{tableObj.support}}</td>
                    </tr>
                </table>

			</div>
            <div class="table_box" v-show="CoachIntensiveTrainingList.length">
                <table>
                    <tr>
                        <th>激励领域</th>
                        <th>日期</th>
                        <th>查看</th>
                        <th>删除</th>
                    </tr>
                    <tr v-for="(item, index) in CoachIntensiveTrainingList" :key="index" >
                        <td>{{item.territory}}</td>
                        <td>{{item.created_at}}</td>
                        <td><span @click="getCoachSelfMotivation(item.id)">查看</span></td>
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
    	</div>
    	<!-- 查看评估与诊断详情 -->
        <div class="mark" v-show="isShowCard">
        	<div class="card">
	            <p class="card_title">自我激励训练</p>
	            <div class="card_content">
	                <p>1.写下一个你想自我激励的领域？</p>
	                <textarea v-model="cardObj.territory" class="read_dia" :readonly="isView"></textarea>
	                <p>2.这个目标能够满足你的哪些需要和兴趣，为你带来哪些积极的情感？</p>
	                <textarea v-model="cardObj.emotion" class="read_dia" :readonly="isView"></textarea>
	                <p>3.如果为自己设置一个可实现的学习/掌握型目标，是什么？</p>
	                <textarea v-model="cardObj.target"  class="read_dia" :readonly="isView"></textarea>
                    <p>4.为了达成这个目标，你可以给自己布置哪些任务？</p>
                    <textarea v-model="cardObj.mission"  class="read_dia" :readonly="isView"></textarea>
                    <p>5.哪些事情可以为你带来做这件事的信心？</p>
                    <textarea v-model="cardObj.confidence"  class="read_dia" :readonly="isView"></textarea>
                    <p>6、谁可以为你提供支持？他们可以为你提供那些支持？</p>
                    <textarea v-model="cardObj.support"  class="read_dia" :readonly="isView"></textarea>
	                <div class="close" @click="closeCard()"></div>
	                <div class="save" @click="storeCoachSelfMotivation(cardObj)" v-show="!isView">保存</div>
	            </div>
	        </div>
        </div>
    </div>
</template>
<script>
    module.exports = {
        // name: "Counseling2",
        data(){
            return {
              studentId: window.sessionStorage.getItem('studentId'),
            	// 添加和编辑使用
            	cardObj: {
      					territory: '',
      					emotion: '',
      					target: '',
      					mission: '',
      					confidence: '',
      					support: '',
      					id: ''
            	},
                // 辅导自我激励训练最新详情
            	tableObj: {},
            	CoachIntensiveTrainingList: [],
            	// 是否显示强化训练弹窗
            	isShowCard: false,
                // 查看不可编辑
                isView: false,
            	
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
                    this.delCoachIntensiveTraining(id);
                    this.$message({
                        type: 'info',
                        message: '删除成功'
                    });
                }).catch((error) => {
                    console.log(error)
                })
            },
            closeCard() {
                this.cardObj = {
                    territory: '',
                    emotion: '',
                    target: '',
                    mission: '',
                    confidence: '',
                    support: '',
                    id: ''
                };
                this.isView = false;
            	this.exitConfirm();

            },
            addContent() {
            	this.cardObj = {
            		territory: '',
                    emotion: '',
                    target: '',
                    mission: '',
                    confidence: '',
                    support: '',
                    id: ''
            	};
            	this.isShowCard = true;
            },
            addEdit(id) {
            	this.isShowCard = true;
                Object.assign(this.cardObj,this.tableObj);
            },
            // 生涯管理 - 学业规划 - 辅导自我激励训练列表
            getCoachSelfMotivationList(){
                this.$ajax.post(this.G_uri + '/careerArchives/getCoachSelfMotivationList',{
                  studentId: this.studentId,
                	
                },{
                    headers:{
                        token: window.sessionStorage.getItem('ymtxToken')
                    }
                })
                .then((res)=>{
                	let data = res.data.data;
               	    if(res.data.code == 2000) {
               	    	this.isShowCard = false;
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
                this.getCoachSelfMotivationList();
            },
            //生涯管理 - 学业规划 - 辅导自我激励训练详情
            getCoachSelfMotivation(id){
                this.$ajax.post(this.G_uri + '/careerArchives/getCoachSelfMotivation',{
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
                        this.isShowCard = true;
                        this.isView = true;
                		this.cardObj = data;
                	}
                })
                .catch((error) => {
                	console.log(error);
                }) 
            },
            // 生涯管理 - 学业规划 - 辅导自我激励训练最新详情
            getCoachSelfMotivationNewest(){
                this.$ajax.post(this.G_uri + '/careerArchives/getCoachSelfMotivationNewest',{
                  studentId: this.studentId,
                },{
                    headers:{
                        token: window.sessionStorage.getItem('ymtxToken')
                    }
                })
                .then((res)=>{
                    let data = res.data.data;
                    if(res.data.code == 2000) {
                        this.tableObj = data;
                    }
                })
                .catch((error) => {
                    console.log(error);
                }) 
            },
            //生涯管理 - 学业规划 - 辅导自我激励训练保存
            storeCoachSelfMotivation(obj){
                this.$ajax.post(this.G_uri + '/careerArchives/storeCoachSelfMotivation',{
                  studentId: this.studentId,
                	territory: obj.territory,
                	emotion: obj.emotion,
                	target: obj.target,
                	mission: obj.mission,
                	confidence: obj.confidence,
                	support: obj.support,
                	id: obj.id,
                },{
                    headers:{
                        token: window.sessionStorage.getItem('ymtxToken')
                    }
                })
                .then((res)=>{
                    let data = res.data.data;
                	if(res.data.code == 2000) {
                        if(data.id) {
                            this.isShowCard = false;
                            this.getCoachSelfMotivationNewest();
                            this.getCoachSelfMotivationList();
                        }
                	}
                })
                .catch((error) => {
                	console.log(error);
                }) 
            },
            // 生涯管理 - 学业规划 - 辅导自我激励训练删除
            delCoachIntensiveTraining(id){
                this.$ajax.post(this.G_uri + '/careerArchives/delCoachSelfMotivation',{
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
                        this.getCoachSelfMotivationList();
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
        	}
        },
        created() {
        	this.getCoachSelfMotivationList();
            this.getCoachSelfMotivationNewest();
        },
        mounted(){
        }
    }
</script>
<style>
.Counseling2  *{
    letter-spacing: 1.5px;
    box-sizing: border-box;
}
.Counseling2 .btn {
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
.Counseling2 .main_box {
  padding: 0px 20px 20px 20px;
  background-color: #fff;
  border-radius: 5px;
}
.Counseling2 .main_box h6.title {
  line-height: 64px;
  font-size: 17px;
  color: #348DF1;
  font-weight: bolder;
  letter-spacing: 2px;
  padding-left: 30px;
  background: url(/career/imgs/careerArchives/icon_biaoti.png) no-repeat 0px center;
}
.Counseling2 .main_box h6.title p {
  float: right;
  cursor: pointer;
  margin-top: 20px;
}
.Counseling2 .main_box .recording {
  border: 1px solid #ebebeb;
  border-radius: 5px;
  height: 132px;
}
.Counseling2 .main_box .recording .top {
  height: 90px;
  line-height: 90px;
  text-align: center;
  cursor: pointer;
  width: 66px;
  margin: 0 auto;
}
.Counseling2 .main_box .recording .foot {
  width: 490px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
}
.Counseling2 .main_box .recording .foot p {
  font-size: 14px;
  color: #666;
  padding-left: 40px;
}
.Counseling2 .main_box .recording .foot p span {
  color: #358ced;
  cursor: pointer;
}
.Counseling2 .main_box .now_table_box {
  margin-bottom: 40px;
}
.Counseling2 .main_box .now_table_box table tr th {
  background-color: #f3f4f8;
  border: 1px solid #ebebeb;
  color: #000;
  font-size: 14px;
  font-weight: 600;
  text-align: center;
  padding: 10px;
  line-height: 24px;
  width: 30%;
}
.Counseling2 .main_box .now_table_box table tr td {
  width: 70%;
  padding: 10px;
  border: 1px solid #ebebeb;
  line-height: 24px;
}
.Counseling2 .main_box .table_box table tr th {
  background-color: #f3f4f8;
  border: 1px solid #ebebeb;
  color: #000;
  font-size: 14px;
  font-weight: 600;
  text-align: center;
  padding: 10px;
  line-height: 24px;
}
.Counseling2 .main_box .table_box table tr th:nth-child(1) {
  width: 60%;
}
.Counseling2 .main_box .table_box table tr th:nth-child(2) {
  width: 15%;
}
.Counseling2 .main_box .table_box table tr th:nth-child(3) {
  width: 15%;
}
.Counseling2 .main_box .table_box table tr th:nth-child(4) {
  width: 15%;
}
.Counseling2 .main_box .table_box table tr td {
  padding: 10px;
  border: 1px solid #ebebeb;
  line-height: 24px;
  text-align: center;
}
.Counseling2 .main_box .table_box table tr td:nth-child(1) {
  text-align: left;
}
.Counseling2 .main_box .table_box table tr td span {
  color: #2c8ffc;
  cursor: pointer;
}
.Counseling2 .main_box .table_box table tr .icon {
  text-align: center;
  cursor: pointer;
}
.Counseling2 .main_box .table_box table tr .icon span {
  cursor: pointer;
  display: inline-block;
  width: 34px;
  height: 20px;
  border: 1px solid #EDEDED;
  border-radius: 5px;
}
.Counseling2 .main_box .table_box table tr .icon_edit span {
  background: url(/career/imgs/careerManagement/icon_bianjihui.png) no-repeat center center;
}
.Counseling2 .main_box .table_box table tr .icon_edit span:hover {
  background-color: #3A90F3;
}
.Counseling2 .main_box .table_box table tr .icon_del span {
  background: url(/career/imgs/careerManagement/icon_lajitonghui.png) no-repeat center center;
}
.Counseling2 .main_box .table_box table tr .icon_del span:hover {
  background-color: #FB4945;
}
.Counseling2 .main_box .detail_btn_box {
  margin-bottom: 20px;
  height: 26px;
  line-height: 26px;
}
.Counseling2 .main_box .detail_btn_box p {
  background: url(/career/imgs/careerManagement/counseling/icon.png) no-repeat 0px center;
  font-weight: 600;
  float: left;
  padding-left: 30px;
}
.Counseling2 .main_box .detail_btn_box .btn_box {
  float: right;
}
.Counseling2 .main_box .detail_btn_box .btn_box .btn {
  float: left;
  margin-left: 16px;
}
.Counseling2 .main_box .page_box {
  padding: 30px;
  display: flex;
  justify-content: center;
}
.Counseling2 .main_box .page_box span {
  line-height: 32px;
  margin-right: 10px;
}
.Counseling2 .mark {
  position: fixed;
  left: 0;
  top: 0;
  bottom: 0;
  right: 0;
  z-index: 10;
  background: rgba(0, 0, 0, 0.5);
}
.Counseling2 .mark .card {
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
.Counseling2 .mark .card .card_title {
  line-height: 60px;
  text-align: center;
  font-size: 17px;
  color: #fff;
  background: url('/career/imgs/careerManagement/diagnosis/icon_toubu.png');
}
.Counseling2 .mark .card .card_content {
  padding: 10px 40px;
  background-color: #fff;
  overflow-y: auto;
}
.Counseling2 .mark .card .card_content p {
  line-height: 30px;
  padding-top: 5px;
  font-size: 14px;
  font-weight: 600;
  color: #333;
}
.Counseling2 .mark .card .card_content textarea {
  box-sizing: border-box;
  padding: 10px;
  width: 100%;
  height: 75px;
  border-radius: 5px;
  font-size: 14px;
  color: #333;
  border: 1px solid #DCDFE6 !important;
}
.Counseling2 .mark .card .card_content textarea::-webkit-input-placeholder {
  color: #666;
  font-size: 12px;
}
.Counseling2 .mark .card .card_content .text_targe {
  height: 200px;
}
.Counseling2 .mark .card .card_content .save {
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
.Counseling2 .mark .card .close {
  width: 17px;
  height: 17px;
  position: absolute;
  top: 21px;
  right: 22px;
  cursor: pointer;
}

</style>