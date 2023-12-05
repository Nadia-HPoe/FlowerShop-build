import React from 'react';

function Comment(props) {
  return (
    <div className="comment__wrapper">
      <div className="comment__user">
        <img src={props.userpic} className="comment__user-icon" alt="icon" />
        <p className="comment__user-name">{props.user}</p>
      </div>
      <p className="comment__text">{props.comment}</p>
      <div className="comment__rate"></div>
    </div>
  );
}

export { Comment };
