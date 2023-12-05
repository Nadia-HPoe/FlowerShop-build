import React from 'react';
import { Post } from '../../components/layout/Article';
import { users } from '../../components/layout/userlist';

function Posts() {
  const posts = users.map((item, index) => <Post key={index} {...item} />);
  return (
    <section className="posts">
      <div className="posts__title">
        <hr className="posts__line" />
        <h4 className="posts__title-item">Latest Posts</h4>
        <hr className="posts__line" />
      </div>
      <div className="posts__card">{posts}</div>
    </section>
  );
}

export { Posts };
