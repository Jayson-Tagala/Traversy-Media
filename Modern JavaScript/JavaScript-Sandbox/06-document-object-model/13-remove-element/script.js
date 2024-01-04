function removeClearButton() {
  const clearBtn = document.querySelector("#clear");
  clearBtn.remove();
}

function removeFirstItem() {
  const ul = document.querySelector("ul");
  const li = document.querySelector("li:first-child");

  ul.removeChild(li);
}

function removeItem(itemNumber) {
  const listItem = document.getElementById("item-list");

  if (itemNumber >= 0 && itemNumber < listItem.children.length) {
    const itemToRemove = listItem.children[itemNumber];

    listItem.removeChild(itemToRemove);
  } else {
    console.error("Invalid index provided");
  }
}

// Shorthand
function removeItem2(itemNumber) {
  const ul = document.querySelector("ul");
  const li = document.querySelectorAll("li")[itemNumber - 1];

  ul.removeChild(li);
}

function removeItem3(itemNumber) {
  const li = document.querySelectorAll("li");
  li[itemNumber - 1].remove();
}

const removeItem4 = (itemNumber) =>
  document.querySelectorAll("li")[itemNumber - 1].remove();

removeClearButton();
// removeFirstItem();
// removeItem(1);
// removeItem2(2);
// removeItem3(3);
removeItem4(1);
