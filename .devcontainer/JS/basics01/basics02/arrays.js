"use strict";

const myarr = [1, 2, 3, 4, 5];
const myHeroes = ["mother", "father", "grandfather", "sister"];

const arr = new Array(1, 2, 3, 4);

console.log(myarr[2]);
/// array methods
myarr.push(6);
myarr.push(7);

myarr.pop();
console.log(myarr);

myarr.unshift(8);
console.log(myarr);
myarr.shift();
console.log(myarr);

console.log(myarr.includes(3));
console.log(myarr.indexOf(4));

const narr = myHeroes.join();
console.log(narr);

console.log("a", myHeroes);
const n1 = myHeroes.slice(1, 3);
console.log(n1);

console.log("b", myHeroes);
const n2 = myHeroes.splice(1, 2);
console.log("c", myHeroes);
console.log(n2);
