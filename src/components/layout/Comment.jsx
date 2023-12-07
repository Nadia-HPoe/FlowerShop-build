import React from 'react';
import { Icons } from '../icons/Icons';

function Comment(props) {
  return (
    <div className="comment__wrapper">
      <div className="comment__user">
        <img src={props.userpic} className="comment__user-icon" alt="icon" />
        <p className="comment__user-name">{props.user}</p>
      </div>
      <p className="comment__text">{props.comment}</p>
      <div className="comment__rate">
        <Icons name="star" color="#FF8F52" size="35" />
        <Icons name="star" color="#FF8F52" size="35" />
        <Icons name="star" color="#FF8F52" size="35" />
        <Icons name="star" color="#FF8F52" size="35" />
        <Icons name="star" color="#D9D9D9" size="35" />
      </div>
    </div>
  );
}

export { Comment };
