/**
 * Created by 朝阳 on 2017/4/17.
 */

window.onload = function ()
{
    var box = document.getElementById("box");
    box.onmouseover = function ()
    {
        box.className = "hover"
    };
    box.onmouseout = function ()
    {
        box.className = ""
    }
};
