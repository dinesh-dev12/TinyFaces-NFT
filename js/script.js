var swiper = new Swiper('.swiper-container', {
    slidesPerView: 4,
    centeredSlides:false,
    spaceBetween:30,
    grabCursor: true,
  // Responsive breakpoints
  breakpoints: {
    // when window width is <= 499px
    1500:{
      slidesPerView: 4,
      spaceBetweenSlides:20
    },
    
    499:{
      slidesPerView: 3,
      spaceBetweenSlides:20
    },
    299: {
      slidesPerView: 2,
      spaceBetweenSlides: 20
    }
  }
});

$(".clickme1").click(function(){
    $(".openme1").toggle(180);
    $(".svg1").toggle(1)
    $(".svg2").toggle(1)
  });

  $(".clickme2").click(function(){
    $(".openme2").toggle(180);
    $(".svg3").toggle(1)
    $(".svg4").toggle(1)
  });

  $(".clickme3").click(function(){
    $(".openme3").toggle(180);
    $(".svg5").toggle(1)
    $(".svg6").toggle(1)
  });

  $(".clickme4").click(function(){
    $(".openme4").toggle(180);
    $(".svg7").toggle(1)
    $(".svg8").toggle(1)
  });

  $(".clickme5").click(function(){
    $(".openme5").toggle(180);
    $(".svg9").toggle(1)
    $(".svg10").toggle(1)
  });


  