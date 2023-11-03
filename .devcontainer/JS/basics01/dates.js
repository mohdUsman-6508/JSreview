// Dates

let myDate = new Date();
// console.log(myDate);
// console.log(myDate.toDateString());
// console.log(myDate.toString());
// console.log(myDate.toLocaleString());
// console.log(typeof myDate);

let myCreatedDate = new Date(2023, 3, 20, 5, 1);
console.log(myCreatedDate.toString());

let myTimeStamp = Date.now();
console.log(myTimeStamp);
console.log(myCreatedDate.getHours());
console.log(myCreatedDate.getTime());

const day = myCreatedDate.toLocaleString("default", {
  weekday: "long",
  month: "long",
});
console.log(day);
