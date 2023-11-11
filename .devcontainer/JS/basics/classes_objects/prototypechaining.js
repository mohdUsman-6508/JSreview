const User = {
  name: "adam",
  email: "adam@mail.com",
};

const Teacher = {
  makeVideo: true,
};

const TeachingSupport = {
  isAvailable: false,
};

const TAsupport = {
  makeAssignment: "js assignment",
  fulltime: true,
  __proto__: TeachingSupport,
};

//modern way of sets the prototype
// TAsupport inherits the properties and methods of TeachingSupport

const TASupport = {
  makeAssignment: "JS assignment",
  fullTime: true,
};

Object.setPrototypeOf(TASupport, TeachingSupport);
//old school
Teacher.__proto__ = User;
//modern way

Object.setPrototypeOf(Teacher, User);
console.log(Teacher.name);

let anotherUsername = "chaiaurcode   ";

//adding a method in inbuilt object

String.prototype.trueLength = function () {
  console.log(`${this}`);
  console.log(`true length: ${this.trim().length}`);
};

anotherUsername.trueLength();
"adf ".trueLength();

//Using bind() helps in situations where you want to ensure that the this context is explicitly set, especially when passing the function as a callback or storing it in a variable for later use.
const person = {
  name: "John",
  sayHello: function () {
    console.log(`Hello, my name is ${this.name}`);
  },
};

const greet = person.sayHello.bind(person);
greet(); // Output: "Hello, my name is John"

///call
function SetUsername(username) {
  //complex DB calls
  this.username = username;
  console.log("called");
}

function createUser(username, email, password) {
  SetUsername.call(this, username);

  this.email = email;
  this.password = password;
}

const chai = new createUser("chai", "chai@fb.com", "123");
console.log(chai);
// This code follows a common pattern in JavaScript for extending functionality between constructor functions. The use of SetUsername.call(this, username) allows you to reuse the functionality of SetUsername within the context of the createUser constructor.
