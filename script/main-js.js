$(document).ready(function() {
  $(".slide1").addClass("active-slide");
  let $buttonNext = $('.right-control');
  let $buttonPrev = $('.left-control');
  let $allSlides = $(".slides");
  let $carouselWrapper = $(".carousel-wrapper");
  let index = 1;

  function next() {
    let $prevtSlide = $allSlides.filter('.active-slide');
    let $currentSlide = $prevtSlide.next();
    $allSlides.removeClass('active-slide');
    $currentSlide.addClass('active-slide');
    index++;
    if (index > 3) {
      $(".slide1").addClass('active-slide');
      index = 1;
    }
  }

  $buttonNext.on('click', next);

  function prev() {
    let $prevtSlide = $allSlides.filter('.active-slide');
    let $currentSlide = $prevtSlide.prev();
    $allSlides.removeClass('active-slide');
    $currentSlide.addClass('active-slide');
    index--;
    if (index < 1) {
      $(".slide3").addClass('active-slide');
      index = 3;
    }
  }

  $buttonPrev.on('click', prev);

  let autoSlide = setInterval(function(){
    next();
  }, 4000);
  $carouselWrapper.on('mouseover', function() {
    clearInterval(autoSlide);
    console.log("Setinterval cleared!")
  });
  $carouselWrapper.on('mouseleave', function() {
    autoSlide = setInterval(function(){
      next();
    }, 4000);
    console.log("Setinterval counting again!")
  })
})
