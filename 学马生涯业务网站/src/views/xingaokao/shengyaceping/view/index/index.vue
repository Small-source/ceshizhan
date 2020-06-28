<template>
  <div class="index-page">

    <HeaderEl ref="pageHeader"></HeaderEl>

    <!--banner start-->
    <div class="swiper-banner-wrapper idx_banner">
      <swiper class="swiper-banner swiper-container" :options="swiperOption" ref="mySwiper">
        <!-- slides -->
        <swiper-slide class="fore1" v-if="oem.front_banner1" :style="'background:url(' + oem.front_banner1 +') no-repeat center '">
          <a href="javascript:;" class="btn test" @click="goTest">我要测评</a>
        </swiper-slide>
        <swiper-slide class="fore2" v-if="oem.front_banner2" :style="'background:url(' + oem.front_banner2 +') no-repeat center '">
          <a href="javascript:;" class="btn test" @click="goTest">我要测评</a>
        </swiper-slide>
        <swiper-slide class="fore3" v-if="oem.front_banner3" :style="'background:url(' + oem.front_banner3 +') no-repeat center '">
          <a href="javascript:;" class="btn test" @click="goTest">我要测评</a>
        </swiper-slide>
      </swiper>
      <div class="swiper-pagination"></div>
    </div>

    <!--职业推荐&选科方案-->
    <div class="w100 idx_topbox">
      <div class="auto">
        <div class="module clearfix module1">
          <div class="lbox fl">
            <li class="li1">
              <img src="../../assets/idx_01.png" alt="" class="icon"/>
              <p class="font">人格特性</p>
              <p class="fz">人格特性适合的职业类型</p>
            </li>
            <li class="li2">
              <img src="../../assets/idx_02.png" alt="" class="icon"/>
              <p class="font">认知潜能</p>
              <p class="fz">符合潜能发展的职业类型</p>
            </li>
            <li class="li3">
              <img src="../../assets/idx_03.png" alt="" class="icon"/>
              <p class="font">职业兴趣</p>
              <p class="fz">兴趣倾向匹配的职业类型</p>
            </li>
          </div>
          <div class="rbox fr">
            <div class="idx_titbox">
              <h4 class="en">Professional</h4>
              <h6 class="cn">职业推荐</h6>
            </div>
            <div class="desc">
              职业生涯规划是根据自身特点将自己定位在 一个最能发挥自己长处的位置，选择最适合自己 能力的事业。职业定位是决定职业生涯成功的关 键，也是职业生涯规划的起点。
            </div>
            <!--<router-link class="more" to="/user/report/sample?id=987f53655b46488c869bc5f5c67ac5b7">查看报告样例</router-link>-->
            <a class="more" target="_blank" :href="oem.front_report_career_url">查看报告样例</a>
          </div>
        </div>
        <div class="module clearfix">
          <div class="lbox fr">
            <img src="../../assets/idx_06.png" alt="" class="img"/>
          </div>
          <div class="rbox fl">
            <div class="idx_titbox">
              <h4 class="en">Course selection</h4>
              <h6 class="cn">选科方案</h6>
            </div>
            <div class="desc">
              为了符合学生个性化发展，新高考制度出台实行除语、数、外三门必修课之外，将在另外6 门课程中任选3门，在这样的改革背景下，如何进行选科，将是本系统要解决的问题。
            </div>
            <!--<router-link class="more" to="/user/report/sample2?id=0a8e97e7ccd941d795f00e8ab578a3ed">查看报告样例</router-link>-->
            <a class="more" target="_blank" :href="oem.front_report_course_url">查看报告样例</a>
          </div>
        </div>
      </div>
    </div>
    <!--职业推荐&选科方案-->

    <!--测评流程-->
    <div class="w100 idx_process">
      <div class="clearfix">
        <div class="lbox fl">
          <div class="idx_titbox">
            <h4 class="en">Test process</h4>
            <h6 class="cn">测评流程</h6>
          </div>
          <div class="desc">
            <p>测评须知</p>
            <p>1. 优先使用最新版本IE、Chrome、Safari浏览器。</p>
            <p>2. 先注册后测评，保证注册信息真实有效。</p>
            <p>3. 登记真实个人信息，确保科学比较、精确匹配。</p>
            <p>4. 潜能测试需沉着冷静；问卷回答需轻松自如、真实作答。</p>
            <p>5. 若遇测试无法进行，请联系测评专业人员。</p>
          </div>
          <div class="tips">
            提示：请正确填写所在地区信息，电子邮箱，所在年级，以上信息在测评时要发挥重大作用。
          </div>
        </div>
        <div class="rbox fl">
          <div class="box clearfix">
            <div class="swiper-container">
              <swiper :options="swiperOptionProcess" ref="mySwiper">
                <div class="swiper-slide">
                  <div class="wrap">
                    <div class="item item1">
                      <em class="icon"></em>
                      <h6 class="title">用户注册</h6>
                      <div class="desc">
                        点击首页右上角“注册”，进入注册页面，已注册用户点击“登录”。
                      </div>
                      <em class="num">1</em>
                    </div>
                  </div>
                </div>
                <div class="swiper-slide">
                  <div class="wrap">
                    <div class="item item2">
                      <em class="icon"></em>
                      <h6 class="title">缴费建档</h6>
                      <div class="desc">
                        点击“购买序列号”选择测评项目，完善信息，建立档案，获取测评认证。
                      </div>
                      <em class="num">2</em>
                    </div>
                  </div>
                </div>
                <div class="swiper-slide">
                  <div class="wrap">
                    <div class="item item3">
                      <em class="icon"></em>
                      <h6 class="title">升学测评</h6>
                      <div class="desc">
                        冷静认真测试，诚实客观答题，随意作答将影响结果准确性和可靠性。
                      </div>
                      <em class="num">3</em>
                    </div>
                  </div>
                </div>
                <div class="swiper-slide">
                  <div class="wrap">
                    <div class="item item4">
                      <em class="icon"></em>
                      <h6 class="title">生成报告</h6>
                      <div class="desc">
                        测评结束后，系统生成个人专属报告，联系测评机构获取报告。

                      </div>
                      <em class="num">4</em>
                    </div>
                  </div>
                </div>
                <div class="swiper-slide">
                  <div class="wrap">
                    <div class="item item5">
                      <em class="icon"></em>
                      <h6 class="title">专家解读</h6>
                      <div class="desc">
                        基于测评报告，指引学生发现热爱学科，探索职业方向，更好规划未来。
                      </div>
                      <em class="num">5</em>
                    </div>
                  </div>
                </div>
              </swiper>
              <div class="swiper-button-next"></div>
              <div class="swiper-button-prev"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!--测评流程-->

    <!--系统介绍-->
    <div class="w100 idx_intro">
      <div class="lbox fl">
        <img src="../../assets/idx_12.jpg" alt="" class="img"/>
      </div>
      <div class="rbox fl">
        <div class="idx_titbox">
          <h4 class="en">system introduction</h4>
          <h6 class="cn">系统介绍</h6>
        </div>
        <div class="desc">
          <p>PAI生涯测评系统是基于心理测量的方法，在中科院心理所和清华大学相关研究成果的基础上，利用人工智能专家系统、大数据技术研发的职业定位和学科选择测评系统。</p>
          <p>
            PAI生涯测评通过测试个人的人格（Personality）、潜能（Ability）、兴趣（Interest）包括人格40个维度、12项基本潜能、19种职业兴趣，实现有人格特性适合，有职业兴趣倾向，有潜力发展的精准职业定位，并对适合该职业、专业领域的原因进行科学的解释。</p>
          <p>选科测评系统对中学生的学习能力、学科兴趣、学科成绩进行综合分析，为学生在高中阶段的学科选择提供科学依据，是综合评估高中生学科选择的有效工具。</p>
        </div>
      </div>
    </div>
    <!--系统介绍-->

    <!--核心优势-->
    <div class="w100 idx_core">
      <div class="auto">
        <div class="idx_titbox">
          <h4 class="en">core advantage</h4>
          <h6 class="cn">核心优势</h6>
        </div>
        <ul class="list clearfix">
          <li class="item">
            <img src="../../assets/idx_13.png" alt="" class="icon"/>
            <h6 class="title">权威科学的测评方法</h6>
            <div class="desc">
              本测试系统的理论和方法是由清华大学教授、博士生团队研发完成。
            </div>
          </li>
          <li class="item">
            <img src="../../assets/idx_14.png" alt="" class="icon"/>
            <h6 class="title">专业详实的报告解读</h6>
            <div class="desc">
              测评输出的报告结果，利用心理学的研究成果从多个维度全面分析个体特征，进而科学指导，规划未来。
            </div>
          </li>
          <li class="item">
            <img src="../../assets/idx_15.png" alt="" class="icon"/>
            <h6 class="title">符合时代特征的职业</h6>
            <div class="desc">
              系统职业数据库源于2015年《中华人民共和国职业分类大典》，包括1481个职业种类。
            </div>
          </li>
        </ul>
        <div class="links clearfix">
          <a :href="oem.front_website1_url" target="_blank" class="item_scale">
            <img :src="oem.front_website1_logo" alt="" class="icon"/>
          </a>
          <a :href="oem.front_website2_url" target="_blank" class="item_scale">
            <img :src="oem.front_website2_logo" alt="" class="icon"/>
          </a>
          <a :href="oem.front_website_url" target="_blank" class="item_scale">
            <img :src="oem.front_website_logo" alt="" class="icon"/>
          </a>
        </div>
      </div>
    </div>
    <!--核心优势-->

    <!--<FooterEl></FooterEl>-->

    <div class="w100 idx_map">
      <div class="map">
        <img src="../../assets/idx_25.jpg" alt=""/>
      </div>
      <div class="textbox">
        <h5 class="tit"><span>CONTACT</span></h5>
        <li class="wechart">{{oem.front_contact_weixin}}</li>
        <li class="qq">{{oem.front_contact_qq}}</li>
        <li class="phone">{{oem.front_contact_phone}}</li>
        <li class="email">{{oem.front_contact_email}}</li>
        <li class="address">{{oem.front_contact_company}}</li>
      </div>
    </div>

    <!--<div class="w100 ft_link">-->
    <!--<div class="auto">-->
    <!--友情链接：<a href="#">友情链接1</a><a href="#">友情链接1</a><a href="#">友情链接1</a><a href="#">友情链接1</a><a href="#">友情链接1</a>-->
    <!--</div>-->
    <!--</div>-->

    <footerEl></footerEl>

    <div class="layer-mask" v-if="modal==1"></div>

    <!-- 流程 modal start -->
    <div class="modal modal-reg modal-ce" v-if="liuModal==1">
      <div class="modal-title">
        <h2>
          <img src="../../assets/logo.png" alt="">&nbsp;-&nbsp;测评流程
        </h2>
        <img class="close" @click="closeModal" src="../../assets/login/close.png">
      </div>
      <div class="modal-body">
        <img src="../../assets/index/liuc.png" style="width:800px;display: block;margin:0px auto 0;">
      </div>
    </div>
    <!-- 流程 modal end -->


  </div>
</template>

<script>
  import pay from '../../components/pay/pay1';
  import HeaderEl from '../../components/HeaderEl';
  import FooterEl from '../../components/FooterEl';
  import {swiper, swiperSlide} from 'vue-awesome-swiper';

  require('swiper/dist/css/swiper.css')

  export default {
    data() {
      return {
        swiperOption: {//以下配置不懂的，可以去swiper官网看api，链接http://www.swiper.com.cn/api/
          pagination: '.swiper-pagination',
          paginationClickable: true,
          spaceBetween: 0,
          centeredSlides: true,
          autoplay: 3000,
          autoplayDisableOnInteraction: false
        },
        swiperOptionProcess: {
          notNextTick: true,
          nextButton: '.swiper-button-next',
          prevButton: '.swiper-button-prev',
          paginationClickable: true,
          spaceBetween: 0,
          autoplay: 6000,
          slidesPerView: 3,
          autoplayDisableOnInteraction: false
        },
        notNextTick: true,
        modal: 0, // 1显示 0，不显示、
        regModal: 0, // 1显示 0，不显示、
        liuModal: 0, // 1显示 0，不显示、
        loginModal: 0, // 1显示 0，不显示、
        loginTab: 1,
        regUsername: '',
        regId: '',
        regPass: '',
        regPassConfirm: '',
        code: '',
        loginUsername: '',
        loginPass: '',
        loginCode: '',
        token: sessionStorage.getItem('token'),
        payModal: 0, // 支付弹窗1，1：显示 0：不显示
        userEmail: '',
        isPay: false,
        oem: '',
      }
    },
    mounted() {
      this.getOem();
    },
    updated() {
    },
    watch: {},
    components: {
      pay,
      swiper,
      swiperSlide,
      FooterEl,
      HeaderEl
    },
    methods: {
      goTest: function () {
        if (!sessionStorage.getItem('token')) {
          this.$refs.pageHeader.openLoginModal(); // 子组件更新登录状态
          return false;
        }
        self.location = '/profile/add';
      },

      /**
       * 前端oem信息
       */
      getOem: function () {

        var _this = this;

        this.$ajax.post("/api/common/front/oem", {
          oem_url: document.domain
          // oem_url: 'www.ymtest.com'
        }, {emulateJSON: true}).then(
          function (res) {
            // 请求成功的结果
            console.log(res.data);
            var data = res.data;
            if (data.code == 0) {
              _this.oem = data.result;
            } else {
              this.layerMsg(data.msg);
            }
          },
          function (res) {
            this.layerMsg('网络错误，请重新提交');
          }
        );

      }

    }

  }
</script>

<style></style>

<style lang="scss"></style>
