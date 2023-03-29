var iframe = document.querySelector('.how-its-made-iframe');

// function resizeIframe() {
//   var screenWidth = window.innerWidth;
//   if (screenWidth < 375) {
//     iframe.width = 280;
//     iframe.height = 418;
//   } else if (screenWidth < 767) {
//     iframe.width = 335;
//     iframe.height = 500;
//   } else if (screenWidth < 1199) {
//     iframe.width = 614;
//     iframe.height = 400;
//   } else {
//     iframe.width = 600;
//     iframe.height = 400;
//   }
// }

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
