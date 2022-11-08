/***let hamburger = document.querySelector('.hamburger');
let navMobile = document.querySelector('.nav_mobile');***/

/****hamburger.addEventListener("click", function() {
    // Toggle class "is-active"
    hamburger.classList.toggle("is-active");
    navMobile.classList.toggle('hello');
    // Do something else, like open/close menu
  });****/


  
/*** const hamburgerActive = hamburger.classList.contains('is-active');

if(hamburgerActive == true) {
    window.alert("Hello world!");
};

navMobile.style.display= "block"; ****/


$(".hamburger").on("click", function(e) {
    $(".hamburger").toggleClass("is-active");
      // Do something else, like open/close menu
    $(this).next().slideToggle(2000);
});


/**$(".test__accordeon").on("click", function(e) {
  $(this).next().css("display", "flex");
});**/




/***$('.test__accordeon').on("click", function(e) {
  let etat = $('.detail__container--accordeon').css('display');
  if (etat == 'flex') {
    $('.detail__container--accordeon').css('display', 'none');
  } else {
    $('.detail__container--accordeon').css('display', 'flex');
  }
});***/

/**if ($(window).width() < 780) {
  $(".title__accordeon").on("click", function(e) {
    $(".title__accordeon").toggleClass("open__accordeon");
      // Do something else, like open/close menu
    $(this).next().slideToggle(1000);
    $(this).next().toggleClass("flexContainer");
    $(this).siblings('img').css("scale", "-1");
  });
}**/

/*if ($(window).width() < 780) {
  $(".title__accordeon").on("click", function(e) {
      // Do something else, like open/close menu
    $(this).next().slideToggle(1000);
    $(this).next().toggleClass("flexContainer");
    //$(this).children('img').css("scale", "-1");
    $(this).children('img').toggleClass("open__accordeon");
  });
}*/


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

/**const accordeon = document.getElementsByClassName('test__accordeon');
let i;


for (i = 0; i < accordeon.length; i++) {
  accordeon[i].addEventListener('click', function() {
    this.classList.toggle('open__accordeon');
    let listAccordeon = this.nextElementSibling;
      if(listAccordeon.style.display === "flex") {
        listAccordeon.style.display = "none";
      } else {
        listAccordeon.style.display = "flex";
      }
  });
};**/