// Calculator Challenge

/*
Create a function called calculator that takes three parameters: num1, num2, and operator.
The operator can be +, -, *, or /. The function should return the result of the calculation.
If anything other than the four operators is passed in, the function should return an error message.
*/

// Example:

/*
calculator(5, 2, '+') // returns 7
calculator(5, 2, '-') // returns 3
calculator(5, 2, '*') // returns 10
calculator(5, 2, '/') // returns 2.5
calculator(5, 2, '&') // returns an error message
*/

// Hint:
/*
You can use an if statement for the operator, but this is also a a good
example for using a switch
*/

// Using Switch Case

function calculator(num1, num2, operator) {
  let result;

  switch (operator) {
    case "+":
      result = num1 + num2;
      break;
    case "-":
      result = num1 - num2;
      break;
    case "*":
      result = num1 * num2;
      break;
    case "/":
      result = num1 / num2;
      break;
    default:
      result = "Error: Invalid operation. Please use '+', '-', '*', or '/'.";
  }

  console.log(result);
  return result;
}

calculator(5, 2, "+");

/*
// Using if else statement
function calculator(num1, num2, operation) {
  if (operation === "+") {
    return num1 + num2;
  } else if (operation === "-") {
    return num1 - num2;
  } else if (operation === "*") {
    return num1 * num2;
  } else if (operation === "/") {
    if (num2 !== 0) {
      return num1 / num2;
    } else {
      return "Error: Division by zero is not allowed.";
    }
  } else {
    return "Error: Invalid operation. Please use '+', '-', '*', or '/'.";
  }
}

 let result = calculator(5, 3, "*");

 console.log("Result:", result);
*/
