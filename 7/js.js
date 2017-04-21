/**
 * Created by 朝阳 on 2017/4/21.
 */

window.onload=function(){
    var li=document.getElementById("tab").getElementsByTagName("li")
    var ul=document.getElementById("content").getElementsByTagName("ul")
    for(var i=0;i<li.length;i++){
        li[i].index=i
        li[i].onmouseover=function(){
            for(var o=0;o<li.length;o++) li[o].className=""
            this.className="bg"
            for(var x=0;x<ul.length;x++) ul[x].style.display="none"  //ul全部隐藏
            ul[this.index].style.display="block"  //相应的ul 显示
        }
    }
}