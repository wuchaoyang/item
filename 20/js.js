/**
 * Created by 朝阳 on 2017/4/25.
 */
window.onload = function (){
    var input=document.getElementsByTagName("input")[0],
        btn=document.getElementById("btn");

    input.onkeyup=function(){
        this.value=this.value.replace(/[^\d]/,"")
    }
    btn.onclick=function(){
        if(input.value==""){
            alert("请输入数字")
        }else{
            alert(input.value.length==2?"√ 是两位数" : "这是" + input.value.length + "位数")
        }
    }
}
