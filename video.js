const videoOne = document.getElementById('video1');
const videoTwo = document.getElementById('video2');

videoOne.addEventListener('ended', function() {
    videoTwo.play();
    videoTwo.style.display = "block";
    videoOne.style.display = "none";
})

videoTwo.addEventListener('ended', function() {
    videoOne.play();
    videoOne.style.display = "block";
    videoTwo.style.display = "none";
})