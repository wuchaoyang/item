/**
 * Created by 朝阳 on 2017/4/21.
 */
window.onload=function(){
    var btn=document.getElementById("btn");
    var list=document.getElementById("list");
    var p=list.getElementsByTagName("p")
    btn.onclick=function(){
        var bli=list.style.display=="block"?"none":"block"
        console.log(bli)
        list.style.display=bli
    }
    p[2].onclick=function(){
        list.style.display="none"
    }
}