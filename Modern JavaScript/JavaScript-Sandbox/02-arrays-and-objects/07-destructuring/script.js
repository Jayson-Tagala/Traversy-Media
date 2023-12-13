const firstName = "John";
const lastName = "Doe";
const age = 30;

const person = {
  firstName,
  lastName,
  age,
};

console.log(person.age);

// Destructuring

const todo = {
  id: 1,
  title: "Take out the trash",
  user: { name: "John" },
};

const {
  id: todoId,
  title,
  user: { name },
} = todo;

console.log(todoId);

// Destructure Arrays

const numbers = [23, 5, 4, 16, 2000, 2023];

const [first, second, third, ...rest] = numbers;
console.log(first, second, third, rest);
