const age = 18;

// Using an if statement
if (age >= 18) {
  console.log("You can vote!");
} else {
  console.log("You can not vote");
}

// Using a ternary operator

age >= 18 ? console.log("You can vote") : console.log("You can't vote");

// Assigning a conditional value to a variable
const canVote = age >= 18 ? true : false;
const canVote2 = age >= 18 ? "You can Vote!" : "You can not Vote!";

console.log(canVote);
console.log(canVote2);

// Multiple statements

/*
const auth = true;
let redirect;

if (auth) {
alert("Welcome to the dashboard");
redirect = "/dashboard";
} else {
alert("Access Denied");
redirect = "/login";
}

const redirect = auth
  ? (alert("Welcome to the dashboard"), "/dashboard")
  : (alert("Access Denied"), "/login");
console.log(redirect);
*/
