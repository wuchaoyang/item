/**
 * Created by 朝阳 on 2017/4/25.
 */
window.onload = function (){
    var input=document.getElementsByTagName("input");
    var span=document.getElementsByTagName("span");
    var btn=document.getElementById("btn")

    for(var i=0;i<input.length;i++){
        input[i].onkeyup=function(){
            this.value=this.value.replace(/[^\d]/,"")
        }
    }
    btn.onclick=function(){
        var inparr=input[0].value
        var inpnum=input[1].value
        console.log(inparr)
        if(inparr=="" || inpnum==""){
            alert("请输入数字")
        }
        span[0].innerHTML=parseInt(inparr)+parseInt(inpnum)
    }
}
