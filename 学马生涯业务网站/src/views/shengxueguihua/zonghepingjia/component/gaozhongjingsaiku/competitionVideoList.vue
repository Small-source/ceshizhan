<template>
    <div class="competitionVideoList">
        <CompetitionVideoList></CompetitionVideoList>
    </div>
</template>
<style type="text/css" lang='less' scoped>
    .competitionVideoList {
    }
</style>
<script>
import Mianbaoxie from '../mianbaoxie.vue';
import CompetitionVideoList from '../../../commen/competitionVideoList.vue';
export default {
    components: { Mianbaoxie, CompetitionVideoList },
    props: [ ],
    data() {
        return {  
        }
    },
    methods: {
    },
    created() {
    }
}
</script>