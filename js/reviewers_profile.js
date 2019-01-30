$(document).ready(function() {
  $(".modal-product-slider").owlCarousel({
    nav: true,
    autoplayHoverPause: true,
    navText: [
      '<i class="icofont-long-arrow-left"></i>',
      '<i class="icofont-long-arrow-right"></i>'
    ],
    loop: true,
    margin: 0,
    responsiveClass: true,
    responsive: {
      0: {
        items: 1
      },
      768: {
        items: 2
      },
      992: {
        items: 3
      },
      1200: {
        items: 4
      }
    }
  });
});
