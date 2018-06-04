//Image gallery
$(".institute--image-gallery > img:gt(0)").hide();

setInterval(function() { 
    $('.institute--image-gallery > img:first')
      .fadeOut(1000)
      .next()
      .fadeIn(1000)
      .end()
      .appendTo('.institute--image-gallery');
  },  4000);

  //Accordion
  var allPanels = $('.FAQs--acordion--item > p').slideUp();

  $('.FAQs--acordion--item__title').click(function(event) {

    $('.FAQs--acordion--item > p').slideUp();
    event.preventDefault();
    $('.FAQs--acordion--item__active:first').removeClass('FAQs--acordion--item__active').addClass('FAQs--acordion--item');
    $(this).next().slideDown();
  });

  //Toggle Responsive Menu
  if($(window).width() < 800) {
    $('.main-navigation--nav').slideUp();
  }

  $('.button-collapse').click(function(event) {

    event.preventDefault();

    $('.main-navigation--nav').slideToggle( "slow" );

  });

  
  /* Smooth Scrolling */
  // Select all links with hashes
$('a[href*="#"]')
// Remove links that don't actually link to anything
.not('[href="#"]')
.not('[href="#0"]')
.click(function(event) {
  // On-page links
  if (
    location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
    && 
    location.hostname == this.hostname
  ) {
    // Figure out element to scroll to
    var target = $(this.hash);
    target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
    // Does a scroll target exist?
    if (target.length) {
      // Only prevent default if animation is actually gonna happen
      event.preventDefault();
      $('html, body').animate({
        scrollTop: target.offset().top
      }, 1000, function() {
        // Callback after animation
        // Must change focus!
        var $target = $(target);
        $target.focus();
        if ($target.is(":focus")) { // Checking if the target was focused
          return false;
        } else {
          // $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
          $target.focus(); // Set focus again
        };
      });
    }
  }
});

  //Google Map
  function initMap() {
    var uluru = {lat: 37.953609, lng: 23.678907};
    var map = new google.maps.Map(document.getElementById('map'), {
      zoom: 15,
      center: uluru
    });
    var marker = new google.maps.Marker({
      position: uluru,
      map: map
    });
  }