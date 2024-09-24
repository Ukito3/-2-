// Image Slider
const images = document.querySelectorAll('.slider-image');
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');
let currentIndex = 0;

function showImage(index) {
    images.forEach((img, i) => {
        img.classList.remove('active');
        if (i === index) {
            img.classList.add('active');
        }
    });
}

nextBtn.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % images.length;
    showImage(currentIndex);
});

prevBtn.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    showImage(currentIndex);
});

// Form Validation
const form = document.getElementById('contactForm');

form.addEventListener('submit', function(event) {
    event.preventDefault();
    const name = form.name.value;
    const email = form.email.value;
    const message = form.message.value;

    if (name && email && message) {
        alert('Message sent successfully!');
    } else {
        alert('Please fill in all fields.');
    }
});