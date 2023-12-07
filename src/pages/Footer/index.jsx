import React from 'react';
import { Icons } from '../../components/icons/Icons';
import './footer.scss';

function Footer() {
  return (
    <footer>
      <div className="footer__wrapper">
        <div className="footer__info">
          <h3 className="footer__info-title">
            <span>Flower</span> Shop
          </h3>
          <p className="footer__info-text">
            Some random stuff about flower shop and some more info cuz this box
            had to get fill Some random stuff about flower shop and some more
            info cuz this box had to get fill Some random stuff about flower
            shop and some more info cuz this box had to get fill
          </p>
        </div>
        <div className="footer__nav">
          <h6 className="footer__nav-title">Links</h6>
          <ul className="footer__list">
            <li className="footer__list-item">
              <a href="/" className="footer__link">
                Home
              </a>
            </li>
            <li className="footer__list-item">
              <a href="/" className="footer__link">
                Shop
              </a>
            </li>
            <li className="footer__list-item">
              <a href="/" className="footer__link">
                Blog
              </a>
            </li>
            <li className="footer__list-item">
              <a href="/" className="footer__link">
                About
              </a>
            </li>
          </ul>
        </div>
        <div className="footer__nav">
          <h6 className="footer__nav-title">Links</h6>
          <ul className="footer__list">
            <li className="footer__list-item">
              <a href="/" className="footer__link">
                Home
              </a>
            </li>
            <li className="footer__list-item">
              <a href="/" className="footer__link">
                Shop
              </a>
            </li>
            <li className="footer__list-item">
              <a href="/" className="footer__link">
                Blog
              </a>
            </li>
            <li className="footer__list-item">
              <a href="/" className="footer__link">
                About
              </a>
            </li>
          </ul>
        </div>
        <div className="footer__contact">
          <h6 className="footer__contact-title">Contacts</h6>
          <p>
            <Icons name="location" color="#838383" size="15" />
            26985 Brighton Lane, Lake Forest, CA
          </p>
          <p>
            <Icons name="mail" color="#838383" size="15" />
            support@Flowers.com
          </p>
          <p>
            <Icons name="phone" color="#838383" size="15" />
            +1 236 5489
          </p>
        </div>
      </div>
    </footer>
  );
}

export { Footer };
