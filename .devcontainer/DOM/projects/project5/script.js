const addbtn = document.querySelector(".addbtn");
const task = document.querySelector(".task");
const taskitem = document.querySelector(".task-item");

addbtn.addEventListener("click", function () {
  let licontainer = document.createElement("div");
  licontainer.classList.add("licontainer");
  let li = document.createElement("li");
  li.style.listStyle = "none";
  li.textContent = `${task.value}`;
  console.log(task.value);
  licontainer.append(li);

  let btndone = document.createElement("button");
  btndone.classList.add("done");
  btndone.innerHTML = `Done`;
  licontainer.append(btndone);

  let btndel = document.createElement("button");
  btndel.innerText = "Delete";
  btndel.classList.add("delete");
  licontainer.append(btndel);
  taskitem.append(licontainer);
  task.value = "";
  btndone.addEventListener("click", function () {
    li.style.textDecoration = "line-through";
  });

  btndel.addEventListener("click", function (e) {
    let target = e.target;
    console.log(target);
    target.parentElement.remove();
  });
});
