'use strict';

const navbar = document.querySelector("[data-navbar]");
const navToggler = document.querySelector("[data-nav-toggler]");
const header = document.querySelector("[data-header]");

// toggle navbar open/close
navToggler.addEventListener("click", () => {
  navbar.classList.toggle("active");
});

// shrink header on scroll
window.addEventListener("scroll", () => {
  header.classList[window.scrollY > 50 ? "add" : "remove"]("active");
});

// favorite button toggle
const $toggleBtns = document.querySelectorAll(".fav-btn");

$toggleBtns.forEach(($toggleBtn) => {
  $toggleBtn.addEventListener("click", () => {
    $toggleBtn.classList.toggle("active");
  });
});
