function blueDone() {
  document.getElementById("box1").style.bottom = "50%";
  document.getElementById("box2").style.top = "50%";
  document.getElementById("blueBadge").style.opacity = "100%";
}
function blue() {
  document.getElementById("box1").style.animation = "down 3.9s";
  document.getElementById("box2").style.animation = "up 3.9s";
  document.getElementById("blueBadge").style.animation = "fade 3.9s";
  setTimeout(blueDone, 3750)
}
