let currentSlide = 0;

function showSlide(index) {
    const slides = document.querySelectorAll('.carousel-slide');
    if (index >= slides.length) currentSlide = 0;
    if (index < 0) currentSlide = slides.length - 1;
    const newTranslateValue = -currentSlide * 100 + '%';
    document.querySelector('.carousel').style.transform = `translateX(${newTranslateValue})`;
}

function nextSlide() {
    currentSlide++;
    showSlide(currentSlide);
}

function prevSlide() {
    currentSlide--;
    showSlide(currentSlide);
}

// Auto-slide every 5 seconds
setInterval(() => {
    nextSlide();
}, 5000);
