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
        <input
          type="checkbox"
          id="menu-toggle"
          className="header__menu-toggle"
        />
        <label htmlFor="menu-toggle" className="header__menu-icon">
          <span></span>
          <span></span>
          <span></span>
        </label>
        <nav className="header__nav">
          <a href="#" className="header__nav-item">
            <span className="header__nav-text">Home</span>
          </a>
          <a href="#" className="header__nav-item">
            <span className="header__nav-text">Products</span>
          </a>
          <a href="#" className="header__nav-item header__cart">
            <span className="header__cart-text">Cart</span>
            <img src={cartIcon} alt="Cart" className="header__cart-icon" />
          </a>
        </nav>
      </header>
    </div>
  );
};

export default App;
