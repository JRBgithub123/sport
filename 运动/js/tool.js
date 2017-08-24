/**
 * Created by jameswatt on 16/9/10.
 */



function $(id) {
    return  document.getElementById(id)
}



//获取一个元素 的当前样式
function getStyle(element) {
    if (element.currentStyle){
        //ie
        return element.currentStyle;
    }else {
        //chrome ff
        return getComputedStyle(element);
    }

}
//获取一个元素的某个属性值
function getStyle(element,arrt) {
    // left px
    if(element.currentStyle){
        //ie
        return element.currentStyle[arrt];
    }else {
        //  其他浏览器
        return getComputedStyle(element)[arrt];
    }
}