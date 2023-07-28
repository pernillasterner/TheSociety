const menuBtn = document.querySelector(".menu-btn");
const hamburger = document.querySelector(".menu-btn__burger");

// initially the menu will not be visible
let showMenu = false;

menuBtn.addEventListener("click", toggledMenu);

function toggledMenu() {
  if (!showMenu) {
    hamburger.classList.add("open");
    showMenu = true;
  } else {
    hamburger.classList.remove("open");
    showMenu = false;
  }
}
