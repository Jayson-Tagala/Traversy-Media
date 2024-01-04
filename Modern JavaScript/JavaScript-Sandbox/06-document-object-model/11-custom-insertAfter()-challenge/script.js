//* Custom insertAfter() Challenge

// Instructions

/*
  You may think that since there is an insertBefore() method, there is also
  an insertAfter(), but there isn't. In this challenge, I want you to create a
  custom insertAfter() function.

  - The first param will be newEl w/c will be a new element that you create with
  document.createElement()
  - The second param will be existingEl w/c is an element in the DOM that you want
  to insert your new element after
*/

// The function will be called like this:

/*
 //* New element to insert
  const li = document.createElement('li');
  li.textContent = 'Insert Me After!';

 //* Existing element to insert after
  const firstItem = document.querySelector('li:first-child');

 //* Our custom function
  insertAfter(li, firstItem);
*/

// Hint:

/*
  Remember the properties to get parent and sibling elements. Use some
  of those combined with insertBefore().
*/

function insertAfter(newEl, existingEl) {
  existingEl.parentElement.insertBefore(newEl, existingEl.nextSibling);

  const button = document.createElement("button");
  button.className = "remove-item btn-link text-red";

  const icon = document.createElement("i");
  icon.className = "fa-solid fa-xmark";

  button.appendChild(icon);
  li.appendChild(button);
}

// New element to insert
const li = document.createElement("li");
li.textContent = "Insert Me After!";

// Existing element to insert after
const firstItem = document.querySelector("li:first-child");

// Our custom function
insertAfter(li, firstItem);
