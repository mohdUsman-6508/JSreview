//so here we will write some loops for while  do while for of for in etc.
// break and continue

//write a program which traverse through array and print only positive even number
"use strict";
let arrnum = [1, 2, 3, 4, 5, 6, -6, -7, -8, -9];

//using for loop
// console.log("loading...");
// for (let i = 0; i < arrnum.length; i++) {
//   if (arrnum[i] > 0 && arrnum[i] % 2 == 0) {
//     console.log(arrnum[i]);
//   }
// }

// // using while
// let ind = 0;
// let len = arrnum.length;
// while (len >= 0) {
//   if (arrnum[ind] > 0 && arrnum[ind] % 2 == 0) {
//     console.log(arrnum[ind]);
//   }
//   len--;
//   ind++;
// }

// //using do while
// let index = 0;
// let l = arrnum.length;

// do {
//   if (arrnum[index] >= 0 && arrnum[index] % 2 == 0) {
//     console.log(arrnum[index]);
//   }
//   l--;
//   index++;
// } while (l > 0);

//

//write a program which prints only positive numbers

for (let i = 0; i < arrnum.length; i++) {
  if (arrnum[i] < 0 || arrnum[i] % 2 == 1) continue;
  if (arrnum[i] > 5) break;
  console.log(arrnum[i]);
}
