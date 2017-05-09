/**
 * Created by 朝阳 on 2017/5/9.
 */

window.onload=function(){
    var input=document.getElementsByTagName("input");
    for(var i=0;i<input.length;i++){
        input[i].onfocus=function(){
            this.style.outline="none"
            this.style.border="2px solid red"
        }

        input[i].onblur=function(){
            this.style.border="1px solid #999"
        }
    }

}