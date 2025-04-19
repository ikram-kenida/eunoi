import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/Login.css';
import loginImage from '../images/login.png'; // make sure image is in correct folder
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';

const SignUp = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    const userData = { username, email, password };  // Sending the entered username

    // Send user data to the backend for registration
    console.log("Sending registration data:", userData);

    fetch('http://localhost:5000/user/register', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(userData),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log('Registration successful:', data);
        // Handle successful registration (e.g., redirect to login page)
      })
      .catch((error) => {
        console.error('Error:', error);
        // Handle error (e.g., show an error message)
      });
  };

  return (
    <div className="container-fluid login vh-100">
      <div className="row h-100">
        {/* Left side - Sign Up Form */}
        <div className="col-md-6 d-flex justify-content-center align-items-center">
          <div className="col-12 col-md-10 col-lg-8 p-5 d-flex align-items-center justify-content-center">
            {/* Wrapper for centering content */}
            <div className="w-100">
              <h1 className="mb-5 title-login text-center">
                Sign <span style={{ color: '#8cccc9' }}>Up</span>
              </h1>
              <form onSubmit={handleSubmit}>
                <div className="form-group mb-4 position-relative">
                  <input
                    type="text"
                    className="form-control input-underline"
                    placeholder="Username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    required
                  />
                </div>

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
                    style={{ cursor: 'pointer' }}
                  >
                    <FontAwesomeIcon icon={showPassword ? faEyeSlash : faEye} />
                  </span>
                </div>

                <div className="form-group mt-5 mb-4 position-relative">
                  <input
                    type={showConfirmPassword ? 'text' : 'password'}
                    className="form-control input-underline pe-5"
                    placeholder="Confirm Password"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    required
                  />
                  <span
                    className="eye-icon"
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                    style={{ cursor: 'pointer' }}
                  >
                    <FontAwesomeIcon icon={showConfirmPassword ? faEyeSlash : faEye} />
                  </span>
                </div>

                <a href='/profile' type="submit" className="mt-5 btn btn-primary w-100">
                  Sign Up
                </a>
                <div className="text-center mt-3">
                  <span>Already have an account? </span>
                  <a href="/login" className="signup-link">
                    Log in
                  </a>
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

export default SignUp;
