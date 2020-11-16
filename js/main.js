$(function(){
  $('.wine__slider-image').slick({
    fade: true,
    prevArrow: '<button type="button" class="slick-prev">Prev</button>',
    swipe: false,
  });
  $('.coments__slider').slick({
    dots: true,
    arrows: false,
    swipe: false,
  });
  $('.offer__title-slider').slick({
    slidesToShow: 3,
    arrows: false,
    dots: true,
    swipe: false,
  });
  $('.events__slider').slick({
    arrows:true,
    prevArrow: '<button type="button" class="slick-prev"><img src="../images/events__prev.png" alt=""></button>',
    nextArrow: '<button type="button" class="slick-next"><img src="../images/events__next.png" alt=""></button>',
    swipe: false,
  });
});