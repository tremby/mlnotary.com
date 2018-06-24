;(function() {
  // Start DOM ready page initialization code

  // Intialize Tab
  var tab = new Tab();
  // Initialize Accordion
  var accordion = new Accordion();
  // Initialize Dropdown
  var dropdown = new Dropdown();
  // Initialize Notice
  var notice = new Notice();
  // Initialize Slidemenu
  var slidemenu = new Slidemenu();


  // Headroom
  var headroom = new Headroom(document.querySelector(".js-header"), {
    offset: 20,
    classes : {
      // when element is initialised
      initial : "is-active",
      // when scrolling up
      pinned : "is-pinned",
      // when scrolling down
      unpinned : "is-unpinned",
      // when above offset
      top : "is-top",
      // when below offset
      notTop : "is-not-top",
      // when at bottom of scoll area
      bottom : "is-bottom",
      // when not at bottom of scroll area
      notBottom : "is-not-bottom"
    }
  });
  headroom.init();

})();

$( document ).ready(function() {




});
