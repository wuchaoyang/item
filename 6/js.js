/**
 * Created by 朝阳 on 2017/4/21.
 */
var changeStyle=function(ele,name,value){
    ele.style[name]=value
}
window.onload=function(){
    var div = document.getElementById("div1");
    var btn = document.getElementsByTagName("button");
    var input = document.getElementsByTagName("input");

    btn[0].onclick=function(){
        changeStyle(div,input[0].value,input[1].value)
    }
    btn[1].onclick=function(){
        div.removeAttribute("style")
    }
}