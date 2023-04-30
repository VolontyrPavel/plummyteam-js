//TODO:===============01====Модальне вікно==================

// ### Модальне вікно:

// 1 - Реалізувати відкриття модального вікна по кліку по кнопці "Відкрити модалку"
//  2 - Реалізувати закриття модального вікна по кліку на "кнопку", "ESC" і "бекдроп". Не забувай знімати слухача події після закриття модального вікна

// #### Виконуй завдвння послідовно:

// - Спочатку знайди елементи у Дом дереві, з якими тобі потрібно працювати.
// - Створи 4 функції onOpenModalBtnElClick, closeModalWindow, onEscClick, onBackdropClick. Не забувай робити перевірку на цільовий елемент.
// - Клас який відповідає за ,відображення і скриття модального вікна "is-open"

// ### Робота з формою:

// 1 - Реалізуй відправку данних через подію "submit" на формі
// 2 - Зроби перевірку на заповнення інпутів "email" і "password". Вони не повинні бути пустими. Поле "name", може бути пустим для приватності користувача
// виводь про це в повідемленні за допомогою метода "alert" - "email or password is empty"
// 3 - При відправки форми в консоль виведи обьект з данними користувача. Реалізуй перевірку, якщо еористувач не ввів імʼя, записуй в обьект рядок "Anonimus"

// #### Виконуй завдвння послідовно:

// - Спочатку знайди елементи у Дом дереві, з якими тобі потрібно працювати.
// - Повісь слухача події на форму
// - Пропиши колбєк функцію onSubmit. Не забувай про відміну поведінки по змовчуванню. Значення інпутів знайди за допомогою currentTarget і його elements.
// - Після отправки почисти форму і реалізуй автоматичне закриття модального вікна

const openModalBtnEl = document.querySelector(".js-modal-open");
const backdropEl = document.querySelector(".js-backdrop");
const closeModalBtnEl = document.querySelector(".js-modal-close");

openModalBtnEl.addEventListener("click", onOpenModalBtnElClick);
closeModalBtnEl.addEventListener("click", closeModalWindow);

function onOpenModalBtnElClick(evt) {
  backdropEl.classList.add("is-open");
  window.addEventListener("keydown", onEscClick);
  //   window.addEventListener("keydown", onEscClick, { once: true });

  window.addEventListener("click", onBackdropClick);
}

function closeModalWindow(evt) {
  backdropEl.classList.remove("is-open");
  window.removeEventListener("keydown", onEscClick);
  window.removeEventListener("click", onBackdropClick);
}

function onEscClick(evt) {
  if (evt.code !== "Escape") {
    return;
  }

  closeModalWindow();
}

function onBackdropClick(evt) {
  if (backdropEl !== evt.target) {
    return;
  }

  closeModalWindow();
}
