"use strict";

// here an interview question is that can we change the value of constant PI in Math library

// the answer is--
// console.log(Math.PI);

// Object.defineProperty(Math, "PI", {
//   value: 3.14,
//   writable: false,
//   configurable: false,
// });

console.log(Math.PI);

const descriptor = Object.getOwnPropertyDescriptor(Math, "PI");
console.log(descriptor);

const chai = {
  name: "ginger chai",
  price: 200,
  isAvailable: true,
  orderChai: function () {
    console.log("chai nhi bni abhi");
  },
};

console.log(Object.getOwnPropertyDescriptor(chai, "name"));

Object.defineProperty(chai, "name", {
  writable: false,
});

// chai.name = "tea";
