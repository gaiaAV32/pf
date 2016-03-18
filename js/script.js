var amountScrolled = 100;

$(window).scroll(function() {
    if ( $(window).scrollTop() > amountScrolled ) {
        $('a.back-to-top-button').fadeIn('fast');
    } else {
        $('a.back-to-top-button').fadeOut('fast');
    }
});