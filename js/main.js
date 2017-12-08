function init() {
  // 导航条动画,初始化
  navAnimation();

  // 导航条动画，设定
  function navAnimation() {
    let DOMTop = document.getElementById('nav'), // 获取导航对象
      clientHeight = document.documentElement.clientHeight, // 获取窗口可视区域高度
      tru = true,  // 是否替换类名的依据
      clientHeightScrollTop = clientHeight + DOMTop.offsetTop + DOMTop.clientHeight; // 是否替换类名的依据
    // 监听文档滚动条事件，绑定动画
    document.addEventListener('scroll', function () {
      let scrollTop = null;
      if (document.body.scrollTop !== 0) {
        scrollTop = document.body.scrollTop
      } else {
        scrollTop = document.documentElement.scrollTop
      }
      if (tru && clientHeightScrollTop < clientHeight + scrollTop) {
        DOMTop.setAttribute('class', 'page-nav top');
        tru = false
      }
      if (clientHeightScrollTop > clientHeight + scrollTop) {
        DOMTop.setAttribute('class', 'page-nav');
        tru = true
      }
    }, false);
  }


  /*
  # 锚链接跳转过度
  条件：
    1.目标位置 & 滚动条位置 距离过近
    2.目标位置 > 滚动条位置
    3.目标位置 < 滚动条位置
  策略：
    1.获取需要绑定事件的对象；
    2.使用for循环语句，给获取到的对象集合绑定事件；
    3.window.scrollTo(X,Y); 备注：X=window水平方向的滚动条移动位置；Y=window水平方向的滚动条移动位置;
    4.根据条件，执行不同事件。
    5.获取`目标位置 & 滚动条位置`的间距，除以25。然后用该数值与`滚动条位置`相加或相减。而累加或累减的过程通过setInterval()定时器方法来控制。
    6.程序执行完毕之后，用clearInterval()方法清除定时器。
   */
  anchorLinkJumpTransition();

  function anchorLinkJumpTransition() {
    let aTag = document.querySelectorAll('.animation-top a');
    for (let i = 0; i < aTag.length; i++) {
      aTag[i].addEventListener('click', function () {
        var $target = document.getElementById(this.hash.slice(1));
        scrollToTop($target.offsetTop);

        function scrollToTop(scrollDuration) {
          let scrollTop = null, // 滚动条当前位置
            scrollStep = null, // 滚动条累加前的位置
            s = 0; // 关闭计时器的条件 s = 25时
          if (document.body.scrollTop !== 0) {
            scrollTop = document.body.scrollTop
          } else {
            scrollTop = document.documentElement.scrollTop
          }
          scrollStep = scrollTop = Number.parseInt(scrollTop);
          console.log('滚动前，滚动条位置:' + scrollTop);
          console.log('目标位置：' + scrollDuration);
          // 目标位置 & 滚动条位置 距离过近
          console.log(Math.abs(scrollTop - scrollDuration))
          if (Math.abs(scrollTop - scrollDuration) > 21) {
            let scrollInterval = setInterval(function () {
              if (s < 26) {
                // s 是累加的，所以用来跟`目标位置 & 滚动条位置`的间距，相乘，获得过渡效果。
                window.scrollTo(0, scrollStep + (scrollDuration - scrollTop) / 25 * s);
                s++;
              }
              else {
                clearInterval(scrollInterval);
                scrollStep = null;
              }
            }, 10);
          }
        }
      }, false);
    }
  }


  // 异步执行文章标题的动画
  animateIn();

  function animateIn() {
    let animateIn = document.querySelectorAll('.container .title strong');
    // console.log(animateIn.getAttribute('class'))
    // console.log(animateIn)
    let that = null;
    for (let i = 0; i < animateIn.length; i++) {
      animateIn[i].addEventListener('click', function () {
        if (that !== null) {
          that.removeAttribute('class');
          if (that === this) {
            this.removeAttribute('class');
            that = null;
            return;
          }
        }
        this.setAttribute('class', 'animate-in');
        that = this;
      })
    }
  }

  // deBug
  let deBug = false;
  deBugF(deBug);

  function deBugF(deBug) {
    if (!deBug) {
      return;
    }
    console.log('deBug')
    let cLog = document.getElementById('cLog'); // 错误信息加载

    if (deBug) {
      cLog.style.display = 'block';
    }
    /*debug*/
    // cLog.innerHTML
  }
}


window.onload = init;
delete init();