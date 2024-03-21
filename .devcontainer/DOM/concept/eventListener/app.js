console.log("events working....");

/// inline eventL on button1

/// element.addEventListner("click",function)

const btn2 = document.querySelector(".btn2");
const btn3 = document.querySelector(".btn3");

const box3 = document.querySelector(".box3");
const box2 = document.querySelector(".box2");
const box1 = document.querySelector(".box1");

btn2.addEventListener("click", () => {
  alert("I love java");
  box1.style.backgroundColor = "red";
  box2.style.backgroundColor = "yellow";
});

btn3.addEventListener("mouseover", loveRust, false);
function loveRust() {
  alert("I love Rust");
  box3.style.backgroundColor = "blue";
}

//////////////

const box41 = document.querySelector(".box41");
const box42 = document.querySelector(".box42");
const btnr = document.querySelector(".rvl-btn");

function showHide() {
  console.log("good");
  box42.classList.toggle("hidden");
}

btnr.addEventListener("click", showHide, true);

///////// Event propagation

// event capturing⬇️ true
// event bubbling⬆️ false bydefault
// ⬇️⬆️

// e.stopPropagation()
// e.preventDefault()

//////////// Event delegation

// it allows users to append
//  a single 'event listener' to a
// parent element that adds it to
// all of its present and future descendants that match
// a selector.

//

////event delegation in action

//present
document.querySelector(".btns").addEventListener("click", function (e) {
  console.log(e.target.getAttribute("id"));
  if (e.target.getAttribute("id")) {
    e.target.style.backgroundColor = "green";
  }
});

////////

//future
const btns = document.querySelector(".btns");
document.querySelector("#b1").addEventListener("click", function () {
  const b = document.createElement("button");
  b.textContent = "btn";
  btns.append(b);
  b.setAttribute("id", "b");
});

//////////
