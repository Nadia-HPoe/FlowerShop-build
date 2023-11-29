import React from 'react';
import Image1 from '../../assets/images/fsh_flpic1.jpg';
import './main.scss';

function Home() {
  return (
    <main className="homepage">
      <section className="welcome-screen">
        <div className="container">
          <div className="welcome__wrapper">
            <div className="welcome">
              <h1 className="welcome__title">
                Flowers, 🌻 that the world needs
              </h1>
              <p className="welcome__text">
                Browse between hundreds of flowers
              </p>
              <button className="welcome__button">Browse</button>
            </div>

            <div className="welcome__gallery">
              <img src={Image1} alt="flower" />
              <img src={Image1} alt="flower" />
              <img src={Image1} alt="flower" />
              <img src={Image1} alt="flower" />
              <img src={Image1} alt="flower" />
              <img src={Image1} alt="flower" />
            </div>
          </div>
        </div>
      </section>

      <section className="bestsellers">
        <h4>Bestsellers</h4>
        <img src="" alt="flower" />
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
