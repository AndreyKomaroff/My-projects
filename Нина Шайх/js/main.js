document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("burger").addEventListener("click", function() {
        document.querySelector("header").classList.toggle("open")
    })
})

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
