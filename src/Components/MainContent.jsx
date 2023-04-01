export const MainContent = () => {
    return (
        <div className="main-content">
            <div id="bg-effects-mobile">
                <img id="red-light-mobile" src="/images/red_light.png" alt="red light"/>
                <img id="purple-light-mobile" src="/images/purple_light.png" alt="purple light"/>
                <img id="red-ball-mobile" src="/images/red_ball_mobile.svg" alt="red ball"/>
                <img id="purple-ball-mobile" src="/images/purple_ball.svg" alt="purple ball"/>
            </div>
            <div className="content-statement">
                <div>Зарабатывайте больше <br/><span>с WELBEX</span></div>
                <div>Развиваем и&nbsp;контролируем <br/>продажи за&nbsp;вас</div>
            </div>
            <div className="content-info">
                <div>Вместе с&nbsp;<span id="grad-1">бесплатной</span> <br/> <span id="grad-2">консультацией</span> мы&nbsp;дарим:</div>
                <div id="bonuses-desktop" className="bonuses">
                    <div className="bonus">
                        <div>Виджеты</div>
                        <div>30 готовых решений</div>
                    </div>
                    <div className="bonus">
                        <div>Dashboard</div>
                        <div>с показателями вашего бизнеса</div>
                    </div>
                    <div className="bonus">
                        <div>Skype Аудит</div>
                        <div>отдела продаж <br/>и CRM системы</div>
                    </div>
                    <div className="bonus">
                        <div>35 дней</div>
                        <div>использования CRM</div>
                    </div>
                </div>
                <button id="action-button">Получить консультацию</button>
                <div id="bonuses-mobile" className="bonuses-mobile">
                    <div className="bonus-mobile">
                        <span>—</span> Skype аудит
                    </div>
                    <div className="bonus-mobile">
                        <span>—</span> 30 виджетов
                    </div>
                    <div className="bonus-mobile">
                        <span>—</span> Dashboard
                    </div>
                    <div className="bonus-mobile">
                        <span>—</span> Месяц amoCRM
                    </div>
                </div>
            </div>
        </div>
    )
}