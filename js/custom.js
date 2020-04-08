$(document).ready(function () {
  AOS.init();
  var mySwiper = new Swiper ('.swiper-container', {
    loop: true,
    autoplay: {
      delay: 3000,
  	},
    fadeEffect: {
      crossFade: true
  	},
    pagination: {
      el: '.swiper-pagination',
      clickable: 'true',
    },
  })
});