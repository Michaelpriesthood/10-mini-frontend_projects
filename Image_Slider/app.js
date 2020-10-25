const slides = document.querySelectorAll('.slide');
const nextBtn = document.querySelector('.btn-next');
const prevBtn = document.querySelector('.btn-prev');

const nextSlide = () => {
  // Get the current class
  const currentSlide = document.querySelector('.current');
  //   Remove the current class
  currentSlide.classList.remove('current');
  //Checking if the current class has a next sibling
  if (currentSlide.nextElementSibling) {
    //  Adding the class of current if it has a sibling
    currentSlide.nextElementSibling.classList.add('current');
    if (imageIndex === 1) {
      prevBtn.classList.remove('is-hidden');
    }
  } else {
    slides[0].classList.add('current');
  }
};

const prevSlide = () => {
  // Get the current class
  const currentSlide = document.querySelector('.current');
  //   Remove the current class
  currentSlide.classList.remove('current');
  // Checking if the current class has a previous sibling
  if (currentSlide.previousElementSibling) {
    //  Adding the class of current if it has a previous sibling
    currentSlide.previousElementSibling.classList.add('current');
  } else {
    slides[slides.length - 1].classList.add('current');
  }
};

// Events
nextBtn.addEventListener('click', nextSlide);
prevBtn.addEventListener('click', prevSlide);
