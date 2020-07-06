(function () {
    var curClientWidth,
        fontValue,
        originWidth,
        originWidth = 750; 
        _resize();
        window.addEventListener("resize",_resize,false);
        function _resize () {
            curClientWidth = document.documentElement.clientWidth;
            //ipid Air2
            if(curClientWidth > 768) {
                curClientWidth = 768
            }
            if(curClientWidth < 320) {
                curClientWidth = 320
            }
            fontValue = (625 * curClientWidth / originWidth).toFixed(2);
//             console.log(fontValue);
            document.documentElement.style.fontSize = fontValue + "%";
        }
})();