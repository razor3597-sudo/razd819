let prevScrollPos = window.pageYOffset;
const navbar = document.getElementById("navbar");

window.onscroll = function() {
    let currentScrollPos = window.pageYOffset;
    if (prevScrollPos > currentScrollPos) {
        navbar.style.top = "0"; // Muncul
    } else {
        navbar.style.top = "-70px"; // Hilang
    }
    prevScrollPos = currentScrollPos;
};
