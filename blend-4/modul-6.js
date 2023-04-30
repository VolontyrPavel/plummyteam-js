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

const openModalBtnEl = document.querySelector('.js-modal-open');
const backdropEl = document.querySelector('.js-backdrop');
const closeModalBtnEl = document.querySelector('.js-modal-close');

openModalBtnEl.addEventListener('click', onOpenModalBtnElClick);
closeModalBtnEl.addEventListener('click', closeModalWindow);

function onOpenModalBtnElClick(evt) {
  backdropEl.classList.add('is-open');
  window.addEventListener('keydown', onEscClick);
  //   window.addEventListener("keydown", onEscClick, { once: true });

  window.addEventListener('click', onBackdropClick);
}

function closeModalWindow(evt) {
  backdropEl.classList.remove('is-open');
  window.removeEventListener('keydown', onEscClick);
  window.removeEventListener('click', onBackdropClick);
}

function onEscClick(evt) {
  if (evt.code !== 'Escape') {
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

const submitFormEl = document.querySelector('.js-modal__form');
submitFormEl.addEventListener('submit', onSubmint);

function onSubmint(e) {
  e.preventDefault();
  console.dir(e.currentTarget);

  const {
    elements: { name, email, password },
  } = e.currentTarget;
  console.log(name);

  if (!email.value || !password.value) {
    return alert('email or password is empty');
  }

  const userData = {
    name: name.value || 'anonymus',
    email: email.value,
    password: password.value,
  };

  console.log(userData);

  submitFormEl.reset();

  closeModalWindow();
}

//TODO:====================02=============TODOS===============

// ### Список справ todos:

// 1 - Напиши скрипт для застосунку todos. Реалізуй методи додавання та видалення щоденних справ.
//  2 - Реалізуй перевірку на неможлівість додати пусту справу до списку справ.

// #### Виконуй завдвння послідовно:

// - Спочатку знайди елементи у Дом дереві, з якими тобі потрібно працювати.
// - Додай слухачі подій з відповідними подіями
// - Пропиши три функції, які тобі допоможуть це реалізувати
// - Функція обробник на додавання елементів "onClickSubmit". Її завдання, зчитати значення з інпуту, виконай за допомогою "currentTarget.elements", також не забувай
//   про метод trim(), який видаляє пробіли. Ця функція повинна робити перевірку на пустий інпут, створювати обьект, додавати до масиву нову todos і чистити інпут. Також
//   запускати функцію рендера сторінкі.
// - Функція "onBtnClick", яка буде видаляти todos. Вона повинна знайти id todos, яку потрібно видалити. Значення id можно считати з дата атрибуту за допомогою
//   "target.dataset.id", але не забувай, що там буде рядок і можно використати метод "parseInt". Для видалення можно використати метод "filter". Після видалення ми
//   повинні відрендорити сторінку за допомогою функції "updateList".
// - І сама функція "updateList". Ії завдання створити розмітку за допомого метода createElement і setAttribute, додати на сторінку за допомогою метода "append". Не
//   забувай чистити розмітку перед її вставкою.

let items = [];

const formEl = document.querySelector('.js-todos__form');
const listEl = document.querySelector('.js-list');

formEl.addEventListener('submit', onSubmitClick);
listEl.addEventListener('click', onBtnClick);

function onSubmitClick(evt) {
  evt.preventDefault();
  const input = evt.currentTarget.elements['user-todos'];
  console.log(input.value);

  const todos = input.value.trim();

  if (!todos) {
    return alert('Значення не може бути пустим!');
  }
  const item = {
    id: Date.now(),
    text: todos,
  };
  items.push(item);
  input.value = '';
  console.table(items);

  updateList();
}

function updateList() {
  const markup = items.map((value) => {
    const liEl = document.createElement('li');
    const spanEl = document.createElement('span');
    spanEl.textContent = value.text;
    liEl.appendChild(spanEl);
    const btnEl = document.createElement('button');
    btnEl.setAttribute('type', 'button');
    btnEl.setAttribute('data-id', value.id);
    btnEl.setAttribute('class', 'delete');
    btnEl.textContent = 'Видалити';
    liEl.appendChild(btnEl);
    return liEl;
  });
  listEl.innerHTML = '';

  listEl.append(...markup);
}

function onBtnClick(evt) {
  const todosId = parseInt(evt.target.dataset.id);
  console.log(todosId);
  items = items.filter(({ id }) => id !== todosId);
  updateList();
}
