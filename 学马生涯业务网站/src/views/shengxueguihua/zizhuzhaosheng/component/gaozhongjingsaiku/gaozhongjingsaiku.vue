<template>
    <!-- 高中竞赛库 -->
    <div class="gaozhongjingsaiku">
        <Gaozhongjingsaiku></Gaozhongjingsaiku>
    </div>
</template>
<style type="text/css" lang='less' scoped>
.gaozhongjingsaiku {
    background-color: #fff;
    margin-top: 0px;
}    
</style>
<script>
import Mianbaoxie from '../mianbaoxie.vue';
import Gaozhongjingsaiku from '../../../commen/gaozhongjingsaiku.vue';
export default {
    components: { Mianbaoxie, Gaozhongjingsaiku },
    props: [],
    data() {
        return { 
        }
    },
    methods: {
       
    },
    created() {
    },
    watch: {
    }
}
</script>