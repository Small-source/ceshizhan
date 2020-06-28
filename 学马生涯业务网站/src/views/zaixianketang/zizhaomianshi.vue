<template>
    <div class="zizhaomianshi">
        <div class="banner">
            <div class="inner">
                <p class="title">自招面试</p>
                <p class="detail"><span>———</span>精品视频</p>
            </div>
        </div>
        <div class="inner">
            <div class="kecheng">
                <el-radio-group v-model="radio1" size="30px" type="text" border id="kcradio">
                    <el-radio :label="item.id" v-for="(item, index) in kecheng" :key="index" >{{item.title}}</el-radio>
                </el-radio-group>
                <!-- <h3>{{radio1}}</h3> -->
            </div>
            <div class="content">
                 <ul class="lis">
                    <li v-for="(item, index) in cdata" :key="index">
                        <div class="free" v-if="item[4] == '免费'">
                            <div class="imgBox" @click="goPlayVideo(item[5])"><img :src="item[2]" alt=""></div>
                            <p class="title">{{item[3]}}</p>
                            <p class="noVIP">{{item[4]}}</p>
                        </div>
                        <div v-else="item[4] == 'VIP'" @click="tanchuang">
                            <div class="imgBox"><img :src="item[2]" alt=""></div>
                            <p class="title">{{item[3]}}</p>
                            <p class="VIP">{{item[4]}}</p>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
        <Viptanchuang :data="isshow" v-on:go-back="isshow = false"></Viptanchuang>
    </div>
</template>
<style type="text/css" lang='less' scoped>
.zizhaomianshi {
    background-color: #f9f9f9;
    width: 100%;
    letter-spacing: 1px;
    .inner {
        width: 1200px;
        margin: 0 auto;
        overflow: hidden;
    }
    .banner {
        height: 88px;
        background: url(/imgs/zaixianketang/bg/bg_mianshibanner.png) no-repeat;
        margin-bottom: 17px;
        .inner {
            padding-top: 6px;
        }
        .title {
            line-height: 50px;
            font-size: 22px;
            font-weight: 500;
            color: #fff;
        }
        .detail {
            padding-left: 100px;
            height: 18px;
            line-height: 18px;
            font-size: 16px;
            color: #fff;
            span {
                letter-spacing: 0px;
                margin-right: 2px;
            }
        }
    }
    .kecheng {
        padding: 16px 0px;
        padding-left: 25px;
        height: 28px;
        border-bottom: 1px solid #dedede;
        background-color: #fff;
    }
    // .content {
    //     .zhizhao {
    //         height: 60px;
    //         line-height: 60px;
    //         padding-left: 25px;
    //         color: #333;
    //         border-bottom: 1px solid #dedede;
    //         background-color: #fff;
    //     }

    //     .lis {
    //         overflow: hidden;
    //         padding: 25px;
    //         background-color: #fff;
    //         width: 1274px;
    //         li {
    //             width: 230px;
    //             height: 240px;
    //             box-sizing: border-box;
    //             border: 1px solid #dedede;
    //             float: left;
    //             padding: 5px;
    //             margin-right: 76px;
    //             margin-bottom: 28px;
    //             border-radius: 3px;
    //             cursor: pointer;
    //             border-radius: 2px;
    //             &:hover {
    //                 box-shadow: 0px 0px 10px #dedede; 
    //             }
    //             .imgBox {
    //                 width: 218px;
    //                 height: 162px;
    //                 overflow: hidden;
    //                 &:hover {
    //                     img {
    //                         transform: scale(1.2);
    //                         transition: all 1s;
    //                     } 
    //                 }
    //             }
    //             img {
    //                 width: 218px;
    //                 height: 162px;
    //                 &:hover {
    //                     transform: scale(1.2);
    //                 }
    //             }
    //             .title {
    //                 font-size: 16px;
    //                 // padding-top: 4px;
    //                 color: #333;
    //                 height: 40px;
    //                 line-height: 40px;
    //             }
    //             .noVIP {
    //                 height: 20px;
    //                 text-align: right;
    //                 font-size: 16px;
    //                 color: #c13524;
    //                 line-height: 20px;
    //             }
    //             .VIP {
    //                 text-align: right;
    //                 height: 20px;
    //                 color: #efd323;
    //                 font-size: 16px;
    //                 line-height: 20px;
    //                 background: url(/imgs/zaixianketang/zizhaomianshi/vip.png) no-repeat 160px 0px;
    //             }


    //         }
    //     }
    // }
    .content {
            .zhizhao {
                height: 60px;
                line-height: 60px;
                padding-left: 25px;
                color: #333;
                border-bottom: 1px solid #dedede;
                background-color: #fff;
            }

            .lis {
                overflow: hidden;
                padding-top: 25px;
                background-color: #fff;
                width: 1230px;
                li {
                    width: 220px;
                    float: left;
                    padding: 7px;
                    margin-right: 8px;
                    margin-bottom: 28px;
                    cursor: pointer;
                    border-radius: 2px;
                   
                    &:hover {
                        padding: 7px;
                        box-shadow: 0px 0px 10px #dedede; 
                    }
                    a {
                        display: block;
                        width: 100%;
                        height: 100%;
                    }
                    .imgBox {
                        width: 220px;
                        height: 140px;
                        overflow: hidden;
                    }
                    img {
                        width: 220px;
                        height: 140px;
                        // &:hover {
                        //     transform: scale(1.2);
                        // }
                    }
                    .title {
                        font-size: 13px;
                        color: #333;
                        height: 37px;
                        line-height: 37px;
                        margin-bottom: 4px;
                    }
                    .noVIP {
                        height: 20px;
                        width: 40px;
                        font-size: 12px;
                        color: #f21e1e;
                        line-height: 20px;
                        border-radius: 2px;
                        background: linear-gradient(#e9e7e8, #c7c6c6);
                        text-align: center;
                    }
                    .VIP {
                        height: 20px;
                        width: 40px;
                        font-size: 12px;
                        background: linear-gradient(#fcc772, #ee8935);
                        text-align: center;
                        line-height: 20px;
                        color: #fff;
                    }
                }
            }
    }
    #kcradio {
        // background-color: green;
        .is-checked {
            // border-radius: 2px;
            background-color: #2d8ffc;
                .el-radio__label {
                    background-color: #2d8ffc;
                    border-radius: 13px;
                    overflow: hidden;
                    height: 26px;
                    line-height: 26px;
                    display: inline-block;
                    color: #fff !important;
                    font-size: 14px;

                }
        }
    }
}
</style>
<script>
import Viptanchuang from '../../components/Viptanchuang.vue'
export default {
    components: { Viptanchuang },
    // props: [ 'message' ],
    data() {
        return {
            radio1: '通识课',
            data: [],
            cdata: [],
            isshow: false,
            kecheng: [ 
            // '全部课程', '通识课', '类型课'
                { title: '通识课', id: '通识课' }, 
                // { title: '类型课', id: '  ' },
                // { title: '', id: '  ' },
            ],
            videoSrc: '',
        }
    },
    watch: {
        radio1() {
            // console.log(this.radio1)
            let m = this.radio1;
            this.cdata =  this.data.filter((item) => {
                return item[1].includes(m)
            })

        }
    },
    methods: {
        dataUpdate() {
            this.$ajax
                // get请求
                .get('/data/zizhaomianshi.json', {
                    // query数据
                    params: {
                        id: this.$route.params.id
                    }
                })
                // 监听数据返回
                // .then(({ data }) => console.log(data))
                .then(({ data }) => {
                    this.data = data;
                    this.cdata = data;
                    // console.log(this.cdata);
                })
        },
        tanchuang() {
            this.isshow = true;
        },
        goPlayVideo(src) {
            var src = src;
            this.$router.push({  
                path: '/videoplay',   
                name: 'videoplay',  
                params: {   
                    src: src  
                },  
                // query: {  
                //     id: id,    
                // }  
            }) 
            window.scroll(0, 0); 
        }
      
    },
    created() {
        this.dataUpdate();
    }
}
</script>