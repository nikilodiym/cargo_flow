import React from "react";
import "./Types.css";

import sand from "../../../assets/img/all/sand.png";
import gravel from "../../../assets/img/all/gravel.png";
import stone from "../../../assets/img/all/stone.png";
import dustbin from "../../../assets/img/all/dustbin.png";

export default function Types() {
    return (
        <section className="types">
            <h2>Типи вантажів, які ми перевозимо</h2>

            <div className="types__grid">
                <div className="type-card">
                    <img src={dustbin} alt="Dustbin" />
                    <h3>Будівельне сміття</h3>
                </div>

                <div className="type-card">
                    <img src={sand} alt="Sand" />
                    <h3>Пісок (митий)</h3>
                </div>

                <div className="type-card">
                    <img src={gravel} alt="Gravel" />
                    <h3>Щебінь</h3>
                </div>

                <div className="type-card">
                    <img src={stone} alt="Stone" />
                    <h3>Каміння</h3>
                </div>
            </div>
        </section>
    );
}