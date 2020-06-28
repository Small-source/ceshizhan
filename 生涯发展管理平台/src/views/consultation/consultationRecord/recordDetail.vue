<template>
    <!-- 咨询记录-->
    <div class="recordDetail">
        <h6 class="title">
            咨询记录
            <div class="btn_edit" @click="isEdit=true;isDateEdit=false;isNumEdit=false" v-show="!isEdit">编辑</div>
        </h6>
        <div class="xueyeBox">
            <div class="child">
                学业规划：第
                <el-select v-model="num"  placeholder="" :disabled="!isEdit||!isNumEdit">
                    <el-option v-for="(item,index) in numList" :key="index" :lable="item.value" :value="item.value" :disabled="!item.isEdit">
                    </el-option>
                </el-select>
                次
            </div>
            <div class="child">
                日期：
                <el-date-picker
                    v-model="date"
                    :disabled="!isEdit||!isDateEdit"
                    type="date"
                    placeholder="请选择访谈日期"
                    value-format="yyyy-MM-dd">
                </el-date-picker>
            </div>
            <div class="theme">
	        	主题训练：
	        	<el-select v-model="themeTraining" multiple placeholder="请选择训练主题" :multiple-limit='3' :disabled="!isEdit">
				    <el-option
				      v-for="item in themeOptions"
				      :key="item.value"
				      :label="item.label"
				      :value="item.value">
				    </el-option>
				</el-select>
	        </div>
        </div>
        <div class="contentBox">
            <p class="bitian"><i>*</i>学习过程中的感悟和体会</p>
            <div class="detail">
                <p v-if="!isEdit" v-html="perceptionAndExperience&&perceptionAndExperience.replace(/\n/g,'</br>')"></p>
                <textarea v-else  placeholder="最多输入500个字!"  maxlength="500"  v-model="perceptionAndExperience" onfocus="this.placeholder=''"></textarea>
            </div>
        </div>
        <div class="contentBox">
            <p class="title">学生反馈</p>
            <div class="detail">
                <p v-if="!isEdit" v-html="studentFeedback&&studentFeedback.replace(/\n/g,'</br>')"></p>
                <textarea v-else placeholder="最多输入500个字!" maxlength="500" v-model="studentFeedback" onfocus="this.placeholder=''"></textarea>
            </div>
        </div>
        <div class="contentBox">
            <p class="title">教师评语</p>
            <div class="detail">
                <p v-if="!isEdit" v-html="teacherComments&&teacherComments.replace(/\n/g,'</br>')"></p>
                <textarea v-else placeholder="最多输入500个字!" maxlength="500" v-model="teacherComments"  onfocus="this.placeholder=''"></textarea>
            </div>
        </div>
        <div class="upload_img_box">
            <p>上传图片最多上传两张</p>
            <div class="main_box">
                <el-upload
                  :on-change="handleChange"
                  class="upload-demo"
                  ref="upload"
                  accept="image/jpeg,image/jpg,image/png"
                  :action="G_uri + '/plan/storeConsultRecords'"
                  :file-list="fileList"
                  list-type="picture-card"
                  :on-preview="handlePictureCardPreview"
                  :on-remove="handleRemove"
                  :multiple="true"
                  :limit="2"
                  :auto-upload="false">
                    <el-button slot="trigger" size="small" type="primary">选取文件</el-button>
                    <div slot="tip" class="el-upload__tip">只能上传jpg/png文件</div>
                </el-upload>
              <!--   <div class="img_box" v-for="(item, index) in cardObj.img" :key="index">
                    <img :src="item.imgPath" alt="">
                    <div class="del_btn" @click="delThinkingAbilityTrainingImg(cardObj.id, item.id)">删除</div>
                </div> -->
                <el-dialog :visible.sync="dialogVisible">
                    <img width="100%" :src="dialogImageUrl" alt="">
                </el-dialog>
            </div>
        </div>
        <div class="btn_save" @click="storeConsultRecords()" v-show="isEdit">保存</div>
    </div>
</template>
<script>
export default {
    // components: { Yuanxiaoku },
    // props: [ 'message' ],
    name: 'recordDetail',
    data() {
        return {
            isEdit: true,// 是否可以编辑
            isDateEdit: true, //日期是否可以编辑
            isNumEdit: true, //日期是否可以编辑
            planList: [],// 学业规划次数列表
            //数字列表
            numList: [
                { value: '1', isEdit: true },
                { value: '2', isEdit: true },
                { value: '3', isEdit: true },
                { value: '4', isEdit: true },
                { value: '5', isEdit: true },
                { value: '6', isEdit: true },
                { value: '7', isEdit: true },
                { value: '8', isEdit: true },
                { value: '9', isEdit: true },
                { value: '10', isEdit: true },
                { value: '11', isEdit: true },
                { value: '12', isEdit: true },
                { value: '13', isEdit: true },
                { value: '14', isEdit: true },
                { value: '15', isEdit: true },
                { value: '16', isEdit: true },
                { value: '17', isEdit: true },
                { value: '18', isEdit: true },
                { value: '19', isEdit: true },
                { value: '20', isEdit: true },
            ],
            date: '',// 添加日期
            num: '',//学业规划次数
            themeTraining: [],//主题

            perceptionAndExperience: '',//学习过程中感悟和体会
            studentFeedback: '', //学生反馈
            teacherComments: '', //教师评语
            id: '',//传id就是编辑，没有不传就是新增

            isSave: false,
            themeOptions: [
            	{ value: '时间管理', label: '时间管理' },
            	{ value: '目标管理', label: '目标管理' },
            	{ value: '归因训练', label: '归因训练' },
            	{ value: '自信心提升', label: '自信心提升' },
            	{ value: '自我激励', label: '自我激励' },
            	{ value: '思维导图', label: '思维导图' },
            	{ value: '自我提问', label: '自我提问' },
            	{ value: '情绪管理', label: '情绪管理' },
            	{ value: '人际管理', label: '人际管理' },
            	{ value: '注意力训练', label: '注意力训练' }
            ],


            // 图片上传
            fileList: [
                // {name: '', url: '', raw: ''},
                // {name: '', url: '', raw: ''}
            ],
            imgList: [],
            // 点击查看图片
            dialogImageUrl: '',
            dialogVisible: false


            // fileList: [{name: 'food.jpeg', url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'}]

        }
    },
    methods: {
        // 保存成功提示
        successMessage() {
            this.$message({
                type: 'success',
                message: '保存成功'
            });
        },
        // 保存有问题提示
        unSuccess(detail) {
            this.$message({
                type: 'error',
                message: detail
            });
        },

        // 读取初步访谈记录
        getDetailConsultRecords(){
            let _this=this;
            let id = this.id;
            this.$ajax.post(this.G_uri + '/plan/detailConsultRecords',{
            	id: id
            },{
                headers:{
                    token:window.sessionStorage.getItem('ymtxToken')
                }
            }).then(res=>{
                let data = res.data.data;
                if(res.data.code==2000){
                    if(data.date) {
                        _this.date = data.date;
                        _this.num = data.num;
                        _this.themeTraining = data.themeTraining;
                        _this.perceptionAndExperience = data.perceptionAndExperience;
                        _this.studentFeedback = data.studentFeedback;
                        _this.teacherComments = data.teacherComments;
                        if(data.img1) {
                            let img1 = {};
                            img1.name = 'img1';
                            img1.url = data.img1;
                            img1.raw = data.img1;
                            _this.fileList.push(img1);
                        }
                        if(data.img2) {
                            let img2 = {};
                            img2.name = 'img2';
                            img2.url = data.img2;
                            img2.raw = data.img2;
                            _this.fileList.push(img2);
                        }
                    }
                }
            })
        },
        // 保存初步访谈记录
        storeConsultRecords() {
            let _this=this;
            let date = this.date;
            let num = this.num;
            let id = this.id;
            let themeTraining = this.themeTraining;
            let perceptionAndExperience = this.perceptionAndExperience;
            let studentFeedback = this.studentFeedback;
            let teacherComments = this.teacherComments;
            let img1 = '';
            let img2 = '';
            if(this.fileList.length == 1) {
                img1 = this.fileList[0].raw;
            }else if(this.fileList.length == 2) {
                img1 = this.fileList[0].raw;
                img2 = this.fileList[1].raw;
            }
            if((date&&num&&themeTraining.length&&perceptionAndExperience) == false) {
                this.unSuccess('请完善必填信息：学业规划、日期、主题训练、学习感悟与体会！')
                return;
            }


            var params = new FormData();

            params.append("id",id);
            params.append("date",date);
            params.append("num",num);
            params.append("themeTraining",themeTraining);
            params.append("perceptionAndExperience",perceptionAndExperience);
            params.append("studentFeedback",studentFeedback);
            params.append("teacherComments",teacherComments);
            params.append("img1",img1);
            params.append("img2",img2);


            this.$ajax.post(this.G_uri + '/plan/storeConsultRecords',params,{
                headers:{
                    'Content-Type': 'multipart/form-data',
                    token:window.sessionStorage.getItem('ymtxToken')
                }
            }).then(res=>{
                if(res.data.code==2000){
                    _this.isEdit = false;
                    _this.successMessage();
                }
            })
        },
        // 读取学业规划次数 - 列表
        getAcademicPlanList(){
            let _this=this;
            this.$ajax.post(this.G_uri + '/academicPlanCategory/getAcademicPlanList',{
            },{
                headers:{
                    token:window.sessionStorage.getItem('ymtxToken')
                }
            }).then(res=>{
                let data = res.data.data;
                if(res.data.code==2000){
                    this.planList = data;
                }
            })
        },
        //状态咨询
        getConsultLogList(){
            this.$ajax.post(this.G_uri + '/plan/getConsultRecordsList',{
                pageSize: 50,
                pageNumber: 1
            },{
                headers:{
                    token: window.sessionStorage.getItem('ymtxToken')
                }
            })
            .then((res)=>{
                let data = res.data.data.list;
                let numList = this.numList;
                if(res.data.code == 2000) {
                    if(data.length) {
                        data.forEach((item)=>{
                            numList.forEach((child,index)=>{
                                if(item.num == child) {
                                    this.numList[index].isEdit = false;
                                }
                            })
                        })
                    }
                }
            })
            .catch((error) => {
                console.log(error);
            })
        },



        handleChange(file, fileList) {
            console.log(file);
            console.log(fileList);
            // if(fileList.length==0) {
            //     this.fileList=[
            //     ]
            // }else if(fileList.length==1) {
            //     this.fileList[0].raw = fileList[0].raw;
            // }else if(fileList.length==2) {
            //     this.fileList[0].raw = fileList[0].raw;
            //     this.fileList[1].raw = fileList[1].raw;
            // }
            this.fileList = fileList;
        },
        handleRemove(file, fileList) {
            this.fileList = fileList;
            // if(fileList.length==0) {
            //     this.fileList=[];
            // }else if(fileList.length==1) {
            //     // this.fileList[0].raw = fileList[0].raw;
            //     this.fileList = fileList;
            // }else if(fileList.length==2) {
            //     this.fileList[0].raw = fileList[0].raw;
            //     this.fileList[1].raw = fileList[1].raw;
            // }
            console.log(file, fileList);
        },
        handlePictureCardPreview(file) {
            this.dialogImageUrl = file.url;
            this.dialogVisible = true;
        },
        // 删除图片
        delThinkingAbilityTrainingImg(pid,id) {
            this.$ajax.post(this.G_uri + '/coach/delThinkingAbilityTrainingImg',{
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


    },
    created() {
        // isEdit 1新增 2查看 3编辑
        // console.log(this.$route)
        if(this.$route.query.isEdit==1) {
            this.getAcademicPlanList();
            this.isEdit = true;
            this.isDateEdit = true;
            this.isNumEdit = true;
        }else if(this.$route.query.isEdit==2) {
            this.id = this.$route.query.id;
            this.isEdit = false;
            this.isDateEdit = false;
            this.isNumEdit = false;
            this.getDetailConsultRecords();
        }else{
            this.id = this.$route.query.id;
            this.isEdit = true;
            this.isDateEdit = false;
            this.isNumEdit = false;
            this.getDetailConsultRecords();
        }
    },
    watch: {
        num() {
            if(this.$route.query.isEdit==3) {
                return;
            }
            let planList = this.planList;
            let num = this.num
            this.isDateEdit = true;
            if(planList.length) {
                planList.forEach((item)=>{
                    if(item.num == num) {
                        this.date = item.date;
                        this.isDateEdit = false;
                    }
                })
            }
        }
    }
}
</script>
<style type="text/css" lang='less' scoped>
    .recordDetail {
        margin-left: 20px;
        background-color: #fff;
        padding: 10px 20px;
        h6.title {
            line-height: 60px;
            font-size: 17px;
            color: #348DF1;
            font-weight: bolder;
            letter-spacing: 2px;
            padding-left: 30px;
            background: url(/imgs/careerArchives/icon_biaoti.png) no-repeat 0px center;
            .btn_edit {
                float: right;
                width: 62px;
                height: 26px;
                border-radius: 3px;
                text-align: center;
                line-height: 26px;
                font-size: 14px;
                background: #3a90f3;
                position: relative;
                font-weight: normal;
                top: 17px;
                color: #fff;
                cursor: pointer;
            }
        }
        .xueyeBox {
            padding-bottom: 26px;
            border-bottom: 1px solid #F0EFEF;
            margin-bottom: 18px;
            height: 42px;
            font-weight: 600;
            .child {
                float: left;
                margin-right: 30px;
            }
        }
        .theme {
        	font-weight: 600;
        	line-height: 34px;
        	margin-bottom: 20px;
        	input {
        		display: inline-block;
        		font-weight: normal;
        		border: 1px solid #DCDFE6 !important;
    			height: 34px;
    			line-height: 34px;
    			padding: 0 10px;
    			width: 450px;
        	}
        }
        .contentBox {
            padding-bottom: 18px;
            .title {
                line-height: 40px;
                padding-left: 14px;
                color: #3D90F6;
                font-size: 15px;
                font-weight: 600;
                position: relative;
                i {
                    color: #F80001;
                    margin-right: 5px;
                }
                &:before {
                    content: '';
                    width: 7px;
                    height: 7px;
                    border-radius: 2px;
                    background-color: #3D90F6;
                    line-height: 40px;
                    position: absolute;
                    left: 0;
                    top: 16px;
                }
            }
            .bitian {
                .title;
                padding-left: 0px;
                &:before {
                    width: 0px;
                    height: 0px;
                }
            }
            textarea {
                padding: 5px 10px;
                font-size: 14px;
                width: 100%;
                box-sizing: border-box;
                border: 1px solid #CDCDCD;
                min-height: 174px;
                line-height: 20px;
                display: block;
            }
            textarea:disabled {
                background-color: #F5F7FA;
                cursor: no-drop;
            }
            .detail {
                p {
                    padding: 5px 10px;
                    font-size: 14px;
                    width: 100%;
                    box-sizing: border-box;
                    border: 1px solid #CDCDCD;
                    min-height: 174px;
                    line-height: 20px;
                    background-color: #F5F7FA;
                    cursor: no-drop;
                }
            }
        }
        .btn_save {
    	    width: 96px;
    	    height: 34px;
    	    text-align: center;
    	    line-height: 34px;
    	    border-radius: 3px;
    	    font-size: 16px;
    	    color: #fff;
    	    margin: 10px auto 20px;
    	    background: #3b91f4;
    	    cursor: pointer;
        }
        .btn_unsave {
            .btn_save;
            background-color: #dfdfdf;
            cursor: no-drop;
        }
    }
</style>
<style type="text/css" lang='less'>
.recordDetail {
	.child {
		.el-select {
			width: 60px;
		}
		.el-date-editor {
			width: 200px;
		}
	}
	.theme{
		.el-select {
			width: 350px;
			.el-tag {
				margin-right: 5px;
			}
			.el-select__tags-text {
				color: #3492f9;
			}
		}
	}
	.el-input__inner  {
        border: 1px solid #DCDFE6 !important;
        border-radius: 4px;
    }
}
</style>
