/**
 * Created by chenping on 16/10/16.
 */

(function () {
    'use strict';

    signup();
    function signup(){
        //在线咨询 - 浮动显示
        $(".signup-box").show();
        $(window).scroll(function () {
            var scroHs = $(this).scrollTop();
            if (scroHs >= 0) {
                $(".signup-box").show();
            } else {
                $(".signup-box").hide();
            }
        })
        //在线咨询关闭
        $(".box-close").click(function () {
            $(".signup-box").animate({
                left: "-100%",
            },800, function () {
                $(".signup-box").css("width", "138px");
                $(".signup-back").hide( function(){
                    $(".signup-back-default").show();
                    $(".signup-box").animate({
                        left: "0",
                    },400)
                });
            })
        })
        //在线咨询打开
        $(".signup-back-default").click(function () {
            $(".signup-box").animate({
                left: "-100%",
            },400, function () {
                $(".signup-box").css("width", "100%");
                $(".signup-back-default").hide( function(){
                    $(".signup-back").show().css("overflow","inherit");
                    $(".signup-box").animate({
                        left: "0",
                    },800)
                });
            })
        })
    }



})();