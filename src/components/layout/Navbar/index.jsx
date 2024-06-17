import React from 'react';
import { NavLink } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { Icons } from '../../icons/Icons';
import './navbar.scss';

function Navbar() {
  return (
    <header className="header">
      <div className="header__wrapper">
        <Link to="/" className="header__logo">
          <span>Flower</span> Shop
        </Link>

        <nav className="header__menu">
          <ul className="header__list">
            <li className="header__list-item">
              <NavLink to="/" className="header__link">
                Home
              </NavLink>
            </li>
            <li className="header__list-item">
              <NavLink to="/shop" className="header__link">
                Shop
              </NavLink>
            </li>
            <li className="header__list-item">
              <NavLink to="/blog" className="header__link">
                Blog
              </NavLink>
            </li>
            <li className="header__list-item">
              <a href="/" className="header__link">
                About
              </a>
            </li>
          </ul>
        </nav>
        <div className="header__button">
          <NavLink to="/login">
            <button className="header__login">
              <Icons name="login" color="#FF8F52" size="30" />
            </button>
          </NavLink>
          <NavLink to="/cart">
            <button className="header__cart">
              <Icons name="cart" color="#FF8F52" size="30" />
            </button>
          </NavLink>
        </div>
      </div>
    </header>
  );
}
export { Navbar };
