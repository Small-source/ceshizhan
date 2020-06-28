<template>
    <div class="gaozhongjingsaiku">
        <div class="inner">
            <div class="search">
                <p>自主招生学校列表</p>
                <input type="text" v-model="searchValue" placeholder="请输入院校名称">
                <button type="button" @click="searchValues" class="button">
                    <img src="/imgs/zizhuxuanba/zizhaoluquku/search.png" alt="">
                </button>
                <!-- <input type="button" value="查询" class="button" @click="searchValue"> -->
            </div>
            <div class="shengfen">
                <div class="neirong">
                    <div class="mingcheng">学校地区 ></div>
                    <div class="right" id="el-radio-group">
                        <el-radio-group v-model="radio1" size="30px" type="text" border id="gzjsyuanixiao">
                            <el-radio :label="item.value" v-for="(item, index) in provinces" :key="index" @click="changes" :max="1">{{item.province}}</el-radio>
                        </el-radio-group>
                    </div>、
                </div>    
            </div>
            <div class="content">
                <div class="neirongBox" v-for="(item, index) in dataProcessing" :key="index">
                    <div class="left">
                        <p class="title">{{item[2]}}</p>
                        <img src="/imgs/zizhuxuanba/zizhaoluquku/bg_icon_dingwei.png" alt="">
                        <span class="city">{{item[1]}}</span>
                    </div>
                    <div class="right">
                        <ul class="lis">
                            <li><p class="nian">2018年</p><p class="chushen">初审通过</p><p class="num">{{item[4]}}</p></li>
                            <li><p class="nian">2017年</p><p class="chushen">初审通过</p><p class="num">{{item[5]}}</p></li>
                            <li><p class="nian">2016年</p><p class="chushen">初审通过</p><p class="num">{{item[6]}}</p></li>
                            <li><p class="nian">2015年</p><p class="chushen">初审通过</p><p class="num">{{item[7]}}</p></li>
                        </ul>
                    </div>
                </div>
                <div class="pages">
                    <div class="middle">
                        <!-- 计算数据属性中的allPages代表的是总页数 allPages === Math.ceil(cdata.length / number) -->
                        <span class="numbers">共{{cdata.length}}条</span>
                        <span @click="goBack()" v-show="pageValue > 1">上一页</span>
                        <span @click="go(1)" :class="pageValue === 1 ? 'active' : 'button'">1</span>
                        <span v-show="pageValue > 4">...</span>
                        <span @click="go(page[0])" :class="pageValue === page[0] ? 'active' : 'button'" v-show="allPages > 1">{{page[0]}}</span>
                        <span @click="go(page[1])" :class="pageValue === page[1] ? 'active' : 'button'" v-show="allPages > 2">{{page[1]}}</span>
                        <span @click="go(page[2])" :class="pageValue === page[2] ? 'active' : 'button'" v-show="allPages > 3">{{page[2]}}</span>
                        <span @click="go(page[3])" :class="pageValue === page[3] ? 'active' : 'button'" v-show="allPages > 4 && allPages > page[3]">{{page[3]}}</span>
                        <span @click="go(page[4])" :class="pageValue === page[4] ? 'active' : 'button'" v-show="allPages > 5 && allPages > page[4]">{{page[4]}}</span>
                        <span>...</span>
                        <!-- :class="pageValue === Math.ceil(cdata.length / number) ? 'active' : 'button'" -->
                        <!-- 最后一页 -->
                        <span @click="go(Math.ceil(cdata.length / number))" v-show="!(pageValue === Math.ceil(cdata.length / number))">{{Math.ceil(cdata.length / number)}}</span>
                        <span @click="goNext()" v-show="Math.ceil(cdata.length / number) > 1 && pageValue < allPages">下一页</span>
                    </div>
                </div>
            </div>
        </div>    
    </div>
</template>
<style type="text/css" lang='less'>
    .gaozhongjingsaiku .right .el-radio-group .is-checked{
        background-color: rgba(255,255,255,0);
    }
    #el-radio-group .el-radio-group .is-checked .el-radio__label {
        background: #3491F8  !important;
        border-radius: 10px;
    }
    .el-radio-group .el-radio{
        margin-bottom: 14px;
    }
    .is-checked{
        border:none !important;
    }
.gaozhongjingsaiku {
        // height: 2000px;
    margin-top: 20px;
    padding-bottom: 20px;
    .inner {
        box-sizing: border-box;
        width: 1200px;
        margin: 0 auto;
        padding: 0px 20px;
        background: #fff;
    }
    .title {
        font-size: 18px;
        color: #fff;
    }
    .search {
        *{
            box-sizing: border-box;
        }
        height: 122px;
        padding: 16px 0 0px;
        border-bottom: 1px solid #F2F2F2;
        input {
            width: 556px;
            height: 44px;
            border-radius: 22px;
            border:1px solid #3592F9;
            float: left;
            padding-left: 15px;
            font-size: 14px;
            background: #F9F9F9;
        }
        p{
            font-size: 14px;
            color: #000;
            font-weight: bold;
            margin-bottom: 17px;
        }
        .button {
            margin-left: 5px;
            float: left;
            width: 88px;
            height: 44px;
            border-radius: 20px;
            text-align: center;
            line-height: 44px;
            color: #fff;
            background-color: #2c8ffc;
            border:1px solid  #3592F9;
            position: relative;
            left:-94px;
            top:0;
            img{
                position: relative;
                top:-2px;
            }
        }

    }
    .shengfen {
        border-radius: 5px;
        padding-right: 20px;
        margin-bottom: 30px;
        .neirong {
            width: 1120px;
            height: 54px;
            line-height: 54px;
            padding: 20px 0px;
            // border-bottom: 1px dashed #dedede;
            .mingcheng {
                float: left;
                width: 100px;
                line-height: 20px;
                color: #000;
                font-size: 12px;
                font-weight: 600;
            }
            .right {
                padding-left: 14px;
                width: 985px;
                float: left;
            }
        }
    }
    .content {
        padding-bottom: 40px;
        .neirongBox {
            height: 80px;
            margin-bottom: 20px;
            border-radius: 2px;
            padding: 15px 20px 5px;
            background: url("/imgs/zizhuxuanba/zizhaoluquku/bg.png");
            background-repeat: no-repeat;
            .left {
                width: 430px;
                height: 80px;
                line-height: 30px;
                padding-left: 30px;
                float: left;
                font-size: 18px;
                color: white;
                .city{
                    font-size:16px;
                    margin-left: 10px;
                }
            }
            .right {
                width: 584px;
                float: right;
                .lis {
                    display: flex;
                    text-align: center;
                    font-size: 14px;
                    li {
                        flex: 1;
                        color: white;
                        .nian {
                            line-height: 20px;
                        }
                        .chushen {
                            line-height: 30px;
                            border-right: 1px solid #cfcfcf;
                        }
                        .num {
                            line-height: 20px;
                            color: #fb6928;
                        }
                        &:last-child {
                            .chushen {
                                border: none;
                            }
                        }

                    }
                }
            }
        }
        .pages {
            // width: 900px;
            margin: 0 auto;
            margin-top: 30px;
            // position: relative;
            height: 40px;
            .middle {
                // width: 100%;
                // position: absolute;
                // margin: 0 auto;
                height: 30px;
                line-height: 30px;
                font-size: 14px;
                text-align: center;
                // float: left;
                // overflow: hidden;
                // display: flex;
                .numbers {
                    display: inline-block;
                    color: #333;
                    font-size: 14px;
                    border: none;
                    width: 70px;
                    // float: left;
                }
                span {
                    // display: inline-block;
                    // float: left;
                    display: inline-block;
                    margin-left: 5px;
                    width: 50px;
                    height: 30px;
                    border-radius: 5px;
                    border: 1px solid #666;
                    &:hover {
                        background-color: #156def;
                        color: #fff;
                    }
                }
                .active {
                    display: inline-block;
                    margin-left: 5px;
                    width: 60px;
                    height: 30px;
                    border-radius: 5px;
                    border: 1px solid #666;
                    background-color: #156def;
                    color: #fff;
                }
            }
        }
    }
    .el-radio-group {
        .el-radio {
            .el-radio__input{
                display: none;
                background: red;
            }
        }
    }
    #gzjsyuanixiao {
        .el-radio {
            .el-radio__label {
                padding: 0 13px;
                font-size: 12px;
                color: #666867;
                background: #F5F7F6;
                border-radius: 12px;
                text-align: center;
                box-sizing: border-box;
                height: 18px;
                line-height: 18px;
            }
        }
    }

}
// .el-radio {
//     .el-radio__input{
//         display: none;
//     }
// }
    
</style>
<style scoped>

</style>
<script>
export default {
    props: [ 'message' ],
    data() {
        return { 
            // 面向省份
            provinces: [
                // '北京', '天津', '上海', '重庆', '河北', '河南', '云南', '辽宁', '黑龙江', '湖南', '安徽', '山东', '新疆', '江苏', '浙江', '江西', '湖北', '广西', '甘肃', '山西', '内蒙古', '陕西', '吉林', '福建', '贵州', '广东', '青海', '西藏', '四川', '宁夏', '海南' 
                { province: '全国', value: '' },
                { province: '北京', value: '北京' },
                { province: '天津', value: '天津' },
                { province: '上海', value: '上海' },
                { province: '重庆', value: '重庆' },
                { province: '河北', value: '河北' },
                { province: '河南', value: '河南' },
                { province: '云南', value: '云南' },
                { province: '辽宁', value: '辽宁' },
                { province: '黑龙江', value: '黑龙江' },
                { province: '湖南', value: '湖南' },
                { province: '安徽', value: '安徽' },
                { province: '山东', value: '山东' },
                { province: '新疆', value: '新疆' },
                { province: '江苏', value: '江苏' },
                { province: '浙江', value: '浙江' },
                { province: '江西', value: '江西' },
                { province: '湖北', value: '湖北' },
                { province: '广西', value: '广西' },
                { province: '甘肃', value: '甘肃' },
                { province: '山西', value: '山西' },
                { province: '内蒙古', value: '内蒙古' },
                { province: '陕西', value: '陕西' },
                { province: '吉林', value: '吉林' },
                { province: '福建', value: '福建' },
                { province: '贵州', value: '贵州' },
                { province: '广东', value: '广东' },
                { province: '青海', value: '青海' },
                { province: '西藏', value: '西藏' },
                { province: '四川', value: '四川' },
                { province: '宁夏', value: '宁夏' },
                { province: '海南', value: '海南' }
            ],
            // 竞赛级别
            jibies:[
                { jiebie: '国际', id: '' },
                { jiebie: '国家级', id: '' },
                { jiebie: '省级', id: '' },
                { jiebie: '市级', id: '' },
                { jiebie: '校级', id: '' },
                { jiebie: '其他', id: '' },
            ],
            // 竞赛范畴
            fanchous: [
                { fanchou:'学科', id: '' },
                { fanchou:'技能', id: '' },
                { fanchou:'信息技术', id: '' },
                { fanchou:'创新创业', id: '' },
                { fanchou:'商业', id: '' },
                { fanchou:'公益', id: '' },
                { fanchou:'设计', id: '' },
                { fanchou:'文学艺术', id: '' },
                { fanchou:'体育', id: '' },
                { fanchou:'其他', id: '' },
            ],
            radio1: '',
            data: [],
            cdata: [],
            searchValue: '',
            page: [ 2, 3, 4, 5, 6 ],
            // 当前所在页码
            pageValue: 1,
            // 每页显示多少条数据
            number: 15,
            // cdatalength: 0,
            // 总页数
            // allPages: 0,
            // page: { num1: 1, num2: 2, num3: 3, num4: 4, num5: 5 }
            // radio7: '1'
        }
    },
    computed: {
        // 当前页显示的数据
        dataProcessing() {
            // 当前所在页码
            var pageValue = this.pageValue;
            // 每页显示多少条数据
            var number = this.number;
            // slice的两个参数
            var key1 = (pageValue-1) * number;
            var key2 = key1 + number;
            return this.cdata.slice( key1, key2)
        },
        // 计算总页数
        allPages() {
            return Math.ceil(this.cdata.length / this.number)
        }
    },
    methods: {
        // 数据处理
        // dataProcessing() {

        // }
        changes() {
            console.log(1111)
        },
        // 查询
        searchValues() {
            var value = this.searchValue
            console.log(value)
            this.cdata = this.data.filter((item) => {
                return item[2].includes(value);
            });
            // console.log(this.cdata)
        },
        dataUpdate() {
            // console.log(this)
            this.$ajax
                // get请求
                .get('/data/high_school.json', {
                    // query数据
                    params: {
                        id: this.$route.params.id
                    }
                })
                // 监听数据返回
                // .then(({ data }) => console.log(data))
                .then(({ data }) => {
                    this.data = data
                    this.cdata = this.data
                    // console.log(this.data)
                })
        },
        go(value) {
            // console.log(value)
            // 总数据条数
            // this.cdatalength = this.cdata.lenth;
            // 总页数
            // this.allPages = Math.ceil( this.cdatalength / number);
            // 当前所在页码
            this.pageValue = value;
            // 根据中间的值计算步长
            var num = this.page[2];
            // 步长
            var index = value - num;
            // console.log(index)
            if(value === 1) {
                for(var i = 0; i < this.page.length; i ++) {
                    this.page[i] = i + 2;
                }
                return;
            }
            // 下（页加）
            if(index > 0 &&  4 < value <= Math.ceil(this.cdata.length / this.number)) {
                for(var i = 0; i < this.page.length; i ++) {
                    this.page[i] += index;
                }
                return;
            }
            // 上（页减）
            if(index < 0 && value >= 4) {
                for(var i = 0; i < this.page.length; i ++) {
                    this.page[i] += index;
                }
                return;
            }
            if(index < 0 && value === 3) {
                this.page[0] = 2;
                this.page[1] = 3;
                this.page[2] = 4;
                this.page[3] = 5;
                this.page[4] = 6;
                return;
            }
        },
        // 一页
        goBack() {
            if(this.page[0] > 2) {
                this.pageValue --;
                for(var i = 0; i < this.page.length; i ++) {
                    this.page[i] --;
                }
                return;
            }
            if(this.page[0] = 2) {
                this.pageValue --;
                // console.log('这是' +  this.pageValue)
            }
        },
        // 下一页
        goNext() {
            if(this.page[4] < 100) {
                if(this.pageValue >= 4 ) {
                    // console.log(this.page.length);
                    for(var i = 0; i < this.page.length; i ++) {
                        this.page[i] ++;
                    }
                    this.pageValue ++;
                    // console.log(this.pageValue)
                    return;
                }
                // console.log(5555555);
                this.pageValue ++;
                // console.log('这是' +  this.pageValue) 
            }
        }
    },
    created() {
       this.dataUpdate();
    },
    watch: {
        // searchValue() {
        //     var value = this.searchValue
        //     this.cdata = this.data.filter((item) => {
        //         return item[2].includes(value)
        //     });
        // },
        radio1() {
            var value = this.radio1
            if(!value) {
                this.cdata = this.data
            }else {
                this.cdata = this.data.filter((item) => {
                    this.pageValue = 1;
                    return item[1].includes(value);
                });
            }
        }
    }
}
</script>