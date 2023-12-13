// JSON (JavaScript Object Notation)
// https://www.json.org/json-en.html

const post = {
  id: 1,
  title: "Post one",
  body: "This is the body",
};

// Convert to JSON String
const str = JSON.stringify(post);

// Parse JSON
const obj = JSON.parse(str);

const posts = [
  {
    id: 1,
    title: "Post one",
    body: "This is the body",
  },
  {
    id: 1,
    title: "Post one",
    body: "This is the body",
  },
];

const str2 = JSON.stringify(posts);

console.log(str2);
