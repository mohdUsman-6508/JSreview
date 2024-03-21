const modalbtn = document.getElementById("modal-btn");
const modal = document.querySelector(".modal");
const close = document.querySelector(".close");

modalbtn.addEventListener("click", function () {
  modal.classList.toggle("show");
});

close.addEventListener("click", () => {
  modal.classList.toggle("show");
});

window.addEventListener("click", function (e) {
  if (e.target === modal) {
    modal.classList.toggle("show");
  }
});
