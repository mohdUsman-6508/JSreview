"use strict";

let name = ["thor", "spiderman"];

let power = {
  thor: "hammer",
  spiderman: "sling",

  getSpiderPower: function () {
    console.log(`spidy power is ${this.spiderman}`);
  },
};

Object.prototype.heman = function () {
  console.log(`heman is present in all objects`);
};

power.heman();
console.log(power);

const obj = {};
obj.heman();
console.log(obj);

Array.prototype.sayHello = function () {
  console.log("marhaba,everyone");
};

name.sayHello();
// power.sayHello();
name.heman();
