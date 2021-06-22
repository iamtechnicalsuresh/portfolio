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

// Onclick navbar active class

const links = document.querySelectorAll(".link");

links.forEach((link) => {
  link.addEventListener("click", () => {
    links.forEach((item) => item.classList.remove("active"));
    link.classList.add("active");
  });
});

// Observer for Navbar Scroll on Sections add active class
const selectElementByClass = (className) => {
  return document.querySelector(`.${className}`);
};

const sections = [
  selectElementByClass("home"),
  selectElementByClass("about"),
  selectElementByClass("services"),
  selectElementByClass("contact"),
];

const navItems = {
  home: selectElementByClass("homeNavItem"),
  services: selectElementByClass("servicesNavItem"),
  about: selectElementByClass("aboutNavItem"),
  contact: selectElementByClass("contactNavItem"),
};

// intersection observer setup
const observerOptions = {
  root: null,
  rootMargin: "0px",
  threshold: 0.7,
};

function observerCallback(entries, observer) {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      // get the nav item corresponding to the id of the section
      // that is currently in view
      const navItem = navItems[entry.target.id];
      // add 'active' class on the navItem
      navItem.classList.add("active");
      // remove 'active' class from any navItem that is not
      // same as 'navItem' defined above
      Object.values(navItems).forEach((item) => {
        if (item != navItem) {
          item.classList.remove("active");
        }
      });
    }
  });
}

const observer = new IntersectionObserver(observerCallback, observerOptions);

sections.forEach((sec) => observer.observe(sec));
