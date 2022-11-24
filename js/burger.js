let burger = $('.burger__icon');
let burgerIcon = $('.burger__icon > div > span');
let burgerClose = $('.burger__list--close');
let burgerMenu = $('.burger__list');
let navEshop = $('.nav__eshop');

burger.on('click', function(e) {
    burgerMenu.addClass('burger__list--open');
    //Passer la nav en arrière plan
    navEshop.css('z-index', '0');
    //Empêcher le scroll Y
    $('body').css('overflow', 'hidden');
    burgerClose.on('click', function(e) {
        burgerMenu.removeClass('burger__list--open');
        //Rétablir le scroll Y
        $('body').css('overflow', 'auto');
        //Remonter la nav en 1er plan
        navEshop.css('z-index', '100');
    });
});

/* ACCORDEON MENU ESHOP */

$('.nav__accordeon').on('click', function(e) {
    $('.nav__accordeon').next().slideToggle(1000);
    $(this).next().toggleClass('flexContainer')
});



/***************** ACCORDEON DETAILS VIN ****************/

if ($(window).width() < 780) {
    $(".title__accordeon").on("click", function(e) {
        // Do something else, like open/close menu
        $(".title__accordeon").next().slideUp(1000);
        $(".title__accordeon").children('img').removeClass("open__accordeon");
        if ( $(this).next().is(':hidden') ) {
          $(this).next().slideDown(1000);
          $(this).next().toggleClass("flexContainer");
          //$(this).children('img').css("scale", "-1");
          $(this).children('img').toggleClass("open__accordeon");
        }
    });
  }