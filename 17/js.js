/**
 * Created by 朝阳 on 2017/4/25.
 */
window.onload = function (){

    var btn=document.getElementById("btn")


    btn.onclick=function(){
        this.innerHTML++
        alert(this.innerHTML)
    }
}
