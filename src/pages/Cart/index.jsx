import React from 'react';
import { Icons } from '../../components/icons/Icons';
import './cart.scss';

const Cart = (props) => {
  return (
    <div className="cart-container">
      <div className="cart-wrapper cart-empty">
        <Icons
          className="shop-icon cart-icon"
          name="cart"
          color="#F2F2F2"
          size="250"
        />
      </div>
      <div className="cart-wrapper cart-full">
        <div className="cart-list">
          <p className="cart-list__text">Your Cart</p>
          <div className="cart-list__card">
            <div className="cart-list__card-item">
              <div className="cart-list__card-item_image">
                <img src={props.url} alt="flower" />
              </div>
              <div className="cart-list__card-item_info">
                <div>
                  <p className="cart-list__card-item_name">
                    {props.name}Sun flower
                  </p>
                  <p className="cart-list__card-item_text">
                    {props.info}sun lover flower
                  </p>
                </div>
                <div>
                  <p className="cart-list__card-item_price">
                    unit price 10${props.price}
                  </p>
                  <div className="cart-list__buttons">
                    <button className="cart-list__button-less">-</button>
                    <input
                      className="cart-list__amount-input"
                      type="text"
                      value="1"
                    />
                    <button className="cart-list__button-more">+</button>
                  </div>
                </div>
              </div>
            </div>
            <div className="cart-list__card-utility">
              <button className="cart-list__delete-btn">
                <Icons
                  className="shop-icon"
                  name="trash"
                  color="#838383"
                  size="19"
                />
              </button>
              <p className="cart-list__card-total">Total 10$</p>
            </div>
          </div>
        </div>
        <div className="cart-total">
          <p className="cart-total__text">
            Subtotal for 0 items: <span className="cart-total__price">0$</span>
          </p>
          <button className="cart-total__button">Checkout</button>
        </div>
      </div>
    </div>
  );
};

export { Cart };
