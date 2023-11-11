// function m(num) {
//   return num * 5;
// }

// m.power = 2;
// console.log(m(5), m.power, m.prototype);

function CreateUser(username, score) {
  this.username = username;
  this.score = score;
}

CreateUser.prototype.increment = function () {
  this.score++;
};
CreateUser.prototype.printMe = function () {
  console.log(`price is ${this.score}`);
};
const chai = new CreateUser("chai", "25");
const tea = new CreateUser("tea", 50);
console.log(chai);
console.log(tea);
chai.increment();
chai.printMe();
