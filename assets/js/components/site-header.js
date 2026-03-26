class SiteHeader extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.render();
        this.initMenu();
    }

    render() {
        this.innerHTML = `
        <nav class="glass">
            <div class="container nav-inner">
                <div class="logo" onclick="window.location.href='/'" style="cursor: pointer;">
                    Кинолог<br>Ася
                </div>
                
                <!-- Desktop Menu -->
                <div class="desktop-menu">
                    <a href="/">Обо&nbsp;мне</a>
                    <a href="/dressirovka-shchenka">Щенки</a>
                    <a href="/korrekciya-povedeniya-sobaki">Поведение</a>
                    <a href="/onlayn-konsultatsiya-kinologa">Онлайн</a>
                    <a href="/tseny">Цены</a>
                    <a href="/otzyvy">Отзывы</a>
                    <a href="/faq">FAQ</a>
                </div>

                <!-- Mobile Button (Center) -->
                <div class="mobile-contact-btn">
                    <a href="https://t.me/AsyaOk888?text=Здравствуйте,%20Ася!%20Я%20с%20вашего%20сайта,%20нужна%20помощь%20с%20собакой." target="_blank" onclick="ym(107145180, 'reachGoal', 'tg_click');" class="btn-contact btn-contact-sm">
                        Связаться
                    </a>
                </div>

                <!-- Mobile Burger (Right) -->
                <button class="burger-btn" id="menuToggle" style="color: black;">
                    <svg xmlns="http://www.w3.org/2000/svg" class="icon" viewBox="0 0 24 24"><line x1="4" x2="20" y1="12" y2="12"/><line x1="4" x2="20" y1="6" y2="6"/><line x1="4" x2="20" y1="18" y2="18"/></svg>
                </button>

                <!-- Desktop Button (Right) -->
                <div class="desktop-contact-btn">
                    <a href="https://t.me/AsyaOk888?text=Здравствуйте,%20Ася!%20Я%20с%20вашего%20сайта,%20нужна%20помощь%20с%20собакой." target="_blank" onclick="ym(107145180, 'reachGoal', 'tg_click');" class="btn-contact btn-contact-lg">
                        Связаться
                    </a>
                </div>
            </div>

            <!-- Mobile Menu Overlay -->
            <div class="mobile-menu" id="mobileMenu">
                <a href="/" class="mobile-link">Обо&nbsp;мне</a>
                <a href="/dressirovka-shchenka" class="mobile-link">Щенки</a>
                <a href="/korrekciya-povedeniya-sobaki" class="mobile-link">Поведение</a>
                <a href="/onlayn-konsultatsiya-kinologa" class="mobile-link">Онлайн</a>
                <a href="/tseny" class="mobile-link">Цены</a>
                <a href="/otzyvy" class="mobile-link">Отзывы</a>
                <a href="/faq" class="mobile-link">FAQ</a>
            </div>
        </nav>
        `;
    }

    initMenu() {
        const menuToggle = this.querySelector('#menuToggle');
        const mobileMenu = this.querySelector('#mobileMenu');
        const menuIcon = menuToggle ? menuToggle.querySelector('svg') : null;
        const mobileLinks = this.querySelectorAll('.mobile-link');

        if (!menuToggle || !mobileMenu || !menuIcon) return;

        let isMenuOpen = false;

        const toggleMenu = () => {
            isMenuOpen = !isMenuOpen;
            if (isMenuOpen) {
                mobileMenu.classList.add('open');
                menuIcon.innerHTML = '<path d="M18 6 6 18"/><path d="m6 6 12 12"/>'; // X icon
            } else {
                mobileMenu.classList.remove('open');
                menuIcon.innerHTML = '<line x1="4" x2="20" y1="12" y2="12"/><line x1="4" x2="20" y1="6" y2="6"/><line x1="4" x2="20" y1="18" y2="18"/>'; // Menu icon
            }
        };

        menuToggle.addEventListener('click', toggleMenu);

        mobileLinks.forEach(link => {
            link.addEventListener('click', () => {
                if (isMenuOpen) toggleMenu();
            });
        });
    }
}

customElements.define('site-header', SiteHeader);
