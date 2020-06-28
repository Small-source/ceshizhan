<template>
    <div class="yuanxiaoduibi">
        <table border="1" cellspacing="0">
            <tr v-for="item in cdata">
                <td>{{item.name}}</td>
                <td v-for="i,index in item.arr" v-if="item.flag">
                    <img :src="item.logos[index]" alt=""> <br>
                    {{item.arr[index]||'--'}}
                </td>
                <td v-for="i,index in item.arr" v-if="!item.flag" :class="item.bigNumber==item.arr[index]&&'bold'">{{item.arr[index]||'--'}}</td>
            </tr>
        </table>
    </div>
</template>
<script>
    export default {
        name: "yuanxiaoduibi",
        data(){
            return {
                cdata:{
                    name:{
                        name:'学校名称',
                        arr:[],
                        logos:[],
                        flag:true
                    },
                    city:{
                        name:'所在地',
                        arr:[]
                    },
                    schoolNatureName:{
                        name:'办学性质',
                        arr:[]
                    },
                    affiliate:{
                        name:'隶属于',
                        arr:[]
                    },
                    type:{
                        name:'学校类型',
                        arr:[],

                    },
                    rank:{
                        name:'综合排名',
                        arr:[],
                        bigNumber:''
                    },
                    schoolLevelName:{
                        name:'学校层次',
                        arr:[]
                    },
                    tag:{
                        name:'学校特色',
                        arr:[]
                    },
                    masterNum:{
                        name:'硕士点',
                        arr:[],
                        bigNumber:''
                    },
                    doctorsNum:{
                        name:'博士点',
                        arr:[],
                        bigNumber:''
                    }
                }
            }
        },
        methods:{
            dataUpdate(arr) {
                var token = window.sessionStorage.getItem('ymtxToken');
                var _this = this;
                // var id = this.$route.query.id
                this.$ajax
                // get请求
                    .post(this.G_uri + '/target/getCompareUniversityList', {
                        "universityIds": arr
                    },{
                        headers:{
                            token: token
                        }
                    })
                    // 监听数据返回
                    // .then(({ data }) => console.log(data))
                    .then(function(res) {
                        // console.log(res)
                        if(res.data.code == 2000) {
                            var datas = res.data.data;
                            datas.forEach(data=>{
                                var tag="";
                                for (var key in data){
                                    if(/tag.+Name/.test(key)&&data[key]){
                                        tag+=data[key]+" "
                                    }
                                }
                                for(var key in _this.cdata){
                                    var len=_this.cdata[key]['arr'].length;
                                    // _this.cdata[key]['arr'][len]=data[key]
                                    if(key=='tag'){
                                        _this.$set(_this.cdata[key]['arr'],len,tag)
                                    }else{
                                        _this.$set(_this.cdata[key]['arr'],len,data[key])
                                        if(key=='name'){
                                            _this.$set(_this.cdata[key]['logos'],len,data['logo'])
                                        }
                                    }
                                }

                            })
                            _this.cdata['masterNum']['bigNumber']=Math.max.apply(null, _this.cdata['masterNum']['arr'])
                            _this.cdata['doctorsNum']['bigNumber']=Math.max.apply(null, _this.cdata['doctorsNum']['arr'])
                            var arrs=[];
                            _this.cdata['rank']['arr'].forEach(item=>{
                                if(item){
                                    arrs.push(item)
                                }
                            })
                            _this.cdata['rank']['bigNumber']=Math.min(...arrs)
                            // $(_this.cdata.threeYearScore).each(function (i,item) {
                            //     if(item.artsAndScience=='文科'){
                            //         _this.wenke[_this.wenke.length]=item
                            //     }
                            //     if(item.artsAndScience=='理科'){
                            //         _this.like[_this.like.length]=item
                            //     }
                            // })
                            console.log( _this.cdata)
                            _this.isShowLoading = false;
                        }else if(res.data.code == 1016) {
                            _this.$router.push('/login')
                        }else if(res.data.code == 2026) {
                            _this.$router.push('/perfectInformation');
                        }
                    })
                    .catch(function(error) {
                        console.log(error)
                    })
            },
        },
        created() {
            let universityIds = this.$route.query.universityIds;
            this.dataUpdate(universityIds);
        }
    }
</script>

<style scoped lang="less">
    .yuanxiaoduibi{
        margin-left: 20px;
        background: #fff;
        overflow: hidden;
        table{
            width: 930px;
            margin: 30px auto;
            border-collapse:collapse;
            box-sizing: border-box;
        }
        table,td{
            border:1px solid #ddd;
            font-size: 16px ;
            color: #333;
            text-align: center;
            padding: 20px 5px;
            img{
                width: 98px;
                height: 98px;
                margin-bottom: 20px;
            }
        }
        td{
            box-sizing: border-box;
            width: 20%;
        }
        .bold{
            font-weight: bolder;
            font-size: 18px;
        }
    }
</style>