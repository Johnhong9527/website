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
    if (clientHeight + DOMTop.offsetTop + DOMTop.clientHeight > clientHeight + scrollTop) {
      DOMTop.setAttribute('class', 'page-nav');
      tru = true
    }
  }, false)
}

window.onload = init;