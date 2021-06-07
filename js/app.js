const navToggle = document.querySelector(".navToggle");
const navLink = document.querySelector(".nav-links");
const date = document.getElementById("date");

// Insert Year in Footer
date.innerHTML = new Date().getFullYear();

// Toggle Menu
navToggle.addEventListener("click", () => {
  showNavbar();
});

const showNavbar = () => {
  // navLink.classList.toggle("nav-link-show")
  if (navLink.classList.contains("nav-link-show")) {
    navLink.classList.remove("nav-link-show");
  } else {
    navLink.classList.add("nav-link-show");
  }
};

// Fixed Navbar
const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {
  fixedNav();
  backToTop();
});

const fixedNav = () => {
  const scrollPageHeight = window.pageYOffset;
  const navbarHeight = navbar.getBoundingClientRect().height;

  if (scrollPageHeight > navbarHeight) {
    navbar.classList.add("fixed-nav");
  } else {
    navbar.classList.remove("fixed-nav");
  }
};

// Back to Top button
const backToTopBtn = document.querySelector(".back-to-top");
const backToTop = () => {
  const scrollPageHeight = window.pageYOffset;
  // console.log(scrollPageHeight)
  if (scrollPageHeight > 500) {
    backToTopBtn.classList.add("back-to-top-show");
  } else {
    backToTopBtn.classList.remove("back-to-top-show");
  }
};

const loader = document.querySelector(".loading-div");

const preLoader = () => {
  setTimeout(() => (loader.style.display = "none"), 1000);
};

const links = document.querySelectorAll(".link");

links.forEach((link) => {
  link.addEventListener("click", () => {
    links.forEach((item) => item.classList.remove("active"));
    link.classList.add("active");
  });
});
