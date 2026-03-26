import './components/site-header.js';
import './components/site-footer.js';

document.addEventListener('DOMContentLoaded', () => {
    // Fade-in animation observer
    const fadeElements = document.querySelectorAll('.fade-in');
    
    if (fadeElements.length > 0) {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                    // Optional: stop observing once visible
                    // observer.unobserve(entry.target);
                }
            });
        }, {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        });

        fadeElements.forEach(element => {
            observer.observe(element);
        });
    }

    // Cookie Notice
    const cookieNotice = document.getElementById('cookie-notice');
    if (cookieNotice) {
        try {
            if (!localStorage.getItem('cookieAccepted')) {
                cookieNotice.style.display = 'flex';
            }
        } catch (e) {
            cookieNotice.style.display = 'flex';
        }
    }
});

// Global function for cookie acceptance (used in onclick)
window.acceptCookies = function() {
    const cookieNotice = document.getElementById('cookie-notice');
    if (cookieNotice) {
        cookieNotice.style.display = 'none';
        try {
            localStorage.setItem('cookieAccepted', 'true');
        } catch (e) {}
    }
};
