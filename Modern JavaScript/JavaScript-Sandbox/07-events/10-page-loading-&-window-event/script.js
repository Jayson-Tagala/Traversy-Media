// window.onload = function () {
//   document.querySelector("h1").textContent = "Hello World";
// };
//

/* The code `window.addEventListener("load", () => console.log("Page Loaded"));` is adding an event
listener to the window object for the "load" event. The "load" event is fired when the whole page
has finished loading, including all resources such as images and stylesheets. */
window.addEventListener("load", () => console.log("Page Loaded"));

/* The code `window.addEventListener("DOMContentLoaded", () => console.log("DOM Loaded"));` is adding
an event listener to the window object for the "DOMContentLoaded" event. This event is fired when
the initial HTML document has been completely loaded and parsed, without waiting for stylesheets,
images, and subframes to finish loading. When the "DOMContentLoaded" event is triggered, the
callback function inside the arrow function will be executed, which in this case is logging the
message "DOM Loaded" to the console. */
window.addEventListener("DOMContentLoaded", () => console.log("DOM Loaded"));

console.log("Run me!");

/* The code `window.addEventListener("resize", () => {` is adding an event listener to the window
object for the "resize" event. When the window is resized, the callback function inside the arrow
function will be executed. In this case, the callback function is updating the text content of the
`<h1>` element with the current width and height of the window. */
window.addEventListener("resize", () => {
  document.querySelector(
    "h1"
  ).innerText = `Resized to ${window.innerWidth} x ${innerHeight}`;
});

window.addEventListener("scroll", () => {
  console.log(`Scrolled: ${window.scrollX} x ${window.scrollY}`);
});
