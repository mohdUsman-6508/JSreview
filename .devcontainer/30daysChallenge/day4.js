// Activity 1: For Loop
// • Task 1: Write a program to print numbers from 1 to 10 using a for loop.
// • Task 2: Write a program to print the multiplication table of 5 using a for loop.
// Activity 2: While Loop
// • Task 3: Write a program to calculate the sum of numbers from 1 to 10 using a while loop.
// • Task 4: Write a program to print numbers from 10 to 1 using a while loop.
// Activity 3: Do...While Loop
// • Task 5: Write a program to print numbers from 1 to 5 using a do...while loop.
// • Task 6: Write a program to calculate the factorial of a number using a do...while loop.
// Activity 4: Nested Loops
// • Task 7: Write a program to print a pattern using nested for loops:
// (ignore color)
// ea
// Activity 5: Loop Control Statements
// • Task 8: Write a program to print numbers from 1 to 10, but skip the number 5 using the continue statement.
// • Task 9: Write a Drogram to Drint numbers from 1 to 10, but stop the 1000 when the number is 7 using the break statement.

// ACTIVITY 1: For Loop

for (let i = 1; i <= 10; i++) {
  console.log(i);
}

for (let i = 1; i <= 10; i++) {
  console.log(`5x ${i} = ${5 * i}`);
}

// ACTIVITY 2: WHILE LOOP

let sum = 0;
let i = 0;

while (i <= 10) {
  sum += i;
  i++;
}
console.log("sum: ", sum);

let j = 10;
while (j > 0) {
  console.log(j);
  j--;
}

// ACTIIVITY 3

let num = 1;
console.log("num");
do {
  console.log(num);
  num++;
} while (num <= 5);

let fact = 1;
let num1 = 0;
do {
  if (num1 == 0) {
    break;
  }
  fact *= num1;
  num1--;
} while (num1 > 0);
console.log("fact:", fact);

for (let i = 0; i < 5; i++) {
  let output = "";
  for (let j = 0; j < i + 1; j++) {
    output += "* ";
  }
  console.log(output);
  output + "\n";
}

// activity 5: loop control statements
for (let i = 1; i <= 10; i++) {
  if (i === 5) continue;
  console.log(i);
}

for (let i = 1; i <= 10; i++) {
  if (i === 7) break;
  console.log(i);
}
