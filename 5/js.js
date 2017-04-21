/**
 * Created by 朝阳 on 2017/4/21.
 */
window.onload=function(){
    var btn=document.getElementById("btn");
    var input=document.getElementById("input");
    var zhi=document.getElementById("zhi");

    input.onkeyup=function(){
        this.value=this.value.replace(/[^(\d)|(,)]/,"")
    }

    btn.onclick=function(){
       var val=input.value.split(","),
           arr=0
        for(var i in val){
            arr+=parseFloat(val[i])
        }
        zhi.innerHTML=arr
    }
}