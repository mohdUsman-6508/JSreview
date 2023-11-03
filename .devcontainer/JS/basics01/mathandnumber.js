"use strict";

const money = 222;
console.log(typeof money);

const balance = new Number(10000000);
console.log(money.toString.length);
console.log(money.toFixed(2));
console.log(balance.toLocaleString("en-IN"));

const num = 234.2342;
console.table([num.toPrecision(4), num.toPrecision(2)]);

console.table([Math.abs(-3), Math.round(3.4), Math.ceil(3.5), Math.floor(3.5)]);

console.log(Math.floor(Math.random() * 10) + 1);

// random number in a range

const min = 12;
const max = 20;

console.log(Math.floor(Math.random() * (max - min + 1)) + min);
