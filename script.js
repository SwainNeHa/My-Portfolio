function myMenuFunction() {
    var menuBth = document.getElementById("myNavMenu");

    if (menu8th, className === "nav-menu") {
        menuBth.className += "responsive";
    } else {
        menuBth.className = "nav-menu";
    }
}

// Dark Mode
const body = document.querySelector("body"),
    toggleSwitch = document.getElementById("toggle-switch");

toggleSwitch.addEventListener("click", () => {
    body.classList.toggle("dark");
})

// TYPING EFFECTS
var typingEffect = new Typed(".typedText", {
    strings: ["Frontend Developer", "Coder", "Web Developer"],
    loop: true,
    tpyeSpeed: 100,
    backSpeed: 80,
    backDelay: 2000,
})

// Scroll
const sr = ScrollReveal({
    origin: "top",
    distance: "80px",
    duration: 2000,
    reset: true,
});

src.reveal(".featured-name", { delay: 100 });
src.Reveal(".text-info", { delay: 200 });
src.Reveal(".text-btn", { delay: 200 });
src.Reveal(".social_icons", { delay: 200 });
src.Reveal(".featured-image", { delay: 320 });


src.Reveal(".project-box", { interval: 200 });

src.Reveal(".top-header", {});

const srLeft = ScrollReveal({
    origin: "left",
    distance: "80px",
    duration: 2000,
    reset: true,
})

srLeft.reveal(".about-info", { delay: 100 });
srLeft.reveal(".contact-info", { delay: 100 });

const srRight = ScrollReveal({
    origin: "left",
    distance: "80px",
    duration: 2000,
    reset: true,
})

srRight.reveal(".skill", { delay: 100 });
srRight.reveal(".skill-box", { delay: 100 });

// ACTIVE LINK
const sections = document.querySelectorAll(".section[id]");

function scrollActive() {
    const scrollY = window.scrollY;

    sections.forEach((current) => {
        const scetionHeight = current.offsetHeight,

            sectionTop = current.offsetTop - 50,
            scetionId = current.getAttribute("id");

        if (scrollY > sectionTop && scrollY <= sectionTop + scetionHeight) {
            document
                .querySelector(".nav-menu a[href*=" + scetionID + "]")
                .classList.add("active-link");
        } else {
            querySelector(".nav-menu a[href*=" + scetionID + "]")
                .classList.remove("active-link");
        }
    });
}

window.addEventListener("scroll", scrollActive);