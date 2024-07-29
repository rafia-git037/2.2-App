// Login.js
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { handleError, handleSuccess } from '../utils';
import '../pages/Login.css';
import axios from 'axios';
import { useAuth } from '../AuthContext'; // Import useAuth

function Login() {
  const [loginInfo, setLoginInfo] = useState({
    email: '',
    password: ''
  });

  const navigate = useNavigate();
  const { login } = useAuth(); // Use login from AuthContext

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLoginInfo(prevState => ({ ...prevState, [name]: value }));
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    const { email, password } = loginInfo;
    if (!email || !password) {
      return handleError('Email and password are required');
    }
    if (password.length < 4) {
      return handleError('Password must be at least 4 characters long');
    }
    try {
      const url = `${process.env.REACT_APP_BACKEND_URL}/auth/login`;
      console.log('helllllllllllllllloo  Login URL:', url); // Debugging line
      const result =await axios.post(url, loginInfo);

      const { success, message, jwtToken, name, error } = result.data;
      if (success) {
        handleSuccess(message);
        localStorage.setItem('token', jwtToken);
        localStorage.setItem('loggedInUser', name);
        login(); // Update authentication status
        setTimeout(() => {
          navigate('/');
        }, 1000);
      } else if (error) {
        handleError(error.details[0].message);
      } else {
        handleError(message);
      }
    } catch (err) {
      handleError(err.message);
    }
  };

  return (
    <div className="login-background">
      <div className="login-container">
        <div className="login-left">
          <h2>Welcome Back!</h2>
          <p>Log in to continue your journey.</p>
        </div>
        <div className="login-right">
          <h1>Login</h1>
          <form onSubmit={handleLogin}>
            <div>
              <label htmlFor='email'>Email</label>
              <input
                onChange={handleChange}
                type='email'
                name='email'
                placeholder='Enter your email...'
                value={loginInfo.email}
              />
            </div>
            <div>
              <label htmlFor='password'>Password</label>
              <input
                onChange={handleChange}
                type='password'
                name='password'
                placeholder='Enter your password...'
                value={loginInfo.password}
              />
            </div>
            <button type='submit'>Login</button>
            <div className="forgot-password">
              <Link to="/forgot-password">Forgot Password?</Link>
            </div>
            <div className="signup">
              Don't have an account? <Link to="/signup">Signup</Link>
            </div>
          </form>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
}

export default Login;