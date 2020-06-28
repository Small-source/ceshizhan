<template>
    <div class="videoplay">
        <div class="inner">
             <!-- :poster="item.img"width="218" height="162" -->
            <!-- <video  controls  :src="$route.params.src"> -->
            <video  controls  :src="src" autoplay loop preload>
                <!-- <source :src="item.src"  type="video/mp4"> -->
                <!-- <source src="movie.ogg"  type="video/ogg"> -->
                <!-- 您的浏览器不支持 HTML5 video 标签。 -->
            </video>
        </div>
       
    </div>
</template>
<style type="text/css" lang='less' scoped>
    .videoplay {
        padding-top: 20px;
       .inner {
            width: 1000px;
            margin: 0 auto;
       }
        video {
            width: 100%;
            height: 100%;
        }
    }
</style>

<script>
export default {
    // components: { Viptanchuang },
    props: [ ],
    data() {
        return { 
            src: ''
        }
    },
    methods: {
       
    },
    watch: {
       
    },
    mounted() {
        // console.log(this.videoSrc)
    },
    created() {
        if(this.$route.params.src) {
            this.src = this.$route.params.src;
            window.sessionStorage.setItem('src', this.src);
        }else {
            this.src = window.sessionStorage.getItem('src');
        }
       

    }
}
</script>