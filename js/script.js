

$("#linkedinIcon").click(function(){
    console.log("GO TO URL");
    window.open('https://uk.linkedin.com/pub/gaia-di-gregorio/44/660/bb9', '_blank');
});

$('#emailIcon').on('click', function (event) {
    console.log("write email");
    var email = 'gaia.digregorio@gmail.com';
    var subject = 'Ciao Gaia!';
    window.location = 'mailto:' + email + '?subject=' + subject;
});


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
