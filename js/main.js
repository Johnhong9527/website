/* JavaScript判断元素即将出现在文档可视区域或离开文档可视区域.
一、判断元素是否处于可视文档区域顶部
判断条件:DOMTop.offsetTop + clientHeight - 10 < clientHeight + scrollTop
解析:
  获取元素距离文档顶端的长度,然后与窗口的高度相加;
  接着,再通过获取窗口滚动条顶端与文档顶端的距离;
  并通过判断得到元素是否处于,距离可视文档区域的顶部10个单位的位置.
二、判断元素是否即将出现在可视窗口的底部
判断条件:DOMTop.offsetTop -10 < clientHeight + scrollTop
解析:基本思路同上一致.
 */
function init() {
  var DOMTop = document.getElementById('box');
  document.addEventListener('scroll', function () {
    var clientHeight = document.documentElement.clientHeight;
    var scrollTop = document.documentElement.scrollTop;
    if (DOMTop.offsetTop + clientHeight - 10 < clientHeight + scrollTop) {
      console.log('发现元素')
    }
  })
}

window.onload = init;
// delete init();


/*jQuery判断元素即将出现在文档可视区域或离开文档可视区域.
思路同上一致,表达方式不同
 当元素距离可视区域还有10的长度时,执行相关程序*/
/*$(document).ready(function () {
  $(window).scroll(function () {
    // console.log($(window).scrollTop() +  $(window).height())
    // 文档距离屏幕可视区域的距离
    var DOMTop = $('.box').offset().top + 10;
    // 文档已经滑动的距离 + 窗口的高度
    var DOMScrollHeight = $(window).scrollTop() +  $(window).height();
    // 元素距离可视区域顶部距离为10的时候触发
    if (DOMTop < DOMScrollHeight) {
      console.log('DOMTop' + DOMTop);
      console.log('DOMScrollHeight' + DOMScrollHeight);
    }
  });
});*/
