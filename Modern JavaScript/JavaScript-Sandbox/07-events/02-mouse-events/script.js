const logo = document.querySelector("img");

/**
 * The above code defines a function called onClick that logs "click event" to the console when called.
 */
const onClick = () => console.log("click event");
/* The line `const onDoubleClick = () => {` is defining a function called `onDoubleClick` using an
arrow function syntax. This function is executed when the `dblclick` event occurs on the `logo`
element. */
const onDoubleClick = () => {
  if (document.body.style.backgroundColor !== "purple") {
    document.body.style.backgroundColor = "purple";
    document.body.style.color = "white";
  } else {
    document.body.style.backgroundColor = "white";
    document.body.style.color = "black";
  }
};
/**
 * The function `onRightClick` logs a message to the console when a right click event occurs.
 */
const onRightClick = () => console.log("right click event");
/**
 * The onMouseDown function logs a message to the console when a mouse down event occurs.
 */
const onMouseDown = () => console.log("mouse down event");
/**
 * The onMouseUp function logs a message to the console when the mouse up event occurs.
 */
const onMouseUp = () => console.log("mouse up event");
/**
 * The `onMouseWheel` function logs a message to the console when a mouse wheel event occurs.
 */
const onMouseWheel = () => console.log("mouse wheel event");
/**
 * The onMouseOver function logs a message to the console when the mouse is over an element.
 */
const onMouseOver = () => console.log("mouse over event");
/**
 * The onMouseOut function logs a message to the console when the mouse leaves an element.
 */
const onMouseOut = () => console.log("mouse out event");
/**
 * The function onDragStart logs a message when the drag start event occurs.
 */
const onDragStart = () => console.log("drag start event");
/**
 * The function `onDrag` logs a message to the console when a drag event occurs.
 */
const onDrag = () => console.log("drag event");
/**
 * The function "onDragEnd" logs a message to the console when the drag end event occurs.
 */
const onDragEnd = () => console.log("https://www.youtube.com/drag end event");

// Event Listeners
logo.addEventListener("click", onClick);
logo.addEventListener("dblclick", onDoubleClick);
logo.addEventListener("contextmenu", onRightClick);
logo.addEventListener("mousedown", onMouseDown);
logo.addEventListener("mouseup", onMouseUp);
logo.addEventListener("wheel", onMouseWheel);
logo.addEventListener("mouseover", onMouseOver);
logo.addEventListener("mouseout", onMouseOut);
logo.addEventListener("dragstart", onDragStart);
logo.addEventListener("drag", onDrag);
logo.addEventListener("dragend", onDragEnd);
