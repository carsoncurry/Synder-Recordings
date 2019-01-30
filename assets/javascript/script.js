// SLIDER FUNCTIONALITY
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

// SLIDER ARROW REPLACEMENT
$('.left').click(function() {
    $('.slider').slick('slickPrev');
})

$('.right').click(function() {
    $('.slider').slick('slickNext');
})

// KEYBOARD SLIDER FUNCTIONALITY
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

// MENU TOGGLE FUNCTIONALITY
function classToggle() {
    const navs = document.querySelectorAll('.menu-item')

    navs.forEach(nav => nav.classList.toggle('Navbar_ToggleShow'));
}

document.querySelector('.menu-toggle')
    .addEventListener('click', classToggle);