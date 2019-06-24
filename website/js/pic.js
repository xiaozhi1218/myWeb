window.onload = function () {
    /*
    分析：
        1.在页面上使用img标签展示图片
        2.定义一个方法，修改图片对象的src属性
        3.定义一个定时器，每隔3秒调用方法一次。
    */

    //修改图片src属性
    var picNumber = 1;

    function fun() {
        picNumber++;
        //判断number是否大于3
        if (picNumber > 3) {
            picNumber = 1;
        }
        //获取img对象
        var img = document.getElementById("banner");
        img.src = "img/banner_" + picNumber + ".jpg";
    }
    //2.定义定时器
    setInterval(fun, 2000);
}