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

function toggleMenu(open) {
  const newState = menu.classList.toggle("is-active", open);
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

// Close menu if we resize to a non-hamburger width
// Note this mq should match that in the CSS
const mq = window.matchMedia("(min-width: 768px)");
mq.addEventListener("change", (e) => {
  if (e.matches) toggleMenu(false);
});

// Popover for tel: links
const popover = document.querySelector("#tel-popover");
let activeLink;
document.addEventListener("click", (event) => {
  if (!popover.showPopover) return;

  const link = event.target.closest('a[href^="tel:"]');
  if (!link) return;
  if (popover.contains(link)) return;
  if (document.querySelector("footer").contains(link)) return;

  activeLink?.style.removeProperty("anchor-name");
  activeLink = link;
  activeLink.style.setProperty("anchor-name", "--tel-link");

  popover.showPopover();
});
