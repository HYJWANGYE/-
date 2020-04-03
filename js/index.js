function public() {
    if ($(window).width() < 850) {
        $(".erweima>img").css("margin-top", "0")
    } else {
        $(".erweima>img").css("margin-top", "30px")
    }

    if ($(window).width() < 500) {
        $(".erweima").css("visibility", "hidden");
        // $(".listimg img").css({"margin-left":"0"})
    } else {
        $(".erweima").css("visibility", "visible");
        // $(".listimg img:last").css({"margin-left":"20px"})
    }

    if ($(window).width() <= 375) {
        $(".listimg img").css({
            "padding": "0",
            "margin": "10px 0",
            "width": "49%",
            "float": "left",
        })
        $(".imgss").css({
            "width": "43%",
        })
        $(".imgs").css({
            "height": "180px",
            "width": "190px",
            "margin-left": "6px"
        })
        $(".container-fluid").css({
            "margin-top": "50px",
        });
        $(".swiper-slide:eq(0)").css({
            "background": "url(../img/indexImgs/img_01_beedae7.jpg)",
        })
        $(".swiper-slide:eq(1)").css({
            "background": "url(../img/indexImgs/img_02_815ed4b.jpg)",
        })
        $(".swiper-slide:eq(2)").css({
            "background": "url(../img/indexImgs/img_03_d4d5e18.jpg)",
        })
        $(".swiper-slide:eq(3)").css({
            "background": "url(../img/indexImgs/img_04_312e517.jpg)",
        })
        $(".swiper-slide:eq(4)").css({
            "background": "url(../img/indexImgs/img_05_a163df4.jpg)",
        })
        $(".swiper-slide").css({
            "background-size": "100% 100%",
            "width": "200px",
            "height": "300px"
        })

    } else {

        $(".swiper-slide:eq(0)").css({
            "background": "url(../img/indexImgs/pic01_04a2d12.jpg)",
        })
        $(".swiper-slide:eq(1)").css({
            "background": "url(../img/indexImgs/pic02_c4aca9e.jpg)",
        })
        $(".swiper-slide:eq(2)").css({
            "background": "url(../img/indexImgs/pic03_248dd3c.jpg)",
        })
        $(".swiper-slide:eq(3)").css({
            "background": "url(../img/indexImgs/pic04_23b9e37.jpg)",
        })
        $(".swiper-slide:eq(4)").css({
            "background": "url(../img/indexImgs/pic05_da6e314.jpg)",
        })
        $(".swiper-slide").css({
            "background-size": "cover",
            "width": "800px",
            "height": "400px"
        })
        $(".listimg img").css({
            "width": "30%",
            "float": "none",
        })
        $(".imgss").css({
            "margin-left": "50px",
        })
        $(".imgs").css({
            "width": "40%",
            "height":"430px"
        })
        $(".container-fluid").css("margin-top", "0")
    }

}
public();
window.onresize = function () {
    this.public();
}

$(".listimg img").hover(function () {
    $(this).css({
        "position":"relative",
        "bottom":"20px",
    })
}, function () {
    $(this).css({
        "position":"relative",
        "bottom":"0"
    })
});


$(".close").click(function(){
    $(this).parents(".mcDiv").css("display","none");
});
$(".phoneClose").click(function(){
    $(this).parents(".mcDiv").css("display","none");
});

$(".imglist").click(function(){
    $(".mcDiv").css("display","block")
   $(".bgimg").removeClass("imga imgb imgc imgd")
    if($(this).index()==0){
        $(".bgimg").addClass("imga")
        $(".bgimg h2").text("原结神")
    } else if($(this).index()==1){
        $(".bgimg").addClass("imgb")
        $(".bgimg h2").text("与君结缘")
    }else if($(this).index()==2){
        $(".bgimg").addClass("imgc")
        $(".bgimg h2").text("焕新")
    }else if($(this).index()==3){
        $(".bgimg").addClass("imgd")
        $(".bgimg h2").text("协理")
    }
});


var swiper = new Swiper('.swiper-container', {
    pagination: '.swiper-pagination',
    effect: 'coverflow',
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: 'auto',
    // 如果需要前进后退按钮
    nextButton: '.swiper-button-next',
    prevButton: '.swiper-button-prev',
    coverflow: {
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: true
    }
});

$(".gw").click(function(){
    window.location.href = "index2.html";
});
