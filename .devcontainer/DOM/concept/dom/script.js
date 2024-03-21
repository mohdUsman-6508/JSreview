console.log("working ...");

//selecting the elements

const heading = document.getElementById("main-heading");
const fruitList = document.getElementsByClassName("fruits-list");
const fruitItems = document.querySelectorAll(".fruit-item");
const container = document.querySelector(".container");
const listItem = document.getElementsByTagName("li");

// styling the elements(inline)

heading.style.color = "red";
heading.style.backgroundColor = "yellow";

for (let i = 0; i < fruitItems.length; i++) {
  fruitItems[i].style.fontSize = "30px";
  if (i % 2 == 0) {
    fruitItems[i].style.backgroundColor = "green";
  }
}

/////// Adding elements

const ulist = document.querySelector("ul");
const li = document.createElement("li");
ulist.append(li);

li.innerText = "Khajoor";
li.style.listStyle = "none";
///////setting attributes
li.setAttribute("class", "fruit-item");
// li.removeAttribute("class");
console.log(li.getAttribute("class"));
li.classList.add("special-item");
// li.classList.remove("special-item");

//////// addding content and modifying content

const list = document.querySelector(".fruit-item");
console.log(list);
console.log(list.innerHTML);
console.log(list.textContent);
console.log(list.innerText);

///// REMOVE ELEMENTS
li.remove();
///////////////////////////////////////////////////////////////////
// TRAVERSING THE DOM

const html = document.documentElement;
console.log(html.parentElement);
console.log(html.parentNode);
// child to parent

console.log(ulist.parentNode);
console.log(ulist.parentElement);
console.log(ulist.parentElement.parentElement);

//// parent to child

console.log(ulist.childNodes);
console.log(ulist.children);
console.log(ulist.firstChild);
console.log(ulist.firstElementChild);
ulist.firstElementChild.style.color = "red";

/// siblings

console.log(ulist.nextSibling);
console.log(ulist.previousElementSibling);
