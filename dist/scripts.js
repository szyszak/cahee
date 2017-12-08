// mobile menu trigger

const navMenu = document.querySelector(".nav-menu");
const menuTrigger = document.querySelector(".nav-toggle");

menuTrigger.addEventListener("click", () => {
  navMenu.classList.toggle("nav-open");
});

const links = document.querySelectorAll(".nav-menu li a");

for (let i = 0; i < links.length; i++) {
  links[i].addEventListener("click", clickHandler);
};

function clickHandler() {
  for (let link of links) {
    link.classList.remove("active");
  }

  navMenu.classList.remove("nav-open");
  this.classList.add("active");
};
