// *FILTER

/*
const num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const evenNumbers = num.filter(function (number) {
return number % 2 === 0;
});
// 
Shorter way
const evenNumbers = num.filter((number) => number % 2 === 0);
// 
Same with forEach
const evenNumbers = [];
num.forEach((number) => {
  if (number % 2 === 0) evenNumbers.push(number);
});

console.log(evenNumbers);
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

// Get only retail companies
// const retailCompanies = companies.filter(
// (company) => company.category === "Retail"
// );
// console.log(retailCompanies);

// Get companies that started in or after 2000 and ended 2005
// const startedCompanies = companies.filter(
// (company) => company.start >= 2000 && company.end <= 2009
// );
// console.log(startedCompanies);

// Get companies that lasted 10 years or more
const lastedCompany = companies.filter(
  (company) => company.end - company.start >= 5
);
console.log(lastedCompany);
