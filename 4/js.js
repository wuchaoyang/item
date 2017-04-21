/**
 * Created by 朝阳 on 2017/4/21.
 */
window.onload=function(){
    var div=document.getElementById("box").getElementsByTagName("div")

    for(var i=0;i<div.length;i++){
        div[i].onclick=function(){
            alert(this.innerHTML)
        }
    }
}