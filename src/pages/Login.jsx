import React from 'react';
import { Icons } from '../components/icons/Icons';
import { Image } from '../assets/images/fsh_login';

function LoginForm() {
  return (
    <div>
      <div className="login__wrapper">
        <div className="login__form">
          <h2>Login</h2>
          <p>Login and have more fun</p>
          <p>
            <Icons name="home" color="#ff8f52" size="10" />
            Back to Home
          </p>
          <input type="text" placeholder="Username" />
          <input type="password" placeholder="Password" />
          <label>
            <input type="checkbox" />
            Remember me
          </label>
          <button>Login</button>
          <div className="login__bottom-link">
            <p>Do not have an account?</p>
            <a href="/"> Register</a>
          </div>
        </div>
        <div className="login__image">
          <img src={Image} alt="flower" />
        </div>
      </div>
    </div>
  );
}

export { LoginForm };
