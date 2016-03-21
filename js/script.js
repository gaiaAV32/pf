var amountScrolled = 200;

$(window).scroll(function() {
    if ( $(window).scrollTop() > amountScrolled ) {
        $('a.back-to-top-button').fadeIn('fast');
    } else {
        $('a.back-to-top-button').fadeOut('fast');
    }
});

$(function() {  
    var window_height = $(window).height(),
       content_height = window_height - 200;

    $('.scrollable-wrapper-div').height(content_height);
});

$( window ).resize(function() {
    var window_height = $(window).height(),
       content_height = window_height - 200;
    $('.scrollable-wrapper-div').height(content_height);
});
