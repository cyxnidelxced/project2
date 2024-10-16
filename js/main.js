let currentSlide = 0;
const slides = document.querySelectorAll('.carousel-item');
const indicatorsContainer = document.querySelector('.indicators');
const totalSlides = slides.length;
let autoplayInterval;
const caption = document.querySelectorAll('.caption');

// carousel and indicators
function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.style.opacity = (i === index) ? 1 : 0;
        slide.style.position = "absolute";
    });

    
    caption.forEach((cap, i) => {
        cap.style.opacity = (i === index) ? 1 : 0;
        cap.style.position="absolute";
        cap.style.visibility="visible";
    });

    const indicators = document.querySelectorAll('.indicator');
    indicators.forEach((indicator, i) => {
        indicator.classList.toggle('active', i === index);
    });
}

// next slide showing
function nextSlide() {
    currentSlide = (currentSlide + 1) % totalSlides;
    showSlide(currentSlide);
}

// previous slide showing
function prevSlide() {
    currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
    showSlide(currentSlide);
}

// current slide
function goToSlide(index) {
    currentSlide = index;
    showSlide(currentSlide);
}

// Indicator feature
function createIndicators() {
    for (let i = 0; i < totalSlides; i++) {
        const indicator = document.createElement('div');
        indicator.classList.add('indicator');
        if (i === 0) indicator.classList.add('active');
        indicator.addEventListener('click', () => goToSlide(i));
        indicatorsContainer.appendChild(indicator);
        indicator.style.position="relative";
    }
}

// Autoplay feature
function startAutoplay() {
    autoplayInterval = setInterval(nextSlide, 3000);
}

function stopAutoplay() {
    clearInterval(autoplayInterval);
}

// Event listeners to pause autoplay on hover
document.querySelector('.carousel').addEventListener('mouseenter', stopAutoplay);
document.querySelector('.carousel').addEventListener('mouseleave', startAutoplay);

// Initialize carousel
let images = document.querySelectorAll('.carousel-item');
images.forEach((img) => {
    img.style.opacity=0;
});
let left = document.querySelectorAll('.back');
left.forEach((btn) => {
    btn.style.left = "10px";
});
let right = document.querySelectorAll('.next');
right.forEach((btn) => {
    btn.style.right = "10px";
});
showSlide(currentSlide);
createIndicators();
startAutoplay();