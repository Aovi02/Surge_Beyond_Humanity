const slides = document.querySelectorAll('.slide');
const next = document.querySelector('#next');
const prev = document.querySelector('#prev');
const auto = true; //Automático
const intervalTime = 3000;
let slideInterval;

const nextSlide = () => {
  //Coger clase actual
  const current = document.querySelector('.current');
  //Quitarla
  current.classList.remove('current');
  //Buscar siguiente slide
  if (current.nextElementSibling) {
    //Añadirle el current a este slide
    current.nextElementSibling.classList.add('current');
  } else {
    //Si no tiene siguiente slide, volvemos al principio
    slides[0].classList.add('current');
  }
  setTimeout(() => current.classList.remove('current'));
};

const prevSlide = () => {
  const current = document.querySelector('.current');
  current.classList.remove('current');
  //Buscar slide anterior
  if (current.previousElementSibling) {
    current.previousElementSibling.classList.add('current');
  } else {
    //Si no tiene anterior slide, vamos al final
    slides[slides.length - 1].classList.add('current');
  }
  setTimeout(() => current.classList.remove('current'));
};

//Eventos para los botones
next.addEventListener('click', e => {
  nextSlide();
  if (auto) {
    clearInterval(slideInterval);
    slideInterval = setInterval(nextSlide, intervalTime);
  }
});

prev.addEventListener('click', e => {
  prevSlide();
  if (auto) {
    clearInterval(slideInterval);
    slideInterval = setInterval(nextSlide, intervalTime);
  }
});

//Auto slide
if (auto) {
  slideInterval = setInterval(nextSlide, intervalTime);
}