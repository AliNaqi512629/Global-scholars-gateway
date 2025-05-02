let currentSlideIndex = 0;
let slideInterval;
let slides;
let isTransitioning = false;

// Start the slideshow
function startSlideshow() {
    // Cache DOM elements
    slides = document.querySelectorAll('.slide');
    if (!slides.length) return;

    // Show first slide
    showSlides();

    // Change slide every 5 seconds
    slideInterval = setInterval(() => {
        if (!isTransitioning) {
            currentSlideIndex = (currentSlideIndex + 1) % slides.length;
            showSlides();
        }
    }, 5000);

    // Preload all images for smooth transitions
    slides.forEach(slide => {
        const img = slide.querySelector('img');
        if (img) {
            if (!img.complete) {
                img.onload = () => {
                    img.style.opacity = '1';
                };
            } else {
                img.style.opacity = '1';
            }
        }
    });
}

// Show current slide with smooth transition
function showSlides() {
    if (!slides || isTransitioning) return;
    
    isTransitioning = true;
    
    requestAnimationFrame(() => {
        // Remove active class from all slides
        slides.forEach(slide => {
            slide.classList.remove('active', 'next');
        });
        
        // Add active class to current slide
        slides[currentSlideIndex].classList.add('active');
        
        // Update dots
        updateDots();
        
        // Wait for transition to complete
        setTimeout(() => {
            isTransitioning = false;
        }, 1000); // Match this with CSS transition duration
    });
}

// Update navigation dots
function updateDots() {
    const dots = document.querySelectorAll('.dot');
    dots.forEach((dot, index) => {
        dot.classList.toggle('active', index === currentSlideIndex);
    });
}

// Manual navigation
function currentSlide(n) {
    if (isTransitioning) return;
    
    // Clear the automatic slideshow interval
    clearInterval(slideInterval);
    
    // Show the selected slide
    currentSlideIndex = n - 1;
    showSlides();
    
    // Restart the automatic slideshow
    startSlideshow();
}

// Initialize slideshow when page loads
document.addEventListener('DOMContentLoaded', startSlideshow);
