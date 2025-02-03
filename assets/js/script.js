document.addEventListener("DOMContentLoaded", function() {
    const navLinks = document.querySelector(".nav-links");
    const toggle = document.querySelector(".nav-toggle");

    toggle.addEventListener("click", function() {
        navLinks.classList.toggle("active");
    });

    window.addEventListener("scroll", function() {
        document.querySelector(".navbar").style.background = window.scrollY > 50 
            ? "rgba(0, 0, 0, 0.9)" 
            : "rgba(0, 0, 0, 0.8)";
    });
});
