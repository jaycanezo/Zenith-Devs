document.addEventListener('DOMContentLoaded', function () {

    // Scroll animation for portfolio sections
    const scrollReveal = function () {
        const sections = document.querySelectorAll('.scroll-reveal');

        sections.forEach(section => {
            const sectionTop = section.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;

            if (sectionTop < windowHeight * 0.85) {
                if (!section.classList.contains('visible')) {
                    section.classList.add('visible');
                }
            }
        });
    };

    scrollReveal();
    window.addEventListener('scroll', scrollReveal);
});
