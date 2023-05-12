// To activate python env  .\env\Scripts\activate


const form = document.querySelector("#form");

// The callback function for the form submission event starts by preventing the default form submission behavior 
// using e.preventDefault(). This prevents the page from being refreshed.
form.addEventListener("submit", function (e) {
  e.preventDefault();
  getColors();
});