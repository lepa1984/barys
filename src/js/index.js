"use strict";
window.addEventListener("DOMContentLoaded", () => {
    const hamburger = document.querySelectorAll(".hamburger");
    const menu = document.querySelector(".header__menu");
    const body = document.querySelector("body");
    hamburger.forEach((hamburger) => {
        hamburger.addEventListener("click", (event) => {
            hamburger.classList.toggle("active");
            menu.classList.toggle("active");
            body.classList.toggle("body-active");
        });
    });
});
