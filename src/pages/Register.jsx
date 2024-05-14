import React from 'react';
import { Link } from 'react-router-dom';
import { Icons } from '../components/icons/Icons';
import Image from '../assets/images/fsh_register.jpg';

function RegisterForm() {
  return (
    <div>
      <div className="register__wrapper">
        <div className="register__form">
          <h2>Register</h2>
          <p>Register and help us help you</p>
          <Link to="/">
            <Icons name="home" color="#ff8f52" size="10" />
            Back to Home
          </Link>
          <input type="email" placeholder="E-mail" />
          <input type="text" placeholder="Username" />
          <input type="password" placeholder="Password" />

          <button>Register</button>
          <div className="register__bottom-link">
            <p>Already have an account?</p>
            <Link to="/login"> Login</Link>
          </div>
        </div>
        <div className="register__image">
          <img src={Image} alt="flower" />
        </div>
      </div>
    </div>
  );
}

export { RegisterForm };
