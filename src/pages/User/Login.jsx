import React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Icons } from '../../components/icons/Icons';
import Image from '../../assets/images/fsh_login.png';
import { Link } from 'react-router-dom';
import './user.scss';

function LoginForm() {
  return (
    <div className="login__wrapper">
      <div className="login__form-container">
        <div className="login__form-header">
          <div className="login__form-header_text">
            <h2 className="login__form-title">Login</h2>
            <p className="login__form-subtitle">Login and have more fun</p>
          </div>
          <Link to="/" className="login__form-header_link">
            <Icons
              className="shop-icon"
              name="home"
              color="#ff8f52"
              size="17"
            />
            Back to Home
          </Link>
        </div>
        <div className="login__form">
          <Box
            sx={{ '& > :not(style)': { m: 1 } }}
            className="login__form-box"
            component="form"
            noValidate
            autoComplete="off"
          >
            <TextField
              color="warning"
              fullWidth
              id="outlined-basic"
              label="Username"
            />
            <TextField
              color="warning"
              fullWidth
              id="outlined-password-input"
              label="Password"
              type="password"
              autoComplete="current-password"
            />
          </Box>
          <div className="login__form-check">
            <label className="control login__form-control">
              Remember me
              <input type="checkbox" />
              <div className="login__form-indicator"></div>
            </label>
          </div>
        </div>
        <button className="login__form-button">
          <Link to="/user" className="login__form-button_link">
            Login
          </Link>
        </button>
        <div className="login__bottom-text">
          <p>Do not have an account?</p>
          <Link to="/register" className="login__bottom-link">
            Register
          </Link>
        </div>
      </div>
      <div className="login__image">
        <img className="login__image-item" src={Image} alt="flower" />
      </div>
    </div>
  );
}

export { LoginForm };
