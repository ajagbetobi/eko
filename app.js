const hamburger = document.querySelector(".hamburger");
const nav = document.querySelector("nav");
const navItems = document.querySelectorAll("nav-item");

hamburger.addEventListener("click", () => {
  nav.classList.toggle("open");
  hamburger.classList.toggle("close");
});

const loader = document.querySelector(".preloader");
const main = document.querySelector(".main");

function init() {
  setTimeout(() => {
    loader.style.opacity = 0;
    loader.style.display = "none";
    main.style.display = "block";
    setTimeout(() => (main.style.opacity = 1), 30);
  }, 4000);
}
init();
