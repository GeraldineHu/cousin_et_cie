let scrollTop;
let navPosition = navEshop.offset().top;

console.log(navPosition);

$(window).on('scroll', function() {
    scrollTop = $(this).scrollTop();
    if( scrollTop > navPosition) {
        navEshop.css('height', '7vh');
    }
    else {
        navEshop.css('height', '12vh');
    }
});