"use strict";
/// STACK for primitive datatypes i.e. string, number,boolean,symbol,null,undefined,bigInt etc.------- copy changes

/// HEAP for non-primitive datatypes i.e. arrays,object,function ----   original value changes

let a = 1;
let b = a;
b = 5;
console.table([a, b]);

const obj1 = { id: "abc1" };
const obj2 = obj1;
obj2.id = "abc01";

console.table([obj1.id, obj2.id]);
