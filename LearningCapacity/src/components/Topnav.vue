<!-- <template>
    <div class="Topnav">
        <div class="inner">
            <h1 class="logo"><a href="#/home">学马教育</a></h1>
            <ul class="lis-nav">
                <li class="lis"><a href="/home" :class="activeNav === 'home' ? 'active' : ''">首页</a></li>
                <li class="lis">
                  <a href="javascript:void(0)" :class="activeNav === 'xingaokao' ? 'active' : ''">新高考</a>
                  <ul class="link">
                    <li class="link-li"><a href="/shengyaceping">生涯测评</a></li>
                    <li class="link-li"><a href="/mubiaotansuo/yuanxiaoku">目标探索</a></li>
                    <li class="link-li"><a href="/xuankejuece">选科决策</a></li>
                  </ul>
                </li>
                <li class="lis"><a href="/zizhuxuanba" :class="activeNav === 'zizhuxuanba' ? 'active' : ''">自主选拔</a></li>
                <li class="lis"><a href="/zhiyuantianbao" :class="activeNav === 'zhiyuantianbao' ? 'active' : ''">自愿填报</a></li>
                <li class="lis">
                  <a href="javascript:void(0)" :class="activeNav === 'zaixianketang' ? 'active' : ''">在线课堂</a>
                  <ul class="link">
                    <li class="link-li"><a href="/zizhaobishi">自招笔试</a></li>
                    <li class="link-li"><a href="/zizhaomianshi">自招面试</a></li>
                  </ul>
                </li>
            </ul>
        </div>
    </div>
</template>
<style type="text/css" lang='less' scoped>
.Topnav {
  width: 100%;
  height: 80px;
  line-height: 80px;
  .inner {
    width: 1200px;
    margin: 0 auto;
  }
  .logo {
    width: 180px;
    height: 80px;
    float: left;

  }
  .lis-nav {
    width: 1020px;
    // margin: 0 auto;
    // display: flex;
    height:80px;
    // text-align: center;
    float: left;
    .lis {
      float: left;
      height: 100%;
      margin-right: 50px;
      color: #333;
      font-size: 16px;
      position: relative;
      background-color: #fff;
      &:hover {
        .link {
            display: block;
            bottom: -300px;
            z-index: 1000;
            transition: all .5s;
        }
      }
      &:last-child {
         &:hover {
          .link {
              bottom: -200px;
              transition: all .5s;
          }
        }
      }
      a {
        display: block;
        width: 100%;
        height: 100%;
        color: #333;
        font-size: 16px;
        line-height: 80px;
        background-color: #fff;
        &:hover {
          color: #2c8fff;
        }
      }
      .active {
        display: block;
        width: 100%;
        height: 100%;
        color: #2c8fff;
        font-size: 18px;
        display: block;
        width: 100%;
        height: 100%;
        color: #333;
        font-size: 18px;
        line-height: 100px;
        z-index: 1000;
        background-color: #fff;
        &:hover {
          color: #2c8fff;
        }
      }
      .link {
        width: 200px;
        // height: 0px;
        position: absolute;
        display: none;
        // height: 300px;
        bottom: 0px;
        // z-index: -100;
        .link-li {
          width: 200px;
          height: 100px;
          // border: 1px solid #000;
          // text-align: center;
          a {
            display: block;
            width: 100%;
            height: 100%;
            color: #333;
            font-size: 18px;
            line-height: 100px;
            z-index: 100;
            &:hover {
              color: #2c8fff;
            }
          }
        }
      }
    }
  }

}
</style>
<script>
  export default {
    props: ['activeNav'],
    data() {
      return {
      }
    },
    methods: {
    },
    created() {
      
    }
  }
</script> -->