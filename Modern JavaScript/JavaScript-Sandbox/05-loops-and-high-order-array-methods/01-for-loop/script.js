// for ([initialExpression]; [conditionExpression]; [incrementExpression])
//   statement;

// INITIAL EXPRESSION - initializes a variable/counter
// CONDITION EXPRESSION - condition that the loop will continue to run as long as it is met or until the condition is false
// INCREMENT EXPRESSION - expression that will be executed after each iteration of the loop. Usually increments the variable
// STATEMENT - code that will be executed each time the loop is run. To execute a 'bloc' of code, use the '{}' syntax

for (let i = 1; i <= 10; i++) {
  if (i === 4) {
    console.log("4 is my lucky number");
  } else {
    console.log("Number " + i);
  }
}

// Nest Loops
for (let i = 1; i <= 10; i++) {
  console.log("Number " + i);

  for (let j = 1; j <= 10; j++) {
    console.log(`${i} * ${j} = ${i * j}`);
  }
}

// Loop through an array
const name = ["Juan", "Pedro", "Sarah", "Lea"];

for (let i = 0; i < name.length; i++) {
  if (name[i] === "Sarah") {
    console.log(name[i] + " is the best");
  } else {
    console.log(name[i]);
  }
}
