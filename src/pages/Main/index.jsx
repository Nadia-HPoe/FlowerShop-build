import React from 'react';
import { Welcome } from './Welcome';

function Home() {
  return (
    <main className="homepage">
      <Welcome />

      <section className="bestsellers">
        <h4>Bestsellers</h4>
        <div className="bestsellers-card">
          <img src="" alt="flower" />
          <p>Daisy</p>
        </div>

        <img src="" alt="flower" />
        <img src="" alt="flower" />
        <img src="" alt="flower" />
      </section>
      <section className="posts">
        <h4>Latest Posts</h4>
      </section>
      <section className="comments">
        <h4>Comments</h4>
      </section>
    </main>
  );
}

export { Home };
