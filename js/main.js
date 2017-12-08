function init() {
  // 导航条动画,初始化
  DomScroll();

  // 导航条动画，设定
  function DomScroll() {
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

  // 异步执行文章标题的动画
  setTimeout(function () {
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
  }, 10)

  let aTag = document.querySelectorAll('.animation-top a');
  for (let i = 0; i < aTag.length; i++) {
    aTag[i].addEventListener('click', function () {
      var $target = document.getElementById(this.hash.slice(1));
      scrollToTop($target.offsetTop);

      function scrollToTop(scrollDuration) {
        var scrollTop = null,
          scrollStep = null,
          s = 0;
        if (document.body.scrollTop !== 0) {
          scrollTop = document.body.scrollTop
        } else {
          scrollTop = document.documentElement.scrollTop
        }
        scrollStep = scrollTop = Number.parseInt(scrollTop);
        console.log('滚动前，滚动条位置:' + scrollTop);
        console.log('目标位置：' + scrollDuration);
        var scrollInterval = setInterval(function () {
          if (s < 26) {
            window.scrollTo(0, scrollStep + (scrollDuration - scrollTop) / 25 * s - 20);
            s++;
          }
          else {
            clearInterval(scrollInterval);
            scrollStep = null;
          }
        }, 15);
      }

    }, false);
  }

  /*$('.animation-top a').click(function () {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      let $target = $(this.hash);
      $target = $target.length && $target || $('[name=' + this.hash.slice(1) + ']');
      console.log(this.hash.slice(1));
      if ($target.length) {
        let targetOffset = $target.offset().top;
        $('html,body').animate({
            scrollTop: targetOffset
          },
          250);
        return false;
      }
    }
  });*/
}


window.onload = init;