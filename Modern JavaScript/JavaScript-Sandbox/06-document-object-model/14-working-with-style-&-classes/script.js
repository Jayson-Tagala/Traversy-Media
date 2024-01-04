const text = document.querySelector("p");
const itemList = document.querySelector(".item-list");
const items = itemList.querySelectorAll("li");

function run() {
  // className - Gets a string of all classes
  console.log(itemList.className);
  // Changing the classes with className
  text.className = "dark";
}

function run2() {
  itemList.classList.forEach((c) => console.log(c));

  //   text.classList.add("dark");
  //   text.classList.remove("card");

  //   text.classList.toggle("dark");
  //   text.classList.toggle("hidden");

  // Change Style
  text.classList.replace("card", "dark");
}

function run3() {
  items.forEach((item, index) => {
    item.style.color = "red";

    if (index === 2) {
      item.style.color = "blue";
    }
  });
}

document.querySelector("button").onclick = run3;
