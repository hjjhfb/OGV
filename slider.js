const slides = document.querySelectorAll('.slide');
let currentSlide = 0;
const showSlide = idx => {
  slides.forEach((slide, i) => slide.classList.toggle('active', i === idx));
};
document.getElementById('prev').onclick = () => {
  currentSlide = (currentSlide - 1 + slides.length) % slides.length;
  showSlide(currentSlide);
};
document.getElementById('next').onclick = () => {
  currentSlide = (currentSlide + 1) % slides.length;
  showSlide(currentSlide);
};
setInterval(() => {
  currentSlide = (currentSlide + 1) % slides.length;
  showSlide(currentSlide);
}, 8000);