(function ($) {
    "use strict";

    jQuery(document).ready(function ($) {


        $(".testimonial-carousel").owlCarousel({
            items: 1,
            loop: true,
            autoplay: true,
            nav: false,
            dots: true,
        });

        $(".video-play-btn").magnificPopup({
            type: 'video',
        });
        
        new WOW().init();

        $("ul#navigation").slicknav({
            prependTo: ".responsive-menu",
        });
    });


    jQuery(window).load(function () {
        

    });


}(jQuery));
