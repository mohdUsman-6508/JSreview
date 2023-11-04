"use strict";

const name = "mu";
const age = "22";
console.log(`hello my name is ${name} and my age is ${age}`);

const str = "hello-how-are you";
console.log(str);
console.log(str.__proto__);

const str1 = str.toUpperCase();
console.log(name + age);
console.log(str1);

console.log(str1.charAt(2));
console.table([
  str1,
  str1.slice(1),
  str1.slice(1, 5),
  str1.slice(2, -1),
  str1.slice(-3, -2),
]);

console.log(str1.toLowerCase().includes("hello"));
const str2 = "   Assalamualaikum   ";
console.table([str2.trim(), str2.trimStart(), str2.trimEnd()]);
console.table([str1.split(" "), str1.split("-").join("/")]);
