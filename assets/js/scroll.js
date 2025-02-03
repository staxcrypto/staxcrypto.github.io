window.addEventListener("scroll", function() {
    document.querySelector(".background-animation").style.transform = `translateY(${window.scrollY * 0.2}px)`;
});
