var posPagina;
window.onscroll = function () {
    posPagina = window.pageYOffset;
    if (!($("nav").hasClass("nav-active"))) {

        if (posPagina > 100) {
            $('nav').addClass('bg-black');
            $('nav').removeClass('bg-transparent');
            $('nav').removeClass('py-4');
        } else {
            $('nav').addClass('bg-transparent');
            $('nav').addClass('py-4');
            $('nav').removeClass('bg-black');
        }
    }
    // var opacity = 1 - (posPagina / 150);
    // var posTop = posPagina / 4;
    // $('.banner-text').css('opacity', opacity);
    // $('.banner-text').css('top', -posTop);
}

$('#btn-hamb').click(function () {
    
    $('nav').toggleClass('nav-active');

    if ($("nav").hasClass("nav-active")) {
        $('nav').addClass('bg-black');
        $('nav').removeClass('bg-transparent');
    }
})