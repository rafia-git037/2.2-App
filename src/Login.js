import React, { useState } from 'react';
import './Login.css';

const Login = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState(''); // State to hold success or error message

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:8000/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ name, email, password })
      });

      const data = await response.json();

      if (response.ok) {
        setMessage('Login successful!'); // Set success message
        // Clear input fields
        setName('');
        setEmail('');
        setPassword('');
      } else {
        setMessage(data.message); // Set error message
      }
    } catch (error) {
      console.error('Error:', error);
      setMessage('Error: ' + error.message); // Set error message
    }
  };

  return (
    <div className="login-background">
      <div className="login-container">
        <div className="login-left">
          <h2>Welcome Back</h2>
          <p>Please log in using your personal information to stay connected with us.</p>
        </div>
        <div className="login-right">
          <form onSubmit={handleSubmit}>
            <div>
              <label>Enter your name:</label>
              <input 
                type="text" 
                value={name} 
                onChange={(e) => setName(e.target.value)} 
                required 
              />
            </div>
            <div>
              <label>Enter your email:</label>
              <input 
                type="email" 
                value={email} 
                onChange={(e) => setEmail(e.target.value)} 
                required 
              />
            </div>
            <div>
              <label>Password:</label>
              <input 
                type="password" 
                value={password} 
                onChange={(e) => setPassword(e.target.value)} 
                required 
              />
            </div>
            <div className="forgot-password">
              <a href="#">Forgot password?</a>
            </div>
            <button type="submit">Log In</button>
          </form>
          {message && <p>{message}</p>} {/* Display success or error message */}
          <div className="signup">
            <a href="/signup">Signup</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
