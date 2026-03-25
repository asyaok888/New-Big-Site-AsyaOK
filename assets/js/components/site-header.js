class SiteHeader extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = `
            <nav class="fixed top-0 w-full z-50 border-b border-[#f5f5f4] glass">
                <div class="h-16 flex items-center justify-between max-w-6xl mx-auto px-6">
                    <div class="font-serif text-[9px] md:text-[10px] font-bold uppercase tracking-[0.2em] leading-[1.2] cursor-pointer shrink-0" onclick="window.scrollTo({top: 0, behavior: 'smooth'})">
                        Кинолог<br>Ася
                    </div>
                    
                    <!-- Desktop Menu -->
                    <div class="hidden md:flex flex-grow justify-center gap-4 lg:gap-10 text-[11px] font-medium uppercase tracking-[0.15em] text-[#86868b] px-4">
                        <a href="/" class="hover:text-[#1d1d1f] transition-colors">Обо&nbsp;мне</a>
                        <a href="/dressirovka-shchenka" class="hover:text-[#1d1d1f] transition-colors">Щенки</a>
                        <a href="/korrekciya-povedeniya-sobaki" class="hover:text-[#1d1d1f] transition-colors">Поведение</a>
                        <a href="/onlayn-konsultatsiya-kinologa" class="hover:text-[#1d1d1f] transition-colors">Онлайн</a>
                        <a href="/tseny" class="hover:text-[#1d1d1f] transition-colors">Цены</a>
                        <a href="/otzyvy" class="hover:text-[#1d1d1f] transition-colors">Отзывы</a>
                        <a href="/faq" class="hover:text-[#1d1d1f] transition-colors">FAQ</a>
                    </div>

                    <!-- Mobile Button (Center) -->
                    <div class="flex md:hidden justify-center">
                        <a href="https://t.me/AsyaOk888?text=Здравствуйте,%20Ася!%20Я%20с%20вашего%20сайта,%20нужна%20помощь%20с%20собакой." target="_blank" onclick="ym(107145180, 'reachGoal', 'tg_click');" class="bg-[#1d1d1f] text-white rounded-full font-bold uppercase inline-flex items-center justify-center transition-opacity hover:opacity-90 text-[12px] tracking-[0.1em] px-3 py-1.5">
                            Связаться
                        </a>
                    </div>

                    <!-- Mobile Burger (Right) -->
                    <button class="md:hidden bg-transparent border-none cursor-pointer p-2 flex justify-end text-[#1d1d1f]" id="menuToggle">
                        <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="4" x2="20" y1="12" y2="12"/><line x1="4" x2="20" y1="6" y2="6"/><line x1="4" x2="20" y1="18" y2="18"/></svg>
                    </button>

                    <!-- Desktop Button (Right) -->
                    <div class="hidden md:flex justify-end">
                        <a href="https://t.me/AsyaOk888?text=Здравствуйте,%20Ася!%20Я%20с%20вашего%20сайта,%20нужна%20помощь%20с%20собакой." target="_blank" onclick="ym(107145180, 'reachGoal', 'tg_click');" class="bg-[#1d1d1f] text-white rounded-full font-bold uppercase inline-flex items-center justify-center transition-opacity hover:opacity-90 text-[11px] tracking-[0.15em] px-5 py-2">
                            Связаться
                        </a>
                    </div>
                </div>

                <!-- Mobile Menu Overlay -->
                <div class="absolute top-full left-0 w-full bg-white border-b border-[#f5f5f4] p-8 text-center hidden flex-col gap-6 opacity-0 -translate-y-5 transition-all duration-300" id="mobileMenu">
                    <a href="/" class="text-[12px] font-bold uppercase tracking-[0.1em] text-[#86868b] hover:text-[#1d1d1f] transition-colors">Обо&nbsp;мне</a>
                    <a href="/dressirovka-shchenka" class="text-[12px] font-bold uppercase tracking-[0.1em] text-[#86868b] hover:text-[#1d1d1f] transition-colors">Щенки</a>
                    <a href="/korrekciya-povedeniya-sobaki" class="text-[12px] font-bold uppercase tracking-[0.1em] text-[#86868b] hover:text-[#1d1d1f] transition-colors">Поведение</a>
                    <a href="/onlayn-konsultatsiya-kinologa" class="text-[12px] font-bold uppercase tracking-[0.1em] text-[#86868b] hover:text-[#1d1d1f] transition-colors">Онлайн</a>
                    <a href="/tseny" class="text-[12px] font-bold uppercase tracking-[0.1em] text-[#86868b] hover:text-[#1d1d1f] transition-colors">Цены</a>
                    <a href="/otzyvy" class="text-[12px] font-bold uppercase tracking-[0.1em] text-[#86868b] hover:text-[#1d1d1f] transition-colors">Отзывы</a>
                    <a href="/faq" class="text-[12px] font-bold uppercase tracking-[0.1em] text-[#86868b] hover:text-[#1d1d1f] transition-colors">FAQ</a>
                </div>
            </nav>
        `;

        const menuToggle = this.querySelector('#menuToggle');
        const mobileMenu = this.querySelector('#mobileMenu');

        if (menuToggle && mobileMenu) {
            menuToggle.addEventListener('click', () => {
                if (mobileMenu.classList.contains('hidden')) {
                    mobileMenu.classList.remove('hidden');
                    mobileMenu.classList.add('flex');
                    // Small delay to allow display:flex to apply before animating opacity
                    setTimeout(() => {
                        mobileMenu.classList.remove('opacity-0', '-translate-y-5');
                        mobileMenu.classList.add('opacity-100', 'translate-y-0');
                    }, 10);
                } else {
                    mobileMenu.classList.remove('opacity-100', 'translate-y-0');
                    mobileMenu.classList.add('opacity-0', '-translate-y-5');
                    setTimeout(() => {
                        mobileMenu.classList.add('hidden');
                        mobileMenu.classList.remove('flex');
                    }, 300);
                }
            });
        }
    }
}

customElements.define('site-header', SiteHeader);
