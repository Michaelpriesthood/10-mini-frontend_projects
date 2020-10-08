const openBtn = document.querySelector(".open-btn");
const closeBtn = document.querySelector(".close-btn");
const sideNavbar = document.querySelector(".side-nav");

// Open the Side-bar
openBtn.addEventListener("click", () => {
  sideNavbar.style.width = "250px";
});

// Close the Side-bar
closeBtn.addEventListener("click", () => {
  sideNavbar.style.width = "0";
});
