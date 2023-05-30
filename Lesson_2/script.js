//Створіть функцію endsWith(), яка порівнює підрядок str1 із закінченням вихідного рядка
//str і визначає чи закінчується рядок символами підрядка.
// const str = "Кожен мисливець бажає знати";
// const str1 = "скрипт";
// const str2 = "знати";

// function endsWith(str, substring) {
//     return str.endsWith(substring);
// }

// console.log(endsWith(str, str1)); // false
// console.log(endsWith(str, str2)); // true

// function endsWith(str, substring) {
//     return str.includes(substring, -substring.length);
// }

//  console.log(endsWith(str, str1)); // false
//  console.log(endsWith(str, str2)); // true

// function makeArray(firstArray, secondArray, maxLength) {
//     // Change code below this line
//   let allArray = firstArray.concat(secondArray);
  
//    if (allArray.length > maxLength) {
//      allArray = allArray.slice(0, maxLength);
//    }

// return allArray;

    // Change code above this line
// }
// console.log(makeArray(["Mango", "Poly"], ["Ajax", "Chelsea"], 3));

// const start = 3;
// const end = 7;

// for (let i = start; i <= end-1; i+=1) { // Change this line
 
//   console.log(i);
// }

// function calculateTotal(number) {

//   let sum = 0;
// for ( let i=0; i<number; i+=1) {
//     sum += i;
//     console.log(sum);
// }

// return sum;
// }
// calculateTotal(4);


//     let string = "The quick brown fox jumped over the lazy dog";
//     let j=0;
//     let mass = string.split(" ");
//     let max = mass[0].length;
//       for (i = 1; i < mass.length; i += 1) {
//         if (mass[i].length > max) {
//            max = mass[i].length;
//            j = i;
//           }
// }
// console.log(mass[j]);
// console.log(mass.length);
// console.log(max);
// console.log(j);


//  let min = 1;
//  let max = 3;

//  const numbers = [];

//  let num = min;
//  while (num <= max) {
//   numbers.push(num);
//    num +=1;
// }
// console.log(numbers);

// function createArrayOfNumbers(min, max) {

//  const numbers = [];
//  let num = min;
    
//  while (num <= max) {
//   numbers.push(num);
//   num +=1;
// }
    
//     return numbers;
    
// }

// createArrayOfNumbers(1, 3);


// const start = 2;
// const end = 5;
// let arr = [];

// for (let num = start; num <= end;  num +=1 )
//   if (num % 2===0) {
//     arr.push(num);
//    }
// console.log(arr);

// let array = [1, 2, 3, 4, 5];
// let value = 3;
// let bool = '';
// let item;
// for ( item of array) {
//   if( item === value){
//       bool = 'true';
//       break;
//   } else {
//     bool = 'false';
//   }
// }
// console.log(bool);
// console.log(item);