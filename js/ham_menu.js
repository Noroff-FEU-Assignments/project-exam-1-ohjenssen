// Creating the hamburger menu
const navTag = document.querySelector("nav");
const hamIcon = document.getElementById("hamburger_icon");
let mediaQuery = window.matchMedia("(min-width: 700px)")

function checkMediaQuery(width) {
    if (width.matches) { // If media query matches
        navTag.style.display = "flex";
    } else {
        navTag.style.display = "none"
    }
}
mediaQuery.addEventListener("change", checkMediaQuery); // Checks width when browser window is altered
checkMediaQuery(mediaQuery); // Checks mediaquery, enables either hamburger menu or regular menu


function hamMenuHideDisplay() { // Hamburger-menu popup function
    if (navTag.style.display === "none"){
        navTag.style.display = "flex"
    } else if (navTag.style.display === "flex"){
        navTag.style.display = "none";
    }
}
hamIcon.addEventListener("click", hamMenuHideDisplay)

