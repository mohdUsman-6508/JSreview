//parent class

class Shape {
  constructor(color) {
    this.color = color;
  }

  describe() {
    return `This shape has ${this.color} color :) `;
  }
}

//child class

class Rectangle extends Shape {
  constructor(color, width, height) {
    //super keyword to access parent properties
    super(color);
    this.width = width;
    this.height = height;
  }

  area() {
    return `Area of Rectangle {w=${this.width}, h=${this.height}} : ${
      this.width * this.height
    }`;
  }

  //accessing parent's method
  describe() {
    return super.describe() + `This is Rectangle!`;
  }
}

const rect = new Rectangle("blue", 10, 12);
console.log(rect.area());
console.log(rect.describe());
