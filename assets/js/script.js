document.addEventListener("DOMContentLoaded", function() {
    const navLinks = document.querySelector(".nav-links");

    document.querySelector(".dropdown").addEventListener("mouseover", function() {
        this.querySelector(".dropdown-menu").style.display = "block";
    });

    document.querySelector(".dropdown").addEventListener("mouseleave", function() {
        this.querySelector(".dropdown-menu").style.display = "none";
    });
});
