$(document).ready(function() {
  $(".slide1").addClass("active-slide");
  let $buttonNext = $('.right-control');
  let $buttonPrev = $('.left-control');
  let $allSlides = $(".slides");
  let $carouselWrapper = $(".carousel-wrapper");
  let $indicators = $(".carousel-indicators li");
  let index = 1;

  function next() {
    let $prevtSlide = $allSlides.filter('.active-slide');
    let $currentSlide = $prevtSlide.next();
    let $prevIndicator = $indicators.filter('.active-indicator');
    let $currentIndicator = $prevIndicator.next();

    $indicators.removeClass('active-indicator');
    $currentIndicator.addClass('active-indicator');
    $allSlides.removeClass('active-slide');
    $currentSlide.addClass('active-slide');
    index++;
    if (index > 3) {
      $(".slide1").addClass('active-slide');
      $(".img1-indicator").addClass('active-indicator');
      index = 1;
    }
  }

  function prev() {
    let $prevtSlide = $allSlides.filter('.active-slide');
    let $currentSlide = $prevtSlide.prev();
    let $prevIndicator = $indicators.filter('.active-indicator');
    let $currentIndicator = $prevIndicator.prev();

    $indicators.removeClass('active-indicator');
    $currentIndicator.addClass('active-indicator');
    $allSlides.removeClass('active-slide');
    $currentSlide.addClass('active-slide');
    index--;
    if (index < 1) {
      $(".slide3").addClass('active-slide');
      $(".img3-indicator").addClass('active-indicator');
      index = 3;
    }
  }

  $buttonNext.on('click', next);
  $buttonPrev.on('click', prev);

  let autoSlide = setInterval(function(){
    next();
  }, 4000);
  $carouselWrapper.on('mouseover', function() {
    clearInterval(autoSlide);
  });
  $carouselWrapper.on('mouseleave', function() {
    autoSlide = setInterval(function(){
      next();
    }, 4000);
  });

  //Indicators
  $indicators.on('click', function(e) {
    let target = e.target || e.srcElement;
    let targetNumber = target.className.match(/img(\d+)/)[1];

    $indicators.removeClass('active-indicator');
    $(this).addClass('active-indicator');

    $allSlides.removeClass('active-slide');
    $allSlides.eq(targetNumber-1).addClass('active-slide');
    index = targetNumber;
  })
})
