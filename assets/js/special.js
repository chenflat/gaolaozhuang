/**
 * Created by chenping on 16/10/16.
 */

(function () {
    'use strict';

    //
    // $(".box-close").click(function () {
    //     $(".signup-box").hide();
    // });




    about();
    function about(){
        //预约 - 浮动显示
        $(window).scroll(function () {
            var scroHs = $(this).scrollTop();
            if (scroHs > 100) {
                $(".signup-box").show();
            } else {
                $(".signup-box").hide();
            }
        })
        //预约关闭
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
        //预约打开
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