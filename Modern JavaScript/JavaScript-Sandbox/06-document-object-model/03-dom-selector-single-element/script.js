// document.getElementById()

console.log(document.getElementById("app-title"));
console.log(document.getElementById("app-title").id);
console.log(document.getElementById("app-title").className);
console.log(document.getElementById("app-title").getAttribute("id"));

// Set attributes
// document.getElementById("app-title").id = "new-id";
document.getElementById("app-title").title = "Shopping List";
document.getElementById("app-title").setAttribute("class", "title");

const title = document.getElementById("app-title");

// Get / Change content

console.log(title.textContent);
title.textContent = "Hello Shoppers";
title.innerText = "Hi Shoppers";
title.innerHTML = "<strong>Bonjur Shoppers</strong>";

// Change Styles
title.style.color = "white";
title.style.backgroundColor = "black";
title.style.borderRadius = "10px";
title.style.padding = "10px";

// document.querySelector()

console.log(document.querySelector("h1"));
console.log(document.querySelector("#app-title"));
console.log(document.querySelector("container"));
console.log(document.querySelector('input[type="text"]'));

const secondItem = document.querySelector("li:nth-child(2)");
secondItem.innerText = "Buko Juice";
secondItem.style.color = "green";

// Use these method on other elements

const list = document.querySelector("ul");
console.log(list);
const firstItem = list.querySelector("li");
firstItem.style.color = "red";
