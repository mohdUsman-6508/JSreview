const user = {
  email: "abc@mail.mn",
  fullname: {
    username: {
      firstname: "abc",
      lastname: "xyz",
    },
  },
};

console.log(user.fullname.username.firstname);

const obj1 = { 1: "a", 2: "b" };
const obj2 = { 11: "aa", 22: "bb" };
const obj3 = { 111: "aaa", 222: "bbb" };
const pobj = Object.assign({}, obj1, obj2, obj3);
console.log(pobj);
const mObj = { ...obj1, ...obj3 };
console.log(mObj);

console.log(Object.keys(obj1));
console.log(Object.values(obj1));
console.log(Object.entries(obj1));

const { email } = user;
const { fullname: name } = user;
console.log(email, name);
