const cardInput = document.querySelector('[data-credit-card-mask]');

cardInput.addEventListener('input', event => {
  // Удаление всех символов, кроме цифр
  let cardNumber = event.target.value.replace(/[^\d]/g, '');

  // Разбиение номера карты на группы по 4 цифры
  cardNumber = cardNumber.substring(0, 16);
  cardNumber = cardNumber.match(/.{1,4}/g).join(' ');

  // Запись отформатированного номера карты обратно в поле ввода
  event.target.value = cardNumber;
});

const phoneInputs = document.querySelectorAll('[data-phone-mask]');

phoneInputs.forEach(phoneInput => {
  phoneInput.addEventListener('input', event => {
    // Удаление всех символов, кроме цифр
    let phoneNumber = event.target.value.replace(/[^\d]/g, '');

    // Добавление скобок и дефисов в нужные места
    phoneNumber = phoneNumber.substring(0, 9);
    if (phoneNumber.length > 2) {
      phoneNumber =
        phoneNumber.substring(0, 2) + ') ' + phoneNumber.substring(2);
    }
    if (phoneNumber.length > 6) {
      phoneNumber =
        phoneNumber.substring(0, 6) + '-' + phoneNumber.substring(6);
    }
    if (phoneNumber.length > 9) {
      phoneNumber =
        phoneNumber.substring(0, 9) + '-' + phoneNumber.substring(9);
    }

    // Запись отформатированного номера телефона обратно в поле ввода
    event.target.value = phoneNumber;
  });
});
