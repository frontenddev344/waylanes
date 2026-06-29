const abtHeader = document.querySelector(".abt-header");

window.addEventListener("scroll", function () {

    if (window.scrollY > 70) {
        abtHeader.classList.add("abt-sticky");
    } else {
        abtHeader.classList.remove("abt-sticky");
    }

});

const toggle = document.querySelector(".abt-toggle");
const menu = document.querySelector(".abt-menu");
const menuLinks = document.querySelectorAll(".abt-menu a");

toggle.addEventListener("click", () => {
    menu.classList.toggle("active");
    toggle.classList.toggle("active");
});

menuLinks.forEach((link) => {
    link.addEventListener("click", () => {
        if (menu.classList.contains("active")) {
            menu.classList.remove("active");
            toggle.classList.remove("active");
        }
    });
});
