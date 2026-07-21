// Image carousel (keep your existing carousel code)
const images = [
    'https://i.ytimg.com/vi/3hwQ-rtj9I8/maxresdefault.jpg',
    'https://languagetraining.com/wp-content/uploads/2017/11/Business-etiquette.jpg',
    'https://th.bing.com/th/id/OIP.EPnz9q7W1uPDPwaMzQva7gHaFj?rs=1&pid=ImgDetMain',
    'https://www.ringcentral.com/gb/en/blog/wp-content/uploads/2021/05/working-on-plans-in-board-room-scaled.jpg',
    'https://wallpapercave.com/wp/wp6673691.jpg',
    'https://th.bing.com/th/id/OIP.9Zt4jAYxwmOUleglqTCeRwHaE9?rs=1&pid=ImgDetMain',
    'https://freerangestock.com/sample/149108/portrait-of-group-of-multiethnic-business-people.jpg'
];

document.getElementById('carousel').innerHTML = images.map((src, i) => 
    `<div class="item" id="slide-${i}">
        <img src="${src}" alt="Image ${i+1}">
    </div>`
).join('');

// Wait for the page to load completely before running any code
document.addEventListener('DOMContentLoaded', function() {
    // Find important page elements
    const header = document.querySelector('header');
    const logo = document.querySelector('.logo');
    const navLinksEl = document.querySelector('.nav-links');
    const textContent = document.querySelector('.text-content');
    const imageContainer = document.querySelector('.image-container');
    const heading = document.querySelector('.heading');
    const description = document.querySelector('.description');
    const video = document.querySelector('.video');
    
    // Add animation classes to make header elements appear nicely when page loads

    textContent.classList.add('slide-in-left', 'stagger-delay-3');
    imageContainer.classList.add('slide-in-right', 'stagger-delay-4');
    heading.classList.add('fade-in', 'stagger-delay-3');
    description.classList.add('fade-in', 'stagger-delay-4');
    if (video) video.classList.add('fade-in', 'stagger-delay-5');
    
    // Find all elements that should animate when scrolling
    const scrollElements = [
        ...document.querySelectorAll('.vision h1'),
        ...document.querySelectorAll('.vision-heading'),
        ...document.querySelectorAll('.vision-row1-content'),
        ...document.querySelectorAll('.history h1'),
        ...document.querySelectorAll('.history_description'),
        ...document.querySelectorAll('.carousel'),
    ];
    
    // Make all these elements ready for fade-in animation when scrolled to
    scrollElements.forEach(el => {
        el.classList.add('scroll-fade-in');
    });
    
    // Add different timing delays to vision row items so they appear one after another
    const visionItems = document.querySelectorAll('.vision-row1-content');
    visionItems.forEach((item, index) => {
        const delayClass = `stagger-delay-${index + 1}`;
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