/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from 'react';
import './App.scss';
import planetIcon from './assets/images/planet.svg';
import rocketIcon from './assets/images/rocket.svg';

const INITIAL_MENU = [
  { name: 'Home', link: '#', isIcon: false },
  { name: 'Products', link: '#', isIcon: false },
  { name: 'Cart', link: '#', isIcon: true },
];

const INITIAL_HERO = {
  id: 98,
  title: 'Discover the vast expanses of space',
  text: 'Where the possibilities are endless!',
};

const INITIAL_OFFERS = [
  {
    id: 1,
    title: 'Move the borders of reality!',
    text: 'Go on a space adventure - it’s possible with us!',
    modifier: 'move',
  },
  {
    id: 2,
    title: 'Space is not just stars and planets',
    text: 'It is a majestic journey to explore.',
    modifier: 'space',
  },
  {
    id: 3,
    title: 'For those who dream of stars',
    text: 'Our offer: make your dream come true.',
    modifier: 'stars',
  },
  {
    id: 4,
    title: 'Fulfill your fantastic dreams',
    text: 'Space has never been so close.',
    modifier: 'dreams',
  },
];

const INITIAL_JOURNEY = {
  id: 15,
  title: 'Embark on a space journey',
  text: 'Travelling into space is one of the most exciting and unforgettable adventures that can change your life forever. And if you have ever dreamed of exploring stars, planets and galaxies, then our company is ready to help you realize this dream. We offer a unique experience that will allow you to go on a space journey and see all the secrets of the universe. We guarantee that every moment in space will be filled with incredible impressions, excitement and new discoveries. Our team of professionals takes care of your safety and comfort so that you can fully enjoy your adventure in space. We offer various options for space excursions.',
};

const App = () => {
  const [menuItems, setMenuItems] = useState(INITIAL_MENU);
  const [offers, setOffers] = useState(INITIAL_OFFERS);
  const [journeyData, setJourneyData] = useState(INITIAL_JOURNEY);
  const [heroData, setHeroData] = useState(INITIAL_HERO);

  const extractLastWordForStyling = (text, className) => {
    if (!text?.trim()) return '';
    const words = text.trim().split(' ');
    return (
      <>
        {words.slice(0, -1).join(' ')}{' '}
        <span className={className}>{words.at(-1)}</span>
      </>
    );
  };
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
          <img src={rocketIcon} alt="Rocket" className="footer__rocket" />
          <p className="footer__text">Exciting space adventure!</p>
        </div>
      </footer>
    </div>
  );
};

export default App;
