// var port ="https://m.xuematech.com/papi";
var port= "http://39.98.37.134:8003/papi";
$(function () {
        if(($('.publicHead').html())){
                return;
        }
        $('.publicHead').load('header.html')
        $('.publicFoot').load('footer.html')
})