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

  function createColorBoxes(colors, parent) {
    // The createColorBoxes function starts by clearing the content of the parent element (passed as an argument)
    //  using parent.innerHTML = "". This clears up previous color schemes
    parent.innerHTML = "";
  
  //   For each color, a new div element is created using document.createElement("div").
  
  // The div element is assigned the class "color" using div.classList.add("color").
  
  // The background color of the div is set to the current color using div.style.backgroundColor = color.
  
  // The width of the div is calculated based on the number of colors.
  //  It is set to a percentage value using template literals and the calc() CSS function
  //  : div.style.width = calc(100%/ ${colors.length})``. so if there are 5 colors ,each take 25% of the space
    for (const color of colors) {
      const div = document.createElement("div");
      div.classList.add("color");
      div.style.backgroundColor = color;
      div.style.width = `calc(100%/ ${colors.length})`;
  
  
      // Inside the click event callback function,
      // the navigator.clipboard.writeText(color) method is called to copy the color value to the clipboard.
      div.addEventListener("click", function () {
        navigator.clipboard.writeText(color);
      });
  
      const span = document.createElement("span");
      span.innerText = color;
      div.appendChild(span);
      parent.appendChild(div);
    }
  }