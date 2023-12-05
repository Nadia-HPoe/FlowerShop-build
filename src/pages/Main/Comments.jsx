import React from 'react';
import { users } from '../../components/layout/userlist';
import { Comment } from '../../components/layout/Comment';

function Comments() {
  const comments = users.map((item, index) => (
    <Comment key={index} {...item} />
  ));
  return (
    <section className="comments">
      <div className="comment__title">
        <hr className="comment__line" />
        <h4 className="comment__title-item">Comments</h4>
        <hr className="comment__line" />
      </div>
      <div className="comment__card">{comments}</div>
    </section>
  );
}

export { Comments };
