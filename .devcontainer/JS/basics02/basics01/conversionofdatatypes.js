"use strict";

const number = "123ab";
const real_number = Number(number);
console.table([real_number, typeof real_number, typeof number]);

//NaN not a number

//investigating way of learning

const mynull = null;
console.log(typeof mynull);
const istr = true;
console.log(Number(istr));
console.log(false + 0);

const myundf = undefined;
console.log(myundf);

let num = 1;
const bln = Boolean(num);
console.log(bln);
console.log(Boolean(""));
num = String(num);
console.table([typeof num, num]);

// operations********************************************

console.log(2 + 2);
console.log(2 - 2);
console.log(2 * 2);
console.log(2 / 2);
console.log(2 ** 2);
console.log(2 % 3);

const str = "usman";
const stra = " osman";
console.table([str + stra]);

console.table([
  "1" + 1,
  3 + "2",
  3 + 2 * "4",
  "3" + "4" + "5",
  "3" - 4 + "5",
  -1 + "4" + "5",
]);

let val = 2;
val++;
--val;
console.log(val);
console.log(0 + "");
console.log(+true);
