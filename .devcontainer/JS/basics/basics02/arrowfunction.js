"use strict";

// let's study about scope -> {  this is block level scope } outside this global scope
// in browser global scope -- window

function power(b, p) {
  let ans = 1;
  let temp_power = p;
  while (p-- > 0) {
    let tempans = 1;
    ans *= b;
  }
  console.log(`${b}^${temp_power} is = ${ans}  `); //${tempans} here we cannot access tempans variable because of its scope non-availability outside while
  return ans;
}

power(2, 3);

//write a function inside a function which call your name

function greet(name) {
  console.log(`Welcome ${name} ,we are glad to have you.`);
  function grandGreet() {
    if (name === "usman") {
      let power = "infinite";
      console.log(`Marhaba, Marhaba , Marhaba ! mohammad osman`);
    }
  }
  grandGreet();
}

// greet("omar");
greet("usman");
// let's write function expression

const add = function (num1, num2) {
  console.log(`sum of ${num1} + ${num2} is : ${num1 + num2}`);
};

add(2, 3);
add(-5, 10);

const modulus = (num1, num2) => {
  console.log(`Modulus of ${num1} % ${num2} is :${num1 % num2}`);
  return num1 % num2;
};
modulus(2, 3);
//arrow function
const pow = (a, b) => a ** b; /// implicit return

//make a calculator which do basic functionallity

const calc = (num1, num2, operation) => {
  switch (operation) {
    case "+":
      console.log(`${num1} ${operation} ${num2} is : ${num1 + num2}`);
      break;
    case "-":
      console.log(`${num1} ${operation} ${num2} is : ${num1 + num2}`);
      break;
    case "*":
      console.log(`${num1} ${operation} ${num2} is : ${num1 + num2}`);
      break;
    case "/":
      console.log(`${num1} ${operation} ${num2} is : ${num1 + num2}`);
      break;
    case "%":
      console.log(`${num1} ${operation} ${num2} is : ${num1 + num2}`);
      break;
    case "**":
      console.log(`${num1} ${operation} ${num2} is : ${num1 + num2}`);
      break;

    default:
      console.log("please enter a valid operation to perform");
  }
};
calc(2, 4, "**");
calc(2, 10, "=");

// good calculator

const calcOne = (num1, num2) =>
  console.table([
    `${num1} + ${num2} = ${num1 + num2}`,
    `${num1} - ${num2} = ${num1 - num2}`,
    `${num1} * ${num2} = ${num1 * num2}`,
    `${num1} / ${num2} = ${num1 / num2}`,
    `${num1} % ${num2} = ${num1 % num2}`,
    `${num1} ** ${num2} = ${num1 ** num2}`,
  ]);

calcOne(3.5, 2);
calcOne(2, 10);
