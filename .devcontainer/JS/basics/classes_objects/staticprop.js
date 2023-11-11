class User {
  constructor(username) {
    this.username = username;
  }
  logMe() {
    console.log(`${this.username}`);
  }

  static createId() {
    return `123`;
  }
}

const human = new User("newton");
// console.log(human.createId());

class Teacher extends User {
  constructor(username, email) {
    super(username);
    this.email = email;
  }
}

const iphone = new Teacher("iphone", "i@mail.com");
// console.log(iphone.createId());

console.log(iphone);
console.log(User.createId());
