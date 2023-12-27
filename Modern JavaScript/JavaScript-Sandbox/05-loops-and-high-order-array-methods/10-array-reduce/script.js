// *Reduce method

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const sum = numbers.reduce(function (accumulator, currentValue) {
  return accumulator + currentValue;
}, 0);

// Shorthand
const sum2 = numbers.reduce((acc, cur) => acc + cur, 0);

console.log(sum);
console.log(sum2);

// Using a for loop

const sum3 = () => {
  let acc = 0;
  for (const cur of numbers) {
    acc += cur;
  }
  return acc;
};

console.log(sum3()); // Note: This is a function so u need to add open and closed parenthesis ()

const cart = [
  { id: 1, name: "Product 1", price: 130 },
  { id: 2, name: "Product 2", price: 150 },
  { id: 3, name: "Product 3", price: 175 },
];

const total = cart.map((item) => item.price).reduce((acc, cur) => acc + cur, 0);
console.log(total);

// Shorthand solution
const total2 = cart.reduce(function (acc, item) {
  return acc + item.price;
}, 0);
console.log(total2);
