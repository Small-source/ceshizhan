<template>
    <div class="careerManagementFather">
        <router-view></router-view>
    </div>
</template>

<script>
    export default {
        name: "careerManagementFather",
        data(){
            return {
                careerMajor:[],
            }
        },
        methods:{

        },
        created(){

        }
    }
</script>

<style scoped lang="less">
	// .careerManagementFather {
	// 	padding-left: 20px;
	// }
</style>
