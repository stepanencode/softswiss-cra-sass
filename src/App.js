/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import './App.scss';
import planetIcon from './assets/images/planet.svg';
import cartIcon from './assets/images/cart.svg';

const App = () => {
  return (
    <div className="app">
      <header className="header">
        <div className="header__container">
          <div className="header__logo">
            <img src={planetIcon} alt="Logo" className="header__logo-icon" />
            <span className="header__logo-text">GO</span>
          </div>
          <div className="menu">
            <input
              type="checkbox"
              id="menu-toggle"
              className="menu__toggle"
              aria-hidden="true"
            />
            <label
              htmlFor="menu-toggle"
              className="menu__icon"
              role="button"
              aria-expanded="false"
              aria-controls="navigation"
            >
              <span></span>
              <span></span>
              <span></span>
              <span className="sr-only">Toggle menu</span>
            </label>
            <nav
              className="navigation"
              role="navigation"
              id="navigation"
              aria-label="Main Navigation"
            >
              <ul className="navigation__list" role="menu">
                <li className="navigation__item" role="menuitem">
                  <a href="#" className="navigation__item-link">
                    <span className="navigation__text">Home</span>
                  </a>
                </li>
                <li className="navigation__item" role="menuitem">
                  <a href="#" className="navigation__item-link">
                    <span className="navigation__text">Products</span>
                  </a>
                </li>
                <li
                  className="navigation__item navigation__cart"
                  role="menuitem"
                >
                  <a href="#" className="navigation__cart-link">
                    <span className="navigation__cart-text">Cart</span>
                    <img
                      src={cartIcon}
                      alt="Cart"
                      className="navigation__cart-icon"
                    />
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>
    </div>
  );
};

export default App;
