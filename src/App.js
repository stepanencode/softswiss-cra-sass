/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import './App.scss';
import planetIcon from './assets/images/planet.svg';
import cartIcon from './assets/images/cart.svg';

const App = () => {
  return (
    <div className="app">
      <header className="header">
        <div className="header__logo">
          <img src={planetIcon} alt="Logo" className="header__logo-icon" />
          <span className="header__logo-text">GO</span>
        </div>
        <div className="menu">
          <input type="checkbox" id="menu-toggle" className="menu__toggle" />
          <label htmlFor="menu-toggle" className="menu__icon">
            <span></span>
            <span></span>
            <span></span>
          </label>
          <nav className="navigation">
            <a href="#" className="navigation__item">
              <span className="navigation__text">Home</span>
            </a>
            <a href="#" className="navigation__item">
              <span className="navigation__text">Products</span>
            </a>
            <a href="#" className="navigation__item navigation__cart">
              <span className="navigation__cart-text">Cart</span>
              <img
                src={cartIcon}
                alt="Cart"
                className="navigation__cart-icon"
              />
            </a>
          </nav>
        </div>
      </header>
    </div>
  );
};

export default App;
