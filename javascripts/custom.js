$('.nav-item a[href^="#"]').on('click', function(e) {
    e.preventDefault();
    var id = $(this).attr('href'),
        targetOffset = $(id).offset().top;

    $('html, body').animate({
        scrollTop: targetOffset - 100
    }, 500);
});

$(".nav-link").on("click", function (e) {
    e.preventDefault();
    $('.navbar-collapse').collapse('hide');
});