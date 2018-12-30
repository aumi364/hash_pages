$(document).ready(function () {

  $("#loginButton").click(function(){
      $(".login-section-slider").css({
        "display":"block",
        "visibility":"visible",
        "height":"100vh",
        "width":"100%"
      });
      setTimeout(function(){
        $("#sign-up-slider").addClass("sign-up-slider-add-visible");},500);
  });
  $("#sign-in-span").click(function(){
    $(".login-section-slider").css({
      "display":"none",
      "visibility":"hidden",
      "width":"0",
      "bottom":"0",
      "right":"0"
    });
    $("#sign-up-slider").removeClass("sign-up-slider-add-visible");
});
});

