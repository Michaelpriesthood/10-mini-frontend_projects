const changeBtn = document.querySelector('#change');
const colorText = document.querySelector('.color-text');
const body = document.body;

const changeBG = () => {
  color1 = randomColor();
  color2 = randomColor();
  color3 = randomColor();

  const colorString = `rgb(${color1}, ${color2}, ${color3})`;

  //Change the background color
  body.style.background = colorString;

  //Change the color text
  colorText.textContent = colorString;
};

const randomColor = () => {
  return Math.floor(Math.random() * 256);
};

// Event
changeBtn.addEventListener('click', changeBG);
