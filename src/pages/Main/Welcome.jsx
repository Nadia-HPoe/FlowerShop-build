import React from 'react';
import { Link } from 'react-router-dom';
import Image1 from '../../assets/images/fsh_flpic1.jpg';
import Image2 from '../../assets/images/fsh_flpic2.jpg';
import Image3 from '../../assets/images/fsh_flpic3.jpg';
import Image4 from '../../assets/images/fsh_flpic4.jpg';
import Image5 from '../../assets/images/fsh_flpic5.jpg';
import Image6 from '../../assets/images/fsh_flpic6.jpg';

import './main.scss';

function Welcome() {
  return (
    <section className="welcome-screen">
      <div className="welcome__wrapper">
        <div className="welcome">
          <h1 className="welcome__title">
            Flowers, 🌻 <br /> that the world <br /> needs
          </h1>
          <p className="welcome__text">Browse through hundreds of flowers</p>
          <Link to="/shop">
            <button className="welcome__button">Browse</button>
          </Link>
        </div>

        <div className="welcome__gallery">
          <img
            src={Image1}
            alt="flower"
            className="welcome__gallery-item img-fluid"
          />
          <img
            src={Image2}
            alt="flower"
            className="welcome__gallery-item img-fluid"
          />
          <img
            src={Image3}
            alt="flower"
            className="welcome__gallery-item img-fluid"
          />
          <img
            src={Image4}
            alt="flower"
            className="welcome__gallery-item img-fluid"
          />
          <img
            src={Image5}
            alt="flower"
            className="welcome__gallery-item img-fluid"
          />
          <img
            src={Image6}
            alt="flower"
            className="welcome__gallery-item img-fluid"
          />
        </div>
      </div>
    </section>
  );
}

export { Welcome };
