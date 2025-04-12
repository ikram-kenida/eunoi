import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/Login.css';


import loginImage from '../images/login.png'; // make sure image is in correct folder
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);


  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Email:', email, 'Password:', password);
    // Add your login logic here
  };

  return (
    <div className="container-fluid login vh-100">
      <div className="row h-100">
        {/* Left side - Login Form */}
        <div className="col-md-6 d-flex justify-content-center align-items-center">
        <div className="col-12 col-md-10 col-lg-8 p-5 d-flex align-items-center justify-content-center">
    {/* Wrapper for centering content */}
    <div className="w-100">
      <h1 className="mb-5 title-login text-center">Welcome Back!</h1>
      <form onSubmit={handleSubmit}>
      <div className="form-group mb-4 position-relative">
  <input
    type="email"
    className="form-control input-underline"
    placeholder="Email"
    value={email}
    onChange={(e) => setEmail(e.target.value)}
    required
  />
</div>

<div className="form-group mt-5 mb-4 position-relative">
  <input
    type={showPassword ? 'text' : 'password'}
    className="form-control input-underline pe-5"
    placeholder="Password"
    value={password}
    onChange={(e) => setPassword(e.target.value)}
    required
  />
  <span
    className="eye-icon"
    onClick={() => setShowPassword(!showPassword)}
    style={{ cursor: "pointer" }}
  >
    <FontAwesomeIcon icon={showPassword ? faEyeSlash : faEye} />
  </span>
</div>

        <button type="submit" className=" mt-5 btn btn-primary w-100">Login</button>
        <div className="text-center mt-3">
  <span>Don't have an account? </span>
  <a href="/signup" className="signup-link">Sign up</a>
</div>
      </form>
    </div>

  </div>
</div>


        {/* Right side - Image */}
        <div className="col-md-6 d-none d-md-flex align-items-center justify-content-center right-image">
          <img src={loginImage} alt="Login Visual" className="img-fluid" />
        </div>
      </div>
    </div>
  );
};

export default Login;
