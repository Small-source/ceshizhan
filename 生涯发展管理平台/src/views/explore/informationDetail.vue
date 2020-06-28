<template>
    <div id="informationDetails">
        <div class="content">
            <div class="arcTitle">{{cdata.title}}</div>
            <div class="contentBox" v-html="cdata.content"></div>
        </div>
    </div>
</template>
<script>
    export default {
        name: "xiangqiang",
        data(){
            return {
                cdata:""
            }
        },
        methods:{
            getContent(id){
                //获取文章
                let _this=this
                this.$ajax.post(this.G_uri + this.ports.information.detail, {
                    id:id
                }).then(function (res) {
                    _this.cdata=res.data.data
                })
            }
        },
        created(){
            this.getContent(this.$route.query.id)
        }
    }
</script>
<style lang="less" scoped>
    #informationDetails{
        padding-left: 20px;
        .arcTitle{
            text-align: center;
            font-size: 20px;
            font-weight: bolder;
            letter-spacing: 0.2em;
            color: #333333;
            padding: 30px 0;
        }
        .title{
            width: 100%;
            margin: 0 auto;
            height: 64px;
            line-height: 64px;
            border-bottom: 1px solid #2D8FFC;
            background: #fff;
            padding-left: 20px;
            a{
                line-height: 64px;
                font-size: 16px;
                color:#333333;
                font-weight: bolder;
                &:last-child{
                    color:#127EE0;
                }
            }
        }
        .content{
            width: 970px;
            background: #fff;
        }
        .contentBox{
            padding:0 80px ;
        }
    }
</style>
