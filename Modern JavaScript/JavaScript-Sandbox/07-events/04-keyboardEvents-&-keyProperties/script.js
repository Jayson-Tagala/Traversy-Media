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
const onKeyDown = (e) => {
  console.log("keydown");
  // keyCode
  if (e.keyCode === 13) {
    alert("You pressed enter");
  }

  // code
  if (e.code === "Digit1") {
    console.log("You pressed 1");
  }

  // repeat
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
