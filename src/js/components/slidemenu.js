"use strict";
// Create an immediately invoked functional expression to wrap our code
(function () {
  // Constructor Method
  window.Slidemenu = function () {
    // Define Constructor
    let defaults = {
      element: ".slidemenu",
      toggleClass: ".js-hamburger",
    };

    // Override defaults
    if (arguments[0] && typeof arguments[0] === "object") {
      this.options = extendDefaults(defaults, arguments[0]);
    } else {
      this.options = defaults;
    }

    let slidemenuClass = this.options.element;
    let toggleClass = this.options.toggleClass;
    let overlayClass = ".slidemenu\\/overlay";

    let allSlidemenu = document.querySelectorAll(slidemenuClass);
    let activeClass = "is-active";

    /* Initialize each component */
    for (let i = 0; i < allSlidemenu.length; i++) {
      let slidemenu = allSlidemenu[i];
      let allToggle = document.querySelectorAll(toggleClass);
      let allOverlay = slidemenu.querySelectorAll(overlayClass);

      for (let i = 0; i < allToggle.length; i++) {
        let toggle = allToggle[i];

        /* add click event */
        toggle.addEventListener("click", function (e) {
          e.preventDefault();
          activate(slidemenu);
        });
      }

      for (let i = 0; i < allOverlay.length; i++) {
        let overlay = allOverlay[i];

        /* add click event */
        overlay.addEventListener("click", function (e) {
          e.preventDefault();
          activate(slidemenu);
        });
      }
    }

    /* Activates the chosen accordion and deactivates the rest */
    function activate(slidemenu) {
      const newState = slidemenu.classList.toggle(activeClass);
      for (const button of document.querySelectorAll(toggleClass)) {
        button.setAttribute("aria-expanded", newState ? "true" : "false");
      }
      if (newState) {
        setTimeout(() => {
          // Focus the toggle inside the menu
          slidemenu.querySelector(toggleClass).focus();
        }, 50);
      } else {
        // Focus the first toggle on the page (the one in the header)
        document.querySelector(toggleClass).focus();
      }
    }
  };

  // Public Methods

  // Private Methods
  function extendDefaults(source, properties) {
    let property;
    for (property in properties) {
      if (properties.hasOwnProperty(property)) {
        source[property] = properties[property];
      }
    }
    return source;
  }
})();
