// * FOR OF is uses in Arrays while FOR IN uses in Objects * //

// Loop through arrays
const items = ["book", "table", "chair", "kite"];
const users = [{ name: "Sarah" }, { name: "Bamboo" }, { name: "Lea" }];

// for (let i = 0; i < items.length; i++) {
// console.log(items[i]);
// }

// Shortcut

for (const item of items) {
  console.log(item);
}

for (const user of users) {
  console.log(user);
}

// Loop over strings
const str = "Hello World";

for (const letter of str) {
  console.log(letter);
}

// Loop over iterable objects like strings
let message = "Programmer";

for (let char of message) {
  console.log(char);
}

// Loop over Maaps
const map = new Map();
map.set("name", "John");
map.set("age", 23);

for (const [key, value] of map) {
  console.log(key, value);
}
