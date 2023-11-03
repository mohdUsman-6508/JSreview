"use strict";

// number ,string ,boolean,null,undefined,symbol--primitive datatype
// object ,array, function --complex datatype

let name = "omar";
let age = 23;
let isLead = true;
let enemy = null;
let undf;

/////// donot forget to maintain readibility of code

console.log(typeof age);
console.table([
  typeof name,
  typeof age,
  typeof isLead,
  typeof enemy,
  typeof undf,
]);

const mysymbol = Symbol("123");
const your_symbol = Symbol("123");

console.log(mysymbol === your_symbol);

const myBigInt = 57957295795723957n;
console.table([myBigInt, typeof myBigInt]);
