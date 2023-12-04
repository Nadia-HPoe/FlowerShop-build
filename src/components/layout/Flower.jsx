import React from 'react';
import { Icons } from '../icons/Icons';

function FlowerCard(props) {
  return (
    <div className="flower__wrapper">
      <img src={props.url} alt="flower" className="flower__image" />
      <p className="flower__name">{props.name}</p>
      <div className="flower__bottom">
        <p className="flower__price">{props.price}$</p>
        <button className="flower__button">
          <Icons name="cart" color="#FF8F52" size="15" />
          Add to cart
        </button>
      </div>
    </div>
  );
}

export { FlowerCard };
