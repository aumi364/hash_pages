function _(el) {
    return document.getElementById(el);
}

function changeImage(event, element) {
    var lists = document.getElementsByClassName('thumb-image-li');
    for (var i = 0; i < lists.length; i++) {
        lists[i].classList.remove('active');
    }
    var list_element = element.parentElement;
    list_element.classList.add('active');
    var thumbnail_image = _("thumb-main-image");

    thumbnail_image.setAttribute('src', element.href);
    event.preventDefault();
}

$(document).ready(function () {

    $(".final-product-super-reviewers").owlCarousel({
        nav: true,
        autoplayHoverPause: true,
        navText: ['<i class="icofont-square-left"></i>', '<i class="icofont-square-right"></i>'],
        loop: false,
        rewind: true,
        margin: 25,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1,
            },
            992: {
                items: 2,
            },
            1200: {
                items: 3,
            }
        }
    });
});