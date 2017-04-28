/**
 * Created by 朝阳 on 2017/4/25.
 */
window.onload = function (){
    var span=document.getElementsByTagName("span");
    setInterval(auto,1000)
    auto()
    function auto(){
        var Data=new Date()
        var dates=[Data.getHours(),Data.getMinutes(),Data.getSeconds()]
        for(var i in dates){
            span[i].innerHTML=time(dates[i])
        }
    }
    function time(a){
        return a.toString().replace(/^(\d)$/,"0$1")
    }
}
