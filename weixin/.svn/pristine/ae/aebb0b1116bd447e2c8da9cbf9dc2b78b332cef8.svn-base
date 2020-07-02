<?php
$sid = $_GET['sid'];//本地session不使用此sid   此sid只用于接口使用
$APPID = 'wxea1c1a0f5c62a23e';
$REDIRECT_URI='https://m.xuematech.com/call_back.php?sid='.$sid;
$scope='snsapi_base';

$state = time();
$url='https://open.weixin.qq.com/connect/oauth2/authorize?appid='.$APPID.'&redirect_uri='.urlencode($REDIRECT_URI).'&response_type=code&scope='.$scope.'&state='.$state.'#wechat_redirect';
header("Location:".$url);