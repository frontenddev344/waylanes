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

//Faq//
const items = document.querySelectorAll(".faq-item");

items.forEach(item => {

    const btn = item.querySelector(".faq-question");
    const answer = item.querySelector(".faq-answer");

    btn.addEventListener("click", () => {

        // Close others
        items.forEach(other => {

            if (other !== item) {
                other.classList.remove("active");

                const otherAnswer = other.querySelector(".faq-answer");
                otherAnswer.style.height = otherAnswer.scrollHeight + "px";

                requestAnimationFrame(() => {
                    otherAnswer.style.height = "0px";
                    otherAnswer.style.opacity = "0";
                });
            }

        });

        // Toggle current
        if (item.classList.contains("active")) {

            answer.style.height = answer.scrollHeight + "px";

            requestAnimationFrame(() => {
                answer.style.height = "0px";
                answer.style.opacity = "0";
            });

            item.classList.remove("active");

        } else {

            item.classList.add("active");

            answer.style.height = "0px";
            answer.style.opacity = "1";

            requestAnimationFrame(() => {
                answer.style.height = answer.scrollHeight + "px";
            });

            answer.addEventListener("transitionend", function handler() {
                if (item.classList.contains("active")) {
                    answer.style.height = "auto";
                }
                answer.removeEventListener("transitionend", handler);
            });

        }

    });

});