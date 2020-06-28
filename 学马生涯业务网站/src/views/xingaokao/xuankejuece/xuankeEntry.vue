<template>
    <div class="xuankeEntry">
        <div class="banner">
        </div>
		<div class="solve_problem">
			<div class="go_peigeng">
                <a class="btn"  target="_blank" href="/career/#/elective/main">进入360°选科</a>
                <a class="btn"  target="_blank" href="/career/#/elective/main">进入根据专业选科目</a>
            </div>
			<div class="inner">
                <div class="title">解决问题</div>
                <div class="title_box">
                    <p class="school">学校</p>
                    <p class="student">学生</p>
                </div>
                <ul class="main_box">
                    <li v-for="(item, index) in solve_problem" :key="index">
                        <img :src="item.imgUrl" alt="">
                        <p>{{item.detail}}</p>
                    </li>
                </ul>
			</div>
		</div>
        <div class="kexuexuanke">
            <div class="title">如何科学的做好选科</div>
            <div class="inner">
                <ul class="main_box">
                    <li v-for="(item, index) in features" :key="index" :style="item.imgUrl">
                        <div class="num">
                            <img :src="item.numUrl" alt="">
                        </div>
                        <p class="main_title">{{item.title}}</p>
                        <p class="main_detail">{{item.detail}}</p>
                    </li>
                </ul>
            </div>
        </div>
        <div class="our_advantage">
            <div class="title">我们的优势</div>
            <div class="content">
                <div class="inner">
                    <ul>
                        <li v-for="(item, index) in ourAdvantage" :key="index" @mouseenter="activeClass = index" @mouseleave="activeClass='6'" :class="activeClass==index ? 'active' : ''">
                            <img :src="activeClass == index ? item.imgUrl2: item.imgUrl" alt="">
                            <p class="small_title">{{item.title}}</p>
                            <div class="line"></div>
                            <p class="small_detail" v-html="item.detail"></p>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        <div class="gongnengjieshao">
            <div class="title">功能介绍</div>
            <div class="inner">
                <div class="left main_box">
                    <div class="title_box">
                        360°选科
                    </div>
                    <ul>
                        <li>
                            <img src="/imgs/xingaokao/xuankejuece/xuankeEntry/icon_quanfangweiceping.png" alt="">
                            <p>经过全方位的测评和多维考量，提供科学选科方案</p>
                        </li>
                        <li>
                            <img src="/imgs/xingaokao/xuankejuece/xuankeEntry/icon_360xuanke02.png" alt="">
                            <p>包含生涯测评、目标专业选科要求查询、决策平衡单、生成选科结果功能</p>
                        </li>
                    </ul>

                    <div class="title_box">
                        专业科目要求查询
                    </div>
                    <ul>
                        <li>
                            <img src="/imgs/xingaokao/xuankejuece/xuankeEntry/icon_zhuanyekemuyaoqiuchaxun.png" alt="">
                            <p>根据自己的所选专业，快速查询院校专业的选科要求。</p>
                        </li>
                    </ul>
                </div>
                <div class="middle">
                    <img src="/imgs/xingaokao/xuankejuece/xuankeEntry/jieshao.png" alt="">
                </div>
                <div class="right main_box">
                    <div class="title_box">
                        根据专业选科目
                    </div>
                    <ul>
                        <li>
                            <img src="/imgs/xingaokao/xuankejuece/xuankeEntry/icon_genjuzhuanyexuankemu01.png" alt="">
                            <p>针对已测评学生，提供科学选科方案</p>
                        </li>
                        <li>
                            <img src="/imgs/xingaokao/xuankejuece/xuankeEntry/icon_genjuzhuanyexuankemu02.png" alt="">
                            <p>包含目标专业选科要求查询、决策平衡单、生成选科结果功能</p>
                        </li>
                    </ul>
                    <div class="title_box">
                        科目可报专业查询
                    </div>
                    <ul>
                        <li>
                            <img src="/imgs/xingaokao/xuankejuece/xuankeEntry/icon_kemukebaozhuanyechaxun.png" alt="">
                            <p>根据选考科目，学生可查询符合选科的高校和专业情况，以供学生在选科时做参考。</p>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        <div class="jiehe">
            <div class="title">实现学生端和管理端有效结合</div>
            <div class="content">
                <div class="inner">
                    <div class="inner_left main_box">
                        <div class="title_box">
                            <span>学生端</span>
                        </div>
                        <ul>
                            <li v-for="(item, index) in student">
                                <img :src="item.imgUrl" alt="">
                                <p>{{item.title}}</p>
                            </li>
                        </ul>
                    </div>
                    <div class="middle">
                        <img src="/imgs/xingaokao/xuankejuece/xuankeEntry/icon_zueshengduan.png" alt="">
                    </div>
                    <div class="inner_right main_box">
                        <div class="title_box">
                            <span>管理端</span>
                        </div>
                        <ul>
                            <li v-for="(item, index) in teacher">
                                <img :src="item.imgUrl" alt="">
                                <p>{{item.title}}</p>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        <div class="fuwuliucheng">
            <div class="title">解决问题</div>
            <div class="inner">
                <ul class="main_box">
                    <li v-for="(item, index) in fuwuliucheng">
                        <p class="main_title">{{item.title}}</p>
                        <p class="mian_detail">{{item.detail}}</p>
                    </li>
                </ul>
            </div>
        </div> 
	    <Jihuoxuankeka v-on:go-back="isShowjihuoxuankeka = false" v-show="isShowjihuoxuankeka" :src="src" :serial_no="serial_no"></Jihuoxuankeka>
        <JihuoMajor v-on:go-back="isShowJihuoMajor = false" v-show="isShowJihuoMajor" :src="src"></JihuoMajor>
    </div>
</template>
<script>
// 引入激活生涯卡组件
import Jihuoxuankeka from './jihuoxuankeka.vue';
import JihuoMajor from './jihuomajor.vue';
export default {
    components: { Jihuoxuankeka, JihuoMajor },
    props: [ 'message' ],
    data() {
        return {
          isShowjihuoxuankeka: false,
          isShowJihuoMajor: false,
          // 激活选科卡成功后跳转路由
          src: '/zhinengxuanke/xuankeceping',
          serial_no:"",
          solve_problem: [
            { imgUrl: '/imgs/xingaokao/xuankejuece/xuankeEntry/icon_xuanke.png', detail: '众多选科组合，如何找到最适合的。' },
            { imgUrl: '/imgs/xingaokao/xuankejuece/xuankeEntry/icon_zhiye.png', detail: '怎样了解职业专业及院校的选科要求。' },
            { imgUrl: '/imgs/xingaokao/xuankejuece/xuankeEntry/icon_renshiziwo.png', detail: '如何全面的了解自己。' },
            { imgUrl: '/imgs/xingaokao/xuankejuece/xuankeEntry/icon_paike.png', detail: '解决学生选科问题，为走排班提供参考依据。' }
          ],
          activeClass: '6',
          features: [
            { title: '准确的数据内容', detail: '大学专业选科要求查询，科目可报专业查询，专业库、院校库、职业库',imgUrl: 'background: url(/imgs/xingaokao/xuankejuece/xuankeEntry/icon_shuju.png) no-repeat',numUrl: '/imgs/xingaokao/xuankejuece/xuankeEntry/icon_01.png' },
            { title: '专业的自我评估', detail: '科学的测量方法，常模样本大数据采集，兴趣倾向与职业类型模型，自主知识产权',imgUrl: 'background: url(/imgs/xingaokao/xuankejuece/xuankeEntry/icon_ziwopinggu.png) no-repeat',numUrl: '/imgs/xingaokao/xuankejuece/xuankeEntry/icon_02.png' },
            { title: '科学的决策方法', detail: '6选3、7选3、3+2+1等，多种选科方式，学生个性化选科',imgUrl: 'background: url(/imgs/xingaokao/xuankejuece/xuankeEntry/icon_kexuedejuecefangfa.png) no-repeat',numUrl: '/imgs/xingaokao/xuankejuece/xuankeEntry/icon_03.png' }
          ],
            ourAdvantage: [
                { title: '专业的选科流程',detail: '基于生涯规划理论<br/>测评推荐职业<br />职业匹配专业<br />专业指导选科。',imgUrl: '/imgs/xmsy_huhangjihua/icon_xianshang.png', imgUrl2: '/imgs/xmsy_huhangjihua/icon_xianshanglan.png' },
                { title: '完备的数据支撑',detail: '专业院校职业库<br/>支持专业选科双向查询',imgUrl: '/imgs/xmsy_huhangjihua/icon_jiejuefangan.png', imgUrl2: '/imgs/xmsy_huhangjihua/icon_jiejuefanganlan.png' },
                { title: '全面的选科方式',detail: '6选3、7选3、3+2+1等<br />多种选科方式<br />学生个性化选科',imgUrl: '/imgs/xmsy_huhangjihua/icon_shizi.png', imgUrl2: '/imgs/xmsy_huhangjihua/icon_shizilan.png' },
                { title: '可靠的选科结果',detail: '系统综合多种因素<br />决策加权、专业覆盖率等<br/>提供最优选科建议',imgUrl: '/imgs/xmsy_huhangjihua/icon_genzong.png', imgUrl2: '/imgs/xmsy_huhangjihua/icon_genzonglan.png' }
            ],
          student: [
            { imgUrl: '/imgs/xingaokao/xuankejuece/xuankeEntry/icon_cepingdenglu.png', title: '测评登录便捷' },
            { imgUrl: '/imgs/xingaokao/xuankejuece/xuankeEntry/icon_caozuoliucheng.png', title: '操作流程规范' },
            { imgUrl: '/imgs/xingaokao/xuankejuece/xuankeEntry/icon_zhuanyerenyuan.png', title: '专业人员指导' },
            { imgUrl: '/imgs/xingaokao/xuankejuece/xuankeEntry/icon_yijianchakan.png', title: '一键查看报告' }
          ],         
          teacher: [
            { imgUrl: '/imgs/xingaokao/xuankejuece/xuankeEntry/icon_mingxixuanke.png', title: '明晰选科结果' },
            { imgUrl: '/imgs/xingaokao/xuankejuece/xuankeEntry/icon_xuanketongji.png', title: '选科统计分析' },
            { imgUrl: '/imgs/xingaokao/xuankejuece/xuankeEntry/icon_jiankongceping.png', title: '监控测评进度' },
            { imgUrl: '/imgs/xingaokao/xuankejuece/xuankeEntry/icon_guanlixuesheng.png', title: '有效管理学生' }
          ],
          fuwuliucheng: [
            { title: '专业与职业定位', detail: '结合测评结果和考生实际情况，定位学生的专业和职业范围' },
            { title: '外部探索', detail: '根据学生的专业和职业范围，对标高校的选科要求' },
            { title: '决策平衡', detail: '指导学生使用决策平衡单，辅助进行选科方案的定量决策' },
            { title: '选科决策', detail: '指导学生在多种选科组合中，结合中学的选科资源，筛选出自己的选科组合' }
          ]
        }
    },
    methods: {
        goXuanke() {
          // 是否激活选科卡
                this.isShowjihuoxuankeka = true;
                this.$router.push('/zhinengxuanke');
        },
        goZhinengXuanke() {// 360选科测评
            window.sessionStorage.setItem('testType', 'type1');
            window.sessionStorage.setItem('testType360', '2');
            var token = window.sessionStorage.getItem('ymtxToken');
            window.sessionStorage.setItem('token',token);
            var _this = this;
            this.$ajax.post(this.G_uri + '/chooseSubject/intelligentSelectSubject',{
                testType: 2,
            },{
                headers:{token: token}
            }).then(function(res) {
                // console.log(res)
                if(res.data.code == 2000) {
                    // code: 1.第一次测试2.继续测试3.测试完成4.绑卡5.报告页,
                    // 6直接选三科不做平衡单 7报告页跟后台一样
                    console.log(res.data.data.code)
                    if(res.data.data.code == 7) {
                        // _this.$router.push('/zhinengxuanke/mubiaozhuanye');
                        let {href}=_this.$router.resolve({
                            path: '/zhinengxuanke/mubiaozhuanye'
                        })
                        window.open(href, '_blank');
                        return;
                    }
                    if(res.data.data.code == 6) {
                        _this.$router.push('/zhinengxuanke/mubiaozhuanye');
                        return;
                    }
                    if(res.data.data.code == 5) {
                        _this.zhuangtai = 5;
                        _this.$router.push('/zhinengxuanke/xuankezhiyuan');
                        return;
                    }
                    if(res.data.data.code == 4) {
                        _this.zhuangtai = 4;
                        //_this.isShowjihuoka = true;
                        _this.isShowjihuoxuankeka = true;
                        return;
                    }
                    if(res.data.data.code == 3) {
                        _this.zhuangtai = 3;
                        // _this.$router.push('/zhinengxuanke/mubiaozhuanye');
                        let {href}=_this.$router.resolve({
                            path: '/zhinengxuanke/mubiaozhuanye',
                            name: 'mubiaozhuanye',
                        })
                        window.open(href, '_blank');
                        return;
                    }
                    if(res.data.data.code == 2) {//2.继续测试
                        _this.zhuangtai = 2;
                        _this.serial_no = res.data.data.testId;
                        _this.goOnTest();
                        return;
                    }
                    if(res.data.data.code == 1) {//1.第一次测试
                        console.log(158)
                        _this.zhuangtai = 1;
                        _this.serial_no = res.data.data.testId;
                        _this.goCreate();
                    }

                }else if(res.data.code == 1016) {
                    _this.$router.push('/login');
                }else if(res.data.code == 2026) {
                    _this.$router.push('/perfectInformation');
                }
            })
        },
        //创建测试
        goCreate() {
            var _this = this;
            var serial_no = this.serial_no;
            console.log(serial_no);
            var token = window.sessionStorage.getItem('ymtxToken');
            window.sessionStorage.setItem('token',token);
            this.$ajax.post(this.G_uris + '/test/create',{
                type: 1,
                serial_no: serial_no,
                cognition_order:"[1,2,3,4,5,6,7,8,9,10,11,12,13]"
            },{
                headers:{
                    token: token
                }
            })
                .then(function(res) {
                    if(res.data.code == 0) {
                        //_this.src = '/evlua/classify';
                        // console.log(100)
                        _this.$router.push('/shengyaceping')
                    }else if(res.data.code == 1016) {
                        _this.$router.push('/login');
                    }
                })
                .catch(function(error) {
                    console.log(error)

                })
        },
        // 跳页
        goOnTest() {
            var _this = this;
            var serial_no = this.serial_no;
            var token = window.sessionStorage.getItem('ymtxToken');
            window.sessionStorage.setItem('token',token);
            this.$ajax.post(this.G_uris + '/usercenter/test/goon',{
                test_id: serial_no
            },{
                headers:{
                    token: token
                }
            })
                .then(function(res) {
                    var data = res.data;
                    if (data.code == 0) {
                        // 序列号类型1
                        if (data.result.serial_type == 1) {
                            if (data.result.module == 0) {
                                // this.$router.push('/shengyaceping')
                                let {href}=_this.$router.resolve({
                                    path: '/shengyaceping'
                                })
                                window.open(href, '_blank');
                            } else if (data.result.module == 1) {
                                // this.$router.push('/shengyaceping/xgtx/guide/' + data.result.node);
                                let {href}=_this.$router.resolve({
                                    path: '/shengyaceping/xgtx/guide/' + data.result.node
                                })
                                window.open(href, '_blank');
                            } else if (data.result.module == 2) {
                                if (data.result.node == 1) {
                                    // this.$router.push('/shengyaceping/evlua/classify/13');
                                    let {href}=_this.$router.resolve({
                                        path: '/shengyaceping/evlua/classify/13'
                                    })
                                    window.open(href, '_blank');
                                } else {
                                    // this.$router.push('/shengyaceping/rzqn/guide/' + data.result.node);
                                    let {href}=_this.$router.resolve({
                                        path: '/shengyaceping/rzqn/guide/' + data.result.node
                                    })
                                    window.open(href, '_blank');
                                }
                            } else if (data.result.module == 3) {
                                if (data.result.node == 1) {
                                    // this.$router.push('/shengyaceping/evlua/classify/13');
                                    let {href}=_this.$router.resolve({
                                        path: '/shengyaceping/evlua/classify/13'
                                    })
                                    window.open(href, '_blank');
                                } else {
                                    // this.$router.push('/shengyaceping/xqqx/guide/' + data.result.node);
                                    let {href}=_this.$router.resolve({
                                        path: '/shengyaceping/xqqx/guide/' + data.result.node
                                    })
                                    window.open(href, '_blank');
                                }
                            } else if (data.result.module == 4) {
                                // this.$router.push('/shengyaceping/evlua/classify/14');
                                let {href}=_this.$router.resolve({
                                    path: '/shengyaceping/evlua/classify/14'
                                })
                                window.open(href, '_blank');
                            }
                        }
                    }
                }.bind(this))
                .catch(function(error) {
                    console.log(error)
                })
        },
        // 根据专业选科目进度
        goMajorSelectSubject() {
            var token = window.sessionStorage.getItem('ymtxToken');
            window.sessionStorage.setItem('token',token);
            var _this = this;
            this.$ajax.post(this.G_uri + '/chooseSubject/balanceSelectSubject',{
                testType: 2,
            },{
                headers:{token: token}
            })
            .then(function(res) {
                if(res.data.code == 2000) {
                    // 1未绑卡 2已绑卡未测试 3报告页 4目标页
                    let code = res.data.data.code;
                    if(code == 1) {
                        _this.isShowJihuoMajor = true;
                    } else if(code == 3) {
                        _this.$router.push('/majorSelectedSubjects/xuankezhiyuan');
                    } else {
                        // _this.$router.push('/majorSelectedSubjects/mubiaozhuanye');
                        let {href} = _this.$router.resolve({
                            path: '/majorSelectedSubjects/mubiaozhuanye'
                        })
                        window.open(href, '_blank');
                    }

                }else if(res.data.code == 1016) {
                    _this.$router.push('/login');
                }else if(res.data.code == 2026) {
                    _this.$router.push('/perfectInformation');
                }
            })
        },

        // 根据屏幕高度设置页面高度为一屏高
        resetScreen() {
            let screenH = document.documentElement.clientHeight;
            let topNavH = $('.topNav').outerHeight();
            let footerH = $('.footer').outerHeight();
            let height = screenH - topNavH - footerH;
            if(height > 562) {
                $('.xuankejuece').height(height + 'px');
            }else {
                $('.xuankejuece').height('562px');
            }
        }
    },
    created() {
        if(this.$route.query.source == 5) {
            this.goMajorSelectSubject();
        }
        if(/zhuanye/.test(window.location.hash)){
            this.goMajorSelectSubject();
        }
        if(/360/.test(window.location.hash)){
            this.goZhinengXuanke();
        }
    },
    mounted() {
        this.resetScreen();
    }
}
</script>

<style type="text/css" lang='less' scoped>
	.xuankeEntry {
		.inner {
			width: 1200px;
			margin: 0 auto;
			// overflow: hidden;
		}
		.title {
			height: 130px;
			line-height: 130px;
			font-size: 32px;
			font-weight: bold;
			color: #333;
			text-align: center;
		}
		.banner {
			height: 480px;
		    background: url(/imgs/xingaokao/xuankejuece/xuankeEntry/banner.png) no-repeat center center;
		}
		.solve_problem {
            background-color: #FFFFFF;
            padding-bottom: 40px;
            position: relative;
            padding-top: 80px;
            color: #333;
            .nav_box {
                width: 1200px;
                height: 140px;
                background-color: #fff;
                border-radius: 5px;
                box-sizing: border-box;
                box-shadow: 0px 0px 10px #dedede;
                display: flex;
                align-items: center;
                justify-content: center;
                color: #fff;
                position: absolute;
                left: 50%;
                top: -60px;
                margin-left: -600px;
                padding: 0 60px;
            }
            .go_peigeng {
                width: 1200px;
                height: 130px;
                box-sizing: border-box;
                padding: 0 100px;
                background-color: #fff;
                border-radius: 5px;
                box-shadow: 0px 0px 10px #dedede;
                display: flex;
                align-items: center;
                justify-content: space-around;
                color: #fff;
                position: absolute;
                left: 50%;
                top: -60px;
                margin-left: -600px;
                .btn {
                    width: 300px;
                    height: 54px;
                    border-radius: 27px;
                    background-color: #377CEE;
                    text-align: center;
                    line-height: 54px;
                    cursor: pointer;
                    font-size: 18px;
                    box-shadow: 0px 5px 5px #0F4FB5;
                    &:hover {
                        color: #fff;
                    }
                    &:active {
                        box-shadow: none;
                    }
                }
            }
            .title_box {
                display: flex;
                justify-content: space-between;
                margin-bottom: 20px;
                text-align: center;
                color: #fff;
                line-height: 54px;
                .school {
                    width: 278px;
                    height: 66px;
                    background: url(/imgs/xingaokao/xuankejuece/xuankeEntry/bg_xuexiao.png);
                }
                .student {
                    width: 892px;
                    height: 66px;
                    background: url(/imgs/xingaokao/xuankejuece/xuankeEntry/bg_student.png);
                }
            }
            .main_box {
                display: flex;
                justify-content: space-between;
                padding-bottom: 5px;
                li {
                    padding: 20px 15px;
                    display: flex;
                    background-color: #fff;
                    font-size: 14px;
                    border-radius: 2px;
                    width: 276px;
                    box-sizing: border-box;
                    align-items: center;
                    box-shadow: 0px 0px 20px rgba(222,222,222,.5);
                    img {
                        margin-right: 15px;
                    }
                }
            }
        }
        .kexuexuanke {
            background-color: #F4F6F9;
            padding-bottom: 50px;
            .main_box {
                display: flex;
                justify-content: space-between;
                color: #333;
                li {
                    position: relative;
                    width: 366px;
                    height: 490px;
                    box-sizing: border-box;
                    padding-top: 300px;

                    .num {
                        text-align: center;
                        height: 65px;
                        overflow: hidden;
                    }
                    .main_title {
                        text-align: center;
                        font-size: 20px;
                        font-weight: 600;
                        color: #333;
                        line-height: 50px;
                    }
                    .main_detail {
                        padding: 0 60px;
                        font-size: 14px;
                        text-align: center;
                        color: #333;
                        line-height: 20px;
                    }
                }
            }
        }
        .our_advantage {
            padding-bottom: 30px;
            .content {
                background: url(/imgs/xmsy_huhangjihua/bg_youshi.png) no-repeat center center;
                height: 366px;
                ul {
                    display: flex;
                    justify-content: space-between;
                    height: 366px;
                    position: relative;
                    top: 0px;
                    z-index: 10;
                    li {
                        box-sizing: border-box;
                        width: 240px;
                        height: 366px;
                        padding-top: 70px;
                        color: #fff;
                        text-align: center;
                        .small_title {
                            line-height: 60px;
                            text-align: center;
                            font-size: 20px;
                        }
                        .line {
                            width: 95px;
                            border: 1px solid #fff;
                            margin: 0 auto;
                        }
                        .small_detail {
                            padding: 0 40px;
                            padding-top: 25px;
                            font-size: 14px;
                            text-align: left;
                            text-align: center;
                        }
                    }
                    .active {
                        position: relative;
                        z-index: 2;
                        box-shadow: 0px 0px 35px rgba(167,169,180,.2);
                        background-color: #fff;
                        color: #333;
                        .small_title {
                            color: #333;
                        }
                        .line {
                            border: 1px solid #377BED;
                        }
                        .small_detail {
                             color: #333;
                        }
                    }

                }
            }
        }
        .gongnengjieshao {
            .inner {
                display: flex;
            }
            .middle {
                flex: 1;
                display: flex;
                justify-content: center;
            }
            .main_box {
                padding-top: 60px;
                .title_box {
                    width: 186px;
                    height: 42px;
                    line-height: 42px;
                    background-color: #3492f9;
                    color: #fff;
                    text-align: center;
                    border-radius: 21px;
                    margin-bottom: 25px;
                }
                ul {
                    li {
                        display: flex;
                        width: 236px;
                        margin-bottom: 20px;
                        img {
                            margin-right: 15px;
                            display: block;
                            width: 38px;
                            height: 38px;
                        }
                        p {
                            line-height: 1.5em;
                            color: #333;
                            font-size: 14px;
                        }
                    }
                }
            }
        }
        .jiehe {
            .content {
                color: #fff;
                height: 595px;
                background: url(/imgs/xingaokao/xuankejuece/xuankeEntry/bg_shixianxueshengxuan.png) no-repeat center center;
                .inner {
                    padding-top: 60px;
                    height: 595px;
                    box-sizing: border-box;
                    display: flex;
                    .main_box {
                        width: 220px;
                        .title_box {
                            margin-bottom: 45px;
                            span {
                                display: inline-block;
                                line-height: 60px;
                                font-size: 30px;
                                border-bottom: 1px solid #fff;
                            }
                        }
                        ul {
                            li {
                                display: flex;
                                align-items: center;
                                font-size: 16px;
                                margin-bottom: 35px;
                                img {
                                    margin-right: 25px;
                                }
                            }
                        }
                    }
                    .inner_right {
                        color: #333;
                        .title_box {
                            span {
                                border-bottom: 1px solid #333;
                            }
                        }
                    }
                    .middle {
                        flex: 1;
                        display: flex;
                        justify-content: center;
                        padding-top: 30px;
                        img {
                            width: 357px;
                            height: 281px;
                        }
                    }
                }
            }
        }
        .fuwuliucheng {
            height: 509px;
            background: url(/imgs/xingaokao/xuankejuece/xuankeEntry/icon_fuwuliucheng.png) no-repeat center center;
            .main_box {
                padding: 150px 60px 0px 60px;
                display: flex;
                justify-content: space-between;
                li {
                    color: #333;
                    width: 190px;
                    text-align: center;
                }
                .main_title {
                    font-size: 18px;
                    line-height: 50px;
                    font-weight: bold;
                }
                .mian_detail {
                    font-size: 14px;
                    line-height: 22px;
                }
            }
        }
	}
</style>