<template>
    <!-- 根据专业选科目-->
    <div class="major_selected_subjects">
        <div class="content">
                <keep-alive>
                    <router-view v-if="$route.meta.keepAlive" :src="src" :quanzhong="quanzhong" v-on:go-next="mubiaozhuanyes($event)" :mubiaozhuanye="mubiaozhuanye"></router-view>
                </keep-alive>
                <router-view v-if="!$route.meta.keepAlive" :src="src" :quanzhong="quanzhong" v-on:go-next="mubiaozhuanyes($event)" :mubiaozhuanye="mubiaozhuanye" :checked="checked"></router-view>
            </div>         
        </div>
    </div>
</template>
<style type="text/css" lang='less' scoped>
.major_selected_subjects {
    background-color: #f9f9f9;
    .inner {
        width: 1200px;
        margin: 0 auto;
    }
    .mianbaoxie {
            position: fixed;
            left: 0px;
            top: 106px;
            height: 34px;
            font-size: 12px;
            line-height: 34px;
            color: #333;
            background-color: #fff;
            width: 100%;
            z-index: 10;
            .inner {
                width: 1200px;
                margin: 0 auto;
                position: relative;
            }
            .no1 {
                padding-left: 27px;
                background: url(/imgs/nav/hourse.png) no-repeat;
                cursor: pointer;
                &:hover {
                    color: #2d90f8;
                }
            }
            .no2 {
                cursor: pointer;
                &:hover {
                    color: #2d90f8;
                }
            }
            .no3 {
                color: #2d90f8;
            }
            .goBack {
                position: absolute;
                width: 50px;
                height: 20px;
                line-height: 20px;
                background-color: #2d90f8;
                color: #fff;
                right: 0px;
                top: 7px;
                font-size: 12px;
                border-radius: 10px;
                text-align: center;
                cursor: pointer;
                z-index: 1000000000000000;
            }
    }
    .turning {
        padding: 35px 0px;
        .next {
            width: 154px;
            height: 44px;
            border: 1px solid #2d8ffc;
            border-radius: 2px;
            text-align: center;
            line-height: 44px;
            font-size: 16px;
            color: #2d8ffc;
            margin: 0 auto;
            cursor: pointer;
            &:hover {
                background-color: #2d8ffc;
                color: #fff;
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
            // pages: 'mubiaozhuanye',
            nowPage: '设置目标专业',
            // 当前选科进行状态
            state: 1,
            // 当前所在组件页面
            // pages: 'ceping',
            isShowjihuoka: false,
            src: '',
            serial_no: '',
            // 记录状态
            zhuangtai: '',
            // 权重和平衡单
            quanzhong: [
                // 影响因素，权重，物理，化学，生物，思想政治，历史，地理，技术, 科目兴趣，背景图
                { influenceFactor: '1', influenceFactorWeight: '2', subjectPhysics: '0', subjectChemistry: '0', subjectBiological: '0', subjectIdeologicalPolitics: '0', subjectHistory: '0', subjectGeography: '0', subjectTechnology: '0', titles: '我对这门科目感兴趣', numbers: '01' },
                { influenceFactor: '2', influenceFactorWeight: '2', subjectPhysics: '0', subjectChemistry: '0', subjectBiological: '0', subjectIdeologicalPolitics: '0', subjectHistory: '0', subjectGeography: '0', subjectTechnology: '0', titles: '这门科目与我的能力相匹配', numbers: '02' },
                { influenceFactor: '3', influenceFactorWeight: '2', subjectPhysics: '0', subjectChemistry: '0', subjectBiological: '0', subjectIdeologicalPolitics: '0', subjectHistory: '0', subjectGeography: '0', subjectTechnology: '0', titles: '我在这门科目上的成绩好', numbers: '03' },
                { influenceFactor: '4', influenceFactorWeight: '2', subjectPhysics: '0', subjectChemistry: '0', subjectBiological: '0', subjectIdeologicalPolitics: '0', subjectHistory: '0', subjectGeography: '0', subjectTechnology: '0', titles: '我有信心学好这门科目', numbers: '04' },
                { influenceFactor: '5', influenceFactorWeight: '2', subjectPhysics: '0', subjectChemistry: '0', subjectBiological: '0', subjectIdeologicalPolitics: '0', subjectHistory: '0', subjectGeography: '0', subjectTechnology: '0', titles: '我喜欢这门科目的老师', numbers: '05' },
                { influenceFactor: '6', influenceFactorWeight: '2', subjectPhysics: '0', subjectChemistry: '0', subjectBiological: '0', subjectIdeologicalPolitics: '0', subjectHistory: '0', subjectGeography: '0', subjectTechnology: '0', titles: '学校在这门科目上的师资、资源有竞争力', numbers: '06' },
                { influenceFactor: '7', influenceFactorWeight: '2', subjectPhysics: '0', subjectChemistry: '0', subjectBiological: '0', subjectIdeologicalPolitics: '0', subjectHistory: '0', subjectGeography: '0', subjectTechnology: '0', titles: '家人建议我选这门科目', numbers: '07' },
                { influenceFactor: '8', influenceFactorWeight: '2', subjectPhysics: '0', subjectChemistry: '0', subjectBiological: '0', subjectIdeologicalPolitics: '0', subjectHistory: '0', subjectGeography: '0', subjectTechnology: '0', titles: '教师建议我选这门科目', numbers: '08' },
                { influenceFactor: '9', influenceFactorWeight: '2', subjectPhysics: '0', subjectChemistry: '0', subjectBiological: '0', subjectIdeologicalPolitics: '0', subjectHistory: '0', subjectGeography: '0', subjectTechnology: '0', titles: '朋友建议我选这门科目', numbers: '09' },
                { influenceFactor: '10', influenceFactorWeight: '2', subjectPhysics: '0', subjectChemistry: '0', subjectBiological: '0', subjectIdeologicalPolitics: '0', subjectHistory: '0', subjectGeography: '0', subjectTechnology: '0', titles: '大部分同学都选了这门科目', numbers: '10' },
                { influenceFactor: '11', influenceFactorWeight: '2', subjectPhysics: '0', subjectChemistry: '0', subjectBiological: '0', subjectIdeologicalPolitics: '0', subjectHistory: '0', subjectGeography: '0', subjectTechnology: '0', titles: '我的目标专业要求必须选择这门科目', numbers: '11' },
                { influenceFactor: '12', influenceFactorWeight: '2', subjectPhysics: '0', subjectChemistry: '0', subjectBiological: '0', subjectIdeologicalPolitics: '0', subjectHistory: '0', subjectGeography: '0', subjectTechnology: '0', titles: '我可以报考感兴趣的专业', numbers: '12' },
                { influenceFactor: '13', influenceFactorWeight: '2', subjectPhysics: '0', subjectChemistry: '0', subjectBiological: '0', subjectIdeologicalPolitics: '0', subjectHistory: '0', subjectGeography: '0', subjectTechnology: '0', titles: '我可以报考我有潜力学好的专业', numbers: '13' },
                { influenceFactor: '14', influenceFactorWeight: '2', subjectPhysics: '0', subjectChemistry: '0', subjectBiological: '0', subjectIdeologicalPolitics: '0', subjectHistory: '0', subjectGeography: '0', subjectTechnology: '0', titles: '我可以报考主流热门专业', numbers: '14' },
                { influenceFactor: '15', influenceFactorWeight: '2', subjectPhysics: '0', subjectChemistry: '0', subjectBiological: '0', subjectIdeologicalPolitics: '0', subjectHistory: '0', subjectGeography: '0', subjectTechnology: '0', titles: '有利于我将来从事的职业', numbers: '15' },
            ],
            // 目标专业
            mubiaozhuanye: [],
            checked:[
                { idx1: 0, idx2: 2 },
                { idx1: 0, idx2: 2 },
                { idx1: 0, idx2: 2 },
                { idx1: 0, idx2: 2 },
                { idx1: 0, idx2: 2 },

                { idx1: 0, idx2: 2 },
                { idx1: 0, idx2: 2 },
                { idx1: 0, idx2: 2 },
                { idx1: 0, idx2: 2 },
                { idx1: 0, idx2: 2 },

                { idx1: 0, idx2: 2 },
                { idx1: 0, idx2: 2 },
                { idx1: 0, idx2: 2 },
                { idx1: 0, idx2: 2 },
                { idx1: 0, idx2: 2 },
            ],
        }
    },
    methods: {
        goCreate() {
            var _this = this;
            var serial_no = this.serial_no;
            var token = window.sessionStorage.getItem('ymtxToken');
            window.sessionStorage.setItem('token',token);
            this.$ajax.post(this.G_uris + '/test/create',{
                type: 2,
                serial_no: serial_no,
                cognition_order:"[1,2,3,4,5,6,7,8,9,10,11,12,13]"
            },{
                headers:{
                    token: token
                }
            })
            .then(function(res) {
                // console.log(res);
                if(res.data.code == 0) {
                    _this.src = '/evlua/classify';
                }else if(res.data.code == 1016) {
                    _this.$router.push('/login');
                }
            })
            .catch(function(error) {
                console.log(error)

            })
        },
        mubiaozhuanyes(msg) {
            this.mubiaozhuanye = msg;
        },

    },
    watch: {
    },
    created() {
    },
    mounted() {
        if(window.sessionStorage.tuance=='3'){
            $('.set_target_major').css({top:'80px'})
        }else{
            $('.set_target_major').css({top:''})
        }
    }
}
</script>