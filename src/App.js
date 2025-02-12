/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from 'react';
import './App.scss';
import planetIcon from './assets/images/planet.svg';
import rocket1x from './assets/images/rocket@1x.png';
import rocket2x from './assets/images/rocket@2x.png';

import {
  INITIAL_MENU,
  INITIAL_HERO,
  INITIAL_JOURNEY,
  INITIAL_OFFERS,
} from './constants';

import extractLastWordForStyling from './utils/extractTextFromData';

const App = () => {
  const [menuItems] = useState(INITIAL_MENU);
  const [offers] = useState(INITIAL_OFFERS);
  const [journeyData] = useState(INITIAL_JOURNEY);
  const [heroData] = useState(INITIAL_HERO);

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
              aria-controls="navigation"
            >
              <span></span>
              <span></span>
              <span></span>
              <span className="sr-only">Toggle menu</span>
            </label>
            <nav
              className="navigation"
              id="navigation"
              aria-label="Main Navigation"
            >
              <ul className="navigation__list" role="menu">
                {menuItems.map((item, index) => (
                  <li
                    key={index}
                    className={`navigation__item ${
                      item.isIcon ? 'navigation__symbol' : ''
                    }`}
                    role="menuitem"
                  >
                    <a
                      href={item.link}
                      className={
                        item.isIcon
                          ? 'navigation__symbol-link'
                          : 'navigation__item-link'
                      }
                      tabIndex={0}
                    >
                      <span
                        className={
                          item.isIcon
                            ? 'navigation__symbol-text'
                            : 'navigation__text'
                        }
                      >
                        {item.name}
                      </span>
                      {item.isIcon && (
                        <div
                          className={`navigation__symbol-icon navigation__symbol-icon--${item.name.toLowerCase()}`}
                        ></div>
                      )}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </div>
      </header>
      <main className="main">
        <section className="hero">
          <div className="hero__content">
            <div className="hero__info">
              <h1 className="hero__title">
                {extractLastWordForStyling(heroData.title, 'hero__highlight')}
              </h1>
              <p className="hero__subtitle">
                {extractLastWordForStyling(heroData.text, 'hero__emphasis')}
              </p>
              <button className="hero__button">Learn more</button>
            </div>
            <div className="hero__planet"></div>
          </div>
        </section>
        <section className="offers">
          <div className="container">
            <h2 className="offers__title">Offers</h2>
            <ul className="offers__list">
              {offers?.map((article) => (
                <li
                  key={article.id}
                  className={`offers__item offers__item--${article.modifier}`}
                >
                  <article className="offers__article">
                    <div className="offers__text-container">
                      <h3 className="offers__item-title">{article.title}</h3>
                      <p className="offers__item-text">{article.text}</p>
                    </div>
                    <button className="offers__item-button">Learn more</button>
                  </article>
                </li>
              ))}
            </ul>
          </div>
        </section>
        <section className="journey">
          <div className="container">
            <div className="journey__content">
              <h2 className="journey__title">{journeyData?.title}</h2>
              <input
                type="checkbox"
                id="toggle-text"
                className="journey__checkbox"
              />
              <p className="journey__text">{journeyData?.text}</p>
              <label htmlFor="toggle-text" className="journey__link"></label>
            </div>
          </div>
        </section>
      </main>
      <footer className="footer">
        <div className="footer__content">
          <img
            srcSet={`${rocket1x} 1x, ${rocket2x} 2x`}
            src={rocket1x}
            alt="Rocket"
            className="footer__rocket"
          />
          <p className="footer__text">Exciting space adventure!</p>
        </div>
      </footer>
    </div>
  );
};

export default App;
