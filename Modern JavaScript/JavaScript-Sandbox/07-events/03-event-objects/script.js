const logo = document.querySelector("img");

function onClick(e) {
  /*
  //* Target - The element that triggered the event
  console.log(e.target);
  //* Current Target - The element that the event Listener is attached to
    (These are the same in the case)
  console.log(e.currentTarget);
  e.target.style.backgroundColor = "black";
  //* Type - The type f event that was triggered
  console.log(e.type);
  //* TimeStamp - The time that the event was triggered
  console.log(e.timeStamp);
  //* clientX/clientY - The position x/y the mouse click relative to the window
  console.log(e.clientX);
  console.log(e.clientY);
   //* offsetX/offsetY - The position x/y of the mouse click relative to the element
   console.log(e.offsetX);
   console.log(e.offsetY);
   //* pageX/pageY - The position x/y of the mouse click relative to the page
  console.log(e.pageX);
  console.log(e.pageY);
  */
  //* screenX/screenY - The position x/y of the mouse click relative to the screen
  console.log(e.screenX);
  console.log(e.screenY);
}
function onDrag(e) {
  document.querySelector("h1").textContent = `X ${e.clientX} Y ${e.clientY}`;
}

logo.addEventListener("drag", onDrag);
logo.addEventListener("click", onClick);

// document.body.addEventListener("click", function (e) {
// console.log(e.target);
// console.log(e.currentTarget);
// });

logo.addEventListener("click", onClick);
