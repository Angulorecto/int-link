function blueDone() {
  document.getElementById("box1").style.bottom = "50%";
  document.getElementById("box2").style.top = "50%";
  document.getElementById("blueBadge").style.opacity = "100%";
}
function blue() {
  document.getElementById("box1").style.animation = "down 3s";
  document.getElementById("box2").style.animation = "up 3s";
  document.getElementById("blueBadge").style.animation = "fade 3s";
  // Note: this line's timing has to be 0.15 less then the 3 above.
  setTimeout(blueDone, 2850)
}