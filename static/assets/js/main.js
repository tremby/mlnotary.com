"use strict";

const toggleClass = ".js-hamburger";
const menuToggles = document.querySelectorAll(toggleClass);
const menu = document.querySelector(".slidemenu");
const overlay = document.querySelector(".slidemenu\\/overlay");

for (const button of menuToggles) {
  button.addEventListener("click", (e) => {
    e.preventDefault();
    toggleMenu();
  });
}

overlay.addEventListener("click", (e) => {
  e.preventDefault();
  toggleMenu();
});

function toggleMenu() {
  const newState = menu.classList.toggle("is-active");
  for (const button of menuToggles)
    button.setAttribute("aria-expanded", newState ? "true" : "false");
  if (newState) {
    setTimeout(() => {
      // Focus the toggle inside the menu
      menu.querySelector(toggleClass).focus();
    }, 50);
  } else {
    // Focus the first toggle on the page (the one in the header)
    document.querySelector(toggleClass).focus();
  }
}
