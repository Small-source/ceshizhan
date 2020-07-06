<?php
//$_SESSION['OPENID'] = "";
$_SESSION['OPENID'] = "o11qK0Z8wQagpz0iATmrw3zsZqUM";
if(isset($_SESSION['OPENID']) && $_SESSION['OPENID']) {
    $OPENID = $_SESSION['OPENID'];
}else{
    if(isset($_GET['code']) && $_GET['code']){
        $code = $_GET['code'];
        $APPID = 'wxea1c1a0f5c62a23e';
        $APPSECRET = '283d1037c27301a1ce194b8a9a78975f';
        $res = file_get_contents("https://api.weixin.qq.com/sns/oauth2/access_token?appid=$APPID&secret=$APPSECRET&code=$code&grant_type=authorization_code");
        $res_acc = json_decode($res,true);
        $ACCESS_TOKEN = $res_acc['access_token'];
        $OPENID = $res_acc['openid'];
        $_SESSION['OPENID'] = $OPENID;
    }else{
        $id = $_GET['id'];//本地session不使用此sid   此sid只用于接口使用
        $APPID = 'wxea1c1a0f5c62a23e';
        $REDIRECT_URI='https://m.xuematech.com/pay.php?id='.$id;
        $scope='snsapi_base';
        $state = time();
        $url='https://open.weixin.qq.com/connect/oauth2/authorize?appid='.$APPID.'&redirect_uri='.urlencode($REDIRECT_URI).'&response_type=code&scope='.$scope.'&state='.$state.'#wechat_redirect';
        header("Location:".$url);
    }
}

?>

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <title>填写信息</title>
    <meta name="viewport" content="width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0,user-scalable=no" id="viewport" />
    <!-- 清除默认样式 -->
    <link rel="stylesheet" type="text/css" href="./pay/css/reset.css">
    <!-- 可以引入base.css原子类 common.css公共类 -->
    <link href="./pay/css/message.css" rel="stylesheet">

    <style>
        .loading {
            width: 100%;
            height: 100%;
            position: fixed;
            left: 0;
            top: 0;
            background: rgba(0,0,0,0.5);
            display: none;
            z-index: 99;
        }
        .loading_inner {
            width: 60px;
            height: 60px;
            position: absolute;
            left: 50%;
            top: 50%;
            background: url(./loading.gif) rgba(0,0,0,0.8) no-repeat center center;
            border-radius: 6px;
            margin: -30px 0 0 -30px;
        }
    </style>

</head>

<body>
<div class="message">
    <div class="header">
        <span id="school" class="header_tit1"></span><br>
        <span id="title" class="header_tit2"></span>
    </div>
    <!-- 提高成绩的好助手 -->
    <div class="tigao">
        <p class="title" id="slogan"></p>
        <p class="xiangqing" id="synopsis"></p>
    </div>
    <!-- 填写信息 -->
    <div class="tianxie">
        <p class="title">填写信息</p>
        <div class="form">

            <input type="text" placeholder="请填写孩子的名字" class="kuang" name="name" id="name">
            <div class="kuang" style="padding-left:0;width: 5.66rem;">
                <select name="nianji" id="nianji" class="sel" style="padding-left:0.4rem;width: 5.66rem;" onchange="select_price(this);">

                </select>
                <div class="arrow"></div>
            </div>
            <input type="text" placeholder="请填写孩子的班级" class="kuang" name="banji" id="banji">
            <input type="text" placeholder="请填写孩子家长的联系方式" class="kuang" name="tel" id="tel">

        </div>
    </div>
    <p class="zixun">咨询热线：</p>
    <p class="teacher" id="contacts1"></p>
    <p class="teacher" id="contacts2"></p>
</div>
<footer class="footer">
    <div class="left" id="price_div">

    </div>
    <button class="buy" id="pay">立即购买</button>
</footer>

<div class="loading">
    <div class="loading_inner"></div>
</div>

</body>
<script type="text/javascript" src="./pay/js/rem.js"></script>
<script type="text/javascript" src="./pay/js/jquery.min.js"></script>
<!-- <script type="text/javascript" src="http://m.ymtest.com/js/zeptominjs"></script>
<script type="text/javascript" src="http://m.ymtest.com/js/commonjs"></script> -->
<script type="text/javascript">
    var price_list = [];
    var jsApiParameters = {};
    function select_price(obj){
        for(i in price_list){
            if(price_list[i].id == $(obj).val()){
                $("#price_div").html('<span class="quanke">￥ ('+price_list[i].grade+')：</span> <span id="money" class="money">'+price_list[i].price+'</span><span class="money">/'+price_list[i].useTime+'</span>');
            }
        }
    }

    $(function() {
        //获取URL参数
        function getQueryString(name) {
            var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
            var r = window.location.search.substr(1).match(reg);
            if (r != null) return unescape(r[2]);
            return null;
        }
        // var code = getQueryString("code");
        // alert("code=" + code)

        var goodsId = getQueryString("id");
        //alert("goodsId=" + goodsId)

        $.ajax({
            url:"/papi/pay/getWxPaymentInfo", //你的路由地址
            type:"post",
            data : {'id':goodsId},
            timeout:30000,
            success:function(json){
                console.log(json);
                if(json.code == 2000){
                    $("#school").html(json.data.school);
                    $("#title").html(json.data.title);
                    $("#slogan").html(json.data.slogan);
                    $("#synopsis").html(json.data.synopsis);
                    if(json.data.contact1) {
                        if (json.data.contact1Wechat == 1) {
                            $("#contacts1").html(json.data.contact1 + "&nbsp;&nbsp;" + json.data.contact1Tel + "（微信同号）");
                        } else {
                            $("#contacts1").html(json.data.contact1 + "&nbsp;&nbsp;" + json.data.contact1Tel);
                        }
                    }
                    if(json.data.contact2) {
                        if (json.data.contact2Wechat == 1) {
                            $("#contacts2").html(json.data.contact2 + "&nbsp;&nbsp;" + json.data.contact2Tel + "（微信同号）");
                        } else {
                            $("#contacts2").html(json.data.contact2 + "&nbsp;&nbsp;" + json.data.contact2Tel);
                        }
                    }
                    if(json.data.price){
                        price_list = json.data.price;
                        var nianji_html = "";
                        for(i in json.data.price){
                            nianji_html += '<option value="'+json.data.price[i].id+'">'+json.data.price[i].grade+'</option>';
                        }
                        $("#nianji").html(nianji_html);
                        $("#price_div").html('<span class="quanke">￥ ('+json.data.price[0].grade+')：</span> <span id="money" class="money">'+json.data.price[0].price+'</span><span class="money">/'+json.data.price[0].useTime+'</span>');
                    }
                }
            },
            error:function(json){
                return false;
            }
        });

        $("#pay").click(function() {
            pay();
        })

        //下单支付
        function pay() {
            var priceId = $("#nianji").val();
            var student_name = $("#name").val();
            var student_tel = $("#tel").val();
            var student_class = $("#banji").val();

            if(!student_name){
                alert("请输入正确的姓名");
                return false;
            }
            if(!student_class){
                alert("请输入正确的班级");
                return false;
            }
            if (!(/^1[34578]\d{9}$/.test(student_tel))) {
                alert("请输入正确的手机号码");
                return false;
            }

            $(".loading").show();

            $.ajax({
                url:"/papi/pay/wxPay", //你的路由地址
                type:"post",
                data : {'goodsId':goodsId,'priceId':priceId,'name':student_name,'tel':student_tel,'class':student_class,'openId':'<?php echo $OPENID; ?>'},
                timeout:30000,
                success:function(json){
                    jsApiParameters = JSON.parse(json.data);
                    callpay();
                },
                error:function(json){
                    if (json.status == 422) {
                        var json=JSON.parse(json.responseText);
                        json = json.errors;
                        var msg = '';
                        for ( var item in json) {
                            msg += json[item][0] + ',';
                        }
                        msg = (msg .substring(msg .length - 1) == ',') ? msg .substring(0, msg .length - 1) : msg ;
                        alert(msg);
                    } else {
                        //alert('服务器连接失败');
                        return ;
                    }
                    $(".loading").hide();
                }
            });
        }
    })


    var nianji = document.getElementById('nianji');
    var money = document.getElementById("money");
    var names = document.getElementById("name");
    var banji = document.getElementById("banji");
    var tel = document.getElementById("tel");

    var index = 0;
    // console.log(index);
    nianji.onclick = function() {
        index = nianji.selectedIndex;
        // console.log(index);
        if (index === 0) {
            money.innerHTML = "430元/半年"
        } else if (index === 1) {
            money.innerHTML = "340元/半年"
        } else if (index === 3) {
            money.innerHTML = "340元/半年"
        }
    }
    names.onfocus = function() {
        this.placeholder = '';
    }
    banji.onfocus = function() {
        this.placeholder = '';
    }
    tel.onfocus = function() {
        this.placeholder = '';
    }
    names.onblur = function() {
        if (this.value == '') {
            this.placeholder = '请正确填写孩子的名字';
            return false;
        }
    }
    banji.onblur = function() {
        if (this.value == '') {
            this.placeholder = '请填写孩子的班级';
            return false;
        }
    }
    tel.onblur = function() {
        this.placeholder = '请填写孩子家长的联系方式';
        var number = this.value;
        if (!(/^1[34578]\d{9}$/.test(number))) {
            alert("手机号码有误，请重填");
            return false;
        }
    }

</script>

<script type="text/javascript">
    //调用微信JS api 支付
    function jsApiCall()
    {
        WeixinJSBridge.invoke(
            'getBrandWCPayRequest',
            jsApiParameters,
            function(res){
                WeixinJSBridge.log(res.err_msg);
                $(".loading").hide();
                //alert(res.err_code+res.err_desc+res.err_msg);
            }
        );
    }

    function callpay()
    {
        if (typeof WeixinJSBridge == "undefined"){
            if( document.addEventListener ){
                document.addEventListener('WeixinJSBridgeReady', jsApiCall, false);
            }else if (document.attachEvent){
                document.attachEvent('WeixinJSBridgeReady', jsApiCall);
                document.attachEvent('onWeixinJSBridgeReady', jsApiCall);
            }
        }else{
            jsApiCall();
        }
    }
</script>

</html>