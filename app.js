const back = document.querySelector(".navigation__back");
const nav = document.querySelector(".nav-list");
const burger = document.querySelector(".navigation__button");
const navlist = document.querySelector(".navigation__list");
const links = navlist.querySelectorAll("a");

burger.addEventListener("click", () => {
  //   back.classList.toggle("navigation__nav");
  back.classList.toggle("navigation__background");
  nav.classList.toggle("navigation__nav");
  burger.classList.toggle("toggle");
});

links.forEach((link) => {
  link.addEventListener("click", () => {
    back.classList.toggle("navigation__background");
    nav.classList.toggle("navigation__nav");

    burger.classList.toggle("toggle");
  });
});
