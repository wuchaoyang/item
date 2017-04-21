/**
 * Created by 朝阳 on 2017/4/21.
 */
window.onload=function(){
    var li=document.getElementsByTagName("li");
    for(var i=0;i<li.length;i++){
        li[i].onmouseover=function(){
            this.style.opacity="1"
        }
        li[i].onmouseout=function(){
            this.style.opacity=".5"
        }
    }
}