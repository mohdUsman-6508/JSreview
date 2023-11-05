"use strict";

// here we will use some special loop like for of ,for in, for Each etc.

//for of is best of arrays

// const a = [1, 2, 3, 4, 5];

// for (const val of a) console.log(val);

// // for (const iterator of object) {

// // }

// //write a program using forof loop that print odd numbers only

// for (const val of a) {
//   if (val % 2 !== 0) console.log(val);
// }

// const friend = [
//   {
//     name: "usman",
//     email: "abc@mail.com",
//   },
//   {
//     name: "usman",
//     email: "abc@mail.com",
//   },
//   {
//     name: "usman",
//     email: "abc@mail.com",
//   },
// ];
// for (const val of friend) {
//   console.table(val.email);
//   console.log(val.name);
// }
// using for of unable to iterate through object

//for in loop specially for object

// const goodFriends = {
//   friend1: { name: "paras", isHappy: true, isSmart: true },
//   friend2: { name: "kannu", isHappy: true, isSmart: true },
//   friend3: { name: "chittu", isHappy: true, isSmart: true },
//   friend4: { name: "khali", isHappy: true, isSmart: true },
// };

// for (const key in goodFriends) {
//   console.log(key);
// }

//forEach loop

const arr = [2, 4, 6, 8, 0, 10, -1, -2, -3, -4, "hello", null, undefined]; //"hello", null, undefined

// arr.forEach(function (val, arr, i) {
//   console.log(val);
//   console.log(arr, i);
// });

// arr.forEach((val, arr, i) => {
//   console.log(val);
//   console.log(arr, i);
//   return;
// });
// arr.forEach((val) => console.log(val));
//

/// some useful array method which can be implementated using simple loops but it is easier to implement it by using MRF-- map, reduce , and filter

// const plus1 = arr.map(function (val) {
//   return val + 1;
// });

// console.log(plus1);
// const plus2 = arr.map((val) => val + 2);

// const makeodd = arr.map((val) => {
//   let num = val;
//   if (num % 2 !== 0) num += 1;
//   return num;
// });

// console.log(arr);
// console.log(makeodd);

// const sum = arr.reduce((accumulator, curr) => accumulator + curr, 0);
// const sumLong = arr.reduce(function (accumulator, curr) {
//   return accumulator + curr;
// }, 0);

// console.log(sum, sumLong);

// const positive = arr.filter((val, i) => val > 0 && val % 2 == 0 && i < 3);
// console.log(positive);

function callback(val) {
  return val < 0;
}

const good = arr.filter(callback);
console.log(good);

//// end for the basics donot forget to practice
/// and please donot repeat the biggest mistake -donot revising ,please do revise th   e concept
