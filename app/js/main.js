$(document).ready(function() {
    $('.block-5__slider-wrap').slick({
        arrows: false,
        dots: false,
        arrows: true, // включение стрелок (если не нужны false)
        asNavFor: '.block-5__imagesnew_dotted', // указываем что навигация для слайдера будет отдельно (указываем класс куда вешаем навигацию),
        responsive: [{
            breakpoint: 992,
            settings: {
                dots: true,
            }
        }, ]
    });

    $('.block-5__imagesnew_dotted').slick({ // настройка навигации
        slidesToShow: 3, // указываем что нужно показывать 3 навигационных изображения
        asNavFor: '.block-5__slider-wrap', // указываем что это навигация для блока выше
        focusOnSelect: true // указываем что бы слайделось по клику
    });


    $('.block-6__slider-items').slick({
        centerMode: true,
        centerPadding: '60px',
        slidesToShow: 4,
        // arrows: false,
        // dots: false,
        // arrows: true, // включение стрелок (если не нужны false)
        // asNavFor: '.block-5__imagesnew_dotted', // указываем что навигация для слайдера будет отдельно (указываем класс куда вешаем навигацию),
        // responsive: [{
        //     breakpoint: 992,
        //     settings: {
        //         dots: true,
        //     }
        // }, ]
    });
    $('.block-8__slider-items').slick({
        //dots: true,
        infinite: true,
        centerMode: true,
        centerPadding: '12%',
        slidesToShow: 1,
        speed: 500,
        responsive: [{

            breakpoint: 992,
            settings: {
                slidesToShow: 1
            }

        }]
    });



    $("#block-9__accordion").accordionjs({
        closeAble: true,
        closeOther: true,
        slideSpeed: 150,
        activeIndex: false,
    });

});