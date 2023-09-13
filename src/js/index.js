let button = document.querySelector(".header__nav__button");
let shortLine = button.firstElementChild;
let secondLine = shortLine.nextElementSibling;
let thirdLine = button.lastElementChild;
let navMenu = document.querySelector(".header__nav__menu");
let navLinks = document.querySelectorAll(".header__nav__menu__link");

button.addEventListener("click", ()=> {
    if (shortLine.classList.contains("active") === true) {
        shortLine.classList.remove("active");
        secondLine.classList.remove("active");
        thirdLine.classList.remove("active");
        navMenu.classList.remove("active");
        navLinks.forEach((element) => {
            if (element.classList.contains("active") === true) {
                element.classList.remove("active");
            }
        })
    } else {
        shortLine.classList.add("active");
        secondLine.classList.add("active");
        thirdLine.classList.add("active");
        navMenu.classList.add("active");
        navLinks.forEach((element) => {
            if (element.classList.contains("active") === false) {
                element.classList.add("active");
            }
        })
    }
});


