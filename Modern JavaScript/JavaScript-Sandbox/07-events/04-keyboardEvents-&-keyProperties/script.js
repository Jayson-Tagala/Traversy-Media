/* The line `const itemInput = document.getElementById("item-input");` is selecting an HTML element
with the id "item-input" and assigning it to the variable `itemInput`. This allows you to access and
manipulate the selected element in your JavaScript code. */
const itemInput = document.getElementById("item-input");
//
// const onKeyPress = (e) => {
// console.log("keypress");
// };
//
// const onKeyUp = (e) => {
// console.log("keyup");
// };
//
/* The line `const onKeyDown = (e) => {` is declaring a function called `onKeyDown` that takes an event
object `e` as a parameter. This function is an event handler that will be executed when a key is
pressed down while the `itemInput` element has focus. */
const onKeyDown = (e) => {
  console.log("keydown");
  // keyCode
  if (e.keyCode === 13) {
    alert("You pressed enter");
  }

  // code
  /* The line `if (e.code === "Digit1") {` is checking if the key that was pressed has a code value of
  "Digit1". */
  if (e.code === "Digit1") {
    console.log("You pressed 1");
  }

  // repeat
  /* The line `if (e.repeat) {` is checking if the key that was pressed is being held down and is
  repeating. If the condition is true, it means that the key is being held down and the event is
  being fired repeatedly. */
  if (e.repeat) {
    console.log("You are holding down" + e.key);
  }
  console.log("Shift " + e.shiftKey);
  console.log("Control " + e.ctrlKey);
  ``;
  console.log("Alt " + e.altKey);
};

/*
//* Key Press
itemInput.addEventListener("keypress", onKeyPress);
//* Key Up
itemInput.addEventListener("keyup", onKeyUp);
*/
//* Key Down
itemInput.addEventListener("keydown", onKeyDown);
