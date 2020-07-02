<?php
$code = $_GET['code'];
//$APPID = 'wx1fc92568d8a7239f';
//$APPSECRET = '8b241df9b777e882db615a9bc0647eb3';
if(!isset($_GET['a'])){
    $APPID = 'wx6e945215eb852dea';
    $APPSECRET = 'f382a24e8b3972c9697c130d873b6c93';
}
elseif($_GET['a'] == 26){//秦皇岛学马  秦皇岛京培教育  20200520前
    $APPID = 'wxb7474010b0a7e755';
    $APPSECRET = 'af73278b2e2ba43d97a51bf464c3d36b';
}
elseif($_GET['a'] == 33){//鸿运志愿升学规划 33  20200520前
    $APPID = 'wx00198e10ee84712a';
    $APPSECRET = '38ff96ddc87f39d4f07ec9ba76dda1f1';
}
elseif($_GET['a'] == 35){//桃源育英学堂 35  20200520前
    $APPID = 'wx6a5237ff17aa433a';
    $APPSECRET = '2f8e42c010e9c5cab76bdd0456b30e78';
}
elseif($_GET['a'] == 38){//湖南知否教育 38   20200520前
    $APPID = 'wx58eecb661c0c08e3';
    $APPSECRET = '6ed9773feff86d1c92966a0232787dda';
}
elseif($_GET['a'] == 40){//山东寿光学马 40
    $APPID = 'wx6ec271fc28fd5f81';
    $APPSECRET = '36833b3dbac341f240c1c2ec291f5450';
}
elseif($_GET['a'] == 41){//重庆点划教育 41  20200520
    $APPID = 'wx4ac6fd054be821ce';
    $APPSECRET = '5bb67ccd169eaffb052b6d49c15d4656';
}
elseif($_GET['a'] == 42){//秦皇岛华公教育  20200520前
    $APPID = 'wxf21cdbfe23bf99ae';
    $APPSECRET = 'ebdc0dc86b65441382356b4567bd7155';
}
elseif($_GET['a'] == 46){//好前途教育46  20200520前
    $APPID = 'wxcab26f8d05630740';
    $APPSECRET = '006f356e1bf470a93a3c4a024598abfa';
}
elseif($_GET['a'] == 51){//吉林ZNZ生涯 ZNZ学业生涯指导中心  51    20200520
    $APPID = 'wx5766245df1b661b1';
    $APPSECRET = 'd517cb7cb102a692f1c89ad433c8f77b';
}
elseif($_GET['a'] == 54){//河南郑州志翔远达v2.0  54  20200520
    $APPID = 'wx27a180543accfb57';
    $APPSECRET = 'd0747327c5bc6233a636001238843546';
}
elseif($_GET['a'] == 55){//河北廊坊合作商  河北廊坊 学马教育河北分校 毓秀升学与职业生涯规划 55  20200520前
    $APPID = 'wx4446b913bf0b2730';
    $APPSECRET = '100bcc5ffb746abde4acb64ba98b46b3';
}
elseif($_GET['a'] == 57){//长沙师伯乐 湖南师伯乐教育  57  20200520前
    $APPID = '';
    $APPSECRET = '';
}
elseif($_GET['a'] == 71){//河北衡水瀚霖院教育  71  20200520前
    $APPID = 'wx25937ca97e696bbc';
    $APPSECRET = '87a14d298557407d7429d0ff008882ed';
}
elseif($_GET['a'] == 72){//长沙辰才 72  湖南长沙辰才教育科技有限公司   20200520
    $APPID = 'wx83553d3087147f95';
    $APPSECRET = '511b808e86191b0fea72a988a1d9d181';
}
elseif($_GET['a'] == 75){//广东揭阳市好生涯教育咨询有限公司 好生涯规划 75
    $APPID = 'wxc98e61ad775db89f';
    $APPSECRET = '2abfcacf59a878f54d29a1b54cef77ce';
}
elseif($_GET['a'] == 77){//点亮未来教育小程序  点亮未来生涯规划 77  20200520前
    $APPID = 'wxc16c87a449de8c3b';
    $APPSECRET = '0090ab221bc6c37c26dd482bebca3fab';
}
elseif($_GET['a'] == 79){//河北省泊头市孜孜教育 79  20200520前
    $APPID = 'wx8f7be41e1acc8f5d';
    $APPSECRET = 'c90be3d14ca3242d592e480674a02b7f';
}
elseif($_GET['a'] == 81){//新疆伊宁市智航企业管理有限公司 新疆伊犁 81
    $APPID = 'wx284fa5119778d596';
    $APPSECRET = 'e2442c420bfa65c95376d696ab5e2b80';
}
elseif($_GET['a'] == 82){//沈阳迈威教育小程序 82
    $APPID = 'wxce3dc3584c3a7b85';
    $APPSECRET = '5d556653f0e8515ad62a8282fa5aa5bc';
}
elseif($_GET['a'] == 85){//天才智能教育 85
    $APPID = 'wx85af0eeb3a0a7bb3';
    $APPSECRET = '2bc86671920c8865001a317bd3a4e2ff';
}
else{
    $APPID = 'wx6e945215eb852dea';
    $APPSECRET = 'f382a24e8b3972c9697c130d873b6c93';
}


//$res = file_get_contents("https://api.weixin.qq.com/sns/oauth2/access_token?appid=$APPID&secret=$APPSECRET&js_code=$code&grant_type=authorization_code");
$res = file_get_contents("https://api.weixin.qq.com/sns/jscode2session?appid=$APPID&secret=$APPSECRET&js_code=$code&grant_type=authorization_code");
$res_acc = json_decode($res,true);

//var_dump($res);
//var_dump($res_acc);

$OPENID = $res_acc['openid'];

echo json_encode(array("code"=>200,"openid"=>$OPENID));
