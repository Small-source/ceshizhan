<!-- <template>
    <div class="videoplay">
        <div class="inner">
            <aliplayer v-if="playauth" :vid="vid" :playauth="playauth" :encryptType="1"></aliplayer>
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
    }
</style>
<script>
import aliplayer from './aliplayer'
export default {
    components: { aliplayer },
    // components: {
    //     'ali-player': VueAliplayer
    // },
    data() {
        return { 
            cdata: [],
            src: '',
            playauth: '',
            vid: '',
        }
    },
    methods: {
       dataUpdate() {
            var token = window.sessionStorage.getItem('ymtxToken');
            var _this = this;
            this.$ajax
             
                .post(this.G_uri + '/video/videoDetail', {
                   id: 1
                   
                },{
                    headers:{
                        token: token
                    }
                })
                // 监听数据返回
                // .then(({ data }) => console.log(data))
                .then(function(res) {
                    console.log(res.data.data)
                    if(res.data.code == 2000) {
                        _this.cdata = res.data.data;
                        _this.playauth = res.data.data.playAuth;
                        _this.vid = res.data.data.videoId;
                        // console.log(_this.playauth);
                        // console.log(_this.vid);

                    }else if(res.data.code != 2000) {
                        // alert(res.msg)
                    }
                   
                })
                .catch(function(error) {
                    alert('服务器繁忙')
                })
        },

   
  
    },
    watch: {

    },
    created() {
       
        this.dataUpdate();

    }
}
</script> -->




<template>
    <div class="videoplay">
        <div class="inner">
            <video  controls  :src="src" autoplay loop>
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






