$('.slider-items').slick({
  dots: false,
  infinite: true,
  speed: 100,
  slidesToShow: 4,
  slidesToScroll: 1,
  prevArrow: $('.prev'),
  nextArrow: $('.next'),
  responsive: [{
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});

$(function ($) {
  $('.solution-item').click(function () {
    $(this).toggleClass('active').next()[$(this).next().is(':hidden') ? "slideDown" : "slideUp"](400);
  });

});

$('.slider-reviews').slick({
  dots: false,
  infinite: true,
  speed: 100,
  slidesToShow: 3,
  slidesToScroll: 1,
  prevArrow: $('.prev--reviews'),
  nextArrow: $('.next--reviews'),
  responsive: [{
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
});