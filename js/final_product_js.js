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