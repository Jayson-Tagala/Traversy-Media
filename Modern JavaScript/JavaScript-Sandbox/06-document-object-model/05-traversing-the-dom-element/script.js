let output;

const parent = document.querySelector(".parent");

//* node.children element -> return the children element
output = parent.children;

output = parent.children[1].innerText;
output = parent.children[1].className;
output = parent.children[1].nodeName;

parent.children[1].innerText = "Child Two";
parent.children[1].style.color = "red";

//* node.firstElementChild -> return the first child that is an element
parent.firstElementChild.innerText = "Child One";
parent.firstElementChild.style.color = "blue";

//* node.lastElementChild -> return the last child that is an element
parent.lastElementChild.innerText = "Child Three";
parent.lastElementChild.style.color = "green";

//* Get parent elements from a child
const child = document.querySelector(".child");

output = child.parentElement;
child.parentElement.style.border = "1px solid #ccc";
child.parentElement.style.padding = "10px";

//* Sibling elements
const secondItem = document.querySelector(".child:nth-child(2)");

output = secondItem.nextElementSibling;

secondItem.nextElementSibling.style.color = "green";
secondItem.previousElementSibling.style.color = "brown";

console.log(output);
