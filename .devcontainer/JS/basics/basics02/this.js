"use strict";
//here we are going to do some fun with this keyword
// why it is easy to use this keyword in funtion or function expression than in arrow function

const friend = {
  name: "osman",
  email: "osman@gmail.com",

  sendMail: function () {
    console.log(
      `We are sending a mail to ${this.name} having email:${this.email}`,
      this
    );
  },
};

friend.name = "usman";
// friend.sendMail();

// const add = (a, b) => {
//   let ans = this.a + this.b;
//   return ans;
// };

// const res = add(2, 4);
// console.log(res);
// console.log(typeof this);
