// For Each Loop
const socials = ["Facebook", "Twitter", "Instagram", "YouTube", "Snapchat"];

// socials.forEach(function (item) {
// console.log(item);
// });
//

// socials.forEach((item, index, arr) => console.log(`${index} - ${item}`, arr));

function logSocials(social) {
  console.log(social);
}

// socials.forEach(logSocials);

const socialObjs = [
  { name: "Facebook", url: "http://facebook.com" },
  { name: "Twitter", url: "http://twitter.com" },
  { name: "Instagram", url: "http://instagram.com" },
  { name: "YouTube", url: "http://youtube.com" },
  { name: "Snapchat", url: "http://spanchat.com" },
];

socialObjs.forEach((item) => console.log(item.url));
