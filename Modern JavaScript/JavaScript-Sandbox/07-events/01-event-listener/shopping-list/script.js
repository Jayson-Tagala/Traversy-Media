// function onClear() {
//   alert("Clear Items");
// }
//
const clearBtn = document.querySelector("#clear");

/* The `function onClear() {` is defining a JavaScript function named `onClear`. This function is
responsible for clearing the items in a list. */
function onClear() {
  const itemList = document.querySelector("ul");
  const items = itemList.querySelectorAll("li");
  //
  //   itemList.innerHTML = "";
  //   items.forEach((item) => item.remove());
  while (itemList.firstChild) {
    itemList.removeChild(itemList.firstChild);
  }
}

//* JavaScript Event Listener
//
// clearBtn.onclick = function () {
//   alert("Clear Items");
// };

//* Add Event Listener
/*
clearBtn.addEventListener("click", () => {
  alert("Clear Items");
});
*/

// clearBtn.addEventListener("click", onClear);
//
// setTimeout(() => clearBtn.removeEventListener("click", onClear), 5000);

// setTimeout(() => clearBtn.click(), 5000);

/* The line `clearBtn.addEventListener("click", onClear);` is adding an event listener to the
`clearBtn` element. When the `click` event occurs on the `clearBtn`, the `onClear` function will be
executed. */
clearBtn.addEventListener("click", onClear);
