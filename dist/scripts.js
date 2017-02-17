// mobile menu trigger

const navMenu = document.querySelector(".nav-menu");
const menuTrigger = document.querySelector(".nav-toggle");

menuTrigger.addEventListener("click", () => {
  navMenu.classList.toggle("nav-open");
});
