export function initAnimations() {
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    document.querySelectorAll('.fade-in').forEach(element => {
        observer.observe(element);
    });
}

export function initCookieNotice() {
    const cookieNotice = document.getElementById('cookieNotice');
    const acceptCookiesBtn = document.getElementById('acceptCookies');

    if (cookieNotice && acceptCookiesBtn) {
        try {
            if (!localStorage.getItem('cookieAccepted')) {
                setTimeout(() => {
                    cookieNotice.classList.add('show');
                }, 1000);
            }
        } catch (e) {
            setTimeout(() => {
                cookieNotice.classList.add('show');
            }, 1000);
        }

        acceptCookiesBtn.addEventListener('click', () => {
            try {
                localStorage.setItem('cookieAccepted', 'true');
            } catch (e) {
                // Ignore
            }
            cookieNotice.classList.remove('show');
        });
    }
}
