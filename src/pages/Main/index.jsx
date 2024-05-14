import React from 'react';
import { Welcome } from './Welcome';
import './main.scss';
import { Bestsellers } from './Bestsellers';
import { Posts } from './Posts';
import { Comments } from './Comments';
import { Footer } from '../Footer';

function Home() {
  return (
    <main className="homepage">
      <Welcome />
      <Bestsellers />
      <Posts />
      <Comments />
      <Footer />
    </main>
  );
}

export { Home };
