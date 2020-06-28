<template>
    <div class="careerAnchor">
        <div class="banner">
            <img src="/imgs/careerManagement/yuanxiaodingwei.jpg" alt="imgs">
        </div>
        <div class="careerAnchorBox">
            <masks v-show="cardstanchuang||balancetanchuang||swottanchuang||duibichuang||zhiyetanchuang||false"></masks>
            <!-- <img src="imgs/careerManagement/careerAnchor/banner.png" alt="" class="banner"> -->
            <div class="parts">
                <div class="top">
                    <div class="title">
                        <img src="imgs/careerArchives/icon_biaoti.png" alt="">
                        院校专业定位
                    </div>
                </div>
                <ul class="electiveBox">
                    <li>
                        <div class="left">
                            <img src="imgs/careerManagement/careerAnchor/yuanxiao.png" alt="">
                        </div>
                        <div class="right">
                            <div class="title">
                                成绩匹配院校
                            </div>
                            <p>
                                根据成绩和年份来匹配院校
                            </p>
                            <div class="button">
                                 <router-link to="/policyDecision/matchingSchools">
                                    查看
                                </router-link>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
            <div class="parts">
                <div class="top">
                    <div class="title">
                        <img src="imgs/careerArchives/icon_biaoti.png" alt="">
                        收藏院校
                    </div>
                </div>
                <p>意向院校统计了你成绩匹配的院校，在外部探索过程中收藏的院校，以及你的兴趣院校。</p>
                <p style="line-height: 20px">点亮星标
                    <img src="imgs/careerManagement/careerAnchor/icon_hui.png" alt="" style="position: relative;top:-2px;">
                    设置感兴趣的院校
                </p>
                <div class="Occupation"style="padding-top: 20px">
                    <table class="shoucang">
                        <tr v-for="item in  yuanxiaoList">
                            <td v-for="itemContent in item">
                                <img src="imgs/careerManagement/careerAnchor/icon_chengjipipei.png" alt="" v-if="itemContent.isMatch==1">
                                {{itemContent.name}}
                                <div class="img" :id="itemContent.isLight==1&&'imghuang'" @click="lightStar(itemContent.id),itemContent.isLight=itemContent.isLight==1?2:1"></div>
                            </td>
                        </tr>
                    </table>
                    <div class="noneContent" v-if="yuanxiaoList.length==0"></div>
                </div>
            </div>
            <div class="parts">
                <div class="top">
                    <div class="title">
                        <img src="imgs/careerArchives/icon_biaoti.png" alt="">
                        决策平衡单
                    </div>
                    <span @click="balancetanchuang=true">{{purposeZhiye.length>0?'编辑':'添加'}}</span>
                </div>
                <p style="line-height:20px;padding: 24px 0 24px 40px">“决策平衡单”经常被应用于问题解决模式和院校咨询中，用以协助咨询者有系统地分析每一个可能的选项，判断分别执行各选项的利弊得失，然后依据其在利弊得失上的加权计分排定各个选项的优先顺序，以执行最优先
                    或偏好的选项。</p>
                <h3>意向院校（加权前5名）</h3>
                <div class="yixiang" v-if="purposeZhiye.length>0">
                    <ul class="left">
                        <li v-for="(item,key) in purposeZhiye" v-if="key<5">
                            <div class="img"></div>
                            {{item.n}}
                        </li>
                    </ul>
                    <ul class="right">
                        <li v-for="(item,key) in purposeZhiye" v-if="key<5">
                            <div class="hui">
                                <div class="lan" :style="{width:(Number(item.v)+balanceBranch/2)/balanceBranch*100+'%'}"></div>
                            </div>
                        </li>
                    </ul>
                    <ul class="fen">
                        <li v-for="(item,key) in purposeZhiye" v-if="key<5">
                            {{item.v}}分
                        </li>
                    </ul>
                </div>
                <div class="noneContent" v-if="purposeZhiye.length==0"></div>
                <h3>最高加权院校统计</h3>
                <div class="tongji" id="myChart" :style="{width: '100%', height: '360px'}" v-show="purposeZhiye.length>0">
                </div>
                <div class="noneContent" v-if="purposeZhiye.length==0"></div>
            </div>
            <div class="parts">
                <div class="top">
                    <div class="title">
                        <img src="imgs/careerArchives/icon_biaoti.png" alt="">
                        SWOT分析
                    </div>
                </div>
                <p style="line-height:20px;padding: 24px 0 24px 40px">
                    SWOT分析：通过调查列举出研究对象密切相关的各种主要内部优势、劣势和外部的机会和威胁等，排列成矩阵形式，然后用系统分析的思想，把各种因素相互匹配，并且加以分析，从中得出一系列相应的决策性结论。
                    <br>示例：在生涯测评推荐院校、收藏院校、未来名片对应院校中选择一项院校进行swot分析，我们将从内部和外部进行系统分析，内部分析是从自身的角度分析自己在从事这项院校的优势与缺陷，外部分析是从社会环境的角度分析自己在从事这项院校的机会与挑战。
                </p>
                <div class="add" @click="swottanchuang=true,clearSwot()">
                    新增
                </div>
                <div class="swot">
                    <div class="swotLeft">
                        <table>
                            <thead>
                            <tr>
                                <td>目标院校</td>
                                <td>查看编辑</td>
                                <td>加入对比</td>
                            </tr>
                            </thead>
                            <tr v-for="item in swotLists">
                                <td>{{item.name}} <span class="del" @click="delSwot(item.id)"></span></td>
                                <td><span class="edit" @click="showSwot(item.id)">查看编辑</span></td>
                                <td>
                                    <el-checkbox  v-model="item.duibi" @change="changeswotNumber(item)">加入对比</el-checkbox>
                                </td>
                            </tr>
                        </table>
                        <div class="noneContent" v-if="swotLists.length==0"></div>
                    </div>
                    <div class="swotRight">
                        <ul class="swotList">
                            <li v-for="(item,index) in swotContrast" v-if="item.duibi">
                                <span>{{index+1}}</span>
                                {{item.name}}
                            </li>
                        </ul>
                        <div class="add" style="margin-top: 20px" @click="contrastSwot">
                            对比
                        </div>
                    </div>
                </div>
            </div>
            <div class="parts">
                <div class="top">
                    <div class="title">
                        <img src="imgs/careerArchives/icon_biaoti.png" alt="">
                        大学定位结果
                    </div>
                    <span @click="zhiyetanchuang=true">编辑</span>
                </div>
                <h3 style="margin: 20px 10px">我的目标大学:</h3>
                <div class="Occupation">
                    <table>
                        <tr v-for="item in OccupationReult">
                            <td v-for="itemContent in item">
                                {{itemContent.name}}
                                <span>{{itemContent.createdAt}}</span>
                            </td>
                        </tr>
                    </table>
                </div>
                <div class="noneContent" v-if="OccupationReult.length==0"></div>
            </div>
        </div>
        <div class="Cards" v-show="cardstanchuang">
            <div class="addContent">
                <p>
                    姓名
                </p>
                <input type="text"  v-model="Cards.name">
                <p>
                    头衔
                </p>
                <input type="text"  v-model="Cards.title">
                <p>
                    大学
                </p>
                <input type="text" v-model="Cards.career">
                <p>
                    公司
                </p>
                <input type="text" v-model="Cards.company">
                <p>地址 <span>（精确到省市即可）</span></p>
                <div class="inputs">
                    <el-select v-model="Cards.province" @change="choseProvince" placeholder="省级地区">
                        <el-option v-for="(item,$index) in province" :key="$index" :label="item.value" :value="item.value">
                        </el-option>
                    </el-select>
                    <el-select v-model="Cards.city" @change="choseCity" placeholder="市级地区">
                        <el-option v-for="(item,$index) in city" :key="$index" :label="item.value" :value="item.value">
                        </el-option>
                    </el-select>
                </div>
                <div class="save" @click="saveCard">保存</div>
                <div class="close" @click="exitConfirm"></div>
            </div>
        </div>
        <div class="Cards balance" v-show="balancetanchuang">
            <div class="addTitle">决策平衡单</div>
            <div class="addContent">
                <p> (1)下表中所列的是一般中学生在思考他的大学定位时考虑到的项目，希望你浏览一下这些项目。若你发现还有影响你考虑的新因素，可以添加在后面；已有的若
                    不属于你的考虑范畴,可以删除。<br>
                    (2)在决策平衡单中列出你需要进行决策的大学类型。<br>
                    (3)尊重你内心的意愿,逐一检视各个选项,并以"-2"至"2"的五点量表(-2,-1,0,1,2)来赋分。<br>
                    (4)重要考虑因素的赋分还可乘以1~5倍加权计分。<br>
                    (5)根据各大学加权计分的总分结果确定你的大学目标。
                </p>
                <div class="juece">
                    <table>
                        <thead>
                        <tr>
                            <td  rowspan="2" colspan="2">看中因素</td>
                            <td  rowspan="2">重要度</td>
                            <td v-for="i in pinghengdan[0]&&pinghengdan[0]['l'].length" >大学{{i}}</td>
                            <td>
                                <div class="button" @click="addColumns">
                                    添加
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td v-for="(item,index) in pinghengdan[0]&&pinghengdan[0]['l']" class="tdInput" >
                                <input v-model="item.n"  placeholder="输入搜索大学"
                                          @focus="listflag=true" @click="focus($event)"  @compositionstart="start" @compositionend="end" @input="search(item.n,index)"
                                          @blur="blur" class="inputGuding"
                                       autocomplete="off" >
                                </input>
                                <span class="del" @click="delColumns(index)"></span>
                                <ul class="searchList" v-show="listflag&&(index==pinghengdanIndex)">
                                    <li v-for="(item,indexs) in cdata" :key="indexs" @click="searchDetail(item.name,index)">{{item.name}}</li>
                                </ul>
                            </td>
                            <td>--</td>
                        </tr>
                        </thead>
                        <tr v-for="(item,index) in pinghengdan">
                            <td>{{index+1}}</td>
                            <td  style="padding-right: 30px" class="phd">
                                <el-input v-model="item.n" placeholder="请输入" @change="yinsuChange(item.n,index)">
                                </el-input>
                                <span class="del" @click="delRows(index)"></span>
                            </td>
                            <td>
                                <el-select  v-model="item.i"  @change="addoTotal">
                                    <el-option  label="1" value="1"></el-option>
                                    <el-option  label="2" value="2"></el-option>
                                    <el-option  label="3" value="3"></el-option>
                                    <el-option  label="4" value="4"></el-option>
                                    <el-option  label="5" value="5"></el-option>
                                </el-select>
                            </td>
                            <td v-for="(items,index) in item.l">
                                <el-select  v-model="items.v" @change="addoTotal">
                                    <el-option  label="-2" value="-2"></el-option>
                                    <el-option  label="-1" value="-1"></el-option>
                                    <el-option  label="0" value="0"></el-option>
                                    <el-option  label="1" value="1"></el-option>
                                    <el-option  label="2" value="2"></el-option>
                                </el-select>
                            </td>
                            <td>--</td>
                        </tr>
                        <tr>
                            <td colspan="2">
                                <div class="button" @click="addRows">
                                    添加
                                </div>
                            </td>
                            <td v-for="i in pinghengdan[0]&&pinghengdan[0]['l'].length+2">
                                --
                            </td>
                        </tr>
                        <tr>
                            <td colspan="2">
                                <div class="button">
                                    计分
                                </div>
                                <span class="sort" @click="sort"></span>
                            </td>
                            <td>
                                {{zhongyaoduTotal}}
                            </td>
                            <td v-for="item in pinghengdanTotal">
                                {{item}}
                            </td>
                            <td>--</td>
                        </tr>
                    </table>
                </div>
                <div class="save" @click="saveBlanece">保存</div>
                <div class="close" @click="balancetanchuang=false"></div>
            </div>
        </div>
        <div class="Cards swotChuang" v-show="swottanchuang">
            <div class="addContent">
                <p> S代表Strengthe（优势）：清晰的知道自己在这个大学方面的优势。 <br>
                    W代表Weaknesses（缺陷）：自己在从事这个大学方面的不足，更要清晰的知道。<br>
                    O代表Opportunities（机会）：从外部因素来说哪些关键点有助于从事这项大学的成功。<br>
                    T代表Threats（挑战）：从外部因素分析自己从事这项大学的挑战与威胁。
                </p>
                <div class="title">
                    <span>*</span>添加分析对象
                </div>
                <div class="swotDingwei">
                    <input type="text" v-model="swotName" id='input' placeholder="搜索大学名称" @focus="swotlistflag=true" @input="swotsearch" @compositionstart="swotstart" @compositionend="swotend" @keyup.enter="swotsearchDetail()"
                           >
                    <ul class="searchList2" v-show="swotlistflag">
                        <li v-for="item,index in swotcdata" :key="index" @click="swotsearchDetail(item.name)">{{item.name}}</li>
                    </ul>
                </div>
                <div class="fenxi">
                    <div class="top">SWOT分析法</div>
                    <table>
                        <tr>
                            <td>SWOT优势</td>
                            <td>Weaknesses缺陷</td>
                        </tr>
                        <tr>
                            <td>
                                <textarea name="" v-model="swotStrengths" placeholder="清晰的知道自己在这个方面的优势（不超过140个字" maxlength="140"></textarea>
                            </td>
                            <td>
                                <textarea name="" v-model="swotWeaknesses" placeholder="自己在从事这个方面的不足，更要清晰的知道（不超过140个字）" maxlength="140"></textarea>
                            </td>
                        </tr>
                        <tr>
                            <td >Opportunities机会</td>
                            <td>Threats挑战</td>
                        </tr>
                        <tr>
                            <td>
                                <textarea name="" v-model="swotOpportunities" placeholder="从外部因素来说哪些关键点有助于从事这个方面的成功（不超过140个字）" maxlength="140"></textarea>
                            </td>
                            <td>
                                <textarea name="" v-model="swotThreats" placeholder="从外部因素分析自己从事这个方面的挑战与威胁（不超过140个字）" maxlength="140"></textarea>
                            </td>
                        </tr>
                        <tr>
                            <td colspan="2"> 结论</td>
                        </tr>
                        <tr>
                            <td colspan="2">
                                <textarea name="" v-model="swotfinish"></textarea>
                            </td>
                        </tr>
                    </table>
                </div>
                <div class="save" @click="addSwot(swotId)">保存</div>
                <div class="close" @click="swottanchuang=false"></div>
            </div>
        </div>
        <div class="Cards duibiChuang" v-show="duibichuang">
            <div class="close" @click="duibichuang=false"></div>
            <div class="duibi">
                <table >
                    <tr>
                        <td>对象</td>
                        <td>strengths优势</td>
                        <td>weaknesses缺陷</td>
                        <td>opportunities机会</td>
                        <td>threats挑战</td>
                        <td>结论</td>
                    </tr>
                    <tr v-for="item in duibiData" >
                        <td>{{item.name}}</td>
                        <td>{{item.strengths}}</td>
                        <td>{{item.weaknesses}}</td>
                        <td>{{item.opportunities}}</td>
                        <td>{{item.threats}}</td>
                        <td>{{item.finish}}</td>
                    </tr>
                </table>
            </div>
            <div class="save" @click="duibichuang=false">关闭</div>
        </div>
        <div class="Cards zhiyedingwei" v-show="zhiyetanchuang">
            <div class="close" @click="addSaveMubiao">
            </div>
            <div class="mubiaoBox">
                <ul class="mubiaolist">
                    <li v-for="(item,index) in  mubiaoLists">
                        <div class="listDiv">
                            {{item.name}}
                        </div>
                        <img src="/imgs/careerManagement/careerAnchor/icon_quxiao.png" alt="" @click="delSaveMubiao(item.id,index)">
                    </li>
                    <li v-for="(item,index) in mubiaoAdd">
                        <div class="listDiv">
                            {{item.name}}
                        </div>
                        <img src="/imgs/careerManagement/careerAnchor/icon_quxiao.png" alt="" @click="delMubiao(item.index)">
                    </li>
                    <li>
                        <div class="listDiv">
                            <img src="/imgs/careerManagement/careerAnchor/icon_tianjia.png" alt="" @click="addMubiao">
                            <input type="text" v-model="mubiaoVlaue" id='input2' placeholder="搜索大学名称" @focus="resultlistflag=true" @input="resultsearch" @compositionstart="resultstart" @compositionend="resultend" @keyup.enter="resultsearchDetail()">
                        </div>
                        <ul class="searchList searchList3" v-show="resultlistflag">
                            <li v-for="item,index in resultcdata" :key="index" @click="resultsearchDetail(item.name)">{{item.name}}</li>
                        </ul>
                    </li>
                </ul>
            </div>
            <div class="save" @click="addSaveMubiao">
                保存
            </div>
        </div>
    </div>
</template>
<script>
    import  masks from '../../components/mask.vue'
    export default {
        name: "careerAnchor",
        data(){
            return {
                career:[],
                cardstanchuang:false,
                balancetanchuang:false,
                swottanchuang:false,
                duibichuang:false,
                zhiyetanchuang:false,
                province:[],
                shi1: [],
                qu1: [],
                city:[],
                block:[],
                pname:'',//省的名字
                cname:'',//市的名字
                bname:'' , //区的名字
                name:'',//姓名
                title:'',//头衔
                Occupation:'',//院校
                company:'',//公司
                pinghengdan:[],
                pinghengdanTotal:[],
                tongjituData:[],
                zhongyaoduTotal:0,
                balanceBranch:0,
                purposeZhiye:[],
                sortFalse:true,
                swotNumber:0,
                swotContrast:[],
                OccupationReult:[
                ],
                duibiData:[
                ],
                Cards:{
                    name:'', //姓名
                    title:'',//头衔
                    career:'',//院校
                    company:'',//公司
                    province:'',//省份
                    city:''//城市
                },//个人名片
                //swot
                swotName:'',//对象
                swotStrengths:'',//优势
                swotWeaknesses:'',//缺陷
                swotOpportunities:'',//机会
                swotThreats:'',//挑战
                swotfinish:'',//结论
                swotLists:[],//列表
                swotId:'',
                mubiaoAdd:[],
                mubiaoVlaue:'',
                mubiaoLists:[],
                yuanxiaoList:[],
                listflag:'',
                cdata:[],
                flag:true,
                pinghengdanIndex:'none',
                swotlistflag:'',
                swotcdata:[],
                swotflag:true,
                resultlistflag:'',
                resultcdata:[],
                resultflag:true,
            }
        },
        components:{masks},
        computed:{
            citys(){
                return this.$store.state.citys
            },
        },
        methods:{
            //绘制最高加权院校统计图
            draw(){
                let Data=this.tongjituData;
                let xArr=[];
                let yArr=[];
                this.tongjituData.forEach(item=>{
                    let obj={};
                    obj.value=item.batch;
                    xArr.unshift(obj);
                    let obj2={}
                    obj2.value=item.maxTargetValue;
                    obj2.name=item.maxTargetName;
                    yArr.unshift(obj2);
                })
                //院校名称
                // 基于准备好的dom，初始化echarts实例
                let myChart = this.$echarts.init(document.getElementById('myChart'))
                // 绘制图表
                myChart.setOption({
                    tooltip: {
                        trigger: 'axis',
                        axisPointer:{
                            type:'none'
                        },
                        formatter: function (params, ticket, callback) {
                            var showHtm="";
                            for(var i=0;i<params.length;i++){

                                let names=params[0].data.name.split(',');
                                let value=''
                                showHtm+=names[0]+'<br>'+params[0].value
                            }
                            return showHtm;
                        }
                    },
                    grid: {
                        top:'5%',
                        left: '30px',
                        right: '4%',
                        containLabel: true
                    },
                    xAxis: {
                        type: 'category',
                        data: xArr,
                        axisTick: {
                            show: false
                        },
                        offset:5,
                        axisLabel:{
                            fontSize:14,
                            textStyle:{
                                color:'#333'
                            },
                        },
                        axisLine:{
                            lineStyle:{
                                color:"#EAEAEA"
                            }
                        }
                    },
                    yAxis: {
                        type: 'value',
                        axisTick: {
                            show: false,
                            textStyle:{
                                color:'#333'
                            },
                        },
                        axisLabel:{
                            fontSize:13,
                            textStyle:{
                                color:'#333',
                            },
                        },
                        splitLine:{
                            lineStyle:{
                                type:'dashed',

                            }
                        },
                        axisLine:{
                            lineStyle:{
                                color:"#EAEAEA"
                            }
                        }
                    },
                    series: [
                        {
                            type:'line',
                            stack: '总量',
                            symbolSize: 12,
                            symbol:'circle',
                            lineStyle:{
                                color: '#5DA1F4',
                                width: 2
                            },
                            itemStyle: {
                                normal: {
                                    borderColor: '#3D91F4',  //拐点边框颜色
                                    borderWidth:4,
                                    color:"#8FC1FC"
                                }
                            },
                            data:yArr
                        }
                    ],
                });
            },
            //退出确认
            exitConfirm(){
                this.$confirm('退出后不会保存编辑内容，确认退出?', '提示', {
                    confirmButtonText: '确定',
                    cancelButtonText: '取消',
                    type: 'warning'
                }).then(() => {
                    this.cardstanchuang=false;
                    this.$message({
                        type: 'info',
                        message: '已退出'
                    });
                }).catch(() => {

                })
            },
            // 加载china地点数据，三级
            getCityData:function(){
                let that = this;
                that.citys.forEach(function(item,index){
                    //省级数据
                    that.province.push({ value: item.name, children: item.cityList})
                })
            },
            // 选省
            choseProvince:function(e) {
                let that = this;
                that.city = [];
                that.block = [];
                that.cname = '';
                that.bname = '';
                for (var index2 in that.province) {
                    if (e === that.province[index2].value) {
                        that.shi1 = that.province[index2].children
                        that.pname = that.province[index2].value
                        that.shi1.forEach(function(citem,cindex){
                            that.city.push({value: citem.name, children: citem.areaList})
                        })
                    }
                }
            },
            // 选市
            choseCity:function(e) {
                let that = this;
                that.block = [];
                for (var index3 in that.city) {
                    if (e === that.city[index3].value) {
                        that.qu1 = that.city[index3].children
                        that.cname = that.city[index3].value
                        that.qu1.forEach(function(bitem){
                            that.block.push({value: bitem, children: []})
                        })
                    }
                }
            },
            //改变可加入对比数量
            changeswotNumber(item){
                if($(".swotLeft input[type='checkbox']:checked").length>5){
                    item.duibi=false
                    return;
                }
                this.swotContrast=[]
                this.swotLists.forEach(item=>{
                    if(item.duibi){
                        this.swotContrast.push(item)
                    }
                })
            },
            //获取生涯测评推荐的院校、专业
            getMajors(){
                let _this=this;
                this.$ajax.post(this.G_uri+this.ports.careerManagement.getRecommendedProfessionAndMajor,{
                },{
                    headers:{
                        token: window.sessionStorage.getItem('ymtxToken')
                    }
                }).then((res)=>{
                    if(res.data.code==2000){
                        if(res.data.data.length!=0){
                            _this.career=res.data.data.career;
                        }else{
                            _this.career=false
                        }
                    }
                })
            },
            //获取个人未来名片详情
            getCardDetail(){
                let _this=this;
                this.$ajax.post(this.G_uri+this.ports.careerManagement.getCardDetail,{
                },{
                    headers:{
                        token: window.sessionStorage.getItem('ymtxToken')
                    }
                }).then((res)=>{
                    if(res.data.code==2000){
                        if(res.data.data.length!=0){
                            _this.Cards=res.data.data
                        }
                    }
                })
            },
            //保存未来名片
            saveCard(){
                let _this=this;
                this.$ajax.post(this.G_uri+this.ports.careerManagement.saveCard,{
                    name:this.Cards.name, //姓名
                    title:this.Cards.title,//头衔
                    career:this.Cards.career,//院校
                    company:this.Cards.company,//公司
                    province:this.Cards.province,//省份
                    city:this.Cards.city//城市
                },{
                    headers:{
                        token: window.sessionStorage.getItem('ymtxToken')
                    }
                }).then((res)=>{
                    if(res.data.code==2000){
                        _this.cardstanchuang=false
                    }
                })
            },
            //决策平衡单添加行
            addRows(){
                let obj=new Object();
                obj.n='';
                obj.i=1;
                obj.l=[];
                if(this.pinghengdan[0]&&this.pinghengdan[0]['l'].length>0){
                    obj.l=JSON.parse(JSON.stringify(this.pinghengdan[0]['l']))
                    obj.l.forEach(item=>{
                        item.v=0
                    })
                }
                this.$set(this.pinghengdan,this.pinghengdan.length,obj)

                this.addoTotal()
            },
            //决策平衡单添加列
            addColumns(){
                let obj=new Object();
                obj.n='';
                obj.v=0;
                let pinghengdanClone=JSON.parse(JSON.stringify(this.pinghengdan))
                pinghengdanClone.forEach(item=>{
                    item['l'][item['l'].length]=Object.assign({}, obj)
                })
                this.pinghengdan=JSON.parse(JSON.stringify(pinghengdanClone))
                this.addoTotal()
            },
            //删除行
            delRows(index){
                this.pinghengdan.splice(index,1)
                this.addoTotal()
            },
            //删除列
            delColumns(index){
                this.pinghengdan.forEach(item=>{
                    item['l'].splice(index,1)
                })
                this.addoTotal()
            },
            // 计分
            addoTotal(){
                this.pinghengdanTotal=[];
                this.zhongyaoduTotal=0;
                if(this.pinghengdan[0]&&this.pinghengdan[0]['l'].length>=0){
                    let len=this.pinghengdan[0]['l'].length;
                    for(var i=0;i<len;i++){
                        let number=0;
                        this.pinghengdan.forEach(item=>{
                            if(item['l'].length!=0){
                                number+=item['l'][i]['v']*item['i']
                            }
                        })
                        this.pinghengdanTotal[this.pinghengdanTotal.length]=number
                    }
                    this.pinghengdan.forEach(item=>{
                        this.zhongyaoduTotal=this.zhongyaoduTotal+Number(item['i'])
                    })
                }
            },
            //排序
            sort(){
                let arr=this.pinghengdanTotal,s
                if(this.sortFalse){
                    //升序
                    for (var i = 1; i < arr.length; i++) {
                        for (var j = i; j > 0; j--) {
                            if (arr[j] < arr[j - 1]) {
                                s=arr[j];
                                arr[j]=arr[j-1];
                                arr[j-1]=s;
                                this.pinghengdan.forEach(item=>{
                                    let Array=JSON.parse(JSON.stringify(item['l'][j]))
                                    item['l'][j]=JSON.parse(JSON.stringify(item['l'][j-1]))
                                    item['l'][j-1]=Array
                                })
                            }
                        }
                    }
                }else{
                    //降序
                    for(i=arr.length-1;i>=0;i--) {
                        for(j=0;j<i;j++){
                            if(arr[j+1]>arr[j]) {
                                s=arr[j+1];
                                arr[j+1]=arr[j];
                                arr[j]=s;
                                this.pinghengdan.forEach(item=>{
                                    let Array=JSON.parse(JSON.stringify(item['l'][j+1]))
                                    item['l'][j+1]=JSON.parse(JSON.stringify(item['l'][j]))
                                    item['l'][j]=Array
                                })
                            }
                        }
                    }
                }
                this.pinghengdanTotal=[...arr]
                this.sortFalse=!this.sortFalse
            },
            //保存院校决策平衡单
            saveBlanece(){
                let _this=this;
                console.log(this.pinghengdan)
                if(this.pinghengdan.length>=20){
                    this.warning('看重因素不能超过20条');
                    return false
                }
                if(this.pinghengdan[0]&&this.pinghengdan[0]['l'].length>=20){
                    this.warning('院校种类不能超过20个')
                    return false
                }
                if(this.pinghengdan){
                    let flag=true
                    this.pinghengdan.forEach(item=>{
                        if(!item.n){
                            flag=false
                            this.warning('看重因素不能为空')
                        }
                    })
                    if(!flag){
                        return false
                    }
                }
                if(this.pinghengdan[0]){
                    let flag=true
                    this.pinghengdan[0]['l'].forEach(item=>{
                        if(!item.n){
                            flag=false
                            this.warning('院校名称不能为空')
                        }
                    })
                    if(!flag){
                        return false
                    }
                }
                if(!this.pinghengdan[0]){
                    this.warning('看重因素无数据')
                    return false;
                }
                if(this.pinghengdan[0]){
                    if(this.pinghengdan[0]['l'].length==0) {
                        this.warning('院校无数据')
                        return false;
                    }
                }
                this.$ajax.post(this.G_uri+this.ports.careerManagement.yuanxiaopinghengdan.save,{
                    name:this.pinghengdan
                },{
                    headers:{
                        token: window.sessionStorage.getItem('ymtxToken')
                    }
                }).then((res)=>{
                    if(res.data.code==2000){
                        _this.balancetanchuang=false;
                        _this.getPurpose();
                        _this.getTongjitu();
                    }

                })
            },
            //获取院校决策平衡单
            getBlanece(){
                let _this=this;
                this.$ajax.post(this.G_uri+this.ports.careerManagement.yuanxiaopinghengdan.get,{

                },{
                    headers:{
                        token: window.sessionStorage.getItem('ymtxToken')
                    }
                }).then((res)=>{
                    if(res.data.code==2000){
                        _this.pinghengdan=res.data.data;
                        _this.balanceBranch=_this.pinghengdan.length*20;
                        _this.addoTotal()
                    }

                })
            },
            //获取意向院校
            getPurpose(){
                let _this=this;
                this.$ajax.post(this.G_uri+this.ports.careerManagement.yuanxiaopinghengdan.purpose,{
                },{
                    headers:{
                        token: window.sessionStorage.getItem('ymtxToken')
                    }
                }).then((res)=>{
                    if(res.data.code==2000){
                        let data =res.data.data;
                        var i=0;
                        for(let  key in data){
                            _this.$set(_this.purposeZhiye,i,JSON.parse(JSON.stringify(data[key])))
                            i++;
                        }
                    }
                })
            },
            //加权统计图
            getTongjitu(){
                let _this=this;
                this.$ajax.post(this.G_uri+this.ports.careerManagement.yuanxiaopinghengdan.tongjitu,{
                },{
                    headers:{
                        token: window.sessionStorage.getItem('ymtxToken')
                    }
                }).then((res)=>{
                    if(res.data.code==2000){
                        _this.tongjituData =res.data.data;
                    }
                })
            },
            //警告提示
            warning(text){
                this.$notify({
                    title: '提示',
                    message: text,
                    type: 'warning'
                });
            },
            //同步平衡单院校
            nameChange(value,index){
                this.pinghengdan.forEach(item=>{
                    item['l'][index]['n']=value
                })
            },
            //同步平衡单因素
            yinsuChange(value,index){
            },
            //获取swort列表
            listSwot(){
                let _this=this;
                this.$ajax.post(this.G_uri+this.ports.careerManagement.swotYuanxiao.list,{
                },{
                    headers:{
                        token: window.sessionStorage.getItem('ymtxToken')
                    }
                }).then((res)=>{
                    if(res.data.code==2000){
                        _this.swotLists=res.data.data.list;
                    }
                })
            },
            //添加&&编辑
            addSwot(id){
                let _this=this;
                if(!this.swotName){
                    this.warning('分析对象名称不能为空')
                    return
                }
                if(id){
                    this.$ajax.post(this.G_uri+this.ports.careerManagement.swotYuanxiao.edit,{
                        id:id,
                        name:this.swotName,
                        strengths:this.swotStrengths,
                        weaknesses:this.swotWeaknesses,
                        opportunities:this.swotOpportunities,
                        threats:this.swotThreats,
                        finish:this.swotfinish
                    },{
                        headers:{
                            token: window.sessionStorage.getItem('ymtxToken')
                        }
                    }).then((res)=>{
                        if(res.data.code==2000){
                            _this.swottanchuang=false;
                            _this.listSwot()
                        }
                    })
                }else{
                    this.$ajax.post(this.G_uri+this.ports.careerManagement.swotYuanxiao.add,{
                        name:this.swotName,
                        strengths:this.swotStrengths,
                        weaknesses:this.swotWeaknesses,
                        opportunities:this.swotOpportunities,
                        threats:this.swotThreats,
                        finish:this.swotfinish
                    },{
                        headers:{
                            token: window.sessionStorage.getItem('ymtxToken')
                        }
                    }).then((res)=>{
                        if(res.data.code==2000){
                            _this.swottanchuang=false;
                            _this.listSwot()
                        }
                    })
                }
            },
            //删除swot
            delSwot(id){
                let _this=this;
                this.$ajax.post(this.G_uri+this.ports.careerManagement.swotYuanxiao.del,{
                    id:id
                },{
                    headers:{
                        token: window.sessionStorage.getItem('ymtxToken')
                    }
                }).then((res)=>{
                    if(res.data.code==2000){
                        _this.listSwot()
                    }
                })
            },
            //查看swot
            showSwot(id){
                let _this=this;
                this.$ajax.post(this.G_uri+this.ports.careerManagement.swotYuanxiao.show,{
                    id:id
                },{
                    headers:{
                        token: window.sessionStorage.getItem('ymtxToken')
                    }
                }).then((res)=>{
                    if(res.data.code==2000){
                        let data=res.data.data
                        this.swotName=data.name;
                        this.swotStrengths=data.strengths;
                        this.swotWeaknesses=data.weaknesses;
                        this.swotOpportunities=data.opportunities;
                        this.swotThreats=data.threats;
                        this.swotfinish=data.finish;
                        this.swotId=data.id
                        _this.swottanchuang=true
                    }
                })
            },
            //swot对比
            contrastSwot(){
                let arr=[],
                    _this=this;

                if(this.swotContrast.length==0){
                    this.warning('请加入对比对象')
                    return;
                }
                this.swotContrast.forEach(item=>{
                    arr.push(item.id)
                })
                this.$ajax.post(this.G_uri+this.ports.careerManagement.swotYuanxiao.duibi,{
                    ids:arr
                },{
                    headers:{
                        token: window.sessionStorage.getItem('ymtxToken')
                    }
                }).then((res)=>{
                    if(res.data.code==2000){
                        _this.duibichuang=true
                        _this.duibiData=res.data.data
                    }
                })
            },
            //清楚swot参数
            clearSwot(){
                this.swotName='';
                this.swotStrengths='';
                this.swotWeaknesses='';
                this.swotOpportunities='';
                this.swotThreats='';
                this.swotfinish=''
                this.swotId=''
            },
            //添加当前目标
            addMubiao(){
                if(this.mubiaoVlaue){
                    let obj={
                        id:'',
                        name:this.mubiaoVlaue
                    }
                    this.$set(this.mubiaoAdd,this.mubiaoAdd.length,obj)
                    this.mubiaoVlaue="";
                }else{
                    this.warning('添加内容不能为空')
                }
            },
            //删除当前目标
            delMubiao(index){
                this.mubiaoAdd.splice(index,1)
            },
            //提交保存添加目标
            addSaveMubiao(){
                let _this=this
                if(this.mubiaoAdd.length==0){
                    _this.zhiyetanchuang=false;
                    _this.Mubiaolist();
                    return
                }
                this.$ajax.post(this.G_uri+this.ports.careerManagement.mubiaoDingweiYuanxiao.add,{
                    data:this.mubiaoAdd
                },{
                    headers:{
                        token: window.sessionStorage.getItem('ymtxToken')
                    }
                }).then((res)=>{
                    if(res.data.code==2000){
                        _this.mubiaoAdd=[]
                        _this.zhiyetanchuang=false;
                        _this.Mubiaolist();
                    }
                })
            },
            //删除已存目标
            delSaveMubiao(id,index){
                console.log(id)
                let _this=this
                this.$ajax.post(this.G_uri+this.ports.careerManagement.mubiaoDingweiYuanxiao.del,{
                    id:id
                },{
                    headers:{
                        token: window.sessionStorage.getItem('ymtxToken')
                    }
                }).then((res)=>{
                    if(res.data.code==2000){
                        _this.mubiaoLists.splice(index,1)
                    }
                })
            },
            //获取院校目标列表
            Mubiaolist(){
                let _this=this
                this.$ajax.post(this.G_uri+this.ports.careerManagement.mubiaoDingweiYuanxiao.list,{
                },{
                    headers:{
                        token: window.sessionStorage.getItem('ymtxToken')
                    }
                }).then((res)=>{
                    if(res.data.code==2000){
                        let data=res.data.data.list;
                        _this.OccupationReult=[]
                        for(let i=0;i<data.length;i+=3){
                            let arr=[];
                            data[i]&&arr.push(data[i])
                            data[i+1]&&arr.push(data[i+1])
                            data[i+2]&&arr.push(data[i+2])
                            _this.OccupationReult.push(arr)
                            _this.mubiaoLists=data;
                        }
                    }
                })
            },
            //获取收藏院校
            CollectionYuanxiao(){
                let _this=this
                this.$ajax.post(this.G_uri+this.ports.careerManagement.shoucang.yuanxiao,{

                },{
                    headers:{
                        token: window.sessionStorage.getItem('ymtxToken')
                    }
                }).then((res)=>{
                    if(res.data.code==2000){
                        let data=res.data.data;
                        _this.yuanxiaoList=[]
                        for(let i=0;i<data.length;i+=3){
                            let arr=[];
                            data[i]&&arr.push(data[i])
                            data[i+1]&&arr.push(data[i+1])
                            data[i+2]&&arr.push(data[i+2])
                            _this.yuanxiaoList.push(arr)
                        }
                    }
                })
            },
            //点亮星星
            lightStar(id,light){
                let _this=this
                this.$ajax.post(this.G_uri+this.ports.careerManagement.shoucang.yuanxiaoStar,{
                    collectionId:id
                },{
                    headers:{
                        token: window.sessionStorage.getItem('ymtxToken')
                    }
                }).then((res)=>{
                    if(res.data.code==2000){

                    }
                })
            },
            //搜索内容
            search(val,index){
                if(this.flag){
                    let _this=this;
                    _this.pinghengdanIndex=index
                    this.$ajax.post(this.G_uri +this.ports.careerManagement.yuanxiaopinghengdan.five, {
                        name:val
                    }, {
                        headers:{
                            token:window.sessionStorage.getItem('ymtxToken')
                        }
                    }).then(function(res) {
                        _this.cdata=res.data.data;
                    })
                        .catch(function(error) {
                            console.log(error);
                        });
                }
            },
            searchDetail(name,index) {
                this.listflag = false;
                this.pinghengdanIndex='none'
                this.nameChange(name,index)
            },
            //输入法开始
            start(){
                this.flag=false;
            },
            //输入法结束
            end(){
                this.flag=true;
            },
            blur(){
               window.onclick=()=>{
                   this.listflag = false;

               }
            },
            focus(e){
                e.stopPropagation();
                this.listflag=true;
                this.pinghengdanIndex='none'
                this.cdata=[]
            },
            //搜索内容
            swotsearch(){
                if(this.swotflag){
                    let _this=this;
                    this.$ajax.post(this.G_uri +this.ports.careerManagement.yuanxiaopinghengdan.five, {
                        name:this.swotName
                    }, {
                        headers:{
                            token:window.sessionStorage.getItem('ymtxToken')
                        }
                    }).then(function(res) {
                        _this.swotcdata=res.data.data;
                    })
                        .catch(function(error) {
                            console.log(error);
                        });
                }
            },
            swotsearchDetail(name) {
                $('#input')[0].blur();
                let _this = this;
                this.swotlistflag = false;
                if (name) {
                    this.swotName = name
                }
            },
            //输入法开始
            swotstart(){
                this.swotflag=false;
            },
            //输入法结束
            swotend(){
                this.swotflag=true;
            },

            //搜索内容
            resultsearch(){
                if(this.resultlistflag){
                    let _this=this;
                    this.$ajax.post(this.G_uri +this.ports.careerManagement.yuanxiaopinghengdan.five, {
                        name:this.mubiaoVlaue
                    }, {
                        headers:{
                            token:window.sessionStorage.getItem('ymtxToken')
                        }
                    }).then(function(res) {
                        _this.resultcdata=res.data.data;
                    })
                        .catch(function(error) {
                            console.log(error);
                        });
                }
            },
            resultsearchDetail(name) {
                $('#input2')[0].blur();
                let _this = this;
                this.resultlistflag = false;
                if (name) {
                    this.mubiaoVlaue = name
                }
            },
            //输入法开始
            resultstart(){
                this.resultflag=false;
            },
            //输入法结束
            resultend(){
                this.resultflag=true;
            },
        },
        watch:{
            citys(){
                this.getCityData();
            },
            tongjituData(){
                this.draw()
            }
        },
        mounted(){
            this.getTongjitu();
            this.draw()
            this.getCityData();
        },
        created(){
            this.getCardDetail();
            this.getMajors();
            this.getPurpose();
            this.getBlanece();
            this.listSwot();
            this.Mubiaolist();
            this.CollectionYuanxiao();
        }
    }
</script>
<style scoped lang="less">
    *{
        letter-spacing: 1.5px;
        box-sizing: border-box;
    }
    .banner {
        margin-bottom: 20px;
    }
    .noneContent{
        margin: 0 auto;
        padding: 30px 0;
        width: 126px;
        height:120px;
        background: url("/imgs/careerManagement/careerAnchor/noneContent.png") no-repeat center;
    }
    .careerAnchor{
        padding-left: 20px;
        .careerAnchorBox{
            .banner{
                display: block;
                margin-bottom: 20px;
            }
            .parts {
                background: #fff;
                padding: 0 16px;
                margin-bottom: 20px;
                .top {
                    img {
                        margin-right: 10px;
                    }
                    .title {
                        font-size: 17px;
                        color: #348DF1;
                        font-weight: bolder;
                        padding-top: 24px;
                        letter-spacing: 2px;
                    }

                    span {
                        float: right;
                        display: block;
                        width: 62px;
                        height: 26px;
                        border-radius: 3px;
                        text-align: center;
                        line-height: 26px;
                        background: #3A90F3;
                        position: relative;
                        top: -20px;
                        color: #fff;
                        cursor: pointer;
                    }
                }
                & > p {
                    padding-left: 40px;
                    line-height: 60px;
                    color: #666;
                }
                .list {
                    padding-bottom: 25px;
                    width: 100%;
                    display: flex;
                    justify-content: space-between;
                    & > li {
                        width: 298px;
                        min-height: 256px;
                        background-repeat: no-repeat;
                        background-color: #FAFBFC;
                        p {
                            line-height: 56px;
                            text-align: center;
                            font-size: 16px;
                            color: #fff;
                        }
                        .zhiye {
                            padding: 10px 25px 10px;

                            li {
                                width: 100%;
                                line-height: 20px;
                                span {
                                    display: inline-block;
                                    width: 4px;
                                    height: 4px;
                                    border-radius: 50%;
                                    background: #3B91F4;
                                    margin-right: 10px;
                                    position: relative;
                                    top: 0;
                                    color: #666666;
                                }
                            }
                        }
                    }
                    & > li:nth-of-type(1) {
                        background-image: url("/imgs/careerManagement/careerAnchor/icon_tuijian1.png");
                    }
                    & > li:nth-of-type(2) {
                        background-image: url("/imgs/careerManagement/careerAnchor/icon_tuijian2.png");
                    }
                    & > li:nth-of-type(3) {
                        background-image: url("/imgs/careerManagement/careerAnchor/icon_tuijian3.png");
                    }
                }
                .card {
                    display: flex;
                    justify-content: space-between;
                    padding: 0 0 25px 30px;

                    li {
                        width: 410px;
                        height: 247px;
                        .cardZheng {
                            width: 230px;
                            float: right;
                            padding-top: 50px;
                            p {
                                line-height: 36px;
                                color: #333333;
                            }
                        }
                        .cardFan {
                            padding-top: 140px;
                            text-align: center;
                            font-size: 16px;
                        }
                    }
                    li:nth-of-type(1) {
                        background: url("/imgs/careerManagement/careerAnchor/icon_zhengmian.png");
                    }
                    li:nth-of-type(2) {
                        background: url("/imgs/careerManagement/careerAnchor/icon_fanmian.png");
                    }
                }
                h3 {
                    font-size: 15px;
                    color: #333;
                    font-weight: bolder;
                    line-height: 36px;
                    text-indent: 25px;
                    margin-bottom: 15px;
                }
                .yixiang {
                    width: 100%;
                    padding-left: 25px;
                    max-height: 325px;
                    margin-bottom: 20px;
                    .left {
                        float: left;
                        width: 154px;
                        height: 100%;
                        border-right: 1px solid #EAEAEA;
                        li {
                            width: 100%;
                            line-height: 65px;
                            overflow: hidden;
                            height: 65px;
                            .img {
                                width: 30px;
                                height: 28px;
                                display: inline-block;
                                position: relative;
                                top:8px;
                            }
                        }
                        li:nth-of-type(1) .img{
                            background: url("/imgs/careerManagement/careerAnchor/icon_01.png");
                        }
                        li:nth-of-type(2) .img{
                            background: url("/imgs/careerManagement/careerAnchor/icon_02.png");
                        }
                        li:nth-of-type(3) .img{
                            background: url("/imgs/careerManagement/careerAnchor/icon_03.png");
                        }
                        li:nth-of-type(4) .img{
                            background: url("/imgs/careerManagement/careerAnchor/icon_04.png");
                        }
                        li:nth-of-type(5) .img{
                            background: url("/imgs/careerManagement/careerAnchor/icon_05.png");
                        }
                    }
                    .right {
                        width: 684px;
                        height: 100%;
                        float: left;
                        li {
                            width: 100%;
                            height: 65px;
                            padding-top: 20px;
                            .hui {
                                position: relative;
                                height: 30px;
                                background: #EEEEEE;
                                .lan {
                                    position: absolute;
                                    left: 0;
                                    top: 0;
                                    width: 0;
                                    height: 100%;
                                    background: #3C8DE8;
                                    transition: 1s linear;
                                }
                            }
                        }
                    }
                    .fen {
                        width: 60px;
                        height: 100%;
                        float: left;
                        li {
                            height: 20%;
                            line-height: 65px;
                            text-indent: 10px;
                        }
                    }

                }
                .add {
                    width: 62px;
                    height: 26px;
                    border-radius: 3px;
                    text-align: center;
                    line-height: 26px;
                    background: #3A90F3;
                    color: #fff;
                    cursor: pointer;
                    margin-left: 40px;
                    margin-bottom: 18px;
                }
                .swot {
                    display: flex;
                    justify-content: space-between;
                    padding-bottom: 20px;
                    .swotLeft {
                        width: 690px;
                        margin-left: 40px;
                        table {
                            border: 1px solid #eaeaea;
                            font-size: 16px;
                            text-align: center;
                            border-radius: 3px;
                            thead{
                                background: #F3F4F8;
                                td{
                                    font-weight: bolder;
                                }
                            }
                            tr {
                                td {
                                    border: 1px solid #eaeaea;
                                    line-height: 44px;
                                    color:#333;
                                    font-size: 15px;
                                    .del{
                                        display: block;
                                        float: right;
                                        width: 18px;
                                        height: 18px;
                                        margin-top: 12px;
                                        margin-right: 20px;
                                        background:url('/imgs/careerManagement/careerAnchor/icon_del.png');
                                        cursor:pointer;
                                        &:hover{
                                            background:url('/imgs/careerManagement/careerAnchor/icon_dellan.png');
                                        }
                                    }
                                    .edit{
                                        color:#3A90F3;
                                        cursor: pointer;
                                    }
                                }
                            }
                        }
                    }
                    .swotRight{
                        width: 186px;
                        border:1px solid #EAEAEA;
                        .swotList{
                            padding: 20px auto;
                            li{
                                line-height: 40px;
                                span{
                                    display: inline-block;
                                    margin-left: 20px;
                                    width: 15px;
                                    height: 15px;
                                    border-radius: 50%;
                                    background:#F2F3F7 ;
                                    text-align: center;
                                    line-height: 15px;
                                    font-size: 12px;
                                }
                            }
                        }
                    }
                }
                .shoucang{
                    td{
                        position: relative;
                        .img{
                            width: 24px;
                            height: 24px;
                            background: url("/imgs/careerManagement/careerAnchor/icon_hui.png");
                            float: right;
                            position: relative;
                            top:10px;
                            right:10px;
                            cursor: pointer;
                        }
                        #imghuang{
                            background: url("/imgs/careerManagement/careerAnchor/icon_huang.png");
                        }
                    }
                }
                .Occupation {
                    width: 100%;
                    padding-left: 36px;
                    table{
                        border: 1px solid #eaeaea;
                        font-size: 16px;
                        border-radius: 3px;
                        border-collapse:collapse;
                        tr {
                            td {
                                border: 1px solid #eaeaea;
                                line-height: 44px;
                                color:#333;
                                text-indent: 10px;
                                font-size: 13px;
                                span{
                                    float: right;
                                    color:#CACACA;
                                    margin-right: 10px;
                                }
                            }
                        }
                    }
                    padding-bottom: 30px;
                }
            }
        }
        .Cards {
            width: 652px;
            height: 622px;
            position: fixed;
            left: 50%;
            top:50%;
            z-index: 20;
            margin-left: -326px;
            margin-top: -340px;
            background: url('/imgs/careerManagement/careerAnchor/bg_bianjimingpian.png');
            .addContent{
                padding: 80px 50px 20px;
                p{
                    line-height: 40px;
                    color:#333333;
                    font-size: 15px;
                    font-weight: bolder;
                    position: relative;
                    margin-top: 10px;
                    span{
                        font-size: 12px;
                        color:#666;
                        font-weight: normal;
                    }
                    i{
                        display: block;
                        position: absolute;
                        left: -12px;
                        top: 3px;
                        color:#F40000;
                    }
                }
                input{
                    width: 100%;
                    height: 38px;
                    border:1px solid #DEDEDE;
                    border-radius: 3px;
                    text-indent: 10px;
                }
                textarea{
                    width: 100%;
                    padding:10px;
                    height: 112px;
                }
            }
            .close{
                width: 17px;
                height: 17px;
                position: absolute;
                top:21px;
                right: 22px;
                cursor: pointer;
            }
        }
        .save{
            width: 110px;
            height: 42px;
            text-align: center;
            line-height: 42px;
            border-radius: 5px;
            font-size: 17px;
            color:#fff;
            margin: 24px auto 0;
            background: #3B91F4;
            cursor: pointer;
        }
        .balance{
            width: 836px;
            height: 680px;
            margin-left: -418px;
            margin-top: -340px;
            background:url('/imgs/careerManagement/careerAnchor/bg_juecepinghengdan.png');
            .addTitle{
                text-align: center;
                height: 60px;
                line-height: 60px;
                color:#fff;
                font-size:18px;
                letter-spacing: 3px;
            }
            .addContent{
                padding: 20px 38px 0;
                p{
                    line-height: 20px;
                    color:#666666;
                    font-size: 12px;
                }
                .juece{
                    margin-top: 20px;
                    height: 360px;
                    overflow: auto;
                    position: relative;
                    table{
                        display: inline-block;
                        tr:first-child{
                            td:nth-of-type(1), td:nth-of-type(2){
                                background: #F3F4F8;
                            }
                        }
                        td{
                            border:1px solid #DDDFDE;
                            text-align: center;
                            line-height:28px;
                            color: #333;
                            padding:10px;
                            position: relative;
                            .button{
                                width: 56px;
                                height: 24px;
                                border-radius: 5px;
                                background: #3B92F3;
                                text-align: center;
                                color: white;
                                margin: 5px auto;
                                line-height: 24px;
                                cursor: pointer;
                            }
                            .del{
                                position: absolute;
                                right: 5px;
                                top: 50%;
                                margin-top: -9px;
                                width: 18px;
                                height: 18px;
                                cursor: pointer;
                                background:url('/imgs/careerManagement/careerAnchor/icon_delhui.png');
                                &:hover{
                                    background:url('/imgs/careerManagement/careerAnchor/icon_dellan.png');
                                }
                            }
                            .sort{
                                position: absolute;
                                right: 20px;
                                top: 16px;
                                cursor: pointer;
                                width: 20px;
                                height: 20px;
                                background:url('/imgs/careerManagement/careerAnchor/sort.png') ;
                            }
                        }
                    }
                }
            }
        }
        .swotChuang{
            width: 652px;
            height: 688px;
            margin-left: -326px;
            margin-top: -349px;
            background:url('/imgs/careerManagement/careerAnchor/bg_chakanbianjiSWOT.png');
            .addContent{
                padding: 60px 38px 0;
                p{
                    line-height: 20px;
                    color:#666666;
                    font-size: 12px;
                }
                .title{
                    font-size: 15px;
                    line-height: 36px;
                    font-weight: bolder;
                    span{
                        color:#F72224;
                        position: relative;
                        top:2px;
                        margin: 5px;
                    }
                }
                input{
                    width: 100%;
                    line-height: 38px;
                    border:1px solid #DEDEDE;
                    border-radius: 5px;
                    text-indent: 20px;
                }
                .fenxi{
                    padding-top: 20px;
                    .top{
                        line-height:36px;
                        text-align: center;
                        height: 36px;
                        background: #3D91F4;
                        color: white;
                    }
                    table{
                        border: 1px solid #eaeaea;
                        font-size: 16px;
                        border-collapse:collapse;
                        tr {
                            &:nth-child(odd){
                                background: #F2F2F2;
                            }
                            td {
                                text-align: center;
                                border: 1px solid #CECECE;
                                line-height: 38px;
                                color:#333;
                                font-size: 13px;
                                width: 50%;
                                span{
                                    float: right;
                                    color:#CACACA;
                                    margin-right: 10px;
                                }
                                textarea{
                                    border:none;
                                    width: 100%;
                                    padding:10px;
                                    height: 60px;
                                }
                            }
                        }
                    }
                }
            }
            .save{
                margin-top: 16px;
            }
        }
        .duibiChuang{
            width: 652px;
            height: 668px;
            margin-left: -326px;
            margin-top: -334px;
            background:url('/imgs/careerManagement/careerAnchor/bg_gemubiaoduibi.png');
            .duibi{
                margin-top: 100px;
                padding: 0 20px;
                height: 450px;
                overflow:auto;
            }
            table{
                border: 1px solid #eaeaea;
                font-size: 16px;
                border-collapse:collapse;
                padding: 0 20px;
                tr {
                    &:nth-child(1){
                        background: #F2F2F2;
                    }
                    td {
                        &:nth-child(1){
                            background: #F2F2F2;
                        }
                        text-align: center;
                        border: 1px solid #CECECE;
                        padding: 10px;
                        color:#333;
                        font-size: 13px;
                        span{
                            float: right;
                            color:#CACACA;
                            margin-right: 10px;
                        }
                        textarea{
                            border:none;
                            width: 100%;
                            padding:10px;
                            height: 60px;
                        }
                    }
                }
            }
        }
        .zhiyedingwei{
            width: 652px;
            height: 460px;
            margin-left: -326px;
            margin-top: -230px;
            background:url('/imgs/careerManagement/careerAnchor/bg_yuanxiaodingwei.png');
            padding: 95px 45px 0;
            .mubiaoBox{
                height: 260px;
                overflow: auto;
                .mubiaolist{
                    /*overflow: hidden;*/
                    li{
                        width: 50%;
                        position: relative;
                        margin-bottom: 20px;
                        float: left;
                        .listDiv{
                            width: 250px;
                            height: 38px;
                            line-height: 38px;
                            text-indent: 10px;
                            border:1px solid #DEDEDE;
                            border-radius: 5px;
                            position: relative;
                            padding-right: 40px;
                            overflow: hidden;
                            white-space: nowrap;
                            text-overflow: ellipsis;
                            input{
                                position: absolute;
                                top: 0;
                                left: 0;
                                width: 100%;
                                height: 100%;
                                text-indent: 40px;
                                background: none;
                                padding-right: 40px;
                                overflow: hidden;
                                text-overflow: ellipsis;
                            }
                            img{
                                position: relative;
                                cursor: pointer;
                                z-index: 5;
                                top:-2px;
                            }
                        }
                        &>img{
                            position: absolute;
                            right: 40px;
                            top: 10px;
                            cursor: pointer;
                        }
                    }
                }
            }
        }
    }
    .electiveBox{
        background: #fff;
        padding-top: 20px;
        height: 150px;
        border-radius: 5px;
        display: flex;
        li{
            position: relative;
            width: 455px;
            height: 106px;
            border-radius: 5px;
            border:1px solid #EBEBEB;
            &:nth-of-type(3){
                height: 198px;
            }
            .left{
                width: 120px;
                float: left;
                img{
                    position: relative;
                    left:30px;
                    top:16px;
                }
            }
            .right{
                width: 330px;
                float: right;
                padding-right: 25px;
                .title{
                    line-height: 56px;
                    font-weight: bolder;
                    font-size: 18px;
                    color:#333333;
                }
                p{
                    line-height: 20px;
                    color:#AFAFAF;
                    font-size: 12px;
                }
                .button{
                    background: #3D90F6;
                    border-radius: 5px;
                    text-align: center;
                    letter-spacing: 3px;
                    line-height: 30px;
                    color:#fff;
                    font-size: 14px;
                    width: 76px;
                    position: absolute;
                    right: 28px;
                    bottom: 20px;
                    cursor: pointer;
                    a{
                        &:hover{
                            color:#fff;
                        }
                    }
                }
            }
        }
    }
    .phd{
        position: relative;
    }
    .searchList{
        position: absolute;
        left: 0px;
        top:42px;
        width: 160px;
        max-height: 230px;
        overflow-y: auto;
        z-index: 9999;
    }
    .searchList>li{
        line-height: 40px;
        height: 40px;
        padding: 0 10px;
        overflow: hidden;
        text-overflow: ellipsis;      //超出部分以省略号显示
        white-space: nowrap;;
        background: #F5F7F6;
        text-align: left;
        color:#333333;
        &:hover{
            background:#E1ECF7;
        }
        font-size:12px;
        cursor: pointer;
    }
    .tdInput{
        position: relative;
    }
    .inputGuding{
        width: 120px !important;
        height: 30px !important;
        position: relative;
        left:-10px;
    }
    .swotdingwei{
        position: relative;
    }
    .searchList2{
        position: absolute;
        left: 0px;
        top:38px;
        width: 576px;
        max-height: 230px;
        overflow-y: auto;
        z-index: 9999;
        box-shadow:0px 2px 10px #999;
    }
    .searchList2>li {
        line-height: 40px;
        height: 40px;
        padding: 0 10px;
        overflow: hidden;
        text-overflow: ellipsis; //超出部分以省略号显示
        white-space: nowrap;;
        background: #F5F7F6;
        text-align: left;
        color: #333333;

        &:hover {
            background: #E1ECF7;
        }
        font-size: 12px;
        cursor: pointer;
    }
    .swotDingwei{
        position: relative;
    }
    .searchList3{
        width: 248px;
        top:38px;
    }
    .searchList3>li{
        width: 100% !important;
        margin-bottom: 0 !important;
    }
</style>
<style>
    .Cards .el-input__inner{
        height: 38px;
        border:1px solid #DEDEDE;
    }
    .Cards .el-select{
        margin-right: 20px;
    }
    .el-input{
        display: inline-block;
    }
    .balance .el-input__inner{
        width: 120px;
        height: 30px;
    }
    .balance .el-icon-arrow-up{
        line-height: 30px !important;
    }
</style>
