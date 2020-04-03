var mySwiper = new Swiper('.container1', {
    effect: 'cube',
    cube: {
        slideShadows: true,
        shadow: true
    }
})

var swiper = new Swiper('.container2', {
    pagination: '.swiper-pagination',
    slidesPerView: 4.5,
    paginationClickable: true,
    spaceBetween: 30,
    freeMode: true
});

var mySwiper = new Swiper('.cintainer3', {
    direction: 'vertical',
    // loop: true,
    mousewheelControl: true,
    // 如果需要分页器
    pagination: '.swiper-pagination',
})




$(".topList li").hover(function () {
    $(this).css("background-color", "#C2A060");
    $(this).find(".erList").stop(false, true).slideDown();
    // $(this).find(".erList").stop(false,true).show("last");
    // $(this).find(".erList").stop(false,true).fadeIn("last");
}, function () {
    $(this).css("background-color", "transparent");
    $(this).find(".erList").stop(false, true).slideUp();
    // $(this).find(".erList").stop(false,true).hide("last");
    // $(this).find(".erList").stop(false,true).fadeOut("last");
});

// -------------------------------------------------------------------------------------------------------

$.getJSON("https://www.fastmock.site/mock/a652b6ded85b24fa02890d863013fcb2/YinYangShi/yys2/exercise", function (data) {
    var data = data.data;

    // console.log(data)
    for (var i = 0; i < data.length; i++) {
        for (var j = 0; j < data[i].imgList.length; j++) {
            $(".text>div").eq(i).find("ul").append("<li><img src = '" + data[i].imgList[j].img + "'><h5>" + data[i].imgList[j].name + "</h5></li>")
        }
    }

    var divParents; //div类型  选中 联动 or SP or SR等
    var divImg; //div类型里面的当前图鉴下标
    var count; //用来计算 count next 上一页下一页的

    //左右名字的公用函数
    function ListName() {
        if (divImg + count - 1 < 0) {
            $(".spanLeft").text("");
            $(".spanRight").text(data[divParents].imgList[divImg + count + 1].name);
        } else if (divImg + count + 1 >= data[divParents].imgList.length) {
            $(".spanLeft").text(data[divParents].imgList[divImg + count - 1].name);
            $(".spanRight").text("");
        } else {
            $(".spanLeft").text(data[divParents].imgList[divImg + count - 1].name);
            $(".spanRight").text(data[divParents].imgList[divImg + count + 1].name);
        }
    }

    //左右照片的公用函数
    function ListImg() {
        $(".center_left").css({
            "background": "url('" + data[divParents].imgList[divImg + count].imgleft + "') -0.6rem 0 no-repeat",
            "width": "40%"
        })
        $(".center_right").css({
            "background": "url('" + data[divParents].imgList[divImg + count].imgright + "') -1.45rem 0 no-repeat",
            "width": "55%"
        })

        //点击传参
        $(".center_right").click(function(){
            window.location.href = "index5.html?id="+data[divParents].imgList[divImg + count].imgright+"&name="+encodeURI(data[divParents].imgList[divImg + count].name)+""; 
        });
    }

    //点击图鉴显示
    $(".text ul>li").bind({
        "click": function () {
            count = 0; //点击一个类型  上下页的页数会清零
            $(".erji,.text").slideUp(700);
            $(".GodList,.boxC").slideDown(700);
            divParents = $(this).parent().parent().index();
            divImg = $(this).index();
            for (var i = 0; i < 7; i++) { //吧每个类型和里面的图鉴循环遍历
                if ($(this).parent().parent().index() == i) {
                    ListImg();
                }
            }
            ListName();
        },
        "mouseover": function () {
            $(this).find("img").css({
                "transition": "all 0.5s linear",
                "border": "3px solid black",
            })
        },
        "mouseout": function () {
            $(this).find("img").css({
                "transition": "all 0.5s linear",
                "border": "none",
                "border-radius": "0"

            })
        }
    })

    // 上一个图鉴
    $(".left>div").bind("click", function () {
        count--;
        if (divImg + count < 0) { //divImg+count: 点击的当前图标下标 加上 计算的count 
            alert("已经没用上一层了")
            return count++; //为什么++  因为上面的count会一直--  后面的 count++  加不过来
            // count = data[divParents].imgList.length-divImg-1;
            // ListImg();
            // return;
        } else {
            //左边的下一个照片
            ListImg();
            //左边的下一个名字
            ListName();
        }
    });

    //下一个图鉴
    $(".right>div").click(function () {
        count++;
        if (divImg + count >= data[divParents].imgList.length) { //data[divParents].imgList.length：判断您点击的当前类型的图标数量
            alert("已经没用下一层了")
            return count--;

            // count = -divImg;
            // ListImg();
            // return;
        } else {
            //右边的下一个照片
            ListImg();
            //右边的下一个名字
            ListName();
        }
    });

    //点击所有式神列表
    $(".GodList").bind("click", function () {
        $(".erji,.text").fadeIn(700);
        $(".GodList,.boxC").fadeOut(700);
    })
})

// -------------------------------------------------------------------------------------------------------

$.getJSON("https://www.fastmock.site/mock/a652b6ded85b24fa02890d863013fcb2/YinYangShi/yys/data2", function (data) {

    var data2 = data.data[0].imgList;
    // console.log($(".divD").length)
    // console.log(data2)
    for (var i = 0; i < data2.length; i++) {
        // $(".divD").eq(i).text(data2[i].name);
        $(".divD").eq(i).find("div:first").css({
            "background": "url('" + data2[i].imgleft + "') -0.5rem -0.38rem no-repeat",
        });
        $(".divD").eq(i).find("div:last").css({
            "background": "url('" + data2[i].imgright + "') -1.4rem 0 no-repeat"
        });
    }

})

// -------------------------------------------------------------------------------------------------------

$(".boxDulA>li").hover(
    function () {
        $(this).find("button").css("top", "-0.15rem")
        $(this).find("button:last").css("top", "-0.05rem")
    },
    function () {
        $(this).find("button").css("top", "-0.1rem")
        $(this).find("button:last").css("top", "0")
    }
);

// 游戏攻略
$.getJSON("https://www.fastmock.site/mock/a652b6ded85b24fa02890d863013fcb2/YinYangShi/qqvs", function (data) {
    var data = data.data;
    // console.log(data)
    for (var i = 0; i < data.length; i++) {
        for (var j = 0; j < data[0].qqvsUl.length; j++) {
            $(".boxDulB>li").eq(i).find("ul").append("<li>" + data[i].qqvsUl[j].title + "<span>" + data[i].qqvsUl[j].name + "</span></li>")
        }
    }

    // 新手悬浮列表
    $(".boxDulB>li").mouseover(
        function () {
            for (var i = 0; i < $(".boxDulB>li").length; i++) {
                $(".boxDulB>li").eq(i).css("background-color", "transparent")
                $(".boxDulB>li").eq(i).find("a").css("color", "#ffffff")
                $(".boxDulB>li").eq(i).find("ul").stop(true, false).fadeOut("last")
            }
            $(this).css("background-color", "#ffffff")
            $(this).find("a").css("color", "green");
            $(this).find("ul").stop(true, false).fadeIn("last")
        });


    // for(var i = 1; i <= 48; i++){
    //     if(i%3==0){
    //         $(".boxDulA").append("<ul></ul>")
    //     }
    // }

    //照片循环插入
    var num = 1;
    for (var i = 0; i < $(".boxDulA>ul").length; i++) {
        for (var j = 1; j <= 3; j++) {
            $(".boxDulA>ul").eq(i).append("<li><img src = '../img/Aimg/A" + (num++) + ".jpg'></li>")
        }
    }

    // 随机数页面
    var NextPrev = 0;
    $(".boxDulA>div").bind("click", function () {
        $(".boxDulA>ul").fadeOut(500);
        var random = parseInt(Math.random() * (15 - 0 + 1) + 0);
        $(".boxDulA>ul").eq(random).fadeIn(500);
        NextPrev = random;
        $(".boxDulA>i").text(NextPrev + 1)
    })

    //上下页的公共方法
    function FirstLast() {
        if (NextPrev == -1) {
            NextPrev = 15;
        } else if (NextPrev >= 15) {
            NextPrev = 0;
        }
        $(".boxDulA>ul").slideUp(500);
        $(".boxDulA>ul").eq(NextPrev).slideDown(500);
        $(".boxDulA>i").text(NextPrev + 1)
    }

    // 下一页
    $(".boxDdivRight>span:last").click(function () {
        NextPrev++;
        FirstLast();
    });

    // 上一页
    $(".boxDdivRight>span:first").click(function () {
        NextPrev--;
        FirstLast();
    });


})

// ----------------------------------------------------------------------------------------------------------

var rotateImgName = ["延秋.", "迟意.", "回眸一笑百媚生", "烟烟了了", "茶饭闲谈",
    "78岁吸氧上单", "88岁带癌打野", "85岁残疾中单", "66岁失明射手", "92岁拄拐辅助",
    "闪现躲治疗", "疾跑追河蟹", "金身秀野猪", "斩杀抢buff", "惩戒拆水晶",
    "下吧你去对面", "对面钱给了嘛", "qq到账五毛", "演技给个差评", "技术给个好评",
    "屎前巨饿", "粪海狂蛆", "吞粪狂魔", "屎山魔蝇", "蛆海狂奔",
    "被西施拉到死", "被昭君冰到死", "被妲己控到死", "被木兰秀到死", "被关羽推到死",
    "祖安有套房", "祖安文化大师", "祖安钢琴大师", "祖安猎马人", "祖安留学生"
];
var rotateImg = 1;
for (var i = 0; i < $(".boxEulList>ul").length; i++) {
    // alert(i)
    for (var j = 0; j < 5; j++) {
        $(".boxEulList>ul").eq(i).append("<li><img src='../img/headImg/" + (rotateImg++) + ".jpeg'><span></span><div>" + rotateImgName[rotateImg - 2] + "</div></li>")
    }
}

var boxENextPrev = 0;
$(".boxEhyp").bind("click", function () {
    $(".boxEulList>ul").fadeOut(500);
    var random = parseInt(Math.random() * (6 - 0 + 1) + 0);
    $(".boxEulList>ul").eq(random).fadeIn(500);
    boxENextPrev = random;
})

//上下页的公共方法
function FirstLast() {
    if (boxENextPrev == -1) {
        boxENextPrev = 6;
    } else if (boxENextPrev >= 6) {
        boxENextPrev = 0;
    }
    $(".boxEulList>ul").fadeOut(500);
    $(".boxEulList>ul").eq(boxENextPrev).fadeIn(500);
}

// 下一页
$(".boxEulList>div>i:last").click(function () {
    boxENextPrev++;
    FirstLast();
});

// 上一页
$(".boxEulList>div>i:first").click(function () {
    boxENextPrev--;
    FirstLast();
});


//视频的蒙层
//视频的公共方法
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
    $(".zz").append("<video controls autoplay muted><source src='../video/" + stu + ".mp4'></video>")
    $(".zz>video").css({
        "width": "50%",
        "position": "fixed",
        "top": "25%",
        "left": "25%",
    })
    //添加关闭X
    $(".zz").append("<div class = 'close'></div>");
    $(".zz>.close").css({
        "width": "3%",
        "height": "5%",
        "background": "url('../img/zhuyeImgs/close_100dfdd.png') 0 0 no-repeat",
        "position": "fixed",
        "left": "72%",
        "top": "25.5%"
    })
    //点击关闭X
    $(".close").bind("click", function () {
        $(".zz").remove();
    })
}

//点击视频1
$(".video1").bind("click", function () {
    aa("video1");
})

//点击视频2
$(".video2").bind("click", function () {
    aa("video2");
})


//商品列表
$.getJSON("https://www.fastmock.site/mock/a652b6ded85b24fa02890d863013fcb2/YinYangShi/product", function (data) {
    // console.log(data.data[0].product)

    // 循环添加商品
    var num = 0;
    for (var i = 0; i < $(".sp").length; i++) {
        for (var j = 0; j < 4; j++) {
            $(".sp").eq(i).append("<div><img src = '" + data.data[0].product[num].img + "'><span>" + data
                .data[0].product[num].name + "</span></div>")
            num++;
        }
    }

    //商品绑定事件      悬浮
    $(".sp>div").bind({
        "mouseover": function () {
            $(this).css({
                "transition": "all 0.3s linear",
                "margin-top": "3.5%"
            })
        },
        "mouseout": function () {
            $(this).css({
                "transition": "all 0.3s linear",
                "margin-top": "5%"
            })
        }
    })

// -------------------------------------------------------------------------------------------------------

//人物随鼠标移动变动
$('body').mousemove(function (e) {
    var xx = e.originalEvent.x || e.originalEvent.layerX || 0;
    var yy = e.originalEvent.y || e.originalEvent.layerY || 0;
    // console.log(xx +"____" +yy)
    // console.log($("body").width())
    // console.log($("body").width()/2-100)
    // console.log($("body").width()/2/2)
    // console.log($("body").width()/2/2*3)
    if(xx>$("body").width()/2+120&&xx<1000){                            //4
        $(".gifImg").css({"background-position":"-1.8rem 0"})
    }else if(xx<$("body").width()/2-170&&xx>250){                       //2
        $(".gifImg").css({"background-position":"-0.57rem 0"})
    }else if(xx>1000){                                                  //5
        $(".gifImg").css({"background-position":"-2.4rem 0"})
    }else if(xx<250){                                                   //1
        $(".gifImg").css({"background-position":"0 0"})
    }else{                                                              //3
        $(".gifImg").css({"background-position":"-1.153rem 0"})
    }
});
$(".gifImg").bind("click",function(){
    for(var i = 0; i < $(".yuju>img").length; i++){
        $(".yuju>img").eq(i).hide();
    }
    var random = parseInt(Math.random()*(5-0+1)+0);
    $(".yuju>img").eq(random).fadeIn(1000);
    
})
})

// -------------------------------------------------------------------------------------------------------------------


$(".aa,.ewmImg").hover(function () {
    $(".bb").css({
        "top": "50%",
        "left": "125%",
        "transform": "translate(-50%,-125%)"
    })
    $(".ewmImg").css({
        "top": "53%",
        "left": "80.2%",
        "transform": "translate(-53%, -80.2%)",
        "z-index": "1"
    })
    $(".ewmImg").fadeIn()
    $(".tx").addClass("addtx")
    $(".tx2").addClass("addtx2")
}, function () {
    $(".ewmImg").fadeOut()
    $(".bb").css({
        "top": "50%",
        "left": "65%",
        "transform": "translate(-50%,-65%)"
    })
    $(".ewmImg").css({
        "z-index": "-1",
        "top": "72%",
        "left": "68%",
        "transform": "translate(-68%, -72%)"
    })
    $(".tx").removeClass("addtx")
    $(".tx2").removeClass("addtx2")
})


$(".videozx").click(function(){
    window.location.href = "index3.html";
});
$(".imgzx").click(function(){
    window.location.href = "index4.html";
});