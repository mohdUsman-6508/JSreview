// Day 3: Control Structures
// asks/Activities:
// ctivity 1: If-Else Statements
// • Task 1: Write a program to check if a number is positive, negative, or zero, and log the result to the console.
// • Task 2:
// Write a program to check if a person is eligible to vote (age >= 18) and log the result to the console.
// ctivity 2: Nested If-Else Statements
// • Task 3:
// Write a program to find the largest of three numbers using nested if-else statements.
// ctivity 3: Switch Case
// • Task 4: Write a program that uses a switch case to determine the day of the week based on a number (1-7) and log the day name to the console.
// • Task 5: Write a program that uses a switch case to assign a grade ('A', 'B', 'C', 'D', 'F') based on a score and log the grade to the console.
// ctivity 4: Conditional (Ternary) Operator
// • Task 6: Write a program that uses the ternary operator to check if a number is even or odd and log the result to the console.
// ctivity 5: Combining Conditions
// • Task 7: Write a program to check if a year is a leap year using multiple conditions (divisible by 4, but not 100 unless also divisible by 400) and log the result to the console.

// Activity 1: if-else statements

let num = 2;
if (num == 0) {
  console.log("Number is zero");
} else if (num > 0) {
  console.log("Number is positive");
} else if (num < 0) {
  console.log("Number is negative");
} else {
  console.log("Enter valid number");
}

let age = 13;

age >= 18
  ? console.log("You are eligible to vote")
  : console.log("You are not eligible to vote");

///

// Activity 2: Nested if-else statements

let num1 = 10;
let num2 = 20;
let num3 = 30;

if (num1 > num2) {
  if (num1 > num3) {
    console.log("Largest Number: ", num1);
  } else {
    console.log("Largest Number: ", num3);
  }
} else if (num2 > num1) {
  if (num2 > num3) {
    console.log("Largest Number: ", num2);
  } else {
    console.log("Largest Number: ", num3);
  }
}
///////////////////////////////

// Activity 3: Switch Case

let weekDay = 5;

switch (weekDay) {
  case 1:
    console.log("Monday");
    break;
  case 2:
    console.log("Tuesday");
    break;
  case 3:
    console.log("Wednesday");
    break;
  case 4:
    console.log("Thursday");
    break;
  case 5:
    console.log("Friday");
    break;
  case 6:
    console.log("Saturday");
    break;
  case 7:
    console.log("Sunday");
    break;
  default:
    console.log("Enter valid week day");
}

// Activity 4: Ternary Operator

let isOddOrEven = 2;

isOddOrEven % 2 == 0
  ? console.log(isOddOrEven, " is Even")
  : console.log(isOddOrEven, " is Odd");

// Leap year

let year = 1987;

if (
  (year % 4 === 0 && year % 100 !== 0) ||
  (year % 100 === 0 && year % 400 === 0)
) {
  console.log(year, " is a Leap year");
} else {
  console.log(year, " is not a Leap year");
}
