const div = document.createElement("div");
div.className = "my-element";
div.id = "my-element";
div.setAttribute("title", "My Element");

// div.innerText = "Hello World";

const text = document.createTextNode("Mango");
div.appendChild(text);

// console.log(div);

document.querySelector("ul").appendChild(div);
