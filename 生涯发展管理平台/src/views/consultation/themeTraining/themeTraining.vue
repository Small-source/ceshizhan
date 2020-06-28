<template>
    <!-- 10项主题训练 -->
    <div class="themeTraining">
        <div class="main_box">
            <h6 class="title"><span>十项主题训练</span></h6>
            <ul class="training_box">
            	<li v-for="(item,index) in training" :key="item.id" @click="showTheme(index)">{{item.title}}</li>
            </ul>
            <div class="detail_btn_box">
                <p>注意力训练</p>
            </div>
            <ul class="lis_box">
                <li class="lis">
                    <div class="img_box">
                        <img src="/imgs/careerManagement/counseling/icon_shuerte.png" alt="">
                    </div>
                    <p class="lis_title">
                        舒尔特方格表
                    </p>
                    <div class="btn" @click="$router.push('/consultation/sweet')">测评</div>
                </li>
            </ul>
            <div class="history">
                <p>历史记录 :</p>
            </div>
            <ul class="table_box">
            	<li v-for="(item,index) in tableDetailList" :key="index">{{item.created_at}}</li>
            </ul>
        </div>
        <div :class="isShowCard ? 'mark_card': ''" v-show="isShowCard">
            <tenThemeCard :themeIndex='themeIndex' @go-close="isShowCard=false"></tenThemeCard>
        </div>
    </div>
</template>
<script>
    import tenThemeCard from './tenThemeCard.vue'
    export default {
        name: "teameTraining",
        components:{ tenThemeCard },
        data(){
            return {
            	training: [
            		{ title: '时间管理', id: '1' },
            		{ title: '目标管理', id: '2' },
            		{ title: '归因训练', id: '3' },
            		{ title: '自信心提升训练', id: '4' },
            		{ title: '自我激励训练', id: '5' },
            		{ title: '思维导图训练', id: '6' },
            		{ title: '自我提问训练', id: '7' },
            		{ title: '情绪管理', id: '8' },
            		{ title: '人际关系', id: '9' },
            		{ title: '注意力训练', id: '10' }
            	],


                // 添加和编辑使用
                cardObj: {
                    id: '',
                    feel:''
                },

                CoachIntensiveTrainingList: [],
                // 是否显示强化训练弹窗
                isShowCoachIntensiveTraining: false,
                tableDetailList:[],
                shows:false,
                //分页器
                pageNumber:1,//当前页码
                pageSize:5,//每页大小
                total:0,//总条数

                // 十项主题训练
                isShowCard: false,
                themeIndex: 0


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
                };
                this.isShowCoachIntensiveTraining = true;
            },
            showshuerte(id,bool) {
                if(bool){
                    this.shows=true;
                }else{
                    this.isShowCoachIntensiveTraining = true;
                }
                this.$ajax.post(this.G_uri + '/coach/detailAttentionTrain',{
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
            // 生涯管理 - 学业规划 - 辅导舒尔特方格表列表
            getCoachIntensiveTrainingList(){
                this.$ajax.post(this.G_uri + '/coach/getAttentionTrainList',{
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
                        this.tableDetailList = data.list;
                        this.total = data.page.count;
                    }
                })
                .catch((error) => {
                    console.log(error);
                })
            },
            // 生涯管理 - 学业规划 - 辅导舒尔特方格表编辑
            getCoachIntensiveTraining(){
                this.$ajax.post(this.G_uri + '/coach/editAttentionTrain',{
                    id: this.cardObj.id,
                    feel:this.cardObj.feel
                },{
                    headers:{
                        token: window.sessionStorage.getItem('ymtxToken')
                    }
                })
                    .then((res)=>{
                        if(res.data.code == 2000) {
                            this.getCoachIntensiveTrainingList()
                        }
                    })
                    .catch((error) => {
                        console.log(error);
                    })
            },
            // 当页数发生变化时触发
            currentChange(num) {
                this.currentPage = num;
                this.pageNumber=this.currentPage;
                this.getCoachIntensiveTrainingList();
            },
            showTheme(idx) {
                this.isShowCard = true;
                this.themeIndex = idx;
            }

        },
        watch:{

        },
        created() {

        },
        mounted(){
            this.getCoachIntensiveTrainingList();
        }
    }
</script>
<style type="text/css" lang='less' scoped>
    *{
        letter-spacing: 1.5px;
        box-sizing: border-box;
    }
    .themeTraining {
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
        .detail_btn_box {
            margin-bottom: 15px;
            border-left: 4px solid #333;
            font-weight: 600; 
            padding-left: 6px;
            line-height: 16px;
        }
		.history {
		    font-weight: 600;
            margin-bottom: 15px;
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

	        .training_box {
	        	display: flex;
	        	flex-wrap: wrap;
	        	height: 112px;
	        	justify-content: space-between;
	        	align-items:space-between;
	        	margin-bottom: 15px;
	        	li {
	        		width: 170px;
	        		height: 44px;
	        		text-align: center;
	        		line-height: 44px;
	        		background-color:#f2fafd;
	        		border: 1px solid #eaeaea;
	        		font-size: 16px;
	        		cursor: pointer;
	        		border-radius: 3px;
	        	}
	        }



            .lis_box {
                display: flex;
                justify-content: space-between;
                flex-wrap: wrap;
                .lis {
                    width: 454px;
                    height: 106px;
                    border-radius: 5px;
                    border: 1px solid #ebebeb;
                    padding: 30px 20px 0px 20px;
                    margin-bottom: 20px;
                    .img_box {
                        float: left;
                    }
                    p {
                        line-height: 42px;
                        font-size: 17px;
                        color: #333;
                        font-weight: 600;
                        float: left;
                        padding-left: 10px;
                    }
                    .btn {
                        width: 76px;
                        height: 30px;
                        line-height: 30px;
                        text-align: center;
                        border-radius: 3px;
                        background-color: #358ced;
                        color: #fff;
                        font-size: 13px;
                        float: right;
                        margin-top: 7px;
                        cursor: pointer;
                    }
                }
            }
        }
        .table_box {
			display: flex;
			width: 955px;
			li {
				width: 215px;
				text-align: center;
				border: 1px solid #eaeaea;
				line-height: 40px;
				border-radius: 3px;
				cursor: pointer;
				margin-right: 23px;
				&:hover {
					color: #3492f9;
					border: 1px solid #3492f9;
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
        .mark_card {  
            animation: myfirst .5s;
            position: fixed; 
            left: 0;
            top: 0;
            bottom: 0;
            right: 0;
            z-index: 10;
        } 
        @keyframes myfirst {
            0% {
             
                transform:scale(0.2,0.2);
            }
            100% {
                transform:scale(1,1);
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
