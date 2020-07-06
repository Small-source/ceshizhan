<?php
//ini_set ( 'session.save_path' , dirname ( __FILE__ ) . '/dirname/' );

$sid = time().rand(100000,999999);//本地session不使用此sid   此sid只用于接口使用

session_start();
$a = $_GET['a'];//代理商ID
if($a){
    $_SESSION['a'] = $a;
}

$source = $_GET['source'];//来源  2.
if($source){
    $_SESSION['source'] = $source;
}


$type = $_GET['type'];//类型  1.沛耕数学  2.   3.
if($type){
    $_SESSION['type'] = $type;
}



//error_reporting(E_ALL^E_NOTICE);
//ini_set("display_errors",1);

//session_destroy();exit;

$OPENID = $_SESSION['OPENID'];
$OPENID = "o11qK0Z8wQagpz0iATmrw3zsZqUM";
if($OPENID){

}else{
	header("Location:https://m.xuematech.com/get_user.php?sid=".$sid);
}


//print_r($_SESSION);

//session_register_shutdown();
//session_write_close();

//session_regenerate_id();
//session_id($sid);//此sid需要发送到前端，前端使用此sid获取openID
//session_start();
////session_destroy();exit;
//$_SESSION['OPENID'] = $OPENID;
//$_SESSION['OPENID'] = "o11qK0Z8wQagpz0iATmrw3zsZqUM";
////print_r($_SESSION);



$redis = new Redis();
$redis->connect('127.0.0.1', 6379);
//$redis->auth('密码');
$redis->set($sid, $OPENID);
$OP = $redis->get($sid);

//print_r($_SESSION);exit;

header("Location:http://39.98.37.134:8006/index.html?sid=".$sid."&a=".$_SESSION['a']."&source=".$_SESSION['source']."&type=".$_SESSION['type']);
//header("Location:http://m.xuematech.com/index.html?sid=".$sid);

//print('<a href="http://m.xuematech.com/papi/login/sessionTest">GGGGGGGGGGGGGGGGGG</a>');


?>