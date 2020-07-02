
function urlToObj(str){
    var obj = {};
    var arr1 = str.split("?");
    var arr2 = arr1[1]&&arr1[1].split("&")||[];
    for(var i=0 ; i < arr2.length; i++){
        var res = arr2[i].split("=");
        obj[res[0]] = res[1];
    }
    return obj;
}
var url = window.location.search;
var item=urlToObj(url);

//alert(item.token);

window.sessionStorage.type = item.type;
window.sessionStorage.source=item.source||2;
window.sessionStorage.a=item.a||20;

// 判断是否登录
if(!window.sessionStorage.token){
    if(item.token){
        window.sessionStorage.token = item.token;
    }else {
        window.location.href = 'index.php?a=' + window.sessionStorage.a + '&source=' + window.sessionStorage.source + '&type=' + window.sessionStorage.type;
    }
}