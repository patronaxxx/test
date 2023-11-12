// This function will be called when the page loads
function init() {
  // Get the image element
  const image = document.querySelector("img");

  // Get the text element
  const text = document.querySelector(".text");

  // Set the image width and height to the size of the window
  image.width = window.innerWidth;
  image.height = window.innerHeight;

  // Set the text width to the width of the window
  text.width = window.innerWidth;
}

// Call the init function when the page loads
window.onload = init;
