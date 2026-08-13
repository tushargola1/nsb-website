(function ($) {
    "use strict";
    var windowOn = $(window);

    /* Windows Load */
    $(window).on('load', function () {
        // Preloader Activation
        $("#pre-load").delay(600).fadeOut(500);
        $(".pre-loader").delay(600).fadeOut(500);

        // Wow Animation Init
        wowAnimation();
    });

      /* Button scroll up js */
        $(window).on("scroll", function () {
            var scrollTop = $(window).scrollTop();
            var documentHeight = $(document).height();
            var windowHeight = $(window).height();
            $(".progress-circle").css("stroke-dashoffset", 113.1 - 113.1 * (scrollTop / (documentHeight - windowHeight)));
            if (scrollTop > 150) {
                $("#backtotop-wrap").addClass("active-progress").fadeIn();
            } else {
                $("#backtotop-wrap").removeClass("active-progress").fadeOut();
            }

            // Sticky Header
            var stickyHeader = $("#rs-sticky-header");
            $(window).on("scroll", function () {
                if ($(this).scrollTop() > 200) {
                    stickyHeader.addClass("active");
                } else {
                    stickyHeader.removeClass("active");
                }
            });
        });

        $("#backtotop-wrap").on("click", function () {
            $("html,body").animate({ scrollTop: 0 }, 500);
        });


   
})(jQuery);

