
const slideFlow = document.getElementById('slideFlow');
const slideBtnLeft = document.querySelector('#slide .leftArrow');
const slideBtnRight = document.querySelector('#slide .rightArrow');

slideBtnLeft.addEventListener('click', function() {slideFlow.style.transform = "translateX(50%)"});
slideBtnRight.addEventListener('click', function() {slideFlow.style.transform = "translateX(-50%)"});
