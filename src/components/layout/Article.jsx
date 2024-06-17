import React from 'react';
import { Icons } from '../../components/icons/Icons';

function Post(props) {
  return (
    <div className="posts__wrapper">
      <div className="posts__header">
        <div className="posts__header-user">
          <img src={props.userpic} className="posts__header-icon" alt="icon" />
          <p className="posts__header_name">{props.user}</p>
        </div>
        <p className="posts__header_date">2022/22/8</p>
      </div>
      <img className="posts__wallpaper" src={props.img} alt="post-wallpaper" />
      <h6 className="posts__subtitle">{props.title}</h6>
      <p className="posts__text">{props.text}</p>
      <div className="posts__footer">
        <div className="posts__footer-icons">
          <p className="posts__like">
            <Icons className='shop-icon' name="like" color="#838383" size="15" />0
          </p>
          <p className="posts__view">
            <Icons className='shop-icon' name="eye" color="#838383" size="15" />0
          </p>
        </div>
        <a href="" className="posts__footer-link">
          Read more
        </a>
      </div>
    </div>
  );
}

export { Post };
