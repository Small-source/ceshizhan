<template>
    <div class="zhaoshengjianzhang">
    	<div class="content" v-html="JZ_data">
    	
    	</div>
    </div>
</template>
<script>
// import Loading from '../../../.././components/Loading.vue'
export default {
    // components: { Loading },
    data() {
        return {
            // 招生简章
            JZ_data: null
        }
    },
    computed: {
        tese() {
            var str = this.cdata.tag;
            var arr = []
            if(str) {
                arr = str.split(' ');
            }
            return arr;
        }
    },
    methods: {
        // 招生简章
        getOverviewDetail() {  
            var token = window.sessionStorage.getItem('ymtxToken');
            var _this = this; 
            var id = this.$route.query.universityId;                                     
            this.$ajax
                .post(this.G_uri + '/progressionPlan/getOverviewDetail', {
                   id: id
                },{
                    headers:{
                        token: token
                    }
                })
                // 监听数据返回
                .then(function(res) {
                    if(res.data.code == 2000) {
                        _this.JZ_data = res.data.data.guide;
                    }else if(res.data.code == 1016) {
                        _this.$router.push('/login')
                    }else if(res.data.code == 2026) {
                        _this.$router.push('/perfectInformation');
                    }
                })
                .catch(function(error) {
                    console.log(error)
                })
        }
    },
    created() {
        this.getOverviewDetail();
        if(this.$route.query.from){
            this.from = false;
        }
        if(this.$route.query.fromShengxueguihua) {
            this.fromShengxueguihua = this.$route.query.fromShengxueguihua;
        }
    },
    mounted(){

    }
}
</script>
<style type="text/css" lang='less' scoped>
    .zhaoshengjianzhang {
        width: 100%;
        background-color: #fff;
        margin-left: 20px;
        .content {
            width: 930px;
            margin: 0 auto;
            position: relative;
        }
        .loading {
            position: fixed;
            z-index: 10;
            top: 80px;
            left: 0;
            right: 0;
            bottom: 0;
            background-color: rgba(255,255,255,.3);
        }
    }
</style>