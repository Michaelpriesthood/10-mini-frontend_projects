const countDown = document.querySelector('#countdown');

//Set the Christmas Date
const christmasDate = new Date('December 25, 2020 13:00:00').getTime();

//Update every Seconds
const countDownInterval = setInterval(() => {
  //Set the Current Date and Time
  const nowDate = new Date().getTime();

  //Get the distance from Now to the Christmas Date
  const distance = christmasDate - nowDate;

  //Time Calculations
  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  //Display Countdown Result
  countDown.innerHTML = `
    <div>${days}<span>Days</span></div>
    <div>${hours}<span>Hours</span></div>
    <div>${minutes}<span>Minutes</span></div>
    <div>${seconds}<span>Seconds</span></div>   
    `;

  // If Christmas Date is Reached
  if (distance < 0) {
    // Stop countdown
    clearInterval(countDownInterval);
    // Style and output text
    countDown.innerHTML = 'Merry Christmas Everybody!';
    countDown.classList.add('animated');

    // Display the Christmas flower if Christmas Date is Reached
    setInterval(createFlower, 300);
  }
}, 1000);

// Christmas flower for christmas
const createFlower = () => {
  const flower = document.createElement('div');
  flower.classList.add('flower');

  flower.style.left = Math.random() * 100 + 'vw';
  flower.style.animationDuration = Math.random() * 2 + 3 + 's';
  flower.innerText = '💐';
  document.body.appendChild(flower);
  setTimeout(() => {
    flower.remove();
  }, 5000);
};
