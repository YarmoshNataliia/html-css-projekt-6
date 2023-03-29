//да, мне стыдно

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

buyModalSubmitBtn.addEventListener('click', event => {
  event.preventDefault();
  topSelPopup.classList.remove('is-hidden');
  topSelModal.classList.add('is-hidden');
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

[...document.querySelectorAll('.modal-close-button')].forEach(closeBtn => {
  closeBtn.addEventListener('click', () => {
    hideModal(closeBtn.closest('.modal'));
  });
});

backdrop.addEventListener('click', () => {
  hideModal(backdrop.closest('.modal'));
});
