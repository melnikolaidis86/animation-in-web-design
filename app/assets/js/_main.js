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