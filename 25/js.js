/**
 * Created by 朝阳 on 2017/5/9.
 */

window.onload=function(){
    var box=document.getElementById("box")
    document.onkeydown=function(){
        var event=event || window.event
        box.innerHTML=event.keyCode
        return false;
    }
}