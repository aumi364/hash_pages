$(document).ready(function () {
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

function readURL(input) {
  if (input.files && input.files[0]) {
    var reader = new FileReader();
    reader.onload = function (e) {
      $('#imagePreview').css('background-image', 'url(' + e.target.result + ')');
      $('#imagePreview').hide();
      $('#imagePreview').fadeIn(650);
    }
    reader.readAsDataURL(input.files[0]);
  }
}
$("#imageUpload").change(function () {
  readURL(this);
});
//  for minimizing the inner text of modal
// $(document).ready(function () {
//   // Configure/customize these variables.
//   var showChar = 100; // How many characters are shown by default
//   var ellipsestext = "...";
//   var moretext = "READ MORE";

//   var content;

//   $('.more').each(function () {
//     content = $(this).html();

//     if (content.length > showChar) {

//       var c = content.substr(0, showChar);
//       //console.log('c '+c);
//       var h = content.substr(showChar, content.length - showChar);
//       console.log('h'+h);

//       var html = c + '<span class="moreellipses">' + ellipsestext +
//         '&nbsp;</span><span class="morecontent"><span>' + h +
//         '</span>&nbsp;&nbsp;<a href="" class="morelink" data-toggle="modal" data-target="#myModal">' + moretext + '</a></span>';

//       $(this).html(html);
//     }

//   });

//   $(".morelink").click(function () {
//     if ($(this).hasClass("less")) {
//       $(this).removeClass("less");

//     } else {
//       $("#myModal").modal();
//       $(this).addClass("less");

//     }

//     return false;

//   });
// });