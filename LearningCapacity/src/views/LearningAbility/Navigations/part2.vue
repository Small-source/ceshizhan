<template>
    <div class="pc-page">
        <div class="system_main">
            <div class="list">
                <li class="item  item_ql_over item_ql ">
                    <img src="@/assets/newceping/nav/icon_yiwancheng.png" alt="">
                    <a  href="javascript:;" class="box">
                        <em class="icon"></em>
                        <h5 class="title">学习潜力</h5>
                    </a>
                </li>
                <li class="item item_dl item_scale cur" >
                    <router-link  to="/learningAbility/LearningMotivation" class="box">
                        <em class="icon"></em>
                        <h5 class="title">学习动力</h5>
                    </router-link>
                </li>
                <li class="item item_xl" >
                    <a href="javascript:;" class="box">
                        <em class="icon"></em>
                        <h5 class="title">学习效力</h5>
                    </a>
                </li>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        props: [ 'message' ],
        data() {
            return {
                isShowjihuoka: false,
                src: "",
                serial_no: '',
                // 记录状态
                zhuangtai: '',
            }
        },
        methods: {
        },
        created() {
        }
    }
</script>

<style scoped>

</style>
