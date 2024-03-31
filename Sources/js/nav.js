document.addEventListener("DOMContentLoaded", function () {
    var navbar = document.querySelector(".navbar");
    //Hacer transparente la barra
    window.addEventListener("scroll", function () {
        if (window.scrollY > navbar.offsetHeight) {
            navbar.classList.add("darken-bg");
        } else {
            navbar.classList.remove("darken-bg");
        }
    });
});