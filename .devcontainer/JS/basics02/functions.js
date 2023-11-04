//we are going to make functions here we can pass arguments as a value ,object, array

function confidence() {
  console.log(`You can do it champ`);
}

confidence();

// make a function which find the max from given array

function max(arr) {
  let maxValue = arr[0];
  for (let i = 0; i < arr.length; i++) {
    if (maxValue < arr[i]) maxValue = arr[i];
  }

  console.log(`maximum value: ${maxValue}`);
  return maxValue;
}

const a1 = [2, 3, 1, 3, 4, 5];
max(a1);
max([3, 4, 5, 9, , 5, 6]);

// pass an object in the function make a wonderful message for the user

function greetings(obj) {
  console.log(
    `Marhaba:) how are you ${obj.name},I hope you are doing well,you ${
      obj.isGood ? "have good physique" : "can have better physique"
    }`
  );
}

greetings({ name: "osman", isGood: true });

const object = { name: "omar", isGood: true };
const obj = Object.create(object);
obj.name = "osman";
obj.isGood = true;
obj.id = 1;

greetings(obj);
console.log(obj);

//here we also use rest operator...

//make a cart calculator

function totalAmount(...amount) {
  let totalSum = 0;
  for (let i = 0; i < amount.length; i++) totalSum += amount[i];
  return totalSum;
}

const ta = totalAmount(10, 100, 200, 300);
console.log(`you have done shopping of ${ta} rupees`);

// remember one thing that
//  we can call a function anywhere
//   but function expression we can call only after its definition
