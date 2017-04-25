/**
 * Created by 朝阳 on 2017/4/24.
 */
window.onload=function(){
    var li=document.getElementsByTagName("ul")[0].getElementsByTagName("li");
    var img=document.getElementsByTagName("img");
    var p=document.getElementsByTagName("p")

    for(var i=0;i<li.length;i++){
        img[i].index=p[i].index=i
        p[i].onmouseover=function(){
            li[this.index].className="ind"
            img[this.index].className="show"
        }
        p[i].onmouseout=function(){
            li[this.index].className=""
            img[this.index].className="hide"
        }
        img[i].onmouseover=function(){
            li[this.index].className="ind"
            this.className="show"
        }
        img[i].onmouseout=function(){
            li[this.index].className=""
            this.className="hide"
        }
    }
}