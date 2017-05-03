/**
 * Created by 朝阳 on 2017/5/2.
 */

window.onload=function(){
    var btn=document.getElementById("btn");
    var input=document.getElementsByTagName("input")[0];
    var bost=true
    input.onkeyup=function(){
        this.value=this.value.replace(/[^\d]/,"")
    }
    btn.onclick=function(){
        if(bost){
            btn.innerHTML="关闭"
            bost=false
            times=setInterval(auto,1000)
        }else{
            btn.innerHTML="开启"
            bost=true
            clearInterval(times)
        }
    }
    function auto(){
        if(input.value>=1){
            input.value-=1
        }
    }
}