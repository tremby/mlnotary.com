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

$( document ).ready(function() {
  console.log("document is ready");
  $(".slider").slick({
    autoplay: true,
    fade: true,
    draggable: true,
    arrows: false
  });
});
