var responsiveNav = {
    init: function() {
        if ($(window).width() < 768) {
            $('body').addClass('mobileView');
            $('#ml-header-links-orig').contents().appendTo('#ml-header-links-relo');
            var countWrap = $(".ml-header-global-cart-count");
            var countCont = $(".ml-header-global-cart-count-cont");
            countCont.width(Math.sqrt(countCont.width() * countCont.height()));
            countCont.width(Math.sqrt(countCont.width() * countCont.height()));
            countWrap.width(Math.sqrt(2) * countCont.width());
            countWrap.height(countWrap.width());
        } else {
            $('body').removeClass('mobileView');
            $('#ml-header-links-relo').contents().appendTo('#ml-header-links-orig');
        };


        $(window).on('resize', function() {
            if ($(window).width() < 768) {
                $('#ml-header-links-orig').contents().appendTo('#ml-header-links-relo');
                $('body').addClass('mobileView');
                var countWrap = $(".ml-header-global-cart-count");
                var countCont = $(".ml-header-global-cart-count-cont");
                countCont.width(Math.sqrt(countCont.width() * countCont.height()));
                countCont.width(Math.sqrt(countCont.width() * countCont.height()));
                countWrap.width(Math.sqrt(2) * countCont.width());
                countWrap.height(countWrap.width());
            } else {
                $('#ml-header-links-relo').contents().appendTo('#ml-header-links-orig');
                $('body').removeClass('mobileView');
            }
        });

        var navbarCollapse = $('#ml-navbar-collapse');
        $('[data-target=#ml-navbar-collapse]').click(function() {
            navbarCollapse.slideToggle('fast');
        });
    }
}

$(document).ready(function() {
    responsiveNav.init();
});