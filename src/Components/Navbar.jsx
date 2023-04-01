import React from 'react'

export const Navbar = () => {
    return (
        <div className="navbar">
            <div className="logo">
                <img src="/images/logo_welbex.svg" alt="welbex logo" />
                <div>крупный интегратор CRM в&nbsp;России и&nbsp;ещё 8&nbsp;странах</div>
            </div>
            <div className="menu">
                <div className="section"><a href="https://welbex.ru/">Услуги</a></div>
                <div className="section"><a href="https://welbex.ru/">Виджеты</a></div>
                <div className="section"><a href="https://welbex.ru/">Интеграции</a></div>
                <div className="section"><a href="https://welbex.ru/">Кейсы</a></div>
                <div className="section"><a href="https://welbex.ru/">Сертификаты</a></div>
            </div>
            <div className="contacts">
                <div className="contact">+7 555 555-55-55</div>
                <div id="messengers">
                    <div className="contact"><a href=""><img src="./images/telegram.svg" alt="telegram logo" /></a></div>
                    <div className="contact"><a href=""><img src="./images/phone.svg" alt="phone logo" /></a></div>
                    <div className="contact"><a href=""><img src="./images/wapp.svg" alt="whatsapp logo" /></a></div>
                </div>
            </div>
        </div>
    )
}