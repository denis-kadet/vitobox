$(document).ready(function () {
    $('.block-5__slider-wrap').slick({
        arrows: false,
        dots: false,
        arrows: true, // включение стрелок (если не нужны false)
        asNavFor: '.block-5__imagesnew_dotted', // указываем что навигация для слайдера будет отдельно (указываем класс куда вешаем навигацию),
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    dots: true,
                }
            },
        ]
    });

    $('.block-5__imagesnew_dotted').slick({ // настройка навигации
        slidesToShow: 3, // указываем что нужно показывать 3 навигационных изображения
        asNavFor: '.block-5__slider-wrap', // указываем что это навигация для блока выше
        focusOnSelect: true // указываем что бы слайделось по клику
    });

});