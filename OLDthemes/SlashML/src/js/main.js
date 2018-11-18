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


  // ScrollReveal
  window.sr = ScrollReveal();
  sr.reveal('.js-reveal-right', {
    origin: 'right',
    distance: '100px',
    scale: 1,
    duration: 1000,
    delay: 100
  });

  sr.reveal('.js-reveal-left', {
    origin: 'left',
    distance: '100px',
    scale: 1,
    duration: 1000,
    delay: 100
  });

  sr.reveal('.js-reveal', {
    origin: 'bottom',
    distance: '100px',
    scale: 1,
    duration: 1000,
    delay: 100
  });

  sr.reveal('.js-reveal-set-1', {
    origin: 'bottom',
    distance: '100px',
    scale: 1,
    duration: 500,
    delay: 50,
    reset: true
  }, 50);


  // Prism
  Prism.plugins.NormalizeWhitespace.setDefaults({
    'remove-trailing': true,
    'remove-indent': true,
    'left-trim': true,
    'right-trim': true
  });


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
  $('.hero\\/art').imagesLoaded( function() {
    $('.hero\\/art').addClass('is-loaded');
  });

  $(".js-modal").iziModal();
  $(document).on('click', '.trigger', function (event) {
    event.preventDefault();
    // $('#modal').iziModal('setZindex', 99999);
    // $('#modal').iziModal('open', { zindex: 99999 });
    $('.js-modal').iziModal('open');
});

  $('.js-slick').slick({
    slidesToShow: 5,
    slidesToScroll: 1,
    arrows: false,
    dots: false,
    autoplay: false,
    autoplaySpeed: 3000,
    draggable: false,
    pauseOnFocus: false,
    pauseOnHover: false,
    centerMode: true,
    focusOnSelect: true,
    centerPadding: '100px',
    responsive: [
      {
        breakpoint: 1600,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          centerPadding: '80px'
        }
      },
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          centerPadding: '60px'
        }
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          centerPadding: '40px'
        }
      },
      {
        breakpoint: 960,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerPadding: '40px'
        }
      }
    ]
  });

  // Stickr
  $('.js-stickr').stickr({
    duration: 0,
    offsetTop: 60,
    offsetBottom: 30
  });


  // Pricing - Basic
  $(document).on("change", ".js-basic-qty", function() {
    var sheetPrice = 7,
        tradePrice = 20,
        fullPrice = 30;
    var sum = 0;
    $('.js-basic-qty').each(function(){
      if ( $(this).hasClass('js-basic-sheet') ) {
        var sheetSum = $(this).val() * sheetPrice;
        sum += sheetSum;
      }
      if ( $(this).hasClass('js-basic-trade') ) {
        var tradeSum = $(this).val() * tradePrice;
        sum += tradeSum;
      }
      if ( $(this).hasClass('js-basic-full') ) {
        var fullSum = $(this).val() * fullPrice;
        sum += fullSum;
      }
    });
    function numberWithCommas(number) {
      var parts = number.toString().split(".");
      parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
      return parts.join(".");
    }
    var commaNum = numberWithCommas(sum);
    $('.js-basic-total').html('$'+commaNum);
  });

  $( '.js-view-basic-comparison' ).click(function() {
    $( '.js-basic-comparison' ).slideToggle();
  });

  $( '.js-basic-option' ).click(function() {
    $( '.js-basic-option' ).addClass('fade\:6');
    $(this).removeClass('fade\:6');
  });

  $( '.js-basic-option-time' ).click(function() {
    $( '.js-basic-feature-list' ).find('.js-feature-full').removeClass('is-active');
    $( '.js-basic-feature-list' ).find('.js-feature-basic').addClass('is-active');
  });

  $( '.js-basic-option-trade' ).click(function() {
    $( '.js-basic-feature-list' ).find('.js-feature-full').removeClass('is-active');
    $( '.js-basic-feature-list' ).find('.js-feature-trade').addClass('is-active');
  });

  $( '.js-basic-option-full' ).click(function() {
    $( '.js-basic-feature-list' ).find('.js-feature-full').removeClass('is-active');
    $( '.js-basic-feature-list' ).find('.js-feature-full').addClass('is-active');
  });

  // Pricing - Essential
  $(document).on("change", ".js-essential-qty", function() {
    var sheetPrice = 10,
        tradePrice = 30,
        fullPrice = 40;
    var sum = 0;
    $('.js-essential-qty').each(function(){
      if ( $(this).hasClass('js-essential-sheet') ) {
        var sheetSum = $(this).val() * sheetPrice;
        sum += sheetSum;
      }
      if ( $(this).hasClass('js-essential-trade') ) {
        var tradeSum = $(this).val() * tradePrice;
        sum += tradeSum;
      }
      if ( $(this).hasClass('js-essential-full') ) {
        var fullSum = $(this).val() * fullPrice;
        sum += fullSum;
      }
    });
    function numberWithCommas(number) {
      var parts = number.toString().split(".");
      parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
      return parts.join(".");
    }
    var commaNum = numberWithCommas(sum);
    $('.js-essential-total').html('$'+commaNum);
  });

  $( '.js-view-essential-comparison' ).click(function() {
    $( '.js-essential-comparison' ).slideToggle();
  });

  $( '.js-essential-option' ).click(function() {
    $( '.js-essential-option' ).addClass('fade\:6');
    $(this).removeClass('fade\:6');
  });

  $( '.js-essential-option-time' ).click(function() {
    $( '.js-essential-feature-list' ).find('.js-feature-full').removeClass('is-active');
    $( '.js-essential-feature-list' ).find('.js-feature-basic').addClass('is-active');
  });

  $( '.js-essential-option-trade' ).click(function() {
    $( '.js-essential-feature-list' ).find('.js-feature-full').removeClass('is-active');
    $( '.js-essential-feature-list' ).find('.js-feature-trade').addClass('is-active');
  });

  $( '.js-essential-option-full' ).click(function() {
    $( '.js-essential-feature-list' ).find('.js-feature-full').removeClass('is-active');
    $( '.js-essential-feature-list' ).find('.js-feature-full').addClass('is-active');
  });


  // Pricing - Pro
  $(document).on("change", ".js-pro-qty", function() {
    var sheetPrice = 15,
        tradePrice = 50,
        fullPrice = 60;
    var sum = 0;
    $('.js-pro-qty').each(function(){
      if ( $(this).hasClass('js-pro-sheet') ) {
        var sheetSum = $(this).val() * sheetPrice;
        sum += sheetSum;
      }
      if ( $(this).hasClass('js-pro-trade') ) {
        var tradeSum = $(this).val() * tradePrice;
        sum += tradeSum;
      }
      if ( $(this).hasClass('js-pro-full') ) {
        var fullSum = $(this).val() * fullPrice;
        sum += fullSum;
      }
    });
    function numberWithCommas(number) {
      var parts = number.toString().split(".");
      parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
      return parts.join(".");
    }
    var commaNum = numberWithCommas(sum);
    $('.js-pro-total').html('$'+commaNum);
  });

  $( '.js-view-pro-comparison' ).click(function() {
    $( '.js-pro-comparison' ).slideToggle();
  });

  $( '.js-pro-option' ).click(function() {
    $( '.js-pro-option' ).addClass('fade\:6');
    $(this).removeClass('fade\:6');
  });

  $( '.js-pro-option-time' ).click(function() {
    $( '.js-pro-feature-list' ).find('.js-feature-full').removeClass('is-active');
    $( '.js-pro-feature-list' ).find('.js-feature-basic').addClass('is-active');
  });

  $( '.js-pro-option-trade' ).click(function() {
    $( '.js-pro-feature-list' ).find('.js-feature-full').removeClass('is-active');
    $( '.js-pro-feature-list' ).find('.js-feature-trade').addClass('is-active');
  });

  $( '.js-pro-option-full' ).click(function() {
    $( '.js-pro-feature-list' ).find('.js-feature-full').removeClass('is-active');
    $( '.js-pro-feature-list' ).find('.js-feature-full').addClass('is-active');
  });



});
