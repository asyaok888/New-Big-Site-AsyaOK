class SiteFooter extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.render();
    }

    render() {
        this.innerHTML = `
        <footer style="text-align: center; padding: 48px 24px; font-size: 12px; color: var(--color-gray); border-top: 1px solid var(--color-stone-100); font-family: var(--font-sans); line-height: 1.6;">
            <div style="display: flex; flex-wrap: wrap; justify-content: center; gap: 16px; margin-bottom: 32px; font-size: 10px; font-weight: 500; text-transform: uppercase; letter-spacing: 0.2em; color: var(--color-gray);">
                <a href="/kinolog-v-moskve">Кинолог в Москве</a>
                <a href="/kinolog-v-lefortovo">Кинолог в Лефортово</a>
                <a href="/okd-ugs-bh">ОКД / УГС / BH</a>
            </div>
            <div style="display: flex; justify-content: center; gap: 32px; margin-bottom: 32px; font-size: 10px; font-weight: 500; text-transform: uppercase; letter-spacing: 0.2em;">
                <a href="https://t.me/AsyaOk888?text=Здравствуйте,%20Ася!%20Я%20с%20вашего%20сайта,%20нужна%20помощь%20с%20собакой." target="_blank" onclick="ym(107145180, 'reachGoal', 'tg_click');" style="color: var(--color-gray); text-decoration: none; transition: color 0.2s;">Telegram</a>
                <a href="https://max.ru/u/f9LHodD0cOIuUk0wJU63_uVTV3DvLiPDlcaCDqar8aNBHLe8t3W2jpSe8jA" target="_blank" onclick="ym(107145180, 'reachGoal', 'max_click');" style="color: var(--color-gray); text-decoration: none; transition: color 0.2s;">MAX</a>
                <a href="https://vk.com/asyaok" target="_blank" onclick="ym(107145180, 'reachGoal', 'vk_click');" style="color: var(--color-gray); text-decoration: none; transition: color 0.2s;">Вконтакте</a>
            </div>

            <p style="margin-bottom: 5px;">© 2026 Ася Окорочкова. Все права защищены.</p>
            <p style="margin-bottom: 10px;">Плательщик НПД Окорочкова Анастасия Игоревна, ИНН:&nbsp;772271236536</p>
            
            <p style="margin-bottom: 15px;">
                <a href="policy.html" target="_blank" style="color: var(--color-gray); text-decoration: underline; margin-right: 20px;">Политика конфиденциальности</a>
                <a href="oferta.html" target="_blank" style="color: var(--color-gray); text-decoration: underline;">Договор-оферта</a>
            </p>
            
            <p style="font-size: 10px; color: var(--color-gray); max-width: 600px; margin: 0 auto; line-height: 1.4; opacity: 0.8;">
                Данный интернет-сайт носит исключительно информационный характер и&nbsp;ни&nbsp;при каких условиях не&nbsp;является публичной офертой, определяемой положениями ч.&nbsp;2 ст.&nbsp;437 Гражданского кодекса Российской Федерации.
            </p>
        </footer>
        `;
    }
}

customElements.define('site-footer', SiteFooter);
