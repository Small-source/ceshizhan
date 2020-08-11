// 导出页面为PDF格式
import html2Canvas from 'html2canvas'
import JsPDF from 'jspdf'
export default{
  install (Vue, options) {
    let canvasImgArr = [];
    let pageNumbers = 0;
    let isFinishDownload = true;
    var this_vue;
    // Vue.prototype.getPdf2 = function () {
    //   var title = this.htmlTitle
    //   html2Canvas(document.querySelector('#pdfDom'), {
    //     allowTaint: true
    //   }).then(function (canvas) {
    //     let contentWidth = canvas.width
    //     let contentHeight = canvas.height
    //     let pageHeight = contentWidth / 592.28 * 841.89
    //     let leftHeight = contentHeight
    //     let position = 0
    //     let imgWidth = 595.28
    //     let imgHeight = 592.28 / contentWidth * contentHeight
    //     let pageData = canvas.toDataURL('image/jpeg', 1.0)
    //     let PDF = new JsPDF('', 'pt', 'a4')
    //     if (leftHeight < pageHeight) {
    //       PDF.addImage(pageData, 'JPEG', 0, 0, imgWidth, imgHeight)
    //     } else {
    //       while (leftHeight > 0) {
    //         PDF.addImage(pageData, 'JPEG', 0, position, imgWidth, imgHeight)
    //         leftHeight -= pageHeight
    //         position -= 841.89
    //         if (leftHeight > 0) {
    //           PDF.addPage()
    //         }
    //       }
    //     }
    //     PDF.save(title + '.pdf')
    //   }
    //   )
    // };
    Vue.prototype.getPdf = function (htmlTitle) {
      if(isFinishDownload == false) {
        return;
      }
      this_vue = this;
      isFinishDownload = false;
      htmlTitle = htmlTitle;
      this_vue.isDownloading = true;
      this_vue.currentPage = 0;
      this_vue.totalPages = $(".page_shadow").length;
      // console.log($(".page_shadow").length);
      // return;
      pageNumbers = 0;
      canvasImgArr = [];
      //$(".pdf-page").eq(0);
      // createImage($(".page_shadow").eq(0));
      createImage($(".page_shadow").eq(pageNumbers));


      // console.log($(".page_shadow"));
      // console.log($(".page_shadow")[0]);
      // console.log($(".page_shadow").eq(0));
      // console.log($(".page_shadow").eq(0).find(".pdf-page"));
      // $(".pdf-page").each(function(key){
      //     let obj = $(this)
      //     //let downloadPercentage = (( (Number(key)+1) / $(".pdf-page").length )).toFixed(4);
      //     setTimeout(function() {
      //         this_vue.createImage(obj,key);
      //     }, (Number(key) + 1)*100);
      //     //this_vue.createImage(obj,key);
      //     //console.log(obj);

      // })
    };
    function createImage(obj,key) {
        let flag;
      // var element = obj.find(".pdf-page");    // 这个dom元素是要导出pdf的div容器;
      var element = obj;    // 这个dom元素是要导出pdf的div容器;

      if(element.length==0){
           element=obj
            flag=true;
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
      if(win_o>win_i){
          abs = (win_o - win_i)/2;    // 获得滚动条长度的一半
      }

      canvas.width = w * 2;    // 将画布宽&&高放大两倍
      canvas.height = h * 2;
      var context = canvas.getContext("2d");
      context.fillStyle = "#fff";
      context.fillRect(0, 0, canvas.width, canvas.height);
      context.scale(2, 2);
      context.translate(-offsetLeft-abs,-offsetTop);
      if(!flag){
          html2canvas(element, {
              canvas: canvas,
              // useCORS: true,
              async:false,//同步执行
              onrendered: function (canvas) {
                  var pageImageData = canvas.toDataURL('image/jpeg', 1.0);
                  createPDF(pageImageData);
                  // if(element.parent().next().length > 0){
                  //     createImage(element.parent().next());
                  // }

                  if(pageNumbers < $(".page_shadow").length){
                    createImage($(".page_shadow").eq(pageNumbers));
                  }
              }
          })
      }else{
          html2canvas(element, {
              canvas: canvas,
              // useCORS: true,
              async:false,//同步执行
              onrendered: function (canvas) {
                  var pageImageData = canvas.toDataURL('image/jpeg', 1.0);
                  createPDF(pageImageData);
                  if(element.next().length > 0){
                      createImage(element.next());
                  }

                  // if(obj.next().length > 0){
                  //     createImage(obj.next());
                  // }
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
      this_vue.currentPage ++;
      console.log(pageNumbers,$(".pdf-page").length,$(".page_shadow").length)
      if(pageNumbers == $(".pdf-page").length ||pageNumbers == $(".page_shadow").length){
          var pdf = new jsPDF('', 'pt', 'a4');
          for (var i in canvasImgArr) {
              if(i == 0){
                  pdf.addImage(canvasImgArr[i], 'JPEG', 0, 0, 595.28, 841.89);
              }else{
                  pdf.addPage();
                  pdf.addImage(canvasImgArr[i], 'JPEG', 0, 0, 595.28, 841.89);
              }
          }
          pdf.save(title + '.pdf');
          isFinishDownload = true;
          this_vue.isDownloading = false;
      }
    };

  }
}
