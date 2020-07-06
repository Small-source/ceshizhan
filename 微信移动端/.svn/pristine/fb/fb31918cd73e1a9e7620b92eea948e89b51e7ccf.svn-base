<?php
//ini_set ( 'session.save_path' , dirname ( __FILE__ ) . '/dirname/' );


$sid = $_GET['sid'];//本地session不使用此sid   此sid只用于接口使用
//session_id($sid);

session_start();
//print_r($t);exit;
$code = $_GET['code'];
$APPID = 'wxea1c1a0f5c62a23e';
$APPSECRET = '283d1037c27301a1ce194b8a9a78975f';

//第二步：通过code换取网页授权access_token
//https://api.weixin.qq.com/sns/oauth2/access_token?appid=APPID&secret=SECRET&code=CODE&grant_type=authorization_code
$res = file_get_contents("https://api.weixin.qq.com/sns/oauth2/access_token?appid=$APPID&secret=$APPSECRET&code=$code&grant_type=authorization_code");

//第三步：刷新access_token（如果需要）
//https://api.weixin.qq.com/sns/oauth2/refresh_token?appid=APPID&grant_type=refresh_token&refresh_token=REFRESH_TOKEN

//第四步：拉取用户信息(需scope为 snsapi_userinfo)
//https://api.weixin.qq.com/sns/userinfo?access_token=ACCESS_TOKEN&openid=OPENID&lang=zh_CN

$res_acc = json_decode($res,true);
//expires_in
//refresh_token
//scope
$ACCESS_TOKEN = $res_acc['access_token'];
$OPENID = $res_acc['openid'];
//$user_info = $GLOBALS['DB']->get_row("SELECT * FROM `user` WHERE `openID`='{$OPENID}' ");
//if($user_info){
	//$_SESSION['uid'] = $user_info['uid'];
	//$_SESSION['ACCESS_TOKEN'] = $ACCESS_TOKEN;
	$_SESSION['OPENID'] = $OPENID;
	$_SESSION['sid'] = $sid;
	header("Location:https://m.xuematech.com/index.php");
//}else{
	//header("Location:http://m.xuematech.com/get_user.php?get_info=1");
//}