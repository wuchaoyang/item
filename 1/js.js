/**
 * Created by 朝阳 on 2017/4/17.
 */
function auto(a,b){
    alert(a.value)
    alert(b.value)
}


window.onload=function(){
    var btn=document.getElementById("btn");
    btn.onclick=function(){
    var name=document.getElementById('name');
    var text=document.getElementById('text');

    auto(name,text)
    }
}