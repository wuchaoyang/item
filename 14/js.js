/**
 * Created by 朝阳 on 2017/4/25.
 */
window.onload = function ()
{
    var fan = document.getElementById("fan");
    var input = document.getElementsByTagName("input");
    var quan = document.getElementById("quan");
    var isCheckAll = function () {
        for (var i = 1, n = 0; i < input.length; i++) {
            input[i].checked && n++
        }
        input[0].checked = n == input.length - 1;
        quan.innerHTML = input[0].checked ? "全不选" : "全选"
    };
    //全选/全不选
    input[0].onclick = function () {
        for (var i = 1; i < input.length; i++) {
            input[i].checked = this.checked
        }
        isCheckAll()
    };
    //反选
    fan.onclick = function () {
        for (var i = 1; i < input.length; i++) {
            input[i].checked = !input[i].checked
        }
        isCheckAll()
    };
    //根据复选个数更新全选框状态
    for (var i = 1; i < input.length; i++) {
        input[i].onclick = function () {
            isCheckAll()
        }
    }
}
