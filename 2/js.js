/**
 * Created by 朝阳 on 2017/4/17.
 */

window.onload=function(){
    var btn=document.getElementById("btn");
    var div=document.getElementById("box").getElementsByTagName("div");

    btn.onclick=function(){
        for(var i=0;i<div.length;i++){
            div[i].style.background="red"
        }
    }

}