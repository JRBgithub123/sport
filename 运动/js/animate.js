/**
 * Created by jameswatt on 16/9/12.
 */
//匀速动画的封装
function uniformAnimate(element,target) {
    //每次添加定时器的时候都去结束上一次的定时器
    clearInterval(element.timer);

    //判断 如果往左 speed 负数
    //如果往右  speed正数
    var speed = 5;
    if(element.offsetLeft > target){
        //应该 往左
        speed = -5;
    }else{
        //应该往右走
        speed = 5;
    }

    element.timer = setInterval(function () {
        element.style.left =  element.offsetLeft + speed + "px";
        //剩余路程
        // 100 - 500 =  -400
        var cha = Math.abs(target - element.offsetLeft) ;
        //console.log(cha);
        //小于等于 步长

        //什么时候停止
        if(cha <= Math.abs(speed)){
            //达到目的地
            //为什么会到 505
            //每一步 走 5 px
            //到目的地治差一步的时候 结束定时器
            clearInterval(element.timer);
            //直接跳到目的器
            element.style.left =  target + "px";
        }

    },10);
}

//封装缓动动画
function animate(element,target) {
    //结束上一次的定时器，防止 多次产生定时器
    clearInterval(element.timer);
    element.timer = setInterval(function () {
        //速度 或者 步长   剩余路程除以一个固定的数 10
        var step = (target - element.offsetLeft) / 10;
        step = step > 0 ? Math.ceil(step) : Math.floor(step);
        element.style.left = element.offsetLeft + step + "px";
        if(target == element.offsetLeft){//结束条件 结束定时器
            clearInterval(element.timer);
        }
    },30);
}