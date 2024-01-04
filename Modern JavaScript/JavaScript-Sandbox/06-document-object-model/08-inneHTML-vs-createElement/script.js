// Quick & Dirty
function createListItem(item) {
  const li = document.createElement("li");

  li.innerHTML = `${item} <button class="remove-item btn-link text-red">
  <i class="fa-solid fa-xmark"></i>
</button>`;

  document.querySelector(".items").appendChild(li);
}

// Clean & Performant
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

createListItem("Eggs");
createNewItem("Cheese");
