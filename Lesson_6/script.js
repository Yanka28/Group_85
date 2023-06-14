//  new Date()
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date
// https://developer.mozilla.org/en-US/docs/Glossary/IIFE?retiredLocale=uk
// https://uk.javascript.info/garbage-collection
// const arr = [1, 2, 3];
// const [, _, third] = arr;

// console.log(_);
// console.log(third);


// const user = {
//     name: 'Test',
//     age: 11,
//     skills: {
//         html: true,
//         css: true,
//         js: false
//     }
// };

// const user = {
//     name: 'Test',
//     age: 11,
// }

// const update = {
//     name: 'Artem',
//     city: 'VN'
// }

// const resolve = {
//     ...update,
//     ...user,
// }


// name: 'Test',
// city: 'VN'
// age: 11,

// const arr = [1, 2, 3];

// const copy = [...arr] // [1, 2, 3] // spread

// console.log(copy === arr);

// function foo(a, b, c) {
// console.log('a',a);
// console.log('b',b);
// console.log('c',c);
// }
// foo(...arr)//1, 2, 3 //spread



// const user = {
//     name: 'Test',
//     age: 11,
//     skills: {
//         html: true,
//         css: true,
//         js: false
//     }
// };
// [name :'Test', age : 11 , skills : {}]
// const copy = { ...user }
// console.log(copy);
// console.log(copy === user);

// function foo(a, b,...args) { // rest
//     console.log(args);
//     console.log(arguments);
// }
// foo(1, 2, 3)
// foo(1, 2, 3, 4)
// foo(1, 2, 3, 4, 5, 6, 7, 8, 9)

// const arr = [1, 2, 3, 4];
// const [first, second, ...args] = arr;//rest


// const user = {
//     name: 'Test',
//     age: 11,
// }
// const arr = [1, 2, 3, 4];
// const [first, , ,third] = arr;
// console.log(first);
// console.log(third);


// function foo([first, ,third]) {
// console.log(first);
// // console.log(second);
// console.log(third);
// }

// foo(arr)
// const age = 22;
// const user = {
//     name: 'Test',
//     age: 11,
//     skills: {
//         html: true,
//         css: true,
//         js: false
//     }
// };
// const user = {
//     name: 'Test',
//     use_age_blA: 11,
//     skills: {
//         html: true,
//         css: true,
//         js: false
//     }
// };

// const {age} = user; // age = user.age
// const {age : userAge } = user; // age = user.age
// console.log(user.age);
// console.log(userAge);
// console.log(age);
// const {use_age_blA : age} = user// age = user.use_age_blA
// console.log(use_age_blA);



// const user = {
//     name: 'Test',
//     age: 11,
//     skills: {
//         html: true,
//         css: true,
//         js: false
//     }
// };

// const { skills, skills: { js : language, css, html } } = user;
// console.log(js);
// console.log(css);
// console.log(html);
// console.log(skills);

// const arr = [{
//     name: 'Artem',
//     age: 11,
//     skills: {
//         html: true,
//         css: true,
//         js: false
//     }
// }, {
//     name: 'Alex',
//     age: 12,
//     skills: {
//         html: true,
//         css: true,
//         js: false
//     }
// }, {
//     name: 'Den',
//     age: 13,
//     skills: {
//         html: true,
//         css: true,
//         js: false
//     }
// }, {
//     name: 'David',
//     age: 15,
//     skills: {
//         html: true,
//         css: true,
//         js: false
//     }
// }];
// let names = [];
// let total = [];
// for (const { name, age } of arr) {
//     total += age
//     names.push(name)
// }



// const user = {
//     name: 'Test',
//     age: 11,
//     skills: {
//         html: true,
//         css: true,
//         js: false
//     }
// };


// function foo({ name, age } = {}) {
// console.log(name, age);
// }

// foo(user)

// foo()

// Перерва до 21.15






// Example 1 - Деструктуризація
// Перепиши функцію так, щоб вона приймала один об'єкт параметрів замість набору незалежних аргументів.


/**
 *
 * @param {Object} {weight, height} weight height
 * @returns
 */
// function calcBMI({weight, height} = {}) {
//   const numericWeight = Number(weight.replace(',', '.'));
//   const numericHeight = Number(height.replace(',', '.'));
//   return Number((numericWeight / numericHeight ** 2).toFixed(1));
// }

// // Очікується
// console.log(
//   calcBMI({
//     weight: '88,3',
//     height: '1.75',
//   }),
// );
// console.log(
//   calcBMI({
//     weight: '68,3',
//     height: '1.65',
//   }),
// );
// console.log(
//   calcBMI({
//     weight: '118,3',
//     height: '1.95',
//   }),
// );

// Example 2 - Глибока деструктуризація
// Перепиши функцію так, щоб вона приймала один об'єкт параметрів замість набору незалежних аргументів.

// function getBotReport({ companyName, bots: { repair: repairBots, defence: defenceBots } } = {}) {
//     return `${companyName} has ${repairBots + defenceBots} bots in stock`;
// }

// // Було
// console.log(getBotReport('Cyberdyne Systems', 150, 50));

// // Очікується
// console.log(
//     getBotReport({
//         companyName: 'Cyberdyne Systems',
//         bots: {
//             repair: 150,
//             defence: 50,
//         },
//     }),
// ); // "Cyberdyne Systems has 200 bots in stock"

// Example 3 - Деструктуризація
// Перепиши функцію так, щоб вона приймала об'єкт параметрів із властивостями companyName та stock та виводила репорт про кількість товарів на складі будь-якої компанії.


// function getStockReport({ companyName, stock } = {}) {
//     const values = Object.values(stock);
//     let total = 0;
//     for (const value of values) {
//         total += value;
//     }
//     return `${companyName} has ${total} items in stock`

// }

// console.log(
//     getStockReport({
//         companyName: 'Cyberdyne Systems',
//         stock: {
//             repairBots: 150,
//             defenceBots: 50,
//         },
//     }),
// ); // "Cyberdyne Systems has 200 items in stock"

// console.log(
//     getStockReport({
//         companyName: 'Belacci',
//         stock: {
//             shoes: 20,
//             skirts: 10,
//             hats: 5,
//         },
//     }),
// ); // "Belacci has 35 item in stock"

// Example 4 - Операція spread
// Доповни функцію createContact(partialContact) так, щоб вона повертала новий об'єкт контакту з доданими властивостями id та createdAt, а також list зі значенням "default" якщо в partialContact немає такої властивості.


// function createContact(partialContact) {
//     return {
//         id: generateId(),
//         createdAt: new Date(),
//         list: 'default',
//         ...partialContact,
//     }
// }

// console.log(
//     createContact({
//         name: 'Mango',
//         email: 'mango@mail.com',
//         list: 'friends',
//     }),
// );
// console.log(
//     createContact({
//         name: 'Poly',
//         email: 'poly@hotmail.com',
//     }),
// );

// function generateId() {
//     return '_' + Math.random().toString(36).substr(2, 9);
// }
// Example 7 - Операція rest
// Напиши функцію transformUsername(user) так, щоб вона повертала новий об'єкт із властивістю fullName, замість firstName та lastName.


// function transformUsername({ firstName, lastName, ...props }) {
//     return {
//         fullName: `${firstName} ${lastName}`,
//         ...props
//     }
// }

// function transformUsername(obj) {
//     // const copy = JSON.parse(JSON.stringify(obj));
//     // const fullName = obj.firstName + ' ' + obj.lastName;

//     // delete copy.firstName;
//     // delete copy.lastName;

//     // console.log(copy);

//     // copy.fullName = fullName;
//     // return copy;

//     const fullName = obj.firstName + ' ' + obj.lastName;
//     const formatedUser = { fullName };
//     const keys = Object.keys(obj);
//     for (const key of keys) {
//         // if (key === 'firstName' || key === 'lastName') {
//         //     continue;
//         // }
//         // formatedUser[key] = obj[key]

//         if (key !== 'firstName' && key !== 'lastName') {
//             formatedUser[key] = obj[key]
//         }
//     }
//     return formatedUser
// }

// console.log(
//     transformUsername({
//         id: 1,
//         firstName: 'Jacob',
//         lastName: 'Mercer',
//         email: 'j.mercer@mail.com',
//         friendCount: 40,
//     }),
// );

// console.log(
//     transformUsername({
//         id: 2,
//         firstName: 'Adrian',
//         lastName: 'Cross',
//         email: 'a.cross@hotmail.com',
//         friendCount: 20,
//     }),
// );




// const arr = [1, 2, 3, 4, 5]
// const [a, , b, ...props] = arr;
// console.log(props);

// const result = (function (x) {
//     console.log(x);
//     return x + 5;
// })(1)
// console.log(result);

// const result = (function (x) {
//     delete x;
//     // console.log(x);
//     return x;
// })(1)
// console.log(result);


// const user = {
//     name: 'Name',
//     tags: {
//         a: 1,
//         b: 2,
//         c: 3
//     }
// }


// const { name, tags: { a, b, c = 0 } } = user;

// console.log('a', a);
// console.log('b', b);
// console.log('c', c);

// const planets = ["Earth", "Mars", "Venus", "Jupiter"];
// // Change code below this line
// console.log(planets.map(planet => planet.length));













// ---------------------------------------------------------------------//
// Створити функцію яка приймає 1 параметр масив продуктів і повертає мутований масив
// Потрібно перебрати масив і якщо він має об'єкти в яких дублюються айді то квонтіті цих елементів потрібно сплюсувати
// а ті обє'кти в яких айді співпадають видалити з масиву.
// (Потрібно мутувати масив, створювати новий не потрібно)

// const products = [{
//     id: 'sku1',
//     qty: 1,
// }, {
//     id: 'sku2',
//     qty: 2,
// }, {
//     id: 'sku3',
//     qty: 3,
// }, {
//     id: 'sku1',
//     qty: 6,
// }, {
//     id: 'sku1',
//     qty: 8,
// }, {
//     id: 'sku2',
//     qty: 19,
// }, {
//     id: 'sku4',
//     qty: 1,
//     }];




// function qtyGoods(arrProducts) {
//     let i = 0; 
//     while (i < arrProducts.length) {
//         const [product, ...arrProds] = arrProducts;
//         let { id:prodId, qty:prodQty } = product;
//         for (const prod of arrProds) {
//             const { id, qty } = prod;
//             if (prodId === id) { 
//                 prodQty += qty;
//                 arrProducts.splice(arrProducts.indexOf(prod), 1);
//             }
//          }
//             arrProducts.push({prodId,prodQty});
//             arrProducts.splice(0, 1);
//             i += 1; }
        
//         console.log(arrProducts);
//         return arrProducts;
   
// }
// qtyGoods(products);


// //Створити функцію яка буде рахувати за скільки днів равлик зможе виповзти з колодязя, функція приймає 1 параметр.
// //1 глибина колодязя (depth)

// //Функція повертає кількість днів

// // Умови:
// // вдень Равлик проповзає на 7 м вгору, а за ніч опускається на 2 м вниз
// // використовувати цикл while()

// function calcDays(depth) {

// }
// calcDays(42)//виповзе за 8 днів
// calcDays(17)//виповзе за 3 дні
// calcDays(18)//виповзе за 4 дні

// const tweets = [
//   { id: "000", likes: 5, tags: ["js", "nodejs"] },
//   { id: "001", likes: 2, tags: ["html", "css"] },
//   { id: "002", likes: 17, tags: ["html", "js", "nodejs"] },
//   { id: "003", likes: 8, tags: ["css", "react"] },
//   { id: "004", likes: 0, tags: ["js", "nodejs", "react"] },
// ];
// const tags = tweets.reduce((allTags, tweet) => {
//   allTags.push(...tweet.tags);

//   return allTags;
// }, []);

// console.log(tags);

// const tweets = [
//   { id: "000", likes: 5, tags: ["js", "nodejs"] },
//   { id: "001", likes: 2, tags: ["html", "css"] },
//   { id: "002", likes: 17, tags: ["html", "js", "nodejs"] },
//   { id: "003", likes: 8, tags: ["css", "react"] },
//   { id: "004", likes: 0, tags: ["js", "nodejs", "react"] },
// ];

// const tags = tweets.reduce((allTags, tweet) => {
//   allTags.push(...tweet.tags);

//   return allTags;
// }, []);

// console.log(tags);
// const getTags = tweets =>
//   tweets.reduce((allTags, tweet) => {
//     allTags.push(...tweet.tags);

//     return allTags;
//   }, []);

// console.log(getTags(tweets));

// 
// const filterArray = (numbers, value) =>{
//   const filteredNumbers = [];
//     numbers.forEach(number => {
//         if (number > value) {
//             filteredNumbers.push(number);
//         }
//     });  // Change code above this line
//   return filteredNumbers;
// }

// function changeEven(numbers, value) {
//   let array =[];
//   // Change code below this line
//   numbers.forEach( number => {
//     if (!(number % 2)) {
//       array.push((number+value));
//     }
//   });
//     console.log(array);
//   return array;
//   // Change code above this line
// }

// // changeEven([1, 2, 3, 4, 5], 10);
// const users=
//   [
//   {
//     name: "Moore Hensley",
//     email: "moorehensley@indexia.com",
//     eyeColor: "blue",
//     friends: ["Sharron Pace"],
//     isActive: false,
//     balance: 2811,
//     gender: "male",
//     age: 37
//   },
//   {
//     name: "Sharlene Bush",
//     email: "sharlenebush@tubesys.com",
//     eyeColor: "blue",
//     friends: ["Briana Decker", "Sharron Pace"],
//     isActive: true,
//     balance: 3821,
//     gender: "female",
//     age: 34
//   },
//   {
//     name: "Ross Vazquez",
//     email: "rossvazquez@xinware.com",
//     eyeColor: "green",
//     friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
//     isActive: false,
//     balance: 3793,
//     gender: "male",
//     age: 24
//   },
//   {
//     name: "Elma Head",
//     email: "elmahead@omatom.com",
//     eyeColor: "green",
//     friends: ["Goldie Gentry", "Aisha Tran"],
//     isActive: true,
//     balance: 2278,
//     gender: "female",
//     age: 21
//   },
//   {
//     name: "Carey Barr",
//     email: "careybarr@nurali.com",
//     eyeColor: "blue",
//     friends: ["Jordan Sampson", "Eddie Strong"],
//     isActive: true,
//     balance: 3951,
//     gender: "male",
//     age: 27
//   },
//   {
//     name: "Blackburn Dotson",
//     email: "blackburndotson@furnigeer.com",
//     eyeColor: "brown",
//     friends: ["Jacklyn Lucas", "Linda Chapman"],
//     isActive: false,
//     balance: 1498,
//     gender: "male",
//     age: 38
//   },
//   {
//     name: "Sheree Anthony",
//     email: "shereeanthony@kog.com",
//     eyeColor: "brown",
//     friends: ["Goldie Gentry", "Briana Decker"],
//     isActive: true,
//     balance: 2764,
//     gender: "female",
//     age: 39
//   }
// ]





// const getUsersWithEyeColor = (users, color) => {
//   const usersWithEyeColor = users.filter(user => user.eyeColor === color);
// return usersWithEyeColor;
// };

//  const getUsersWithAge = (users, minAge, maxAge) => {

//     const usersAge = users.filter(({ age }) => age >= minAge && age <= maxAge);

//     console.log(usersAge);
//     return usersAge;
//   }
// getUsersWithAge(users, 20, 30);



// const getFriends = (users) => {
//   const allFriends = users.flatMap(user => user.friends);
//   const uniqueFriends = allFriends.map((frend, index) => allFriends.indexOf(frend) === index);
//   console.log(uniqueFriends);
//    return uniqueFriends;
// };
// getFriends(users);


// const books = [
//   {

//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     rating: 8.38,
//   },
//   {
//     title: "Beside Still Waters",
//     author: "Robert Sheckley",
//     rating: 8.51,
//   },
//   {
//     title: "The Dream of a Ridiculous Man",
//     author: "Fyodor Dostoevsky",
//     rating: 7.75,
//   },
//   { title: "Redder Than Blood", author: "Tanith Lee", rating: 7.94 },
//   { title: "Enemy of God", author: "Bernard Cornwell", rating: 8.67 },
// ];
// // Change code below this line

// const sortedByAuthorName =[...books].sort((firstBook, secondBook ) => firstBook.author.localeCompare(secondBook.author));

// const sortedByReversedAuthorName = [...books].sort((firstBook, secondBook)=>secondBook.author.localeCompare(firstBook.author));

// const sortedByAscendingRating = [...books].sort((firstBook, secondBook)=>firstBook.rating-secondBook.rating);

// const sortedByDescentingRating = [...books].sort((firstBook, secondBook)=>secondBook.rating-firstBook.rating);


// console.log(sortedByAuthorName);
// console.log(sortedByReversedAuthorName);
// console.log(sortedByAscendingRating);
// console.log(sortedByDescentingRatin);


// const users=[
//   {
//     name: "Moore Hensley",
//     email: "moorehensley@indexia.com",
//     eyeColor: "blue",
//     friends: ["Sharron Pace"],
//     isActive: false,
//     balance: 2811,
//     gender: "male"
//   },
//   {
//     name: "Sharlene Bush",
//     email: "sharlenebush@tubesys.com",
//     eyeColor: "blue",
//     friends: ["Briana Decker", "Sharron Pace"],
//     isActive: true,
//     balance: 3821,
//     gender: "female"
//   },
//   {
//     name: "Ross Vazquez",
//     email: "rossvazquez@xinware.com",
//     eyeColor: "green",
//     friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
//     isActive: false,
//     balance: 3793,
//     gender: "male"
//   },
//   {
//     name: "Elma Head",
//     email: "elmahead@omatom.com",
//     eyeColor: "green",
//     friends: ["Goldie Gentry", "Aisha Tran"],
//     isActive: true,
//     balance: 2278,
//     gender: "female"
//   },
//   {
//     name: "Carey Barr",
//     email: "careybarr@nurali.com",
//     eyeColor: "blue",
//     friends: ["Jordan Sampson", "Eddie Strong", "Adrian Cross"],
//     isActive: true,
//     balance: 3951,
//     gender: "male"
//   },
//   {
//     name: "Blackburn Dotson",
//     email: "blackburndotson@furnigeer.com",
//     eyeColor: "brown",
//     friends: ["Jacklyn Lucas", "Linda Chapman", "Adrian Cross", "Solomon Fokes"],
//     isActive: false,
//     balance: 1498,
//     gender: "male"
//   },
//   {
//     name: "Sheree Anthony",
//     email: "shereeanthony@kog.com",
//     eyeColor: "brown",
//     friends: ["Goldie Gentry", "Briana Decker"],
//     isActive: true,
//     balance: 2764,
//     gender: "female"
//   }
// ]

// const getSortedFriends = users => {
//   const arrFriedns = [...users]
//     .flatMap(({ friends }) => friends)
//     .filter((friend, index, arr) => arr.indexOf(friend) === index)
//     .sort((a, b) => a.localeCompare(b));

//   return arrFriedns;
// };
// getSortedFriends(users);

// 

const historyService = {
  orders: [
    { email: "jacob@hotmail.com", dish: "Burrito" },
    { email: "solomon@topmail.net", dish: "Burger" },
    { email: "artemis@coldmail.net", dish: "Pizza" },
    { email: "solomon@topmail.net", dish: "Apple pie" },
    { email: "jacob@hotmail.com", dish: "Taco" },
  ],
  // Change code below this line
  getOrdersLog() {
    return this.orders
      .map(order => `email: ${order.email} dish: ${order.dish}`)
      .join(" - ");
  },
  getEmails() {
    const emails = this.orders.map(order => order.email);
    const uniqueEmails = new Set(emails);
    console.log(uniqueEmails);
    return [...uniqueEmails];
    
  },
  getOrdersByEmail(email) {
    return this.orders.filter(order => order.email === email);
  },
  // Change code above this line
};


console.log(historyService.getOrdersLog);
console.log(historyService.getEmails);
console.log(historyService.getOrdersByEmail);


// class Car {
//   // Change code below this line
// constructor(brand, model, price ) {
//   this.brand = brand;
//   this.model = model;
//   this.price = price;
// }
 
// const a = new Car (brand, model, price);

//   // Change code above this line
// }

// console.log(a);


// class Storage {
//   constructor(items=[]) {
//     this.items=items;
//   }

//   getItem() {
//     return this.items;
//   }
//   addItem(newItem) {
//     this.items.push(newItem);
//   }
//   removeItem(itemToRemove) {
//     this.items.splice(this.items.indexOf(itemToRemove),1)
//   }
// }

// Change code above this line
// const storage = new Storage(["Nanitoids", "Prolonger", "Antigravitator"]);
// console.log(storage.getItem()); // ["Nanitoids", "Prolonger", "Antigravitator"]
// storage.addItem("Droid");
// console.log(storage.getItem()); // ["Nanitoids", "Prolonger", "Antigravitator", "Droid"]
// storage.removeItem("Prolonger");
// console.log(storage.getItem()); // ["Nanitoids", "Antigravitator", "Droid"]
// console.log(storage);

