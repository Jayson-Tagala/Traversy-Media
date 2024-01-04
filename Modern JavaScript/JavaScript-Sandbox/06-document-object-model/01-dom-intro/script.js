// console.log(window.document);

// console.log(document.body.innerText); // Only show the inner Text
// console.log(document.body.innerHTML); // Shows the inner text and the element

// console.log(document.links[0]);

// *METHODS*

// getElementById
console.log(document.getElementById("main"));
const main = document.getElementById("main");
main.innerHTML = "<h1>Hello from main</h1>";

// querySelector
document.querySelector("#main h1").innerText = "Hello World";
