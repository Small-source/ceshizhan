(function () {
    var curClientWidth,
		htmlDom;
        _resize();
        window.addEventListener("resize",_resize,false);
        function _resize () {
            curClientWidth = document.documentElement.clientWidth || document.body.clientWidth;
     		htmlDom = document.getElementsByTagName('html')[0];
			// 基于iphone6，设计图为750px，1rem为50px
			htmlDom.style.fontSize = curClientWidth/7.5 + 'px';
        }
})();