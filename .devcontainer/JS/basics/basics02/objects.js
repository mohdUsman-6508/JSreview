"use strict";

//singleton --> Object.create()
//object literal
const myS = Symbol("key2");
const user = {
  name: "mu",
  age: 18,
  location: "goa",
  email: "user@gmail.com",
  isGood: true,
  lastseen: ["sunday", "monday"],
  [myS]: "mykey",
  "full name": { firstname: "alpha", lastname: "sigma" },
};

console.log(user);

console.log(user.name);
console.log(user["email"]);
console.log(user[myS]);
console.log(user["full name"].firstname);

user.age = 19;
// Object.freeze(user); //cannot change any value now
// user.email = "abc@yahoo.com";

console.log(user);

user.country = "usa";
console.log(user.country);
console.log(user);

user.greet = function () {
  console.log("marhaba");
};

user["greet1"] = function () {
  console.log(`marhaba, ${this.name}`);
};
console.log(user.greet);
console.log(user.greet());
console.log(user.greet1());
