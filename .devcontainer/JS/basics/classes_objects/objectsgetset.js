const User = {
  _email: "abc@mail.com",
  _passsword: "123",

  get email() {
    return this._email.toUpperCase();
  },
  set email(value) {
    this._email = value;
  },
};

const tea = Object.create(User);

console.log(tea);
console.log(tea.email);
