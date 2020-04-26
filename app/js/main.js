$('.slider-items').slick({
  dots: false,
  infinite: true,
  speed: 400,
  slidesToShow: 4,
  slidesToScroll: 1,
  prevArrow: $('.prev'),
  nextArrow: $('.next'),
  responsive: [,
    {
      breakpoint: 1366,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1
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



// $('.solutions-box  .solution-item').click(function () {
//   $('.solutions-box  .solution-item').removeClass('actives');
//   $(this).addClass('actives');
// })

$(function ($) {
  $('.solution-item').click(function () {
    $(this).toggleClass('active').next()[$(this).next().is(':hidden') ? "slideDown" : "slideUp"](400);
  });

});

$('.slider-reviews').slick({
  dots: false,
  infinite: true,
  speed: 400,
  slidesToShow: 3,
  slidesToScroll: 1,
  prevArrow: $('.prev--reviews'),
  nextArrow: $('.next--reviews'),
  responsive: [{
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
        dots: false
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1
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

$('.slider-partners__inner').slick({
  dots: false,
  infinite: true,
  speed: 400,
  slidesToShow: 4,
  slidesToScroll: 1,
  prevArrow: $('.prev--parts'),
  nextArrow: $('.next--parts'),
  responsive: [{
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
        dots: false
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1
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


$('.questions .questions__item').click(function () {
  $('.questions .questions__item').removeClass('active');
  $(this).addClass('active');
})

$('.questions .item0').click(function () {
  $('.questions .questions__answer').html('<p class="answer">Увы, из-за повального нашествия "гуру инфобизнеса" многие понятия и термины в реальном мире часто путают с вымыслом.</p><p class="answer">Управление Маркетингом - это построение бизнес-процессов, Promotion (продвижение) - часть маркетинга, а реклама - часть продвижения.</p><p class="answer">Мы вместе с собственниками/инвесторами выстраиваем бизнес-процессы - конечно же, включая вопросы позиционирования, продвижения - и рекламы.</p><p class="answer">Если по-порядку - то это: маркетинг-аудит, согласование концепции развития, утверждение стратегии, бюджетирование и активные действия. Однако, все может отличаться - в зависимости от особенностей и задач Вашего бизнеса.</p>')
})

$('.questions .item1').click(function () {
  $('.questions .questions__answer').html('<p>1 Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis eligendi voluptatibus tenetur modi quam doloremque, exercitationem totam, explicabo voluptate facere ea temporibus est amet, omnis ipsum quas sed nesciunt cumque?</p>')
})

$('.questions .item2').click(function () {
  $('.questions .questions__answer').html('<p>2 Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis eligendi voluptatibus tenetur modi quam doloremque, exercitationem totam, explicabo voluptate facere ea temporibus est amet, omnis ipsum quas sed nesciunt cumque?</p>')
})

$('.questions .item3').click(function () {
  $('.questions .questions__answer').html('<p>3 Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis eligendi voluptatibus tenetur modi quam doloremque, exercitationem totam, explicabo voluptate facere ea temporibus est amet, omnis ipsum quas sed nesciunt cumque?</p>')
})

$('.questions .item4').click(function () {
  $('.questions .questions__answer').html('<p>4 Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis eligendi voluptatibus tenetur modi quam doloremque, exercitationem totam, explicabo voluptate facere ea temporibus est amet, omnis ipsum quas sed nesciunt cumque?</p>')
})

$('.questions .item5').click(function () {
  $('.questions .questions__answer').html('<p>5 Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis eligendi voluptatibus tenetur modi quam doloremque, exercitationem totam, explicabo voluptate facere ea temporibus est amet, omnis ipsum quas sed nesciunt cumque?</p>')
})

$('.questions .item6').click(function () {
  $('.questions .questions__answer').html('<p>6 Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis eligendi voluptatibus tenetur modi quam doloremque, exercitationem totam, explicabo voluptate facere ea temporibus est amet, omnis ipsum quas sed nesciunt cumque?</p>')
})

$('.questions .item7').click(function () {
  $('.questions .questions__answer').html('<p>7 Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis eligendi voluptatibus tenetur modi quam doloremque, exercitationem totam, explicabo voluptate facere ea temporibus est amet, omnis ipsum quas sed nesciunt cumque?</p>')
})

$('.questions .item8').click(function () {
  $('.questions .questions__answer').html('<p>8 Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis eligendi voluptatibus tenetur modi quam doloremque, exercitationem totam, explicabo voluptate facere ea temporibus est amet, omnis ipsum quas sed nesciunt cumque?</p>')
})

$('.questions .item9').click(function () {
  $('.questions .questions__answer').html('<p>9 Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis eligendi voluptatibus tenetur modi quam doloremque, exercitationem totam, explicabo voluptate facere ea temporibus est amet, omnis ipsum quas sed nesciunt cumque?</p>')
})


/* Функция закрывает по нажатие на кнопку модальное окно */
function bclose() {
  $("#window").bPopup().close();
  return false;
}

/* Функция показывает модальное окно по нажатию на кнопку */
function bopen() {
  $('#window').bPopup();
  return false;
}