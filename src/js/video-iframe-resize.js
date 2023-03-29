var iframe = document.querySelector('.how-its-made-iframe');
function resizeIframe() {
  const screenWidth = window.innerWidth;
  let iframeWidth = 600;
  let iframeHeight = 400;
  if (screenWidth < 375) {
    iframeWidth = 280;
    iframeHeight = 418;
  } else if (screenWidth <= 767) {
    iframeWidth = 335;
    iframeHeight = 500;
  } else if (screenWidth < 1199) {
    iframeWidth = 614;
    iframeHeight = 400;
  } else if (screenWidth >= 1200) {
    iframeWidth = 600;
    iframeHeight = 400;
  }

  iframe.width = iframeWidth;
  iframe.height = iframeHeight;
}
resizeIframe();
window.addEventListener('resize', resizeIframe);
resizeIframe();
