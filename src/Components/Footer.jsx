export const Footer = () => {
    return (
        <div id="footer-container">
            <div className="footer">
                <div className="footer-company">
                    <div className="nav-head">О компании</div>
                    <div className="footer-link"><a href="">Партнёрская программа</a></div>
                    <div className="footer-link"><a href="">Вакансии</a></div>
                </div>
                <div className="footer-menu">
                    <div className="nav-head">Меню</div>
                    <div className="menu-cols">
                        <div className="menu-col">
                            <div className="footer-link"><a href="">Расчёт стоимости</a></div>
                            <div className="footer-link"><a href="">Услуги</a></div>
                            <div className="footer-link"><a href="">Виджеты</a></div>
                            <div className="footer-link"><a href="">Интеграции</a></div>
                            <div className="footer-link"><a href="">Наши клиенты</a></div>
                        </div>
                        <div className="menu-col">
                            <div id="cases-desktop" className="footer-link"><a href="">Кейсы</a></div>
                            <div id="blago-desktop" className="footer-link"><a href="">Благодарственные письма</a></div>
                            <div id="blago-mobile" className="footer-link"><a href="">Благодарность клиентов</a></div>
                            <div id="cases-mobile" className="footer-link"><a href="">Кейсы</a></div>
                            <div className="footer-link"><a href="">Сертификаты</a></div>
                            <div className="footer-link"><a href="">Блок на YouTube</a></div>
                            <div className="footer-link"><a href="">Вопрос / Ответ</a></div>
                        </div>
                    </div>
                </div>
                <div className="footer-contacts">
                    <div className="nav-head">Контакты</div>
                    <div className="footer-contact">+7 555 555-55-55</div>
                    <div className="footer-contact">
                        <div><a href=""><img src="/images/telegram.svg" alt="telegram logo"/></a></div>
                        <div><a href=""><img src="/images/phone.svg" alt="phone logo"/></a></div>
                        <div><a href=""><img src="/images/wapp.svg" alt="whatsapp logo"/></a></div>
                    </div>
                    <div className="footer-contact" id="address">Москва, Путевой проезд 3с1, к 902</div>
                </div>
            </div>
            <div className="copyright">
                <div>©WELBEX 2022. Все права защищены.</div>
                <div><a href="">Политика конфиденциальности</a></div>
            </div>
        </div>

    )
}