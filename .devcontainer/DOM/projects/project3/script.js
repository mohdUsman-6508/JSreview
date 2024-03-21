const btn1 = document.getElementById("q1");
const btn2 = document.getElementById("q2");
const btn3 = document.getElementById("q3");
const a1 = document.getElementById("a1");
const a2 = document.getElementById("a2");
const a3 = document.getElementById("a3");
const q1 = document.getElementById("q1");

btn1.addEventListener("click", function (e) {
  a1.classList.toggle("show");
  q1.innerText === "+" ? (q1.innerText = "-") : (q1.innerText = "+");
  close(1);
});
btn2.addEventListener("click", function (e) {
  q2.innerText === "+" ? (q2.innerText = "-") : (q2.innerText = "+");
  a2.classList.toggle("show");
  close(2);
});
btn3.addEventListener("click", function (e) {
  q3.innerText === "+" ? (q3.innerText = "-") : (q3.innerText = "+");
  a3.classList.toggle("show");
  close(3);
});

function close(ans) {
  for (let i = 1; i <= 3; i++) {
    if (i == ans) continue;
    let element = document.getElementById(`a${i}`);
    if (element.classList.contains("show")) {
      element.classList.remove("show");
    }
  }
}
