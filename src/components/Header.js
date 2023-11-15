import React from 'react';

const Header = () => (
    <header className="header container">
        <nav className="navigation-menu">
            <button className="button nav__button">Projects</button>
            <div className="dropdown-content">
                <a href="https://felipebazza.github.io/indecision-app/">Indecision App - React, Webpack, SASS</a>
            </div>
        </nav>
    </header>
);

export default Header;
