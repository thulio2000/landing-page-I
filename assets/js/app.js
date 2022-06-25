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

// Theme Switcher/Toggler selection 

// Close Menu on Nav Menu Clicks

// Scroll to Top

// Theme Switcher/Toggler Functionality

const checkbox = document.querySelector("#checkbox");

checkbox.addEventListener("change", () => {
    //toggle website theme
    document.body.classList.toggle("dark");
})