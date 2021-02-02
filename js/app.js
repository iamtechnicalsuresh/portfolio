const navToggle = document.querySelector(".navToggle");
const navLink = document.querySelector(".nav-links");


navToggle.addEventListener('click', ()=> {
    
    showNavbar();
})



const showNavbar = ()=> {
    // navLink.classList.toggle("nav-link-show")
    if ( navLink.classList.contains("nav-link-show")) {
        navLink.classList.remove("nav-link-show");
    } else {
        navLink.classList.add("nav-link-show")
    }
}