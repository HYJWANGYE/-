function rem(){
    var ui = 375;
    var winW = document.documentElement.clientWidth;
    var rate = winW/ui;
    document.documentElement.style.fontSize = rate*100+"px";
}
rem();

window.onresize = function(){
    this.rem();
}
