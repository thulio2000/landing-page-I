// Hamburger Menu Selections

// Scroll-to-Top Selection
const scrollUp = document.querySelector("#scroll-up")

scrollUp.addEventListener("click", () => {
    window.scrollTo({
        top:0,
        left: 0,
        behavior: "smooth",
    })
})

//Hamburger Menu Functionality

const hamburger = document.querySelector("#hamburger");
const navMenu = document.querySelector("ul");
const navLink = document.querySelectorAll("#nav-link");

function openMenu() {
    hamburger.classList.toggle("active");
    navMenu.classList.toggler("active");
}

navLink.forEach((n) => n.addEventListener("click", closeMenu) );
function closeMenu() {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}

// Theme Switcher/Toggler selection 

// Close Menu on Nav Menu Clicks

// Scroll to Top

// Theme Switcher/Toggler Functionality

const checkbox = document.querySelector("#checkbox");

checkbox.addEventListener("change", () => {
    //toggle website theme
    document.body.classList.toggle("dark");
})