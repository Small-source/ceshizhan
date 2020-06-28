<template>
    <div class="gaozhongjingsaiku">
        <div class="inner">
            <div class="leibie">
                <div class="right">
                    <el-radio-group v-model="radio1" size="30px" type="text" border id="gaozhongjingsaileibie">
                        <el-radio :label="item.value" v-for="(item, index) in leibies" :key="index">{{item.leibie}}</el-radio>
                    </el-radio-group>
                </div>
            </div>
            <div class="content">
                <div class="content_title">主办单位 & 竞赛名称</div>
                <div class="neirongBox" v-for="(item, index) in cdata" :key="index" @click="goCompetition(item[0])">
                    <p class="title">{{item[3]}}</p>
                    <p class="xiangqing">{{item[2]}}</p>
                </div>
            </div>
        </div>    
    </div>
</template>
<style type="text/css" lang='less' scoped>
.gaozhongjingsaiku {
    .inner {
        padding: 0px;
        width: 1200px;
        margin: 0 auto;
        margin-top: 0px;
        padding-bottom: 50px;
        background-color: #f5f7f6;
    }
    .is-checked{
        border:none !important;
    }
    .leibie {
        padding: 13px 23px;
        font-size: 14px;
        height: 28px;
        color: #333;
        border: 1px solid #d7d9d8;
        margin-bottom: 20px;
        background-color: #f5f7f6;
    }
    .content {
        padding: 0px 20px;
        padding-bottom: 20px;
        background-color: #fff;
        .content_title {
            font-size: 14px;
            line-height: 46px;
            padding-bottom: 3px;
            font-weight: 600;
            color: #333;
        }
        .neirongBox {
            box-sizing: border-box;
            padding: 0px 20px;
            height: 96px;
            padding-bottom: 15px;
            margin-bottom: 20px;
            background: url(/imgs/zizhuxuanba/gaozhongjingsaiku/bg.png) no-repeat;
            cursor: pointer;
            .title {
                line-height: 42px;
                font-size: 14px;
                color: #fff;
                margin-bottom: 10px;
            }
            .xiangqing {
                font-size: 18px;
                font-weight: 500;
                color: #fff;
                line-height: 28px;
                padding-left: 40px;
                background: url(/imgs/zizhuxuanba/gaozhongjingsaiku/bg_icon_jiangbei.png) no-repeat 0px center;

            }
        }
    }
}    
</style>
<style type="text/css" lang='less'>
    .gaozhongjingsaiku {
        .right {
            .el-radio-group {
                .is-checked {
                    background-color: #3292f9;
                    border-radius: 14px;
                    transition: all 0s;
                    .el-radio__label{
                        background: #3591F8;
                    }
                }
                .el-radio {
                    margin-right: 24px;
                    // padding: 0px 8px;
                    overflow: hidden;
                    .el-radio__label {
                        display: inline-block;
                        padding: 0px 12px;
                        height: 28px;
                        line-height: 28px;
                        font-size: 14px;
                        border-radius: 14px;
                    }
                }
            }    
        }
    }
</style>
<script>
export default {
    props: [ 'message' ],
    data() {
        return { 
            leibies: [
                // '五大学科类', '科技创新类', '自然科学类', '文学类', '英语类', '演讲类', '社会实践类', '国学类', '其他'
                { leibie: '全部', value: '' },
                { leibie: '科技创新类', value: '科技创新类' },
                { leibie: '学科类', value: '学科类' },
                { leibie: '艺术体育类', value: '艺术体育类' },
              
            ],
            cdata: [],
            data: [],
            radio1: '',
        }
    },

    methods: {
        dataUpdate() {
            // console.log(this.radio1)
            var _this = this;
            // console.log(this)
            this.$ajax
                // get请求
                .get('/data/competition.json', {
                    // query数据
                    params: {
                        id: this.$route.params.id
                    }
                })
                // 监听数据返回
                .then(function(res) {
                    // console.log(res)
                    _this.data = res.data;
                    _this.cdata = res.data;

                })
        }, 
        goCompetition(idx) {
            let id = idx;
            if(id==12 || id == 24|| id == 26 || id== 27 || id == 29 || id == 28) {
                return;
            }else {
                this.$router.push('/competition?id=' + id);
            }
            
        }
    },
    created() {
       this.dataUpdate();
    },
    watch: {
        radio1() {
            var radio1 = this.radio1;
            this.cdata = this.data.filter((item) => {
                return item[1].includes(radio1)
            });
            
        }
    }
}
</script>