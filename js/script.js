

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

window.sr = ScrollReveal();
console.log("fade in scrolling");
// fade titles homepage
sr.reveal('.introduction.one', { duration: 1000, delay: 100, scale: 1, easing: 'cubic-bezier(0.6, 0.2, 0.1, 1)'});
sr.reveal('.introduction.About', { duration: 1000, delay: 100, scale: 1, easing: 'cubic-bezier(0.6, 0.2, 0.1, 1)'});
sr.reveal('.introduction.two', { duration: 1000, delay: 100, scale: 1, easing: 'cubic-bezier(0.6, 0.2, 0.1, 1)' });
sr.reveal('.introduction.three', { duration: 1000, delay: 100, scale: 1, easing: 'cubic-bezier(0.6, 0.2, 0.1, 1)' });

// fade in project previews
sr.reveal('.project.one', { duration: 1000, delay: 1000, scale: 1, easing: 'cubic-bezier(0.6, 0.2, 0.1, 1)'});
sr.reveal('.project.two', { duration: 1000, delay: 100, scale: 1, easing: 'cubic-bezier(0.6, 0.2, 0.1, 1)' });
sr.reveal('.project.three', { duration: 1000, delay: 100, scale: 1, easing: 'cubic-bezier(0.6, 0.2, 0.1, 1)' });
sr.reveal('.project.four', { duration: 1000, delay: 100, scale: 1, easing: 'cubic-bezier(0.6, 0.2, 0.1, 1)' });

// fade in single project
sr.reveal('.descriptionProject', { duration: 1000, delay: 100, scale: 1, easing: 'cubic-bezier(0.6, 0.2, 0.1, 1)' });
sr.reveal('.scroll.project.col-md-3', { duration: 1000, delay: 100, scale: 1, easing: 'cubic-bezier(0.6, 0.2, 0.1, 1)' });
sr.reveal('.controller', { duration: 1000, delay: 100, scale: 1, easing: 'cubic-bezier(0.6, 0.2, 0.1, 1)' });
sr.reveal('.mobileVersion a.btn.backhome', { duration: 1000, delay: 100, scale: 1, easing: 'cubic-bezier(0.6, 0.2, 0.1, 1)' });
sr.reveal('#screens', { duration: 1000, delay: 700, scale: 1, easing: 'cubic-bezier(0.6, 0.2, 0.1, 1)' });

// fade in about page
sr.reveal('#contact', { duration: 1000, delay: 800, scale: 1, easing: 'cubic-bezier(0.6, 0.2, 0.1, 1)' });




