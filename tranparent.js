// Function to handle navbar transparency on scroll
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.backgroundColor = 'rgba(0, 0, 0, 0.8)';
    } else {
        navbar.style.backgroundColor = 'transparent';
    }
});

// Function to scroll to specific section
function scrollToSection(sectionId) {
    document.getElementById(sectionId).scrollIntoView({ behavior: 'smooth' });
}

// Function to animate articles
document.addEventListener('DOMContentLoaded', () => {
    const sections = document.querySelectorAll('section');
    sections.forEach((section, index) => {
        setTimeout(() => {
            section.style.opacity = '1';
            section.style.animation = 'slideIn 1s ease-in-out';
        }, index * 500);
    });
});

// Function to toggle sidebar visibility
function toggleSidebar() {
    const sidebar = document.querySelector('.sidebar');
    const toggleButton = document.querySelector('.sidebar-toggle');
    
    if (sidebar.style.left === '10px') {
        sidebar.style.left = '-200px';
        toggleButton.textContent = '☰ Open Sidebar';
    } else {
        sidebar.style.left = '10px';
        toggleButton.textContent = '✖ Close Sidebar';
    }
}

// Function to handle image slider
let slideIndex = 0;
showSlides();

function showSlides() {
    const slides = document.querySelectorAll('.slide');
    slides.forEach(slide => slide.style.display = 'none');
    slideIndex++;
    if (slideIndex > slides.length) { slideIndex = 1; }
    slides[slideIndex - 1].style.display = 'block';
    setTimeout(showSlides, 4000); // Change image[_{{{CITATION{{{_1{](https://github.com/antydemant/lessons-2020/tree/0c6095f45bfd841914ac8e7e25f8c9df273dea69/02-closure-and-context%2Fhomework%2FREADME.md)[_{{{CITATION{{{_2{](https://github.com/fireun/Masomon-Online-Shopping/tree/6fa264f2c43c095aa821a7eafd80b8ca66a77afe/user%2FcancellationRequest.php)[_{{{CITATION{{{_3{](https://github.com/ryanvaugarni/tp_LEQUIPE/tree/180f084ba983a222b38f212d0abe94e9aab02e34/readme.md)[_{{{CITATION{{{_4{](https://github.com/blank-4/exercises-jeremymarques/tree/8dc647f821fae7d76d34f6771b1992b1fcc56edd/css%2Flesson5%2Fexercise2%2FREADME.md)
    }