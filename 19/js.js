/**
 * Created by 朝阳 on 2017/4/25.
 */
window.onload = function (){
    var docu=document.body,
        i=0;
    setInterval(auto,1000)
    auto()
    function auto(){
        docu.innerHTML=++i
    }
}
