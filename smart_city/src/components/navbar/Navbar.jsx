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
                    <NavLink
                        to={"/"}
                        className="navbar-link"
                        onClick={toggleMenu}
                    >
                        Главная
                    </NavLink>
                    <NavLink
                        to={"/tech-capabilities"}
                        className="navbar-link"
                        onClick={toggleMenu}
                    >
                        Тех. возможности
                    </NavLink>
                    <NavLink
                        to={"/implementation-issues"}
                        className="navbar-link"
                        onClick={toggleMenu}
                    >
                        Проблемы реализации
                    </NavLink>
                    <NavLink
                        to={"/gallery"}
                        className="navbar-link"
                        onClick={toggleMenu}
                    >
                        Галерея
                    </NavLink>
                    <NavLink
                        to={"/contact-form"}
                        className="navbar-link"
                        onClick={toggleMenu}
                    >
                        Контакты
                    </NavLink>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
