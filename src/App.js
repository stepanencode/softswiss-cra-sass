/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import './App.scss';
import planetIcon from './assets/images/planet.svg';

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
                  <a href="#" className="navigation__cart-link" tabindex="0">
                    <span className="navigation__cart-text">Cart</span>
                    <div className="navigation__cart-icon"></div>
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>
      <section className="hero">
        <div className="hero__content">
          <h1 className="hero__title">
            Discover the vast expanses of{' '}
            <strong className="hero__highlight">space</strong>
          </h1>
          <p className="hero__subtitle">
            Where the possibilities are{' '}
            <span className="hero__emphasis">endless!</span>
          </p>
          <button className="hero__button">Learn more</button>
        </div>
      </section>
    </div>
  );
};

export default App;
