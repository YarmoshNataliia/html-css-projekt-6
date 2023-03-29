const buyBtns = document.querySelectorAll('.buy-button');

buyBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    showModal(topSelModal);
  });
});

const closeMobalBtns = document.querySelectorAll('.js-close-modal');

closeMobalBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    const modal = btn.closest('.modal');
    if (modal) {
      hideModal(modal);
    }
  });
});

const subscribeBtn = document.querySelector('.subscribe-btn');

const topSelModal = document.querySelector('.top-sel-modal');
const topSelModalForm = document.querySelector('.top-sel-form');
const buyModalSubmitBtn = document.querySelector('.buy-modal-submit-button');
const closeBuyModalBtn = document.querySelector('.modal-btn-close');
const topSelPopup = document.querySelector('.top-sel-popup');
const buyModalPopupCloseBtn = document.querySelector(
  '.buy-modal-popup-close-button'
);

const reviewModal = document.querySelector('.modal-review');
const reviewBtn = document.querySelector('.leave-review-button');
const reviewModalForm = document.querySelector('.modal-review-form');
const reviewPopup = document.querySelector('.review-popup');
const reviewPopupCloseButton = document.querySelector(
  '.review-popup-close-button'
);

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

reviewModalForm.addEventListener('submit', event => {
  event.preventDefault();
  reviewPopup.classList.remove('is-hidden');
  reviewModal.classList.add('is-hidden');
});

closeBuyModalBtn.addEventListener('click', () => {
  topSelModal.classList.add('is-hidden');
  backdrop.classList.add('is-hidden');
});

buyModalPopupCloseBtn.addEventListener('click', () => {
  topSelPopup.classList.add('is-hidden');
  topSelModalForm.submit();
});

reviewPopupCloseButton.addEventListener('click', () => {
  reviewPopup.classList.add('is-hidden');
  reviewModalForm.submit();
});
reviewBtn.addEventListener('click', () => {
  showModal(reviewModal);
});

subscribeBtn.addEventListener('click', () => {
  showModal(subscribeModal);
});

//да, мне стыдно, комментарии добавлю если закинете сотку на энергетосы на 4441114423214186
