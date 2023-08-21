document.addEventListener("DOMContentLoaded", function () {
    const menuIcon = document.querySelector(".menu-icon");
    const nav = document.getElementById("nav");

    menuIcon.addEventListener("click", function () {
        nav.classList.toggle("nav-visible"); // Alterna a classe para exibir ou esconder o menu
    });
});

