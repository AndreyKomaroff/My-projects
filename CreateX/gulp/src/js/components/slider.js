import Swiper, { Navigation } from 'swiper';
Swiper.use([Navigation]);
const swiper = new Swiper('.team__list', {
  slidesPerView: 2,
  spaceBetween: 40,
  navigation: {
    nextEl: '.team__slider-btn--next',
    prevEl: '.team__slider-btn--prev',
  },
});
