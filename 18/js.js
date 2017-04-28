/**
 * Created by 朝阳 on 2017/4/25.
 */
window.onload = function (){

    var btn=document.getElementById("btn");
    var input=document.getElementsByTagName("input");
    var span=document.getElementsByTagName("span");
    for(var i=0;i<input.length;i++){
        input[i].onkeyup=function(){
            this.value=this.value.replace(/[^\d]/,"")
        }

    }
    btn.onclick=function(){
        if(input[0].value=="" || input[1].value==""){
            alert("请输入数字")
        }else{
            span[0].innerHTML=Math.max(input[0].value,input[1].value)
        }

    }
}
