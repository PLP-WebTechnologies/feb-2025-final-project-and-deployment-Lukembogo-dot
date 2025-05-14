// Image Slider Functionality
let currentSlide = 0;
const slides = document.querySelectorAll('.slider img');

function changeSlide() {
    slides[currentSlide].style.transform = 'translateX(-100%)';
    currentSlide = (currentSlide + 1) % slides.length;
    slides[currentSlide].style.transform = 'translateX(0)';
}

setInterval(changeSlide, 3000);

// Form Validation for Contact Page
const form = document.querySelector('form');
form.addEventListener('submit', function (event) {
    const name = document.querySelector('#name').value;
    const email = document.querySelector('#email').value;
    if (!name || !email) {
        alert('Please fill in all fields');
        event.preventDefault();
    }
});
