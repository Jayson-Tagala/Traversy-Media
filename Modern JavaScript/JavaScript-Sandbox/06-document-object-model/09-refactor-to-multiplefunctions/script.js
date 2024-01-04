function createNewItem(item) {
  /* `const li = document.createElement("li");` is creating a new `<li>` element in the HTML document.
  This element will be used to represent an item in a list. */
  const li = document.createElement("li");
  li.appendChild(document.createTextNode(item));

  const button = document.createElement("button");
  button.className = "remove-item btn-link text-red";

  const icon = document.createElement("i");
  icon.className = "fa-solid fa-xmark";

  /* `button.appendChild(icon);` is appending the `icon` element as a child of the `button` element.
  This means that the `icon` element will be nested inside the `button` element in the HTML
  structure. */
  button.appendChild(icon);
  li.appendChild(button);

  /* `document.querySelector(".items").appendChild(li);` is appending the `li` element as a child of
  the element with the class "items" in the HTML document. This means that the `li` element will be
  added to the list of items in the HTML structure. */
  document.querySelector(".items").appendChild(li);
}

/* The `createButton` function is creating a new button element with the specified classes. It takes a
parameter `classes` which is a string representing the classes to be added to the button element. */
function createButton(classes) {
  const button = document.createElement("button");
  button.className = classes;

  const icon = createIcon("fa-solid fa-xmark");

  return button;
}

/* The `createIcon` function is creating a new `<i>` element with the specified classes. It takes a
parameter `classes` which is a string representing the classes to be added to the `<i>` element. The
function sets the `className` property of the `<i>` element to the specified classes and then
returns the `<i>` element. */
function createIcon(classes) {
  const icon = document.createElement("i");
  icon.className = classes;
  return icon;
}

createNewItem("Cheese");
createNewItem("Banana");
createNewItem("Star Apple");
