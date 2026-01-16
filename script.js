const enterBtn = document.getElementById("enterBtn");
const intro = document.getElementById("intro");
const main = document.getElementById("mainContent");

// ENTER animation
enterBtn.addEventListener("click", () => {
    intro.classList.add("exit");

    setTimeout(() => {
        intro.style.display = "none";
        main.classList.remove("hidden");
        main.classList.add("show");
    }, 800);
});

// SCROLL REVEAL
const reveals = document.querySelectorAll(".reveal");

const observer = new IntersectionObserver(
    entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("active");
            }
        });
    },
    { threshold: 0.2 }
);

reveals.forEach(el => observer.observe(el));


