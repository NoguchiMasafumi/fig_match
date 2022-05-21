document.write('<div class="head_menu bor_b_w1 shd2_9">\
    <div class="cont_cont mar_l_at mar_r_at ov_f_hid fnt_s24">\
        <div class="flt_lef mar_r24"><a href="index.htm"><img src="img/ctl.png" style="height:36px;"></a></div>    \
        <div class="flt_lef mar_r24"><a href="index.htm">select play</a></div>    \
        <div class="flt_lef mar_r24"><a href="shop.htm">Shop</a></div>    \
        <div class="flt_lef mar_r24"><a href="javascript:void(0)" onclick="saveCookie()">save</a></div>    \
        <div class="flt_lef"><a href="ad.htm">AD</a></div>    \
    </div>\
</div>\
');

window.onload　=　function() {
    var str  = "";
    str += getCookie();
    document.getElementById("your_point").innerText = str;	
    console.log(str)
}



function getCookie() {
    var cookieStr = document.cookie+";";
    var startNum = cookieStr.indexOf("your_point");
    num = 50;
    if (startNum != -1){
        var endNum = cookieStr.indexOf(";",startNum);
        num = unescape(cookieStr.substring(startNum + "your_point".length + 1, endNum));
    }
    return num;
}
  

function saveCookie() {
    var txt = parseInt(document.getElementById("your_point").innerText);
    var day = new Date();
    day.setTime(day.getTime() + 3600*1000*24*7);
    document.cookie = "your_point=" + escape(txt) + ";expires=" + day.toGMTString();
    //location.reload();
  }