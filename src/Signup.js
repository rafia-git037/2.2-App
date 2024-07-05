import React, { useState } from 'react';
import './Signup.css';

const Signup = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log('Email:', email);
    console.log('Password:', password);
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
              <label>Enter your email:</label>
              <input 
                type="text" 
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
