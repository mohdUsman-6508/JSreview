// Day 1: Variables and Data Types
// Tasks/Activities:
// Activity 1: Variable Declaration
// • Task 1: Declare a variable using var, assign it a number, and log the value to the console.
// • Task 2: Declare a variable using let,  assign it a string, and log the value to the console.
// ,
// Activity 2: Constant Declaration using let , assign it a boolean
//
// • Task 3: Declare a variable using const , assign it a boolean value, and log the value to the console.
// Activity 3: Data Types
// • Task 4: Create variables of different data types (number, string, boolean, object, array) and log each variable's type using the typeof operator.
// Activity 4:
// Reassigning Variables
// • Task 5: Declare a variable using let , assign it an initial value, reassign a new value, and log both values to the console.
// Activity 5: Understanding const
// • Task 6: Try reassigning a variable declared with const and observe the error.

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// ACTIVITY 1 //

var version = 6;
let programmingLanguage = "Javascript";
console.log(version);
console.log(programmingLanguage);

// ACTIVITY 2 //

const isOOPBased = true;
console.log(isOOPBased);

// ACTIVITY 3 //

let nextjs = 14;
let name = "NEXTJS";
let isFramework = true;

let info = {
  name: "NEXTJS",
  version: 14,
  language: "Javascript",
  domain: "Webdev",
};

const previousReleases = [12, 13, 14, 14.2];

console.table([nextjs, name, isFramework, info, previousReleases]);
console.log([
  typeof nextjs,
  typeof name,
  typeof isFramework,
  typeof info,
  typeof previousReleases,
]);

console.log(info);
console.log(info.language);
console.log(info["name"]);

// ACTIVITY 4 //

let newVersion = 14.2;
console.log(newVersion);
newVersion = 14.5;
console.log(newVersion);

const baseVersion = 1;
// baseVersion = 3;
// console.log(baseVersion);
// TypeError: Assignment to constant variable.
