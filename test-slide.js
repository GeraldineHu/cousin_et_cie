/*$('.test-slide').slick({
  infinite: true,
  prevArrow: '<button class="slick-prev"><svg class="arrow__prev" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 339.4 532" xml:space="preserve"><path d="M266,0l73.4,73.4L146.2,266l193.2,192.6L266,532L0,266L266,0z"/></svg></button>',
  nextArrow: '<button class="slick-next"><svg class="arrow__next" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 339.4 532" xml:space="preserve"><path d="M73.4,532L0,458.6L193.2,266L0,73.4L73.4,0l266,266L73.4,532z"/></svg></button>',
  slidesToShow: 2,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
  responsive: [
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
});*/


/************************** SLIDE ***************************/


let slideEshopDelay = setInterval(slideFade, 5500);
let slideBtn = $('.slide__eshop > .btn');
let slideBtnOne = $('.slide__eshop--1 > .btn');


//Mise en place de l'interval
function slideFade() {
  $('.slide__eshop--2').fadeToggle(1000);
  $('.slide__icon > span').toggleClass('slide__icon--active');
};
//Stop interval au hover du bouton
slideBtn.on('mouseover', function() {
  clearInterval(slideEshopDelay);
});
//Au clic sur un des ronds, changement de classes, changement de fade, stop interval
$('.slide__icon--1').on('click', function() {
  clearInterval(slideEshopDelay);
  $('.slide__icon > span').removeClass('slide__icon--active');
  $(this).addClass('slide__icon--active');
  $('.slide__eshop--2').fadeIn(1000);
})

$('.slide__icon--2').on('click', function() {
  clearInterval(slideEshopDelay);
  $('.slide__icon > span').removeClass('slide__icon--active');
  $(this).addClass('slide__icon--active');
  $('.slide__eshop--2').fadeOut(1000);
})
