import React from 'react';
import { Post } from '../../components/layout/Article';
import { Img1 } from '../../assets/images/fsh_artpic1.jpg';
import { Img2 } from '../../assets/images/fsh_artpic2.jpg';
import { Img3 } from '../../assets/images/fsh_artpic3.jpg';

const articles = [
  {
    id: 1,
    user: 'Emily',
    img: { Img1 },
    title: 'Best flowers for inside home',
    text: 'With their elegant vibrancy and soft, romantic detail, flowers help a house to feel more lively and fresh.😊',
  },
  {
    id: 2,
    user: 'John Smith',
    img: { Img2 },
    title: '4 Reasons You Should Have Fresh Flowers At Home',
    text: 'Fresh flowers can provide a soothing touch of natural beauty to your home, not only visually, but with the sweet fragrance of nature.',
  },
  {
    id: 3,
    user: 'HappySunny1995',
    img: { Img3 },
    title: 'Home Ecology of Flowers Study',
    text: 'The Home Ecology of Flowers Study at Harvard uncovered three main findings: 1. Flowers feed compassion...',
  },
];

function Posts() {
  const posts = articles.map((item, index) => <Post key={index} {...item} />);
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
