function curve(name, num, height, heaved, hz, reveal, start) { //id名和曲线数量,端点高低,起伏差,起伏频率,填充色

    this.name = name;
    if ((num & 1) != 0) num--;
    this.num = num;
    this.height = height;
    this.heaved = heaved;
    this.max = height + heaved; //最低处
    this.min = height - heaved; //最高处
    this.hz = hz;
    this.heavedval = {};
    for (this.i = 0; this.i <= num; this.i++) { //初始化起伏
        this.heavedval[this.i] = {};
        if ((this.i & 1) == 0) this.heavedval[this.i]['heaved'] = height - heaved; //双数
        else this.heavedval[this.i]['heaved'] = height + heaved; //单数
    }
    this.new(this.width * (start || 0));
    this.object = document.getElementById(name);
    this.object.width = this.width;
    this.canvas = this.object.getContext("2d");
    this.canvas.fillStyle = reveal; //设定填充颜色
    this.time();
}
curve.prototype.width = document.body.clientWidth;
curve.prototype.point = function (start, end, heaved) { //曲线
    this.canvas.lineTo(start, this.height); //起点
    this.canvas.bezierCurveTo((start + end) / 2, heaved, (start + end) / 2, heaved, end, this.height); //终点
};
curve.prototype.start = function () { //起点
    this.canvas.clearRect(0, 0, this.width, this.object.height); //清除画板
    this.canvas.beginPath(); //创建新路径
    this.canvas.moveTo(0, this.object.height);
};
curve.prototype.end = function () { //终点
    this.canvas.lineTo(this.width, this.object.height);
    this.canvas.fill();
};
curve.prototype.new = function (start) { //初始化值
    var start = start || 0;
    for (this.i = 0; this.i <= this.num; this.i++) {
        this.heavedval[this.i]['num'] = this.width / this.num * this.i - start;
    }
};
curve.prototype.motion = function () {
    if (this.heavedval[0]['heaved'] >= this.max) this.hz = -Math.abs(this.hz);
    if (this.heavedval[0]['heaved'] <= this.min) this.hz = Math.abs(this.hz);
    this.start();
    for (this.i = 0; this.i < this.num; this.i++) {
        if ((this.i & 1) == 0) this.heavedval[this.i]['heaved'] += this.hz; //双数
        else this.heavedval[this.i]['heaved'] -= this.hz; //单数
        this.point(this.heavedval[this.i]['num'] -= 1, this.heavedval[this.i + 1]['num'], this.heavedval[this.i]['heaved']);
    }
    this.heavedval[this.num]['num'] -= 1;
    for (this.i = 0; this.i < this.num; this.i++) { //复制
        this.point(this.heavedval[this.i]['num'] + this.width, this.heavedval[this.i + 1]['num'] + this.width, this.heavedval[this.i]['heaved']);
    }
    this.end();
    if (this.heavedval[this.num]['num'] <= 0) this.new();
};
curve.prototype.time = function () {
    var time = this;
    setInterval(function () {
        time.motion();
    }, 2);
};
(function () {
    for (var a = 0, b = ['ms', 'moz', 'webkit', 'o'], c = 0; b.length > c && !window.requestAnimationFrame; ++c) window.requestAnimationFrame = window[b[c] + 'RequestAnimationFrame'], window.cancelAnimationFrame = window[b[c] + 'CancelAnimationFrame'] || window[b[c] + 'CancelRequestAnimationFrame'];
    window.requestAnimationFrame || (window.requestAnimationFrame = function (b) {
        var d = (new Date).getTime(),
            e = Math.max(0, 16 - (d - a)),
            f = window.setTimeout(function () {
                b(d + e)
            }, e);
        return a = d + e, f
    }), window.cancelAnimationFrame || (window.cancelAnimationFrame = function (a) {
        clearTimeout(a)
    })
})();

function curves(name, cheight, waveLength, height, curveFactor, speed, reveal, num) {
    var canvas = document.getElementById(name);
    var ctx = canvas.getContext('2d');
    var stageWidth = 0;
    var stageHeight = 0;
    var stageWidth2 = 0;
    var stageHeight2 = 0;
    var totalLength2 = 0;
    var distanceX = num || 0;
    var DELTA_WIDTH = 1;
    var config = {
        height: height,
        waveLength: waveLength,
        curveFactor: curveFactor,
        speed: speed
    }

    function init() {

        window.onresize = onResize;
        onResize();
        render();
    }

    function onResize() {
        stageWidth = canvas.width = window.innerWidth;
        stageHeight = canvas.height = cheight;
        stageWidth2 = stageWidth / 2;
        stageHeight2 = stageHeight / 2;
        totalLength2 = Math.ceil(stageWidth2 / DELTA_WIDTH) * DELTA_WIDTH;
        redraw();
    }

    function render() {
        redraw();
        requestAnimationFrame(render);
    }

    function _getHeight(distanceX, x) {
        var offsetX = ((distanceX + x) / totalLength2 - 1) * (totalLength2 / config.waveLength);
        var waveFactor = Math.cos((x / totalLength2 - 1) * Math.PI / 2);
        return Math.cos(offsetX * Math.PI) * Math.pow(waveFactor, config.curveFactor) * config.height;
    }

    function redraw() {
        var x = stageWidth2 - totalLength2;
        var toX = x + totalLength2 * 2;
        var centerY = stageHeight2;
        ctx.clearRect(0, 0, stageWidth, stageHeight);
        ctx.beginPath();
        ctx.moveTo(x, stageHeight);
        for (; x < toX; x += DELTA_WIDTH) {
            ctx.lineTo(x, centerY - _getHeight(distanceX, x));
        }
        ctx.lineTo(x, centerY - _getHeight(distanceX, x));
        ctx.lineTo(x + DELTA_WIDTH, stageHeight);
        ctx.fillStyle = reveal;
        ctx.fill();
        distanceX += config.speed;
    }
    init();
}