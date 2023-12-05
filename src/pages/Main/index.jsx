import React from 'react';
import { Welcome } from './Welcome';
import './main.scss';
import { Bestsellers } from './Bestsellers';
import { Posts } from './Posts';
import { Comments } from './Comments';

function Home() {
  return (
    <main className="homepage">
      <Welcome />
      <Bestsellers />
      <Posts />
      <Comments />
    </main>
  );
}

export { Home };
