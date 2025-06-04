import { useState } from "react";
import { Link, NavLink } from "react-router-dom";

import "./Navbar.css";

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen((prev) => !prev);
    };

    return (
        <nav id="navbar">
            <div className="navbar-container">
                <div className="navbar-header">
                    <Link className="navbar-logo">Умный Город</Link>

                    <button className="burger-button" onClick={toggleMenu}>
                        <span className="burger-line"></span>
                        <span className="burger-line"></span>
                        <span className="burger-line"></span>
                    </button>
                </div>

                <div className={`navbar-menu ${isMenuOpen ? "open" : ""}`}>
                    <NavLink to={"/"} className="navbar-link">
                        Главная
                    </NavLink>
                    <NavLink to={"/tech-capabilities"} className="navbar-link">
                        Тех. возможности
                    </NavLink>
                    <NavLink to={"/implementation-issues"} className="navbar-link">
                        Проблемы реализации
                    </NavLink>
                    <NavLink to={"/gallery"} className="navbar-link">
                        Галерея
                    </NavLink>
                    <NavLink to={"/contact-form"} className="navbar-link">
                        Контакты
                    </NavLink>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
