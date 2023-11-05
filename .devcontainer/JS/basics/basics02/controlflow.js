"use strict";

// ok boys ,what we will do here we will write some if else switch if elseif ,null coelishing ,ternary operator etc.

//write a program which calculates the grades on the basis of marks

function marksCriteria() {
  console.table([
    "Marks>80 : A+",
    "81>Marks>70 : A",
    "71>Marks>60 : B+",
    "61>Marks>50: B",
    "51>Marks>40: C",
    "41>Marks>35: D",
    "Marks<35: E",
  ]);
}

// marksCriteria();

let marks = 100;
const grade = function (marks) {
  marksCriteria();
  if (marks >= 81) {
    console.log("You got A+");
  } else if (marks >= 71) {
    console.log("You got A");
  } else if (marks >= 61) {
    console.log("You got B+");
  } else if (marks >= 51) {
    console.log("You got B");
  } else if (marks >= 41) {
    console.log("You got C");
  } else {
    console.log("You got D");
  }
};

// grade(56);

//write one liner code which can tell you whether you can vote or not

let age = 9;
const isEligible = () => (age >= 18 ? "You can VOTE :)" : "You cannot VOTE");

console.log(isEligible(age));

//make a day number to dayname converter without using if else

const day = 7;

switch (day) {
  case 1:
    console.log(" 1st day is Monday");
    break;
  case 2:
    console.log(" 2nd day is Tuesday");
    break;
  case 3:
    console.log(" 3rd day is Wednesday");
    break;
  case 4:
    console.log(" 4th day is Thrusday");
    break;
  case 5:
    console.log(" 5th day is Friday");
    break;
  case 6:
    console.log(" 6th day is Saturday");
    break;
  case 7:
    console.log(" 7th day is Sunday");
    break;
  default:
    console.log("Please Enter Valid Day Number");
}

//truthy and falsy value

// falsy values-->> false  0 null undefined NaN 'bigInt 0n' ""

// truthy values --> values except falsy values
// "0" 'false' " " { } [ ] etc.

if (null) console.log("!null is executed");
else console.log("empty");

if ([]) console.log("empty array");

if ("false") console.log("executed");

if (0) console.log("-1 executed");

//

// nullish coelishing operator --> ?? anti null and undefined

console.log(null ?? 10);
console.log(20 ?? 10);
console.log(null ?? 10 ?? 20);
console.log(null ?? undefined);
console.log(undefined ?? null);
console.log(undefined ?? null ?? 20);
