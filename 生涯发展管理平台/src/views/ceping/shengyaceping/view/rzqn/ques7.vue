<template>

  <div class="pc-page">
    <div class="test_main test_main_2">
      <rzqnNav></rzqnNav>
      <div class="ques-wrapper test_detail test_detail_ing">
        <div class="ques-container box d-relative">
          <div v-if="subject==1" class="d-relative ques-answer ques-diy-answer">
            <div class="diy-answer">
              <div class="diy-answer-left">
                <img src="../../../../../assets/rzqn/left-star.png" id="leftStar" alt="">
              </div>
              <!--<div class="d-relative diy-answer-right" @mouseup="mouseUp($event)">-->
              <div id="flashContent">
                <!--embed是给非IE用的，其中embed的name非常重要，必须与ID一致-->
                <object classid="clsid:d27cdb6e-ae6d-11cf-96b8-444553540000" width="550" height="400" id="swf">
                  <param name="movie" value="swf.swf"/>
                  <param name="wmode" value="window"/>
                  <param name="allowScriptAccess" value="always"/>
                  <embed src="./ceping/Main.swf" width="600px" height="500px"
                         name="swf" wmode="transparent" allowscriptaccess="always" type="application/x-shockwave-flash"
                         pluginspage="http://www.macromedia.com/go/getflashplayer">
                </object>
              </div>
            </div>
            <div class="work-m-tip work-diy-tip">
              碰壁次数：<span id="jsHits">0</span>
            </div>
            <tip></tip>
          </div>
          <!--<div class="box" v-if="tip==1" @click="clickStart">-->
            <!--<em class="icon part_start"></em>-->
            <!--<div class="btngroup">-->
              <!--<a href="javascript:;" class="btn btn_start">点击鼠标开始测试</a>-->
            <!--</div>-->
          <!--</div>-->
        </div>
        <div class="page">
          <!--<em class="col_2">{{curIndex+1}} </em>/{{total}}-->
        </div>
      </div>
    </div>
  </div>

  <!--<div class="d-relative xgtz-index xgtx-ques">-->
  <!--<img class="block-img" src="../../assets/xgtx/ques-bg.png" alt="">-->
  <!--<rzqnNav></rzqnNav>-->
  <!--<div class="evalu-part">-->
  <!--<img src="../../assets/rzqn/parta1.png">-->
  <!--</div>-->
  <!--<div class="ques-wrapper ques-wrapper-diy">-->
  <!--<div class="ques-container">-->

  <!--<div v-if="subject==1" class="d-relative ques-answer ques-diy-answer">-->
  <!--<div class="diy-answer">-->
  <!--<div class="diy-answer-left">-->
  <!--<img src="../../assets/rzqn/left-star.png" id="leftStar" alt="">-->
  <!--</div>-->
  <!--&lt;!&ndash;<div class="d-relative diy-answer-right" @mouseup="mouseUp($event)">&ndash;&gt;-->
  <!--<div id="flashContent">-->
  <!--&lt;!&ndash;embed是给非IE用的，其中embed的name非常重要，必须与ID一致&ndash;&gt;-->
  <!--<object classid="clsid:d27cdb6e-ae6d-11cf-96b8-444553540000" width="550" height="400" id="swf">-->
  <!--<param name="movie" value="swf.swf"/>-->
  <!--<param name="wmode" value="window"/>-->
  <!--<param name="allowScriptAccess" value="always"/>-->
  <!--<embed src="http://59.110.70.80:1113/static/Main.swf" width="600px" height="500px"-->
  <!--name="swf" wmode="transparent" allowscriptaccess="always" type="application/x-shockwave-flash"-->
  <!--pluginspage="http://www.macromedia.com/go/getflashplayer">-->
  <!--</object>-->
  <!--</div>-->
  <!--</div>-->
  <!--<div class="work-m-tip work-diy-tip">-->
  <!--碰壁次数：<span id="jsHits">0</span>-->
  <!--</div>-->
  <!--<tip></tip>-->
  <!--</div>-->

  <!--<div class="ques-bar" v-bind:style="{width:bar+'%'}"></div>-->
  <!--</div>-->
  <!--<div class="ques-progress">-->
  <!--<div class="seq-wrapper pull-right"></div>-->
  <!--</div>-->
  <!--<div class="copyright">-->
  <!--©版权声明：本作品著作权以及版权属于育铭天下，并受法律保护。-->
  <!--</div>-->
  <!--</div>-->
  <!--</div>-->
</template>

<script>
  import rzqnNav from '../../../../../components/rzqn.vue';
  import tip from '../../../../../components/tip.vue';

  export default {
    data() {
      return {
        tip: 1,
        subject: 1,
        questions: '',
        answers: [],
        bar: '',
        time: '',
        startTime: '',
        endTime: '',
        numberWall: 5, // 碰壁次数
        diyTop: 12,
        diyLeft: 42,
        moveFlag: true,
        canvas: '',
        canvasCtx: '',
        diy_time: 5000,
        diy_nums: 0,
        diyCount: 0,
        type: this.$route.query.type
      }
    },
    components: {rzqnNav, tip},
    mounted() {
      $('.test_menu .item').eq(6).addClass('item_2');
    },
    updated() {
      // this.AsCallJsHit
    },
    methods: {
      clickStart: function () {
        this.tip = 0
      },
      /**
       * 提交
       */
      submit: function () {
        this.$ajax.post("/api/result/cognition/diy/add", {
            time: this.time,// number	是	测试总时间		5000
            diy_time: this.diy_time,	// number	是	完成时间		590
            diy_nums: this.diy_nums,// 	number	是	碰壁次数
          }, {
            headers: {
              "token": sessionStorage.getItem('token'),
            }
          },
          {
            emulateJSON: true
          }
        ).then(
          function (res) {
            // 请求成功的结果
            console.log(res.data);
            var data = res.data;
            if (data.code == 0) {
              this.layerMsg('测试成功!')
              this.$router.push('/shengyaceping/rzqn/success/7')
            } else {
              this.layerMsg(data.msg);
            }
          },
          function (res) {
            this.layerMsg('网络错误，请重新提交');
          }
        );
      },

      drag: function (obj, sent) {
        var _this = this;
        var dmW = document.documentElement.clientWidth || document.body.clientWidth;
        var dmH = document.documentElement.clientHeight || document.body.clientHeight;


        var sent = sent || {};
        var l = sent.l || 0;
        var r = sent.r || dmW - obj.offsetWidth;
        var t = sent.t || 0;
        var b = sent.b || dmH - obj.offsetHeight;
        var n = sent.n || 10;

        obj.onmousedown = function (ev) {
          var oEvent = ev || event;
          var sentX = oEvent.clientX - obj.offsetLeft;
          var sentY = oEvent.clientY - obj.offsetTop;
          document.onmousemove = function (ev) {
            var oEvent = ev || event;
            var slideLeft = oEvent.clientX - sentX;
            var slideTop = oEvent.clientY - sentY;

            if (slideLeft <= l) {
              slideLeft = l;
            }
            if (slideLeft >= r) {
              slideLeft = r;
            }
            if (slideTop <= t) {
              slideTop = t;
            }
            if (slideTop >= b) {
              slideTop = b;
            }
            obj.style.left = slideLeft + 'px';
            obj.style.top = slideTop + 'px';
            console.log(obj.style.left);
            console.log(obj.style.top);
            if (slideLeft == 0 || slideTop == 0 || slideLeft == 240 || slideTop == 240) {
              _this.diy_nums++;
            }

            if (slideLeft == 0 && slideTop == 0 && _this.diyCount == 1) {
              _this.diyCount++;
              _this.time = Number(new Date().getTime()) - Number(_this.startTime);
              if (_this.type == 'test') {
                _this.$router.push('/shengyaceping/rzqn/success/7?type=test')
              } else {
                _this.submit();
              }
            } else if (slideLeft == 0 && slideTop == 0 && _this.diyCount == 0) {
              _this.diyCount = 1;
            }

          }
          document.onmouseup = function () {
            document.onmousemove = null;
            document.onmouseup = null;
          }
          return false;
        }
      },

    }

  }
</script>

<style>
  #myCanvas {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
  }

  .line1 {
    width: 200px;
    height: 20px;
    background: #000;
    top: 0;
    left: 0;
  }

  .diy2 {
    width: 10px !important;
    height: 10px !important;
    z-index: 0 !important;
  }

  #div1 {
    width: 10px;
    height: 10px;
    background-color: red;
    position: absolute;
    cursor: pointer;
    border-radius: 50%;
  }

  #parent {
    width: 250px;
    height: 250px;
    position: relative;
    /*margin: 0 auto;*/
    background-color: transparent;
  }

  .parent {
    width: 100px;
    height: 20px;
    position: relative;
    /*margin: 0 auto;*/
    background-color: #000;
    /*transform: rotate(85deg);z*/
  }

  .p1 {
    transform: rotate(70deg);
    left: -10px
  }

  .p2 {
    left: -31px;
    top: 55px;
    transform: rotate(-40deg);
  }

  .p3 {
    top: 72px;
    transform: rotate(13deg);
    left: -15px;
  }

  .p4 {
    top: 103px;
    left: 37px;
    transform: rotate(75deg);
  }

  .p5 {
    top: 88px;
    left: 77px;
    transform: rotate(-50deg);
  }

  .p6 {
    left: 150px;
    top: 40px;
    transform: rotate(10deg);
  }
</style>

<style>
  .evalu-nav {
    background: #333;
    opacity: 1;
  }

  #leftStar {
    width: 330px;
    height: auto;
    transform: rotate(-6deg);
  }

  #flashContent {
    position: absolute;
    top: 0px;
    right: -100px;
  }

  .xgtx-ques .ques-wrapper-diy {
    width: 1000px !important;
    margin-left: -500px !important;
    left: 50% !important;
  }

  .work-diy-tip {
    left: 50% !important;
    margin-left: -55px !important;
    top: 5px !important;
  }
</style>
