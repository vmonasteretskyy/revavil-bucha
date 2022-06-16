$(document).ready(function () {

    $('.burger').click(function () {
        $('body').addClass('noscroll');
        $('.mobilesection').addClass('open');
        $('header.header').addClass('overlay');
    });

    $('.closemenu').click(function () {
        $('.mobilesection').removeClass('open');
        $('body').removeClass('noscroll');
        $('header.header').removeClass('overlay');

    });

    $(document).click(function (e) {
        let $target = $(e.target)
        if (!$target.closest('.mobilesection').length && !$target.closest('.burger').length) {
            $('.mobilesection').removeClass('open');
            $('body').removeClass('noscroll');
            $('header.header').removeClass('overlay');
        }
    });

    if ($(window).width() < 1200) {
        $('.header__lang span').click(function () {
            $('.header__lang ul').slideToggle();
        });
    }

    var swiper = new Swiper(".partnersslider", {
        breakpoints: {
            320: {
                slidesPerView: 2,
                spaceBetween: 20,
                enabled: false
            },
            575: {
                slidesPerView: 2.5,
                spaceBetween: 10,
                enabled: true
            },
            991: {
                slidesPerView: 4,
                spaceBetween: 0
            }
        }
    });


    var swiper2 = new Swiper(".instslider", {
        breakpoints: {
            320: {
                slidesPerView: 2,
                spaceBetween: 20,
                enabled: false
            },

            575: {
                slidesPerView: 2.5,
                spaceBetween: 15,
                enabled: true
            },
            991: {
                slidesPerView: 4,
                spaceBetween: 34,
            }
        }
    });

    var swiper3 = new Swiper(".welcomeslider", {
        autoplay: {
            delay: 4000,
        },
        breakpoints: {
            320: {
                slidesPerView: 1,
                spaceBetween: 0,
                pagination: {
                    el: ".swiper-pagination",
                    clickable: true,
                },

            },
            768: {
                slidesPerView: 3,
                spaceBetween: 30
            },

        }
    });

});