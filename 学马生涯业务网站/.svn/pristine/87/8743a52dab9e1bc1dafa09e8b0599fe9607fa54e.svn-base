/**
 * @desc 迷宫游戏
 * @author zhangBoYuan
 * @options 参数说明
 */

/**
 * @options
 * @el 画布
 * @time 游戏时间
 * @wallCollision 碰壁次数
 * @deadEnd 死胡同
 * @D  D的按键次数
 * @K  K的按键次数
 * @type simple(简单)|complex(复杂)
 */
class Maze{
  constructor(options){
    this.type=options.type;
    this.canvas=document.querySelector(options.el);
    this.time=document.querySelector(options.time);
    this.wallCollision =document.querySelector(options.wallCollsion);
    this.deadEnd=document.querySelector(options.deadEnd);
    this.D=document.querySelector(options.D);
    this.K=document.querySelector(options.K);
    this.vue=options.vue
    this.ctx=this.canvas.getContext('2d');
    //定义运动方向数组 下，左下，左，左上，上，右上，右，右下
    this.directionArray=['down','leftDown','left','leftUp','up','rightUp','right','rightDown'];
    //定义方向初始指针
    this.directionNumber=0;
    //定义初始方向为下
    this.direction=this.directionArray[this.directionNumber];
    //定义线条运动绘制开关/碰壁开关/死胡同开关
    this.lineFlag=true;
    this.touchFlag=false;
    this.deadEndFlag=true;
    this.mounted();
    this.oldtime=new Date().getTime();
  }
  // 执行事件逻辑
  mounted(){
    if(this.type=='simple'){
      this.position={
        left:226,
        top:226
      }
    }else if(this.type=='complex'){
      this.position={
        left:212,
        top:186
      }
      this.canvas.width=434;
      this.canvas.height=405;
    }
    this.drawingMazes(this.type,this.ctx);
    this.keyNumbers(this.D,this.K);
    this.lineBlock(10);
    this.sportLine(this.ctx,this.direction);
    this.hide(this.ctx);
    this.t=setInterval(()=>{
      this.hide(this.ctx);
      this.sportLine(this.ctx,this.direction);
    },150)
  }
  //D,K按键次数
  keyNumbers(D,K){
    window.onkeydown=(e)=>{
        setTimeout(()=>{
            e.keyCode==68&&(D.innerHTML=parseInt(D.innerHTML)+1)&&this.sportDirection('K',this.direction)
            e.keyCode==75&&(K.innerHTML=parseInt(K.innerHTML)+1)&&this.sportDirection('D',this.direction)
            this.lineFlag=true;
        },300)
    }
  }
  //绘制迷宫
  drawingMazes(type,ctx){
    if(type=='simple'){
      ctx.lineWidth=8;
      ctx.strokeStyle='black';
      ctx.fillStyle="black";
      ctx.strokeRect(4,4,438,438)
      ctx.strokeRect(72,72,306,306)
      ctx.strokeRect(132,132,184,184)
      ctx.fillRect(76,312,52,8)
      ctx.fillRect(380,68,58,8)
      ctx.fillRect(258,136,6,48)
      ctx.lineWidth=6
      ctx.strokeRect(187,187,74,74)
      ctx.beginPath();
      ctx.lineWidth=8;
      ctx.fillStyle="white";
      ctx.fillRect(438,200,8,48)
      ctx.fillRect(68,320,8,48)
      ctx.fillRect(202,128,48,8)
      ctx.fillRect(202,258,48,6)
    }
    if(type=='complex'){
      ctx.lineWidth=4;
      ctx.strokeStyle='black';
      ctx.fillStyle="black";
      ctx.strokeRect(2,2,428,398);
      ctx.strokeRect(34,34,366,334);
      ctx.strokeRect(66,66,304,272);
      ctx.strokeRect(96,96,240,210);
      ctx.strokeRect(128,128,118,120);
      ctx.fillRect(4,180,30,4)
      ctx.fillRect(36,220,30,4)
      ctx.fillRect(98,126,30,4)
      ctx.fillRect(246,126,62,4)
      ctx.fillRect(156,156,28,4)
      ctx.fillRect(156,200,28,4)
      ctx.fillRect(182,220,16,4)
      ctx.fillRect(228,220,20,4)
      ctx.fillRect(68,244,26,4)
      ctx.fillRect(98,274,150,4)
      ctx.fillRect(274,274,62,4)
      ctx.fillRect(304,200,94,4)
      ctx.fillRect(274,156,30,4)
      ctx.fillRect(276,220,30,4)
      ctx.fillRect(182,180,62,4)

      ctx.fillRect(66,366,4,32)
      ctx.fillRect(200,4,4,32)
      ctx.fillRect(156,156,4,90)
      ctx.fillRect(182,200,4,20)
      ctx.fillRect(212,156,4,26)
      ctx.fillRect(274,156,4,94)
      ctx.fillRect(304,130,4,30)
      ctx.fillRect(304,180,4,20)
      ctx.fillRect(304,220,4,58)
      ctx.fillRect(182,274,4,30)
      ctx.fillRect(156,336,4,30)
      ctx.fillRect(244,336,4,30)
      ctx.fillRect(368,336,4,30)
      ctx.fillRect(398,370,4,30)
      ctx.fillStyle="white";
      ctx.fillRect(32,150,4,30)
      ctx.fillRect(32,224,4,30)
      ctx.fillRect(64,172,4,30)
      // ctx.fillRect(94,172,4,30)
      ctx.fillRect(94,248,4,26)
      ctx.fillRect(334,174,4,26)
      ctx.fillRect(334,204,4,26)
      ctx.fillRect(398,224,4,26)
      ctx.fillRect(244,156,4,24)

      ctx.fillRect(204,32,28,4)
      ctx.fillRect(4,398,28,4)
      ctx.fillRect(98,304,30,4)
      ctx.fillRect(160,336,28,4)
      ctx.fillRect(160,336,28,4)
      ctx.fillRect(276,336,28,4)
      ctx.fillRect(128,366,28,4)
      ctx.fillRect(372,366,26,4)
    }
    ctx.lineWidth=2;
  }
  //隐藏死胡同区域
  hide(ctx){
    if(this.type=='simple'){
      ctx.lineWidth=2;
      ctx.beginPath();
      ctx.fillStyle="rgb(255,255,254)";
      ctx.fillRect(250,264,2,48);
      ctx.fillStyle="rgb(255,255,253)"
      ctx.fillRect(200,76,2,52)
      ctx.fillStyle="rgb(255,255,252)"
      ctx.fillRect(8,318,60,2)
      ctx.fillRect(382,198,56,2)
      // 结束线
      ctx.fillStyle="rgb(255,255,251)"
      ctx.fillRect(444,200,2,48)
    }
    if(this.type=='complex'){
      ctx.beginPath();
      //左进右
      ctx.fillStyle='rgb(255,255,254)';
      ctx.fillRect(228,224,2,22)
      ctx.fillRect(274,250,2,24)
      ctx.fillRect(232,36,2,28)
      ctx.fillRect(32,370,2,28)
      //右进左
      ctx.fillStyle='rgb(255,255,253)';
      ctx.fillRect(196,224,2,22)
      ctx.fillRect(182,130,2,26)
      ctx.fillRect(182,130,2,26)
      ctx.fillRect(34,150,2,30)
      ctx.fillRect(126,370,2,28)
      //下进上
      ctx.fillStyle='rgb(255,255,252)';
      ctx.fillRect(248,154,26,2)
      ctx.fillRect(98,246,28,2)
      ctx.fillRect(98,306,30,2)
      ctx.fillRect(98,306,30,2)
      ctx.fillRect(308,158,26,2)
      ctx.fillRect(372,222,26,2)
      ctx.fillRect(4,222,28,2)
      //上进下
      ctx.fillStyle='rgb(255,255,251)';
      ctx.fillRect(248,274,26,2)
      ctx.fillRect(160,336,28,2)
      ctx.fillRect(276,336,28,2)
      ctx.fillRect(308,230,26,2)
      ctx.fillRect(68,202,26,2)
      ctx.fillRect(402,250,26,2)
      ctx.fillRect(36,202,28,2)
      //结束线
      ctx.fillStyle='rgb(255,255,250)';
      ctx.fillRect(4,400,28,2)
    }
  }
  //定义线条块数，以及各个块数定位
  lineBlock(number){
    this.block=[];
    this.blocklength=20/number;
    for(let i=0;i<number;i++){
      this.block[i]=[];
      this.block[i][0]=this.position.left;
      this.block[i][1]=this.position.top+this.blocklength*i;
    }
  }
  //线条运动方向
  sportDirection(item,direction){
    item=='D'&&(this.directionNumber=this.directionNumber==7?0:this.directionNumber+1);
    item=='K'&&(this.directionNumber=this.directionNumber==0?7:this.directionNumber-1);
    this.direction=this.directionArray[this.directionNumber];
  }
  //运动的线条
  sportLine(ctx,direction) {
    if(this.lineFlag){
      ctx.beginPath();
      ctx.fillStyle='white';
      ctx.fillRect(this.block[0][0],this.block[0][1],2,2)
    }
    ctx.beginPath();
    ctx.fillStyle = 'red';
    let len=this.block[this.block.length-1];
    //方向向上运动逻辑
    if (direction == 'down') {
      this.testing(len[0],len[1]+2);
      if(this.lineFlag){
        this.block.push([len[0],len[1]+2])
        this.block.shift();
        this.touchFlag=true;
      }
    }
    //左下
    if (direction == 'leftDown') {
      this.testing(len[0]-2,len[1]+2);
      if(this.lineFlag){
        this.block.push([len[0]-2,len[1]+2])
        this.block.shift();
        this.touchFlag=true;
      }
    }
    //左
    if ( direction == 'left'){
      this.testing(len[0]-2,len[1])
      if(this.lineFlag){
        this.block.push([len[0]-2,len[1]])
        this.block.shift();
        this.touchFlag=true;
      }
    }
    //左上
    if ( direction == 'leftUp'){
      this.testing(len[0]-2,len[1]-2)
      if(this.lineFlag){
        this.block.push([len[0]-2,len[1]-2])
        this.block.shift()
        this.touchFlag=true;
      }
    }
    //上
    if ( direction == 'up'){
      this.testing(len[0],len[1]-2)
      if(this.lineFlag){
        this.block.push([len[0],len[1]-2])
        this.block.shift()
        this.touchFlag=true;
      }
    }
    //右上
    if ( direction == 'rightUp'){
      this.testing(len[0]+2,len[1]-2)
      if(this.lineFlag){
        this.block.push([len[0]+2,len[1]-2])
        this.block.shift();
        this.touchFlag=true;
      }
    }
    //右
    if ( direction == 'right'){
      this.testing(len[0]+2,len[1])
      if(this.lineFlag){
        this.block.push([len[0]+2,len[1]])
        this.block.shift();
        this.touchFlag=true;
      }
    }
    //右下
    if ( direction == 'rightDown'){
      this.testing(len[0]+2,len[1]+2)
      if(this.lineFlag){
        this.block.push([len[0]+2,len[1]+2])
        this.block.shift()
        this.touchFlag=true;
      }
    }
    this.block.forEach(arr=>{
      ctx.fillRect(arr[0],arr[1],2,2)
    });
  }
  //碰壁检测
  testing(left,top){
    //获取位置颜色信息
    let myColor = this.ctx.getImageData(left,top,2,2);
    let data=Array.prototype.slice.call(myColor.data)
    //判断碰壁
    if(/^000255/.test(data.join(""))){
      this.lineFlag=false;
      if(this.touchFlag){
        this.wallCollision.innerHTML=parseInt(this.wallCollision.innerHTML)+1;
        this.touchFlag=false;
      }
    }else{
      this.touchFlag=true;
    }
    // 练习模式
    if(this.type=='simple'){
      //判断死胡同1
      if(/255255254/.test(data.join(""))){
        if(this.deadEndFlag&&(this.direction=="right"||this.direction=="rightUp"||this.direction=="rightDown")){
          this.deadEnd.innerHTML=parseInt(this.deadEnd.innerHTML)+1;
          this.deadEndFlag=false;
        }
        if(!this.deadEndFlag&&(this.direction=="left"||this.direction=="leftUp"||this.direction=="leftDown")){
          this.deadEndFlag=true;
        }
      }
      //判断死胡同2
      if(/255255253/.test(data.join(""))){
        if(this.deadEndFlag&&(this.direction=="left"||this.direction=="leftUp"||this.direction=="leftDown")){
          this.deadEnd.innerHTML=parseInt(this.deadEnd.innerHTML)+1;
          this.deadEndFlag=false;
        }
        if(!this.deadEndFlag&&(this.direction=="right"||this.direction=="rightUp"||this.direction=="rightDown")){
          this.deadEndFlag=true;
        }
      }
      //判断死胡同3,4
      if(/255255252/.test(data.join(""))){
        if(this.deadEndFlag&&(this.direction=="leftUp"||this.direction=="up"||this.direction=="rightUp")){
          this.deadEnd.innerHTML=parseInt(this.deadEnd.innerHTML)+1;
          this.deadEndFlag=false;
        }
        if(!this.deadEndFlag&&(this.direction=="leftDown"||this.direction=="down"||this.direction=="rightDown")){
          this.deadEndFlag=true;
        }
      }
      //判断是否成功
      if(/255255251/.test(data.join(""))){
          clearInterval(this.t);
          this.submitMaze();
      }
    }
    //测试模式
    if(this.type=='complex'){
      //左进右
      if(/255255254/.test(data.join(""))){
        if(this.deadEndFlag&&(this.direction=="rightUp"||this.direction=="right"||this.direction=="rightDown")){
          this.deadEnd.innerHTML=parseInt(this.deadEnd.innerHTML)+1;
          this.deadEndFlag=false;
        }
        if(!this.deadEndFlag&&(this.direction=="leftUp"||this.direction=="left"||this.direction=="leftDown")){
          this.deadEndFlag=true;
        }
      }
      //右进左
      if(/255255253/.test(data.join(""))){
        if(this.deadEndFlag&&(this.direction=="leftUp"||this.direction=="left"||this.direction=="leftDown")){
          this.deadEnd.innerHTML=parseInt(this.deadEnd.innerHTML)+1;
          this.deadEndFlag=false;
        }
        if(!this.deadEndFlag&&(this.direction=="rightUp"||this.direction=="right"||this.direction=="rightDown")){
          this.deadEndFlag=true;
        }
      }
      //下进上
      if(/255255252/.test(data.join(""))){
        console.log(data.join(""))
        if(this.deadEndFlag&&(this.direction=="leftUp"||this.direction=="up"||this.direction=="rightUp")){
          this.deadEnd.innerHTML=parseInt(this.deadEnd.innerHTML)+1;
          this.deadEndFlag=false;
        }
        if(!this.deadEndFlag&&(this.direction=="leftDown"||this.direction=="down"||this.direction=="rightDown")){
          this.deadEndFlag=true;
        }
      }
      //上进下
      if(/255255251/.test(data.join(""))){
        console.log(data.join(""))
        if(this.deadEndFlag&&(this.direction=="leftDown"||this.direction=="down"||this.direction=="rightDown")){
          this.deadEnd.innerHTML=parseInt(this.deadEnd.innerHTML)+1;
          this.deadEndFlag=false;
        }
        if(!this.deadEndFlag&&(this.direction=="leftUp"||this.direction=="up"||this.direction=="rightUp")){
          this.deadEndFlag=true;
        }
      }
      //判断是否成功
      if(/255255250/.test(data.join(""))){
          clearInterval(this.t);
          this.submitMaze();
      }
    }
  }
  //清除画布
  clear(){
    this.ctx.clearRect(0,0,this.canvas.width,this.canvas.height);
  }
  //提交数据
  submitMaze(){
      if(this.type=='simple'){
          this.vue.$router.push('/shengyaceping/rzqn/success/72?type=test')
      }
      if(this.type=='complex'){
        var _this=this.vue
          var times=new Date().getTime()-this.oldtime;
          this.vue.$http.post("/api/result/cognition/diy/add", {
                  time:times,
                  diy_time: times,// number	是	测试总时间		5000
                  dead_nums:Number(this.deadEnd.innerHTML),// number	进入死胡同次数		590
                  diy_nums: Number(this.wallCollision.innerHTML),// 	number	是	碰壁次数
                  type:2
              }, {
                  headers: {
                      "token": sessionStorage.getItem('token')
                  }
              },
              {
                  emulateJSON: true
              }
          ).then(
              function (res) {
                  // 请求成功的结果
                  console.log(res.body);
                  var data = res.body;
                  if (data.code == 0) {
                      _this.layerMsg('测试成功!')
                      _this.saveNode(2, 8);
                      _this.$router.push('/shengyaceping/rzqn/success/72')
                  } else {
                      _this.layerMsg(data.msg);
                  }
              },
              function (res) {
                  console.log('接口响应失败，请联系网站管理人员');
              }
          );
        }
      }
  }