<template>
    <div class="xuankejuece">
        <div class="inner">
            <ul class="lis">
                <li class="no1">
                    <p class="title">360°选科</p>
                    <div class="imgBox"></div>
                    <p class="xiangqing">
                      通过全方位的专业测评及多维考量，推荐适合的专业及最佳选科方案
                    </p>
                    <button @click="goZhinengXuanke">使用</button>
                    <div class="VIP"><img src="/imgs/xingaokao/xuankejuece/vip.png" alt=""></div>
                </li>
                <li class="no1">
                    <p class="title">根据专业选科目</p>
                    <div class="imgBox"><img src="" alt=""></div>
                    <p class="xiangqing">
                      选择自己想要填报的专业，根据所选专业推荐最佳选科方案
                      根据专业覆盖率推荐最佳选科方案
                    </p>
                    <button @click="goGenjuzhuanye">使用</button>
                    <!-- <div class="VIP"><img src="/imgs/xingaokao/xuankejuece/vip.png" alt=""></div> -->
                    <!-- <a href="/genjuzhuanyexuankemu">使用</a> -->
                </li>
                <li class="no1">
                    <p class="title">学科直选</p>
                    <div class="imgBox"><img src="" alt=""></div>
                    <p class="xiangqing">
                        根据专业覆盖率推荐最佳选科方案
                    </p>
                    <div class="button"> <router-link tag='a' to="/xuekezhixuan">使用</router-link></div>
                </li>
            </ul>
        </div>
        <Jihuoxuankeka v-on:go-back="isShowjihuoxuankeka = false" v-show="isShowjihuoxuankeka" :src="src"></Jihuoxuankeka>
    </div>
</template>
<style type="text/css" lang='less' scoped>
  .xuankejuece {
    .inner {
      width: 1200px;
      margin: 0 auto;
      min-height: 650px;
    }
    .lis {
        width: 1100px;
        margin: 0 auto;
        padding-top: 100px;
        overflow:  hidden;
        padding-bottom: 100px;
        li {
            float: left;
            // margin-right: 20px;
            width: 295px;
            height: 362px;
            // box-sizing: border-box;
            border: 7px solid #c4def6;
            margin-right: 85px;
            position: relative;
            &:last-child {
                margin-right: 0px;
            }
            .title {
                padding-top: 30px;
                height: 20px;
                line-height: 20px;
                font-size: 20px;
                color: #333;
                font-weight: 600;
                text-align: center;
            }
            .imgBox {
                height: 190px;
                background: url(/imgs/xingaokao/xuankejuece/xuankejuece1.png) no-repeat center center;
            }
            .xiangqing {
                padding: 0px 20px;
                font-size: 14px;
                line-height: 24px;
                height: 72px;  
            }
            button {
                display: block;
                width: 88px;
                height: 30px;
                line-height: 30px;
                font-size: 14px;
                text-align: center;
                margin: 0 auto;
                border: none;
                background-color: #2c8ffc;
                color: #fff;
                border-radius: 2px;
                cursor: pointer;    
                a {
                    color: #fff;
                    display: block;
                    width: 100%;
                    height: 100%;
                }
            }
            .button {
                display: block;
                width: 88px;
                height: 30px;
                line-height: 30px;
                font-size: 14px;
                text-align: center;
                margin: 0 auto;
                border: none;
                background-color: #2c8ffc;
                color: #fff;
                border-radius: 2px;
                cursor: pointer;    
                a {
                    color: #fff;
                    display: block;
                    width: 100%;
                    height: 100%;
                }
            }
            .VIP {
                position: absolute;
                width: 48px;
                height: 40px;
                right: 0px;
                top: 0px;
            }
        }
        .no2 {
            .imgBox {
                height: 200px;
                background: url(/imgs/xingaokao/xuankejuece/xuankejuece2.png) no-repeat center center;
            }
        }
        .no3 {
            margin-right: 0px;
            .imgBox {
                height: 200px;
                background: url(/imgs/xingaokao/xuankejuece/xuankejuece3.png) no-repeat center center;
            }
        }
    }
  }
</style>
<script>
// 引入激活生涯卡组件
import Jihuoxuankeka from './jihuoxuankeka.vue';
export default {
    components: { Jihuoxuankeka },
    props: [ 'message' ],
    data() {
        return {
          isShowjihuoxuankeka: false,
          // 激活选科卡成功后跳转路由
          src: '/zhinengxuanke/xuankeceping'
        }
    },
    methods: {
        goXuanke() {
          // 是否激活选科卡
                this.isShowjihuoxuankeka = true;
                this.$router.push('/zhinengxuanke');
        },
        goZhinengXuanke() {
            // this.src="/zhinengxuanke/ceping"
            this.$router.push('/zhinengxuanke/xuankeceping')
        },
        goGenjuzhuanye() {
            this.$router.push('/genjuzhuanyexuankemu/gmubiaozhuanye');
            var _this = this;
            var token = window.sessionStorage.getItem('ymtxToken');
            window.sessionStorage.setItem('token',token);
            this.$ajax.post(this.G_uri + '/chooseSubject/isCanUsedSelectCard',{
            },{
                headers:{
                    token: token
                }
            }).then(function(res) {
                if(res.data.code == 2000) {
                    if(res.data.data.isCanUsed == 0) {
                        _this.isShowjihuoxuankeka = true;
                        _this.src = '/genjuzhuanyexuankemu/gmubiaozhuanye'

                    }else if(res.data.data.isCanUsed == 2){
                        // console.log(222222222222)
                        _this.$router.push('/genjuzhuanyexuankemu/gmubiaozhuanye');
                        // _this.$router.push(this.src)
                    }
                }else if(res.data.code == 1016) {
                    _this.$router.push('/login');
                }
            }).catch(function(error) {
                console.log(error)
            })
        }

    },
    created() {
        // this.goXuanke();
        // this.goZhinengXuanke();
        // this.goGenjuzhuanye();
    }
}
</script>