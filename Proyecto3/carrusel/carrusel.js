let currentIndex = 0;
const slides = document.querySelectorAll('.linea');
const cuadros = document.querySelectorAll('.cuadro');
const totalSlides = slides.length;

function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.classList.remove('active');
    cuadros[i].classList.remove('active'); 
    if (i === index) {
      slide.classList.add('active');
      cuadros[i].classList.add('active'); 
    }
  });
}

function nextSlide() {
  currentIndex = (currentIndex + 1) % totalSlides; 
  showSlide(currentIndex);
}

function prevSlide() {
  currentIndex = (currentIndex - 1 + totalSlides) % totalSlides; 
  showSlide(currentIndex);
}

setInterval(nextSlide, 5000);

document.querySelector('.carousel__button--next').addEventListener('click', nextSlide);
document.querySelector('.carousel__button--prev').addEventListener('click', prevSlide);

cuadros.forEach((cuadro, index) => {
  cuadro.addEventListener('click', () => {
    currentIndex = index;
    showSlide(currentIndex);
  });
});

showSlide(currentIndex);


