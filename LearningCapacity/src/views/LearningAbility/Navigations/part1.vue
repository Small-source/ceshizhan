<template>
    <div class="pc-page">
        <div class="system_main">
            <div class="list">
                <li class="item item_scale item_ql cur">
                    <router-link to="/learningAbility/learningPotential" class="box">
                        <em class="icon"></em>
                        <h5 class="title">学习潜力</h5>
                    </router-link>
                </li>
                <li class="item item_scale  item_dl cur" >
                    <router-link to="/learningAbility/learningMotivation" class="box">
                        <em class="icon"></em>
                        <h5 class="title">学习动力</h5>
                    </router-link>
                </li>
                <li class="item item_scale item_xl cur" >
                    <router-link to="/learningAbility/LearningEffectiveness" class="box">
                        <em class="icon"></em>
                        <h5 class="title">学习效力</h5>
                    </router-link>
                </li>
                <li class="item item_scale  item_xljk cur">
                    <router-link to="/learningAbility/mentalHealth" class="box">
                        <em class="icon"></em>
                        <h5 class="title">心里健康</h5>
                    </router-link>
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
