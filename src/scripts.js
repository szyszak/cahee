// mobile menu trigger

const navMenu = document.querySelector(".nav-menu");
const menuTrigger = document.querySelector(".nav-toggle");

menuTrigger.addEventListener("click", () => {
  navMenu.classList.toggle("nav-open");
});

function cl(text) {
  console.log(text);
};

const links = document.querySelectorAll(".nav-menu li a");

for (let i = 0; i < links.length; i++) {
  links[i].addEventListener("click", setActiveClass);
};

function setActiveClass() {
  for (let link of links) {
    link.classList.remove("active");
  }

  this.classList.add("active");
};
