document.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", function(e) {
        e.preventDefault();
        document.querySelector(".loading-screen").classList.remove("hide");
        setTimeout(() => {
            window.location.href = this.href;
        }, 500);
    });
});
