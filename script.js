// MOBILE MENU
const menu = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");

menu.addEventListener("click", () => {
    navLinks.style.display = navLinks.style.display === "flex" ? "none" : "flex";
});

// FORM SUBMIT
const form = document.getElementById("form");

form.addEventListener("submit", (e) => {
    e.preventDefault();
    alert("Application Submitted 🚀");
});