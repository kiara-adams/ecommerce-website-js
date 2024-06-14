let currentIndex = 0;
const slides = document.querySelectorAll('.slide');
const totalSlides = slides.length;

function moveSlide(direction) {
    if (direction === 'next') {
        currentIndex = (currentIndex + 1) % totalSlides;
    } else {
        currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
    }
    const offset = -currentIndex * 100;
    document.querySelector('.carousel-inner').style.transform = `translateX(${offset}%)`;
}