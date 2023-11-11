class User {
  constructor(email, password) {
    this.email = email;
    this.password = password;
  }

  get email() {
    return this._email.toUpperCase();
  }
  set email(value) {
    this._email = value;
  }
}

const heman = new User("heman.mail", "abc");
console.log(heman);

console.log(heman.email);
heman.email = "zxy";
console.log(heman.email);
