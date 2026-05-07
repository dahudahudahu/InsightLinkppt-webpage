let currentSlide = 0;
const slides = document.querySelectorAll('.slide');
const totalSlides = slides.length;
const prevButton = document.getElementById('prev');
const nextButton = document.getElementById('next');
const currentSlideSpan = document.getElementById('current-slide');
const totalSlidesSpan = document.getElementById('total-slides');

totalSlidesSpan.textContent = totalSlides;

function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.classList.toggle('active', i === index);
    });
    currentSlideSpan.textContent = index + 1;
    prevButton.disabled = index === 0;
    nextButton.disabled = index === totalSlides - 1;
}

prevButton.addEventListener('click', () => {
    if (currentSlide > 0) {
        currentSlide--;
        showSlide(currentSlide);
    }
});

nextButton.addEventListener('click', () => {
    if (currentSlide < totalSlides - 1) {
        currentSlide++;
        showSlide(currentSlide);
    }
});

// 键盘导航
document.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowLeft' && currentSlide > 0) {
        currentSlide--;
        showSlide(currentSlide);
    } else if (e.key === 'ArrowRight' && currentSlide < totalSlides - 1) {
        currentSlide++;
        showSlide(currentSlide);
    }
});

showSlide(currentSlide);