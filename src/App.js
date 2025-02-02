/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import './App.scss';
import planetIcon from './assets/images/planet.svg';
import cartIcon from './assets/images/cart.svg';

import space1x from './assets/images/space-main@1x.png';
import space2x from './assets/images/space-main@2x.png';
import space3x from './assets/images/space-main@3x.png';
import space4x from './assets/images/space-main@4x.png';

import earth1x from './assets/images/earth@1x.png';
import earth2x from './assets/images/earth@2x.png';
import earth3x from './assets/images/earth@3x.png';
import earth4x from './assets/images/earth@4x.png';

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
      <section className="hero">
        <div className="hero__background">
          <img
            alt="Space"
            className="hero__background-image"
            srcSet={`${space1x} 1x, ${space2x} 2x, ${space3x} 3x, ${space4x} 4x`}
            sizes="100vw"
            loading="lazy"
          />
        </div>
        <div className="hero__content">
          <img
            alt="Earth"
            className="hero__earth"
            srcSet={`${earth1x} 1x, ${earth2x} 2x, ${earth3x} 3x, ${earth4x} 4x`}
            sizes="(max-width: 600px) 300px, (max-width: 1200px) 500px, 700px"
          />
          <div className="hero__text">
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
        </div>
      </section>
    </div>
  );
};

export default App;
