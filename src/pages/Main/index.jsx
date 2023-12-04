import React from 'react';
import { Welcome } from './Welcome';
import './main.scss';
import { Bestsellers } from './Bestsellers';
import { Posts } from './Posts';

function Home() {
  return (
    <main className="homepage">
      <Welcome />
      <Bestsellers />
      <Posts />
      <section className="comments">
        <h4>Comments</h4>
      </section>
    </main>
  );
}

export { Home };
