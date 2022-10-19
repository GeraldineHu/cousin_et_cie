const navMenu = document.getElementById('eshop__nav--secondary');

let navMenuHeight = navMenu.clientHeight;

console.log(navMenuHeight);


const sectionSlide = document.getElementById('slide-section');


sectionSlide.style.height = 'calc(100vh - navMenuHeight)';

/**let sectionSlideHeight = sectionSlide.style.height = 'calc(100vh - calc(12vh + navMenuHeight))'; **/