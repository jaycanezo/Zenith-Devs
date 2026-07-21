document.addEventListener('DOMContentLoaded', function() {
    
    // Hero section animation
    animateHeroSection();
    
    // Form field animations
    animateFormFields();
    
    // Intersection Observer for fade-in animations
    setupFadeInAnimations();
    
    // Animated partner logos hover effect
    setupPartnerLogosAnimation();
    
    // Testimonial cards animation
    animateTestimonialCards();
    
    // Map animation
    animateMap();
});

// Function to animate the hero section
function animateHeroSection() {
    const heroText = document.querySelector('.hero-text h1');
    const heroImage = document.querySelector('.hero-image img');
    
    if (heroText) {
        // Split text into words for staggered animation
        const text = heroText.innerHTML;
        const words = text.split(/(<br>|<span.*?<\/span>)/g);
        let newText = '';
        
        words.forEach((word, index) => {
            if (word.includes('<span') || word === '<br>') {
                newText += word;
            } else {
                const wordArray = word.split(' ');
                wordArray.forEach((w, i) => {
                    newText += `<span class="hero-word" style="animation-delay: ${(index * 0.1 + i * 0.05).toFixed(2)}s">${w} </span>`;
                });
            }
        });
        
        heroText.innerHTML = newText;
    }
    
    if (heroImage) {
        heroImage.style.transform = 'scale(1.05)';
        heroImage.style.opacity = '0';
        
        setTimeout(() => {
            heroImage.style.transition = 'transform 1.2s ease-out, opacity 1s ease-out';
            heroImage.style.transform = 'scale(1)';
            heroImage.style.opacity = '1';
        }, 300);
    }
}

// Function to animate form fields
function animateFormFields() {
    const formFields = document.querySelectorAll('.contact-form input, .contact-form textarea');
    
    formFields.forEach((field, index) => {
        field.style.opacity = '0';
        field.style.transform = 'translateY(20px)';
        field.style.transition = 'opacity 0.5s ease, transform 0.5s ease, border-color 0.3s';
        field.style.transitionDelay = `${0.3 + index * 0.1}s`;
        
        setTimeout(() => {
            field.style.opacity = '1';
            field.style.transform = 'translateY(0)';
        }, 100);
        
        // Add focus/blur animations
        field.addEventListener('focus', () => {
            field.style.transform = 'scale(1.01)';
            field.style.boxShadow = '0 6px 12px rgba(93, 130, 160, 0.15)';
        });
        
        field.addEventListener('blur', () => {
            field.style.transform = 'scale(1)';
            field.style.boxShadow = '5px 5px 10px rgba(0,0,0,0.1)';
        });
    });
    
    // Submit button animation
    const submitBtn = document.getElementById('submit');
    if (submitBtn) {
        submitBtn.addEventListener('mouseenter', () => {
            submitBtn.style.transition = 'all 0.3s ease';
            submitBtn.style.transform = 'scale(1.1)';
        });
        
        submitBtn.addEventListener('mouseleave', () => {
            submitBtn.style.transform = 'scale(1)';
        });
        
        submitBtn.addEventListener('click', function(e) {
            if (!e.defaultPrevented) {
                // Create ripple effect on button click
                const ripple = document.createElement('span');
                ripple.classList.add('submit-ripple');
                submitBtn.appendChild(ripple);
                setTimeout(() => {
                    ripple.remove();
                }, 600);
            }
        });
    }
}

// Function to set up fade-in animations
function setupFadeInAnimations() {
    const fadeElements = document.querySelectorAll('.fade-in');
    
    // Configure the observer
    const observerOptions = {
        root: null, // use viewport as root
        rootMargin: '0px',
        threshold: 0.15 // element is 15% visible
    };
    
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                // Unobserve after animation is triggered to improve performance
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);
    
    // Start observing all fade-in elements
    fadeElements.forEach(element => {
        observer.observe(element);
    });
    
    // Initial check for elements that are already in view on page load
    setTimeout(() => {
        fadeElements.forEach(element => {
            const rect = element.getBoundingClientRect();
            if (rect.top < window.innerHeight && rect.bottom >= 0) {
                element.classList.add('visible');
                observer.unobserve(element);
            }
        });
    }, 100);
}

// Function to set up partner logos animation
function setupPartnerLogosAnimation() {
    const logos = document.querySelectorAll('.partners-grid img');
    
    logos.forEach(logo => {
        logo.addEventListener('mouseenter', () => {
            logo.style.transition = 'transform 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)';
            logo.style.transform = 'scale(1.1) rotate(2deg)';
        });
        
        logo.addEventListener('mouseleave', () => {
            logo.style.transition = 'transform 0.3s ease';
            logo.style.transform = 'scale(1) rotate(0deg)';
        });
    });
}

// Function to animate testimonial cards
function animateTestimonialCards() {
    const cards = document.querySelectorAll('.testimonial-card');
    const slideRadios = document.querySelectorAll('.radio-buttons');
    
    // Add hover effect to cards
    cards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            card.style.transition = 'transform 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275), box-shadow 0.3s ease';
            card.style.transform = 'translateY(-10px)';
            card.style.boxShadow = '0 10px 20px rgba(0,0,0,0.15)';
        });
        
        card.addEventListener('mouseleave', () => {
            card.style.transition = 'transform 0.3s ease, box-shadow 0.3s ease';
            card.style.transform = 'translateY(-5px)';
            card.style.boxShadow = '0 4px 8px rgba(0,0,0,0.1)';
        });
    });
    
    // Add pulse animation to radio controls
    slideRadios.forEach((radio, index) => {
        radio.addEventListener('change', () => {
            const labels = document.querySelectorAll('.carousel-controls label');
            labels[index].classList.add('pulse-animation');
            
            setTimeout(() => {
                labels[index].classList.remove('pulse-animation');
            }, 500);
        });
    });
    
    // Auto slide functionality
    let currentSlide = 1; // Start with slide 1
    const autoSlideInterval = 5000; // 5 seconds per slide
    
    const autoSlide = setInterval(() => {
        currentSlide = (currentSlide % 3) + 1; // Cycle between 1, 2, 3
        document.getElementById(`slide${currentSlide}`).checked = true;
    }, autoSlideInterval);
    
    // Stop auto sliding when user manually changes slides
    slideRadios.forEach(radio => {
        radio.addEventListener('change', () => {
            clearInterval(autoSlide);
            // Update current slide based on user selection
            currentSlide = parseInt(radio.id.replace('slide', ''));
        });
    });
}

// Function to animate map
function animateMap() {
    const map = document.querySelector('.google-map');
    
    if (map) {
        const observerOptions = {
            threshold: 0.3
        };
        
        const observer = new IntersectionObserver(entries => {
            if (entries[0].isIntersecting) {
                map.style.transition = 'transform 0.8s ease-out, opacity 0.8s ease-out';
                map.style.transform = 'scale(1)';
                map.style.opacity = '1';
                observer.unobserve(map);
            }
        }, observerOptions);
        
        // Set initial state
        map.style.transform = 'scale(0.95)';
        map.style.opacity = '0';
        
        observer.observe(map);
    }
}