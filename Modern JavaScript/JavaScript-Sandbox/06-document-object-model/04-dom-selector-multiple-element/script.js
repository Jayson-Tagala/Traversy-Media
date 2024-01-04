// querySelectorAll()

const listItems = document.querySelectorAll(".item");

//* Set a style for specific single element
listItems[0].style.color = "#FF0000";
listItems[1].style.color = "#FFA500";
listItems[2].style.color = "#808080";
listItems[3].style.color = "#00BFFF";

/*
//* Set a style for all elements
listItems.forEach((item, index) => {
  item.style.color = "red";

  //* Remove element // note: I add index to call it to the function
  if (index === 1) {
    item.remove();
  }
  //* Change the name of the element // 0reos -> Egg
  if (index === 2) {
    /*
    item.innerText = "Egg"; //* But the button is gone //* to fix this we can use inner.HTML and include the the property of x button into account.
  */
/*
    item.innerHTML = ` Egg <button class="remove-item btn-link text-red">
  <i class="fa-solid fa-xmark"></i>
</button>`; //* Note: Use backtiks, not quotation
  }
});
*/

const listItems2 = document.getElementsByClassName("item");

// console.log(listItems2[2].innerText);

// Convert the array(ListItem2) into a function
const listItems2Array = Array.from(listItems2);

listItems2Array.forEach((item) => {
  console.log(item.innerText); //* Error: listItems2.forEach is not function. Note: Convert array into function first...
});

//* getElementByTagName
const listItems3 = document.getElementsByTagName("li");
listItems.forEach((item, index) => {
  if (index === 0) {
    item.style.color = "#008000";
  }

  if (index === 0) {
    item.innerHTML = `Guava
<button class="remove-item btn-link text-red">
  <i class="fa-solid fa-xmark"></i>
</button>`;
  }
});
