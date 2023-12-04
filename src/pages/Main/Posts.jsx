import React from 'react';
import { Icons } from '../../components/icons/Icons';

function Posts() {
  return (
    <section className="posts">
      <h4 className="posts__title">Latest Posts</h4>
      <div className="posts__card">
        <div className="posts__header">
          <img className="posts__header-icon" alt="icon" />
          <p className="posts__header_name">Emily</p>
          <p className="posts__header_date">2022/22/8</p>
        </div>
        <img className="posts__wallpaper" alt="post_wallpaper" />
        <h6 className="posts__subtitle">Best flowers for inside home</h6>
        <p className="posts__text">
          With their elegant vibrancy and soft, romantic detail, flowers help a
          house to feel more lively and fresh. 😊
        </p>
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
    </section>
  );
}

export { Posts };
