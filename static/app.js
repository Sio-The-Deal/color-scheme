// To activate python env  .\env\Scripts\activate


const form = document.querySelector("#form");

// The callback function for the form submission event starts by preventing the default form submission behavior 
// using e.preventDefault(). This prevents the page from being refreshed.
form.addEventListener("submit", function (e) {
  e.preventDefault();
  getColors();
});

function getColors() {
    const query = form.elements.query.value;
    // fetching color scheme data from the server.
  
    fetch("/colorscheme", {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: new URLSearchParams({
        query: query,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        const colors = data.colors;
        const container = document.querySelector(".container");
        createColorBoxes(colors, container);
        // The createColorBoxes function is called with the colors array and the container element as arguments.
      });
  }