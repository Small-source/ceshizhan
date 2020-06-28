<template>
    <!-- 测评 -->
    <div class="ceping">
        <iframe src="" frameborder="0"></iframe>
    </div>
</template>
<style type="text/css" lang='less' scoped>
.ceping {
    .iframes {
        width: 100%;
        // height: 974px;
        iframe {
            position: absolute;
            width: 100%;
            min-height: 974px;
        }
    }
}
</style>
<script>
export default {
    // components: { Mubiaozhuanye },
    props: [ 'src' ],
    data() {
        return {
            // 当前选科进行状态
            state: 1,
            page: ''
        }
    },
    methods: {
    },
    created() {
    }
}
</script>