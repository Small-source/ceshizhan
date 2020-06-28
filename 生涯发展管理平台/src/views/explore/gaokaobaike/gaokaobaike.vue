<template>
    <div class="gaokaobaike">
        <div class="main_box">
            <div class="title_box"><img src="/imgs/careerArchives/icon_biaoti.png" alt="">大学</div>
            <ul>
                <li @click="getDetail(item.title,item.id)" v-for="(item,index) in data1" :key="item.id">{{item.title}}</li>
            </ul>
        </div>
        <div class="main_box">
            <div class="title_box"><img src="/imgs/careerArchives/icon_biaoti.png" alt="">专业</div>
            <ul>
                <li @click="getDetail(item.title,item.id)" v-for="(item,index) in data2" :key="item.id">{{item.title}}</li>
            </ul>
        </div>
        <div class="main_box">
            <div class="title_box"><img src="/imgs/careerArchives/icon_biaoti.png" alt="">新高考</div>
            <ul>
                <li @click="getDetail(item.title,item.id)" v-for="(item,index) in data3" :key="item.id">{{item.title}}</li>
            </ul>
        </div>
        <div class="main_box">
            <div class="title_box"><img src="/imgs/careerArchives/icon_biaoti.png" alt="">招生录取相关</div>
            <ul>
                <li @click="getDetail(item.title,item.id)" v-for="(item,index) in data4" :key="item.id">{{item.title}}</li>
            </ul>
        </div>
        <div class="main_box">
            <div class="title_box"><img src="/imgs/careerArchives/icon_biaoti.png" alt="">志愿填报相关</div>
            <ul>
                <li @click="getDetail(item.title,item.id)" v-for="(item,index) in data5" :key="item.id">{{item.title}}</li>
            </ul>
        </div>
        <div class="main_box">
            <div class="title_box"><img src="/imgs/careerArchives/icon_biaoti.png" alt="">考试政策相关</div>
            <ul>
                <li @click="getDetail(item.title,item.id)" v-for="(item,index) in data6" :key="item.id">{{item.title}}</li>
            </ul>
        </div>
        <div class="main_box">
            <div class="title_box"><img src="/imgs/careerArchives/icon_biaoti.png" alt="">其他必备相关</div>
            <ul>
                <li @click="getDetail(item.title,item.id)" v-for="(item,index) in data7" :key="item.id">{{item.title}}</li>
            </ul>
        </div>
    </div>
</template>
<style type="text/css" lang='less' scoped>
    .gaokaobaike {
        min-height: 760px;
        margin-left: 20px;
        background-color: #fff;
        padding: 20px; 
        .main_box {
            margin-bottom: 20px;
            .title_box {
                height: 40px;
                display: flex;
                align-items: center;
                font-size: 18px;
                color: #338cef;
                border-bottom: 2px solid #ebebeb;
                img {
                    margin-right: 8px;
                }
            }
            ul {
                display: flex;
                flex-wrap: wrap;
                padding: 15px 0px;
                li {
                    box-sizing: border-box;
                    width: 20%;
                    font-size: 14px;
                    color: #333;
                    line-height: 40px;  
                    cursor: pointer;
                    position: relative;
                    padding-left: 10px;
                    // list-style: disc inside;
                    &::before {
                        content: '';
                        position: absolute;
                        width: 4px;
                        height: 4px;
                        border-radius: 50%;
                        margin-right: 3px;
                        left: 0;
                        top: 18px;
                        background-color: #333;

                    }
                    &:hover {
                        color: #338cef;
                        &::before {
                            background-color: #338cef;
                        }
                    }
                }
            }

        }
    }
</style>
<script>
// import Loading from '../../../.././components/Loading.vue'
export default {

    name: '',
    // components: { Loading },
    data() {
        return {
            data1: [],//大学
            data2: [],//专业
            data3: [],//新高考
            data4: [],//招生录取相关
            data5: [],//志愿填报相关
            data6: [],//考试政策相关
            data7: [],//其他必备相关
            // baike: [
            //     { title: '大学', main: [
            //         { name: '双一流', id: '1' },
            //         { name: '985工程', id: '2' },
            //         { name: '211工程', id: '3' },
            //         { name: '正规高', id: '4' },
            //         { name: '中央部委直属', id: '5' },
            //         { name: '教育部直属', id: '6' },
            //         { name: '独立学院', id: '7' },
            //         { name: '民办高校', id: '8' },
            //         { name: '高职院校', id: '9' },
            //         { name: '九校联盟', id: '10' },
            //         { name: '华东五校 ', id: '11' },
            //         { name: '国防七校', id: '12' },
            //         { name: '武汉七校联盟', id: '13' },
            //         { name: '建筑老八校', id: '14' },
            //         { name: '两电一邮', id: '15' },
            //         { name: '四大工学院', id: '16' },
            //         { name: '长安联盟', id: '17' },
            //     ] },
            //     { title: '专业', main: [
            //         { name: '学科门类', id: '18' },
            //         { name: '一级学科', id: '19' },
            //         { name: '二级学科', id: '20' },
            //         { name: '国家重点学科', id: '21' },
            //         { name: '国家特色专业', id: '22' },
            //         { name: '学科门类与专业关系', id: '23' },
            //         { name: '文科生热门专业', id: '24' },
            //         { name: '理科生热门专业', id: '25' }
            //     ] },
            //     { title: '新高考', main: [
            //         { name: '选科走班制', id: '26' },
            //         { name: '高职院校分类考试', id: '27' },
            //         { name: '高职单招', id: '28' },
            //         { name: '自主招生', id: '29' },
            //         { name: '大类招生', id: '30' },
            //         { name: '分段录取', id: '31' },
            //         { name: '批次合并', id: '32' },
            //         { name: '专业平行志愿', id: '33' },
            //         { name: '平行志愿', id: '34' },
            //         { name: '院校专业组', id: '35' },
            //         { name: '专业类+学校', id: '36' },
            //         { name: '新高考平行志愿', id: '37' },
            //         { name: '两依据，一参考', id: '38' },
            //         { name: '三位一体', id: '39' },
            //         { name: '综合素质评价', id: '40' },
            //         { name: '等级考试', id: '41' },
            //         { name: '学业水平考试', id: '42' },
            //         { name: '等级赋分制', id: '43' },
            //         { name: '3+1+2', id: '44' },
            //         { name: '3+3', id: '45' },
            //         { name: '院校专业组', id: '46' },
            //     ] },
            //     { title: '招生录取相关', main: [
            //         { name: '专业清', id: '47' },
            //         { name: '专业极差', id: '48' },
            //         { name: '分数清', id: '49' },
            //         { name: '拟录取', id: '50' },
            //         { name: '预录取', id: '51' },
            //         { name: '志愿极差', id: '52' },
            //         { name: '投档', id: '53' },
            //         { name: '退档', id: '54' },
            //         { name: '录取批次', id: '55' },
            //         { name: '高职单招', id: '56' },
            //         { name: '提档比例', id: '57' },
            //         { name: '志愿优先', id: '58' },
            //         { name: '按大类招生', id: '59' },
            //         { name: '军校生', id: '60' },
            //         { name: '提前批招生', id: '61' }
            //     ] },
            //     { title: '志愿填报相关', main: [
            //         { name: '院校梯度', id: '62' },
            //         { name: '顺序志愿', id: '63' },
            //         { name: '平行志愿', id: '64' },
            //         { name: '院校最低录取分', id: '65' },
            //         { name: '院校调档分数线', id: '66' },
            //         { name: '志愿梯度', id: '67' },
            //         { name: '征求志愿', id: '68' },
            //         { name: '服从调剂', id: '69' },
            //         { name: '两线差分法', id: '70' },
            //         { name: '简单分数法', id: '71' },
            //         { name: '简单名次法', id: '72' },
            //         { name: '小平行志愿', id: '73' },
            //         { name: '平行志愿组', id: '74' },
            //         { name: '模拟投档线', id: '75' }
            //     ] },
            //     { title: '考试政策相关', main: [
            //         { name: '高考', id: '76' },
            //         { name: '学业水平测试', id: '77' },
            //         { name: '艺考', id: '78' },
            //         { name: '自主招生选拔考试', id: '79' },
            //         { name: '高考加分政策', id: '80' },
            //         { name: '体育特长生加分', id: '81' },
            //         { name: '春季高考', id: '82' },
            //         { name: '艺术类高考', id: '83' }
            //     ] },
            //     { title: '其他必备相关', main: [
            //         { name: '军事院校', id: '84' },
            //         { name: '本科', id: '85' },
            //         { name: '专科', id: '86' },
            //         { name: '中外合作办学', id: '87' },
            //         { name: '独立学院', id: '88' },
            //         { name: '二级学院', id: '89' },
            //         { name: '小211工程', id: '90' },
            //         { name: '名称最易混淆的大学', id: '91' },
            //         { name: '在内地招生的港澳高校', id: '92' },
            //         { name: '高等院校的分类', id: '93' },
            //         { name: '免费师范生', id: '94' },
            //         { name: '艺术类考生', id: '95' },
            //         { name: '大小年', id: '96' },
            //         { name: '文理兼招', id: '97' },
            //         { name: '高校专项计划', id: '98' }
            //     ] },
            // ]
        }
    },
    methods: {

        //高考百科
        getEncyclopediaList(id,type){
            var _this=this;
            this.$ajax.post('http://www.xuematech.com/papi/article/getEncyclopediaList', {
                cateId:id,
            }).then(function (res) {
                if(type==1) {
                    _this.data1 = res.data.data;
                }else if(type==2) {
                    _this.data2 = res.data.data;
                }else if(type==3) {
                    _this.data3 = res.data.data;
                }else if(type==4) {
                    _this.data4 = res.data.data; 
                }else if(type==5) {
                    _this.data5 = res.data.data;
                }else if(type==6) {
                    _this.data6 = res.data.data;
                }else if(type==7) {
                    _this.data7 = res.data.data;
                }
            })
        },
        getDetail(title,id) {
            this.$router.push('/explore/baikexiangqing?id=' + id);
        },
        //根据类型获取分类大类
        // getCategoryList(){
        //     var OEMdomain = this.$OEMdomain;
        //     var _this=this;
        //     this.$ajax.post(this.G_uri + '/article/getCategoryList', {
        //         webSite: OEMdomain,
        //         type:3
        //     }).then(function (res) {

        //     })
        // },
        // getClickNumIndexList(id){
        //     var _this=this;
        //     this.$ajax.post(this.G_uri  + '/article/getEncyclopediaList', {
        //         cateId:id,
        //     }).then(function (res) {
        //         _this.data1 = res.data.data;
        //     })
        // },
    },
    watch: {
    },
    created() {
        // this.getCategoryList();
        this.getEncyclopediaList(21,1);
        this.getEncyclopediaList(22,2);
        this.getEncyclopediaList(23,3);
        this.getEncyclopediaList(24,4);
        this.getEncyclopediaList(25,5);
        this.getEncyclopediaList(29,6);
        this.getEncyclopediaList(30,7);
        // this.getClickNumIndexList();
    }
}
</script>