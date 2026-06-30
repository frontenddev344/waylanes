// ===========================
// Sticky Header & Logo
// ===========================
const abtHeader = document.querySelector(".abt-header");
const siteLogo = document.getElementById("siteLogo");

function updateHeader() {
    if (window.scrollY > 70) {
        abtHeader.classList.add("abt-sticky");
        siteLogo.src = "./assets/images/logo_dark.png";
    } else {
        abtHeader.classList.remove("abt-sticky");
        siteLogo.src = "./assets/images/logo.png";
    }
}

// Run on page load
window.addEventListener("load", updateHeader);

// Run on scroll
window.addEventListener("scroll", updateHeader);


// ===========================
// Mobile Menu
// ===========================
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


// ===========================
// FAQ
// ===========================
const items = document.querySelectorAll(".faq-item");

items.forEach(item => {

    const btn = item.querySelector(".faq-question");
    const answer = item.querySelector(".faq-answer");

    btn.addEventListener("click", () => {

        // Close other FAQs
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

        // Toggle current FAQ
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


// ===========================
// Newsletter Validation
// ===========================
document.getElementById("newsletterForm").addEventListener("submit", function (e) {

    e.preventDefault();

    let isValid = true;

    const nameInput = document.querySelector(".name");
    const nameError = document.getElementById("nameError");

    if (nameInput.value.trim() === "") {
        nameError.classList.remove("d-none");
        isValid = false;
    } else {
        nameError.classList.add("d-none");
    }

    const emailInput = document.querySelector(".email");
    const emailError = document.getElementById("emailError");
    const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,}$/i;

    if (!emailPattern.test(emailInput.value.trim())) {
        emailError.classList.remove("d-none");
        isValid = false;
    } else {
        emailError.classList.add("d-none");
    }

    if (isValid) {

        this.reset();

        let msg = document.getElementById("successMsg");

        if (!msg) {
            msg = document.createElement("p");
            msg.id = "successMsg";
            msg.className = "text-success mt-3";
            this.appendChild(msg);
        }

        msg.textContent = "You have been subscribed to our newsletter!";

        setTimeout(() => {
            msg.textContent = "";
        }, 5000);
    }

});