<template>
    <div class="competition">
        <Competition></Competition>
    </div>
</template>
<style type="text/css" lang='less' scoped>
    .competition {
        width: 100%;
    }
</style>
<script>
import Mianbaoxie from '../mianbaoxie.vue';
import Competition from '../../../commen/competition.vue';
export default {
    components: { Mianbaoxie, Competition },
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