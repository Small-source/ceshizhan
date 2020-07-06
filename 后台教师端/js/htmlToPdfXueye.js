const xueYueReport=function(htmlTitle,vue){
    let canvasImgArr = [];
    let pageNumbers = 0;
    let isFinishDownload = true;
    var this_vue = vue;
    (function (htmlTitle, vue) {
        if (this_vue.isFinishDownload == false) {
            return;
        }
        $vue = vue;
        this_vue.isFinishDownload = false;
        this_vue.htmlTitle = htmlTitle;
        pageNumbers = 0;
        canvasImgArr = [];
        createImage($(".page_shadow").eq(0));
    })(htmlTitle, vue);

    function createImage(obj, key) {
        let flag;
        var element = obj.find(".pdf-page");    // 这个dom元素是要导出pdf的div容器
        if (element.length == 0) {
            element = obj
            flag = true;
        }
        var scrollTop = $(window).scrollTop();
        var w = element.outerWidth();    // 获得该容器的宽
        var h = element.outerHeight();    // 获得该容器的高
        var offsetTop = element.offset().top - scrollTop;    // 获得该容器到文档顶部的距离
        var offsetLeft = element.offset().left;    // 获得该容器到文档最左的距离
        var canvas = document.createElement("canvas");
        var abs = 0;
        var win_i = $(window).width();    // 获得当前可视窗口的宽度（不包含滚动条）
        var win_o = window.innerWidth;    // 获得当前窗口的宽度（包含滚动条）
        if (win_o > win_i) {
            abs = (win_o - win_i) / 2;    // 获得滚动条长度的一半
        }

        canvas.width = w * 2;    // 将画布宽&&高放大两倍
        canvas.height = h * 2;
        var context = canvas.getContext("2d");
        context.fillStyle = "#fff";
        context.fillRect(0, 0, canvas.width, canvas.height);
        context.scale(2, 2);
        context.translate(-offsetLeft - abs, -offsetTop);
        if (!flag) {
            html2canvas(element, {
                canvas: canvas,
                async: false,//同步执行
                onrendered: function (canvas) {
                    var pageImageData = canvas.toDataURL('image/jpeg', 1.0);
                    createPDF(pageImageData);
                    //element.next();
                    //console.log(element.next().length);
                    if (element.parent().next().length > 0) {
                        createImage(element.parent().next());
                    }
                }
            })
        } else {
            html2canvas(element, {
                canvas: canvas,
                async: false,//同步执行
                onrendered: function (canvas) {
                    var pageImageData = canvas.toDataURL('image/jpeg', 1.0);
                    createPDF(pageImageData);
                    if ($vue) {
                        $vue.number++;
                    }
                    if ($vue.number == $vue.numbers) {
                        $vue.flag = false;
                        $vue.number = 0;
                    }
                    //element.next();
                    //console.log(element.next().length);
                    if (element.next().length > 0) {
                        createImage(element.next());
                    }
                }
            })
        }

        // html2canvas(element, {
        //   canvas: canvas,
        //   allowTaint: true
        // }).then(function (canvas) {
        //   //var pageImageData = canvas.toDataURL('image/jpeg', 1.0);
        //   //this_vue.createPDF(pageImageData, key);
        //   console.log(1);
        // })


    };

    function createPDF(pageImageData) {
        let title = this_vue.htmlTitle;
        canvasImgArr.push(pageImageData);
        pageNumbers++;
        if (pageNumbers == $(".pdf-page").length || pageNumbers == $(".page_shadow").length) {
            var pdf = new jsPDF('', 'pt', 'a4');
            for (var i in canvasImgArr) {
                if (i == 0) {
                    pdf.addImage(canvasImgArr[i], 'JPEG', 0, 0, 595.28, 841.89);
                } else {
                    pdf.addPage();
                    pdf.addImage(canvasImgArr[i], 'JPEG', 0, 0, 595.28, 841.89);
                }
            }
            pdf.save(title + '.pdf');
            this_vue.isFinishDownload = true;
        }
    };
}

