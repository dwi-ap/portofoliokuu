// JavaScript for animations
document.addEventListener('DOMContentLoaded', function() {
    const sections = document.querySelectorAll('section');

    sections.forEach(section => {
        section.style.opacity = 0;
        section.style.transform = 'translateY(20px)';
        
        window.addEventListener('scroll', () => {
            const sectionPosition = section.getBoundingClientRect().top;
            const screenPosition = window.innerHeight / 1.2;

            if (sectionPosition < screenPosition) {
                section.style.opacity = 1;
                section.style.transform = 'translateY(0)';
                section.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
            }
        });
    });
});
