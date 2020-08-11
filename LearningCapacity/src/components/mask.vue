<template>
    <div class="masks">

    </div>
</template>

<script>
    export default {
        name: "masks",
        mounted(){
            let width=$(window).width();
            let height=$(window).height();
            $('.masks').css({width:width,height:height})
        }
    }
</script>

<style scoped>
    .masks{
        position: fixed;
        top: 0;
        left: 0;
        z-index: 10;
        background: rgba(0,0,0,.5);
    }
</style>
