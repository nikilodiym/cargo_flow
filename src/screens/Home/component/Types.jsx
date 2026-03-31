import React from "react";
import "./Types.css";

export default function Types() {
  return (
    <section className="types">
      <h2>Типи вантажів, які ми перевозимо</h2>

      <div className="types__grid">
        <div className="type-card dustbin">
          <h3>Будівельне сміття</h3>
        </div>

        <div className="type-card sand">
          <h3>Пісок (митий)</h3>
        </div>

        <div className="type-card gravel">
          <h3>Щебінь</h3>
        </div>

        <div className="type-card stone">
          <h3>Каміння</h3>
        </div>
      </div>
    </section>
  );
}
