let x;

const person = {
  name: "John Doe",
  age: 23,
  isAdmin: true,
  address: {
    street: "Salcedo St.",
    city: "Daet",
    state: "Philippines",
  },
  hobbies: ["music", "sports"],
};

person.name = "Jane Doe";
person["isAdmin"] = false;

delete person.age;
person.hasChildren = true;

person.greet = function () {
  console.log(`Hello, my name is ${this.name}`);
};

person.greet();
x = person;

console.log(x);
