import React, { useState } from 'react';
import './Signup.css';

const Signup = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch('http://localhost:8000/api/signup', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name, email, password }),
    });

    const data = await response.json();
    if (response.ok) {
      console.log('User created successfully:', data);
      // Handle successful signup (e.g., redirect to login page)
    } else {
      console.error('Signup error:', data.message);
    }
  };

  return (
    <div className="signup-background">
      <div className="signup-container">
        <div className="signup-left">
          <h2>Create Account</h2>
          <p>Please sign up using your personal information.</p>
        </div>
        <div className="signup-right">
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
              <label>Create password:</label>
              <input 
                type="password" 
                value={password} 
                onChange={(e) => setPassword(e.target.value)} 
                required 
              />
            </div>
            <button type="submit">Sign Up</button>
          </form>
          <div className="login">
            <a href="/login">Login</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
