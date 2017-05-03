/**
 * Created by 朝阳 on 2017/5/2.
 */

window.onload=function(){
    var ul=document.getElementsByTagName("ul")[0];
    var li=document.getElementsByTagName("li");
    var list=document.getElementById("list");

    for(var i=0;i<li.length;i++){
        li[i].index=i
        li[i].onmouseover=function(){
            var cliw=this.offsetWidth
            list.innerHTML=this.innerHTML
            list.style.left=cliw*this.index+40+"px"
            list.style.display="block"
            this.cancelBubble=true
            }

            this.onmouseout=function(){

                setTimeout(function(){
                    list.style.display="none"
                },500)
            }
        }
    // ul.onmouseout=function(){
    //     setTimeout(auto,500)
    // }


}