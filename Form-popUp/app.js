const form = document.querySelector('.form-popup');
const openBtn = document.querySelector('.open-btn');
const closeBtn = document.querySelector('.close-btn');

const body = document.body;

openBtn.addEventListener('click', event => {
  form.style.display = 'block';
  openBtn.style.display = 'none';
});

closeBtn.addEventListener('click', event => {
  form.style.display = 'none';
  openBtn.style.display = 'block';
});
