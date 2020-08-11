<template>
    <div class="start">
        <!-- <h5>哈哈</h5> -->
        <Loading></Loading>
    </div>
</template>
<script>
// 引入激活生涯卡组件
import Loading from '../components/Loading2.vue'
export default {
    components: { Loading },
    name: 'start',
    props: [ ],
    data() {
        return {
            src: "",
            serial_no: '',
            // 记录状态
            zhuangtai: '',
            chushi:false
        }
    },
    computed:{
    },
    methods: {
    	getUrlParam(paraName) {
	　　　　var url = document.location.toString();
	　　　　var arrObj = url.split("?");
	　　　　if (arrObj.length > 1) {
	　　　　　　var arrPara = arrObj[1].split("&");
	　　　　　　var arr;
	　　　　　　for (var i = 0; i < arrPara.length; i++) {
	　　　　　　　　arr = arrPara[i].split("=");
	　　　　　　　　if (arr != null && arr[0] == paraName) {
	　　　　　　　　　　return arr[1];
	　　　　　　　　}
	　　　　　　}
	　　　　　　return "";
	　　　　}
	　　　　else {
	　　　　　　return "";
	　　　　}
	　　},
    	getToken() {
            var _this = this;
            this.$ajax.post(this.G_uri + '/chooseSubject/startTest',{
                testType: 1,
            },{
                headers:{
                    token: token
                }
            })
            .then(function(res) {

            		
            }).catch(function(error) {
                console.log(error)
                // alert('当前服务器繁忙，请刷新')
            });
    	}
    },
    mounted() {
        console.log(5555555555)
    },
    created() {
        // var testType360 = window.sessionStorage.getItem('testType360');
        // this.goTest(testType360);
    }
}
</script>
<style lang="less" scoped>
    .start {
        position: fixed;
        left: 0;
        top: 0;
        right: 0;
        bottom: 0;
    }
</style>
