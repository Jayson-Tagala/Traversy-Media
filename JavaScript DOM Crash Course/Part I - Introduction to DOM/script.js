// * EXAMINE THE DOCUMENT OBJECT *//
// console.dir(document);

// console.log(document.domain);
// console.log(document.URL);
// console.log(document.title);
// console.log(document.body);
// console.log(document.head);
// console.log(document.images[0]);
// console.log(document.links[1].href);
// console.log(document.forms);
// console.log(document.links);

// * GetElementById * //

// console.log(document.getElementById("header-title"));
// var headerTitle = document.getElementById("header-title");
// console.log(headerTitle);
// headerTitle.textContent = "Hello";
// headerTitle.innerHTML = "Goodbye";
// headerTitle.innerHTML = "<h3>Hello World</h3>";
// headerTitle.style.borderBottom = "solid 3px #000";

// * GetElementByClassName * //

// var items = document.getElementsByClassName("list-group-item");
// console.log(items);
// console.log(items[1]);
// items[1].textContent = "Changed";
// items[1].style.backgroundColor = "yellow";

// items.style.backgroundColor = "#f4f4f4";
// for (var i = 0; i < items.length; i++) {
//   items[i].style.backgroundColor = "red";
// }

// * GetElementByTagName *//

// var li = document.getElementsByTagName("li");
// console.log(li);
// console.log(li[1]);
// li[1].textContent = "Hello 2";
// li[1].style.fontWeight = "bold";
// li[1].style.backgroundColor = "yellow";
//
// for (var i = 0; i < li.length; i++) {
//   li[i].style.backgroundColor = "red";
// }

// * QuerySelector * //
// var header = document.querySelector(".new-container");
// header.style.borderBottom = "solid 4px red";
//
// var input = document.querySelector("input");
// input.value = "Hello World";
//
// var submit = document.querySelector("button");
// submit.innerHTML = "SEND";
//
// var item = document.querySelector(".list-group-item");
// item.style.color = "red";
//
// var lastItem = document.querySelector(".list-group-item:last-child");
// lastItem.style.color = "orange";
//
// var secondItem = document.querySelector(".list-group-item:nth-child(2");
// secondItem.style.color = "blue";
//

// * QuerySelectorAll * //
var titles = document.querySelectorAll(".main-container");
console.log(titles);
titles[0].textContent = "Hello";

var odd = document.querySelectorAll("li:nth-child(odd)");
var even = document.querySelectorAll("li:nth-child(even)");

for (var i = 0; i < odd.length; i++) {
  odd[i].style.backgroundColor = "red";
  even[i].style.backgroundColor = "blue";
}
