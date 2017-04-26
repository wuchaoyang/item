/**
 * Created by 朝阳 on 2017/4/24.
 */
window.onload=function(){
    var himg=document.getElementsByTagName("h2")[0].getElementsByTagName("img")[0];
    var list=document.getElementsByTagName("ul")[0].getElementsByTagName("img");
    for(var i=0;i<list.length;i++){
        list[i].onmouseover=function(){
            var img=new Image()
            img.src=himg.src=this.src.replace(/small/,"big")
        }
    }
}