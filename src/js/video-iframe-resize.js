var iframe = document.querySelector('.how-its-made-iframe');
function resizeIframe() {
  var screenWidth = window.innerWidth;
    if (screenWidth < 767) {
        iframe.width = 335;
    iframe.height = 500;
  } else if (screenWidth < 1199) {
    iframe.width = 614;
    iframe.height = 400;
  } else {
    iframe.width = 600;
    iframe.height = 400;
  }
}
resizeIframe();
window.addEventListener('resize', resizeIframe);