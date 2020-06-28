<template>
    <div class="user" >
       <router-view/>
    </div>
</template>
<script>
    export default {
        mounted(){
            let width=$(window).width();
            let height=$(window).height();
            $('.user').css({width:width,height:height})
        }
    }
</script>

<style scoped>
    .user{
        background-image:url("/imgs/user/banner2.png") ;
        background-repeat:no-repeat ;
        background-size: 100% 100%;
        background-position: center center;
    }
</style>
