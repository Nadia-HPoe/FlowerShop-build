import React from 'react';
import { Icons } from '../../icons/Icons';
import './navbar.scss';

function Navbar() {
  return (
    <header className="header">
      <div className="header__wrapper">
        <a href="/" className="header__logo">
          <span>Flower</span> Shop
        </a>

        <nav className="header__menu">
          <ul className="header__list">
            <li className="header__list-item">
              <a href="/" className="header__link">
                Home
              </a>
            </li>
            <li className="header__list-item">
              <a href="/" className="header__link">
                Shop
              </a>
            </li>
            <li className="header__list-item">
              <a href="/" className="header__link">
                Blog
              </a>
            </li>
            <li className="header__list-item">
              <a href="/" className="header__link">
                About
              </a>
            </li>
          </ul>
        </nav>
        <div className="header__button">
          <button className="header__login">
            <Icons name="login" color="#FF8F52" size="30" />
          </button>
          <button className="header__cart">
            {' '}
            <Icons name="cart" color="#FF8F52" size="30" />
          </button>
        </div>
      </div>
    </header>
  );
}
export { Navbar };
