document.getElementById("hamburger").addEventListener("click", function() {
    // Toggle the "open" class on the navbar when hamburger is clicked
    var nav = document.getElementById("navbar");
    nav.classList.toggle("open");

    // Toggle the aria-expanded attribute for accessibility
    var navLinks = document.querySelectorAll("nav li > a");
    navLinks.forEach(link => {
        const expanded = link.getAttribute("aria-expanded") === "true" || false;
        link.setAttribute("aria-expanded", !expanded);
    });
});