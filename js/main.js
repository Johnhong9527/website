function init() {
  var tru = true;
  var DOMTop = document.getElementById('nav');
  var cLog = document.getElementById('cLog');
  // deBug
  var deBug = false;
  if (deBug) {
    cLog.style.display = 'block';
  }
  /*debug*/
  // cLog.innerHTML
  setTimeout(function () {
    var animateIn = document.querySelectorAll('.container .title strong');
    // console.log(animateIn.getAttribute('class'))
    // console.log(animateIn)
    var that = null;
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
  document.addEventListener('scroll', function () {
    var clientHeight = document.documentElement.clientHeight;
    var scrollTop = null;
    console.log(document.documentElement.scrollLeft)
    if (document.body.scrollTop !== 0) {
      scrollTop = document.body.scrollTop
    } else {
      scrollTop = document.documentElement.scrollTop
    }
    if (tru && clientHeight + DOMTop.offsetTop + DOMTop.clientHeight < clientHeight + scrollTop) {
      DOMTop.setAttribute('class', 'page-nav top');
      tru = false
    }
    if (clientHeight + DOMTop.offsetTop + DOMTop.clientHeight - 100 > clientHeight + scrollTop) {
      DOMTop.setAttribute('class', 'page-nav');
      tru = true
    }
  }, false)
}

window.onload = init;