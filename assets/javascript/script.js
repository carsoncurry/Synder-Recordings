$(document).ready(function() {
    $('.slider').slick({
        arrows: false,
        centerMode: true,
        centerPadding: '60px',
        infinite: true,
        slidesToScroll: 1,
        slidesToShow: 1,
        responsive: [
            {
                breakpoint: 1530,
                settings: {
                    arrows: false,
                    centerMode: true,
                    centerPadding: '40px',
                    slidesToShow: 1
                }
            },

            {
                breakpoint: 768,
                settings: {
                    arrows: false,
                    centerMode: true,
                    centerPadding: '40px',
                    slidesToShow: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    arrows: false,
                    centerMode: true,
                    centerPadding: '40px',
                    slidesToShow: 1
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
