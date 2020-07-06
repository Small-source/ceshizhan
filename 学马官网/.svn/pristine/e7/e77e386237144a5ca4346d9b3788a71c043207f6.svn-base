<template>
	<div id="app">
		<div class="header-nav">
			<div class="inner">
				<h1 class="logos">
				  <a href="/home" title="学马">
					<span>学马教育</span>
					<img src="/imgs/home/xuema.jpg" alt="">
				  </a>
				</h1>
				<ul class="lis-nav">
					<li class="lis">
						<a href="/home" class="bigLink"><span :class="selection==='home' ? 'select' : ''">首页</span></a>
					</li>
					<li class="lis lis_no2" @mouseenter="isshow = true" @mouseleave="isshow=false">
						<div class="bigLink">
							<span :class="selection==='canpin' ? 'select' : ''">产品与服务</span>
							<div class="arrow"></div>
						</div>
						<div class="nextNavs" v-show="isshow">
							<div class="inner">
								<div class="nav_box">
									<p class="title">系统工具</p>
									<ul>
										<router-link tag="li" to="/shengyaceping"><span>生涯测评系统</span></router-link>
										<router-link tag="li" to="/xuankejuece"><span>选科决策系统</span></router-link>
										<!-- <router-link tag="li" to="/pingtaixitong"><span>学职信息查询系统</span></router-link> -->
										<li>学职信息查询系统</li>
										<router-link tag="li" to="/gaokaozhiyuan"><span>志愿填报系统</span></router-link>
										<router-link tag="li" to="/jiaofuziyuan"><span>生涯教辅资源系统</span></router-link>
										<router-link tag="li" to="/zonghesuzhi"><span>综合素质评价系统</span></router-link>
									</ul>
								</div>
								<div class="nav_box nav_box2">
									<p class="title">课程辅导</p>
									<ul>
										<router-link tag="li" to="/shengxueguihua"><span>学业规划辅导</span></router-link>
										<router-link tag="li" to="/shengyakecheng"><span>生涯课程</span></router-link>
										<router-link tag="li" to="/researchCamp"><span>研学营</span></router-link>
										<router-link tag="li" to="/beijingtisheng"><span>背景提升与复试指导</span></router-link>
									</ul>
								</div>
								<div class="nav_box nav_box3">
									<p class="title">服务内容</p>
									<ul>
										<router-link tag="li" to="/zizhaozongping"><span>自招&综评</span></router-link>
										<router-link tag="li" to="/spainstudy"><span>港澳&出国留学</span></router-link>
										<router-link tag="li" to="/zhiyuantianbaozhidao"><span>志愿填报</span></router-link>
										<router-link tag="li" to="/shengyazhidao"><span>教师培训</span></router-link>
									</ul>
								</div>
								<div class="nav_box nav_box4">
									<p class="title">解决方案</p>
									<ul>
										<router-link tag="li" to="/xingaokao"><span>校园解决方案</span></router-link>
									</ul>
								</div>
							</div>	
						</div>

					</li>
					<li class="lis">
						<a href="/vipEscort" class="bigLink"><span :class="selection==='vipEscort' ? 'select' : ''">VIP护航计划</span></a>
					</li>
					<li class="lis">
						<a href="/xuemaNews" class="bigLink"><span :class="selection==='xuemaNews' ? 'select' : ''">学马资讯</span></a>
					</li>
					<li class="lis">
						<a href="/attractInvestment" class="bigLink"><span :class="selection==='attractInvestment' ? 'select' : ''">招商合作</span></a>
					</li>
					<li class="lis">
						<a href="/aboutus/jianjie" class="bigLink"><span :class="selection==='aboutus' ? 'select' : ''">关于我们</span></a>
					</li>
					<li class="link_shengya"><a href="http://www.xuematech.com" target="_blank">立即体验</a></li>
				</ul>
			</div>
		</div>
		<keep-alive>
            <router-view v-if="$route.meta.keepAlive" ></router-view>
        </keep-alive>
		<router-view  v-if="!$route.meta.keepAlive"></router-view>
		<!-- 底部导航栏 -->
		<div class="footerNav" v-show="showNav()">
			<div class="inner">
				<div class="customer">
					<p class="ft_title">客服咨询</p>
					<p class="tel">4008-925-909</p>
					<p class="ft_title">周一到周日</p>
					<p class="tel">9:00 ~ 18:00</p>
					<div class="img_box">
						<img src="/imgs/home/bg/xuema_wechat.jpg" alt="学马">
						<p>关注学马微信</p>
					</div>
				</div>
				<!-- 关于我们 -->
				<div class="guanyuwomen">
					<p class="ft_title">关于我们</p>
					<ul>
						<router-link tag="li" to="/aboutus/jianjie">公司简介</router-link>
						<router-link tag="li" to="/aboutus/callus">联系我们</router-link>
					</ul>
				</div>
				<!-- 产品与服务 -->
				<div class="products">
					<p class="ft_title">产品与服务</p>
					<p class="title">系统工具</p>
					<ul>
						<router-link tag="li" to="/shengyaceping"><span>生涯测评系统</span></router-link>
						<router-link tag="li" to="/xuankejuece"><span>选科决策系统</span></router-link>
						<!-- <router-link tag="li" to="/pingtaixitong"><span>学职信息查询系统</span></router-link> -->
						<li>学职信息查询系统</li>
						<router-link tag="li" to="/gaokaozhiyuan"><span>志愿填报系统</span></router-link>
						<router-link tag="li" to="/jiaofuziyuan"><span>生涯教辅资源系统</span></router-link>
						<router-link tag="li" to="/zonghesuzhi"><span>综合素质评价系统</span></router-link>
					</ul>
					<p class="title">课程辅导</p>
					<ul>
						<router-link tag="li" to="/shengxueguihua"><span>学业规划辅导</span></router-link>
						<router-link tag="li" to="/shengyakecheng"><span>生涯课程</span></router-link>
						<router-link tag="li" to="/researchCamp"><span>研学营</span></router-link>
						<router-link tag="li" to="/beijingtisheng"><span>背景提升与复试指导</span></router-link>
					</ul>
					<p class="title">服务内容</p>
					<ul>
						<router-link tag="li" to="/zizhaozongping"><span>自招&综评</span></router-link>
						<router-link tag="li" to="/spainstudy"><span>港澳&出国留学</span></router-link>
						<router-link tag="li" to="/zhiyuantianbaozhidao"><span>志愿填报</span></router-link>
						<router-link tag="li" to="/shengyazhidao"><span>教师培训</span></router-link>
					</ul>
					<p class="title">解决方案</p>
					<ul>
						<router-link tag="li" to="/xingaokao"><span>校园解决方案</span></router-link>
					</ul>
				</div>
				<!-- 学马资讯 -->
				<div class="career_news">
					<p class="ft_title">学马资讯</p>
					<ul>
						<li v-for="(item, index) in z_newsData" :key="index" @click="goNewsDetail(item.id)">{{item.title}}</li>
						
					</ul>
				</div> 
			</div>
		</div>
		<!-- 最底部公网安备 -->
		<div class="copyright" v-show="showNav()">
			<div class="inner">
				<p><span>Copyright</span><span>©</span><span>2011-2019</span><span>北京育铭天下科技有限公司</span><span>沪ICP备17034801号-1</span></p>
			</div>
		</div>
	</div>
</template>
<style lang="less" scoped>
* {
  font-family: "Arial","Microsoft YaHei","黑体","宋体",sans-serif;
  list-style: none;
  text-decoration: none;
  margin: 0;
  padding: 0;
}
#app {
  // font-family: "Microsoft YaHei",Verdana,Arial;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  padding-top: 52px; 
}
.inner {
  width: 1200px;
  margin: 0 auto;
  position: relative;
}
.header-nav {
  height: 74px;
  position: fixed;
  left: 0px;
  top: 0px;
  bottom: 0px;
  right: 0px;
  background-color: #fff;
  z-index: 10000000000;
  box-shadow: 0 0 6px #dedede;
  .inner {
	width: 1200px;
	margin: 0 auto;
	position: relative;
  }
  .logos {
	width: 142px;
	height: 44px;
	padding: 15px 0px;
	float: left;
	margin-right: 350px;
	a {
	  display: block;
	  width: 142px;
	  height: 60px;
	  overflow: hidden;
	  position: relative;
	  span {
		position: absolute;
		left: -1000px;
	  }
	  img {
		width: 99px;
		height: 40px;
	  }
	}
  }
  .lis-nav {
	height: 74px;
	.lis {
	  float: left;
	  height: 40px;
	  padding: 17px 0px;
	  margin-right: 38px;
	  color: #000;
	  position: relative;
	  font-size: 14px;
	  .select {
		  color: #156def;
		}
	  &:hover {
		.arrow {
		  transform: rotate(180deg);
		}
	  }
	  .arrow {
		  position: absolute;
		  right: -13px;
		  top: 33px;
		  width: 10px;
		  height: 10px;
		  background: url(/imgs/home/icon/xiala.png) no-repeat center center;
		  background-size: 10px 10px;

	  }
	  .bigLink {
		display: block;
		line-height: 40px;
		border-radius: 20px;
		font-size: 14px;
		color: #000;
		span {
		  display: block;
		  color: #000;
		  height: 40px;
		  line-height: 40px;
		  border-radius: 20px;
		}
		.select {
		  color: #156def;
		}
	  }
	  .nextNavs {
		position: fixed;
		padding-top: 30px;
		width: 100%;
		height: 150px;
		left: 0px;
		top: 65px;
		// box-shadow:0 0 20px rgba(176,224,251,.5);
		background-color: #ffffff;
		// border-radius: 10px;
		z-index: 20000;
		.mountLink {
		  color: #333;
		  font-size: 14px;
		  line-height: 40px;
		  cursor: pointer;
		  &:hover {
			.yunpingtai {
			  display: block;
			}
		  }

		}
		.pingtai {
		  color: #2d3e50;
		  height: 40px !important;
		  display: block;
		  span {
			padding-left: 10px;
		  }
		  &:hover {
				color: #156def;
		  }
		}
		.yunpingtai {
		  padding-left: 60px;
		  padding-top: 30px;
		  width: 370px;
		  height: 310px;
		  background-color: #fff;
		  position: absolute;
		  left: 166px;
		  top: 0px;
		  display: none;
		  li {
			font-size: 14px;
			float: left;
			width: 160px;
			height: 26px;
			line-height: 26px;
			border-radius: 3px;
			margin-right: 50px;
			margin-bottom: 10px;
			cursor: pointer;
			a {
			  // width: 100%;
			  display: block;
			  width: 160px;
			  height: 26px;
			  color: #666666;
			  &:hover {
				color: #156def;
			  }
			}
			&:nth-child(even) {
			  margin-right: 0px;
			}
		  }
		}
	  }
	  .footLink {
		// height: 60px;
		width: 100%;
		// float: left;
		color: #333;;
		font-size: 14px;
		li {
		  height: 36px;
		  line-height: 36px;
		  float: left;
		  width: 150px;
		  margin-right: 65px;
		  cursor: pointer;
		  a {
			display: block;
			width: 100%;
			height: 40px;
			color: #2d3e50;
			&:hover {
				color: #156def;
			}
		  }
		  &:nth-child(3) {
			margin-right: 0px;
		  }
		  &:last-child {
			margin-right: 0px;
		  }
		}
	  }
	  &:hover {
		.bigLink {
		  cursor: pointer;
		  color: #156def;
		}
	  }
	}
	.lis_no2 {
		margin-right: 0px;
		padding-right: 51px;
		.bigLink {
			position: relative;
			.arrow {
				right: -15px;
				top: 50%;
				margin-top: -3px;
			}
		}
		// .arrow {
		// 	left: 75px;
		// }
	}
	.link_shengya {
		float: right;
		padding: 23.5px 0px;
		width: 86px;
		height: 27px;
		a {
			display: block;
			width: 86px;
			height: 27px;
			font-size: 14px;
			color: #fff;
			background-color: #127de1;
			border-radius: 2px;
			text-align: center;
			line-height: 27px;
		}
	}
	.xingaokao {
		margin-right: 51px;
	  	.nextNavs {
			width: 200px;
			height: 100px;
			left: -10px;
			z-index: 20000;
			a {
			  width: 100%;
			  color: #2d3e50;
			  &:hover {
				color: #156def;
			  }
			}
	  	}
	}
	.guanyuwomen {
	  .nextNavs {
		width: 200px;
		height: 100px;
		left: -42px;
		z-index: 20000;
	  }
	  .mountLink {
		display: block;
		width: 100%;
		height: 40px;
		&:hover {
		  color: #156def;
		}
	  }
	}
  }
}
.nextNavs {
	position: absolute;
	width: 100%;
	z-index: 100000000;
	background-color: #fff;
	padding: 30px 0px;
	padding-bottom: 20px;
	.nav_box {
		float: left;
		width: 325px;
		height: 120px;
		border-right: 1px solid #e5e5e5;
		.title {
			font-size: 16px;
			line-height: 16px;
			color: #333;
			font-weight: 600;
		}
		ul {
			width: 325px;
			li {
				padding-top: 20px;
				font-size: 14px;
				line-height: 14px;
				float: left;
				width: 50%;
				color: #666;
				cursor: pointer;
			}
		}
	}
	.nav_box2 {
		padding-left: 25px;
		width: 300px;

	}
	.nav_box3 {
		padding-left: 25px;
		width: 300px;

	}
	.nav_box4 {
		float: left;
		width: 170px;
		border: none;
		padding-left: 25px;
	}
}
.footerNav {
    // height: 280px;
    width: 100%;
    background-color: #333436;
    border-bottom: 1px solid #6e6f70;
    color: #fff;
    padding-top: 70px;
    // height: 322px;
    .inner {
    	overflow: hidden;
    }
    .ft_title {
    	font-size: 16px;
    	margin-bottom: 34px;
    }
    ul {
    	li {
    		line-height:20px;
    		font-size: 14px;
    		margin-bottom: 18px;
    		cursor: pointer;
    	}
    }
 	.customer {
		float: left;
		width: 304px;
		margin-top: -5px;
		.ft_title {
			margin-bottom: 18px;
		}
		.tel {
			margin-bottom: 26px;
			font-size: 24px;
		}
		.img_box {
			img {
				width: 72px;
				height: 72px;
			}
			p {
				line-height: 42px;
			}

		}
		
 	}
 	.guanyuwomen {
		float: left;
		width: 200px;


 	}
 	.products {
		float: left;
		width: 346px;
		.title {
    		line-height: 30px;
    	}
		ul {
			width: 346px;
			padding-top: 10px;
			margin-bottom: 15px;
			overflow: hidden;
			li {
				float: left;
				width: 173px;
				margin-bottom: 5px;
				font-size: 13px;
			}
		}

 	}
 	.career_news {
		float: left;
		width: 350px;

 	}
}
.copyright {
  text-align: center;
  height: 60px;
  line-height: 60px;
  letter-spacing: 0.5px; 	
  color: #ffffff;
  background-color: #333436;
  font-size: 12px;
}
</style>
<script type="text/javascript">
export default {
	data() {
		return {
			yunpingtai: [{ page: '生涯测评系统', url: '/shengyaceping' }, { page: '选科决策系统', url: '/xuankejuece' }, { page: '走班排课系统', url: '/zhinengpaike' }, { page: '教辅资源系统', url: '/jiaofuziyuan' }, { page: '综合素质评价系统', url: '/zonghesuzhi' },
				// {page:'自主招生智能推荐系统', url: '/zizhuzhaosheng'},
				{ page: '高考志愿填报系统', url: '/gaokaozhiyuan' }, { page: '走班校园管理系统', url: '/zoubanxiaoyuan' }, { page: '走班考试分析系统', url: '/zoubankaoshixitong' }
			],
			isshow: false,
			isshowXGK: false,
			isshowGYWM: false,
			idx: 0,
			CityAddress: [{ city: '上海', cityId: 0 }, { city: '北京', cityId: 1 }, { city: '湖南', cityId: 2 }, { city: '四川', cityId: 3 }, { city: '河南', cityId: 4 }],
			address: ['上海市普陀区金沙江路1997弄金环商务花园8号栋3楼', '北京市海淀区北清路68号院24号楼 d座3层509', '湖南省长沙市开福区万达广场写字楼a座24楼', '四川省成都市高新区府城大道399号天府新谷12楼', '河南郑州市花园路国贸360大厦A座14楼'],
			selection: '',
			z_newsData: []
		}
	},
	methods: {
		change(index) {
			this.idx = index;
		},
		select(index) {
			this.selection = index;
			this.isshow = false;
			this.isshowXGK = false;
			// console.log(this.selection)
		},
		showNav() {
		  let researchCamp = /researchCamp/;
		  let attractInvestment = /attractInvestment/;
		  let path = this.$route.path;
		  if(attractInvestment.test(path)) {
			return false;
		  }else {
			return true;
		  }
		},
	  	getNews() {
        	// this.nowId = 1;
        	// var cateId = id;
        	console.log(8888888888);
            var _this = this;
            this.$ajax.post(this.G_uri + '/article/getArticleList', {
            	cateId: 1,
            	pageSize: 10,
            	totalPage: 1
            })
                .then(function(res) {
                    if(res.data.code == 2000) {
                        _this.z_newsData = res.data.data.list;
                        let z_newsData =  res.data.data.list;
                        window.sessionStorage.setItem('z_newsData',JSON.stringify(z_newsData));
                    }
                })
                .catch(function(error) {
                    console.log(error);
                });
        },
        goNewsDetail(id) {
        	var id = id;
            this.$router.push({  
                path: '/newsDetail',   
                query: {  
                    id: id,    
                }  
            }) 
            window.scroll(0, 0); 
        },
        checkData() {
        	if(window.sessionStorage.getItem('z_newsData')) {
        		this.z_newsData =JSON.parse(window.sessionStorage.getItem('z_newsData')); 
        	}else {
        		this.getNews();
        	}
        }
	},
	// watch: {
	//   $route: {
	//     handler: function(val, oldVal){
	//     console.log(val);
	//   }
	// } 
	watch: {
		$route: {
			handler: function(val, oldVal) {
				// console.log(val.path);
				var me = this;
				var path = val.path.slice(1);
				console.log(path);
				switch (path) {
					case "home":
						me.selection = 'home'
						window.scrollTo(0, 0)
						break;
						// default:
					case "pingtaixitong":
					case "shengyaceping":
					case "xuankejuece":
					case "zhinengpaike":
					case "jiaofuziyuan":
					case "zonghesuzhi":
					case "gaokaozhiyuan":
					case "zoubanxiaoyuan":
					case "zoubankaoshixitong":
					case "shengyazhidao":
					case "shengyakecheng":
					case "zhiyuantianbaozhidao":
					case "zizhaozongping":
					case "beijingtisheng":
					case "researchCamp":
					case "spainstudy":
						this.isshow = false;
						me.selection = "canpin";
						window.scrollTo(0, 0)
						break;
					case "shengxueguihua":
						me.selection = "shengxueguihua";
						window.scrollTo(0, 0)
						break;
					case "xingaokao":
						// console.log(44444444)
						this.isshowXGK = false;
						me.selection = "xingaokao";
						window.scrollTo(0, 0)
						break;
					case "shangwuhezuo":
						me.selection = "shangwuhezuo";
						window.scrollTo(0, 0)
						break;
					case "aboutus/jianjie":
					case "aboutus/callus":
						this.isshowGYWM = false
						me.selection = "aboutus";
						// window.scrollTo(0, 0);
						break;
					default:
				}
			}
		}
	},
	mounted() {
		// if(window.sessionStorage.getItem('z_newsData') {
		// }
		this.checkData();
	},
	created() {
		let path1 = this.$route.path.slice(1);
		switch (path1) {
			case '':
			case 'undefined':
			case "home":
				this.selection = 'home'
				window.scrollTo(0, 0)
				break;
				// default:
			case "pingtaixitong":
			case "shengyaceping":
			case "xuankejuece":
			case "zhinengpaike":
			case "jiaofuziyuan":
			case "zonghesuzhi":
			case "gaokaozhiyuan":
			case "zoubanxiaoyuan":
			case "zoubankaoshixitong":
			case "shengyazhidao":
			case "shengyakecheng":
			case "zhiyuantianbaozhidao":
			case "zizhaozongping":
			case "beijingtisheng":
			case "researchCamp":
			case "spainstudy":
				this.isshow = false;
				this.selection = "canpin";
				// console.log(1111)
				window.scrollTo(0, 0)
				break;
			case "shengxueguihua":
				this.selection = "shengxueguihua";
				window.scrollTo(0, 0)
				break;
			// case "xingaokao":
			// 	this.isshowXGK = false;
			// 	this.selection = "xingaokao";
			// 	window.scrollTo(0, 0)
			// 	break;
			case "xuemaNews":
				this.selection = "xuemaNews";
				window.scrollTo(0, 0)
				break;
			case "attractInvestment":
				this.selection = "attractInvestment";
				window.scrollTo(0, 0)
				break;
			case "vipEscort":
				this.selection = "vipEscort";
				window.scrollTo(0, 0)
				break;
			case "aboutus/jianjie":
			case "aboutus/callus":
				this.isshowGYWM = false
				this.selection = "aboutus";
				window.scrollTo(0, 0)
				break;
			default:
		}
		// this.getNews();
	}
}
</script>