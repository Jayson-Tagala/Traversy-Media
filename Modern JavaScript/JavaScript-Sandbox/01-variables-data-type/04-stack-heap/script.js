// Data Types
// #Primitive Types: Stored directly in the 'stack', where it is accessed from
// -> String | Number | Booleans | Null | Undefined | Symbol | BigInt
// #Reference Types: Stored in the heap and accessed by reference
// -> Arrays | Functions | Objects

// Values are stored on the stack
const name = "John";
const age = 30;

// Reference values are stored on the heap

const person = {
  name: "Juan",
  age: 40,
};

let newName = name;
newName = "Juanito";

console.log(newName);

let newPerson = person;
newPerson.name = "Pedro";

console.log(person, newPerson);
