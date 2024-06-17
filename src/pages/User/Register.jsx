import React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Link } from 'react-router-dom';
import { Icons } from '../../components/icons/Icons';
import Image from '../../assets/images/fsh_register.jpg';
import './user.scss';

function RegisterForm() {
  return (
    <div className="register__wrapper">
      <div className="register__form-container">
        <div className="register__form-header">
          <div className="register__form-header_text">
            <h2 className="register__form-title">Register</h2>
            <p className="register__form-subtitle">
              Register and help us help you
            </p>
          </div>
          <Link to="/" className="register__form-header_link">
            <Icons
              className="shop-icon"
              name="home"
              color="#ff8f52"
              size="17"
            />
            Back to Home
          </Link>
        </div>
        <div className="register__form">
          <Box
            sx={{ '& > :not(style)': { m: 1 } }}
            className="register__form-box"
            component="form"
            noValidate
            autoComplete="off"
          >
            <TextField
              color="warning"
              fullWidth
              id="outlined-basic"
              label="E-mail"
              type="email"
            />
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
        </div>
        <div className="register__text">
          with registering you are accepting our <span>terms</span> and{' '}
          <span>privacy policy</span>
        </div>
        <button className="register__form-button">Register</button>
        <div className="register__bottom-text">
          <p>Already have an account?</p>
          <Link to="/login" className="register__bottom-link">
            Login
          </Link>
        </div>
      </div>
      <div className="register__image">
        <img className="register__image-item" src={Image} alt="flower" />
      </div>
    </div>
  );
}

export { RegisterForm };
