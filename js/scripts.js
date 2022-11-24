let scrollTop;
let sectionHeight = $('#section-slide').height();
let navPosition = navEshop.offset().top;
let navHeight = navEshop.height();

console.log(navPosition);

if ($(window).width() > 780) {
    $(window).on('scroll', function() {
        scrollTop = $(this).scrollTop();
        if( scrollTop >= (sectionHeight + navHeight)) {
            navEshop.css('height', '7vh');
        }
        else {
            navEshop.css('height', '12vh');
        }
    });
};
