//immediately invoked function expression(IIFE)

(function courage() {
  console.log("COURAGE LOADED");
})();

((name) => console.log(`${name} is a Leader;`))("usman");

(() => console.log("DB connected"))();
