window.addEventListener('DOMContentLoaded', function () {
  var video = this.document.querySelector('.hitm-video');
  video.addEventListener('click', function () {
    if (video.classList.contains('video-inserted')) {
      return;
    }
    video.classList.add('video-inserted');
    video.insertAdjacentHTML(
      'afterbegin',
      '<iframe class="hitm-iframe" src="https://www.youtube.com/embed/mGnpyv25ILU?autoplay=1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>'
    );
  });
});
