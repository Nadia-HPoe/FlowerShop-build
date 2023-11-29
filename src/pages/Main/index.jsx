import React from 'react';
import './main.scss';

function Home() {
  return (
    <main>
      <div className="welcome">
        <h1>Flowers, 🌻 what the world needs</h1>
        <p>Browse between hundreds of flowers</p>
        <button>Browse</button>
        <div>
          <img src="" alt="flower" />
          <img src="" alt="flower" />
          <img src="" alt="flower" />
          <img src="" alt="flower" />
          <img src="" alt="flower" />
          <img src="" alt="flower" />
        </div>
      </div>
      <div className="bestsellers">
        <h4>Bestsellers</h4>
        <img src="" alt="flower" />
        <img src="" alt="flower" />
        <img src="" alt="flower" />
        <img src="" alt="flower" />
      </div>
      <div className="posts">
        <h4>Latest Posts</h4>
      </div>
      <div className="comments">
        <h4>Comments</h4>
      </div>
    </main>
  );
}

export { Home };
