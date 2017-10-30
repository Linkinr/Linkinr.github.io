$(document).ready(function() {
    $(".owl-carousel").owlCarousel();
    $('.header-btn ul').superfish();
    $("#lightSlider").lightSlider();
    $("#phone").mask("(999) 999-9999");
    $("#form").validate({
        rules: {
            message: {
                required: true
            },
            name: {
                required: true
            },
            phone: {
                required: true
            }
        },
        messages: {
            message: {
                required: "Поле обов'язкове для заповнення",
                minlength: "Мінімальна кількість знаків 2"
            },
            name: {
                required: "Поле обов'язкове для заповнення",
                minlength: "Мінімальна кількість знаків 2"
            },
            phone: {
                required: "Поле обов'язкове для заповнення",
                minlength: "Мінімальна кількість знаків 10"
            }
        }

    });

    var touch = $('#touch-menu');
    var menu = $('.nav');

    $(touch).on('click', function(e) {
        e.preventDefault();
        menu.slideToggle();
    });
    $(window).resize(function() {
        var wid = $(window).width();
        if (wid > 760 && menu.is(':hidden')) {
            menu.removeAttr('style');
        }
    });

    var navPos, winPos, navHeight;

    function refreshVar() {
        navPos = $('.nav-menu').offset().top;
        navHeight = $('.nav-menu').outerHeight(false);
        
    }

    refreshVar();
    $(window).resize(refreshVar);

    $('<div class="clone-nav"></div>').insertBefore('.nav-menu').css('height', navHeight - 101).hide();

    $(window).scroll(function() {
        winPos = $(window).scrollTop();

        if (winPos >= navPos) {
            $('.nav-menu').addClass('fixed shadow');
            $('.clone-nav').show();
        } else {
            $('.nav-menu').removeClass('fixed shadow');
            $('.clone-nav').hide();
        }
    });
});
