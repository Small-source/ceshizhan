/**
 * Created by ulfeng on 2017/7/19.
 */
export default {
    install(Vue, options) {

        /**
         * 保存节点
         * @param msg
         * @param time
         * @returns {boolean}
         */
        Vue.prototype.saveNode = function (module, node) {
            this.$http.post("/api/test/setNode", {
                    module: module, // 1-性格特性，2-认知潜能，3-兴趣倾向，4-心理健康
                    node: node, // 对应的小结
                }, {
                    headers: {
                        "token": sessionStorage.getItem('token'),
                    }
                },
                {
                    emulateJSON: true
                }
            ).then(
                function (res) {
                    // 请求成功的结果
                    console.log(res.body);
                    var data = res.body;
                    if (data.code == 0) {
                        // this.$router.push('/xgtx/success/1')
                    } else {
                        this.layerMsg(data.msg);
                    }
                },
                function (res) {
                    console.log('接口响应失败，请联系网站管理人员');
                }
            );
        }

        /**
         * 标记测试完成
         * @param module
         * @param node
         *
         * */
        Vue.prototype.markOver = function (module, node) {
            this.$http.post("/api/test/markOver", {}, {
                    headers: {
                        "token": sessionStorage.getItem('token'),
                    }
                },
                {
                    emulateJSON: true
                }
            ).then(
                function (res) {
                    // 请求成功的结果
                    console.log(res.body);
                    var data = res.body;
                    if (data.code == 0) {
                        // this.$router.push('/xgtx/success/1')
                    } else {
                        this.layerMsg(data.msg);
                    }
                },
                function (res) {
                    console.log('接口响应失败，请联系网站管理人员');
                }
            );
        }


        // layer tip
        Vue.prototype.layerMsg = function (msg, time) {
            if ($('#layer').length > 0) {
                return false;
            }
            setTimeout(function () {
                var layerHtml = '<div id="layer" class="layer"></div>';
                $('body').append(layerHtml);
                $('#layer').text(msg);
                var layerWidth = $('#layer').width() / 2;
                $('#layer').css('marginLeft', -layerWidth);
                if (time) {
                    setTimeout(function () {
                        $('#layer').remove();
                    }, time);
                } else {
                    setTimeout(function () {
                        $('#layer').remove();
                    }, 2000);
                }
            },100)
        }

        // 去掉开头和结尾的空格
        Vue.prototype.trim = function (value) {
            return value.replace(/(^\s*)|(\s*$)/g, '');
        }

        // email validate
        Vue.prototype.isEmail = function (value) {
            var reg = /^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+(.[a-zA-Z0-9_-])+/;
            return reg.test(value);
        }


        Vue.prototype.isPoneAvailable = function (value) {
            var myreg = /^[1][3,4,5,7,8][0-9]{9}$/;
            return myreg.test(value);
        }

        // 判断是否为数字
        Vue.prototype.isNumber = function (value) {
            if (isNaN(value)) {
                return true;
            } else {
                return false;
            }
        }

        Vue.prototype.thumbnailImg = function (options, activeSeq, lock) {
            var defaluts = {
                large_elem: "large_elem",
                small_elem: "small_elem",
                left_btn: "left_btn",
                right_btn: "right_btn",
                state: "on",
                speed: "normal",
                vis: 4
            };
            var opts = options;
            var t = 0;
            var l = $(opts.small_elem).find("ul li").length;
            var l_mean;
            if (l < opts.vis) {
                l_mean = 0
            } else {
                l_mean = ((parseInt(l / opts.vis) - 1) * opts.vis) + (l % opts.vis)
            }

            var w = $(opts.small_elem).find("ul li").outerWidth(true);
            $(opts.small_elem).find("ul").css("width", l * w + "px");

            var timing;

            if (lock) {
                console.log(activeSeq);
                t = activeSeq;
                Img(activeSeq);
                return false;
            } else {
                $(opts.large_elem).find("ul li").eq(0).show();
                $(opts.small_elem).find("ul li").eq(0).addClass(opts.state);

                timing = setInterval(function () {
                    t++;
                    if (t > l - 1) {
                        t = 0
                    }
                    // console.log(t);
                    Img(t)
                }, 3000);
            }


            $(opts.small_elem).find("ul li").click(function () {
                $(this).addClass(opts.state).siblings().removeClass(opts.state);
                t = $(this).index();
                Img($(this).index());
                // console.log($(this).index());
            });

            function Img(i) {
                $(opts.large_elem).find("ul li").eq(i).fadeIn().siblings().hide();
                $(opts.small_elem).find("ul li").eq(i).addClass(opts.state).siblings().removeClass(opts.state);
                var ml = i * w;
                if (ml <= l_mean * w) {
                    $(opts.small_elem).find("ul").stop().animate({marginLeft: -ml + "px"}, opts.speed)
                } else {
                    $(opts.small_elem).find("ul").stop().animate({marginLeft: -(l_mean * w) + "px"}, opts.speed)
                }
            }

            $('.goods-img').hover(function () {
                // console.log('enter');
                clearInterval(timing)
            }, function () {
                // console.log('leave' + t);
                timing = setInterval(function () {
                    t++;
                    // console.log(t);
                    if (t > l - 1) {
                        t = 0
                    }
                    Img(t)
                }, 4000)
            })

        }


        /**
         * 时间戳转化
         */
        Vue.prototype.time = function (value) {
            var date = new Date(value);
            var Y = date.getFullYear(),
                m = date.getMonth() + 1,
                d = date.getDate(),
                H = date.getHours(),
                i = date.getMinutes(),
                s = date.getSeconds();
            if (m < 10) {
                m = '0' + m;
            }
            if (d < 10) {
                d = '0' + d;
            }
            if (H < 10) {
                H = '0' + H;
            }
            if (i < 10) {
                i = '0' + i;
            }
            if (s < 10) {
                s = '0' + s;
            }
            // <!-- 获取时间格式 2017-01-03 10:13:48 -->
            // var t = Y+'-'+m+'-'+d+' '+H+':'+i+':'+s;
            //<!-- 获取时间格式 2017-01-03 -->
            //var t = Y + '-' + m + '-' + d;
            // 获取时间格式 2017-01-13 10:13'
            var t = Y + '-' + m + '-' + d + ' ' + H + ':' + i;
            return t;
        }

    }
}
