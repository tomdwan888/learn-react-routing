import React from 'react';
import './header.css';
import {Link} from "react-router-dom";


const Header = () => {
    return (
        <header className="header">
            <nav className="menu">
                <Link className="menu__btn" to="/main">Главная</Link>
                <Link className="menu__btn" to="/slider">Слайдер</Link>
                <Link className="menu__btn" to="/about">О нас</Link>
            </nav>
        </header>
    )
}

export default Header;