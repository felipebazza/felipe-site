import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

const Header = () => {
    const [isNavOpen, setIsNavOpen] = useState(false);
  
    const handleClick = () => {
        setIsNavOpen(!isNavOpen);
    };
  
    return (
        <header className="header">
            <button className={`toggle-nav ${isNavOpen ? 'active' : ''}`} onClick={handleClick}>
                <FontAwesomeIcon icon={faBars} />
            </button>
            <nav className={`navigation-menu ${isNavOpen ? 'open' : ''}`}>
                <button className="button nav__button">
                    Training Projects
                    <div className="dropdown-content">
                        <a href="https://felipebazza.github.io/indecision-app/" target="_blank">
                        Indecision App - React, Webpack, SASS
                        </a>
                        <a href="https://felipebazza.github.io/expensify-app/" target="_blank">
                        Expensify App - React, Redux, Webpack, SASS, Jest
                        </a>
                    </div>
                </button>
                <button className="button nav__button">
                    Portfolio Magento 2 / Adobe Commerce
                    <div className="dropdown-content">
                        <a className="wip" href="#">Magento 2 / Adobe Commerce</a>
                    </div>
                </button>
                <button className="button nav__button">
                    Portfolio BigCommerce
                    <div className="dropdown-content">
                        <a className="wip" href="#">BigCommerce</a>
                    </div>
                </button>
            </nav>
        </header>
    );
  };
  
  export default Header;
