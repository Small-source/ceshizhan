<template>
    <!-- 关于我们页面 -->
    <div class="Aboutus">
        <div class="banner">
            <img src="/imgs/aboutus/aboutus.jpg" alt="">
        </div>
        <div class="inner">
            <!-- 导航 -->
            <div class="nav">
                <router-link tag="div" class="box box1" to="/aboutus/jianjie">
                    <p class="p1">企业简介</p>
                </router-link>
                <!-- <router-link tag="div" class="box box2" to="/aboutus/zixun">
	    			<p class="p3">实时咨询</p>
	    		</router-link> -->
                <router-link tag="div" class="box box3" to="/aboutus/callus">
                    <p class="p3">联系我们</p>
                </router-link>
            </div>
        </div>
        <div class="page">
            <router-view />
        </div>
        <!-- <route-view name="Jianjie"></route-view>	   -->
        <!-- <component :is="page"></component> -->
    </div>
</template>
<style type="text/css" lang="less" scoped>
* {
    list-style: none;
    text-decoration: none;
}
.Aboutus {
    .banner {
        width: 100%;
        img {
            width: 100%;
            display: block;
        }
    }
    .inner {
        width: 1200px;
        margin: 0 auto;
        position: relative;
        .nav {
            position: absolute;
            top: -50px;
            left: 230px;
            height: 100px;
            .router-link-active {
                .p1 {
                    background: url(/imgs/aboutus/jianjiehui.jpg) no-repeat 0px center !important;
                }
                .p2 {
                    background: url(/imgs/aboutus/zixunlan.jpg) no-repeat 0px center !important;
                }
                .p3 {
                    background: url(/imgs/aboutus/erjilanse.jpg) no-repeat 0px center !important;
                }
                color: #49afec;
            }
            .box {
                float: left;
                margin-right: 120px;
                border-radius: 5px;
                background-color: red;
                width: 192px;
                height: 52px;
                padding: 30px 60px;
                font-size: 20px;
                background-color: #ffffff;
                box-shadow: 0px 0px 5px 5px #F2F2F2;
                p {
                    width: 179px;
                    height: 52px;
                    padding-left: 70px;
                    line-height: 52px;
                    background: url(/imgs/aboutus/jianjielan.jpg) no-repeat 0px center;
                }
                &:nth-child(2) {
                    p {
                        background: url(/imgs/aboutus/zixunhui.jpg) no-repeat 0px center;
                    }
                }
                &:last-child {
                    margin-right: 0;
                    p {
                        background: url(/imgs/aboutus/calluserji.jpg) no-repeat 0px center;
                    }
                }
            }
            .box1:hover {
                color: #49afec;
                p {
                    background: url(/imgs/aboutus/jianjiehui.jpg) no-repeat 0px center;
                }
            }
            .box2:hover {
                color: #49afec;
                p {
                    background: url(/imgs/aboutus/zixunlan.jpg) no-repeat 0px center;
                }
            }
            .box3:hover {
                color: #49afec;
                p {
                    background: url(/imgs/aboutus/erjilanse.jpg) no-repeat 0px center;
                }
            }
        }
    }
}
</style>
<script>
// import Jianjie from "./aboutus/Jianjie.vue";
// import Callus from "./aboutus/Callus.vue";
// import Zixun from "./aboutus/Zixun.vue";
export default {
    data() {
        return {
            // page: 'Jianjie'
        }
    },
    methods: {},
    mounted() {
        var boxs = document.getElementsByName('box');
        // created() {
        // 	let path = this.$route.path.slice(1);
        // 	this.page = path;
        // }
    }
}
</script>