import React from 'react';
import { Link } from 'react-router-dom';
import UserPic from '../../assets/images/fsh_userpic1.jpg';
import { Icons } from '../../components/icons/Icons';
const UserPage = () => {
  return (
    <div className="user__container">
      <div className="user__wrapper">
        <div className="user__info">
          <div className="user__info-main">
            <div className="user__info-img">
              <img src={UserPic} alt="pic" className="user__info-img_item" />
            </div>
            <div className="user__info-text">
              <p className="user__info-name">Emily Smith</p>
              <Link to="/login" className="user__info-button">
                Log Out
              </Link>
            </div>
          </div>
          <div className="user__menu">
            <ul className="user__menu-list">
              <li className="user__menu-item">
                <Icons
                  className="shop-icon"
                  name="dashboard"
                  color="#838383"
                  size="20"
                />
                Dashboard
              </li>
              <li className="user__menu-item">
                <Icons
                  className="shop-icon"
                  name="order"
                  color="#838383"
                  size="20"
                />
                Orders
              </li>
              <li className="user__menu-item">
                <Icons
                  className="shop-icon"
                  name="login"
                  color="#838383"
                  size="20"
                />
                My information
              </li>
              <li className="user__menu-item">
                <Icons
                  className="shop-icon"
                  name="comment"
                  color="#838383"
                  size="20"
                />
                Comments
              </li>
            </ul>
          </div>
          <div className="user__menu-contact">
            <a className="user__menu-contact_link">
              <Icons
                className="user-icon"
                name="question"
                color="#838383"
                size="20"
              />
              Contact with us
            </a>
          </div>
        </div>
        <div className="user__board">
          <h4 className="user__board-title">Dashboard</h4>
          <div className="user__board-container"></div>
        </div>
      </div>
    </div>
  );
};
export { UserPage };
