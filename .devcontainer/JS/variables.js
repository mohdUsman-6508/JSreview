console.log("Assalamualaikum,I am Mohammad Osman.");


// const -- use for constant value
// let vs var -- use for variable value or allow reassigning
// scope issue with var ,so use let 
// function level scope and global level scope

const pi=3.14;
let password='1234';
var id='01';
alsoVariable='good';

// pi=3.141; cannot reassign 
alsoVariable='better';
id='001';


console.log(alsoVariable);
console.log(pi,password,id);
console.table([pi,password,id]);
