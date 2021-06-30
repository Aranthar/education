$(document).ready(() => {

  $('.slider').slick({
    nextArrow: false,
    prevArrow: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    infinite: true,
    dots: true,
    customPaging: () => '<div class="dot"></div>',
    autoplay: true,
    autoplaySpeed: 5000,
    speed: 1000
  });
})