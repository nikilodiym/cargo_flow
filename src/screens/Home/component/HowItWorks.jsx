import React from "react";
import "./HowItWorks.css";

export default function HowItWorks() {
    return (
        <section className="steps">
            <h2>Як це працює</h2>

            <div className="steps__grid">
                <div className="step">
                    <span>1</span>
                    <h3>Заявка на перевезення</h3>
                    <p>Надішліть нам інформацію про вантаж.</p>
                </div>

                <div className="step">
                    <span>2</span>
                    <h3>Завантаження вантажівки</h3>
                    <p>Ми завантажуємо будь-який тип матеріалів.</p>
                </div>

                <div className="step">
                    <span>3</span>
                    <h3>Доставка в будь-яке місце</h3>
                    <p>Швидка та безпечна доставка.</p>
                </div>
            </div>
        </section>
    );
}