const slides = document.querySelectorAll(".slide");
let currentSlide = 0;

function showSlide(n) {
  slides[currentSlide].computedStyleMap.display = "none";
  currentSlide = n + slides.length;
}
