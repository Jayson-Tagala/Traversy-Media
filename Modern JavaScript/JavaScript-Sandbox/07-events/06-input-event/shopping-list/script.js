const itemInput = document.getElementById("item-input");
const priorityInput = document.getElementById("priority-input");
const checkbox = document.getElementById("checkbox");
const heading = document.querySelector("h1");

/* The `function onInput(e)` is a JavaScript function that is called when the `itemInput` or
`priorityInput` elements receive input. It takes an event object `e` as a parameter. */
function onInput(e) {
  heading.textContent = e.target.value;
}

/* The `onChecked` function is a JavaScript function that is called when the checkbox element is
checked or unchecked. It takes an event object `e` as a parameter. */
function onChecked(e) {
  const isChecked = e.target.checked;
  heading.textContent = isChecked ? "Checked" : "Not Checked";
}

/* The `onFocus()` function is a JavaScript function that is called when the `itemInput` element
receives focus. It adds a red outline style to the `itemInput` element by setting the
`outlineStyle`, `outlineWidth`, and `outlineColor` properties. Additionally, it logs a message to
the console indicating that the input is focused. */
function onFocus() {
  console.log("Input is focused");
  itemInput.style.outlineStyle = "solid";
  itemInput.style.outlineWidth = "1px";
  itemInput.style.outlineColor = "red";
}

/* The `onBlur()` function is a JavaScript function that is called when the `itemInput` loses focus. It
removes the red outline style from the `itemInput` element by setting the `outlineStyle` property to
"none". Additionally, it logs a message to the console indicating that the input is not focused. */
function onBlur() {
  console.log("Input is not focused");
  itemInput.style.outlineStyle = "none";
}

itemInput.addEventListener("input", onInput);
priorityInput.addEventListener("change", onInput);
checkbox.addEventListener("input", onChecked);
itemInput.addEventListener("focus", onFocus);
itemInput.addEventListener("blur", onBlur);
