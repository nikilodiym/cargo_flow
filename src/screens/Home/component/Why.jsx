import React from "react";
import "./Why.css";

import backgroundSave from "../../../assets/img/all/caskaOnBackground.jpeg"

export default function Why() {
    return (
        <section className="why">
            <h2>Чому обирають нас</h2>
            <div className="flex">
                <div className="why__grid">
                    <div className="why-card">🚚 Одна універсальна вантажівка</div>
                    <div className="why-card">⚡ Швидка доставка</div>
                    <div className="why-card">🧱 Будь-який тип вантажу</div>
                    <div className="why-card">💰 Доступна ціна</div>
                </div>

                {/* <div className="caska-background">
                    <img src={backgroundSave} alt="Caska on background" />
                </div> */}
            </div>


            <div className="why__footer">
                <div className="why__item">
                    📞 <span>(+380) 67 226 79 17</span>
                </div>

                <div className="why__item">
                    ✉️ <span>something@gmail.com</span>
                </div>

                <div className="why__item">
                    📍 <span>Вінницька обл. с. Сосонка</span>
                </div>
            </div>
        </section>
    );
}
