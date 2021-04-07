var robotics = document.getElementById("robotics");
var game = document.getElementById("game");
var about = document.getElementById("about");
var socials = document.getElementById("socials");
var cube = document.getElementById("cube");

function link(link_name) {
  window.location.href = link_name;
  console.log("Switched")
}
function focusGame() {
  cube.style.transform = "rotateY(90deg) rotateX(0deg)";
  setTimeout(function() {setOpacity(game)}, 600);
}
function focusRobotics() {
  cube.style.transform = "rotateY(0deg) rotateX(0deg)";
  setTimeout(function() {setOpacity(robotics)}, 600);
}
function focusAbout() {
  setOpacity(about);
}
function focusMain() {
  robotics.style.display = "none";
  game.style.display = "none";
  about.style.display = "none";
  cube.style.display = "flex";
  socials.style.display = "block";
  setTimeout(function() {cube.style.transform = "rotateX(-30deg) rotateY(45deg)";}, 1);
}

function setOpacity(page) {
  cube.style.display = "none";
  socials.style.display = "none";
  page.style.display = "flex";
}

var panels = document.getElementsByClassName("text_container");

function resize() {
  if (window.innerWidth > 1100) {
    for (n = 0; n < panels.length; n++) {
        panels[n].style.width = 30 + "%";
    }
  } else if (window.innerWidth > 500) {
    for (n = 0; n < panels.length; n++) {
        panels[n].style.width = 60 + "%";
    }
  } else {
    for (n = 0; n < panels.length; n++) {
      panels[n].style.width = 80 + "%";
    }
  }
}
resize();
window.onresize = function() {resize();}