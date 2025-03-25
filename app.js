function toggleTheme() {
    document.body.classList.toggle('dark-mode');
    let icon = document.querySelector(".theme-toggle i");
    icon.classList.toggle("fa-sun");
    icon.classList.toggle("fa-moon");
}

function toggleMenu() {
    document.getElementById("navMenu").classList.toggle("open");
}