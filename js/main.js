function init() {
  var tru = true;
  var DOMTop = document.getElementById('nav');
  var cLog = document.getElementById('cLog');
  // deBug
  var deBug = false;
  if (deBug) {
    cLog.style.display = 'block';
  }

  document.addEventListener('scroll', function () {
    var clientHeight = document.documentElement.clientHeight;
    // var scrollTop = document.body.scrollTop;
    // var scrollTop = document.documentElement.scrollTop;
    var scrollTop = null;
    if (document.body.scrollTop !== 0) {
      scrollTop = document.body.scrollTop
    } else {
      scrollTop = document.documentElement.scrollTop
    }
    // console.log(scrollTop.scrollTop)
    cLog.innerHTML = `DOMTop.offsetTop:${DOMTop.offsetTop};<br/>clientHeight: ${clientHeight};<br/>scrollTop:${scrollTop};`;
    if (tru && clientHeight + DOMTop.offsetTop + DOMTop.clientHeight < clientHeight + scrollTop) {
      console.log('发现元素')
      DOMTop.setAttribute('class', 'page-nav top');
      tru = false
    }
    if (clientHeight + DOMTop.offsetTop + DOMTop.clientHeight > clientHeight + scrollTop) {
      // DOMTop.removeAttribute('class');
      DOMTop.setAttribute('class', 'page-nav');
      tru = true
    }
  }, false)
}

window.onload = init;