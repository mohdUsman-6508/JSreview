// "use strict";

// const user = {
//   username: "aman",
//   loginCount: 7,
//   signedIn: true,

//   getUserDeatails: function () {
//     console.log(`username: ${this.username}`);
//     console.log(this);
//   },
// };
// console.log(user.username);
// console.log(user.getUserDeatails());

function User(username, loginCount, isLoggedIn, email) {
  this.username = username;
  this.loginCount = loginCount;
  this.isLoggedIn = isLoggedIn;
  this._email = email;

  Object.defineProperty(this, "email", {
    get: function () {
      return this._email.toUpperCase();
    },
    set: function (value) {
      this._email = value;
    },
  });

  this.greeting = function () {
    console.log(`marhaba! ${this.username}`);
  };
}

const user1 = new User("hitman", 12, true, "hit@mail.com");
const user2 = new User("heman", 11, false);
console.log(user1.constructor);
console.log(user2);
user1.greeting();
console.log(user1.email);
