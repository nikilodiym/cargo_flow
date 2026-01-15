import React, { useState } from "react";
import "./Header.css";


export default function Header() {
    const [open, setOpen] = useState(false);

    return (
        <header className="header">

            <div className="burger" onClick={() => setOpen(!open)}>
                <span></span>
                <span></span>
                <span></span>
            </div>
            <h1 className="header-logo"><a href="/">logistic</a></h1>

            <nav className={`header-nav ${open ? "open" : ""}`}>
                <a href="/">Home</a>
                <a href="/about">About</a>
                <a href="/services">Services</a>
                <a href="/news">News</a>
                <a href="" className="added-in-mobil-arrientation-block">Get a Quote</a>
            </nav>

            <button className="header-btn">Get a Quote</button>

        </header>
    );
}