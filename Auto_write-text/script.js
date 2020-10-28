const text = 'My name is Michael Prince and I am a programmer!';

let index = 0;

const write = () => {
  document.body.innerText = text.slice(0, index);
  index++;

  if (index > text.length) {
    index = 0;
  }
};

setInterval(write, 100);
