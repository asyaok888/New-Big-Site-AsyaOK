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
    const cookieNotice = document.getElementById('cookieNotice');
    const acceptCookiesBtn = document.getElementById('acceptCookies');

    if (cookieNotice && acceptCookiesBtn) {
        if (!localStorage.getItem('cookiesAccepted')) {
            setTimeout(() => {
                cookieNotice.classList.remove('translate-y-full');
            }, 1000);
        }

        acceptCookiesBtn.addEventListener('click', () => {
            localStorage.setItem('cookiesAccepted', 'true');
            cookieNotice.classList.add('translate-y-full');
        });
    }
});
