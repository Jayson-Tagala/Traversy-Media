/* Execution Context
 When you run any JavaScript, a special environment is created to handle the transformation & execution of code.
 This is called the execution context. It contains the currently running code and everything that aids in its execution

 There is a global execution context as well as a function execution context for every function invoked

 */

/*
 Execution Context Phases

 Memory Creation Phase:
 1. Create the global object (browser = window, Node.js = global)
 2. Create the 'this' object and bind it to the global object
 3. Setup memory heap for storing variables and function references
 4. Store functions and variables in global execution context and set to 'undefined'

 Execution Phase:
 1. Execute code line by line
 2. Create a new execution context for each function call
 */

let x = 100;
let y = 50;

function getSum(n1, n2) {
  let sum = n1 + n2;
  return sum;
}
let sum1 = getSum(x, y);
let sum2 = getSum(10, 5);

console.log(sum1, sum2);

// Creation Phase:
/*
Line 1: x variable is allocated memory and stores 'undefined'
Line 2: x variable is allocated memory and stores 'undefined'
Line 3: getSum() function is allocated memory and stores all the code
Line 7: sum1 variable is allocated memory and stores 'undefined'
Line 8: sum1 variable is allocated memory and stores 'undefined'
*/

// Execution Phase:
/* 
Line 1: Places the value of 100 into the x variable
Line 2: Places the value of 50 into the y variable
Line 3: Skips the function because there is nothing to execute
*/

// Function EC Creation Phase:
/*
Line 3: n1 & n2 variables are allocated memory and stores 'undefined'
Line 4: sum variable is allocated memory and stores 'undefine'
*/

// Function EC Execution Phase
/*
Line 3: n1 & n2 are assigned 100 and 50
Line 4: Calcuation is done and 150 is put into the sum variable
Line 5: return tells the function Ec to return to the global EC with value of sum(150)
Line 7: Return sum value is put into the sum1 variable
Line 8: Open another function execution context and do the same thing with different parameters.
*/
