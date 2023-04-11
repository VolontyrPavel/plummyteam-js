//! Class
//TODO:=================1=============================

// Виправте помилки, щоб код працював
// const product = {
//   price: 5000,
//   showPrice() {
//     console.log(this.price);
//   },
// };
// product.showPrice();

//TODO:=================2=============================

//Виправте помилки, щоб код працював
// const product = {
//   price: 5000,
//   showPrice() {
//     console.log(this.price);
//   },
// };

// function callAction(action) {
//   action();
// }

// callAction(product.showPrice.bind(product));

//? answer

//TODO:=========task-3=================

//Напиши функцію конструктор User для створення користувача з такими властивостями
//a. userName - ім'я, рядок
//b. age - вік, число
//c. numbersOfPost - кількість постів, число
//d. клас очікує 1 параметр - об'єкт налаштувань з однойменними властивостями

//Додай метод getInfo(), який повертає рядок:
//`Користувачеві ${} ${} років і в нього ${} публікацій.`

// const User = function (userObject) {
//   const { userName, age, numbersOfPost } = userObject;
//   this.userName = userName;
//   this.age = age;
//   this.numbersOfPost = numbersOfPost;
//   this.getInfo = function () {
//     console.log(
//       `Користувачеві ${this.userName} ${this.age} років і в нього ${this.numbersOfPost} публікацій.`
//     );
//   };
// };
// const polly = new User({ userName: "Polly", age: 30, numbersOfPost: 15 });
// console.log(polly);
// polly.getInfo();

//TODO:=========task-4=================

//Напиши функцію конструктор Storage який створює об'єкти
//Для управління складом товарів.
//При виклику отримуватиме один агрумент - початковий масив товарів,
//і записувати їх у властивість items.
//Додай методи класу:
//getItems() - повертайте масив товарів
//addItems(item) - отримує новий товар та додає його до поточних
//removeItem(item) - отримує товар і, якщо він є, видаляє його з поточних
// const Storage = function (itemsArray) {
//   this.items = itemsArray;
// };

// Storage.prototype.getItems = function () {
//   return this.items;
// };
// Storage.prototype.addItems = function (item) {
//   this.items.push(item);
//   return this.items;
// };
// Storage.prototype.removeItem = function (item) {
//   this.items = this.items.filter((elem) => elem !== item);
//   return this.items;
// };

// const storage = new Storage(["apple", "banana", "mango"]);

// // console.log(storage);
// console.log(storage.removeItem("apple"));
// console.log(storage.getItems());
// console.log(storage.addItems("pineapple"));

//TODO:=========task-5=================
//Напиши клас Client який створює об'єкт
//з ​​властивостями login email
//Оголоси приватні властивості #login #email,
//доступ до яких зроби через геттер та сеттер login email

// class Client {
//   #login;
//   #email;

//   constructor(login, email) {
//     this.#login = login;
//     this.#email = email;
//   }

//   get getClientData() {
//     return {
//       email: this.#email,
//       login: this.#login,
//     };
//   }

//   set changeLogin(newLogin) {
//     this.#login = newLogin;
//   }
//   set changeEmail(newEmail) {
//     this.#email = newEmail;
//   }
// }

// const client = new Client("mango", "mango@gmail.com");
// console.log(client);
// client.changeEmail = "mango555@gmail.com";
// console.log(client.getClientData.email);
// client.changeLogin = "12345";
// console.log(client.getClientData.login);

//TODO:=========task-6=================
//Напиши клас Notes який управляє колекцією нотаток у
//властивості items.
//Нотатка - це об'єкт із властивостями text і priority.
//Додай класу статичний метод Priopity,
//який буде повертати об'єкт із пріоритетами.
//Додай методи addNote(note), removeNote(text)
//updatePriority(text, newPriority)

// class Notes {
//   static Priority() {
//     return {
//       HIGHT: "hight",
//       LOW: "low",
//     };
//   }

//   constructor() {
//     this.items = [];
//   }

//   addNote(note) {
//     return this.items.push(note);
//   }

//   removeNote(text) {
//     return (this.items = this.items.filter((elem) => elem.text !== text));
//   }

//   updatePriority({ text, newPriority }) {
//     return this.items.map((el) => {
//       if (el.text === text) {
//         el.priority = newPriority;
//       }
//     });
//   }
// }

// const note1 = new Notes();

// note1.addNote({ text: "Note1", priority: Notes.Priority().LOW });
// note1.addNote({ text: "Note2", priority: Notes.Priority().LOW });
// console.table(note1.items);

// note1.removeNote("Note1");
// console.table(note1.items);

// note1.updatePriority({ text: "Note2", newPriority: Notes.Priority().HIGHT });
// console.table(note1.items);

//TODO:=========task-7=================
// Створи клас для калькулятора, який має такі методи:
// метод number, який набуває початкового значення для наступних операцій
// Геттер, який повертає фінальний результат усіх операцій, проведених із числом
// методи add, substruct, divide, multiply
// Об'єкт класу може проводити послідовні операції у вигляді ланцюжка

// const calculator = new Calculator()
// const res = calculator
//     .number(10)
//     .add(10)
//     .divide(2)
//     .multiply(4)
//     .substruct(5).result

// console.log(res)

// const res2 = calculator
//     .number(20)
//     .substruct(40)
//     .multiply(-8)
//     .divide(160)
//     .add(20).result

// console.log(res2)

//TODO:=========task-8=================
// Створити клас Worker, у якого є властивості name, age, salary.
//У класу Worker є метод getSalary.
//Створити клас TopLevelWorker, у якого є властивість hierarchyLevel
//і який успадковує клас Worker, додаючи метод getHierarchyLevel
//Реалізувати завдання за допомогою ES5 прототипів та ES6 класів

// const HIERARCHY_LEVEL = {
//     TOP: 'top',
//     BOTTOM: 'bottom',
// }

// const workerObj = {
//     name: 'Mango',
//     surname: 'Worker',
//     age: 30,
//     position: 'FE developer',
//     salary: 5000,
// }

//ES5

// const worker = new TopLevelWorker(workerObj, HIERARCHY_LEVEL.BOTTOM)
// console.log(worker)
// console.log(worker.getSalary())
// console.log(worker.getHierarchyLevel())

//ES6

// const topWorker = new TopLevelWorkerES6(workerObj, HIERARCHY_LEVEL.TOP)
// console.log(topWorker)
// console.log(topWorker.getSalary())
// console.log(topWorker.getHierarchyLevel())

//TODO:==========task-9============
//  Написати клас, який буде представляти зоопарк тварин.
//  Створити загальний клас Animal для тварин.
// У зоопарку повинні бути різні типи тварин, такі як ссавці, птахи, рептилії тощо.
// Кожен тип тварин повинен мати свої властивості та методи, наприклад,
//  методи для отримання інформації про тварину та для годівлі тварин.
//  Крім того, зоопарк повинен мати метод для додавання тварин до списку та
// метод для виведення списку всіх тварин у зоопарку.

//? Answer

//?

// const zoo = new Zoo()

// const lion = new Mammal('Simba', 'Lion', 'African Lion')
// zoo.addAnimal(lion)

// const eagle = new Bird('Bald Eagle', 'Bird', 72)
// zoo.addAnimal(eagle)

// zoo.listAnimals()
