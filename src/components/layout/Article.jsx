import React from 'react';
import { Icons } from '../../components/icons/Icons';
import { UserPic } from '../../assets/images/fsh_userpic1.jpg';

function Post(props) {
  return (
    <div className="posts__wrapper">
      <div className="posts__header">
        <img src={UserPic} className="posts__header-icon" alt="icon" />
        <p className="posts__header_name">{props.user}</p>
        <p className="posts__header_date">2022/22/8</p>
      </div>
      <img className="posts__wallpaper" src={props.img} alt="post-wallpaper" />
      <h6 className="posts__subtitle">{props.title}</h6>
      <p className="posts__text">{props.text}</p>
      <div className="posts__footer">
        <p>
          <Icons name="like" color="#838383" size="15" />
        </p>
        <p>
          <Icons name="eye" color="#838383" size="15" />
        </p>
        <a>Read more</a>
      </div>
    </div>
  );
}

export { Post };
