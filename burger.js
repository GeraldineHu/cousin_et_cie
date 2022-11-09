let burger = $('.burger__icon');
let burgerIcon = $('.burger__icon > div > span');
let burgerClose = $('.burger__list--close');
let burgerMenu = $('.burger__list');
let navEshop = $('.nav__eshop');
let i;

burger.on('click', function(e) {
    burgerMenu.addClass('burger__list--open');
    navEshop.css('z-index', '0');
    $('body').css('overflow', 'hidden');
    burgerClose.on('click', function(e) {
        burgerMenu.removeClass('burger__list--open');
        $('body').css('overflow', 'auto');
        navEshop.css('z-index', '100');
    });
});

/* ACCORDEON MENU ESHOP */

$('.nav__accordeon').on('click', function(e) {
    $('.nav__accordeon').next().slideToggle(1000);
    $(this).next().toggleClass('flexContainer')
});



