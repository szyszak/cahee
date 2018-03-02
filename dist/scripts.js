// mobile menu trigger

const navMenu = document.querySelector(".nav-menu");
const menuTrigger = document.querySelector(".nav-toggle");
const navLinks = document.querySelectorAll(".nav-menu li a");

menuTrigger.addEventListener("click", () => {
  navMenu.classList.toggle("nav-open");
});

function smoothScroll(target) {
  document.querySelector(target).scrollIntoView({ 
    behavior: 'smooth' 
  });
}

for (let i = 0; i < navLinks.length; i++) {
  navLinks[i].addEventListener("click", (ev) => {
    ev.preventDefault();
    smoothScroll(ev.target.hash);
    for (let link of navLinks) {
      link.classList.remove("active");
    }

    navMenu.classList.remove("nav-open");
    ev.target.classList.add("active");
  });
}
