/**
 * Created by 朝阳 on 2017/4/24.
 */
window.onload=function(){
    var btn=document.getElementById("btn");
    var list=document.getElementById("list")
    btn.onclick=function(){
        list.style.display=list.style.display=="none"?"block":"none"
    }
}