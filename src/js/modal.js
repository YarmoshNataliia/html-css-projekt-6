const buyBtns = document.querySelectorAll('.buy-button');

buyBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    showModal(topSelModal);
  });
});

const reviewBtn = document.querySelectorAll('.leave-review-button');
const subscribeBtn = document.querySelectorAll('.subscribe-btn');

const topSelModal = document.querySelector('.top-sel-modal');
const topSelModalForm = document.querySelector('.top-sel-form');
const buyModalSubmitBtn = document.querySelector('.buy-modal-submit-button');
const closeBuyModalBtn = document.querySelector('.modal-btn-close');
const topSelPopup = document.querySelector('.top-sel-popup');
const buyModalPopupCloseBtn = document.querySelector(
  '.buy-modal-popup-close-button'
);

const reviewModal = document.querySelector('.leave-review-modal');
const subscribeModal = document.querySelector('.subscribe-modal');

const backdrop = document.querySelector('.top-sel-back-drop');

function showModal(modal) {
  modal.classList.remove('is-hidden');
  backdrop.classList.remove('is-hidden');
}

function hideModal(modal) {
  modal.classList.add('is-hidden');
  backdrop.classList.add('is-hidden');
}

topSelModalForm.addEventListener('submit', event => {
  event.preventDefault();
  topSelPopup.classList.remove('is-hidden');
  topSelModal.classList.add('is-hidden');
});

closeBuyModalBtn.addEventListener('click', () => {
  topSelModal.classList.add('is-hidden');
  backdrop.classList.add('is-hidden');
});

buyModalPopupCloseBtn.addEventListener('click', () => {
  topSelPopup.classList.add('is-hidden');
  topSelModalForm.submit();
});
reviewBtn.addEventListener('click', () => {
  showModal(reviewModal);
});

subscribeBtn.addEventListener('click', () => {
  showModal(subscribeModal);
});

backdrop.addEventListener('click', () => {
  hideModal(backdrop.closest('.modal'));
});

//да, мне стыдно, комментарии добавлю если закинете сотку на энергетосы на 4441114423214186
