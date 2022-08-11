const swiper = new Swiper('.swiper-container', {
  slidesPerView: 1,
  loop: true,
  pagination: {
    el: '.swiper-pagination',
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});

const accordeons = document.querySelectorAll(".accordeon")

for (let accordeon of accordeons) {
  const control = accordeon.querySelector('.control')
  control.addEventListener('click', () => {
    const activeAccordeon = document.querySelector(".accordeon.is-active")
    if (activeAccordeon) {
      activeAccordeon.classList.remove('is-active')
    }
    if (activeAccordeon !== accordeon) {
      accordeon.classList.toggle('is-active')
    }
  });
};


