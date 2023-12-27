// Challenge 1

// Instructions:

/*
Take the people array and create an array called youngPeople that stores objects with ONLY 'name' and 'email'
properties of all the people that are 25 and under. The name property should have their first and last name.
*/

const people = [
  {
    firstName: "John",
    lastName: "Dela Cruz",
    email: "john@email.com",
    phone: 111 - 111 - 111,
    age: 23,
  },
  {
    firstName: "Lea",
    lastName: "Salonga",
    email: "lea@email.com",
    phone: 222 - 222 - 222,
    age: 38,
  },
  {
    firstName: " Bamboo",
    lastName: "Tree",
    email: "bamboo@email.com",
    phone: 333 - 333 - 333,
    age: 34,
  },
  {
    firstName: "Sarah",
    lastName: "Geronimo",
    email: "sarah@email.com",
    phone: 444 - 444 - 444,
    age: 25,
  },
  {
    firstName: "Apple",
    lastName: "Ap",
    email: "apple@email.com",
    phone: 555 - 555 - 555,
    age: 28,
  },
  {
    firstName: "Darren",
    lastName: "Espanto",
    email: "darren@email.com",
    phone: 666 - 666 - 666,
    age: 21,
  },
  {
    firstName: "Juan",
    lastName: "Karlos",
    email: "jk@email.com",
    phone: 777 - 777 - 777,
    age: 22,
  },
  {
    firstName: "Joe",
    lastName: "Cup",
    email: "cupofjoe@email.com",
    phone: 888 - 888 - 888,
    age: 24,
  },
];

const youngPeople = people
  .filter((person) => person.age <= 25)
  .map((people) => {
    return {
      name: `${people.firstName} ${people.lastName}`,
      email: people.email,
    };
  });

console.log(youngPeople);

// Challenge 2

// Instructions:

//Add all the positive numbers in the array.

// Expected Result:

// const numbers = [2, -30, 50, 20, -12, -9, 7]
// console.loge(positiveSum); // 79

const numbers = [2, -30, 50, 20, -12, -9, 7];

const positiveSum = numbers.reduce((sum, number) => {
  if (number > 0) {
    return sum + number;
  }
  return sum;
}, 0);

console.log(positiveSum);
// Other way using .filter and .reduce

const negativeSum = numbers
  .filter((number) => number < 0)
  .reduce((sum, number) => sum + number, 0);

console.log(negativeSum);

// Challenge 3

// Instructions:

/*
Create a new array called capitalizedWords with the words from the words array 
with the first letter of each word capitalized.
*/

// Expected Result:
// const words = ['coder', 'programmer', 'developer']
// console.log(capitalizedWords); // ['Coder', 'Programmer', 'Developer']

const words = ["coder", "programmer", "developer"];

const capitalizedWord = words.map((word) => {
  return word[0].toUpperCase() + word.slice(1, word.length);
});
console.log(capitalizedWord);
