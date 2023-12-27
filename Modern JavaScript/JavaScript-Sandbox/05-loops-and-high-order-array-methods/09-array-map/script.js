// *ARRAY-MAP

/*

const number = [1, 2, 3, 4, 5];

const doubleNum = number.map((number) => "Number " + number * 2);

console.log(doubleNum);

// Same with forEach

const doubleNum2 = [];

number.forEach((number) => {
  doubleNum2.push("Number " + number * 2);
});

console.log(doubleNum2);

*/

const companies = [
  { name: "Company One", category: "Finance", start: 2000, end: 2005 },
  { name: "Company Two", category: "Retail", start: 2001, end: 2008 },
  { name: "Company Three", category: "Auto", start: 2002, end: 2011 },
  { name: "Company Four", category: "Retail", start: 2003, end: 2015 },
  { name: "Company Five", category: "Technology", start: 2004, end: 2019 },
  { name: "Company Six", category: "Finance", start: 2005, end: 2010 },
  { name: "Company Seven", category: "Auto", start: 2006, end: 2026 },
  { name: "Company Eight", category: "Technology", start: 2007, end: 2025 },
  { name: "Company Nine", category: "Retail", start: 2008, end: 2038 },
];

// Create an array of company names
// *USING MAP
const companyNames = companies.map((companies) => companies.name);
console.log(companyNames);

// *USING FOR EACH
const companyName = [];

companies.forEach((companies) => {
  companyName.push(companies.name);
});

console.log(companyName);

// Create an array with just company and category
// *USING MAP
const companyInfo = companies.map(
  (companies) => `${companies.name}, ${companies.category}`
);
console.log(companyInfo);

// *OTHER WAY
const companyInfos = companies.map((companies) => {
  return {
    name: companies.name,
    category: companies.category,
  };
});

// Create an array of the length of each company in years
const companyYears = companies.map(
  (companies) =>
    `The length ${companies.name} is: ${companies.end - companies.start}` +
    " years"
);

console.log(companyYears);

// Chain map methods

const number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const squareAndDouble = number
  .map((number) => Math.sqrt(number))
  .map((sqrt) => sqrt * 2);

console.log(squareAndDouble);

// Chaining different methods

const evenDouble = number
  .filter((number) => number % 2 === 0)
  .map((number) => number * 2);

console.log(evenDouble);
