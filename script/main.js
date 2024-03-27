document.addEventListener("DOMContentLoaded", function(){
const colorbox = document.getElementById("colorbox")
const changeColorbtn = document.getElementById("color-change-button")

function randomColor() {
    // Generate a random color
    const randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
  
    // Apply the random color to the background of the color-box
    colorbox.style.backgroundColor = randomColor;
  }
  // Add an event listener to the change-color-btn
  changeColorbtn.addEventListener("click", randomColor);

});
