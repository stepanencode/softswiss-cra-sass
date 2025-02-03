/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import './App.scss';
import planetIcon from './assets/images/planet.svg';
import rocketIcon from './assets/images/rocket.svg';

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
                  <a href="#" className="navigation__item-link" tabIndex={0}>
                    <span className="navigation__text">Home</span>
                  </a>
                </li>
                <li className="navigation__item" role="menuitem">
                  <a href="#" className="navigation__item-link" tabIndex={0}>
                    <span className="navigation__text">Products</span>
                  </a>
                </li>
                <li
                  className="navigation__item navigation__cart"
                  role="menuitem"
                >
                  <a href="#" className="navigation__cart-link" tabIndex={0}>
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
      <section className="offers">
        <div className="container">
          <h2 className="offers__title">Offers</h2>
          <ul className="offers__list">
            <li className="offers__item">
              <article className="offers__article">
                <div className="offers__text-container">
                  <h3 className="offers__item-title">
                    Move the borders of reality!
                  </h3>
                  <p className="offers__item-text">
                    Go on a space adventure - it’s possible with us!
                  </p>
                </div>
                <button className="offers__item-button">Learn more</button>
              </article>
            </li>
            <li className="offers__item">
              <article className="offers__article">
                <div className="offers__text-container">
                  <h3 className="offers__item-title">
                    Space is not just stars and planets
                  </h3>
                  <p className="offers__item-text">
                    It is a majestic journey to explore.
                  </p>
                </div>
                <button className="offers__item-button">Learn more</button>
              </article>
            </li>
            <li className="offers__item">
              <article className="offers__article">
                <div className="offers__text-container">
                  <h3 className="offers__item-title">
                    For those who dream of stars
                  </h3>
                  <p className="offers__item-text">
                    Our offer: make your dream come true.
                  </p>
                </div>
                <button className="offers__item-button">Learn more</button>
              </article>
            </li>
            <li className="offers__item">
              <article className="offers__article">
                <div className="offers__text-container">
                  <h3 className="offers__item-title">
                    Fulfill your fantastic dreams
                  </h3>
                  <p className="offers__item-text">
                    Space has never been so close.
                  </p>
                </div>
                <button className="offers__item-button">Learn more</button>
              </article>
            </li>
          </ul>
        </div>
      </section>
      <section className="journey">
        <div className="container">
          <div className="journey__content">
            <h2 className="journey__title">Embark on a space journey</h2>
            <p className="journey__text">
              Travelling into space is one of the most exciting and
              unforgettable adventures that can change your life forever. And if
              you have ever dreamed of exploring stars, planets and galaxies,
              then our company is ready to help you realize this dream. We offer
              a unique experience that will allow you to go on a space journey
              and see all the secrets of the universe. We guarantee that every
              moment in space will be filled with incredible impressions,
              excitement and new discoveries. Our team of professionals takes
              care of your safety and comfort so that you can fully enjoy your
              adventure in space. We offer various options for space excursions.
            </p>
            <a href="#" className="journey__link">
              Read more
            </a>
          </div>
        </div>
      </section>
      <footer class="footer">
        <div class="footer__content">
          <img src={rocketIcon} alt="Rocket" class="footer__rocket" />
          <p class="footer__text">Exciting space adventure!</p>
        </div>
      </footer>
    </div>
  );
};

export default App;
