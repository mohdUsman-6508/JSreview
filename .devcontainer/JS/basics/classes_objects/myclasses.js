"use strict";

//ES6
//syntactic sugar

class User {
  constructor(username, email, password) {
    this.username = username;
    this.email = email;
    this.password = password;
  }

  encryptPassword() {
    return `${this.password}abc123`;
  }
  changeUsername() {
    return `${this.username.toUpperCase()}`;
  }
}

const user1 = new User();
const user2 = new User("usman", "ai@mail.com", "uncrackable");

user1.username = "issac";
user1.email = "physics@mail.com";
user1.password = "intdiff";
console.log(user2);
console.log(user1);

console.log(user1.encryptPassword());
console.log(user2.changeUsername());

//// behind the scenes ES5 syntax

function OriginalUser(username, email, password) {
  this.username = username;
  this.email = email;
  this.password = password;
}

OriginalUser.prototype.encrypt = function () {
  return `${this.password}abc`;
};

OriginalUser.prototype.name = function () {
  return `${this.username.toUpperCase()}`;
};
const user3 = new OriginalUser("abrahm", "pwr@mail.com", "234");
console.log(user3);
console.log(user3.name());
console.log(user3.encrypt());
