import React from 'react';

const Header = () => (
    <header className="header">
        <nav className="navigation-menu">
            <button className="button nav__button">
                Training Projects
                <div className="dropdown-content">
                    <a href="https://felipebazza.github.io/indecision-app/">Indecision App - React, Webpack, SASS</a>
                    <a className='wip' href="https://felipebazza.github.io/expensify-app/">Expensify App - React, Redux, Webpack, SASS, Jest</a>
                </div>
            </button>
            <button className="button nav__button">
                Portfolio Magento 2 / Adobe Commerce
                <div className="dropdown-content">
                    <a className='wip' href="/">Magento 2 / Adobe Commerce</a>
                </div>
            </button>
            <button className="button nav__button">
                Portfolio BigCommerce
                <div className="dropdown-content">
                    <a className='wip' href="/">BigCommerce</a>
                </div>
            </button>
        </nav>
    </header>
);

export default Header;
