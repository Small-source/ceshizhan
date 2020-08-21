<template>
    <div class="pc-page">
        <div class="system_main">
            <div class="list">
                <li class="item item_scale item_ql cur">
                    <router-link to="/learningAbility/learningPotential" class="box">
                        <em class="icon"></em>
                        <h5 class="title" style="color:#FD493B">学习潜力</h5>
                    </router-link>
                </li>
                <li class="item item_scale  item_dl cur" >
                    <router-link to="/learningAbility/learningMotivation" class="box">
                        <em class="icon"></em>
                        <h5 class="title" style="color:#117BC4">学习动力</h5>
                    </router-link>
                </li>
                <li class="item item_scale item_xl cur" >
                    <router-link to="/learningAbility/LearningEffectiveness" class="box">
                        <em class="icon"></em>
                        <h5 class="title" style="color:#3AB0BE">学习效力</h5>
                    </router-link>
                </li>
                <li class="item item_scale  item_xljk cur">
                    <router-link to="/learningAbility/mentalHealth" class="box">
                        <em class="icon"></em>
                        <h5 class="title" style="color:#E72B64">心理健康</h5>
                    </router-link>
                </li>
                <div class="show">
                    查看报告
                </div>
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
    .show{
        position: absolute;
        right: 0;
        top:-100px;
        width: 120px;
        height: 35px;
        border-radius: 17px;
        line-height: 35px;
        background: #FFFFFF;
        color:#3A95F0;
        font-size: 16px;
        cursor: pointer;
    }
</style>
