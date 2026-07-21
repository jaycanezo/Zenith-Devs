// Wait for the page to load completely before running any code
document.addEventListener('DOMContentLoaded', function() {
    // Find important page elements
    const heroText = document.querySelector('.hero-text');
    const heroImage = document.querySelector('.hero-image');
    
    // Add animation classes to make header elements appear nicely when page loads
    heroText.classList.add('slide-in-left', 'stagger-delay-3');
    heroImage.classList.add('slide-in-right', 'stagger-delay-4');
    
    // Find all elements that should animate when scrolling
    const scrollElements = [
        ...document.querySelectorAll('.features h2'),
        ...document.querySelectorAll('.features-description'),
        ...document.querySelectorAll('.feature-item'),
        ...document.querySelectorAll('.features-image'),
        ...document.querySelectorAll('.tools h2'),
        ...document.querySelectorAll('.tool-icon'),
        ...document.querySelectorAll('.portfolio h2'),
        ...document.querySelectorAll('.portfolio p'),
        ...document.querySelectorAll('.slider-container'),
    ];
    
    // Make all these elements ready for fade-in animation when scrolled to
    scrollElements.forEach(el => {
        el.classList.add('scroll-fade-in');
    });
    
    // Add different timing delays to feature items so they appear one after another
    const featureItems = document.querySelectorAll('.feature-item');
    featureItems.forEach((item, index) => {
        const delayClass = `stagger-delay-${(index % 5) + 1}`;
        item.classList.add(delayClass);
    });
    
    // Check if an element is visible on screen
    function isElementInViewport(el) {
        const rect = el.getBoundingClientRect();
        return (
            rect.top <= (window.innerHeight || document.documentElement.clientHeight) * 0.85
        );
    }
    
    // Make elements visible when they come into view while scrolling
    function handleScrollAnimations() {
        scrollElements.forEach(el => {
            if (isElementInViewport(el)) {
                el.classList.add('visible');
            }
        });
    }
    
    // Run once when page loads to show initial visible elements
    handleScrollAnimations();
    
    // Watch for scrolling and animate elements as they appear
    window.addEventListener('scroll', handleScrollAnimations);
});