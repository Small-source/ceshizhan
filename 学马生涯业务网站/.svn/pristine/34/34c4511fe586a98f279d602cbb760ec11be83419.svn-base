<template>

  <div class="pc-page">
    <div class="test_main test_main_2">
      <rzqnNav></rzqnNav>

      <div class="ques-wrapper ques-space-wrapper test_detail test_detail_ing test_2 test_detail_space">
        <div class="timebox fr" v-if="tip==0">
          剩余时间：
          <div class="time">
            {{leftTime}}s
          </div>
        </div>
        <div class="ques-container box d-relative">
          <div class="d-relative ques-answer ques-space-answer">
            <div class="d-absolute left-operation" v-if="tip==0">
              <img class="operation" src="../../../../../assets/rzqn/32.png" @click="redMoveLeft" alt="">
              <img class="operation" src="../../../../../assets/rzqn/33.png" v-bind:style="{transform:'rotate('+redRotate+'deg)'}"
                   alt="">
              <img class="operation" src="../../../../../assets/rzqn/34.png" @click="redMoveRight" alt="">
            </div>
            <div class="d-absolute operation right-operation" v-if="tip==0">
              <img class="operation" src="../../../../../assets/rzqn/35.png" @click="blueMoveLeft" alt="">
              <img class="operation" src="../../../../../assets/rzqn/36.png" v-bind:style="{transform:'rotate('+blueRotate+'deg)'}"
                   alt="">
              <img class="operation" src="../../../../../assets/rzqn/37.png" @click="blueMoveRight" alt="">
            </div>

            <img class="d-absolute red-pos" v-bind:style="{left:redLeft+'px',top:redTop+'px'}"
                 src="../../../../../assets/rzqn/28.png" alt="">
            <img class="d-absolute blue-pos" v-bind:style="{left:blueLeft+'px',top:blueTop+'px'}"
                 src="../../../../../assets/rzqn/29.png" alt="">
            <img class="d-absolute end-pos" src="../../../../../assets/rzqn/30.png" alt="">

          </div>
          <!--<div class="ques-answer-tip" v-if="tip==1" @click="clickStart">点击鼠标,开始测试</div>-->
          <div class="box" v-if="tip==1" @click="clickStart">
            <em class="icon part_start"></em>
            <div class="btngroup">
              <a href="javascript:;" class="btn btn_start">点击鼠标开始测试</a>
            </div>
          </div>
        </div>

      </div>
    </div>
  </div>

  <!--<div class="d-relative xgtz-index xgtx-ques">-->
    <!--<img class="block-img" src="../../assets/xgtx/ques-bg.png" style="min-height: 1000px" alt="">-->
    <!--<rzqnNav></rzqnNav>-->
    <!--<div class="evalu-part">-->
      <!--<img src="../../assets/rzqn/parta1.png">-->
    <!--</div>-->
    <!--<div class="ques-wrapper ques-space-wrapper">-->
      <!--<div class="ques-container">-->

        <!--<div class="d-relative ques-answer ques-space-answer">-->
          <!--<div class="d-absolute left-operation" v-if="tip==0">-->
            <!--<img class="operation" src="../../assets/rzqn/32.png" @click="redMoveLeft" alt="">-->
            <!--<img class="operation" src="../../assets/rzqn/33.png" v-bind:style="{transform:'rotate('+redRotate+'deg)'}"-->
                 <!--alt="">-->
            <!--<img class="operation" src="../../assets/rzqn/34.png" @click="redMoveRight" alt="">-->
          <!--</div>-->
          <!--<div class="d-absolute operation right-operation" v-if="tip==0">-->
            <!--<img class="operation" src="../../assets/rzqn/35.png" @click="blueMoveLeft" alt="">-->
            <!--<img class="operation" src="../../assets/rzqn/36.png" v-bind:style="{transform:'rotate('+blueRotate+'deg)'}"-->
                 <!--alt="">-->
            <!--<img class="operation" src="../../assets/rzqn/37.png" @click="blueMoveRight" alt="">-->
          <!--</div>-->

          <!--<img class="d-absolute red-pos" v-bind:style="{left:redLeft+'px',top:redTop+'px'}"-->
               <!--src="../../assets/rzqn/28.png" alt="">-->
          <!--<img class="d-absolute blue-pos" v-bind:style="{left:blueLeft+'px',top:blueTop+'px'}"-->
               <!--src="../../assets/rzqn/29.png" alt="">-->
          <!--<img class="d-absolute end-pos" src="../../assets/rzqn/30.png" alt="">-->
          <!--<div class="ques-answer-tip" v-if="tip==1" @click="clickStart">点击鼠标，开始测试</div>-->

          <!--<div class="seq-wrapper pull-right" v-if="tip==0">剩余时间:{{leftTime}}s</div>-->
        <!--</div>-->

        <!--<div class="ques-bar" v-bind:style="{width:bar+'%'}"></div>-->


      <!--</div>-->
      <!--<div class="ques-progress">-->
        <!--&lt;!&ndash;<div class="seq-wrapper pull-right" v-if="tip==0">剩余时间:{{leftTime}}s</div>&ndash;&gt;-->
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
        seq: this.$route.query.seq,
        type: this.$route.query.type,
        tip: 1,
        subject: 1,
        questions: '',
        answers: [],
        bar: '',
        time: '',
        startTime: '',
        endTime: '',
        redLeft: 395,
        redTop: 500,
        blueLeft: 395,
        blueTop: 100,
        redRotate: 0,
        blueRotate: 0,
        space_direction_deviation: '',//	number	是	方向偏差 （浮点数）		55.7777
        red_space_direction_deviation: '',//	number	是	方向偏差 （浮点数）		55.7777
        blue_space_direction_deviation: '',//	number	是	方向偏差 （浮点数）		55.7777
        space_range_deviation: '',//		number	是	距离偏差（浮点数）		22.444
        space_response_latency: '',//		number	是	反应潜伏期（ms）		5000
        space_reaction_frequency: '',//		number	是	反应频率（浮点数）		12.45
        space_time: '',//		number	是	投入时间(ms)
        firstClick: 1, // 代表第一次点击
        clickCount: 0, // 点击次数
        firstClickTime: '',
        clock: 20,
        timer: '',
        leftTime: 20,
      }
    },
    components: {rzqnNav, tip},
    mounted() {
      // this.quesList();
      var _this = this;
      $('.test_menu .item').eq(2).addClass('item_2');
    },
    updated() {
    },
    destroyed() {
      for (var i = 1; i < 100; i++) {
        clearInterval(i);
      }
    },
    methods: {
      clickStart: function () {
        this.startTime = new Date().getTime();
        this.tip = 0
        var _this = this;
        console.log('开始答题')
        setTimeout(function () {
          if (_this.type == 'test') {
              sessionStorage.setItem('kongTest',2)
            _this.$router.push('/shengyaceping/rzqn/success/3?&type=test');
            _this.clearTimer();
          } else {
            var kongAnswers = [];
            var obj = {};

            // 投入时间
            if (_this.firstClickTime) {
              _this.space_time = Number(new Date().getTime()) - Number(_this.firstClickTime);
            } else {
              _this.space_time = 0;
            }

            // 反应频率
            _this.space_reaction_frequency = parseFloat((_this.clickCount * 3).toFixed(2));

            // 反应潜伏期
            if (_this.firstClickTime) {
              _this.space_response_latency = Number(_this.firstClickTime) - Number(_this.startTime);
            } else {
              _this.space_response_latency = 20000;
            }

            // 距离偏差
            var redPositionLeft = $('.red-pos').position().left;
            var redPositionTop = $('.red-pos').position().top;
            var bluePositionLeft = $('.blue-pos').position().left;
            var bluePositionTop = $('.blue-pos').position().top;
            var redSpaceRange = Math.sqrt((redPositionLeft - 400) * (redPositionLeft - 400) + (redPositionTop - 300) * (redPositionTop - 300));
            var blueSpaceRange = Math.sqrt((bluePositionLeft - 400) * (bluePositionLeft - 400) + (bluePositionTop - 300) * (bluePositionTop - 300));
            _this.space_range_deviation = redSpaceRange + blueSpaceRange;
            _this.space_range_deviation = parseFloat(_this.space_range_deviation.toFixed(2));

            // 方向偏差
            _this.dirRedDeviationCalca();
            _this.dirBlueDeviationCalca();
            // console.log(_this.red_space_direction_deviation.toFixed(2));
            // console.log(_this.blue_space_direction_deviation.toFixed(2));
            _this.space_direction_deviation = parseFloat(Number(_this.red_space_direction_deviation) + Number(_this.blue_space_direction_deviation))

            // console.log(_this.space_direction_deviation)
            obj.space_time = _this.space_time;
            obj.space_reaction_frequency = _this.space_reaction_frequency;
            obj.space_response_latency = _this.space_response_latency;
            obj.space_range_deviation = _this.space_range_deviation;
            obj.space_direction_deviation = _this.space_direction_deviation;

            if (_this.seq == 1) {
              sessionStorage.removeItem('kongAnswers');
              kongAnswers.push(obj);
              kongAnswers = JSON.stringify(kongAnswers);
              sessionStorage.kongAnswers = kongAnswers;
              // console.log(sessionStorage.kongAnswers);
            } else {
              // console.log(JSON.parse(sessionStorage.kongAnswers));
              var sessionKongAnswers = JSON.parse(sessionStorage.kongAnswers);
              sessionKongAnswers.push(obj);
              sessionKongAnswers = JSON.stringify(sessionKongAnswers);
              sessionStorage.kongAnswers = sessionKongAnswers;
            }
            console.log(JSON.parse(sessionStorage.getItem('kongAnswers')));
            if (_this.seq == 6) {
              _this.submit();
            } else {
              _this.$router.push('/shengyaceping/rzqn/success/3?seq=' + _this.seq);
              _this.clearTimer();
            }
          }
        },20*1000);
        $('.red-pos').animate({
          left: -15 + 'px',
          top: this.redTop + 'px'
        }, 20 * 1000, 'linear')
        $('.blue-pos').animate({
          left: 800,
          top: this.blueTop + 'px'
        }, 20000, 'linear')
        // _this.timerInit();
        setInterval(function () {
          if (_this.leftTime > 0) {
            _this.leftTime--;
          }
        }, 1000)
      },

      /**
       * 计算红点的方向偏差
       */
      dirRedDeviationCalca: function () {
        var positionLeft, // 相对于容器的left值
          positionTop, // 相对于容器的top值
          angleSin, // 正弦值
          angleCos, // 余弦值
          tempTop, // 移动top值
          tempLeft, // 移动left值
          rotate; // 当前偏移角度
        positionLeft = $('.red-pos').position().left;
        positionTop = $('.red-pos').position().top;

        if (this.redRotate >= 0 && this.redRotate < 90) {
          rotate = Math.abs(this.redRotate);
          // 红色方块当前运动方向的角度
          angleSin = Math.sin(rotate * Math.PI / 180); // 10度的正弦值
          angleCos = Math.cos(rotate * Math.PI / 180); // 10度的余弦值
          tempTop = positionTop - angleSin * 500; // 移动的top值
          tempLeft = positionLeft - angleCos * 500; // 移动的top值
        }

        if (this.redRotate >= 90 && this.redRotate < 180) {
          rotate = this.redRotate - 90;
          // 红色方块当前运动方向的角度
          angleSin = Math.sin(rotate * Math.PI / 180); // 10度的正弦值
          angleCos = Math.cos(rotate * Math.PI / 180); // 10度的余弦值
          tempTop = positionTop - angleCos * 500; // 移动的top值
          tempLeft = positionLeft + angleSin * 500; // 移动的top值
        }

        if (this.redRotate >= 180 && this.redRotate < 270) {
          rotate = Math.abs(this.redRotate) - 180;
          // 红色方块当前运动方向的角度
          angleSin = Math.sin(rotate * Math.PI / 180); // 10度的正弦值
          angleCos = Math.cos(rotate * Math.PI / 180); // 10度的余弦值
          tempTop = positionTop + angleSin * 500; // 移动的top值
          tempLeft = positionLeft + angleCos * 500; // 移动的top值
        }

        if (this.redRotate >= 270 && this.redRotate < 360) {
          rotate = Math.abs(this.redRotate) - 270;
          // 红色方块当前运动方向的角度
          if (this.redRotate == 360) {
            this.redRotate = 0
          }
          angleSin = Math.sin(rotate * Math.PI / 180); // 10度的正弦值
          angleCos = Math.cos(rotate * Math.PI / 180); // 10度的余弦值
          tempTop = positionTop + angleCos * 500; // 移动的top值
          tempLeft = positionLeft - angleSin * 500; // 移动的top值
        }

        // console.log(tempLeft);
        // console.log(tempTop);
        var angleAlen = this.pointLengthCalca(positionLeft, positionTop, 400, 300);
        var angleBlen = this.pointLengthCalca(positionLeft, positionTop, tempLeft, tempTop);
        var angleClen = this.pointLengthCalca(tempLeft, tempTop, 400, 300);
        // console.log(angleAlen);
        // console.log(angleBlen);
        // console.log(angleClen);

        var redDirCos = (angleAlen * angleAlen + angleBlen * angleBlen - angleClen * angleClen) / (2 * angleAlen * angleBlen);
        this.red_space_direction_deviation = Math.acos(redDirCos) * 180 / Math.PI;
      },

      /**
       * 记录蓝点的方向偏差
       */
      dirBlueDeviationCalca: function () {

        var positionLeft, // 相对于容器的left值
          positionTop, // 相对于容器的top值
          angleSin, // 正弦值
          angleCos, // 余弦值
          tempTop, // 移动top值
          tempLeft, // 移动left值
          rotate; // 当前偏移角度
        positionLeft = $('.blue-pos').position().left;
        positionTop = $('.blue-pos').position().top;

        if (this.blueRotate >= 0 && this.blueRotate < 90) {
          rotate = Math.abs(this.blueRotate);
          // 蓝色方块当前运动方向的角度
          angleSin = Math.sin(rotate * Math.PI / 180); // 10度的正弦值
          angleCos = Math.cos(rotate * Math.PI / 180); // 10度的余弦值
          tempTop = positionTop + angleSin * 500; // 移动的top值
          tempLeft = positionLeft + angleCos * 500; // 移动的top值
        }

        if (this.blueRotate >= 90 && this.blueRotate < 180) {
          rotate = this.blueRotate - 90;
          // 蓝色方块当前运动方向的角度
          this.blueRotate += 10;
          angleSin = Math.sin(rotate * Math.PI / 180); // 10度的正弦值
          angleCos = Math.cos(rotate * Math.PI / 180); // 10度的余弦值
          tempTop = positionTop + angleCos * 500; // 移动的top值
          tempLeft = positionLeft - angleSin * 500; // 移动的top值
        }

        if (this.blueRotate >= 180 && this.blueRotate < 270) {
          rotate = Math.abs(this.blueRotate) - 180;
          // 蓝色方块当前运动方向的角度
          angleSin = Math.sin(rotate * Math.PI / 180); // 10度的正弦值
          angleCos = Math.cos(rotate * Math.PI / 180); // 10度的余弦值
          tempTop = positionTop - angleSin * 500; // 移动的top值
          tempLeft = positionLeft - angleCos * 500; // 移动的top值
        }

        if (this.blueRotate >= 270 && this.blueRotate < 360) {
          rotate = Math.abs(this.blueRotate) - 270;
          // 蓝色方块当前运动方向的角度
          this.blueRotate += 10;
          if (this.blueRotate == 360) {
            this.blueRotate = 0
          }
          angleSin = Math.sin(rotate * Math.PI / 180); // 10度的正弦值
          angleCos = Math.cos(rotate * Math.PI / 180); // 10度的余弦值
          tempTop = positionTop - angleCos * 500; // 移动的top值
          tempLeft = positionLeft + angleSin * 500; // 移动的top值
        }

        // console.log(tempLeft);
        // console.log(tempTop);
        var angleAlen = this.pointLengthCalca(positionLeft, positionTop, 400, 300);
        var angleBlen = this.pointLengthCalca(positionLeft, positionTop, tempLeft, tempTop);
        var angleClen = this.pointLengthCalca(tempLeft, tempTop, 400, 300);
        // console.log(angleAlen);
        // console.log(angleBlen);
        // console.log(angleClen);

        var redDirCos = (angleAlen * angleAlen + angleBlen * angleBlen - angleClen * angleClen) / (2 * angleAlen * angleBlen);
        this.blue_space_direction_deviation = Math.acos(redDirCos) * 180 / Math.PI;
        console.log(this.blue_space_direction_deviation);
      },

      /**
       * 根据两点坐标求直线长度
       */
      pointLengthCalca: function (left1, top1, left2, top2) {
        var angleLen = Math.sqrt((left2 - left1) * (left2 - left1) + (top2 - top1) * (top2 - top1));
        return angleLen;
      },


      tabSwitch: function (e) {
        this.subject = $(e.target).attr('cid');
      },

      // red move to top
      /**
       * red div move to top
       */
      redMoveTop: function () {
        this.clearTimer();
        this.timerInit();
        this.redTop = this.redTop - 5;
      },

      /**
       * red div move to left
       */
      redMoveLeft: function () {

        this.clickCount++;

        if (this.firstClick == 1) {
          this.firstClickTime = new Date().getTime();
          this.firstClick = 2;
        }

        var positionLeft, // 相对于容器的left值
          positionTop, // 相对于容器的top值
          angleSin, // 正弦值
          angleCos, // 余弦值
          tempTop, // 移动top值
          tempLeft, // 移动left值
          rotate; // 当前偏移角度
        positionLeft = $('.red-pos').position().left;
        positionTop = $('.red-pos').position().top;

        if (this.redRotate == 0) {
          this.redRotate = 360;
        }

        if (this.redRotate <= 360 && this.redRotate > 270) {
          rotate = 370 - Math.abs(this.redRotate);
          // 红色方块当前运动方向的角度
          this.redRotate -= 10;
          angleSin = Math.sin(rotate * Math.PI / 180); // 10度的正弦值
          angleCos = Math.cos(rotate * Math.PI / 180); // 10度的余弦值
          tempTop = positionTop + angleSin * 500; // 移动的top值
          tempLeft = positionLeft - angleCos * 500; // 移动的top值
        }

        if (this.redRotate <= 270 && this.redRotate > 180) {
          rotate = 280 - Math.abs(this.redRotate);
          // 红色方块当前运动方向的角度
          this.redRotate -= 10;
          angleSin = Math.sin(rotate * Math.PI / 180); // 10度的正弦值
          angleCos = Math.cos(rotate * Math.PI / 180); // 10度的余弦值
          tempTop = positionTop + angleCos * 500; // 移动的top值
          tempLeft = positionLeft + angleSin * 500; // 移动的top值
        }

        if (this.redRotate <= 180 && this.redRotate > 90) {
          rotate = 190 - Math.abs(this.redRotate);
          // 红色方块当前运动方向的角度
          this.redRotate -= 10;
          angleSin = Math.sin(rotate * Math.PI / 180); // 10度的正弦值
          angleCos = Math.cos(rotate * Math.PI / 180); // 10度的余弦值
          tempTop = positionTop - angleSin * 500; // 移动的top值
          tempLeft = positionLeft + angleCos * 500; // 移动的top值
        }

        if (this.redRotate <= 90 && this.redRotate > 0) {
          rotate = 100 - Math.abs(this.redRotate);
          // 红色方块当前运动方向的角度
          this.redRotate -= 10;
          angleSin = Math.sin(rotate * Math.PI / 180); // 10度的正弦值
          angleCos = Math.cos(rotate * Math.PI / 180); // 10度的余弦值
          tempTop = positionTop - angleCos * 500; // 移动的top值
          tempLeft = positionLeft - angleSin * 500; // 移动的top值
        }

        console.log(tempLeft);
        console.log(tempTop);
        $('.red-pos').stop().animate({left: tempLeft + 'px', top: tempTop + 'px'}, 20 * 1000, 'linear');
      },

      /**
       * red div move to right
       */
      redMoveRight: function () {

        this.clickCount++;
        if (this.firstClick == 1) {
          this.firstClickTime = new Date().getTime();
          this.firstClick = 2;
        }

        var positionLeft, // 相对于容器的left值
          positionTop, // 相对于容器的top值
          angleSin, // 正弦值
          angleCos, // 余弦值
          tempTop, // 移动top值
          tempLeft, // 移动left值
          rotate; // 当前偏移角度
        positionLeft = $('.red-pos').position().left;
        positionTop = $('.red-pos').position().top;

        if (this.redRotate >= 0 && this.redRotate < 90) {
          rotate = Math.abs(this.redRotate) + 10;
          // 红色方块当前运动方向的角度
          this.redRotate += 10;
          angleSin = Math.sin(rotate * Math.PI / 180); // 10度的正弦值
          angleCos = Math.cos(rotate * Math.PI / 180); // 10度的余弦值
          tempTop = positionTop - angleSin * 500; // 移动的top值
          tempLeft = positionLeft - angleCos * 500; // 移动的top值
        }

        if (this.redRotate >= 90 && this.redRotate < 180) {
          rotate = this.redRotate - 90;
          // 红色方块当前运动方向的角度
          this.redRotate += 10;
          angleSin = Math.sin(rotate * Math.PI / 180); // 10度的正弦值
          angleCos = Math.cos(rotate * Math.PI / 180); // 10度的余弦值
          tempTop = positionTop - angleCos * 500; // 移动的top值
          tempLeft = positionLeft + angleSin * 500; // 移动的top值
        }

        if (this.redRotate >= 180 && this.redRotate < 270) {
          rotate = Math.abs(this.redRotate) - 180;
          // 红色方块当前运动方向的角度
          this.redRotate += 10;
          angleSin = Math.sin(rotate * Math.PI / 180); // 10度的正弦值
          angleCos = Math.cos(rotate * Math.PI / 180); // 10度的余弦值
          tempTop = positionTop + angleSin * 500; // 移动的top值
          tempLeft = positionLeft + angleCos * 500; // 移动的top值
        }

        if (this.redRotate >= 270 && this.redRotate < 360) {
          rotate = Math.abs(this.redRotate) - 270;
          // 红色方块当前运动方向的角度
          this.redRotate += 10;
          if (this.redRotate == 360) {
            this.redRotate = 0
          }
          angleSin = Math.sin(rotate * Math.PI / 180); // 10度的正弦值
          angleCos = Math.cos(rotate * Math.PI / 180); // 10度的余弦值
          tempTop = positionTop + angleCos * 500; // 移动的top值
          tempLeft = positionLeft - angleSin * 500; // 移动的top值
        }

        console.log(tempLeft);
        console.log(tempTop);
        $('.red-pos').stop().animate({left: tempLeft + 'px', top: tempTop + 'px'}, 20 * 1000, 'linear');
      },

      /**
       * blue div move to bottom
       */
      blueMoveBottom: function () {
        this.clearTimer();
        this.timerInit();
        this.blueTop = this.blueTop + 5;
      },

      /**
       * blue div move to left
       */
      blueMoveLeft: function () {

        this.clickCount++;
        if (this.firstClick == 1) {
          this.firstClickTime = new Date().getTime();
          this.firstClick = 2;
        }

        var positionLeft, // 相对于容器的left值
          positionTop, // 相对于容器的top值
          angleSin, // 正弦值
          angleCos, // 余弦值
          tempTop, // 移动top值
          tempLeft, // 移动left值
          rotate; // 当前偏移角度
        positionLeft = $('.blue-pos').position().left;
        positionTop = $('.blue-pos').position().top;

        if (this.blueRotate == 0) {
          this.blueRotate = 360;
        }

        if (this.blueRotate <= 360 && this.blueRotate > 270) {
          rotate = 370 - Math.abs(this.blueRotate);
          // 蓝色方块当前运动方向的角度
          this.blueRotate -= 10;
          angleSin = Math.sin(rotate * Math.PI / 180); // 10度的正弦值
          angleCos = Math.cos(rotate * Math.PI / 180); // 10度的余弦值
          tempTop = positionTop - angleSin * 500; // 移动的top值
          tempLeft = positionLeft + angleCos * 500; // 移动的top值
        }

        if (this.blueRotate <= 270 && this.blueRotate > 180) {
          rotate = 280 - Math.abs(this.blueRotate);
          // 蓝色方块当前运动方向的角度
          this.blueRotate -= 10;
          angleSin = Math.sin(rotate * Math.PI / 180); // 10度的正弦值
          angleCos = Math.cos(rotate * Math.PI / 180); // 10度的余弦值
          tempTop = positionTop - angleCos * 500; // 移动的top值
          tempLeft = positionLeft - angleSin * 500; // 移动的top值
        }

        if (this.blueRotate <= 180 && this.blueRotate > 90) {
          rotate = 190 - Math.abs(this.blueRotate);
          // 蓝色方块当前运动方向的角度
          this.blueRotate -= 10;
          angleSin = Math.sin(rotate * Math.PI / 180); // 10度的正弦值
          angleCos = Math.cos(rotate * Math.PI / 180); // 10度的余弦值
          tempTop = positionTop + angleSin * 500; // 移动的top值
          tempLeft = positionLeft - angleCos * 500; // 移动的top值
        }

        if (this.blueRotate <= 90 && this.blueRotate > 0) {
          rotate = 100 - Math.abs(this.blueRotate);
          // 蓝色方块当前运动方向的角度
          this.blueRotate -= 10;
          angleSin = Math.sin(rotate * Math.PI / 180); // 10度的正弦值
          angleCos = Math.cos(rotate * Math.PI / 180); // 10度的余弦值
          tempTop = positionTop + angleCos * 500; // 移动的top值
          tempLeft = positionLeft + angleSin * 500; // 移动的top值
        }

        console.log(tempLeft);
        console.log(tempTop);
        $('.blue-pos').stop().animate({left: tempLeft + 'px', top: tempTop + 'px'}, 20 * 1000, 'linear');
      },

      /**
       * blue div move to right
       */
      blueMoveRight: function () {
        this.clickCount++;
        if (this.firstClick == 1) {
          this.firstClickTime = new Date().getTime();
          this.firstClick = 2;
        }

        var positionLeft, // 相对于容器的left值
          positionTop, // 相对于容器的top值
          angleSin, // 正弦值
          angleCos, // 余弦值
          tempTop, // 移动top值
          tempLeft, // 移动left值
          rotate; // 当前偏移角度
        positionLeft = $('.blue-pos').position().left;
        positionTop = $('.blue-pos').position().top;

        if (this.blueRotate >= 0 && this.blueRotate < 90) {
          rotate = Math.abs(this.blueRotate) + 10;
          // 蓝色方块当前运动方向的角度
          this.blueRotate += 10;
          angleSin = Math.sin(rotate * Math.PI / 180); // 10度的正弦值
          angleCos = Math.cos(rotate * Math.PI / 180); // 10度的余弦值
          tempTop = positionTop + angleSin * 500; // 移动的top值
          tempLeft = positionLeft + angleCos * 500; // 移动的top值
        }

        if (this.blueRotate >= 90 && this.blueRotate < 180) {
          rotate = this.blueRotate - 90;
          // 蓝色方块当前运动方向的角度
          this.blueRotate += 10;
          angleSin = Math.sin(rotate * Math.PI / 180); // 10度的正弦值
          angleCos = Math.cos(rotate * Math.PI / 180); // 10度的余弦值
          tempTop = positionTop + angleCos * 500; // 移动的top值
          tempLeft = positionLeft - angleSin * 500; // 移动的top值
        }

        if (this.blueRotate >= 180 && this.blueRotate < 270) {
          rotate = Math.abs(this.blueRotate) - 180;
          // 蓝色方块当前运动方向的角度
          this.blueRotate += 10;
          angleSin = Math.sin(rotate * Math.PI / 180); // 10度的正弦值
          angleCos = Math.cos(rotate * Math.PI / 180); // 10度的余弦值
          tempTop = positionTop - angleSin * 500; // 移动的top值
          tempLeft = positionLeft - angleCos * 500; // 移动的top值
        }

        if (this.blueRotate >= 270 && this.blueRotate < 360) {
          rotate = Math.abs(this.blueRotate) - 270;
          // 蓝色方块当前运动方向的角度
          this.blueRotate += 10;
          if (this.blueRotate == 360) {
            this.blueRotate = 0
          }
          angleSin = Math.sin(rotate * Math.PI / 180); // 10度的正弦值
          angleCos = Math.cos(rotate * Math.PI / 180); // 10度的余弦值
          tempTop = positionTop - angleCos * 500; // 移动的top值
          tempLeft = positionLeft + angleSin * 500; // 移动的top值
        }

        console.log(tempLeft);
        console.log(tempTop);
        $('.blue-pos').stop().animate({left: tempLeft + 'px', top: tempTop + 'px'}, 20 * 1000, 'linear');
      },

      /**
       * 答题
       */
      answerClick: function (e) {
        var _this = this;
        setTimeout(function () {
          _this.subject = $('.ques-item').attr('paper');
          console.log(_this.subject);
        }, 100)
        $(e.target).closest('.answer-item').addClass('active');
        var score = $(e.target).closest('.answer-item').attr('score');
        var paper = $(e.target).closest('.ques-item').attr('paper');
        var question_id = $(e.target).closest('.ques-item').attr('cid');
        this.answers.push({
          question_id: question_id,
          paper: paper,
          score: score
        })
        if (this.curIndex == 1) {
          this.startTime = new Date().getTime();
        }
        if (this.curIndex < this.total) {
          console.log('测试进行中')
          this.curIndex++;
          this.bar = Number(this.curIndex - 1) / Number(this.total) * 100;
          setTimeout(function () {
            $('.answer-item').removeClass('active');
          }, 100)
        } else {
          console.log('结束测试');
          this.bar = 100;
          this.endTime = new Date().getTime();//结束时间
          this.time = Number(this.endTime) - Number(this.startTime);
          this.submit();
        }

      },

      /**
       * 提交
       */
      submit: function () {
        for (var i = 1; i < 100; i++) {
          clearInterval(i);
        }
        this.time = Number(new Date().getTime()) - Number(this.startTime);
        this.space_time = Number(new Date().getTime()) - Number(this.startTime);
        this.$ajax.post("/api/result/cognition/space/add", {
            time: this.time,
            answers: sessionStorage.kongAnswers
//            answers: '[{"space_direction_deviation":21,"space_range_deviation":30,"space_response_latency":506,"space_reaction_frequency":13,"space_time":506}]'
          }, {
            timeout:3000,
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
              this.saveNode(2, 4);
              this.$router.push('/shengyaceping/rzqn/success/3?seq=' + this.seq);
              this.clearTimer();
            } else {
              this.layerMsg(data.msg);
            }
          }.bind(this),
          function (res) {
            this.layerMsg('网络错误,请重新提交');
          }.bind(this)
        );
      },

      /**
       * 定时器
       */
      timerInit: function () {
        var _this = this;
        _this.timer = setInterval(function () {
          _this.redLeft = _this.redLeft - 20;
          _this.blueLeft = _this.blueLeft + 20;
        }, 1000)
      },

      /**
       * 清除定时器
       */
      clearTimer: function () {
//        for (var i = 1; i < 100; i++) {
//          clearInterval(i);
//        }
        clearInterval(this.timer);
      }

    }

  }
</script>

<style scoped>
  .seq-wrapper {
    position: absolute;
    bottom: 10px;
    right: 10px;
    font-size: 17px;
  }
</style>

<style>
  .evalu-nav {
    background: #333;
    opacity: 1;
  }
</style>
