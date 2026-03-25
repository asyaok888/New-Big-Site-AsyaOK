class SiteFooter extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = `
            <footer class="text-center py-12 px-6 text-[12px] text-[#86868b] border-t border-[#f5f5f4] font-sans leading-relaxed">
                <div class="flex flex-wrap justify-center gap-4 mb-8 text-[10px] font-medium uppercase tracking-[0.2em]">
                    <a href="/dressirovka-shchenka" class="hover:text-[#1d1d1f] transition-colors">Дрессировка щенка</a>
                    <a href="/korrekciya-povedeniya-sobaki" class="hover:text-[#1d1d1f] transition-colors">Коррекция поведения</a>
                    <a href="/onlayn-konsultatsiya-kinologa" class="hover:text-[#1d1d1f] transition-colors">Онлайн-консультация</a>
                    <a href="/tseny" class="hover:text-[#1d1d1f] transition-colors">Цены</a>
                    <a href="/faq" class="hover:text-[#1d1d1f] transition-colors">FAQ</a>
                </div>
                <div class="flex justify-center gap-8 mb-8 text-[10px] font-medium uppercase tracking-[0.2em]">
                    <a href="https://t.me/AsyaOk888?text=Здравствуйте,%20Ася!%20Я%20с%20вашего%20сайта,%20нужна%20помощь%20с%20собакой." target="_blank" onclick="ym(107145180, 'reachGoal', 'tg_click');" class="hover:text-[#1d1d1f] transition-colors">Telegram</a>
                    <a href="https://max.ru/u/f9LHodD0cOIuUk0wJU63_uVTV3DvLiPDlcaCDqar8aNBHLe8t3W2jpSe8jA" target="_blank" onclick="ym(107145180, 'reachGoal', 'max_click');" class="hover:text-[#1d1d1f] transition-colors">MAX</a>
                    <a href="https://vk.com/asyaok" target="_blank" onclick="ym(107145180, 'reachGoal', 'vk_click');" class="hover:text-[#1d1d1f] transition-colors">Вконтакте</a>
                </div>

                <p class="mb-1">© 2026 Ася Окорочкова. Все права защищены.</p>
                <p class="mb-3">Плательщик НПД Окорочкова Анастасия Игоревна, ИНН:&nbsp;772271236536</p>
                
                <p class="mb-4">
                    <a href="/policy.html" target="_blank" class="underline hover:text-[#1d1d1f] transition-colors mr-5">Политика конфиденциальности</a>
                    <a href="/oferta.html" target="_blank" class="underline hover:text-[#1d1d1f] transition-colors">Договор-оферта</a>
                </p>
                
                <p class="text-[10px] max-w-[600px] mx-auto leading-relaxed opacity-80">
                    Данный интернет-сайт носит исключительно информационный характер и&nbsp;ни&nbsp;при каких условиях не&nbsp;является публичной офертой, определяемой положениями ч.&nbsp;2 ст.&nbsp;437 Гражданского кодекса Российской Федерации.
                </p>
            </footer>
        `;
    }
}

customElements.define('site-footer', SiteFooter);
