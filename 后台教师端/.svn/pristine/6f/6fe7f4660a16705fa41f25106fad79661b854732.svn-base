<!-- 生涯管理 - 学业规划 -辅导 - 学习能力  咨询师反馈表 -->
<template>
	<!--咨询师反馈表 -->
    <div class="Counseling13">
    	<div class="main_box">
    		<!-- <h6 class="title"><span>学习能力</span></h6> -->
			<div class="detail_btn_box">
				<p>思维能力训练</p>
				<div class="btn_box">
					<div class="btn" @click="addContent()">新增</div>
					<!-- <div class="btn" @click="addEdit()">编辑</div> -->
				</div>
			</div>
    		<div class="table_box" v-if="tableDetailList.length">
                <table>
                    <tr>
                        <th>主题</th>
                        <th>查看详情</th>
                        <th class="btnbox_date">日期</th>
                        <th class="btnbox_edit">编辑</th>
                        <th class="btnbox_del">删除</th>
                    </tr>
                    <tr v-for="(item,index) in tableDetailList" :key="index">
                        <td>{{item.theme}}</td>
                        <td><span @click="getCardDetail(item.id);isShowCardDetail = true;">查看详情</span></td>
                        <td class="btnbox_date">{{item.date}}</td>
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
                    <p>暂无内容！ 请<span @click="addContent()" style="color: #2c8ffc">添加</span></p>
                    <!-- <p>备注：请让咨询师填写此项内容</p> -->
                </div>
            </div>
    	</div>
    	<!-- 思维能力训练详情 -->
        <div class="mark" v-show="isShowCard">
        	<div class="card">
	            <p class="card_title">思维能力训练</p>
	            <div class="card_content">
                    <form action="" id="swnl_FORM">
    	                <div class="time">
    	                    请选择训练日期：
    	                    <el-date-picker
    	                        v-model="cardObj.date"
    	                        type="date"
    	                        placeholder="请选择访谈日期"
    	                        value-format="yyyy-MM-dd"
    	                        >
    	                    </el-date-picker>
    	                </div>
    	                <p>主题</p>
    	                <textarea v-model="cardObj.theme"></textarea>
    	               	<p>上传图片（不超过三张）</p>
                        <!-- <input type="file" name="img[0]" multiple id="myinput"  multiple accept="image/*">
                          :on-change="handleChange"
                          :on-preview="handlePreview"
                          :http-request="uploadFile"
                          :on-remove="handleRemove" -->
    	                <el-upload
                          :on-change="handleChange"
                          class="upload-demo"
                          ref="upload"
                          accept="image/jpeg,image/jpg,image/png"
                          :action="G_uri + '/careerArchives/storeThinkingAbilityTraining'"
                          :file-list="fileList"
                          list-type="picture"
                          :multiple="true"
                          :limit="3"
                          :auto-upload="false">
                          <el-button slot="trigger" size="small" type="primary">选取文件</el-button>
                          <div slot="tip" class="el-upload__tip">只能上传jpg/png文件</div>
                        </el-upload>
                        <div class="img_box" v-for="(item, index) in cardObj.img" :key="index">
                            <img :src="item.imgPath" alt="">
                            <div class="del_btn" @click="delThinkingAbilityTrainingImg(cardObj.id, item.id)">删除</div>
                        </div>
    	                <div class="close" @click="closeCard()"></div>
    	                <!-- cardObj.id如果存在则是编辑，如果为空则是新增 -->
    	                <div class="save" @click="storeCardDetail(cardObj)" v-if="cardObj.id">保存</div>
                        <div class="save" @click="addCardDetail(cardObj)" v-else>保存</div>
                    </form>   
	            </div>
	        </div>
        </div>
        <!-- 思维能力训练详情 -->
        <div class="mark" v-show="isShowCardDetail">
            <div class="card">
                <p class="card_title">思维能力训练</p>
                <div class="card_content">
                    <form action="">
                        <div class="time">
                            训练日期：{{cardObj.date}}
                        </div>
                        <p><span>主题：</span>{{cardObj.theme}}</p>
                        <div class="detail_img">
                            <img :src="itemd.imgPath" alt="" v-for="(itemd, idx) in cardObj.img" :key="idx" title="点击查看原图" @click="goViewImg(itemd.imgPath)">
                        </div>
                        <div class="close" @click="isShowCardDetail = false"></div>
                    </form>   
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    module.exports = {
        // name: "Counseling13",
        data(){
            return {
                studentId: window.sessionStorage.getItem('studentId'),
                formDate:"",
                isShowCardDetail: false,
                myHeaders: {token: window.sessionStorage.getItem('ymtxToken')},
            	// 添加和编辑使用
            	cardObj: {
                	theme: '',//主题
                	date: '',//日期
                    img: []
            	},
                fileList: [],
                imgList: [],
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
            uploadFile(file){
                this.formDate.append('img[]', file.file);
            },
            handleChange(file, fileList) {  
                this.imgList = fileList;
            },
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
                    this.delThinkingAbilityTraining(id);
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
                	theme: '',//主题
                    date: '',//日期
                    img: []
            	};
            	this.isShowCard = true;
            },
            addEdit(id) {
            	this.isShowCard = true;
            	this.getCardDetail(id);
            },
            //生涯管理 - 学业规划 - 辅导 -  学习能力 - 思维能力训练
            getTableList(){
                this.$ajax.post(this.G_uri + '/careerArchives/getThinkingAbilityTraining',{
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
               	   		this.total = data.page.totalPage;
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
            //生涯管理 - 学业规划 - 辅导 -  学习能力 - 思维能力训练 - 第2版 - 详情
            getCardDetail(id){
                this.$ajax.post(this.G_uri + '/careerArchives/detailThinkingAbilityTraining',{
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
            //生涯管理 - 学业规划 - 辅导 - 学习能力 - 思维能力训练 - 第2版 - 编辑
            storeCardDetail(obj){
                var _this = this;
                var theme = obj.theme;
                var date = obj.date;
                var id = obj.id;
                var studentId = this.studentId;
                var params = new FormData();
                this.imgList.forEach((item,index) => {
                    params.append("img[" + index + "]", item.raw);
                })
                params.append("theme",theme);
                params.append("date",date); 
                params.append("id",id);
                params.append("studentId",studentId);
                this.$ajax.post(this.G_uri + '/careerArchives/editThinkingAbilityTraining',params,{
                    headers:{
                        'Content-Type': 'multipart/form-data',
                        token: window.sessionStorage.getItem('ymtxToken')
                    }
                })
                .then((res)=>{
                    if(res.data.code == 2000) {
                        this.getTableList();
                        this.successMessage();
                        this.isShowCardDetail = false;
                    }
                })
                .catch((error) => {
                    console.log(error);
                }) 
            },
            //生涯管理 - 学业规划 - 辅导 -  学习能力 - 思维能力训练 - 第2版 - 添加
            addCardDetail(obj){
                var _this = this;
                var theme = obj.theme;
                var date = obj.date;
                var studentId = this.studentId;
                // var params = new FormData($("#swnl_FORM")[0]);
                var params = new FormData();
                this.imgList.forEach((item,index) => {
                    params.append("img[" + index + "]", item.raw);
                })
                params.append("theme",theme);
                params.append("date",date);
                params.append("studentId",studentId);
                this.$ajax.post(this.G_uri + '/careerArchives/storeThinkingAbilityTraining',params,{
                    headers:{
                        'Content-Type': 'multipart/form-data',
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
            //生涯管理 - 学业规划 - 辅导 -  学习能力 - 咨询师反馈表 -  删除
            delThinkingAbilityTraining(id){
                this.$ajax.post(this.G_uri + '/careerArchives/delThinkingAbilityTraining',{
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
            //生涯管理 - 学业规划 - 辅导 -  学习能力 - 思维能力训练 - 图片删除-  删除
            delThinkingAbilityTrainingImg(pid,id) {
                this.$ajax.post(this.G_uri + '/careerArchives/delThinkingAbilityTrainingImg',{
                    studentId: this.studentId,
                    // pid 最外面的主键id，id是删除某条图片的id
                    pid: pid,
                    id: id
                },{
                    headers:{
                        token: window.sessionStorage.getItem('ymtxToken')
                    }
                })
                .then((res)=>{
                    let data = res.data.data;
                    if(res.data.code == 2000) {
                        this.getCardDetail(pid);
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
            },
            goViewImg(path) {
                window.open(path);
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
            isShowCardDetail() {
                if(this.isShowCardDetail) {
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
.Counseling13 .btn {
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
.Counseling13 .main_box {
  padding: 0px 20px 20px 20px;
  background-color: #fff;
  margin-bottom: 20px;
  border-radius: 5px;
}
.Counseling13 .main_box h6.title {
  line-height: 64px;
  font-size: 17px;
  color: #348DF1;
  font-weight: bolder;
  letter-spacing: 2px;
  padding-left: 30px;
  background: url(/career/imgs/careerArchives/icon_biaoti.png) no-repeat 0px center;
}
.Counseling13 .main_box h6.title p {
  float: right;
  cursor: pointer;
  margin-top: 20px;
}
.Counseling13 .main_box .recording {
  border: 1px solid #ebebeb;
  border-radius: 5px;
  height: 132px;
}
.Counseling13 .main_box .recording .top {
  height: 90px;
  line-height: 90px;
  text-align: center;
  cursor: pointer;
  width: 66px;
  margin: 0 auto;
}
.Counseling13 .main_box .recording .foot {
  width: 490px;
  margin: 0 auto;
  display: flex;
  justify-content: space-around;
}
.Counseling13 .main_box .recording .foot p {
  font-size: 14px;
  color: #666;
}
.Counseling13 .main_box .recording .foot p span {
  color: #358ced;
  cursor: pointer;
}
.Counseling13 .main_box .table_box table tr th {
  background-color: #f3f4f8;
  border: 1px solid #ebebeb;
  color: #000;
  font-size: 14px;
  font-weight: 600;
  text-align: center;
  padding: 10px;
  line-height: 24px;
}
.Counseling13 .main_box .table_box table tr th:nth-child(1) {
  width: 30%;
}
.Counseling13 .main_box .table_box table tr th:nth-child(2) {
  width: 10%;
}
.Counseling13 .main_box .table_box table tr th:nth-child(3) {
  width: 30%;
}
.Counseling13 .main_box .table_box table tr td {
  padding: 10px;
  border: 1px solid #ebebeb;
  line-height: 24px;
}
.Counseling13 .main_box .table_box table tr td span {
  color: #3492f9;
  cursor: pointer;
}
.Counseling13 .main_box .table_box table tr td:nth-child(2) {
  text-align: center;
}
.Counseling13 .main_box .table_box table tr .btnbox_date {
  width: 15%;
  text-align: center;
}
.Counseling13 .main_box .table_box table tr .btnbox_edit {
  width: 10%;
}
.Counseling13 .main_box .table_box table tr .btnbox_del {
  width: 10%;
}
.Counseling13 .main_box .table_box table tr .icon {
  text-align: center;
  cursor: pointer;
}
.Counseling13 .main_box .table_box table tr .icon span {
  cursor: pointer;
  display: inline-block;
  width: 34px;
  height: 20px;
  border: 1px solid #EDEDED;
  border-radius: 5px;
}
.Counseling13 .main_box .table_box table tr .icon_edit span {
  background: url(/career/imgs/careerManagement/icon_bianjihui.png) no-repeat center center;
}
.Counseling13 .main_box .table_box table tr .icon_edit span:hover {
  background-color: #3A90F3;
}
.Counseling13 .main_box .table_box table tr .icon_del span {
  background: url(/career/imgs/careerManagement/icon_lajitonghui.png) no-repeat center center;
}
.Counseling13 .main_box .table_box table tr .icon_del span:hover {
  background-color: #FB4945;
}
.Counseling13 .main_box .detail_btn_box {
  margin-bottom: 20px;
  height: 26px;
  line-height: 26px;
}
.Counseling13 .main_box .detail_btn_box p {
  background: url(/career/imgs/careerManagement/counseling/icon.png) no-repeat 0px center;
  font-weight: 600;
  float: left;
  padding-left: 30px;
}
.Counseling13 .main_box .detail_btn_box .btn_box {
  float: right;
}
.Counseling13 .main_box .detail_btn_box .btn_box .btn {
  float: left;
  margin-left: 16px;
}
.Counseling13 .main_box .page_box {
  padding: 30px;
  display: flex;
  justify-content: center;
}
.Counseling13 .main_box .page_box span {
  line-height: 32px;
  margin-right: 10px;
}
.Counseling13 .mark {
  position: fixed;
  left: 0;
  top: 0;
  bottom: 0;
  right: 0;
  z-index: 10;
  background: rgba(0, 0, 0, 0.5);
}
.Counseling13 .mark .card {
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
.Counseling13 .mark .card .card_title {
  line-height: 60px;
  text-align: center;
  font-size: 17px;
  color: #fff;
  background: url('/career/imgs/careerManagement/diagnosis/icon_toubu.png');
}
.Counseling13 .mark .card .card_content {
  padding: 10px 40px;
  padding-bottom: 30px;
  background-color: #fff;
  overflow-y: auto;
}
.Counseling13 .mark .card .card_content p {
  line-height: 30px;
  padding-top: 5px;
  font-size: 14px;
  font-weight: 600;
  color: #333;
}
.Counseling13 .mark .card .card_content textarea {
  box-sizing: border-box;
  padding: 10px;
  width: 100%;
  height: 100px;
  border-radius: 5px;
  font-size: 14px;
  color: #333;
  border: 1px solid #DCDFE6 !important;
}
.Counseling13 .mark .card .card_content .textarea_content {
  height: 200px;
}
.Counseling13 .mark .card .card_content textarea::-webkit-input-placeholder {
  color: #666;
  font-size: 12px;
}
.Counseling13 .mark .card .card_content .text_targe {
  height: 200px;
}
.Counseling13 .mark .card .card_content .save {
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
.Counseling13 .mark .card .card_content .img_box {
  overflow: hidden;
  z-index: 0;
  background-color: #fff;
  border: 1px solid #c0ccda;
  border-radius: 6px;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  margin-top: 10px;
  padding: 10px 10px 10px 10px;
  height: 92px;
}
.Counseling13 .mark .card .card_content .img_box img {
  float: left;
  width: 70px;
  height: 70px;
}
.Counseling13 .mark .card .card_content .img_box .del_btn {
  width: 50px;
  height: 24px;
  background-color: #2c8ffc;
  border-radius: 3px;
  float: right;
  text-align: center;
  color: #fff;
  cursor: pointer;
  line-height: 24px;
}
.Counseling13 .mark .card .card_content .detail_img img {
  width: 175px;
  margin-right: 20px;
  cursor: pointer;
}
.Counseling13 .mark .card .card_content .detail_img img:last-child {
  margin-right: 0px;
}
.Counseling13 .mark .card .card_content .detail_img img:hover {
  box-shadow: 0px 0px 10px #666;
}
.Counseling13 .mark .card .close {
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