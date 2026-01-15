import React, { useState } from "react";
import "./Banner.css";
import truck from "../../../assets/img/home/Truck.png";

export default function Banner() {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const toggleModal = () => {
        setIsModalOpen(!isModalOpen);
    };

    return (
        <section className="banner">
            <div className="banner__content">
                <h1>
                    Одна вантажівка <span>Безмежні можливості.</span>
                </h1>

                <p>Ми перевозимо все — від дров до будівельних матеріалів</p>

                <div className="hero__buttons">
                    {/* Додаємо подію onClick */}
                    <button className="btn-primary" onClick={toggleModal}>
                        Отримати консультацію
                    </button>
                    <button className="btn-secondary">Телефон: (+380) 67 226 79 17</button>
                </div>
            </div>

            <div className="banner__image">
                <img src={truck} alt="Truck" />
            </div>

            <div className="banner__line"></div>
            <div className="banner__circle"></div>

            {/* Модальне вікно */}
            {isModalOpen && (
                <div className="modal-overlay" onClick={toggleModal}>
                    <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                        <button className="modal-close" onClick={toggleModal}>&times;</button>
                        <h2>Зв'язатися з нами</h2>
                        <p>Залиште ваші контакти або зателефонуйте нам прямо зараз:</p>

                        <div className="modal-contacts">
                            <a href="tel:+380672267917" className="modal-link">📞 +380 67 226 79 17</a>
                            <a href="https://t.me/nikitolodiym" target="_blank" className="modal-link telegram">✈️ Telegram</a>
                            <a href="viber://chat?number=%0672267917" className="modal-link viber">💜 Viber</a>
                        </div>

                        <button className="btn-primary modal-submit" onClick={toggleModal}>
                            Зрозуміло
                        </button>
                    </div>
                </div>
            )}
        </section>
    );
}