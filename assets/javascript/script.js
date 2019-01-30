$(document).ready(function() {
    $('.slider').slick({
        adaptiveHeight: true,
        arrows: false,
        centerMode: true,
        centerPadding: '60px',
        slidesToShow: 1,
        variableWidth: true,
        responsive: [
            {
                breakpoint: 980,
                settings: {
                    adaptiveHeight: true,
                    arrows: false,
                    centerMode: true,
                    centerPadding: '60px',
                    slidesToShow: 1,
                    variableWidth: true
                }
            },
            {
                breakpoint: 768,
                settings: {
                    adaptiveHeight: true,
                    arrows: false,
                    centerMode: true,
                    centerPadding: '40px',
                    slidesToShow: 1,
                    variableWidth: true
                }
            },
            {
                breakpoint: 480,
                settings: {
                    adaptiveHeight: true,
                    arrows: false,
                    centerMode: true,
                    centerPadding: '40px',
                    slidesToShow: 1,
                    variableWidth: true
                }
            }
        ]
    })
})

$('.left').click(function() {
    $('.slider').slick('slickPrev');
})

$('.right').click(function() {
    $('.slider').slick('slickNext');
})

document.onkeydown = function(event) {
    switch (event.keyCode) {
        case 37:
            $('.slider').slick('slickPrev');
            break;
        case 39:
            $('.slider').slick('slickNext');
            break;
    }
}
