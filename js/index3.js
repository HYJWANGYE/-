$.getJSON("https://www.fastmock.site/mock/a652b6ded85b24fa02890d863013fcb2/YinYangShi/video", function (data) {
    var data = data.data;
    console.log(data)
    for (var i = 0; i < data.length; i++) {
        for (var j = 0; j < data[i].videoList.length; j++) {
            $(".text>div").eq(i).append("<li><img src = '" + data[i].videoList[j].img + "'><span>" + data[i].videoList[j].text + "</span></li>")
        }
    }


    $(".text>div>li").mouseenter(function () {
        $(this).append("<div class = 'zz'><img src = '../img/videoPage/b_video_9262f7c.png'></div>")
        $(".zz").css({
            "height": "84%",
            "width": "95%",
            "position": "absolute",
            "top": "0",
            "left": "0",
            "margin": "0.02rem",
            "background-color": "rgba(0,0,0,0.4)"
        })
        $(".zz>img").css({
            "width": "20%",
            "position": "absolute",
            "left": "50%",
            "top": "50%",
            "transform": "translate(-50%,-50%)"
        })
    });


    $(".text>div>li").mouseleave(function () {
        $(this).children(".zz").remove()
    });


    function aa(stu) {
        $("#box").append("<div class = 'zz'></div>")
        $(".zz").css({
            "height": $("#box").width(),
            "width": "100%",
            "background-color": "rgba(0,0,0,0.5)",
            "z-index": "99",
            "position": "fixed",
            "top": "0"
        })
        //添加视频
        $(".zz").append("<video controls autoplay muted><source src='" + stu + "'></video>")
        $(".zz>video").css({
            "width": "70%",
            "position": "fixed",
            "top": "10%",
            "left": "15%",
        })
        //添加关闭X
        $(".zz").append("<div class = 'close'></div>");
        $(".zz>.close").css({
            "width": "3%",
            "height": "5%",
            "background": "url('../img/zhuyeImgs/close_100dfdd.png') 0 0 no-repeat",
            "position": "fixed",
            "left": "82%",
            "top": "11.5%"
        })
        //点击关闭X
        $(".close").bind("click", function () {
            $(".zz").remove();
        })
    }



    // $(".boxA").click(function () {
    //     aa("https://yys.v.netease.com/shishen/spyd.mp4")
    // });


    $(".text>div>li").bind({
        "click": function () {
            var divIndex = $(this).parent().index();
            var count = $(".text>div").length;
            var thisIndex = $(this).index();
            // alert(count)
            // alert($(this).index())
            for (var i = 0; i < count; i++) {
                if (divIndex == i) {
                    aa(data[divIndex].videoList[thisIndex].mp4)
                }
            }
        }
    })

    $(".boxBdivA>div").click(function () {
        if ($(this).index() == 0) {
            aa("https://yys.v.netease.com/2019/1101/724b459d15d5ac8f3158758a8312378aqt.mp4")
        } else {
            aa("https://yys.v.netease.com/qita/snake.mp4")
        }
    })

    $(".boxBdivB>div").click(function () {
        if ($(this).index() == 0) {
            aa("https://yys.v.netease.com/qita/spyuzaoqian.mp4")
        } else if ($(this).index() == 1) {
            aa("https://yys.v.netease.com/qita/CGkaichang.mp4")
        } else {
            aa("https://yys.v.netease.com/2019/1101/84126be891a95e54ecdc1ede84d51f0aqt.mp4")
        }
    });

    var num = 0;

    $(".tagList>li").bind("mousedown",function(event){
        // console.log(event.which)
        num = event.which;
    })

    $(".tagList>li").hover(
        function () {
            $(this).children("div").stop(true,false).slideDown(500)
        },
        function () {
            if(num==0){
                $(this).children("div").slideUp()
            }else{
                $(".tagList>li>div").hide();
                $(this).children("div").slideDown()
                num = 0;
            }
        }
    )


    $(".boxDdivB").hover(function(){
        $(this).children("img:first").stop(true,false).fadeIn(300);
        $(this).children("div").stop(true,false).fadeOut(300);
        $(this).children("img:last").css("bottom","-10%");
    },function(){
        $(this).children("img:first").stop(true,false).fadeOut(300);
        $(this).children("div").stop(true,false).fadeIn(300);
        $(this).children("img:last").css("bottom","0");
    });
})


$(document).ready(function () {
    if ((navigator.userAgent.indexOf('MSIE') >= 0) &&
      (navigator.userAgent.indexOf('Opera') < 0)) {
      $('#bolang').show();
      $('canvas').hide();
    } else {
      $('#bolang').hide();
      new curves('cv1', 300, 1000, 40, 0, 7, 'rgba(255,255,255,1)', -1000);
      new curve('cv2', 2, 200, 60, 0.3, 'rgba(255,255,255,0.5)', 0.25);
      new curve('cv3', 2, 190, 60, 0.2, 'rgba(255,255,255,0.3)', 0.5);
      new curve('cv4', 2, 210, 60, 0.3, 'rgba(255,255,255,0.2)', 0.75);
    }
  })

  $(".imgzx").click(function(){
      window.location.href = "index4.html";
  });